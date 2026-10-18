const fs = require('fs');
const path = require('path');

const homeTpl = fs.readFileSync(path.join(__dirname, 'raw_dump', 'f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html'), 'utf8');

// Find x-dc
const start = homeTpl.indexOf('<x-dc>');
const end = homeTpl.indexOf('</x-dc>');
const xdc = homeTpl.substring(start + 6, end);

// Also find the script with Component
const scriptMatch = homeTpl.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/i);

console.log('xdc length:', xdc.length);
console.log('Script length:', scriptMatch ? scriptMatch[1].length : 0);

// Let's write out the raw xdc so we can inspect every character
fs.writeFileSync(path.join(__dirname, 'raw_home_xdc.html'), xdc, 'utf8');
