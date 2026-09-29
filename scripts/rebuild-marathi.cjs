const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
let page = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const mr = {
  'Farmer partnerships • Agricultural sourcing • Dhule, Maharashtra': 'शेतकरी भागीदारी • कृषी खरेदी • धुळे, महाराष्ट्र',
  'FARMER PRODUCER COMPANY': 'शेतकरी उत्पादक कंपनी',
  'For buyers': 'खरेदीदारांसाठी',
  'For farmers': 'शेतकऱ्यांसाठी',
  'Emmer wheat': 'खपली गहू',
  'Other crops': 'इतर पिके',
  'FAQs': 'प्रश्नोत्तरे',
  'Our model': 'आमचे कार्य',
  'Talk to our team': 'आमच्या टीमशी बोला',
  'From growers to businesses': 'शेतकऱ्यांकडून व्यवसायांपर्यंत',
  'Good grain starts with': 'चांगल्या धान्याची सुरुवात',
  'good partnerships.': 'विश्वासाच्या भागीदारीतून होते.',
  'Shetimay connects farmers with merchants and food businesses through cultivation support, direct procurement and dependable agricultural sourcing.': 'शेतिमाय शेतकऱ्यांना व्यापारी आणि अन्न उद्योगांशी जोडते. आम्ही पीक लागवडीसाठी मार्गदर्शन, शेतकऱ्यांकडून थेट खरेदी आणि विश्वासार्ह कृषी उत्पादन पुरवठा करतो.',
  "I'm a buyer": 'मी खरेदीदार आहे',
  "I'm a farmer": 'मी शेतकरी आहे',
  'Based in Dhule, Maharashtra • Focused on Emmer (Khapli) wheat': 'धुळे, महाराष्ट्र • खपली गहू हे मुख्य पीक',
  'Emmer wheat — Khapli gahu': 'खपली गहू',
  'Our special focus crop': 'आमचे मुख्य पीक',
  'Farmer-linked sourcing': 'शेतकऱ्यांकडून थेट खरेदी',
  'Work directly with growers in our network': 'आमच्या शेतकरी गटातील उत्पादकांशी थेट व्यवहार',
  'Flexible product preparation': 'गरजेनुसार उत्पादनाची तयारी',
  'Cleaning and processing by buyer requirement': 'खरेदीदाराच्या गरजेनुसार स्वच्छता व प्रक्रिया',
  'Rooted in Dhule': 'धुळे येथे कार्यरत',
  'Local knowledge, regional agricultural supply': 'स्थानिक अनुभव आणि प्रादेशिक कृषी पुरवठा',
  'Our main focus crop': 'आमचे मुख्य लक्ष असलेले पीक',
  'Emmer wheat, sourced with care.': 'खपली गहू, काळजीपूर्वक मिळवलेला.',
  "Emmer wheat—known locally as Khapli gahu—is Shetimay's main focus crop. We partner with farmers to support cultivation and procure the harvested grain for business buyers.": 'खपली गहू हे शेतिमायचे मुख्य पीक आहे. आम्ही शेतकऱ्यांना लागवडीदरम्यान मार्गदर्शन करतो आणि काढणीनंतरचा गहू व्यापारी व उद्योगांसाठी थेट खरेदी करतो.',
  'We can discuss supply as cleaned or processed grain, or as raw produce when that better suits your operation. Availability, quantity, preparation and delivery are confirmed for each enquiry.': 'तुमच्या गरजेनुसार स्वच्छ केलेला किंवा प्रक्रिया केलेला गहू, तसेच कच्चा मालही उपलब्ध करून देण्याबाबत चर्चा करू शकतो. उपलब्धता, प्रमाण, प्रक्रिया आणि वितरणाची माहिती प्रत्येक चौकशीनुसार निश्चित केली जाते.',
  'Raw grain': 'कच्चा गहू',
  'For buyers who prefer to handle processing': 'प्रक्रिया स्वतः करू इच्छिणाऱ्या खरेदीदारांसाठी',
  'Cleaning / processing': 'स्वच्छता / प्रक्रिया',
  'Options discussed to match your needs': 'तुमच्या गरजेनुसार पर्याय',
  'Useful for grain merchants, mills, processors and food businesses': 'धान्य व्यापारी, गिरण्या, प्रक्रिया उद्योग आणि अन्न व्यवसायांसाठी',
  'Share your required quantity, specification and destination': 'आवश्यक प्रमाण, दर्जा आणि वितरणाचे ठिकाण कळवा',
  "We'll confirm current crop availability and commercial details directly": 'सध्याची उपलब्धता आणि व्यावसायिक अटी आम्ही थेट कळवू',
  'Enquire about Emmer wheat': 'खपली गव्हासाठी चौकशी करा',
  'Farmer-sourced produce portfolio': 'शेतकऱ्यांकडून खरेदी केलेली पिके',
  'Crops we procure and supply.': 'आम्ही खरेदी आणि पुरवठा करत असलेली पिके.',
  'Alongside our signature Emmer (Khapli) wheat, Shetimay partners with farmers to source a diverse basket of pulses, oilseeds, grains, and millets for merchants, mills, and food businesses.': 'आमच्या मुख्य खपली गव्हाव्यतिरिक्त, शेतिमाय स्थानिक शेतकरी भागीदारांकडून डाळी, गळीत धान्ये, तृणधान्ये आणि भरडधान्ये (मिलेट्स) व्यापारी, गिरण्या व अन्न उद्योगांसाठी खरेदी करते.',
  'Pulses': 'कडधान्य / डाळी',
  'Oilseeds': 'गळीत धान्य',
  'Grains': 'तृणधान्य',
  'Grains & Feed': 'तृणधान्य व पशुखाद्य',
  'Millets': 'भरडधान्य (मिलेट्स)',
  'Harbhara (Bengal Gram)': 'हरभरा (चना)',
  'Clean, graded whole gram sourced directly from local farmers in Khandesh. Suited for dal mills, processing units, and food distributors.': 'खान्देशातील स्थानिक शेतकऱ्यांकडून थेट खरेदी केलेला स्वच्छ आणि प्रतवारी केलेला हरभरा. डाळ मिल, प्रक्रिया उद्योग आणि धान्य वितरकांसाठी योग्य.',
  'Enquire about Harbhara →': 'हरभऱ्यासाठी चौकशी करा →',
  'Moong (Green Gram)': 'मूग (हिरवा मूग)',
  'High-quality whole green gram procured fresh during harvest season. Ideal for wholesale merchants, sprout producers, and packaging brands.': 'हंगामात शेतकऱ्यांकडून थेट संकलित केलेला उच्च दर्जाचा हिरवा मूग. घाऊक व्यापारी, डाळ उत्पादक आणि पॅकेजिंग ब्रँड्ससाठी अत्यंत उपयुक्त.',
  'Enquire about Moong →': 'मुगासाठी चौकशी करा →',
  'Tur (Pigeon Pea / Arhar)': 'तूर (गावरान व संकरित)',
  'Carefully procured red gram from trusted grower clusters. Offered as raw harvest or cleaned grain based on buyer specifications.': 'विश्वासू शेतकरी समूहांकडून संकलित केलेली उत्तम दर्जाची तूर. खरेदीदारांच्या आवश्यकतेनुसार कच्चा माल किंवा स्वच्छ प्रतवारी उपलब्ध.',
  'Enquire about Tur →': 'तुरीसाठी चौकशी करा →',
  'Soybean': 'सोयाबीन',
  'High-oil content, clean soybean procured directly from growers. Tailored for solvent extraction plants, feed processors, and oil mills.': 'योग्य तेल प्रमाण असलेला स्वच्छ सोयाबीन थेट उत्पादक शेतकऱ्यांकडून खरेदी. सॉल्व्हेंट एक्स्ट्रॅक्शन प्लांट्स, पशुखाद्य उत्पादक आणि तेल गिरण्यांसाठी.',
  'Enquire about Soybean →': 'सोयाबीनसाठी चौकशी करा →',
  'Wheat (Other Varieties)': 'गहू (इतर जाती)',
  'Popular commercial wheat varieties including Lokwan and Sharbati. Uniform golden grains ideal for flour mills, chakki brands, and distributors.': 'लोकवन आणि शरबती यांसारख्या लोकप्रिय व्यावसायिक गव्हाच्या जाती. फ्लोर मिल, चक्की ब्रँड्स आणि घाऊक धान्य बाजारासाठी एकसारखा दाणा.',
  'Enquire about Wheat →': 'गव्हासाठी चौकशी करा →',
  'Maize (Yellow Corn)': 'मका (पिवळी मका)',
  'Sun-dried, moisture-checked yellow maize procured from regional farms. Suitable for animal feed manufacturers, starch plants, and processors.': 'स्थानिक शेतांमधून खरेदी केलेली योग्य ओलावा असलेली वाळलेली पिवळी मका. पोल्ट्री व पशुखाद्य, स्टार्च उद्योग आणि अन्न प्रक्रियेसाठी योग्य.',
  'Enquire about Maize →': 'मक्यासाठी चौकशी करा →',
  'Bajra (Pearl Millet)': 'बाजरी',
  'Nutritious, climate-resilient pearl millet grown locally in Maharashtra. Sourced fresh for health food companies, millers, and grain markets.': 'महाराष्ट्रात पिकवलेली पौष्टिक आणि दर्जेदार बाजरी. आरोग्यदायी अन्न उत्पादक, गिरण्या आणि प्रादेशिक धान्य बाजारासाठी ताजी उपलब्ध.',
  'Enquire about Bajra →': 'बाजरीसाठी चौकशी करा →',
  'Jowar (Sorghum)': 'ज्वारी',
  'Premium white sorghum sourced directly from farm clusters. Cleaned and graded for flour manufacturing, retail packaging, and bulk trade.': 'शेतकरी समूहांकडून थेट खरेदी केलेली दर्जेदार पांढरी ज्वारी. पीठ निर्मिती, रिटेल पॅकेजिंग आणि घाऊक व्यापारासाठी प्रतवारीसह उपलब्ध.',
  'Enquire about Jowar →': 'ज्वारीसाठी चौकशी करा →',
  'Two sides of one supply chain': 'एकाच पुरवठा साखळीतील दोन बाजू',
  'How can Shetimay work with you?': 'शेतिमाय तुमच्यासोबत कसे काम करू शकते?',
  "Whether you grow the crop or need to source it, start with a conversation about what you need and what's available.": 'तुम्ही पीक घेणारे शेतकरी असाल किंवा उत्पादन खरेदी करू इच्छित असाल, तुमची गरज आणि उपलब्धता याबद्दल आमच्याशी बोला.',
  '01 / FARMERS': '०१ / शेतकरी',
  'Grow with a route to market': 'विक्रीची खात्री असलेली लागवड',
  'We provide seeds for selected crops, share cultivation guidance and purchase suitable harvests from farmers. Contact us to discuss crops, season, local availability and procurement terms.': 'निवडक पिकांसाठी आम्ही बियाणे देतो, लागवडीदरम्यान मार्गदर्शन करतो आणि योग्य कापणीचा माल शेतकऱ्यांकडून खरेदी करतो. पीक, हंगाम, स्थानिक उपलब्धता आणि खरेदीच्या अटींबद्दल चर्चा करण्यासाठी संपर्क साधा.',
  'Discuss farming with us': 'शेतीविषयी चर्चा करा',
  '02 / MERCHANTS & COMPANIES': '०२ / व्यापारी आणि कंपन्या',
  'Source agricultural produce': 'कृषी उत्पादन मिळवा',
  'Tell us the crop, grade or quality requirements, quantity, preferred preparation and delivery location. We welcome enquiries for smaller lots and bulk quantities; supply depends on current availability. Our focus includes Emmer wheat, alongside Harbhara, Moong, Tur, Soybean, other wheat varieties, Maize, Bajra and Jowar.': 'पीक, दर्जा किंवा गुणवत्तेची गरज, प्रमाण, अपेक्षित प्रक्रिया आणि वितरणाचे ठिकाण कळवा. कमी तसेच मोठ्या प्रमाणातील चौकशीचे स्वागत आहे; पुरवठा सध्याच्या उपलब्धतेवर अवलंबून आहे. खपली गव्हासोबत हरभरा, मूग, तूर, सोयाबीन, गव्हाच्या इतर जाती, मका, बाजरी व ज्वारी ही आमची प्रमुख उत्पादने आहेत.',
  'Discuss a buying requirement': 'खरेदीची गरज कळवा',
  'Support through the crop cycle.': 'पीक हंगामभर शेतकऱ्यांना साथ.',
  'Our work begins before harvest. Shetimay provides seeds for selected crops, offers practical guidance during cultivation and connects farmers to procurement when produce is ready.': 'आमचे काम कापणीपूर्वीच सुरू होते. शेतिमाय निवडक पिकांसाठी बियाणे देते, लागवडीदरम्यान उपयुक्त मार्गदर्शन करते आणि पीक तयार झाल्यावर शेतकऱ्यांना खरेदी प्रक्रियेशी जोडते.',
  'Discuss seed availability and suitability before the season': 'हंगामापूर्वी बियाण्यांची उपलब्धता आणि योग्यतेबद्दल विचारा',
  'Get guidance and stay in touch as your crop grows': 'पीक वाढत असताना मार्गदर्शन घ्या आणि संपर्कात रहा',
  'Talk through harvest quality, quantity and procurement terms': 'मालाचा दर्जा, प्रमाण आणि खरेदीच्या अटींबद्दल चर्चा करा',
  'Build a direct relationship with a local farmer producer company': 'स्थानिक शेतकरी उत्पादक कंपनीशी थेट संबंध जोडा',
  "I'm a farmer — get in touch": 'मी शेतकरी आहे • संपर्क साधा',
  'Built with farmers, season by season': 'हंगामागणिक शेतकऱ्यांसोबत उभे',
  'How we work': 'आमची कार्यपद्धती',
  'A practical farm-to-buyer connection.': 'शेतापासून खरेदीदारापर्यंतचा थेट दुवा.',
  'We coordinate across cultivation, procurement and preparation so farmers and buyers can discuss requirements with one local team.': 'लागवड, खरेदी आणि मालाच्या तयारीचे समन्वय साधून शेतकरी व खरेदीदारांना आमच्या स्थानिक टीमशी थेट चर्चा करता येते.',
  'STEP 01': 'टप्पा ०१',
  'Plan the crop': 'पीक नियोजन',
  'Discuss suitable seeds, crop plans and farmer requirements ahead of the season.': 'हंगामापूर्वी योग्य बियाणे, पीक नियोजन आणि शेतकऱ्यांच्या गरजांबद्दल चर्चा करा.',
  'STEP 02': 'टप्पा ०२',
  'Support cultivation': 'लागवडीसाठी मदत',
  'Stay connected with growers and share guidance through the growing cycle.': 'पीक वाढीच्या काळात शेतकऱ्यांच्या संपर्कात राहून मार्गदर्शन देतो.',
  'STEP 03': 'टप्पा ०३',
  'Procure the harvest': 'मालाची खरेदी',
  'Review produce availability, quality, quantity and terms with farmers.': 'शेतकऱ्यांसोबत मालाची उपलब्धता, गुणवत्ता, प्रमाण आणि अटी ठरवतो.',
  'STEP 04': 'टप्पा ०४',
  'Prepare for buyers': 'खरेदीदारांसाठी तयारी',
  'Coordinate raw or cleaned and processed supply according to the buyer enquiry.': 'खरेदीदाराच्या गरजेनुसार कच्चा, स्वच्छ केलेला किंवा प्रक्रिया केलेला माल पुरवतो.',
  'Farmer and buyer questions': 'शेतकरी आणि खरेदीदारांचे प्रश्न',
  'Frequently asked questions.': 'वारंवार विचारले जाणारे प्रश्न.',
  'What to know before discussing a crop, seed or produce requirement with Shetimay.': 'पीक, बियाणे किंवा कृषी उत्पादनाबद्दल शेतिमायशी चर्चा करण्यापूर्वी ही माहिती जाणून घ्या.',
  'Does Shetimay buy produce directly from farmers?': 'शेतिमाय शेतकऱ्यांकडून थेट माल खरेदी करते का?',
  'Yes. We work with farmers on selected crops and procure suitable harvests for supply to merchants and businesses. Crop, quality, quantity, timing and terms are confirmed for each enquiry.': 'होय. आम्ही निवडक पिकांसाठी शेतकऱ्यांसोबत काम करतो आणि व्यापारी व उद्योगांना पुरवण्यासाठी योग्य कापणीचा माल खरेदी करतो. पीक, गुणवत्ता, प्रमाण, वेळ आणि अटी प्रत्येक चौकशीनुसार निश्चित होतात.',
  'Which crops can merchants and companies source?': 'व्यापारी आणि कंपन्यांना कोणती पिके मिळू शकतात?',
  'Emmer (Khapli) wheat is our main focus. In addition, we procure Harbhara (Bengal gram / Chana), Moong (Green gram), Tur (Pigeon pea / Arhar), Soybean, other wheat varieties (Lokwan, Sharbati), Maize, Bajra (Pearl millet), and Jowar (Sorghum) directly from local farmers. Availability changes with the crop and season, so contact us with your requirement.': 'खपली गहू हे आमचे मुख्य पीक आहे. याव्यतिरिक्त आम्ही हरभरा (चना), मूग, तूर, सोयाबीन, इतर गव्हाच्या जाती (लोकवन, शरबती), मका, बाजरी आणि ज्वारी थेट स्थानिक शेतकऱ्यांकडून खरेदी करून पुरवतो. पीक आणि हंगामानुसार उपलब्धता बदलते; तुमची गरज आम्हाला कळवा.',
  'Can I enquire about a small quantity or bulk supply?': 'कमी किंवा मोठ्या प्रमाणात मालासाठी चौकशी करता येईल का?',
  'Yes. We welcome enquiries for smaller lots and bulk quantities. Tell us the crop, approximate quantity, quality or grade, preparation and delivery location so we can discuss current availability.': 'होय. कमी तसेच मोठ्या प्रमाणातील चौकशीचे स्वागत आहे. सध्याची उपलब्धता तपासण्यासाठी पीक, अंदाजे प्रमाण, गुणवत्ता किंवा दर्जा, प्रक्रिया आणि वितरणाचे ठिकाण कळवा.',
  'Can you supply raw grain as well as cleaned or processed produce?': 'कच्चा तसेच स्वच्छ किंवा प्रक्रिया केलेला माल मिळू शकतो का?',
  'We can discuss raw produce or cleaning and processing options according to the crop and buyer requirement. Please include the product condition you need in your enquiry.': 'पीक आणि खरेदीदाराच्या गरजेनुसार कच्चा माल किंवा स्वच्छता व प्रक्रियेच्या पर्यायांबद्दल चर्चा करता येईल. चौकशीत तुम्हाला हवा असलेला मालाचा प्रकार नमूद करा.',
  'Do you provide seeds and farming guidance?': 'तुम्ही बियाणे आणि शेतीविषयक मार्गदर्शन देता का?',
  'We provide seeds for selected crops and discuss cultivation guidance with farmers. Contact us before the season to ask about the crop, seed availability and local suitability.': 'निवडक पिकांसाठी आम्ही बियाणे देतो आणि शेतकऱ्यांना लागवडीबाबत मार्गदर्शन करतो. पीक, बियाण्यांची उपलब्धता आणि स्थानिक परिस्थितीतील योग्यतेबद्दल हंगामापूर्वी संपर्क साधा.',
  'Looking for Emmer wheat or another crop?': 'खपली गहू किंवा इतर पीक हवे आहे?',
  'Send us your requirement and our team will follow up about availability.': 'तुमची गरज कळवा; उपलब्धतेबद्दल आमची टीम संपर्क करेल.',
  'Send a buyer enquiry': 'खरेदीची चौकशी पाठवा',
  'Email us': 'ईमेल करा',
  'Email': 'ईमेल',
  "Let's talk": 'चला, बोलूया',
  'Start with a conversation.': 'चर्चेपासून सुरुवात करा.',
  "Tell us whether you're a farmer or a buyer, and include the crop, quantity and timing you have in mind. We'll get back to you to discuss next steps.": 'तुम्ही शेतकरी आहात की खरेदीदार, हे सांगून पीक, प्रमाण आणि अपेक्षित वेळ कळवा. पुढील तपशीलांसाठी आम्ही तुमच्याशी संपर्क साधू.',
  'Call or WhatsApp': 'फोन किंवा WhatsApp',
  'Registered office': 'नोंदणीकृत कार्यालय',
  'What would you like to discuss?': 'तुम्हाला कशाबद्दल चर्चा करायची आहे?',
  'Choose the closest option to start a WhatsApp conversation. You can share more details directly with our team.': 'WhatsApp संभाषण सुरू करण्यासाठी योग्य पर्याय निवडा. अधिक तपशील आमच्या टीमला थेट पाठवू शकता.',
  'Farmer partnership': 'शेतकरी भागीदारी',
  'Seeds, crop guidance or selling produce': 'बियाणे, पीक मार्गदर्शन किंवा मालाची विक्री',
  'Buyer / merchant enquiry': 'खरेदीदार / व्यापारी चौकशी',
  'Emmer wheat, quantity and preparation': 'खपली गहू, प्रमाण आणि प्रक्रिया',
  'General enquiry': 'सामान्य चौकशी',
  'Email the Shetimay team': 'शेतिमाय टीमला ईमेल करा',
  'Connecting farmers, merchants and businesses through agricultural partnerships and produce sourcing in Maharashtra.': 'महाराष्ट्र राज्यात कृषी भागीदारी आणि उत्पादन खरेदीद्वारे शेतकरी, व्यापारी व व्यवसायांना जोडत आहोत.',
  'Contact': 'संपर्क',
  'Instagram': 'इन्स्टाग्राम ↗',
  'Tawkheda, Dhule, Maharashtra, India': 'तावखेडा, धुळे, महाराष्ट्र, भारत'
};

