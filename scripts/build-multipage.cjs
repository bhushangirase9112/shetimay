const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Global site configurations
const config = {
  domain: 'https://shetimay.in',
  phones: ['+91-8080704715', '+91-7020863882', '+91-8766901935'],
  displayPhones: ['+91 80807 04715', '+91 70208 63882', '+91 87669 01935'],
  email: 'shetimayfpc425407@gmail.com',
  foundingDate: '2025-12-23',
  addressEn: 'C/o Chatursing Girase, G.No. 68, Tawkheda, Shindkheda, Dhule, Maharashtra 425408, India',
  addressMr: 'मार्फत चतुरसिंग गिरासे, गट नं. ६८, तावखेडा, शिंदखेडा, धुळे, महाराष्ट्र ४२५४०८, भारत',
  addressHi: 'मार्फत चतुरसिंह गिरासे, गट नं. ६८, तावाखेड़ा, शिंदखेड़ा, धुले, महाराष्ट्र ४२५४०८, भारत'
};

// SVG Icons
const instagramSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;

const whatsappSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

const truckSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`;

const scaleSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h18"></path></svg>`;

const shieldCheckSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`;

const sproutSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4-.1 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4.1.7-4.9 2z"></path></svg>`;

const checkSvg = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

const phoneSvg = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;

const mapPinSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

const mailSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;

const wheatSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 22 16 8"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path></svg>`;

const handshakeSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2"></path><path d="m14 14 2.5 2.5a1 1 0 0 0 1.4 0l2.8-2.8a1 1 0 0 0 0-1.4l-3.6-3.6a2 2 0 0 0-2.8 0L13 10"></path><path d="M18 10 9 19a3 3 0 0 1-4.2-4.2L12 7"></path><path d="m7 7 2.3-2.3a2 2 0 0 1 2.8 0l3.6 3.6a1 1 0 0 1 0 1.4l-2.8 2.8a1 1 0 0 1-1.4 0L9 10"></path></svg>`;

const packageSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`;

const bulbSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>`;

// All Crops Data (8 Core Agricultural Produce)
const cropsData = [
  {
    id: 'khapli',
    image: '/data/crops/khapli-gahu.webp',
    badgeClass: 'focus',
    badge: { en: 'Special Crop', mr: 'खास पीक', hi: 'खास फसल' },
    title: { en: 'Khapli Wheat (Emmer Wheat)', mr: 'खपली गहू (Khapli Wheat)', hi: 'खपली गेहूँ (Emmer Wheat)' },
    desc: {
      en: 'Healthy ancient wheat sourced directly from Dhule farmers. High in fiber, low sugar spike, light on stomach. Available raw or machine-cleaned for flour mills and wholesale buyers.',
      mr: 'धुळ्यातील शेतकऱ्यांकडून थेट खरेदी केलेला अस्सल खपली गहू. पचनास हलका, भरपूर फायबर आणि आरोग्यासाठी चांगला. गिरण्या व व्यापाऱ्यांसाठी कच्चा किंवा स्वच्छ केलेला माल उपलब्ध.',
      hi: 'धुले के किसानों से सीधा खरीदा गया असली खपली गेहूँ। फाइबर से भरपूर, पचने में आसान और स्वास्थ्य के लिए उत्तम। आटा मिलों और थोक खरीदारों के लिए साफ़ माल उपलब्ध।'
    },
    waMsg: 'Khapli%20wheat%20supply'
  },
  {
    id: 'harbhara',
    image: '/data/crops/harbhara.webp',
    badgeClass: 'pulse',
    badge: { en: 'Pulses', mr: 'कडधान्य / डाळी', hi: 'दालें' },
    title: { en: 'Harbhara (Desi Chana)', mr: 'हरभरा (चना / Desi Chana)', hi: 'चना / हरभरा (Desi Chana)' },
    desc: {
      en: 'Clean and uniform desi chana directly from Khandesh farms. Well-cleaned for dal mills, food businesses, and grain merchants.',
      mr: 'खान्देशातील शेतांतून थेट खरेदी केलेला स्वच्छ देशी हरभरा (चना). डाळ मिल आणि घाऊक व्यापाऱ्यांसाठी उत्तम दर्जा.',
      hi: 'खान्देश के खेतों से सीधा खरीदा गया साफ़ देशी चना। दाल मिलों और थोक अनाज व्यापारियों के लिए बढ़िया क्वालिटी।'
    },
    waMsg: 'Desi%20Chana%20procurement'
  },
  {
    id: 'moong',
    image: '/data/crops/moong.webp',
    badgeClass: 'pulse',
    badge: { en: 'Pulses', mr: 'कडधान्य / डाळी', hi: 'दालें' },
    title: { en: 'Moong (Green Gram)', mr: 'मूग (हिरवा मूग)', hi: 'मूँग (हरा मूँग)' },
    desc: {
      en: 'Fresh whole green moong sourced straight from the harvest. Best for dal manufacturers and wholesale grain suppliers.',
      mr: 'हंगामात शेतकऱ्यांकडून थेट खरेदी केलेला चमकदार हिरवा मूग. डाळ मिल आणि घाऊक बाजारासाठी उत्तम प्रत.',
      hi: 'सीधे फसल कटाई पर किसानों से खरीदा गया साफ़ हरा मूँग। दाल मिलों और थोक व्यापारियों के लिए बेहतरीन क्वालिटी।'
    },
    waMsg: 'Green%20Moong%20procurement'
  },
  {
    id: 'tur',
    image: '/data/crops/tur.webp',
    badgeClass: 'pulse',
    badge: { en: 'Pulses', mr: 'कडधान्य / डाळी', hi: 'दालें' },
    title: { en: 'Tur (Arhar / Pigeon Pea)', mr: 'तूर (अरहर / Tur Dal Crop)', hi: 'अरहर / तूर (Pigeon Pea)' },
    desc: {
      en: 'Good quality pigeon pea (arhar) sourced from Maharashtra farms. Available as raw farm harvest or machine-cleaned as per your need.',
      mr: 'महाराष्ट्रातील शेतकऱ्यांकडून थेट खरेदी केलेली दर्जेदार तूर (अरहर). तुमच्या गरजेनुसार कच्ची किंवा मशीनने स्वच्छ केलेली उपलब्ध.',
      hi: 'महाराष्ट्र के किसानों से सीधे खरीदी गई अच्छी अरहर (तूर)। आपकी जरूरत अनुसार कच्ची या मशीन से साफ़ की हुई उपलब्ध।'
    },
    waMsg: 'Tur%20procurement'
  },
  {
    id: 'soybean',
    image: '/data/crops/soybean.webp',
    badgeClass: 'oilseed',
    badge: { en: 'Oilseeds', mr: 'तेलबिया', hi: 'तिलहन' },
    title: { en: 'Soybean (Yellow Soybean)', mr: 'सोयाबीन (Yellow Soybean)', hi: 'सोयाबीन (Yellow Soybean)' },
    desc: {
      en: 'Clean yellow soybean with high oil and protein content. Sourced directly from farmers for oil mills and processing plants.',
      mr: 'उत्तम तेल व प्रथिने असलेला स्वच्छ पिवळा सोयाबीन. ऑइल मिल्स आणि कारखान्यांसाठी थेट शेतकऱ्यांकडून पुरवठा.',
      hi: 'अच्छे तेल और प्रोटीन वाला साफ़ पीला सोयाबीन। तेल मिलों और कारखानों के लिए सीधे किसानों से उपलब्ध।'
    },
    waMsg: 'Soybean%20procurement'
  },
  {
    id: 'gahu',
    image: '/data/crops/gahu.webp',
    badgeClass: 'focus',
    badge: { en: 'Wheat', mr: 'गहू', hi: 'गेहूँ' },
    title: { en: 'Wheat (Lokwan & Sharbati)', mr: 'गहू (लोकवन व शरबती)', hi: 'गेहूँ (लोकवन व शरबती)' },
    desc: {
      en: 'Popular Lokwan and Sharbati wheat varieties. Clean, golden grains ideal for flour mills, chakkis, and bulk grain trade.',
      mr: 'लोकवन आणि शरबती जातीचा स्वच्छ गहू. चक्की, पिठाच्या गिरण्या आणि घाऊक व्यापाऱ्यांसाठी दर्जेदार सोनेरी दाणा.',
      hi: 'लोकवन और शरबती किस्म का साफ़ गेहूँ। आटा मिलों, चक्की और थोक अनाज व्यापारियों के लिए सुनहरा दाना।'
    },
    waMsg: 'Wheat%20procurement'
  },
  {
    id: 'bajra',
    image: '/data/crops/bajra.webp',
    badgeClass: 'millet',
    badge: { en: 'Millets', mr: 'बाजरी', hi: 'बाजरा' },
    title: { en: 'Bajra (Pearl Millet)', mr: 'बाजरी (Pearl Millet)', hi: 'बाजरा (Pearl Millet)' },
    desc: {
      en: 'Nutritious pearl millet (bajra) sourced fresh from Khandesh farms. Great for flour mills, cattle feed, and wholesale markets.',
      mr: 'खान्देशात पिकवलेली ताजी व पौष्टिक बाजरी. पिठाच्या गिरण्या आणि घाऊक बाजारासाठी थेट उपलब्ध.',
      hi: 'खान्देश के खेतों से ताज़ा पौष्टिक बाजरा। आटा मिलों और थोक मंडियों के लिए सीधे उपलब्ध।'
    },
    waMsg: 'Bajra%20procurement'
  },
  {
    id: 'jowar',
    image: '/data/crops/jowar.webp',
    badgeClass: 'millet',
    badge: { en: 'Millets', mr: 'ज्वारी', hi: 'ज्वार' },
    title: { en: 'Jowar (White Sorghum)', mr: 'ज्वारी (पांढरी ज्वारी)', hi: 'ज्वार (सफेद ज्वार)' },
    desc: {
      en: 'Clean white sorghum (jowar) sourced directly from local farmers. Ideal for flour milling and wholesale packaging.',
      mr: 'स्थानिक शेतकऱ्यांकडून थेट खरेदी केलेली स्वच्छ पांढरी ज्वारी. गिरण्या आणि घाऊक व्यापारासाठी उत्तम माल.',
      hi: 'स्थानीय किसानों से सीधे खरीदी गई साफ़ सफेद ज्वार। आटा मिलों और थोक व्यापार के लिए तैयार।'
    },
    waMsg: 'Jowar%20procurement'
  }
];

