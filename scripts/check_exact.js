const fs = require('fs');

const exact = fs.readFileSync('scripts/exact_home_body.html', 'utf8');
const template = fs.readFileSync('scripts/raw_dump/f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html', 'utf8');

const mustacheInExact = [...exact.matchAll(/\{\{([^}]+)\}\}/g)];
console.log('Mustaches in exact_home_body.html:', mustacheInExact.length);
if (mustacheInExact.length > 0) {
  console.log('Sample mustaches in exact:', mustacheInExact.slice(0, 5));
}
