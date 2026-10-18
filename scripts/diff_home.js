const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, 'raw_dump', 'f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html'), 'utf8');

// Find all style tags and all sections
const xdcStart = raw.indexOf('<x-dc>');
const xdcEnd = raw.indexOf('</x-dc>');
const xdc = raw.substring(xdcStart + 6, xdcEnd);

// Let's print out all <section> or major top-level blocks in xdc
const domLines = xdc.split('\n');
console.log('Total lines in xdc:', domLines.length);

let currentComment = '';
domLines.forEach((l, idx) => {
  if (l.includes('<!--')) {
    currentComment = l.trim();
    console.log(`Line ${idx+1}: ${currentComment}`);
  }
});