// Translations dictionary
const dict = {
  en: {
    topbarRegFpc: 'Govt. Registered Farmer Company',
    topbarLoc: 'Dhule, Maharashtra • All-India Supply',
    motto: 'Dedicated to the Service of Farmers',
    mottoDevanagari: 'शेतकऱ्यांच्या सेवार्थ',
    fpcSub: 'Farmer Producer Company Ltd',
    navHome: 'Home',
    navAbout: 'About Us',
    navCrops: 'Crops & Produce',
    navBuyers: 'For Buyers (Bulk Supply)',
    navFarmers: 'For Farmers (Contract Farming)',
    navContact: 'Contact',
    btnEnquiry: 'WhatsApp Enquiry',
    callUs: 'Call: +91 80807 04715',
    floatingWaText: 'WhatsApp Enquiry',
    floatingWaMsg: 'Hello Shetimay team, I want to ask about bulk grain purchase / farmer contract farming.',
    breadcrumbHome: 'Home',
    enquireWa: 'Ask Bulk Price on WhatsApp →',
    ctaTitle: 'Looking to buy grains in bulk or join contract farming?',
    ctaSub: 'Contact us for daily wholesale rates, samples, 50kg bags to truckloads, or farmer partnership.',
    footerDesc: 'Shetimay Farmer Producer Company supplies pure Khapli wheat, pulses, and grains in bulk to traders and mills across India, and offers contract farming and fair prices to local farmers.',
    footerLinksHeader: 'Quick Links',
    footerContactHeader: 'Contact Office',
    copyright: '© 2026 Shetimay Farmer Producer Company Limited. All rights reserved.',
    regOffice: 'Tawkheda, Shindkheda, Dhule, Maharashtra 425408, India',
    mobileBottomWa: 'WhatsApp Enquiry',
    mobileBottomCall: 'Call Now'
  },
  mr: {
    topbarRegFpc: 'अधिकृत शेतकरी कंपनी',
    topbarLoc: 'धुळे, महाराष्ट्र • संपूर्ण भारतात पुरवठा',
    motto: 'शेतकऱ्यांच्या सेवार्थ',
    mottoDevanagari: 'शेतकऱ्यांच्या सेवार्थ',
    fpcSub: 'शेतकरी उत्पादक कंपनी मर्यादित',
    navHome: 'मुख्यपृष्ठ',
    navAbout: 'आमच्याबद्दल',
    navCrops: 'शेतीमाल व पिके',
    navBuyers: 'खरेदीदारांसाठी (घाऊक माल)',
    navFarmers: 'शेतकऱ्यांसाठी (कॉन्ट्रॅक्ट फार्मिंग)',
    navContact: 'संपर्क',
    btnEnquiry: 'व्हॉट्सॲप चौकशी',
    callUs: 'कॉल: +91 80807 04715',
    floatingWaText: 'व्हॉट्सॲप चौकशी',
    floatingWaMsg: 'नमस्कार शेतिमाय टीम, मला घाऊक शेतीमाल खरेदी / कॉन्ट्रॅक्ट फार्मिंगबद्दल माहिती हवी आहे.',
    breadcrumbHome: 'मुख्यपृष्ठ',
    enquireWa: 'व्हॉट्सॲपवर घाऊक भाव विचारा →',
    ctaTitle: 'घाऊक शेतीमाल खरेदी करायचा आहे की शेतकरी म्हणून कॉन्ट्रॅक्ट फार्मिंग करायचे आहे?',
    ctaSub: 'घाऊक भाव, सॅम्पल, ५० किलो गोणी / ट्रक लोड किंवा कॉन्ट्रॅक्ट फार्मिंगसाठी थेट फोन किंवा व्हॉट्सॲपवर संपर्क साधा.',
    footerDesc: 'शेतिमाय शेतकरी कंपनी देशभरातील व्यापारी व गिरण्यांना शुद्ध खपली गहू, डाळी व धान्य घाऊक पुरवते; तसेच शेतकरी बांधवांना चांगले बियाणे, हमीभाव आणि थेट खरेदीची सुविधा देते.',
    footerLinksHeader: 'महत्त्वाचे दुवे',
    footerContactHeader: 'नोंदणीकृत कार्यालय',
    copyright: '© २०२६ शेतिमाय शेतकरी उत्पादक कंपनी मर्यादित. सर्व हक्क राखीव.',
    regOffice: 'तावखेडा, शिंदखेडा, धुळे, महाराष्ट्र ४२५४०८, भारत',
    mobileBottomWa: 'व्हॉट्सॲप चौकशी',
    mobileBottomCall: 'थेट कॉल करा'
  },
  hi: {
    topbarRegFpc: 'रजिस्टर्ड किसान कंपनी',
    topbarLoc: 'धुले, महाराष्ट्र • पूरे देश में डिलीवरी',
    motto: 'किसानों की सेवा में',
    mottoDevanagari: 'शेतकऱ्यांच्या सेवार्थ',
    fpcSub: 'किसान उत्पादक कंपनी लिमिटेड',
    navHome: 'होम',
    navAbout: 'हमारे बारे में',
    navCrops: 'फसलें और अनाज',
    navBuyers: 'व्यापारियों के लिए (अनाज खरीद)',
    navFarmers: 'किसानों के लिए (कॉन्ट्रैक्ट फार्मिंग)',
    navContact: 'संपर्क',
    btnEnquiry: 'व्हाट्सएप पूछताछ',
    callUs: 'कॉल: +91 80807 04715',
    floatingWaText: 'व्हाट्सएप पूछताछ',
    floatingWaMsg: 'नमस्ते शेतिमाय टीम, मुझे अनाज खरीद (५० किलो बोरी / ट्रक लोड) या कॉन्ट्रैक्ट फार्मिंग की जानकारी चाहिए।',
    breadcrumbHome: 'होम',
    enquireWa: 'व्हाट्सएप पर भाव पूछें →',
    ctaTitle: '५० किलो बोरी या पूरा ट्रक माल खरीदना है, या कॉन्ट्रैक्ट फार्मिंग करनी है?',
    ctaSub: 'दैनिक भाव, सैंपल, ५० किलो बोरी / ट्रक लोड या कॉन्ट्रैक्ट फार्मिंग की जानकारी के लिए सीधे फोन या व्हाट्सएप करें।',
    footerDesc: 'शेतिमाय किसान कंपनी व्यापारियों और मिलों को शुद्ध खपली गेहूँ, दालें और अनाज सीधे पहुंचाती है (५० किलो बोरी से लेकर पूरा ट्रक); साथ ही किसानों को अच्छे बीज, पक्का भाव और सीधी खरीद की सुविधा देती है।',
    footerLinksHeader: 'महत्वपूर्ण लिंक',
    footerContactHeader: 'पंजीकृत कार्यालय',
    copyright: '© २०२६ शेतिमाय किसान उत्पादक कंपनी लिमिटेड। सर्वाधिकार सुरक्षित।',
    regOffice: 'तावाखेड़ा, शिंदखेड़ा, धुले, महाराष्ट्र ४२५४०८, भारत',
    mobileBottomWa: 'व्हाट्सएप पूछताछ',
    mobileBottomCall: 'सीधे कॉल करें'
  }
};

// Clean URL Helper
function getUrl(lang, pageId) {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  if (pageId === 'home') return `${prefix}/` || '/';
  return `${prefix}/${pageId}/`;
}

// Master HTML Shell Builder
function buildShell({ lang, pageId, title, description, ogTitle, content, jsonLd }) {
  const t = dict[lang];
  const canonicalUrl = `${config.domain}${getUrl(lang, pageId)}`;
  const enUrl = `${config.domain}${getUrl('en', pageId)}`;
  const mrUrl = `${config.domain}${getUrl('mr', pageId)}`;
  const hiUrl = `${config.domain}${getUrl('hi', pageId)}`;

  const navItem = (id, label) => {
    const url = getUrl(lang, id);
    const active = pageId === id ? ' class="active"' : '';
    return `<a href="${url}"${active}>${label}</a>`;
  };

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="theme-color" content="#14532d">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" href="/logo.jpeg" type="image/jpeg">
  <link rel="apple-touch-icon" href="/logo.jpeg">
  <meta property="og:site_name" content="Shetimay">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${ogTitle}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="https://shetimay.in/data/crops/khapli-gahu-og.jpg">
  <meta property="og:locale" content="${lang === 'mr' ? 'mr_IN' : lang === 'hi' ? 'hi_IN' : 'en_IN'}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${ogTitle}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="https://shetimay.in/data/crops/khapli-gahu-og.jpg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css?v=2.0.4">
  <link rel="alternate" hreflang="en-IN" href="${enUrl}">
  <link rel="alternate" hreflang="mr-IN" href="${mrUrl}">
  <link rel="alternate" hreflang="hi-IN" href="${hiUrl}">
  <link rel="alternate" hreflang="x-default" href="${enUrl}">
  ${jsonLd ? `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>` : ''}
</head>

<body>
  <!-- Topbar -->
  <div class="topbar">
    <div class="wrap topbar-inner">
      <div class="topbar-left">
        <span class="topbar-motto">${t.mottoDevanagari}</span>
        <span class="topbar-sep">•</span>
        <span class="topbar-tagline">${t.topbarRegFpc}</span>
        <span class="topbar-sep">•</span>
        <span class="topbar-tagline">${t.topbarLoc}</span>
      </div>
      <div class="topbar-right">
        <div class="topbar-lang-switcher" role="navigation" aria-label="Language Selector">
          <a href="${getUrl('mr', pageId)}" class="topbar-lang-link${lang === 'mr' ? ' active' : ''}">मराठी</a>
          <span class="topbar-lang-sep">|</span>
          <a href="${getUrl('en', pageId)}" class="topbar-lang-link${lang === 'en' ? ' active' : ''}">English</a>
          <span class="topbar-lang-sep">|</span>
          <a href="${getUrl('hi', pageId)}" class="topbar-lang-link${lang === 'hi' ? ' active' : ''}">हिंदी</a>
        </div>
        <a class="topbar-phone" href="tel:+918080704715">${phoneSvg} <span>+91 80807 04715</span></a>
        <a class="topbar-email" href="mailto:${config.email}"><span>✉</span> <span>${config.email}</span></a>
      </div>
      <a class="topbar-mobile-quick" href="tel:+918080704715">${phoneSvg} <span>${lang === 'mr' ? 'कॉल' : lang === 'hi' ? 'कॉल' : 'Call'}</span></a>
    </div>
  </div>

  <!-- Navigation -->
  <header class="nav">
    <div class="wrap nav-inner">
      <a class="brand" href="${getUrl(lang, 'home')}" aria-label="Shetimay home">
        <img class="brand-logo-img" src="/logo.jpeg" alt="Shetimay Logo" width="52" height="52">
        <div class="brand-text">
          <span class="brand-name">Shetimay</span>
          <span class="brand-sub">${t.fpcSub}</span>
          <span class="brand-motto-tag">${t.mottoDevanagari}</span>
        </div>
      </a>

      <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="main-nav">
        <span class="menu-bars" aria-hidden="true"></span>
      </button>

      <nav class="nav-links" id="main-nav">
        ${navItem('home', t.navHome)}
        ${navItem('about', t.navAbout)}
        ${navItem('crops', t.navCrops)}
        ${navItem('buyers', t.navBuyers)}
        ${navItem('farmers', t.navFarmers)}
        ${navItem('contact', t.navContact)}

        <div class="nav-actions">
          <div class="mobile-lang-drawer" role="navigation" aria-label="Language Selector">
            <a href="${getUrl('mr', pageId)}" class="lang-btn${lang === 'mr' ? ' active' : ''}">मराठी</a>
            <a href="${getUrl('en', pageId)}" class="lang-btn${lang === 'en' ? ' active' : ''}">English</a>
            <a href="${getUrl('hi', pageId)}" class="lang-btn${lang === 'hi' ? ' active' : ''}">हिंदी</a>
          </div>
          <a class="button wa nav-cta-btn" href="https://wa.me/918080704715?text=${encodeURIComponent(t.floatingWaMsg)}" target="_blank" rel="noopener">
            ${whatsappSvg}
            <span>${t.btnEnquiry}</span>
          </a>
        </div>
      </nav>
    </div>
  </header>

  <main>
    ${content}
  </main>

  <!-- Clean Footer -->
  <footer>
    <div class="wrap">
      <div class="footer-top">
        <div class="footer-brand-box">
          <a class="footer-brand" href="${getUrl(lang, 'home')}">
            <img class="brand-logo-img" src="/logo.jpeg" alt="Shetimay" width="50" height="50">
            <div>
              <strong style="font-size: 1.25rem; display: block; color: #fff;">Shetimay FPC</strong>
              <small style="color: #fef08a; font-weight: 700;">${t.mottoDevanagari}</small>
            </div>
          </a>
          <p>${t.footerDesc}</p>
          <div style="margin-top: 14px;">
            <a href="https://www.instagram.com/shetimay_fpc/" target="_blank" rel="noopener" class="social-link" aria-label="Instagram">
              ${instagramSvg}
              <span style="font-size: 0.85rem; margin-left: 6px;">@shetimay_fpc</span>
            </a>
          </div>
        </div>

        <div class="footer-links-col">
          <strong>${t.footerLinksHeader}</strong>
          <a href="${getUrl(lang, 'home')}">${t.navHome}</a>
          <a href="${getUrl(lang, 'about')}">${t.navAbout}</a>
          <a href="${getUrl(lang, 'crops')}">${t.navCrops}</a>
          <a href="${getUrl(lang, 'buyers')}">${t.navBuyers}</a>
          <a href="${getUrl(lang, 'farmers')}">${t.navFarmers}</a>
          <a href="${getUrl(lang, 'contact')}">${t.navContact}</a>
        </div>

        <div class="footer-contact-col">
          <strong>${t.footerContactHeader}</strong>
          <p>${mapPinSvg} <span>${t.regOffice}</span></p>
          <p>${phoneSvg} <span><a href="tel:+918080704715">+91 80807 04715</a></span></p>
          <p>${phoneSvg} <span><a href="tel:+917020863882">+91 70208 63882</a></span></p>
          <p>${phoneSvg} <span><a href="tel:+918766901935">+91 87669 01935</a></span></p>
          <p>${mailSvg} <span><a href="mailto:${config.email}">${config.email}</a></span></p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>${t.copyright}</p>
        <p>Govt. Reg. FPC (MCA) • Dhule & Khandesh, Maharashtra</p>
      </div>
    </div>
  </footer>

  <!-- Desktop Floating WhatsApp Button -->
  <a class="floating-whatsapp" href="https://wa.me/918080704715?text=${encodeURIComponent(t.floatingWaMsg)}" target="_blank" rel="noopener" aria-label="WhatsApp Enquiry">
    ${whatsappSvg}
    <span>${t.floatingWaText}</span>
  </a>

  <!-- Mobile Bottom Action Bar (Fixed, 1-Tap Call & WhatsApp) -->
  <div class="mobile-bottom-bar" role="navigation" aria-label="Mobile Quick Actions">
    <a class="mobile-bottom-btn wa" href="https://wa.me/918080704715?text=${encodeURIComponent(t.floatingWaMsg)}" target="_blank" rel="noopener">
      ${whatsappSvg}
      <span>${t.mobileBottomWa}</span>
    </a>
    <a class="mobile-bottom-btn call" href="tel:+918080704715">
      ${phoneSvg}
      <span>${t.mobileBottomCall}</span>
    </a>
  </div>

  <script>
    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('#main-nav');
    if (menuButton && nav) {
      menuButton.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        menuButton.classList.toggle('active', open);
        document.body.classList.toggle('nav-open', open);
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      });
      nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.classList.remove('active');
        document.body.classList.remove('nav-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      }));
    }
  </script>
