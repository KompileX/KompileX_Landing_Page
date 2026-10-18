const fs = require('fs');

const boards = [
  { id: 'f17050c8-9b99-4c23-8dae-ff380850b7d3', name: 'Home' },
  { id: 'ba5a7993-6a90-4068-ba29-838dfb5ad4e6', name: 'Services' },
  { id: 'd311399d-2b33-487e-aa68-57dead6052c3', name: 'Technologies' },
  { id: 'd85dfbff-f833-484c-a5e2-1f7f76f146dd', name: 'About Us' },
  { id: '967df4d0-eab8-4568-afaf-98ff7476e9b9', name: 'Case Study' },
  { id: '9b12a763-01da-4c93-9a12-5a81d1f9138a', name: 'Design Language' },
  { id: '8bdad329-7c21-4b01-9c5f-0a37700f5caf', name: 'Color Options' },
];

boards.forEach(b => {
  const p = `scripts/raw_dump/${b.id}_template.html`;
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    const comments = content.match(/<!--.*?-->/g) || [];
    console.log(`Board: ${b.name} (${b.id}) - size: ${content.length}`);
    console.log(`  Comments: ${comments.slice(0, 8).join(', ')}`);
  } else {
    console.log(`Board: ${b.name} NOT FOUND at ${p}`);
  }
});