const bodyStart = page.indexOf('<body>') + 6;
const bodyEnd = page.lastIndexOf('</body>');
const scriptStart = page.lastIndexOf('  <script>', bodyEnd);
let body = page.slice(bodyStart, scriptStart);
const misses = new Set();

function normalizeKey(str) {
  return str.trim().replace(/\s+/g, ' ');
}

body = body.replace(/>([^<>]+)</g, (whole, text) => {
  const key = normalizeKey(text);
  if (Object.hasOwn(mr, key)) {
    return `>${text.match(/^\s*/)[0]}${mr[key]}${text.match(/\s*$/)[0]}<`;
  }
  if (
    key &&
    !/^[\d\s+\-.,/|•→↗©:()]+$/.test(key) &&
    !key.includes('shetimayfpc425407@gmail.com') &&
    !key.includes('+91') &&
    !key.includes('CIN:')
  ) {
    misses.add(key);
  }
  return whole;
});

page = page.slice(0, bodyStart) + body + page.slice(scriptStart);

// Attributes & Meta Updates
page = page.replace('<html lang="en">', '<html lang="mr">');
page = page.replace('<title>Shetimay | Emmer (Khapli) Wheat Sourcing & Farmer Partnerships</title>', '<title>शेतिमाय | खपली गहू, हरभरा, मूग, तूर, मका खरेदी</title>');
page = page.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="शेतिमाय धुळे, महाराष्ट्रातील शेतकरी, व्यापारी आणि उद्योगांसाठी खपली गहू, हरभरा, मूग, तूर, सोयाबीन, गहू, मका व बाजरी-ज्वारी थेट खरेदी करते.">');
page = page.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="शेतिमाय | खपली गहू, कडधान्ये, गळीत धान्य आणि मका खरेदी">');
page = page.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="शेतिमायसोबत शेतकरी, व्यापारी आणि उद्योगांसाठी थेट कृषी उत्पादन खरेदी.">');
page = page.replace('<meta property="og:url" content="https://shetimay.in/">', '<meta property="og:url" content="https://shetimay.in/mr/">');
page = page.replace('<link rel="canonical" href="https://shetimay.in/">', '<link rel="canonical" href="https://shetimay.in/mr/">');
page = page.replace('<option value="mr">मराठी</option>', '<option value="mr" selected>मराठी</option>');
page = page.replace('<option value="en" selected>English</option>', '<option value="en">English</option>');
page = page.replace('Tawkheda, Shindkheda, Dhule', 'तावखेडा, शिंदखेडा, धुळे');
page = page.replaceAll('Maharashtra 425408, India', 'महाराष्ट्र ४२५४०८, भारत');
page = page.replace('alt="Shetimay logo"', 'alt="शेतिमायचा लोगो"');
page = page.replace('alt="Khapli, also known as Emmer wheat, grown in Maharashtra"', 'alt="महाराष्ट्र - पिकवला जाणारा खपली गहू"');
page = page.replace('alt="Emmer wheat, called Khapli gahu locally"', 'alt="खपली गहू"');
page = page.replace('alt="A farmer\'s crop and field from the Shetimay grower network"', 'alt="शेतिमायच्या शेतकरी गटातील शेत आणि पीक"');
page = page.replace('alt="Harbhara / Bengal Gram (Chana) sourced by Shetimay"', 'alt="शेतिमायने खरेदी केलेला हरभरा (चना)"');
page = page.replace('alt="Moong / Green Gram sourced by Shetimay"', 'alt="शेतिमायने खरेदी केलेला मूग"');
page = page.replace('alt="Tur / Pigeon Pea (Arhar) sourced by Shetimay"', 'alt="शेतिमायने खरेदी केलेली तूर"');
page = page.replace('alt="Soybean procured by Shetimay"', 'alt="शेतिमायने खरेदी केलेला सोयाबीन"');
page = page.replace('alt="Wheat varieties (Lokwan & Sharbati) procured by Shetimay"', 'alt="शेतिमायने खरेदी केलेल्या गव्हाच्या जाती"');
page = page.replace('alt="Yellow Maize sourced by Shetimay"', 'alt="शेतिमायने खरेदी केलेली पिवळी मका"');
page = page.replace('alt="Bajra / Pearl Millet sourced by Shetimay"', 'alt="शेतिमायने खरेदी केलेली बाजरी"');
page = page.replace('alt="Jowar / Sorghum sourced by Shetimay"', 'alt="शेतिमायने खरेदी केलेली ज्वारी"');

