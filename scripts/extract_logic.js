const fs = require('fs');
const path = require('path');

const homeTpl = fs.readFileSync(path.join(__dirname, 'raw_dump', 'f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html'), 'utf8');

// Also let's extract the script from f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html
const scriptMatch = homeTpl.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/i);
console.log('Script exists:', !!scriptMatch);

// Let's inspect the exact renderVals in the script
fs.writeFileSync(path.join(__dirname, 'exact_home_logic.js'), scriptMatch[1], 'utf8');
console.log('Saved exact_home_logic.js');
