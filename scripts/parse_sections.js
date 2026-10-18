const fs = require('fs');
const path = require('path');

const exactHtml = fs.readFileSync(path.join(__dirname, 'exact_home_body.html'), 'utf8');

// Let's inspect each section in exactHtml
const sections = exactHtml.split(/<!--\s*([A-Z0-9\s]+?)\s*-->/);
console.log('Sections found:', sections.length);

for (let i = 1; i < sections.length; i += 2) {
  const name = sections[i].trim();
  const content = sections[i + 1].trim();
  console.log(`\n=================== [SECTION: ${name}] (${content.length} chars) ===================`);
  console.log(content.slice(0, 300).replace(/\s+/g, ' '));
}
