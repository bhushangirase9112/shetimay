// Build static Marathi and Hindi pages from the homepage translation dictionaries.
// Run with: node scripts/build-locales.cjs
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace(/^\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+">\r?\n/gm, '');

function readObject(sourceText, pattern, label) {
  const match = sourceText.match(pattern);
  if (!match) throw new Error(`Could not find ${label} in index.html`);
  return vm.runInNewContext(`(${match[1]})`);
}

const translations = readObject(source, /const translations=(\{[\s\S]*?\});\s+const languageSelect=/, 'translation dictionaries');
const imageLabels = readObject(source, /const imageLabels=(\{[\s\S]*?\});\s+const contentImages=/, 'image labels');
const pageMeta = {
  mr: {
    title: 'शेतिमाय | खपली गहू, बियाणे आणि शेतकरी भागीदारी',
    description: 'शेतिमाय धुळे, महाराष्ट्रातील शेतकरी, व्यापारी आणि अन्न उद्योगांना जोडते. खपली गहू हे मुख्य पीक असून आम्ही गव्हाचे इतर प्रकार आणि मका देखील खरेदी करतो. बियाणे, शेतकऱ्यांकडून थेट खरेदी, कमी किंवा मोठ्या प्रमाणातील पुरवठ्यासाठी संपर्क साधा.',
    ogTitle: 'शेतिमाय | खपली गहू, गहू आणि मक्याची खरेदी'
  },
  hi: {
    title: 'शेतिमय | खपली गेहूँ, बीज और किसान साझेदारी',
    description: 'शेतिमय धुले, महाराष्ट्र के किसानों, व्यापारियों और खाद्य व्यवसायों को जोड़ता है। खपली गेहूँ मुख्य फसल है; हम गेहूँ की अन्य किस्में और मक्का भी खरीदते हैं। बीज, किसानों से सीधी खरीद और कम या थोक मात्रा के लिए संपर्क करें।',
    ogTitle: 'शेतिमय | खपली गेहूँ, गेहूँ और मक्का की खरीद'
  }
};
const alternatives = [
  ['en-IN', 'https://shetimay.in/'],
  ['mr-IN', 'https://shetimay.in/mr/'],
  ['hi-IN', 'https://shetimay.in/hi/'],
  ['x-default', 'https://shetimay.in/']
].map(([locale, url]) => `  <link rel="alternate" hreflang="${locale}" href="${url}">`).join('\n');
const languageRouteHandler = "languageSelect.addEventListener('change',event=>{let base=location.pathname.replace(/(?:mr|hi)\\/(?:index\\.html)?$/,'').replace(/index\\.html$/,'');if(!base.endsWith('/'))base+='/';const routes={en:base+'index.html',mr:base+'mr/index.html',hi:base+'hi/index.html'};location.assign(routes[event.target.value]||routes.en)});";

function escapeText(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function localizedPage(language) {
  const dictionary = translations[language];
  const metadata = pageMeta[language];
  let page = source;
  const bodyStart = page.indexOf('<body>') + '<body>'.length;
  const bodyEnd = page.lastIndexOf('</body>');
  const scriptStart = page.lastIndexOf('  <script>', bodyEnd);
  if (bodyStart < '<body>'.length || scriptStart < bodyStart) throw new Error('Could not isolate homepage content');

  const localizedBody = page.slice(bodyStart, scriptStart).replace(/>([^<>]+)</g, (whole, text) => {
    const key = text.trim().replace(/\s+/g, ' ');
    return Object.hasOwn(dictionary, key) ? `>${text.match(/^\s*/)[0]}${escapeText(dictionary[key])}${text.match(/\s*$/)[0]}<` : whole;
  });
  page = page.slice(0, bodyStart) + localizedBody + page.slice(scriptStart);

  page = page.replace('<html lang="en">', `<html lang="${language}">`);
  page = page.replace('<title>Shetimay | Emmer (Khapli) Wheat Sourcing & Farmer Partnerships</title>', `<title>${metadata.title}</title>`);
  page = page.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${metadata.description}">`);
  page = page.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${metadata.ogTitle}">`);
  page = page.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${metadata.description}">`);
  page = page.replace('<meta property="og:url" content="https://shetimay.in/">', `<meta property="og:url" content="https://shetimay.in/${language}/">`);
  page = page.replace('<link rel="canonical" href="https://shetimay.in/">', `<link rel="canonical" href="https://shetimay.in/${language}/">`);
  page = page.replace('</head>', `${alternatives}\n</head>`);

  const languageName = language === 'mr' ? 'मराठी' : 'हिन्दी';
  page = page.replace(`<option value="${language}">${languageName}</option>`, `<option value="${language}" selected>${languageName}</option>`);

  for (let index = 0; index < imageLabels.en.length; index += 1) {
    page = page.replace(`alt="${imageLabels.en[index]}"`, `alt="${imageLabels[language][index]}"`);
  }
  page = page.replace('alt="A farmer\'s crop and field from the Shetimay grower network"', `alt="${imageLabels[language][3]}"`);

  page = page.replace("languageSelect.addEventListener('change',event=>{const routes={en:'/',mr:'/mr/',hi:'/hi/'};window.location.assign(routes[event.target.value]||'/')});", languageRouteHandler);
  page = page.replace(/try\{const savedLanguage=localStorage\.getItem\('shetimay-language'\);if\(savedLanguage&&\['en','mr','hi'\]\.includes\(savedLanguage\)\)changeLanguage\(savedLanguage\)\}catch\(e\)\{\}/, `changeLanguage('${language}')`);
  page = page.replace('\n  </script>\n</body>', `\n    changeLanguage('${language}');\n  </script>\n</body>`);
  return page;
}

for (const language of ['mr', 'hi']) {
  const directory = path.join(root, language);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), localizedPage(language), 'utf8');
}

const updatedRoot = source
  .replace('</head>', `${alternatives}\n</head>`)
  .replace("languageSelect.addEventListener('change',event=>{const routes={en:'/',mr:'/mr/',hi:'/hi/'};window.location.assign(routes[event.target.value]||'/')});", languageRouteHandler)
  .replace(/try\{const savedLanguage=localStorage\.getItem\('shetimay-language'\);if\(savedLanguage&&\['en','mr','hi'\]\.includes\(savedLanguage\)\)changeLanguage\(savedLanguage\)\}catch\(e\)\{\}/, '');
fs.writeFileSync(path.join(root, 'index.html'), updatedRoot, 'utf8');

// The original translation dictionaries in index.html may be edited separately;
// restore the complete static locale pages after the shared shell is generated.
require('./rebuild-marathi.cjs');
require('./rebuild-hindi.cjs');
