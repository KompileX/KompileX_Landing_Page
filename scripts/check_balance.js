const fs = require('fs');

['coloroptions', 'designlanguage'].forEach(n => {
  let c = fs.readFileSync('scripts/rendered_' + n + '.html', 'utf8');
  c = c.replace(/<\/x-dc>/gi, '');
  const opens = (c.match(/<div\b/g) || []).length;
  const closes = (c.match(/<\/div>/g) || []).length;
  console.log(n, 'Original div balance:', opens, closes);
});
