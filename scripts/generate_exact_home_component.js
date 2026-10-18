const fs = require('fs');

const html = fs.readFileSync('scripts/rendered_home.html', 'utf8');

// Function to convert HTML to valid React JSX
function htmlToJsx(str) {
  let res = str;

  // 1. Convert class= to className=
  res = res.replace(/\bclass="/g, 'className="');

  // 2. Convert SVG attributes to camelCase
  res = res.replace(/sc-camel-view-box=/g, 'viewBox=');
  res = res.replace(/stroke-width=/g, 'strokeWidth=');
  res = res.replace(/stroke-linecap=/g, 'strokeLinecap=');
  res = res.replace(/stroke-linejoin=/g, 'strokeLinejoin=');

  // 3. Self-close void tags: input, hr, br, img
  res = res.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  res = res.replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');
  res = res.replace(/<br([^>]*[^\/])>/g, '<br$1 />');
  res = res.replace(/<img([^>]*[^\/])>/g, '<img$1 />');

  // 4. Update relative links to Next.js routes
  res = res.replace(/href="Main\.dc\.html"/g, 'href="/"');
  res = res.replace(/href="About\.dc\.html"/g, 'href="/about-us"');
  res = res.replace(/href="Services\.dc\.html"/g, 'href="/services"');
  res = res.replace(/href="Technologies\.dc\.html"/g, 'href="/technologies"');
  res = res.replace(/href="CaseStudy\.dc\.html"/g, 'href="/case-studies/commerceos"');

  // 5. Replace colors with CSS variables with exact fallbacks
  res = res.replace(/#F4F6F1/g, 'var(--kpx-bg-page, #F4F6F1)');
  res = res.replace(/#0C1410/g, 'var(--kpx-text-main, #0C1410)');
  res = res.replace(/#C8F53C/g, 'var(--kpx-accent-lime, #C8F53C)');
  res = res.replace(/#0A6B4A/g, 'var(--kpx-accent-emerald, #0A6B4A)');
  res = res.replace(/#1FB36B/g, 'var(--kpx-accent-green, #1FB36B)');
  res = res.replace(/#D8DDD2/g, 'var(--kpx-border, #D8DDD2)');
  res = res.replace(/#CBD2C3/g, 'var(--kpx-border-strong, #CBD2C3)');
  res = res.replace(/#E4E8DD/g, 'var(--kpx-border-subtle, #E4E8DD)');
  res = res.replace(/#E3EAD9/g, 'var(--kpx-stage-bg, #E3EAD9)');
  res = res.replace(/#B9C6AB/g, 'var(--kpx-hero-dots, #B9C6AB)');
  res = res.replace(/#EEF1E8/g, 'var(--kpx-tag-bg, #EEF1E8)');
  res = res.replace(/#2C3830/g, 'var(--kpx-tag-text, #2C3830)');
  res = res.replace(/#4A5650/g, 'var(--kpx-text-muted, #4A5650)');
  res = res.replace(/#A9B6AE/g, 'var(--kpx-dark-muted, #A9B6AE)');

  // 6. Style string to React style object or dangerouslySetInnerHTML?
  // Wait! In React JSX, style="padding: 20px" causes a JSX parse error: "The `style` prop expects a mapping from style properties to values, not a string."
  return res;
}

console.log('Testing JSX conversion...');
