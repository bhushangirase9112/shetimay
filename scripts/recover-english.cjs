const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const hindiPage = fs.readFileSync(path.join(root, 'hi', 'index.html'), 'utf8');
const hindiBuilder = fs.readFileSync(path.join(__dirname, 'rebuild-hindi.cjs'), 'utf8');
const match = hindiBuilder.match(/const hi = (\{[\s\S]*?\n\});/);
if (!match) throw new Error('Could not read Hindi translations for recovery');
const translations = vm.runInNewContext(`(${match[1]})`);
translations['Talk to our team'] = 'हमारी टीम से बात करें';
translations["I'm a buyer"] = 'मैं खरीदार हूँ';
translations["I'm a farmer"] = 'मैं किसान हूँ';
translations["I'm a farmer — get in touch →"] = 'मैं किसान हूँ • संपर्क करें';

const reverse = new Map();
for (const [english, hindi] of Object.entries(translations)) {
  if (!reverse.has(hindi)) reverse.set(hindi, english);
}
for (const [hindi, english] of [
  ['तावखेड़ा, शिंदखेड़ा, धुले', 'Tawkheda, Shindkheda, Dhule'],
  ['तावखेड़ा, धुले, महाराष्ट्र, भारत', 'Tawkheda, Dhule, Maharashtra, India'],
  ['महाराष्ट्र ४२५४०८, भारत', 'Maharashtra 425408, India'],
  ['☎', '☎'], ['✉', '✉'], ['⌖', '⌖'], ['→', '→'], ['↗', '↗'], ['•', '•']
]) reverse.set(hindi, english);
reverse.set('हमारी टीम से बात करें', 'Talk to our team');
reverse.set('मैं खरीदार हूँ', "I'm a buyer");
reverse.set('मैं किसान हूँ', "I'm a farmer");
reverse.set('मैं किसान हूँ • संपर्क करें', "I'm a farmer — get in touch");

const bodyStart = hindiPage.indexOf('<body>') + '<body>'.length;
const bodyEnd = hindiPage.lastIndexOf('</body>');
const scriptStart = hindiPage.lastIndexOf('  <script>', bodyEnd);
let body = hindiPage.slice(bodyStart, scriptStart);
const misses = new Set();
body = body.replace(/>([^<>]+)</g, (whole, text) => {
  const normalized = text.trim().replace(/\s+/g, ' ');
  const english = reverse.get(normalized);
  if (english) return `>${text.match(/^\s*/)[0]}${english}${text.match(/\s*$/)[0]}<`;
  if (/[\u0900-\u097f]/.test(normalized)) misses.add(normalized);
  return whole;
});
for (const [before, after] of [
  ['Farmer partnerships � Agricultural sourcing � Dhule, Maharashtra', 'Farmer partnerships • Agricultural sourcing • Dhule, Maharashtra'],
  ['Based in Dhule, Maharashtra � Focused on Emmer (Khapli) wheat', 'Based in Dhule, Maharashtra • Focused on Emmer (Khapli) wheat'],
  ['Emmer wheat � Khapli gahu', 'Emmer wheat • Khapli gahu'],
  ['Emmer wheat�known locally as Khapli gahu�is Shetimay�s', "Emmer wheat—known locally as Khapli gahu—is Shetimay's"],
  ['I�m a buyer', "I'm a buyer"], ['I�m a farmer', "I'm a farmer"],
  ['I�m a farmer � get in touch ?', "I'm a farmer — get in touch"],
  ['We�ll', "We'll"], ['we�ll', "we'll"], ['what�s', "what's"], ['you�re', "you're"], ['Let�s', "Let's"],
  ['Talk to our team ?', 'Talk to our team'],
  ['Enquire about Emmer wheat ?', 'Enquire about Emmer wheat'],
  ['Enquire about wheat ?', 'Enquire about wheat'],
  ['Enquire about maize ?', 'Enquire about maize'],
  ['Discuss farming with us ?', 'Discuss farming with us'],
  ['Discuss a buying requirement ?', 'Discuss a buying requirement'],
  ['Send a buyer enquiry ?', 'Send a buyer enquiry'],
  ['Instagram ?', 'Instagram'],
  ['>� <span id="year">', '>© <span id="year">'],
]) body = body.replaceAll(before, after);

let page = hindiPage.slice(0, bodyStart) + body + hindiPage.slice(scriptStart);
page = page.replace('<html lang="hi">', '<html lang="en">');
page = page.replace('<title>शेतिमाय | खपली गेहूँ, गेहूँ और मक्का की खरीद</title>', '<title>Shetimay | Emmer (Khapli) Wheat Sourcing & Farmer Partnerships</title>');
page = page.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Shetimay Farmer Producer Company in Dhule, Maharashtra sources Emmer (Khapli) wheat, other wheat varieties and maize from farmers. Farmers can discuss seeds and direct procurement; merchants and companies can enquire about small lots or bulk supply, raw or processed.">');
page = page.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="Shetimay | Emmer Wheat from Farmer Partnerships">');
page = page.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="Source Emmer (Khapli) wheat, other wheat varieties and maize through farmer partnerships with Shetimay in Maharashtra.">');
page = page.replace('<meta property="og:url" content="https://shetimay.in/hi/">', '<meta property="og:url" content="https://shetimay.in/">');
page = page.replace('<link rel="canonical" href="https://shetimay.in/hi/">', '<link rel="canonical" href="https://shetimay.in/">');
page = page.replace('<option value="en">English</option>', '<option value="en" selected>English</option>');
page = page.replace('<option value="hi" selected>हिंदी</option>', '<option value="hi">हिंदी</option>');
page = page.replace('<small>किसान उत्पादक कंपनी</small>', '<small>FARMER PRODUCER COMPANY</small>');
page = page.replace('alt="शेतिमाय का लोगो"', 'alt="Shetimay logo"');
page = page.replace('alt="महाराष्ट्र में उगाया जाने वाला खपली गेहूँ"', 'alt="Khapli, also known as Emmer wheat, grown in Maharashtra"');
page = page.replace('alt="खपली गेहूँ"', 'alt="Emmer wheat, called Khapli gahu locally"');
page = page.replace('alt="शेतिमाय किसान समूह के खेत और फसल"', 'alt="A farmer\'s crop and field from the Shetimay grower network"');
page = page.replace(/\n\s*changeLanguage\('hi'\);\s*(?=\n\s*<\/script>)/, '');
page = page.replace("if(language!=='hi') document.title='Shetimay | Emmer (Khapli) Wheat Sourcing & Farmer Partnerships';", "document.title='Shetimay | Emmer (Khapli) Wheat Sourcing & Farmer Partnerships';");
page = page.replace(/\n\s*changeLanguage\('hi'\);\s*(?=\n\s*<\/script>)/, '');
fs.writeFileSync(path.join(root, 'index.html'), page, 'utf8');
console.log(`Recovered English homepage. Unmapped Hindi body text: ${[...misses].join(' | ')}`);
