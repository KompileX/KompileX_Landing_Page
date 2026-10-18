const fs = require('fs');

function styleStringToJsx(str) {
  const rules = str.split(';').map(r => r.trim()).filter(Boolean);
  const pairs = [];
  for (const rule of rules) {
    const colonIdx = rule.indexOf(':');
    if (colonIdx === -1) continue;
    let prop = rule.substring(0, colonIdx).trim();
    let val = rule.substring(colonIdx + 1).trim();
    
    // Replace hardcoded colors with CSS variables with exact fallbacks
    val = val.replace(/#F4F6F1/gi, 'var(--kpx-bg-page, #F4F6F1)');
    val = val.replace(/#0C1410/gi, 'var(--kpx-text-main, #0C1410)');
    val = val.replace(/#C8F53C/gi, 'var(--kpx-accent-lime, #C8F53C)');
    val = val.replace(/#0A6B4A/gi, 'var(--kpx-accent-emerald, #0A6B4A)');
    val = val.replace(/#1FB36B/gi, 'var(--kpx-accent-green, #1FB36B)');
    val = val.replace(/#D8DDD2/gi, 'var(--kpx-border, #D8DDD2)');
    val = val.replace(/#CBD2C3/gi, 'var(--kpx-border-strong, #CBD2C3)');
    val = val.replace(/#E4E8DD/gi, 'var(--kpx-border-subtle, #E4E8DD)');
    val = val.replace(/#E3EAD9/gi, 'var(--kpx-stage-bg, #E3EAD9)');
    val = val.replace(/#B9C6AB/gi, 'var(--kpx-hero-dots, #B9C6AB)');
    val = val.replace(/#EEF1E8/gi, 'var(--kpx-tag-bg, #EEF1E8)');
    val = val.replace(/#2C3830/gi, 'var(--kpx-tag-text, #2C3830)');
    val = val.replace(/#4A5650/gi, 'var(--kpx-text-muted, #4A5650)');
    val = val.replace(/#A9B6AE/gi, 'var(--kpx-dark-muted, #A9B6AE)');
    val = val.replace(/rgba\(12,\s*20,\s*16,\s*\.45\)/gi, 'var(--kpx-hero-shadow, rgba(12,20,16,.45))');
    val = val.replace(/rgba\(12,\s*20,\s*16,\s*\.4\)/gi, 'var(--kpx-card-hover-shadow, rgba(12,20,16,.4))');

    // Handle vendor prefixes like -webkit-
    if (prop.startsWith('-webkit-')) {
      const rest = prop.substring(8).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      prop = 'Webkit' + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      prop = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    }
    
    const safeVal = val.replace(/'/g, "\\'");
    pairs.push(`${prop}: '${safeVal}'`);
  }
  return `style={{ ${pairs.join(', ')} }}`;
}

function convertHtmlToJsx(html) {
  let res = html.trim();
  res = res.replace(/<\/x-dc>/gi, '').trim();

  // Automatic div balancing
  let opens = (res.match(/<div\b/g) || []).length;
  let closes = (res.match(/<\/div>/g) || []).length;

  while (closes > opens && res.endsWith('</div>')) {
    res = res.substring(0, res.lastIndexOf('</div>')).trim();
    closes--;
  }

  while (opens > closes && res.startsWith('<div>')) {
    res = res.substring(5).trim();
    opens--;
  }

  // Replace styles first
  res = res.replace(/style="([^"]*)"/g, (_, s) => styleStringToJsx(s));

  // Fix WebkitTextStroke capitalization
  res = res.replace(/WebkittextStroke/g, 'WebkitTextStroke');

  // Convert classes
  res = res.replace(/\bclass="/g, 'className="');

  // SVG attributes
  res = res.replace(/sc-camel-view-box=/g, 'viewBox=');
  res = res.replace(/stroke-width=/g, 'strokeWidth=');
  res = res.replace(/stroke-linecap=/g, 'strokeLinecap=');
  res = res.replace(/stroke-linejoin=/g, 'strokeLinejoin=');

  // Label for
  res = res.replace(/<label\s+for=/g, '<label htmlFor=');

  // Self closing tags
  res = res.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  res = res.replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');
  res = res.replace(/<br([^>]*[^\/])>/g, '<br$1 />');
  res = res.replace(/<img([^>]*[^\/])>/g, '<img$1 />');

  // Convert comments
  res = res.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Update links
  res = res.replace(/href="Main\.dc\.html"/g, 'href="/"');
  res = res.replace(/href="About\.dc\.html"/g, 'href="/about-us"');
  res = res.replace(/href="Services\.dc\.html"/g, 'href="/services"');
  res = res.replace(/href="Technologies\.dc\.html"/g, 'href="/technologies"');
  res = res.replace(/href="CaseStudy\.dc\.html"/g, 'href="/case-studies/commerceos"');

  // Clean custom attrs
  res = res.replace(/sc-camel-on-click="[^"]*"/g, '');

  return res;
}

const subpages = [
  { name: 'ExactServices', file: 'scripts/rendered_services.html', target: 'components/redesign/ExactServices.tsx', route: 'app/services/page.tsx' },
  { name: 'ExactTechnologies', file: 'scripts/rendered_technologies.html', target: 'components/redesign/ExactTechnologies.tsx', route: 'app/technologies/page.tsx' },
  { name: 'ExactAboutUs', file: 'scripts/rendered_about.html', target: 'components/redesign/ExactAboutUs.tsx', route: 'app/about-us/page.tsx' },
  { name: 'ExactCaseStudy', file: 'scripts/rendered_casestudy.html', target: 'components/redesign/ExactCaseStudy.tsx', route: 'app/case-studies/commerceos/page.tsx' },
  { name: 'ExactDesignLanguage', file: 'scripts/rendered_designlanguage.html', target: 'components/redesign/ExactDesignLanguage.tsx', route: 'app/design-language/page.tsx' },
  { name: 'ExactColorOptions', file: 'scripts/rendered_coloroptions.html', target: 'components/redesign/ExactColorOptions.tsx', route: 'app/color-options/page.tsx' },
];

subpages.forEach(sp => {
  const html = fs.readFileSync(sp.file, 'utf8');
  const jsxBody = convertHtmlToJsx(html);

  const componentCode = `'use client';

import React from 'react';
import Link from 'next/link';

export default function ${sp.name}() {
  return (
    <div className="exact-${sp.name.toLowerCase()}-container" style={{ background: 'var(--kpx-bg-page, #F4F6F1)', color: 'var(--kpx-text-main, #0C1410)' }}>
      ${jsxBody}
    </div>
  );
}
`;

  fs.writeFileSync(sp.target, componentCode, 'utf8');
  console.log(`Wrote ${sp.target} (length: ${componentCode.length})`);

  const pageCode = `import ${sp.name} from '@/components/redesign/${sp.name}';

export default function Page() {
  return <${sp.name} />;
}
`;
  fs.writeFileSync(sp.route, pageCode, 'utf8');
  console.log(`Wrote route ${sp.route}`);
});
