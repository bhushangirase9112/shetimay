const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
for (const file of ['index.html', 'mr/index.html', 'hi/index.html']) {
  const target = path.join(root, file);
  let page = fs.readFileSync(target, 'utf8');
  page = page.replaceAll(".check-list li:before{content:'?';", ".check-list li:before{content:'✓';");
  page = page.replaceAll(".step:not(:last-child):after{content:'?';", ".step:not(:last-child):after{content:'→';");
  page = page.replaceAll('>?</button>', '>☰</button>');
  page = page.replaceAll('<span aria-hidden="true">?</span>', '<span aria-hidden="true">→</span>');
  page = page.replaceAll('Talk to our team →', 'Talk to our team');
  page = page.replaceAll('Instagram ?', 'Instagram ↗');
  page = page.replaceAll('इन्स्टाग्राम ?', 'इन्स्टाग्राम ↗');

  const contactIcons = ['☎', '✉', '⌖'];
  let icon = 0;
  page = page.replaceAll('<div class="contact-icon" aria-hidden="true">?</div>', () =>
    `<div class="contact-icon" aria-hidden="true">${contactIcons[icon++] || '•'}</div>`
  );
  page = page.replaceAll('>?</div>', '>•</div>');
  page = page.replaceAll('>� <span id="year">', '>© <span id="year">');
  page = page.replaceAll('>�</p>', '>©</p>');

  for (const [before, after] of [
    ['Talk to our team ?', 'Talk to our team →'],
    ['Enquire about Emmer wheat ?', 'Enquire about Emmer wheat →'],
    ['Enquire about wheat ?', 'Enquire about wheat →'],
    ['Enquire about maize ?', 'Enquire about maize →'],
    ['Discuss farming with us ?', 'Discuss farming with us →'],
    ['Discuss a buying requirement ?', 'Discuss a buying requirement →'],
    ['I�m a farmer � get in touch ?', 'I�m a farmer � get in touch →'],
    ['Send a buyer enquiry ?', 'Send a buyer enquiry →'],
    ['खपली गव्हासाठी चौकशी करा ?', 'खपली गव्हासाठी चौकशी करा →'],
    ['गव्हासाठी चौकशी करा ?', 'गव्हासाठी चौकशी करा →'],
    ['मक्यासाठी चौकशी करा ?', 'मक्यासाठी चौकशी करा →'],
    ['शेतीविषयी चर्चा करा ?', 'शेतीविषयी चर्चा करा →'],
    ['खरेदीची गरज कळवा ?', 'खरेदीची गरज कळवा →'],
    ['खरेदीची चौकशी पाठवा ?', 'खरेदीची चौकशी पाठवा →'],
  ]) page = page.replaceAll(before, after);

  fs.writeFileSync(target, page, 'utf8');
}
