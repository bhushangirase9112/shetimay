const fs = require('node:fs');

for (const file of ['scripts/rebuild-hindi.cjs', 'scripts/rebuild-marathi.cjs']) {
  const source = fs.readFileSync(file, 'utf8');
  const updated = source.replaceAll('\u091f\u093e\u0935', '\u0924\u093e\u0935');
  fs.writeFileSync(file, updated, 'utf8');
}
