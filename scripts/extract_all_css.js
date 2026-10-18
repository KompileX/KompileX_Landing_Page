const fs = require('fs');

const boards = [
  'f17050c8-9b99-4c23-8dae-ff380850b7d3',
  'ba5a7993-6a90-4068-ba29-838dfb5ad4e6',
  'd311399d-2b33-487e-aa68-57dead6052c3',
  'd85dfbff-f833-484c-a5e2-1f7f76f146dd',
  '967df4d0-eab8-4568-afaf-98ff7476e9b9',
  '9b12a763-01da-4c93-9a12-5a81d1f9138a',
  '8bdad329-7c21-4b01-9c5f-0a37700f5caf',
];

let combinedCss = '';
boards.forEach(id => {
  const p = `scripts/raw_dump/${id}_template.html`;
  const html = fs.readFileSync(p, 'utf8');
  const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)];
  styles.forEach(s => {
    // filter out @font-face duplicates
    const content = s[1].replace(/@font-face[\s\S]*?\}\s*\}/g, '').replace(/@font-face[\s\S]*?\}/g, '').trim();
    if (content.length > 0 && !combinedCss.includes(content)) {
      combinedCss += `\n/* --- From ${id} --- */\n` + content + '\n';
    }
  });
});

console.log('Combined non-font CSS length:', combinedCss.length);
fs.writeFileSync('app/redesign-exact.css', combinedCss, 'utf8');
console.log('Wrote app/redesign-exact.css');
