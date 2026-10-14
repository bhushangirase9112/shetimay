# Shetimay Blog Writing & Publishing Guidelines (SOP)
## Standard Operating Procedure for AI Agents & Content Authors

> **Purpose:** This document defines the mandatory blueprint for researching, drafting, optimizing, illustrating, and publishing blog articles on the Shetimay multi-page platform (`shetimay.in`).
> 
> Any AI agent or author assigned to write or update an article **must review and follow these instructions** before writing any code or copy.

---

## 1. Core Objective & Audience
Every article must serve two simultaneous goals:
1. **Organic Visibility & AI Citations (SEO, AEO, GEO):** Rank #1 on Google, capture Google AI Overviews / Featured Snippets (Position 0), and be cited as a primary source by answer engines (Perplexity, ChatGPT, Claude, Gemini).
2. **Commercial Conversion:** Educate readers and guide high-intent commercial flour millers, grain merchants, retail brands, and local farmers directly to Shetimay's WhatsApp trade desk and direct phone lines.

### Primary Audiences:
* **Wholesale Buyers & Millers:** Chakki flour mills, dal mills, retail packaged brands looking for consistent 50kg bags or truckloads with verified moisture and purity.
* **Health-Conscious Consumers & Doctors:** People looking for low-GI ancient grains for diabetes, digestive comfort, and pure traditional nutrition.
* **Khandesh Farmers:** Farmers seeking pure foundation seed, contract farming price protection (हमीभाव), and guaranteed harvest procurement.

---

## 2. Pre-Writing Research Phase (Mandatory)
Before writing any article, conduct thorough research covering these 4 requirements:

### A. Information Gain Research (Google Ranking Factor)
Never write generic fluff or rehash common search results. Find **concrete, empirical data points**:
* **Scientific Metrics:** Exact Glycemic Index values (e.g., 45–50 vs 70+), dietary fiber percentages (10–12% vs 4–6%), protein content (12–14%).
* **Field Agronomy Data:** Exact sowing windows (e.g., Nov 1 to Nov 25), seed rates (40–45 kg/acre), row spacing (20–22.5 cm), critical watering intervals (21 days CRI, 40 days tillering).
* **Commercial Quality Benchmarks:** Grain moisture limits (<12%), sortex cleaning standards, tare/gross electronic weighbridge processes.
* **Geographic Grounding:** Reference real local entities: *Tawkheda, Shindkheda, Dhule, Nandurbar, Jalgaon, Khandesh black regur soil, Tapi river basin*.

### B. Authoritative Outbound Source Citations
Every article must cite and link out to at least **2 to 3 primary institutional or scientific sources**:
* **ICAR / IARI** (Indian Council of Agricultural Research): For crop genetics, breeding, and agronomic packages.
* **NIN / ICMR** (National Institute of Nutrition): For nutritional tables, glycemic index, and diabetic dietary research.
* **FSSAI** (Food Safety and Standards Authority of India): For food grain standards, foreign matter allowances, and moisture thresholds.
* **MPKV Rahuri** (Mahatma Phule Krishi Vidyapeeth): For Maharashtra university recommendations.
* **APEDA / AGMARK**: For commercial grading and packaging standards.

*Rule:* Outbound links must open in a new tab (`target="_blank" rel="noopener"`) and use descriptive anchor text (e.g., *"according to the National Institute of Nutrition (NIN) research"* rather than *"click here"*).

### C. Search Intent & Keyword Mapping
1. **Primary Keyword:** Place exact match in `<title>`, meta description, URL slug, first 100 words, and `<h1>`.
2. **Secondary & LSI Keywords:** Weave natural semantic variations throughout subheadings and body paragraphs.
3. **Conversational Question Headings:** Format H2 and H3 tags as natural queries (matching voice search and AI search prompts):
   * *"Is Khapli Wheat Good for Diabetic Patients?"*
   * *"What Soil is Best for Khapli Wheat Cultivation in Maharashtra?"*
   * *"How Can Mills Buy Direct from Farmer Collectives?"*