</body>
</html>`;
}

// PAGE 1: HOME PAGE
function renderHomePage(lang) {
  const t = dict[lang];
  const copy = {
    en: {
      title: 'Shetimay | Buy Khapli Wheat, Pulses & Grains in Bulk | All-India Supply & Contract Farming',
      desc: 'Shetimay Farmer Producer Company supplies authentic Khapli wheat, pulses, and grains in bulk (50kg bags to truckloads) across India. We also offer contract farming with quality seeds and guaranteed prices for farmers.',
      ogTitle: 'Shetimay | Wholesale Farm Grains All-India & Farmer Contract Farming',
      heroTag: 'Govt. Registered Farmer Producer Company • Dhule, Maharashtra',
      heroTitle: 'Buy Pure Khapli Wheat, Pulses & Grains in <em>Bulk Across India</em>',
      heroDesc: 'We supply authentic Khapli wheat, chana, tur, moong, and millets directly from Maharashtra farms in wholesale lots (50kg bags to truckloads). For farmers, we offer contract farming with quality seeds and guaranteed good prices (हमीभाव), plus direct crop purchase.',
      heroWaBtn: 'Ask Wholesale Rates on WhatsApp',
      heroCropsBtn: 'Available Crops & Specs',
      visualBadgeTitle: 'Khapli Wheat (Emmer Wheat)',
      visualBadgeSub: 'Pure ancient wheat from Dhule, Maharashtra',
      t1Title: 'All-India Bulk Supply',
      t1Sub: '50kg bags or full truckloads delivered to any state in India',
      t2Title: 'Contract Farming for Farmers',
      t2Sub: 'Good seeds provided with guaranteed profitable purchase prices at harvest',
      t3Title: 'Accurate Weighing & Quick Payment',
      t3Sub: 'Computerized electronic scale with direct bank payment for farmers',
      t4Title: 'Cleaned & Quality Checked',
      t4Sub: 'Raw or machine-cleaned grain with tested moisture levels as per your order',
      cropSecTag: 'Direct Farm Produce Portfolio',
      cropSecTitle: 'Grains Available for Wholesale Purchase Across India',
      cropSecDesc: 'Sourced directly from Maharashtra farms, quality-checked, and ready to dispatch to your mill, store, or warehouse.',
      viewAllCrops: 'View All 8 Crops & Bulk Details →',
      pathwaysTag: 'Agri-Enterprise Services',
      pathwaysTitle: 'How Shetimay Works for Buyers and Farmers',
      farmerCardTitle: 'For Farmers: Contract Farming & Direct Sale',
      farmerCardDesc: 'Partner with us for contract farming: get pure seeds and a guaranteed good price when your crop is ready. Or sell your harvested crop directly on our electronic weighbridge with zero middleman deductions.',
      farmerCardBtn: 'Contract Farming & Farmer Partnership →',
      buyerCardTitle: 'For Buyers, Traders & Mills Across India',
      buyerCardDesc: 'Buy pure Khapli wheat, pulses, and grains straight from farm clusters. No middleman commissions. Order test batches (50kg bags) or full commercial truckloads.',
      buyerCardBtn: 'Wholesale Buyer Guide & Sourcing →',
      processTag: 'Wholesale Sourcing Process',
      processTitle: 'Simple 4-Step Wholesale Ordering Process',
      p1T: '1. Share Your Requirement',
      p1D: 'Tell us the crop, required quantity (50kg bags / truckloads), and delivery city.',
      p2T: '2. Price & Sample Confirmation',
      p2D: 'We quote clear wholesale rates and dispatch samples to confirm quality.',
      p3T: '3. Cleaning & 50kg Packing',
      p3D: 'Produce is cleaned, moisture-checked, and packed in strong 50kg bags.',
      p4T: '4. Delivery Across India',
      p4D: 'Dispatched straight to your mill, warehouse, or store anywhere in India.',
      faqTag: 'Frequently Asked Questions',
      faqTitle: 'Frequently Asked Questions',
      f1Q: 'Can buyers from outside Maharashtra order bulk quantities?',
      f1A: 'Yes! We supply 50kg bags to full truckloads to traders, flour mills, dal mills, and stores across all states in India with transport arrangement.',
      f2Q: 'How does Contract Farming work for farmers?',
      f2A: 'We provide farmers with verified seeds (especially ancient Khapli wheat) and farming advice. Before planting, we agree on a guaranteed good purchase price so you are protected even if market rates fall.',
      f3Q: 'Can any farmer sell their harvested crop to Shetimay?',
      f3A: 'Yes! Any farmer can bring their harvested Khapli wheat, chana, moong, tur, soybean, bajra, or jowar. We weigh on digital scales and transfer payment directly to your bank account with zero broker cuts.'
    },
    mr: {
      title: 'शेतिमाय | खपली गहू, डाळी व धान्य घाऊक खरेदी | संपूर्ण भारतात पुरवठा व कॉन्ट्रॅक्ट फार्मिंग',
      desc: 'शेतिमाय शेतकरी कंपनी: देशभरातील व्यापारी, गिरण्या व कंपन्यांसाठी शुद्ध खपली गहू, डाळी व धान्याची घाऊक विक्री (५० किलो गोणी ते ट्रक लोड). तसेच शेतकरी बांधवांसाठी अस्सल बियाण्यांसह कॉन्ट्रॅक्ट फार्मिंग, हमखास चांगला भाव आणि थेट शेतीमाल खरेदी.',
      ogTitle: 'शेतिमाय | संपूर्ण भारतात घाऊक शेतीमाल पुरवठा व कॉन्ट्रॅक्ट फार्मिंग',
      heroTag: 'अधिकृत शेतकरी उत्पादक कंपनी • धुळे, महाराष्ट्र',
      heroTitle: 'अस्सल खपली गहू, डाळी व धान्य — <em>संपूर्ण भारतात थेट घाऊक पुरवठा</em>',
      heroDesc: 'महाराष्ट्रातील शेतकऱ्यांची स्वतःची कंपनी! देशभरातील व्यापारी, गिरण्या व कंपन्यांसाठी शुद्ध खपली गहू, डाळी व धान्याचा घाऊक पुरवठा (५० किलो गोणी ते थेट ट्रक लोड). तसेच शेतकरी बांधवांसाठी उत्तम बियाण्यांसह कॉन्ट्रॅक्ट फार्मिंग, खात्रीशीर चांगला भाव आणि काट्यावर मोजून थेट खरेदी.',
      heroWaBtn: 'व्हॉट्सॲपवर घाऊक भाव विचारा',
      heroCropsBtn: 'उपलब्ध शेतीमाल व तपशील',
      visualBadgeTitle: 'खपली गहू (Khapli Wheat)',
      visualBadgeSub: 'धुळे, महाराष्ट्रातील कसदार व अस्सल शेतीमाल',
      t1Title: 'संपूर्ण भारतात घाऊक पुरवठा',
      t1Sub: '५० किलो गोणी किंवा पूर्ण ट्रक लोड, भारतातील कोणत्याही शहरात सुरक्षित वाहतूक',
      t2Title: 'शेतकऱ्यांसाठी कॉन्ट्रॅक्ट फार्मिंग',
      t2Sub: 'उत्तम बियाणे पुरवठा आणि काढणीच्या वेळी आधीच ठरलेला खात्रीशीर चांगला भाव',
      t3Title: 'काट्यावर अचूक वजन व वेळेवर पैसे',
      t3Sub: 'इलेक्ट्रॉनिक काट्यावर पारदर्शक वजन आणि थेट बँक खात्यात त्वरित पैसे',
      t4Title: 'स्वच्छ व प्रतवारी केलेला माल',
      t4Sub: 'मागणीनुसार कच्चा किंवा मशीनने स्वच्छ केलेला माल, ओलावा तपासून तयार',
      cropSecTag: 'घाऊक शेतीमाल व पिके',
      cropSecTitle: 'घाऊक खरेदी व गिरण्यांसाठी उपलब्ध शेतीमाल',
      cropSecDesc: 'महाराष्ट्रातील शेतांतून थेट खरेदी केलेला, स्वच्छ आणि ओलावा तपासलेला माल संपूर्ण भारतात पुरवण्यासाठी तयार.',
      viewAllCrops: 'सर्व ८ पिकांची माहिती व घाऊक तपशील पहा →',
      pathwaysTag: 'शेतिमायच्या मुख्य सेवा',
      pathwaysTitle: 'व्यापारी आणि शेतकरी दोघांनाही थेट फायदा',
      farmerCardTitle: 'शेतकऱ्यांसाठी: कॉन्ट्रॅक्ट फार्मिंग व थेट माल विक्री',
      farmerCardDesc: 'आमच्यासोबत कॉन्ट्रॅक्ट फार्मिंग करा: अस्सल बियाणे मिळवा आणि काढणीच्या वेळी खात्रीशीर चांगला भाव मिळवा. किंवा आपला तयार शेतीमाल काट्यावर अचूक मोजून थेट योग्य भावात विका.',
      farmerCardBtn: 'कॉन्ट्रॅक्ट फार्मिंग व शेतकरी सेवा →',
      buyerCardTitle: 'देशभरातील व्यापारी, गिरण्या व कंपन्यांसाठी',
      buyerCardDesc: 'दलालांशिवाय थेट शेतकरी समूहाकडून अस्सल खपली गहू, डाळी व धान्य खरेदी करा. सॅम्पल गोणी (५० किलो) किंवा मोठ्या ट्रक लोडसाठी संपर्क करा.',
      buyerCardBtn: 'खरेदीदारांसाठी घाऊक पुरवठा माहिती →',
      processTag: 'घाऊक खरेदी प्रक्रिया',
      processTitle: 'शेतापासून थेट गोदामापर्यंत ४ सोप्या पायऱ्या',
      p1T: '१. तुमची मागणी सांगा',
      p1D: 'हवे असलेले पीक, प्रमाण (गोणी / ट्रक लोड) आणि तुमचे शहर सांगा.',
      p2T: '२. दर व सॅम्पल निश्चिती',
      p2D: 'आम्ही स्पष्ट घाऊक दर सांगतो आणि खात्रीसाठी सॅम्पल पाठवतो.',
      p3T: '३. स्वच्छता व ५० किलो पॅकिंग',
      p3D: 'माल स्वच्छ करून, ओलावा तपासून मजबूत ५० किलो गोणीत भरला जातो.',
      p4T: '४. भारतात कुठेही वाहतूक',
      p4D: 'तुमच्या गोदामात किंवा गिरणीत माल सुरक्षित रवाना केला जातो.',
      faqTag: 'नेहमी विचारले जाणारे प्रश्न',
      faqTitle: 'नेहमी विचारले जाणारे प्रश्न',
      f1Q: 'महाराष्ट्राबाहेरील व्यापारी घाऊक माल मागवू शकतात का?',
      f1A: 'होय! आम्ही भारतातील कोणत्याही राज्यातील व्यापारी, गिरण्या आणि दुकानांना ५० किलो गोणी किंवा पूर्ण ट्रक लोड माल वाहतुकीसह पाठवतो.',
      f2Q: 'शेतकऱ्यांसाठी कॉन्ट्रॅक्ट फार्मिंग कसे चालते?',
      f2A: 'आम्ही शेतकऱ्यांना अस्सल खपली गहू बियाणे आणि शेती सल्ला देतो. पेरणीपूर्वीच काढणीचा चांगला भाव ठरवला जातो, जेणेकरून बाजारात भाव पडले तरी तुमचे नुकसान होत नाही.',
      f3Q: 'कोणताही शेतकरी शेतिमायला आपला माल विकू शकतो का?',
      f3A: 'होय! ज्या शेतकऱ्यांकडे खपली गहू, हरभरा, मूग, तूर, सोयाबीन, बाजरी किंवा ज्वारी आहे, ते थेट शेतिमायला माल विकू शकतात. काट्यावर अचूक वजन करून थेट बँक खात्यात वेळेवर पैसे मिळतात.'
    },
    hi: {
      title: 'शेतिमाय | खपली गेहूँ, दालें और अनाज | ५० किलो बोरी से पूरा ट्रक | कॉन्ट्रैक्ट फार्मिंग',
      desc: 'शेतिमाय किसान कंपनी: व्यापारियों, मिलों और खरीदारों के लिए शुद्ध खपली गेहूँ, दालें और अनाज (५० किलो बोरी से लेकर पूरा ट्रक लोड)। पूरे देश में माल भेजने की व्यवस्था। साथ ही किसानों के लिए कॉन्ट्रैक्ट फार्मिंग, अच्छे बीज और पक्का भाव।',
      ogTitle: 'शेतिमाय | शुद्ध खपली गेहूँ, दालें और अनाज | पूरे देश में डिलीवरी',
      heroTag: 'पंजीकृत किसान उत्पादक कंपनी • धुले, महाराष्ट्र',
      heroTitle: 'शुद्ध खपली गेहूँ, दालें और अनाज — <em>पूरे देश में कहीं भी मंगवाएं</em>',
      heroDesc: 'किसानों की अपनी कंपनी! व्यापारियों, आटा और दाल मिलों को शुद्ध खपली गेहूँ, दालें और अनाज सीधे खेतों से मिलते हैं — ५० किलो बोरी से लेकर पूरे ट्रक तक, पूरे देश में डिलीवरी। साथ ही किसानों के लिए अच्छे बीज, कॉन्ट्रैक्ट फार्मिंग, पक्का भाव और सीधी खरीद।',
      heroWaBtn: 'व्हाट्सएप पर भाव पूछें',
      heroCropsBtn: 'उपलब्ध फसलें व विवरण',
      visualBadgeTitle: 'खपली गेहूँ (Khapli Wheat)',
      visualBadgeSub: 'धुले, महाराष्ट्र का पौष्टिक व असली अनाज',
      t1Title: 'पूरे देश में डिलीवरी',
      t1Sub: '५० किलो बोरी या पूरा ट्रक, भारत के किसी भी शहर में माल सुरक्षित पहुंचाया जाता है',
      t2Title: 'किसानों के लिए कॉन्ट्रैक्ट फार्मिंग',
      t2Sub: 'अच्छे बीज की सुविधा और कटाई के समय तय किया हुआ पक्का अच्छा भाव',
      t3Title: 'कांटे पर सही तौल और तुरंत भुगतान',
      t3Sub: 'कंप्यूटर कांटे पर साफ़ तौल और सीधे बैंक खाते में भुगतान',
      t4Title: 'साफ़ और चेक किया हुआ माल',
      t4Sub: 'मांग के अनुसार कच्चा या मशीन से साफ़ माल, नमी चेक करके तैयार',
      cropSecTag: 'उपलब्ध अनाज व दालें',
      cropSecTitle: 'व्यापारियों और मिलों के लिए उपलब्ध अनाज',
      cropSecDesc: 'महाराष्ट्र के खेतों से खरीदा गया साफ़ अनाज, जो आपके गोदाम या मिल तक पहुंचाने के लिए तैयार है।',
      viewAllCrops: 'सभी ८ फसलों की जानकारी देखें →',
      pathwaysTag: 'मुख्य किसान व व्यापार सेवाएँ',
      pathwaysTitle: 'व्यापारियों और किसानों दोनों के लिए सीधा लाभ',
      farmerCardTitle: 'किसानों के लिए: कॉन्ट्रैक्ट फार्मिंग व सीधी बिक्री',
      farmerCardDesc: 'हमारे साथ कॉन्ट्रैक्ट फार्मिंग करें: शुद्ध बीज पाएं और कटाई के समय तय अच्छा भाव पाएं। या अपनी तैयार फसल कांटे पर सही तौल करवाकर सीधे सही भाव पर बेचें।',
      farmerCardBtn: 'कॉन्ट्रैक्ट फार्मिंग व किसान सेवाएँ →',
      buyerCardTitle: 'व्यापारियों, मिलों और खरीदारों के लिए',
      buyerCardDesc: 'बिना किसी दलाल के सीधे किसानों से शुद्ध खपली गेहूँ, दालें और अनाज खरीदें। ५० किलो बोरी या पूरे ट्रक लोड के लिए संपर्क करें।',
      buyerCardBtn: 'व्यापारियों के लिए अनाज खरीद जानकारी →',
      processTag: 'अनाज खरीद प्रक्रिया',
      processTitle: 'खेत से आपकी मिल/गोदाम तक ४ आसान चरण',
      p1T: '१. अपनी जरूरत बताएं',
      p1D: 'फसल, मात्रा (बोरी / ट्रक लोड) और डिलीवरी का शहर बताएं।',
      p2T: '२. भाव और सैंपल तय करें',
      p2D: 'हम स्पष्ट भाव बताते हैं और जांच के लिए सैंपल भेजते हैं।',
      p3T: '३. सफाई और ५० किलो पैकिंग',
      p3D: 'माल साफ़ कर, नमी चेक करके मजबूत ५० किलो बोरियों में पैक होता है।',
      p4T: '४. पूरे देश में डिलीवरी',
      p4D: 'आपकी मिल या गोदाम तक सीधे गाड़ी रवाना की जाती है।',
      faqTag: 'अक्सर पूछे जाने वाले सवाल',
      faqTitle: 'अक्सर पूछे जाने वाले सवाल',
      f1Q: 'क्या महाराष्ट्र के बाहर के व्यापारी माल मंगा सकते हैं?',
      f1A: 'हाँ! हम भारत के किसी भी राज्य के व्यापारियों, आटा मिलों, दाल मिलों और दुकानों को ५० किलो बोरी या पूरे ट्रक लोड में माल भेजते हैं।',
      f2Q: 'किसानों के लिए कॉन्ट्रैक्ट फार्मिंग कैसे काम करती है?',
      f2A: 'हम किसानों को शुद्ध खपली गेहूँ बीज और सही सलाह देते हैं। बुवाई से पहले ही कटाई का अच्छा भाव तय कर लेते हैं, ताकि मंडी में भाव गिरने पर भी नुकसान न हो।',
      f3Q: 'क्या कोई भी किसान अपनी फसल शेतिमाय को बेच सकता है?',
      f3A: 'हाँ! जिन किसान भाइयों के पास खपली गेहूँ, चना, मूँग, अरहर, सोयाबीन, बाजरा या ज्वार है, वे सीधे शेतिमाय को बेच सकते हैं। कांटे पर सही तौल और बिना किसी दलाली के सीधे बैंक में पैसे मिलते हैं।'
    }
  }[lang];

  const content = `
    <!-- Hero Section -->
    <section class="hero-clean" id="home">
      <div class="wrap hero-grid-clean">
        <div class="hero-content">
          <div class="hero-institutional-tag">
            <span class="institutional-dot"></span>
            <span>${copy.heroTag}</span>
          </div>
          <h1>${copy.heroTitle}</h1>
          <p class="hero-lead">${copy.heroDesc}</p>
          <div class="hero-actions-row">
            <a class="button primary" href="${getUrl(lang, 'crops')}">
              <span>${copy.heroCropsBtn}</span>
            </a>
            <a class="button wa" href="https://wa.me/918080704715?text=${encodeURIComponent(t.floatingWaMsg)}" target="_blank" rel="noopener">
              ${whatsappSvg}
              <span>${copy.heroWaBtn}</span>
            </a>
          </div>
          <div class="hero-trust-bullets">
            <span>${checkSvg} ${lang === 'mr' ? 'संपूर्ण भारतात घाऊक पुरवठा' : lang === 'hi' ? 'पूरे देश में सुरक्षित डिलीवरी' : 'All-India Bulk Delivery'}</span>
            <span>${checkSvg} ${lang === 'mr' ? 'अस्सल खपली गहू विशेष' : lang === 'hi' ? 'शुद्ध खपली गेहूँ खास' : 'Pure Khapli Wheat Specialty'}</span>
            <span>${checkSvg} ${lang === 'mr' ? 'शेतकऱ्यांसाठी हमीभाव व खरेदी' : lang === 'hi' ? 'किसानों के लिए पक्का भाव व खरीद' : 'Guaranteed Fair Price for Farmers'}</span>
          </div>
        </div>

        <div class="hero-visual-card">
          <div class="hero-img-box">
            <img src="/data/crops/khapli-gahu.webp" width="768" height="1152" alt="Emmer Khapli Wheat Shetimay" fetchpriority="high">
          </div>
          <div class="hero-spec-footer">
            <div>
              <strong class="hero-spec-name">${copy.visualBadgeTitle}</strong>
              <span class="hero-spec-sub">${copy.visualBadgeSub}</span>
            </div>
            <span class="hero-spec-pill">${lang === 'mr' ? '५० किलो / ट्रक लोड' : lang === 'hi' ? '५० किग्रा / ट्रक लोड' : '50kg Bags / Truckloads'}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Credentials Strip -->
    <section class="trust-strip">
      <div class="wrap trust-strip-grid">
        <div class="trust-strip-item">
          <div class="trust-strip-icon-box">${truckSvg}</div>
          <div>
            <strong>${copy.t1Title}</strong>
            <span>${copy.t1Sub}</span>
          </div>
        </div>
        <div class="trust-strip-item">
          <div class="trust-strip-icon-box">${sproutSvg}</div>
          <div>
            <strong>${copy.t2Title}</strong>
            <span>${copy.t2Sub}</span>
          </div>
        </div>
        <div class="trust-strip-item">
          <div class="trust-strip-icon-box">${scaleSvg}</div>
          <div>
            <strong>${copy.t3Title}</strong>
            <span>${copy.t3Sub}</span>
          </div>
        </div>
        <div class="trust-strip-item">
          <div class="trust-strip-icon-box">${shieldCheckSvg}</div>
          <div>
            <strong>${copy.t4Title}</strong>
            <span>${copy.t4Sub}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Crops Section -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <div class="section-kicker">${copy.cropSecTag}</div>
          <h2>${copy.cropSecTitle}</h2>
          <p>${copy.cropSecDesc}</p>
        </div>
        <div class="crop-grid">
          ${cropsData.slice(0, 4).map(c => `
            <article class="crop-card">
              <div class="crop-thumb">
                <img src="${c.image}" width="768" height="1152" alt="${c.title[lang]}" loading="lazy">
                <span class="crop-badge ${c.badgeClass}">${c.badge[lang]}</span>
              </div>
              <div class="crop-body">
                <h3>${c.title[lang]}</h3>
                <p>${c.desc[lang]}</p>
                <div class="crop-card-footer">
                  <a class="crop-wa-btn" href="https://wa.me/918080704715?text=Hello%20Shetimay%2C%20I%20want%20to%20enquire%20about%20${c.waMsg}." target="_blank" rel="noopener">
                    ${whatsappSvg}
                    <span>${t.enquireWa}</span>
                  </a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 36px;">
          <a class="button primary" href="${getUrl(lang, 'crops')}">${copy.viewAllCrops}</a>
        </div>
      </div>
    </section>

    <!-- Pathways Section -->
    <section class="section subtle">
      <div class="wrap">
        <div class="section-head center">
          <div class="section-kicker">${copy.pathwaysTag}</div>
          <h2>${copy.pathwaysTitle}</h2>
        </div>
        <div class="pathway-grid">
          <article class="pathway-card farmer">
            <div class="pathway-badge-top">${lang === 'mr' ? 'शेतकरी भागीदारी व सेवा' : lang === 'hi' ? 'किसान सेवा व अनुबंध खेती' : 'Farmer Partnership & Sourcing'}</div>
            <h3>${copy.farmerCardTitle}</h3>
            <p>${copy.farmerCardDesc}</p>
            <a class="button outline" href="${getUrl(lang, 'farmers')}">${copy.farmerCardBtn}</a>
          </article>
          <article class="pathway-card buyer">
            <div class="pathway-badge-top">${lang === 'mr' ? 'व्यापारी व घाऊक पुरवठा' : lang === 'hi' ? 'व्यापारी व थोक आपूर्ति' : 'Wholesale Sourcing & Mills'}</div>
            <h3>${copy.buyerCardTitle}</h3>
            <p>${copy.buyerCardDesc}</p>
            <a class="button primary" href="${getUrl(lang, 'buyers')}">${copy.buyerCardBtn}</a>
          </article>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <div class="section-kicker">${copy.processTag}</div>
          <h2>${copy.processTitle}</h2>
        </div>
        <div class="process-steps">
          <article class="step-card">
            <span class="step-number">01</span>
            <h3>${copy.p1T}</h3>
            <p>${copy.p1D}</p>
          </article>
          <article class="step-card">
            <span class="step-number">02</span>
            <h3>${copy.p2T}</h3>
            <p>${copy.p2D}</p>
          </article>
          <article class="step-card">
            <span class="step-number">03</span>
            <h3>${copy.p3T}</h3>
            <p>${copy.p3D}</p>
          </article>
          <article class="step-card">
            <span class="step-number">04</span>
            <h3>${copy.p4T}</h3>
            <p>${copy.p4D}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section subtle">
      <div class="wrap">
        <div class="section-head">
          <div class="section-kicker">${copy.faqTag}</div>
          <h2>${copy.faqTitle}</h2>
        </div>
        <div class="faq-box">
          <details class="faq-item" open>
            <summary>${copy.f1Q}</summary>
            <p>${copy.f1A}</p>
          </details>
          <details class="faq-item">
            <summary>${copy.f2Q}</summary>
            <p>${copy.f2A}</p>
          </details>
          <details class="faq-item">
            <summary>${copy.f3Q}</summary>
            <p>${copy.f3A}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-clean-band">
      <div class="wrap cta-clean-inner">
        <div class="cta-clean-copy">
          <h2>${t.ctaTitle}</h2>
          <p>${t.ctaSub}</p>
        </div>
        <div class="cta-clean-actions">
          <a class="button wa" href="https://wa.me/918080704715?text=${encodeURIComponent(t.floatingWaMsg)}" target="_blank" rel="noopener">
            ${whatsappSvg}
            <span>${t.btnEnquiry}</span>
          </a>
          <a class="button outline-white" href="${getUrl(lang, 'contact')}">
            <span>${t.navContact}</span>
          </a>
        </div>
      </div>
    </section>
  `;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "AgriculturalService"],
        "@id": "https://shetimay.in/#organization",
        "name": "Shetimay Farmer Producer Company Limited",
        "alternateName": ["Shetimay FPC", "शेतिमाय शेतकरी उत्पादक कंपनी"],
        "url": "https://shetimay.in/",
        "logo": "https://shetimay.in/logo.jpeg",
        "image": "https://shetimay.in/data/crops/khapli-gahu-og.jpg",
        "email": config.email,
        "telephone": config.phones,
        "foundingDate": config.foundingDate,
        "description": "Registered Farmer Producer Company based in Dhule, Maharashtra. Direct procurement of Emmer (Khapli) wheat, pulses, oilseeds, and millets for merchants, mills, and food businesses.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "C/o Chatursing Girase, G.No. 68, Tawkheda",
          "addressLocality": "Shindkheda, Dhule",
          "addressRegion": "Maharashtra",
          "postalCode": "425408",
          "addressCountry": "IN"
        },
        "sameAs": ["https://www.instagram.com/shetimay_fpc/"]
      },
      {
        "@type": "WebSite",
        "@id": "https://shetimay.in/#website",
        "url": "https://shetimay.in/",
        "name": "Shetimay",
        "inLanguage": ["en-IN", "mr-IN", "hi-IN"]
      },
      {
        "@type": "FAQPage",
        "@id": `${config.domain}${getUrl(lang, 'home')}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": copy.f1Q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": copy.f1A
            }
          },
          {
            "@type": "Question",
            "name": copy.f2Q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": copy.f2A
            }
          },
          {
            "@type": "Question",
            "name": copy.f3Q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": copy.f3A
            }
          }
        ]
      }
    ]
  };

  return buildShell({
    lang,
    pageId: 'home',
    title: copy.title,
    description: copy.desc,
    ogTitle: copy.ogTitle,
    content,
    jsonLd
  });
}

// PAGE 2: ABOUT US
function renderAboutPage(lang) {
  const t = dict[lang];
  const copy = {
    en: {
      title: 'About Us | Shetimay Farmer Producer Company Dhule',
      desc: 'Learn about Shetimay FPC in Dhule, Maharashtra. Our mission "शेतकऱ्यांच्या सेवार्थ", farmer collective in Khandesh, and direct agricultural supply.',
      ogTitle: 'About Shetimay Farmer Producer Company | Dhule, Maharashtra',
      breadcrumb: 'About Us',
      tag: 'Our Foundation & Purpose',
      heroTitle: 'Rooted in Khandesh, connecting farmers directly with food businesses.',
      heroDesc: 'Registered Farmer Producer Company in Dhule, Maharashtra. Dedicated to farmer welfare ("शेतकऱ्यांच्या सेवार्थ") and reliable bulk grain supply.',
      storyTag: 'Our Story & Purpose',
      storyTitle: 'Started by farmers, built on trust and honest trade.',
      storyP1: 'Shetimay Farmer Producer Company was founded in Tawkheda (Dhule district, Maharashtra) with one clear mission: "शेतकऱ्यांच्या सेवार्थ" (In the service of farmers). We bring local farming families together, provide pure seeds, and ensure fair prices for their hard work.',
      storyP2: 'The Khandesh region is known for rich black soil, perfect for nutritious Khapli wheat, pulses, and millets. Shetimay sources these pure crops directly from farms and supplies them to wholesale buyers, flour mills, and dal mills with strict quality checks.',
      p1T: 'Fair Price for Farmers',
      p1D: 'No middlemen. Farmers get honest digital weighment and timely bank payment.',
      p2T: 'Pure & Genuine Grains',
      p2D: 'Every batch comes straight from trusted farmer fields in Dhule and Khandesh.',
      p3T: 'Reliable Bulk Supply',
      p3D: 'Cleaned, graded, and moisture-checked grains delivered safely across India.'
    },
    mr: {
      title: 'आमच्याबद्दल | शेतिमाय शेतकरी उत्पादक कंपनी धुळे',
      desc: 'शेतिमाय शेतकरी उत्पादक कंपनी धुळे बद्दल माहिती. "शेतकऱ्यांच्या सेवार्थ" हे ब्रीदवाक्य, खान्देशातील शेतकरी समूह आणि थेट शेतीमाल पुरवठा.',
      ogTitle: 'आमच्याबद्दल | शेतिमाय शेतकरी उत्पादक कंपनी | धुळे',
      breadcrumb: 'आमच्याबद्दल',
      tag: 'आमची स्थापना व उद्दिष्ट',
      heroTitle: 'खान्देशातील शेतकरी आणि देशभरातील व्यापारांना जोडणारी कंपनी.',
      heroDesc: 'धुळे, महाराष्ट्र येथील अधिकृत शेतकरी उत्पादक कंपनी. "शेतकऱ्यांच्या सेवार्थ" हे आमचे ब्रीदवाक्य असून आम्ही प्रामाणिक शेतीमाल खरेदी व पुरवठा करतो.',
      storyTag: 'आमचा प्रवास व ध्येय',
      storyTitle: 'शेतकऱ्यांनी सुरू केलेली, विश्वासावर उभी राहिलेली संस्था.',
      storyP1: 'शेतिमाय शेतकरी उत्पादक कंपनीची सुरुवात तावखेडा (जि. धुळे) येथे "शेतकऱ्यांच्या सेवार्थ" या विचाराने झाली. परिसरातील शेतकरी बांधवांना संघटित करून त्यांना चांगले बियाणे देणे आणि घामाच्या दाण्याला खात्रीशीर भाव मिळवून देणे हे आमचे उद्दिष्ट आहे.',
      storyP2: 'खान्देशची काळी कसदार जमीन पौष्टिक खपली गहू, डाळी व बाजरी-ज्वारीसाठी उत्तम आहे. शेतिमाय हा शेतीमाल थेट शेतातून गोळा करून गिरण्या आणि घाऊक व्यापाऱ्यांना शुद्ध स्वरूपात पुरवते.',
      p1T: 'शेतकऱ्यांना रास्त भाव',
      p1D: 'दलालांशिवाय थेट खरेदी, काट्यावर अचूक वजन आणि वेळेवर थेट बँक खात्यात पैसे.',
      p2T: 'अस्सल व स्वच्छ माल',
      p2D: 'प्रत्येक दाणा थेट धुळे व खान्देशातील शेतातील असल्यामुळे अस्सल दर्जाची १००% खात्री.',
      p3T: 'विश्वासार्ह घाऊक पुरवठा',
      p3D: 'व्यापारी व गिरण्यांना गरजेनुसार स्वच्छ, प्रतवारी केलेला माल वेळेत पोहोचवणे.'
    },
    hi: {
      title: 'हमारे बारे में | शेतिमाय किसान उत्पादक कंपनी धुले',
      desc: 'शेतिमाय किसान उत्पादक कंपनी धुले, महाराष्ट्र के बारे में जानें। "शेतकऱ्यांच्या सेवार्थ" हमारा ध्येय, खान्देश का किसान समूह और सीधी कृषि उपज।',
      ogTitle: 'हमारे बारे में | शेतिमाय किसान उत्पादक कंपनी | धुले',
      breadcrumb: 'हमारे बारे में',
      tag: 'हमारा उद्देश्य व स्थापना',
      heroTitle: 'खान्देश की मिट्टी से जुड़ी, किसानों और व्यापार को जोड़ने वाली कंपनी।',
      heroDesc: 'धुले, महाराष्ट्र में रजिस्टर्ड किसान उत्पादक कंपनी। "शेतकऱ्यांच्या सेवार्थ" (किसानों की सेवा में) हमारा संकल्प है।',
      storyTag: 'हमारी कहानी व मिशन',
      storyTitle: 'किसानों द्वारा शुरू की गई, भरोसे पर आधारित कंपनी।',
      storyP1: 'शेतिमाय किसान उत्पादक कंपनी की शुरुआत तावाखेड़ा (जिला धुले) में "शेतकऱ्यांच्या सेवार्थ" (किसानों की सेवा में) के संकल्प के साथ हुई। हम स्थानीय किसानों को अच्छे बीज, खेती की सलाह और उनकी मेहनत का सही भाव दिलाते हैं।',
      storyP2: 'खान्देश की उपजाऊ काली मिट्टी पौष्टिक खपली गेहूँ, देशी दालों और मोटे अनाजों के लिए बहुत अच्छी है। शेतिमाय यह अनाज सीधे किसानों से खरीदकर आटा-दाल मिलों और व्यापारियों तक पहुंचाती है।',
      p1T: 'किसानों को सही भाव',
      p1D: 'बिना किसी दलाल के सीधी खरीद, कांटे पर सही तौल और बैंक खाते में समय पर भुगतान।',
      p2T: 'शुद्ध और असली अनाज',
      p2D: 'सीधे खान्देश के खेतों से संकलित अनाज, जिससे शुद्धता की पूरी गारंटी मिलती है।',
      p3T: 'समय पर सुरक्षित डिलीवरी',
      p3D: 'मिलों और व्यापारियों को मांग के अनुसार साफ़ अनाज समय पर पहुंचाना।'
    }
  }[lang];

  const content = `
    <!-- Page Hero -->
    <section class="page-hero-clean">
      <div class="wrap">
        <div class="breadcrumb-clean">
          <a href="${getUrl(lang, 'home')}">${t.breadcrumbHome}</a>
          <span class="sep">/</span>
          <span class="current">${copy.breadcrumb}</span>
        </div>
        <div class="page-hero-tag">${copy.tag}</div>
        <h1>${copy.heroTitle}</h1>
        <p>${copy.heroDesc}</p>
      </div>
    </section>

    <!-- Story Split -->
    <section class="section">
      <div class="wrap split-showcase">
        <div class="split-image-box">
          <img src="/data/from_farmers/farmer-field.webp" width="768" height="1152" alt="Shetimay Farmer Collective" loading="lazy">
          <div class="split-badge-tag">${mapPinSvg} <span>Tawkheda, Dhule (Khandesh)</span></div>
        </div>
        <div class="split-text">
          <div class="section-kicker">${copy.storyTag}</div>
          <h2>${copy.storyTitle}</h2>
          <p>${copy.storyP1}</p>
          <p>${copy.storyP2}</p>
        </div>
      </div>
    </section>

    <!-- Pillars Grid -->
    <section class="section subtle">
      <div class="wrap">
        <div class="section-head center">
          <div class="section-kicker">${lang === 'mr' ? 'विश्वास व तत्त्वे' : lang === 'hi' ? 'भरोसा व सिद्धांत' : 'Our Commitments'}</div>
          <h2>${lang === 'mr' ? 'शेतिमायचे ३ मुख्य नियम' : lang === 'hi' ? 'शेतिमाय की ३ मुख्य बातें' : 'What Guides Our Work'}</h2>
        </div>
        <div class="grid-3">
          <article class="clean-card">
            <div class="clean-card-icon">${scaleSvg}</div>
            <h3>${copy.p1T}</h3>
            <p>${copy.p1D}</p>
          </article>
          <article class="clean-card">
            <div class="clean-card-icon">${wheatSvg}</div>
            <h3>${copy.p2T}</h3>
            <p>${copy.p2D}</p>
          </article>
          <article class="clean-card">
            <div class="clean-card-icon">${handshakeSvg}</div>
            <h3>${copy.p3T}</h3>
            <p>${copy.p3D}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-clean-band">
      <div class="wrap cta-clean-inner">
        <div class="cta-clean-copy">
          <h2>${t.ctaTitle}</h2>
          <p>${t.ctaSub}</p>
        </div>
        <div class="cta-clean-actions">
          <a class="button wa" href="https://wa.me/918080704715?text=${encodeURIComponent(t.floatingWaMsg)}" target="_blank" rel="noopener">
            ${whatsappSvg}
            <span>${t.btnEnquiry}</span>
          </a>
          <a class="button outline-white" href="${getUrl(lang, 'contact')}">
            <span>${t.navContact}</span>
          </a>
        </div>
      </div>
    </section>
  `;

  return buildShell({
    lang,
    pageId: 'about',
    title: copy.title,
    description: copy.desc,
    ogTitle: copy.ogTitle,
    content,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": `${config.domain}${getUrl(lang, 'about')}#about`,
          "name": copy.title,
          "description": copy.desc,
          "url": `${config.domain}${getUrl(lang, 'about')}`
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${config.domain}${getUrl(lang, 'about')}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": t.breadcrumbHome,
              "item": `${config.domain}${getUrl(lang, 'home')}`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": copy.breadcrumb,
              "item": `${config.domain}${getUrl(lang, 'about')}`
            }
          ]
        }
      ]
    }
  });
}

