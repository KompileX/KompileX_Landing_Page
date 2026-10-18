const fs = require('fs');
const path = require('path');

const dir = 'components/redesign';
const files = fs.readdirSync(dir);
const allHrefs = new Set();
files.forEach(f => {
  if (f.endsWith('.tsx') || f.endsWith('.ts')) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const matches = [...content.matchAll(/href=["']([^"']+)["']/g)];
    matches.forEach(m => allHrefs.add(m[1]));
  }
});
console.log('All unique hrefs found:');
for (const h of allHrefs) {
  console.log(' -', h);
}