### D. Internal Topic Cluster Linking
Every post must include contextual links to Shetimay's core operational pages:
* Link to [`/crops/`](/crops/) for product specs and grain varieties.
* Link to [`/buyers/`](/buyers/) for bulk orders, 50kg bags, and truckload logistics.
* Link to [`/farmers/`](/farmers/) for farmer partnerships and contract farming.
* Link to relevant sibling blog articles (e.g., nutrition guide links to farming guide).

---

## 3. Image Generation & Asset Protocol
If a new article requires images:

### A. Image Specifications:
* **Featured Image Size:** 820px width × 420px height (Desktop) / responsive CSS `height: 240px` (Mobile).
* **Card Thumbnail Size:** 768px width × 500px height.
* **Format:** Optimized `.webp` (or high-compression `.jpg`).
* **Storage Location:** Save into `data/crops/` or `data/blog/`.

### B. Mandatory HTML Image Attributes:
Every `<img>` tag must include:
```html
<img src="/data/crops/crop-name.webp" width="820" height="420" alt="Detailed localized description" loading="lazy">
```
* Never omit `width` or `height` (prevents Cumulative Layout Shift - CLS).
* Always write descriptive, localized `alt` tags in the matching language.

### C. Visual Aesthetic Guidelines:
* Images must look **authentic, real, and grounded in Indian agriculture**.
* Focus on: Real farmer hands holding golden grains, fresh green rabi fields in black soil, clean 50kg jute/HDPE sacks with grain labels, local electronic weighment.
* Avoid: Overly futuristic glowing AI graphics, American-style combine harvesters on mega-farms, or unrealistic laboratory aesthetics.

---

## 4. The 9-Part Article Structure Template

Every article in `scripts/blog-data.cjs` must follow this exact component structure:

### Part 1: Breadcrumbs & Header
* Category tag (e.g., *Nutrition & Health*, *Farmer Cultivation Guide*, *Wholesale Sourcing*).
* Single `<h1>` title (40–70 characters, keyword-rich).
* Meta row: Author name, publication date, estimated read time.

### Part 2: Featured Visual
* Hero image with explicit dimensions and localized alt text.

### Part 3: Quick Takeaways Box (TL;DR)
* **Crucial for AEO (Google AI Overviews & Perplexity snippets).**
* Positioned directly after the featured image.
* Contains 4 concise bullet points answering the primary search query with exact metrics.

### Part 4: Table of Contents (Jump Links)
* Interactive jump links (`<a href="#section-id">`) allowing users and crawlers to navigate directly to major sections.

### Part 5: Core In-Depth Body
* Clean, readable typography.
* Question-driven `<h2>` and `<h3>` tags with explicit `id="section-id"` attributes.
* Answer-first reverse pyramid format: deliver the direct answer in the first 40–50 words of each section before elaborating.
* Real-world callouts (`.blog-callout`) highlighting key takeaways or tips.

### Part 6: Comparison Data Table
* Formatted table wrapped inside `.blog-table-box` (`overflow-x: auto` for mobile responsiveness).
* Clear `<th>` headers comparing parameters (e.g. Khapli vs. Hybrid wheat, Machine-Cleaned vs. Raw grain).

### Part 7: Authoritative Citations & Internal Links
* Inbound links to Shetimay service pages (`/crops/`, `/buyers/`, `/farmers/`).
* Outbound links to scientific/institutional bodies (ICAR, NIN, FSSAI).

### Part 8: Interactive FAQ Accordion (`<details>/<summary>`)
* 3 to 4 high-volume questions answered with clarity.
* Backed by Schema.org `FAQPage` JSON-LD markup for Google search dropdown rich snippets.

### Part 9: Author Bio & Topic-Specific WhatsApp CTA
* Author card with Shetimay logo, entity credentials (Govt. Reg. FPC, Dhule).
* Conversion banner (`.blog-cta-box`) with a pre-filled WhatsApp link referencing the exact article topic.

---

## 5. Multilingual Standards (EN, MR, HI)
Shetimay is rooted in Maharashtra and serves all of India. Every article must be published in all 3 languages with **natural, authentic regional vocabulary**:

| Concept | Marathi (Natural) | Hindi (Natural) | English | Avoid (Unnatural) |
| :--- | :--- | :--- | :--- | :--- |
| Bulk Supply | घाऊक पुरवठा / ५० किलो गोणी ते ट्रक लोड | थोक सप्लाई / ५० किग्रा बोरी से ट्रक लोड | Wholesale Bulk Supply | बल्क सप्लाई / थोक वितरण |
| Guaranteed Price | हमीभाव / ठरलेला खात्रीशीर भाव | पक्का भाव / गारंटीड समर्थन मूल्य | Guaranteed Purchase Price | निश्चित मूल्य |
| Clean Grain | स्वच्छ, मशीन-क्लिन किंवा चाळणी केलेला माल | साफ़, मशीन-क्लीन या छाना हुआ अनाज | Machine-Cleaned / Graded Grain | शुद्धीकृत अनाज |
| Contract Farming | शेतकरी करार / हमीभावाचे कॉन्ट्रॅक्ट फार्मिंग | अनुबंध खेती / पक्के भाव की कॉन्ट्रैक्ट फार्मिंग | Contract Farming Partnership | ठेका खेती |
| Electronic Scale | इलेक्ट्रॉनिक वजन काटा / संगणकीकृत काटा | कंप्यूटर कांटा / इलेक्ट्रॉनिक धर्मकांटा | Digital Weighbridge | डिजिटल स्केल |
| Sowing / Tillering | पेरणी / कल्ले फुटणे / ओंब्या भरणे | बुवाई / कल्ले फूटना / दाना भरना | Sowing / Tillering / Grain-filling | बीजारोपण |

*Rule:* Never use literal robotic machine translations. Write each language as an experienced local agricultural expert speaks.

---

## 6. Technical Implementation Workflow

When adding or updating articles:

### Step 1: Add Content to `scripts/blog-data.cjs`
Add the article object into `blogPosts`:
```javascript
{
  slug: 'unique-article-slug',
  featuredImage: '/data/crops/image.webp',
  date: 'YYYY-MM-DD',
  dateFormatted: { en: '...', mr: '...', hi: '...' },
  readTime: { en: '5 min read', mr: '५ मिनिटे वाचन', hi: '५ मिनट वाचन' },
  category: { en: '...', mr: '...', hi: '...' },
  author: { en: 'Shetimay Agronomy Team', mr: 'शेतिमाय कृषी तज्ज्ञ समूह', hi: 'शेतिमाय कृषि विशेषज्ञ समूह' },
  title: { en: '...', mr: '...', hi: '...' },
  summary: { en: '...', mr: '...', hi: '...' },
  takeaways: { en: [...], mr: [...], hi: [...] },
  faqs: [
    {
      q: { en: '...', mr: '...', hi: '...' },
      a: { en: '...', mr: '...', hi: '...' }
    }
  ],
  contentHtml: {
    en: `...`,
    mr: `...`,
    hi: `...`
  }
}
```

### Step 2: Build Multi-Page HTML
Run the site builder to generate all localized pages and update `sitemap.xml`:
```bash
node scripts/build-multipage.cjs
```

### Step 3: Run Automated Verification Audits
Always run both audit scripts and ensure a **100% pass rate** before committing:
```bash
node scripts/audit-blog-technical-seo.cjs
node scripts/audit-seo.cjs
```
**Verification Checklist:**
* Technical Audit: **8/8 Pass** (HTML5, DOCTYPE, single H1, image alt/w/h, table responsiveness, zero 404 links).
* Traditional SEO: **14/14 Pass** (Canonicals, Title/Desc length, OpenGraph `article`, Twitter card, 4-way hreflang, sitemap).
* AEO & GEO: **7/7 Pass** (Quick Takeaways box, question headings, FAQPage schema, metrics density, entity grounding).

### Step 4: Visual Check with Playwright
Check the generated pages on both viewports:
* Desktop: `1440 × 900`
* Mobile: `375 × 812` (verify zero horizontal overflow and tap target usability)

### Step 5: Git Commit & Remote Push
Commit cleanly with a descriptive message and push to remote:
```bash
git add .
git commit -m "feat(blog): add comprehensive guide on [topic] with citations and schema"
git push origin [branch]
```