// PAGE 3: CROPS & PRODUCE
function renderCropsPage(lang) {
  const t = dict[lang];
  const copy = {
    en: {
      title: 'Crops & Farm Produce | Khapli Wheat, Pulses & Grains | Shetimay',
      desc: 'Buy pure farm produce from Shetimay: Khapli wheat, chana, moong, tur, soybean, Lokwan wheat, bajra, and jowar directly sourced from Dhule farmers.',
      ogTitle: 'Agricultural Produce & Sourcing Portfolio | Shetimay FPC',
      breadcrumb: 'Crops & Produce',
      tag: '8 Farm-Sourced Produce',
      heroTitle: 'Farm produce available for wholesale purchase.',
      heroDesc: 'Freshly harvested, cleaned, and tested grains, pulses, and oilseeds directly from Dhule and Khandesh farmers.',
      spotlightTag: 'Main Crop',
      spotlightTitle: 'Khapli Wheat (Emmer Wheat) — Direct Farm Supply',
      spotlightDesc: 'Khapli wheat is our main heritage crop. High in dietary fiber, low sugar spike, and easy on digestion. Sourced directly from our partner farmers in Dhule.',
      spotlightC1: 'Natural ancient wheat with high fiber, light on digestion.',
      spotlightC2: 'Available raw or machine-cleaned and graded as needed.',
      spotlightC3: 'Supplied in 50kg bags or full truckloads across India.',
      spotlightBtn: 'Ask for Khapli Wheat Rates',
      catalogTag: 'Produce List',
      catalogTitle: 'All 8 Crops Available in Bulk',
      catalogDesc: 'Graded, moisture-checked grains and pulses ready for flour mills, dal mills, and wholesale merchants.'
    },
    mr: {
      title: 'शेतीमाल व पिके | खपली गहू, डाळी, धान्य | शेतिमाय',
      desc: 'शेतिमाय शेतकरी कंपनीकडील शेतीमाल: खपली गहू, हरभरा (चना), मूग, तूर, सोयाबीन, लोकवन गहू, बाजरी आणि ज्वारी. धुळ्यातील शेतकऱ्यांकडून थेट खरेदी.',
      ogTitle: 'शेतीमाल व पिके | शेतिमाय शेतकरी उत्पादक कंपनी',
      breadcrumb: 'शेतीमाल व पिके',
      tag: '८ प्रमुख शेतीमाल',
      heroTitle: 'घाऊक खरेदीसाठी उपलब्ध अस्सल शेतीमाल.',
      heroDesc: 'धुळे व खान्देशातील शेतांतून थेट खरेदी केलेली, स्वच्छ आणि ओलावा तपासलेली पिके गिरण्या व व्यापाऱ्यांसाठी उपलब्ध.',
      spotlightTag: 'खास पीक',
      spotlightTitle: 'खपली गहू (Khapli Wheat) — अस्सल व पौष्टिक गहू',
      spotlightDesc: 'खपली गहू हे शेतिमायचे मुख्य पीक आहे. भरपूर फायबर, पचनास हलका आणि आरोग्यासाठी चांगला असलेला हा पारंपरिक गहू आम्ही स्थानिक शेतकऱ्यांकडून थेट खरेदी करतो.',
      spotlightC1: 'भरपूर फायबर, पचनास हलका आणि आरोग्यासाठी उत्तम.',
      spotlightC2: 'कच्चा किंवा मशीनने स्वच्छ केलेला माल गरजेनुसार उपलब्ध.',
      spotlightC3: '५० किलो गोणी किंवा थेट ट्रक लोड वाहतूक.',
      spotlightBtn: 'खपली गव्हासाठी थेट संपर्क करा',
      catalogTag: 'शेतीमाल यादी',
      catalogTitle: 'घाऊक खरेदीसाठी उपलब्ध सर्व ८ पिके',
      catalogDesc: 'डाळ मिल, पिठाच्या गिरण्या आणि व्यापाऱ्यांसाठी स्वच्छ व दर्जेदार शेतीमाल.'
    },
    hi: {
      title: 'फसलें और अनाज | खपली गेहूँ, दालें, अनाज | शेतिमाय',
      desc: 'शेतिमाय किसान कंपनी की फसलें: खपली गेहूँ, चना, मूँग, अरहर, सोयाबीन, लोकवन गेहूँ, बाजरा और सफेद ज्वार सीधे धुले के किसानों से प्राप्त।',
      ogTitle: 'कृषि उत्पाद और फसलें | शेतिमाय किसान उत्पादक कंपनी',
      breadcrumb: 'फसलें और अनाज',
      tag: '८ मुख्य कृषि उत्पाद',
      heroTitle: 'थोक खरीद के लिए उपलब्ध कृषि उपज।',
      heroDesc: 'धुले और खान्देश के किसानों से सीधे खरीदा गया, साफ़ और क्वालिटी चेक किया हुआ अनाज व दालें।',
      spotlightTag: 'खास फसल',
      spotlightTitle: 'खपली गेहूँ (Khapli Wheat) — पौष्टिक प्राचीन गेहूँ',
      spotlightDesc: 'खपली गेहूँ शेतिमाय की मुख्य फसल है। फाइबर से भरपूर, पचने में आसान और सेहत के लिए फायदेमंद। यह गेहूँ हम सीधे किसान भाइयों से खरीदते हैं।',
      spotlightC1: 'प्राकृतिक फाइबर से भरपूर, पचने में आसान और पौष्टिक।',
      spotlightC2: 'कच्चा या मशीन से साफ़ और ग्रेडेड माल उपलब्ध।',
      spotlightC3: '५० किलो बोरी या पूरा ट्रक लोड, पूरे देश में कहीं भी डिलीवरी।',
      spotlightBtn: 'खपली गेहूँ के भाव पूछें',
      catalogTag: 'उपज सूची',
      catalogTitle: 'थोक खरीद के लिए उपलब्ध सभी ८ फसलें',
      catalogDesc: 'दाल मिलों, आटा मिलों और थोक व्यापारियों के लिए साफ़ और तैयार अनाज।'
    }
  }[lang];

  const content = `
    <!-- Page Hero -->
    <section class="page-hero-clean">
      <div class="wrap">
        <div class="breadcrumb-clean">
          <a href="${getUrl(lang, 'home')}">${t.breadcrumbHome}</a>
          <span class="sep">/</span>
          <span class="current">${copy.breadcrumb}</span>
        </div>
        <div class="page-hero-tag">${copy.tag}</div>
        <h1>${copy.heroTitle}</h1>
        <p>${copy.heroDesc}</p>
      </div>
    </section>

    <!-- Khapli Spotlight -->
    <section class="section" id="khapli">
      <div class="wrap split-showcase">
        <div class="split-image-box">
          <img src="/data/crops/khapli-gahu.webp" width="768" height="1152" alt="Emmer Khapli Wheat" loading="lazy">
          <div class="split-badge-tag">${wheatSvg} <span>${lang === 'mr' ? 'खास खपली गहू' : lang === 'hi' ? 'खास खपली गेहूँ' : 'Special Khapli Wheat'}</span></div>
        </div>
        <div class="split-text">
          <div class="section-kicker">${copy.spotlightTag}</div>
          <h2>${copy.spotlightTitle}</h2>
          <p>${copy.spotlightDesc}</p>
          <ul class="feature-check-list">
            <li>${copy.spotlightC1}</li>
            <li>${copy.spotlightC2}</li>
            <li>${copy.spotlightC3}</li>
          </ul>
          <a class="button wa" href="https://wa.me/918080704715?text=Hello%20Shetimay%2C%20I%20am%20interested%20in%20Emmer%20(Khapli)%20wheat%20supply." target="_blank" rel="noopener">
            ${whatsappSvg}
            <span>${copy.spotlightBtn}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Full Crop Catalog -->
    <section class="section subtle">
      <div class="wrap">
        <div class="section-head">
          <div class="section-kicker">${copy.catalogTag}</div>
          <h2>${copy.catalogTitle}</h2>
          <p>${copy.catalogDesc}</p>
        </div>
        <div class="crop-grid">
          ${cropsData.map(c => `
            <article class="crop-card" id="${c.id}">
              <div class="crop-thumb">
                <img src="${c.image}" width="768" height="1152" alt="${c.title[lang]}" loading="lazy">
                <span class="crop-badge ${c.badgeClass}">${c.badge[lang]}</span>
              </div>
              <div class="crop-body">
                <h3>${c.title[lang]}</h3>
                <p>${c.desc[lang]}</p>
                <div class="crop-card-footer">
                  <a class="crop-wa-btn" href="https://wa.me/918080704715?text=Hello%20Shetimay%2C%20I%20want%20to%20enquire%20about%20${c.waMsg}." target="_blank" rel="noopener">
                    ${whatsappSvg}
                    <span>${t.enquireWa}</span>
                  </a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-clean-band">
      <div class="wrap cta-clean-inner">
        <div class="cta-clean-copy">
          <h2>${t.ctaTitle}</h2>
          <p>${t.ctaSub}</p>
        </div>
        <div class="cta-clean-actions">
          <a class="button wa" href="https://wa.me/918080704715?text=${encodeURIComponent(t.floatingWaMsg)}" target="_blank" rel="noopener">
            ${whatsappSvg}
            <span>${t.btnEnquiry}</span>
          </a>
          <a class="button outline-white" href="${getUrl(lang, 'contact')}">
            <span>${t.navContact}</span>
          </a>
        </div>
      </div>
    </section>
  `;

  return buildShell({
    lang,
    pageId: 'crops',
    title: copy.title,
    description: copy.desc,
    ogTitle: copy.ogTitle,
    content,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `${config.domain}${getUrl(lang, 'crops')}#collection`,
          "name": copy.title,
          "description": copy.desc,
          "url": `${config.domain}${getUrl(lang, 'crops')}`
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${config.domain}${getUrl(lang, 'crops')}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": t.breadcrumbHome,
              "item": `${config.domain}${getUrl(lang, 'home')}`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": copy.breadcrumb,
              "item": `${config.domain}${getUrl(lang, 'crops')}`
            }
          ]
        },
        {
          "@type": "ItemList",
          "@id": `${config.domain}${getUrl(lang, 'crops')}#itemlist`,
          "name": copy.catalogTitle,
          "itemListElement": cropsData.map((c, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
              "@type": "Product",
              "name": c.title[lang],
              "description": c.desc[lang],
              "image": `${config.domain}${c.image}`,
              "category": "Agricultural Produce"
            }
          }))
        }
      ]
    }
  });
}

