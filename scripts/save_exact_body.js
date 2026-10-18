const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, 'raw_dump', 'f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html'), 'utf8');

// Find xdc
const xdcStart = raw.indexOf('<x-dc>');
const xdcEnd = raw.indexOf('</x-dc>');
const xdc = raw.substring(xdcStart + 6, xdcEnd);

// Let's get the html after </helmet>
const helmetEnd = xdc.indexOf('</helmet>');
const bodyHtml = xdc.substring(helmetEnd + 9);

fs.writeFileSync(path.join(__dirname, 'exact_home_body.html'), bodyHtml.trim(), 'utf8');
console.log('Saved exact_home_body.html, lines:', bodyHtml.trim().split('\n').length);