// Localize JSON-LD for Marathi
page = page.replace(
  '"description": "Farmer producer company based in Dhule, Maharashtra. Sources Emmer (Khapli) wheat, other wheat varieties, and maize from local farmers for merchants and food businesses."',
  '"description": "शेतिमाय धुळे, महाराष्ट्रातील शेतकरी उत्पादक कंपनी असून ती स्थानिक शेतकऱ्यांकडून खपली गहू, हरभरा, मूग, तूर, सोयाबीन, इतर गव्हाच्या जाती, मका व मिलेट्स खरेदी करते आणि व्यापारी व अन्न उद्योगांना पुरवते."'
);
page = page.replace(
  '"name": "Does Shetimay buy produce directly from farmers?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Yes. Shetimay works with farmers on selected crops and procures suitable harvests directly for supply to merchants and businesses. Crop, quality, quantity, timing and terms are confirmed for each enquiry."\n            }',
  '"name": "शेतिमाय शेतकऱ्यांकडून थेट माल खरेदी करते का?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "होय. आम्ही निवडक पिकांसाठी शेतकऱ्यांसोबत काम करतो आणि व्यापारी व उद्योगांना पुरवण्यासाठी योग्य कापणीचा माल खरेदी करतो. पीक, गुणवत्ता, प्रमाण, वेळ आणि अटी प्रत्येक चौकशीनुसार निश्चित होतात."\n            }'
);
page = page.replace(
  '"name": "Which crops can merchants and companies source?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Emmer (Khapli) wheat is our main focus. In addition, we procure Harbhara (Bengal gram / Chana), Moong (Green gram), Tur (Pigeon pea / Arhar), Soybean, other wheat varieties (Lokwan, Sharbati), Maize, Bajra (Pearl millet), and Jowar (Sorghum) directly from local farmers."\n            }',
  '"name": "व्यापारी आणि कंपन्यांना कोणती पिके मिळू शकतात?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "खपली गहू हे आमचे मुख्य पीक आहे. याव्यतिरिक्त आम्ही हरभरा (चना), मूग, तूर, सोयाबीन, इतर गव्हाच्या जाती (लोकवन, शरबती), मका, बाजरी आणि ज्वारी थेट शेतकऱ्यांकडून खरेदी करून पुरवतो."\n            }'
);
page = page.replace(
  '"name": "Can I enquire about a small quantity or bulk supply?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Yes. We welcome enquiries for smaller lots and bulk quantities. Tell us the crop, approximate quantity, quality or grade, preparation and delivery location so we can discuss current availability."\n            }',
  '"name": "कमी किंवा मोठ्या प्रमाणात मालासाठी चौकशी करता येईल का?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "होय. कमी तसेच मोठ्या प्रमाणातील चौकशीचे स्वागत आहे. सध्याची उपलब्धता तपासण्यासाठी पीक, अंदाजे प्रमाण, गुणवत्ता किंवा दर्जा, प्रक्रिया आणि वितरणाचे ठिकाण कळवा."\n            }'
);
page = page.replace(
  '"name": "Can you supply raw grain as well as cleaned or processed produce?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Yes. We can discuss raw produce or cleaning and processing options according to the crop and buyer requirement. Please include the product condition you need in your enquiry."\n            }',
  '"name": "कच्चा तसेच स्वच्छ किंवा प्रक्रिया केलेला माल मिळू शकतो का?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "पीक आणि खरेदीदाराच्या गरजेनुसार कच्चा माल किंवा स्वच्छता व प्रक्रियेच्या पर्यायांबद्दल चर्चा करता येईल. चौकशीत तुम्हाला हवा असलेला मालाचा प्रकार नमूद करा."\n            }'
);
page = page.replace(
  '"name": "Do you provide seeds and farming guidance?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "We provide seeds for selected crops and discuss cultivation guidance with farmers. Contact us before the season to ask about the crop, seed availability and local suitability in Maharashtra."\n            }',
  '"name": "तुम्ही बियाणे आणि शेतीविषयक मार्गदर्शन देता का?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "निवडक पिकांसाठी आम्ही बियाणे देतो आणि शेतकऱ्यांना लागवडीबाबत मार्गदर्शन करतो. पीक, बियाण्यांची उपलब्धता आणि स्थानिक परिस्थितीतील योग्यतेबद्दल हंगामापूर्वी संपर्क साधा."\n            }'
);

fs.writeFileSync(path.join(root, 'mr', 'index.html'), page, 'utf8');
console.log(`Rebuilt Marathi page. Untranslated body snippets: ${[...misses].join(' | ')}`);