// PAGE 4: FOR BUYERS
function renderBuyersPage(lang) {
  const t = dict[lang];
  const copy = {
    en: {
      title: 'Wholesale Grain Sourcing (All-India) | Khapli Wheat, Pulses & Grains | Shetimay',
      desc: 'Buy pure Khapli wheat, pulses, and grains in bulk (50kg bags to truckloads) directly from Maharashtra farmers. Safe transport dispatch to any state in India.',
      ogTitle: 'Wholesale Agri Sourcing Across India | Shetimay Farmer Producer Company',
      breadcrumb: 'For Buyers (Bulk Supply)',
      tag: 'All-India Bulk Grain Supply',
      heroTitle: 'Direct farm grain sourcing & bulk supply across all India.',
      heroDesc: 'Supplying flour mills, dal mills, chakki brands, and grain merchants across India with pure Khapli wheat, pulses, and grains in 50kg bags or full truckloads.',
      advTag: 'Benefits for Buyers',
      advTitle: 'Why source directly from Shetimay?',
      a1T: 'Direct Farm Rates (No Middlemen)',
      a1D: 'Buy straight from farmer groups without broker markups, commission cuts, or extra charges.',
      a2T: '50kg Bags to Full Truckloads',
      a2D: 'Flexible supply from trial bags (50kg) to 10, 20, or 30-ton trucks dispatched directly.',
      a3T: 'Cleaned, Graded & Moisture Tested',
      a3D: 'Choose raw farm crop or machine-cleaned grain, properly tested for moisture and purity.',
      a4T: 'Transport Across All India',
      a4D: 'Safe truck delivery arranged to Gujarat, MP, Delhi, Rajasthan, South India, or any state.'
    },
    mr: {
      title: 'खरेदीदारांसाठी घाऊक शेतीमाल पुरवठा (संपूर्ण भारत) | शेतिमाय धुळे',
      desc: 'देशभरातील व्यापारी, गिरण्या व कंपन्यांसाठी खपली गहू, डाळी व धान्याची थेट घाऊक खरेदी. ५० किलो गोणी ते ट्रक लोड, संपूर्ण भारतात सुरक्षित वाहतूक.',
      ogTitle: 'खरेदीदारांसाठी घाऊक शेतीमाल पुरवठा | शेतिमाय शेतकरी उत्पादक कंपनी',
      breadcrumb: 'खरेदीदारांसाठी (घाऊक माल)',
      tag: 'संपूर्ण भारतात घाऊक पुरवठा',
      heroTitle: 'शेतकऱ्यांकडून थेट अस्सल शेतीमालाचा संपूर्ण भारतात पुरवठा.',
      heroDesc: 'डाळ मिल, पिठाच्या गिरण्या, चक्की आणि घाऊक व्यापाऱ्यांसाठी थेट शेतातून शुद्ध खपली गहू, डाळी व धान्य — ५० किलो गोणी किंवा थेट ट्रक लोड.',
      advTag: 'घाऊक खरेदीचे फायदे',
      advTitle: 'शेतिमायकडून खरेदी करण्याचे मुख्य फायदे',
      a1T: 'थेट शेतातून रास्त भाव (दलालमुक्त)',
      a1D: 'मध्यस्थांशिवाय थेट शेतकरी कंपनीकडून खरेदी; कोणतीही दलाली किंवा जादा कमिशन नाही.',
      a2T: '५० किलो गोणी ते पूर्ण ट्रक लोड',
      a2D: 'सॅम्पल गोणी (५० किलो) पासून ते २०-३० टनांच्या ट्रक लोडपर्यंत सर्व गरजेनुसार पुरवठा.',
      a3T: 'स्वच्छ प्रतवारी व ओलावा तपासणी',
      a3D: 'मागणीनुसार कच्चा किंवा मशीनने स्वच्छ केलेला माल, ओलावा तपासून गोणीत भरला जातो.',
      a4T: 'संपूर्ण भारतात सुरक्षित वाहतूक',
      a4D: 'गुजरात, मध्य प्रदेश, दिल्ली, राजस्थान किंवा दक्षिणेतील कोणत्याही राज्यात माल पोहोचवण्याची सोय.'
    },
    hi: {
      title: 'व्यापारियों और मिलों के लिए अनाज (पूरे देश में डिलीवरी) | शेतिमाय धुले',
      desc: 'व्यापारियों, आटा-दाल मिलों और दुकानों के लिए खपली गेहूँ, दालें और अनाज। ५० किलो बोरी से लेकर पूरा ट्रक लोड, पूरे देश में माल भेजने की व्यवस्था।',
      ogTitle: 'व्यापारियों और मिलों के लिए अनाज खरीद | शेतिमाय FPC',
      breadcrumb: 'व्यापारियों के लिए (अनाज खरीद)',
      tag: 'पूरे देश में डिलीवरी',
      heroTitle: 'खेतों से सीधा अनाज, आपके गोदाम या मिल तक डिलीवरी।',
      heroDesc: 'दाल मिलों, आटा मिलों, चक्की और अनाज व्यापारियों के लिए महाराष्ट्र के खेतों से सीधे शुद्ध खपली गेहूँ, दालें और अनाज — ५० किलो बोरी से लेकर पूरा ट्रक लोड।',
      advTag: 'व्यापारियों के लिए फायदे',
      advTitle: 'शेतिमाय से अनाज खरीदने के मुख्य फायदे',
      a1T: 'सीधे खेत से सही भाव (बिना दलाल)',
      a1D: 'बिना किसी दलाल या आढ़त के सीधे किसान कंपनी से खरीद, साफ़ और पारदर्शी भाव।',
      a2T: '५० किलो बोरी से पूरा ट्रक लोड',
      a2D: 'सैंपल ऑर्डर (५० किलो बोरी) से लेकर २०-३० टन के बड़े ट्रक लोड तक जैसी आपकी जरूरत हो।',
      a3T: 'साफ़, ग्रेडेड व नमी चेक किया हुआ',
      a3D: 'मांग के अनुसार कच्चा या मशीन से साफ़ माल, नमी और क्वालिटी चेक करके तैयार।',
      a4T: 'पूरे भारत में ट्रांसपोर्ट सुविधा',
      a4D: 'गुजरात, मध्य प्रदेश, दिल्ली, राजस्थान या दक्षिण भारत के किसी भी शहर तक सुरक्षित माल भेजने की व्यवस्था।'
    }
  }[lang];

  const content = `
    <!-- Page Hero -->
    <section class="page-hero-clean">
      <div class="wrap">
        <div class="breadcrumb-clean">
          <a href="${getUrl(lang, 'home')}">${t.breadcrumbHome}</a>
          <span class="sep">/</span>
          <span class="current">${copy.breadcrumb}</span>
        </div>
        <div class="page-hero-tag">${copy.tag}</div>
        <h1>${copy.heroTitle}</h1>
        <p>${copy.heroDesc}</p>
      </div>
    </section>

    <!-- Advantages Grid -->
    <section class="section">
      <div class="wrap">
        <div class="section-head center">
          <div class="section-kicker">${copy.advTag}</div>
          <h2>${copy.advTitle}</h2>
        </div>
        <div class="grid-3" style="grid-template-columns: repeat(2, 1fr);">
          <article class="clean-card">
            <div class="clean-card-icon">${wheatSvg}</div>
            <h3>${copy.a1T}</h3>
            <p>${copy.a1D}</p>
          </article>
          <article class="clean-card">
            <div class="clean-card-icon">${packageSvg}</div>
            <h3>${copy.a2T}</h3>
            <p>${copy.a2D}</p>
          </article>
          <article class="clean-card">
            <div class="clean-card-icon">${shieldCheckSvg}</div>
            <h3>${copy.a3T}</h3>
            <p>${copy.a3D}</p>
          </article>
          <article class="clean-card">
            <div class="clean-card-icon">${truckSvg}</div>
            <h3>${copy.a4T}</h3>
            <p>${copy.a4D}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-clean-band">
      <div class="wrap cta-clean-inner">
        <div class="cta-clean-copy">
          <h2>${t.ctaTitle}</h2>
          <p>${t.ctaSub}</p>
        </div>
        <div class="cta-clean-actions">
          <a class="button wa" href="https://wa.me/918080704715?text=${encodeURIComponent(t.floatingWaMsg)}" target="_blank" rel="noopener">
            ${whatsappSvg}
            <span>${t.btnEnquiry}</span>
          </a>
          <a class="button outline-white" href="${getUrl(lang, 'contact')}">
            <span>${t.navContact}</span>
          </a>
        </div>
      </div>
    </section>
  `;

  return buildShell({
    lang,
    pageId: 'buyers',
    title: copy.title,
    description: copy.desc,
    ogTitle: copy.ogTitle,
    content,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${config.domain}${getUrl(lang, 'buyers')}#service`,
          "name": copy.title,
          "description": copy.desc,
          "serviceType": "Wholesale Grain Sourcing & Supply",
          "areaServed": "India",
          "provider": {
            "@type": "Organization",
            "name": "Shetimay Farmer Producer Company Limited",
            "url": "https://shetimay.in/"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${config.domain}${getUrl(lang, 'buyers')}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": t.breadcrumbHome,
              "item": `${config.domain}${getUrl(lang, 'home')}`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": copy.breadcrumb,
              "item": `${config.domain}${getUrl(lang, 'buyers')}`
            }
          ]
        }
      ]
    }
  });
}

