const fs = require('fs');
const { renderTemplate } = require('./dc_renderer');

const boards = [
  { id: 'ba5a7993-6a90-4068-ba29-838dfb5ad4e6', name: 'Services' },
  { id: 'd311399d-2b33-487e-aa68-57dead6052c3', name: 'Technologies' },
  { id: 'd85dfbff-f833-484c-a5e2-1f7f76f146dd', name: 'About' },
  { id: '967df4d0-eab8-4568-afaf-98ff7476e9b9', name: 'CaseStudy' },
  { id: '9b12a763-01da-4c93-9a12-5a81d1f9138a', name: 'DesignLanguage' },
  { id: '8bdad329-7c21-4b01-9c5f-0a37700f5caf', name: 'ColorOptions' },
];

boards.forEach(b => {
  const p = `scripts/raw_dump/${b.id}_template.html`;
  const html = fs.readFileSync(p, 'utf8');
  const scriptMatches = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)];
  let vals = {};
  if (scriptMatches.length > 1 && scriptMatches[1][1].trim().length > 0) {
    const script = scriptMatches[1][1];
    const wrappedScript = `
    class DCLogic {
      constructor() { this.state = {}; }
      setState(s) { Object.assign(this.state, s); }
    }
    ${script}
    const c = new Component();
    c.renderVals ? c.renderVals() : {};
    `;
    try {
      vals = eval(wrappedScript);
    } catch (e) {
      console.error(`Eval error in ${b.name}:`, e.message);
    }
  }
  const rendered = renderTemplate(html, vals || {});
  console.log(`Rendered ${b.name} (${b.id}): length ${rendered.length}, unrendered {{: ${rendered.includes('{{')}`);
  fs.writeFileSync(`scripts/rendered_${b.name.toLowerCase()}.html`, rendered, 'utf8');
});
