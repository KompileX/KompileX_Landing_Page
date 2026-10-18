const fs = require('fs');

const html = fs.readFileSync('scripts/rendered_home.html', 'utf8');

const markers = [
  '<!-- NAV -->',
  '<!-- HERO -->',
  '<!-- STAGE -->',
  '<!-- clients -->',
  '<!-- TECH MARQUEE -->',
  '<!-- STATS -->',
  '<!-- 01 SERVICES -->',
  '<!-- 02 ENGAGEMENT -->',
  '<!-- 03 PROCESS -->',
  '<!-- 04 DEVOPS -->',
  '<!-- 05 WORK -->',
  '<!-- 06 WHY US -->',
  '<!-- 07 TESTIMONIALS -->',
  '<!-- 08 INSIGHTS -->',
  '<!-- CAREERS -->',
  '<!-- 09 FAQ -->',
  '<!-- 09 CONTACT -->',
  '<!-- FOOTER -->'
];

markers.forEach(m => {
  const idx = html.indexOf(m);
  console.log(`${m}: index ${idx}`);
});