// PAGE 5: FOR FARMERS
function renderFarmersPage(lang) {
  const t = dict[lang];
  const copy = {
    en: {
      title: 'For Farmers: Contract Farming & Direct Crop Sale | Guaranteed Price | Shetimay',
      desc: 'Partner with Shetimay for contract farming: good seeds provided and guaranteed good prices at harvest. Or sell your harvested crops directly on digital scales with fast bank payment.',
      ogTitle: 'Contract Farming & Fair Crop Purchase for Farmers | Shetimay FPC',
      breadcrumb: 'For Farmers (Contract Farming)',
      tag: 'Contract Farming & Farmer Services • शेतकऱ्यांच्या सेवार्थ',
      heroTitle: 'Contract farming with good seeds, guaranteed prices, and direct crop purchase.',
      heroDesc: 'We work directly with farmers. Get pure seeds, crop guidance, guaranteed purchase price at harvest (हमीभाव), or sell your harvested crop directly.',
      bTag: 'What We Offer Farmers',
      bTitle: 'Four simple promises to every farmer partner',
      b1T: '1. Contract Farming (कॉन्ट्रॅक्ट फार्मिंग)',
      b1D: 'Partner with us before sowing: we provide pure seeds (especially Khapli wheat) and guarantee a fixed good purchase price when the crop is harvested, protecting you from market price drops.',
      b2T: '2. Direct Crop Purchase (थेट माल खरेदी)',
      b2D: 'Any farmer can bring their harvested Khapli wheat, chana, moong, tur, soybean, bajra, or jowar directly to Shetimay. No middlemen, no broker cuts.',
      b3T: '3. 100% Accurate Digital Weighing',
      b3D: 'Transparent weighing on computerized electronic scales. Accurate weight and direct bank transfer without delays or deductions.',
      b4T: '4. Pure Seeds & Practical Advice',
      b4D: 'Get high-germination Khapli wheat seeds along with practical guidance on sowing, fertilizer, and water management.'
    },
    mr: {
      title: 'शेतकऱ्यांसाठी: कॉन्ट्रॅक्ट फार्मिंग व थेट शेतीमाल खरेदी | खात्रीशीर चांगला भाव | शेतिमाय',
      desc: 'शेतिमायसोबत कॉन्ट्रॅक्ट फार्मिंग करा: अस्सल बियाणे व काढणीच्या वेळी आधीच ठरलेला चांगला भाव (हमीभाव). किंवा आपला शेतीमाल इलेक्ट्रॉनिक काट्यावर मोजून थेट रास्त भावात विका.',
      ogTitle: 'शेतकऱ्यांसाठी कॉन्ट्रॅक्ट फार्मिंग व थेट खरेदी | शेतिमाय शेतकरी कंपनी',
      breadcrumb: 'शेतकऱ्यांसाठी (कॉन्ट्रॅक्ट फार्मिंग)',
      tag: 'कॉन्ट्रॅक्ट फार्मिंग व शेतकरी सेवा • शेतकऱ्यांच्या सेवार्थ',
      heroTitle: 'अस्सल बियाण्यांसह कॉन्ट्रॅक्ट फार्मिंग, खात्रीशीर चांगला भाव आणि थेट शेतीमाल खरेदी.',
      heroDesc: 'शेतकऱ्यांच्या घामाच्या दाण्याला योग्य भाव मिळावा म्हणून आम्ही काम करतो. शुद्ध बियाणे, शेती सल्ला, हमखास खरेदी किंवा आपला तयार शेतीमाल थेट रास्त भावात विका.',
      bTag: 'शेतकऱ्यांसाठी ४ मुख्य सुविधा',
      bTitle: 'शेतकरी बांधवांसाठी शेतिमायच्या प्रमुख सेवा',
      b1T: '१. कॉन्ट्रॅक्ट फार्मिंग (Contract Farming)',
      b1D: 'पेरणीपूर्वीच आमच्याशी करार करा: आम्ही अस्सल खपली गहू बियाणे देतो आणि काढणीच्या वेळी आधीच ठरलेला चांगला भाव (हमीभाव) देतो. त्यामुळे बाजारात भाव घसरले तरी तुमचे नुकसान होत नाही.',
      b2T: '२. थेट शेतीमाल खरेदी (Direct Sale)',
      b2D: 'कोणताही शेतकरी आपला तयार माल (खपली गहू, हरभरा, मूग, तूर, सोयाबीन, बाजरी, ज्वारी) थेट शेतिमायला विकू शकतो. कोणतीही दलाली किंवा अडत नाही.',
      b3T: '३. काट्यावर अचूक वजन व थेट बँक पेमेंट',
      b3D: 'इलेक्ट्रॉनिक काट्यावर १००% अचूक वजन. मालाचे पैसे कोणत्याही कपातीशिवाय थेट तुमच्या बँक खात्यात वेळेवर जमा.',
      b4T: '४. अस्सल बियाणे व शेती सल्ला',
      b4D: 'उत्तम उगवणक्षमता असलेले शुद्ध खपली गहू बियाणे आणि पेरणीपासून काढणीपर्यंत पिकाची काळजी घेण्यासाठी योग्य सल्ला.'
    },
    hi: {
      title: 'किसानों के लिए: कॉन्ट्रैक्ट फार्मिंग व सीधी फसल खरीद | पक्का अच्छा भाव | शेतिमाय',
      desc: 'शेतिमाय के साथ कॉन्ट्रैक्ट फार्मिंग करें: शुद्ध बीज और कटाई पर तय किया हुआ अच्छा भाव (हमीभाव)। अथवा अपनी तैयार फसल इलेक्ट्रॉनिक कांटे पर सीधे सही भाव में बेचें।',
      ogTitle: 'किसानों के लिए अनुबंध खेती व सीधी फसल खरीद | शेतिमाय FPC',
      breadcrumb: 'किसानों के लिए (कॉन्ट्रैक्ट फार्मिंग)',
      tag: 'अनुबंध खेती व किसान सेवाएँ • शेतकऱ्यांच्या सेवार्थ',
      heroTitle: 'शुद्ध बीजों के साथ कॉन्ट्रैक्ट फार्मिंग, पक्का अच्छा भाव और सीधी फसल खरीद।',
      heroDesc: 'बुवाई से कटाई तक किसानों के साथ। अच्छे बीज, खेती की सलाह, पहले से तय भाव पर खरीद अथवा अपनी तैयार फसल सीधे बेचें।',
      bTag: 'किसानों के लिए ४ मुख्य सेवाएँ',
      bTitle: 'किसान भाइयों के लिए शेतिमाय की समर्पित सेवाएँ',
      b1T: '१. कॉन्ट्रैक्ट फार्मिंग (अनुबंध खेती)',
      b1D: 'बुवाई से पहले हमारे साथ जुड़ें: हम शुद्ध खपली गेहूँ बीज देते हैं और कटाई के समय का तय अच्छा भाव देते हैं। इससे मंडी में भाव गिरने पर भी आपकी कमाई सुरक्षित रहती है।',
      b2T: '२. खेत से सीधी फसल खरीद',
      b2D: 'कोई भी किसान अपनी तैयार फसल (खपली गेहूँ, चना, मूँग, अरहर, सोयाबीन, बाजरा, ज्वार) सीधे शेतिमाय को बेच सकता है। बिना किसी दलाली या आढ़त के।',
      b3T: '३. कांटे पर सही तौल और सीधा बैंक भुगतान',
      b3D: 'कंप्यूटर कांटे पर १००% सही तौल। तय पैसे बिना किसी कटौती के सीधे आपके बैंक खाते में समय पर जमा।',
      b4T: '४. शुद्ध बीज और खेती की सलाह',
      b4D: 'अच्छी अंकुरण क्षमता वाले शुद्ध खपली गेहूँ बीज और बुवाई, खाद व सिंचाई की सही व्यावहारिक सलाह।'
    }
  }[lang];

  const content = `
    <!-- Page Hero -->
    <section class="page-hero-clean">
      <div class="wrap">
        <div class="breadcrumb-clean">
          <a href="${getUrl(lang, 'home')}">${t.breadcrumbHome}</a>
          <span class="sep">/</span>
          <span class="current">${copy.breadcrumb}</span>
        </div>
        <div class="page-hero-tag">${copy.tag}</div>
        <h1>${copy.heroTitle}</h1>
        <p>${copy.heroDesc}</p>
      </div>
    </section>

    <!-- Support Grid -->
    <section class="section">
      <div class="wrap">
        <div class="section-head center">
          <div class="section-kicker">${copy.bTag}</div>
          <h2>${copy.bTitle}</h2>
        </div>
        <div class="grid-3" style="grid-template-columns: repeat(2, 1fr);">
          <article class="clean-card">
            <div class="clean-card-icon">${wheatSvg}</div>
            <h3>${copy.b1T}</h3>
            <p>${copy.b1D}</p>
          </article>
          <article class="clean-card">
            <div class="clean-card-icon">${bulbSvg}</div>
            <h3>${copy.b2T}</h3>
            <p>${copy.b2D}</p>
          </article>
          <article class="clean-card">
            <div class="clean-card-icon">${handshakeSvg}</div>
            <h3>${copy.b3T}</h3>
            <p>${copy.b3D}</p>
          </article>
          <article class="clean-card">
            <div class="clean-card-icon">${scaleSvg}</div>
            <h3>${copy.b4T}</h3>
            <p>${copy.b4D}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-clean-band">
      <div class="wrap cta-clean-inner">
        <div class="cta-clean-copy">
          <h2>${t.ctaTitle}</h2>
          <p>${t.ctaSub}</p>
        </div>
        <div class="cta-clean-actions">
          <a class="button wa" href="https://wa.me/918080704715?text=${encodeURIComponent(t.floatingWaMsg)}" target="_blank" rel="noopener">
            ${whatsappSvg}
            <span>${t.btnEnquiry}</span>
          </a>
          <a class="button outline-white" href="tel:+918080704715">
            ${phoneSvg}
            <span>${t.callUs}</span>
          </a>
        </div>
      </div>
    </section>
  `;

  return buildShell({
    lang,
    pageId: 'farmers',
    title: copy.title,
    description: copy.desc,
    ogTitle: copy.ogTitle,
    content,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${config.domain}${getUrl(lang, 'farmers')}#service`,
          "name": copy.title,
          "description": copy.desc,
          "serviceType": "Contract Farming & Direct Crop Procurement",
          "areaServed": "Maharashtra",
          "provider": {
            "@type": "Organization",
            "name": "Shetimay Farmer Producer Company Limited",
            "url": "https://shetimay.in/"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${config.domain}${getUrl(lang, 'farmers')}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": t.breadcrumbHome,
              "item": `${config.domain}${getUrl(lang, 'home')}`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": copy.breadcrumb,
              "item": `${config.domain}${getUrl(lang, 'farmers')}`
            }
          ]
        }
      ]
    }
  });
}

