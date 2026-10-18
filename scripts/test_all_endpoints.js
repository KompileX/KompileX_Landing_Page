const routes = [
  { path: '/', label: 'Home Page' },
  { path: '/services', label: 'Services Page' },
  { path: '/technologies', label: 'Technologies Page' },
  { path: '/about-us', label: 'About Us Page' },
  { path: '/case-studies/commerceos', label: 'Case Study (CommerceOS)' },
  { path: '/design-language', label: 'Design Language' },
  { path: '/color-options', label: 'Color Options' },
  { path: '/board', label: '7-Board Canvas Overview' },
  { path: '/admin', label: 'Admin Theme Customizer' },
];

async function run() {
  console.log('Testing all endpoints on http://localhost:3000...\n');
  let passed = 0;
  for (const r of routes) {
    try {
      const res = await fetch(`http://localhost:3000${r.path}`);
      const text = await res.text();
      console.log(`[HTTP ${res.status}] ${r.label.padEnd(28)} -> ${r.path} (${text.length.toLocaleString()} bytes)`);
      if (res.status === 200) passed++;
    } catch (err) {
      console.error(`[FAIL] ${r.label} -> ${r.path}:`, err.message);
    }
  }
  console.log(`\nResults: ${passed} / ${routes.length} endpoints passed successfully with HTTP 200!`);
}

run();
