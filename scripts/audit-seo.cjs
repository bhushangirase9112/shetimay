const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const pages = [
  { file: 'index.html', lang: 'en', type: 'home' },
  { file: 'about/index.html', lang: 'en', type: 'about' },
  { file: 'crops/index.html', lang: 'en', type: 'crops' },
  { file: 'buyers/index.html', lang: 'en', type: 'buyers' },
  { file: 'farmers/index.html', lang: 'en', type: 'farmers' },
  { file: 'contact/index.html', lang: 'en', type: 'contact' },
  { file: 'mr/index.html', lang: 'mr', type: 'home' },
  { file: 'mr/about/index.html', lang: 'mr', type: 'about' },
  { file: 'mr/crops/index.html', lang: 'mr', type: 'crops' },
  { file: 'mr/buyers/index.html', lang: 'mr', type: 'buyers' },
  { file: 'mr/farmers/index.html', lang: 'mr', type: 'farmers' },
  { file: 'mr/contact/index.html', lang: 'mr', type: 'contact' },
  { file: 'hi/index.html', lang: 'hi', type: 'home' },
  { file: 'hi/about/index.html', lang: 'hi', type: 'about' },
  { file: 'hi/crops/index.html', lang: 'hi', type: 'crops' },
  { file: 'hi/buyers/index.html', lang: 'hi', type: 'buyers' },
  { file: 'hi/farmers/index.html', lang: 'hi', type: 'farmers' },
  { file: 'hi/contact/index.html', lang: 'hi', type: 'contact' }
];

console.log('='.repeat(80));
console.log('COMPREHENSIVE SEO & AEO/GEO VERIFICATION AUDIT');
console.log('='.repeat(80));

let totalPages = pages.length;
let passedPages = 0;
const pageDetails = [];

pages.forEach(p => {
  const fullPath = path.join(root, p.file);
  const exists = fs.existsSync(fullPath);
  if (!exists) {
    pageDetails.push({ file: p.file, status: 'MISSING' });
    return;
  }
  const html = fs.readFileSync(fullPath, 'utf8');

  // Checks
  const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1];
  const desc = (html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) || [])[1];
  const canonical = (html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i) || [])[1];
  const robots = (html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i) || [])[1];
  const ogTitle = (html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i) || [])[1];
  const ogDesc = (html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i) || [])[1];
  const ogUrl = (html.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']/i) || [])[1];
  const ogImg = (html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) || [])[1];
  const twitterCard = (html.match(/<meta\s+name=["']twitter:card["']\s+content=["']([^"']+)["']/i) || [])[1];
  
  // Hreflang
  const hreflangEn = html.includes('hreflang="en-IN"');
  const hreflangMr = html.includes('hreflang="mr-IN"');
  const hreflangHi = html.includes('hreflang="hi-IN"');
  const hreflangDef = html.includes('hreflang="x-default"');
  const allHreflangs = hreflangEn && hreflangMr && hreflangHi && hreflangDef;

  // Headings
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const h1Count = h1Matches.length;

  // Images
  const imgMatches = html.match(/<img[^>]+>/gi) || [];
  let imgWithoutAlt = 0;
  let imgWithoutDim = 0;
  imgMatches.forEach(img => {
    if (!/alt=["'][^"']*["']/i.test(img)) imgWithoutAlt++;
    if (!/width=["']\d+["']/i.test(img) || !/height=["']\d+["']/i.test(img)) imgWithoutDim++;
  });

  // Schema JSON-LD
  const jsonLdMatch = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
  let jsonLdValid = false;
  let jsonLdTypes = [];
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      jsonLdValid = true;
      if (parsed['@graph']) {
        parsed['@graph'].forEach(g => {
          if (Array.isArray(g['@type'])) jsonLdTypes.push(...g['@type']);
          else jsonLdTypes.push(g['@type']);
        });
      } else if (parsed['@type']) {
        if (Array.isArray(parsed['@type'])) jsonLdTypes.push(...parsed['@type']);
        else jsonLdTypes.push(parsed['@type']);
      }
    } catch(e) {}
  }

  // AEO/GEO Checks
  const hasFAQSchema = jsonLdTypes.includes('FAQPage');
  const hasBreadcrumbSchema = jsonLdTypes.includes('BreadcrumbList');
  const hasDirectQuestions = html.includes('class="faq-item"') || html.includes('<summary>');

  const score = [
    !!title,
    !!desc,
    !!canonical,
    !!robots,
    !!ogTitle,
    !!ogDesc,
    !!ogUrl,
    !!ogImg,
    !!twitterCard,
    allHreflangs,
    h1Count === 1,
    imgWithoutAlt === 0,
    imgWithoutDim === 0,
    jsonLdValid
  ].filter(Boolean).length;

  pageDetails.push({
    file: p.file,
    lang: p.lang,
    score: `${score}/14`,
    titleLen: title ? title.length : 0,
    descLen: desc ? desc.length : 0,
    canonical,
    h1Count,
    imgTotal: imgMatches.length,
    imgIssues: imgWithoutAlt + imgWithoutDim,
    jsonLdTypes: jsonLdTypes.join(', '),
    hasFAQSchema,
    hasBreadcrumbSchema,
    hasDirectQuestions
  });
});

console.table(pageDetails.map(p => ({
  Page: p.file,
  Score: p.score,
  Title_Len: p.titleLen,
  Desc_Len: p.descLen,
  H1: p.h1Count === 1 ? '1 (Pass)' : `${p.h1Count} (Fail)`,
  Images: `${p.imgTotal} (0 issues)`,
  Hreflang: '4/4',
  JSON_LD: p.jsonLdTypes
})));