// PAGE 6: CONTACT
function renderContactPage(lang) {
  const t = dict[lang];
  const copy = {
    en: {
      title: 'Contact Us | Shetimay Farmer Producer Company Dhule',
      desc: 'Contact Shetimay in Tawkheda, Shindkheda, Dhule, Maharashtra. Call +91 80807 04715, WhatsApp or email for bulk grain supply and farmer partnerships.',
      ogTitle: 'Contact Shetimay Farmer Producer Company | Dhule',
      breadcrumb: 'Contact',
      tag: 'Get In Touch',
      heroTitle: 'Talk directly with our team in Dhule, Maharashtra.',
      heroDesc: 'Whether you are a grain trader, flour mill, dal mill, or a local farmer, we are here to assist you.',
      infoTitle: 'Office Address & Phone Numbers',
      quickTitle: 'Start a Quick WhatsApp Chat',
      q1T: 'Wholesale Buyer Enquiry (All-India)',
      q1S: 'Bulk rates (50kg bags to truckloads) for Khapli wheat, pulses, or grains',
      q2T: 'Farmer Contract Farming & Crop Sale',
      q2S: 'Join contract farming, get pure seeds, or sell your harvested crop',
      q3T: 'General Office Enquiry',
      q3S: 'Company details or general enquiry'
    },
    mr: {
      title: 'संपर्क | शेतिमाय शेतकरी उत्पादक कंपनी धुळे',
      desc: 'शेतिमाय तावखेडा, शिंदखेडा, धुळे संपर्क. कॉल +91 80807 04715 किंवा व्हॉट्सॲपवर घाऊक शेतीमाल खरेदी व शेतकरी सेवांसाठी थेट बोला.',
      ogTitle: 'संपर्क | शेतिमाय शेतकरी उत्पादक कंपनी धुळे',
      breadcrumb: 'संपर्क',
      tag: 'थेट संपर्क साधा',
      heroTitle: 'धुळे, महाराष्ट्र येथील आमच्या टीमशी थेट बोला.',
      heroDesc: 'तुम्ही व्यापारी, गिरणी चालक किंवा शेतकरी बांधव असाल, घाऊक माल खरेदी किंवा कॉन्ट्रॅक्ट फार्मिंगसाठी थेट फोन किंवा व्हॉट्सॲप करा.',
      infoTitle: 'कार्यालय व फोन नंबर',
      quickTitle: 'थेट व्हॉट्सॲपवर मेसेज करा',
      q1T: 'घाऊक खरेदीदार व व्यापारी चौकशी',
      q1S: 'खपली गहू, डाळी किंवा धान्याच्या घाऊक दरांसाठी (५० किलो गोणी / ट्रक लोड)',
      q2T: 'शेतकरी कॉन्ट्रॅक्ट फार्मिंग व माल विक्री',
      q2S: 'अस्सल बियाणे, हमीभाव किंवा तयार शेतीमाल थेट विकण्यासाठी',
      q3T: 'सर्वसाधारण संपर्क',
      q3S: 'इतर माहिती किंवा कंपनीशी संभाषणासाठी'
    },
    hi: {
      title: 'संपर्क करें | शेतिमाय किसान उत्पादक कंपनी धुले',
      desc: 'शेतिमाय तावाखेड़ा, शिंदखेड़ा, धुले संपर्क। कॉल +91 80807 04715 या व्हाट्सएप पर थोक अनाज खरीद व कॉन्ट्रैक्ट फार्मिंग के लिए बात करें।',
      ogTitle: 'संपर्क करें | शेतिमाय किसान उत्पादक कंपनी धुले',
      breadcrumb: 'संपर्क',
      tag: 'सीधा संपर्क करें',
      heroTitle: 'धुले, महाराष्ट्र में हमारी टीम से सीधे बात करें।',
      heroDesc: 'चाहे आप व्यापारी हों, मिल मालिक हों या किसान भाई, थोक अनाज खरीद या कॉन्ट्रैक्ट फार्मिंग के लिए सीधे फोन या व्हाट्सएप करें।',
      infoTitle: 'कार्यालय और फोन नंबर',
      quickTitle: 'सीधे व्हाट्सएप पर मैसेज भेजें',
      q1T: 'थोक खरीदार व व्यापारी पूछताछ',
      q1S: 'खपली गेहूँ, दालें या अनाज के थोक भाव के लिए (५० किग्रा बोरी / ट्रक लोड)',
      q2T: 'किसान कॉन्ट्रैक्ट फार्मिंग व फसल बिक्री',
      q2S: 'शुद्ध बीज, तय भाव या तैयार फसल बेचने के लिए',
      q3T: 'सामान्य पूछताछ',
      q3S: 'कंपनी या अन्य सामान्य जानकारी के लिए'
    }
  }[lang];

  const content = `
    <!-- Page Hero -->
    <section class="page-hero-clean">
      <div class="wrap">
        <div class="breadcrumb-clean">
          <a href="${getUrl(lang, 'home')}">${t.breadcrumbHome}</a>
          <span class="sep">/</span>
          <span class="current">${copy.breadcrumb}</span>
        </div>
        <div class="page-hero-tag">${copy.tag}</div>
        <h1>${copy.heroTitle}</h1>
        <p>${copy.heroDesc}</p>
      </div>
    </section>

    <!-- Contact Grid -->
    <section class="section">
      <div class="wrap contact-grid-clean">
        <div class="contact-info-card">
          <h2>${copy.infoTitle}</h2>
          <div class="contact-item-list">
            <div class="contact-item-row">
              <div class="contact-item-icon">${mapPinSvg}</div>
              <div>
                <strong>${t.regOffice.split(',')[0]}</strong>
                <span>${t.regOffice}</span>
              </div>
            </div>
            <div class="contact-item-row">
              <div class="contact-item-icon">${phoneSvg}</div>
              <div>
                <strong>${lang === 'mr' ? 'थेट फोन क्रमांक' : lang === 'hi' ? 'फोन नंबर' : 'Phone Numbers'}</strong>
                <div><a href="tel:+918080704715">+91 80807 04715</a></div>
                <div><a href="tel:+917020863882">+91 70208 63882</a></div>
                <div><a href="tel:+918766901935">+91 87669 01935</a></div>
              </div>
            </div>
            <div class="contact-item-row">
              <div class="contact-item-icon">${mailSvg}</div>
              <div>
                <strong>${lang === 'mr' ? 'अधिकृत ईमेल' : lang === 'hi' ? 'ईमेल' : 'Official Email'}</strong>
                <a href="mailto:${config.email}">${config.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-action-card">
          <h3>${copy.quickTitle}</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem;">${lang === 'mr' ? 'खालीलपैकी पर्याय निवडून थेट व्हॉट्सॲपवर बोला:' : lang === 'hi' ? 'अपनी जरूरत के अनुसार सीधे व्हाट्सएप पर मैसेज भेजें:' : 'Choose an option to chat on WhatsApp:'}</p>
          <div class="quick-enquiry-list">
            <a class="quick-enquiry-card" href="https://wa.me/918080704715?text=Hello%20Shetimay%2C%20I%20am%20interested%20in%20commercial%20grain%20procurement." target="_blank" rel="noopener">
              <div>
                <strong>${copy.q1T}</strong>
                <span>${copy.q1S}</span>
              </div>
              <span class="quick-enquiry-arrow">→</span>
            </a>
            <a class="quick-enquiry-card" href="https://wa.me/918080704715?text=Hello%20Shetimay%2C%20I%20am%20a%20farmer%20and%20want%20to%20discuss%20seeds%20or%20crops." target="_blank" rel="noopener">
              <div>
                <strong>${copy.q2T}</strong>
                <span>${copy.q2S}</span>
              </div>
              <span class="quick-enquiry-arrow">→</span>
            </a>
            <a class="quick-enquiry-card" href="https://wa.me/918080704715?text=Hello%20Shetimay%2C%20I%20have%20a%20general%20enquiry." target="_blank" rel="noopener">
              <div>
                <strong>${copy.q3T}</strong>
                <span>${copy.q3S}</span>
              </div>
              <span class="quick-enquiry-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  return buildShell({
    lang,
    pageId: 'contact',
    title: copy.title,
    description: copy.desc,
    ogTitle: copy.ogTitle,
    content,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          "@id": `${config.domain}${getUrl(lang, 'contact')}#contact`,
          "name": copy.title,
          "description": copy.desc,
          "url": `${config.domain}${getUrl(lang, 'contact')}`,
          "mainEntity": {
            "@type": "Organization",
            "name": "Shetimay Farmer Producer Company Limited",
            "telephone": config.phones,
            "email": config.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C/o Chatursing Girase, G.No. 68, Tawkheda",
              "addressLocality": "Shindkheda, Dhule",
              "addressRegion": "Maharashtra",
              "postalCode": "425408",
              "addressCountry": "IN"
            }
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${config.domain}${getUrl(lang, 'contact')}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": t.breadcrumbHome,
              "item": `${config.domain}${getUrl(lang, 'home')}`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": copy.breadcrumb,
              "item": `${config.domain}${getUrl(lang, 'contact')}`
            }
          ]
        }
      ]
    }
  });
}

