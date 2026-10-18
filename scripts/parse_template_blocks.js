const fs = require('fs');

const html = fs.readFileSync('scripts/raw_dump/f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html', 'utf8');
const body = html.match(/<body>([\s\S]*?)<script/)[1].split('</helmet>')[1];

const scFors = [...body.matchAll(/<sc-for\s+list="([^"]*)"\s+as="([^"]*)"[^>]*>([\s\S]*?)<\/sc-for>/g)];
console.log('Total sc-for blocks:', scFors.length);
scFors.forEach((m, idx) => {
  console.log(`\n--- Block ${idx}: list="${m[1]}" as="${m[2]}" ---`);
  console.log(m[3].trim().substring(0, 300) + '...');
});
