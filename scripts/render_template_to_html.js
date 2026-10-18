const fs = require('fs');

// Read the template
const html = fs.readFileSync('scripts/raw_dump/f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html', 'utf8');

// Extract script
const script = html.match(/<script[^>]*>([\s\S]*?)<\/script>/g)[1];
const body = html.match(/<body>([\s\S]*?)<script/)[1].split('</helmet>')[1];

console.log('Script length:', script.length);
console.log('Body length:', body.length);
