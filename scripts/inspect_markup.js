const fs = require('fs');

const html = fs.readFileSync('scripts/raw_dump/f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html', 'utf8');
const scFors = [...html.matchAll(/<sc-for\s+list="\{\{works\}\}"[^>]*>([\s\S]*?)<\/sc-for>/g)];
console.log('--- WORKS TEMPLATE ---');
console.log(scFors[0][1]);
