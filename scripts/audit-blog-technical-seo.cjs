const fs = require('fs');
const path = require('path');
const { blogPosts } = require('./blog-data.cjs');

const root = path.resolve(__dirname, '..');

const blogPages = [
  // Blog Index
  { url: 'blog/index.html', fullUrl: 'https://shetimay.in/blog/', lang: 'en', type: 'index' },
  { url: 'mr/blog/index.html', fullUrl: 'https://shetimay.in/mr/blog/', lang: 'mr', type: 'index' },
  { url: 'hi/blog/index.html', fullUrl: 'https://shetimay.in/hi/blog/', lang: 'hi', type: 'index' }
];

blogPosts.forEach(post => {
  blogPages.push({
    url: `blog/${post.slug}/index.html`,
    fullUrl: `https://shetimay.in/blog/${post.slug}/`,
    lang: 'en',
    type: 'article',
    slug: post.slug
  });
  blogPages.push({
    url: `mr/blog/${post.slug}/index.html`,
    fullUrl: `https://shetimay.in/mr/blog/${post.slug}/`,
    lang: 'mr',
    type: 'article',
    slug: post.slug
  });
  blogPages.push({
    url: `hi/blog/${post.slug}/index.html`,
    fullUrl: `https://shetimay.in/hi/blog/${post.slug}/`,
    lang: 'hi',
    type: 'article',
    slug: post.slug
  });
});

console.log('='.repeat(88));
console.log('DEEP TECHNICAL, SEO, AEO & GEO AUDIT FOR SHETIMAY BLOGS (15 PAGES)');
console.log('='.repeat(88));

const results = [];
let globalErrors = [];
let globalWarnings = [];

// Sitemap content
const sitemapContent = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');

