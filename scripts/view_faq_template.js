const fs = require('fs');

const html = fs.readFileSync('scripts/raw_dump/f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html', 'utf8');
const start = html.indexOf('<!-- 09 FAQ -->');
const end = html.indexOf('<!-- 09 CONTACT -->');
console.log(html.substring(start, end));
