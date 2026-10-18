const fs = require('fs');

const html = fs.readFileSync('scripts/rendered_home.html', 'utf8');
const start = html.indexOf('<!-- 09 FAQ -->');
const end = html.indexOf('<!-- 09 CONTACT -->');
const faqHtml = html.substring(start, end);
console.log('FAQ HTML length:', faqHtml.length);
console.log('FAQ start (first 600 chars):\n', faqHtml.substring(0, 600));
console.log('...\nFAQ end (last 600 chars):\n', faqHtml.substring(faqHtml.length - 600));