blogPages.forEach(p => {
  const filePath = path.join(root, p.url);
  if (!fs.existsSync(filePath)) {
    globalErrors.push(`CRITICAL: File does not exist on disk: ${p.url}`);
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // 1. Technical Audit Checks
  const hasDoctype = /<!doctype\s+html>/i.test(html);
  const langMatch = html.match(/<html\s+lang=["']([^"']+)["']/i);
  const htmlLangValid = langMatch && langMatch[1] === p.lang;
  const hasCharset = /<meta\s+charset=["']utf-8["']/i.test(html);
  const hasViewport = /<meta\s+name=["']viewport["']/i.test(html);

  // H1 and heading hierarchy
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1Count = h1Matches.length;
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
  const h3Count = (html.match(/<h3[^>]*>/gi) || []).length;
  const h4Count = (html.match(/<h4[^>]*>/gi) || []).length;

  // Images
  const imgMatches = [...html.matchAll(/<img\s+([^>]+)>/gi)];
  let imgIssues = 0;
  let imgDetails = [];
  imgMatches.forEach(m => {
    const tag = m[0];
    const hasAlt = /alt=["'][^"']*["']/i.test(tag);
    const hasW = /width=["']\d+["']/i.test(tag);
    const hasH = /height=["']\d+["']/i.test(tag);
    const src = (tag.match(/src=["']([^"']+)["']/i) || [])[1];
    
    // Check if image file exists
    let srcExists = true;
    if (src && src.startsWith('/')) {
      const imgLocal = path.join(root, src.replace(/^\//, ''));
      if (!fs.existsSync(imgLocal)) {
        srcExists = false;
        imgIssues++;
        imgDetails.push(`Missing image asset: ${src}`);
      }
    }
    if (!hasAlt || !hasW || !hasH) {
      imgIssues++;
      imgDetails.push(`Image attributes incomplete (alt:${hasAlt}, w:${hasW}, h:${hasH})`);
    }
  });

  // Table Responsive check
  const hasTable = html.includes('<table');
  const tableResponsive = !hasTable || html.includes('blog-table-box');

  // Internal link resolution
  const internalHrefs = [...html.matchAll(/href=["'](\/[^"'#?]*)["']/g)].map(m => m[1]);
  let brokenInternalLinks = 0;
  internalHrefs.forEach(href => {
    if (href === '/' || href.startsWith('//')) return;
    const targetDirIndex = path.join(root, href, 'index.html');
    const directFile = path.join(root, href);
    if (!fs.existsSync(targetDirIndex) && !fs.existsSync(directFile)) {
      brokenInternalLinks++;
    }
  });

  // 2. SEO Checks
  const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1] || '';
  const metaDesc = (html.match(/<meta\s+name=["']description["']\s+content="([^"]*)"/i) || [])[1] || '';
  const canonical = (html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i) || [])[1] || '';
  const robots = (html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i) || [])[1] || '';
  
  const ogTitle = (html.match(/<meta\s+property=["']og:title["']\s+content=["']([\s\S]*?)["']/i) || [])[1] || '';
  const ogDesc = (html.match(/<meta\s+property=["']og:description["']\s+content=["']([\s\S]*?)["']/i) || [])[1] || '';
  const ogUrl = (html.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']/i) || [])[1] || '';
  const ogImg = (html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) || [])[1] || '';
  const ogType = (html.match(/<meta\s+property=["']og:type["']\s+content=["']([^"']+)["']/i) || [])[1] || '';

  const twCard = (html.match(/<meta\s+name=["']twitter:card["']\s+content=["']([^"']+)["']/i) || [])[1] || '';
  const twImg = (html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i) || [])[1] || '';

  const hreflangEn = html.includes('hreflang="en-IN"');
  const hreflangMr = html.includes('hreflang="mr-IN"');
  const hreflangHi = html.includes('hreflang="hi-IN"');
  const hreflangDef = html.includes('hreflang="x-default"');
  const allHreflangs = hreflangEn && hreflangMr && hreflangHi && hreflangDef;

  const inSitemap = sitemapContent.includes(`<loc>${p.fullUrl}</loc>`);

  // 3. Schema.org Checks
  const jsonLdMatch = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
  let schemaValid = false;
  let schemaTypes = [];
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      schemaValid = true;
      if (parsed['@graph']) {
        parsed['@graph'].forEach(item => {
          if (Array.isArray(item['@type'])) schemaTypes.push(...item['@type']);
          else schemaTypes.push(item['@type']);
        });
      } else if (parsed['@type']) {
        schemaTypes.push(parsed['@type']);
      }
    } catch(e) {}
  }

  // 4. AEO Checks (Answer Engine Optimization)
  const hasDirectIntro = /<div class="blog-content">[\s\S]{0,450}?<p>/i.test(html);
  const hasTakeawaysBox = p.type === 'index' || html.includes('blog-takeaways-box');
  const hasQuestionHeadings = /<(h2|h3)[^>]*>[^<]*(\?|काय|कसे|फायदे|का|लाभ|क्यों|कैसे|What|Why|How)/i.test(html);
  const hasFaqSection = p.type === 'index' || html.includes('blog-faq-section');
  const hasFaqSchema = p.type === 'index' || schemaTypes.includes('FAQPage');
  // Numeric facts & metrics density (GI values, % fiber, kg seed rate, quintals, Rs, moisture)
  const hasMetrics = /(\d+[\s–-]+\d+%|\d+%\s*|\d+[-–]\d+\s*kg|\d+[-–]\d+\s*दिवस|\d+[-–]\d+\s*days|४५–५०|45\s*–\s*50|<12%|< १२%|हमीभाव)/i.test(html);

  // 5. GEO Checks (Generative Engine Optimization)
  const hasGeoEntity = /Dhule|धुळे|धुले|Khandesh|खान्देश|खानदेश|Tawkheda|तावखेडा|तावाखेड़ा|Maharashtra|महाराष्ट्र/i.test(html);
  const hasAuthorAttribution = /Shetimay (Agronomy Team|Commercial Trade Desk)|शेतिमाय (कृषी तज्ज्ञ समूह|घाऊक व्यापार विभाग)|शेतिमाय (कृषि विशेषज्ञ समूह|थोक व्यापार विभाग)/i.test(html);
  const hasFpcEntity = /Farmer Producer Company|शेतकरी उत्पादक कंपनी|किसान उत्पादक कंपनी/i.test(html);

  const ogTypeValid = p.type === 'index' ? ogType === 'website' : ogType === 'article';

  // Scoring
  const techScore = [
    hasDoctype,
    htmlLangValid,
    hasCharset,
    hasViewport,
    h1Count === 1,
    imgIssues === 0,
    tableResponsive,
    brokenInternalLinks === 0
  ].filter(Boolean).length;

  const seoScore = [
    title.length > 30,
    metaDesc.length > 50,
    canonical === p.fullUrl,
    robots.includes('index'),
    allHreflangs,
    inSitemap,
    !!ogTitle,
    !!ogDesc,
    ogUrl === p.fullUrl,
    !!ogImg,
    ogTypeValid,
    !!twCard,
    schemaValid,
    p.type === 'index' ? schemaTypes.includes('Blog') : schemaTypes.includes('BlogPosting')
  ].filter(Boolean).length;

  const aeoGeoScore = [
    hasTakeawaysBox,
    hasQuestionHeadings || p.type === 'index',
    hasFaqSchema,
    hasMetrics || p.type === 'index',
    hasGeoEntity,
    hasAuthorAttribution || p.type === 'index',
    hasFpcEntity
  ].filter(Boolean).length;

  results.push({
    page: p.url,
    lang: p.lang,
    type: p.type,
    tech: `${techScore}/8`,
    seo: `${seoScore}/14`,
    aeoGeo: `${aeoGeoScore}/7`,
    h1: h1Matches[0] ? h1Matches[0][1].replace(/<[^>]+>/g, '').trim().substring(0, 35) + '...' : 'NONE',
    titleLen: title.length,
    descLen: metaDesc.length,
    canonicalMatch: canonical === p.fullUrl ? 'YES' : 'NO',
    ogType,
    ogImgValid: ogImg.startsWith('http'),
    schema: schemaTypes.join(', '),
    hasMetrics,
    hasGeoEntity,
    imgIssues,
    brokenLinks: brokenInternalLinks
  });
});

console.table(results.map(r => ({
  Page: r.page,
  Lang: r.lang,
  Tech: r.tech,
  SEO: r.seo,
  AEO_GEO: r.aeoGeo,
  Title_Len: r.titleLen,
  Desc_Len: r.descLen,
  Canonical: r.canonicalMatch,
  ogType: r.ogType,
  Schema: r.schema
})));

console.log('\n' + '='.repeat(88));
console.log('AUDIT ANALYSIS & FINDINGS');
console.log('='.repeat(88));

let anyTechFails = results.filter(r => r.tech !== '8/8');
let anySeoFails = results.filter(r => r.seo !== '14/14');
let anyAeoFails = results.filter(r => r.aeoGeo !== '7/7');

console.log(`Technical Audit: ${15 - anyTechFails.length}/15 passed with 8/8`);
if (anyTechFails.length > 0) {
  console.log('Tech failures:', anyTechFails.map(f => `${f.page} (${f.tech})`));
}

console.log(`SEO Audit: ${15 - anySeoFails.length}/15 passed with 14/14`);
if (anySeoFails.length > 0) {
  console.log('SEO failures:', anySeoFails.map(f => `${f.page} (${f.seo})`));
}

console.log(`AEO/GEO Audit: ${15 - anyAeoFails.length}/15 passed with 7/7`);
if (anyAeoFails.length > 0) {
  console.log('AEO/GEO failures:', anyAeoFails.map(f => `${f.page} (${f.aeoGeo})`));
}

console.log('='.repeat(88));
