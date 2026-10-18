const fs = require('fs');
const { renderTemplate } = require('./dc_renderer');

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
c.renderVals();
`;

const vals = eval(wrappedScript);
const rendered = renderTemplate(html, vals);
console.log('Successfully rendered Home template! Rendered length:', rendered.length);
console.log('Contains sc-for?', rendered.includes('<sc-for'));
console.log('Contains sc-if?', rendered.includes('<sc-if'));
console.log('Contains {{?', rendered.includes('{{'));

fs.writeFileSync('scripts/rendered_home.html', rendered, 'utf8');
console.log('Written to scripts/rendered_home.html');
