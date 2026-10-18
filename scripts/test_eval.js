const fs = require('fs');

const html = fs.readFileSync('scripts/raw_dump/f17050c8-9b99-4c23-8dae-ff380850b7d3_template.html', 'utf8');
const scriptMatches = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)];
const script = scriptMatches[1][1];

const wrappedScript = `
class DCLogic {
  constructor() { this.state = { faq: 0, filter: 'all' }; }
  setState(s) { Object.assign(this.state, s); }
}
${script}

const c = new Component();
const vals = c.renderVals();
console.log('Successfully evaluated renderVals!');
console.log('Available keys:', Object.keys(vals));
console.log('Services count:', vals.services.length);
console.log('Works count:', vals.works.length);
console.log('Stats count:', vals.stats.length);
console.log('Infra items:', vals.infra.length);
`;

eval(wrappedScript);
