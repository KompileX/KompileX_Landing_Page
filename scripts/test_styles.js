const fs = require('fs');

function styleStringToObj(str) {
  const rules = str.split(';').map(r => r.trim()).filter(Boolean);
  const obj = {};
  for (const rule of rules) {
    const colonIdx = rule.indexOf(':');
    if (colonIdx === -1) continue;
    let prop = rule.substring(0, colonIdx).trim();
    let val = rule.substring(colonIdx + 1).trim();
    
    // Handle vendor prefixes like -webkit-
    if (prop.startsWith('-webkit-')) {
      prop = 'Webkit' + prop.substring(8).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    } else {
      prop = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    }
    
    obj[prop] = val;
  }
  return obj;
}

const html = fs.readFileSync('scripts/rendered_home.html', 'utf8');
const styleMatches = [...html.matchAll(/style="([^"]*)"/g)];
console.log('Total style attributes in rendered_home.html:', styleMatches.length);

let errors = 0;
styleMatches.forEach((m, idx) => {
  try {
    const parsed = styleStringToObj(m[1]);
  } catch (e) {
    console.error(`Error parsing style at ${idx}:`, m[1], e.message);
    errors++;
  }
});
console.log(`Finished testing styles! Errors: ${errors}`);
