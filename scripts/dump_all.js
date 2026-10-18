const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const srcPath = 'C:\\Users\\USER\\Downloads\\KompileX Redesign.html';
const raw = fs.readFileSync(srcPath, 'utf8');

// Extract all scripts
const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
let m;
let manifest = null;
let template = null;

while ((m = scriptRegex.exec(raw)) !== null) {
  if (m[1].includes('__bundler/manifest')) {
    manifest = JSON.parse(m[2]);
  } else if (m[1].includes('__bundler/template')) {
    template = JSON.parse(m[2]);
  }
}

const outDir = path.join(__dirname, 'raw_dump');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

if (template) {
  fs.writeFileSync(path.join(outDir, 'board_template.html'), template, 'utf8');
}

if (manifest) {
  for (const [uuid, entry] of Object.entries(manifest)) {
    let buf = Buffer.from(entry.data, 'base64');
    if (entry.compressed) {
      try { buf = zlib.gunzipSync(buf); } catch (e) { console.error(e); }
    }
    fs.writeFileSync(path.join(outDir, `${uuid}.html`), buf, 'utf8');
    console.log(`Saved ${uuid}.html (${buf.length} bytes)`);

    // Now check if this inner HTML also has a bundler manifest!
    const innerText = buf.toString('utf8');
    const innerScriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
    let im;
    let innerManifest = null;
    let innerTemplate = null;
    while ((im = innerScriptRegex.exec(innerText)) !== null) {
      if (im[1].includes('__bundler/manifest')) {
        innerManifest = JSON.parse(im[2]);
      } else if (im[1].includes('__bundler/template')) {
        innerTemplate = JSON.parse(im[2]);
      }
    }
    if (innerTemplate) {
      fs.writeFileSync(path.join(outDir, `${uuid}_template.html`), innerTemplate, 'utf8');
      console.log(`Saved inner template for ${uuid} (${innerTemplate.length} bytes)`);
    }
  }
}