// Master Build Execution
function buildSite() {
  console.log('Building neat, clean, logo-aligned multi-page website...');

  const pages = [
    { id: 'home', render: renderHomePage, path: 'index.html' },
    { id: 'about', render: renderAboutPage, path: 'about/index.html' },
    { id: 'crops', render: renderCropsPage, path: 'crops/index.html' },
    { id: 'buyers', render: renderBuyersPage, path: 'buyers/index.html' },
    { id: 'farmers', render: renderFarmersPage, path: 'farmers/index.html' },
    { id: 'contact', render: renderContactPage, path: 'contact/index.html' }
  ];

  const langs = ['en', 'mr', 'hi'];

  langs.forEach(lang => {
    pages.forEach(p => {
      const html = p.render(lang);
      let targetFile;
      if (lang === 'en') {
        targetFile = path.join(root, p.path);
      } else {
        const langPath = p.path === 'index.html' ? `${lang}/index.html` : `${lang}/${p.path}`;
        targetFile = path.join(root, langPath);
      }
      ensureDir(path.dirname(targetFile));
      fs.writeFileSync(targetFile, html, 'utf8');
      console.log(`Generated: ${path.relative(root, targetFile)}`);
    });
  });

  // Generate XML Sitemap
  const sitemapUrls = [];
  langs.forEach(lang => {
    pages.forEach(p => {
      const u = `${config.domain}${getUrl(lang, p.id)}`;
      sitemapUrls.push(u);
    });
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log('Updated sitemap.xml with all 18 pages.');
  console.log('Multi-page build completed successfully!');
}

buildSite();
