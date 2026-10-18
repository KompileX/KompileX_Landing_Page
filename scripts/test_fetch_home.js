fetch('http://localhost:3000/')
  .then(r => {
    console.log('Status:', r.status);
    return r.text();
  })
  .then(t => {
    console.log('HTML length:', t.length);
    console.log('Contains exact stage?', t.includes('your-product.com / dashboard'));
    console.log('Contains bar animations?', t.includes('bar'));
    console.log('Contains devops rack?', t.includes('led'));
    console.log('Contains All work chip?', t.includes('All work'));
    console.log('Contains FAQ question?', t.includes('How does a project start?'));
    console.log('Contains Contact form?', t.includes('Send inquiry to engineering'));
  })
  .catch(err => console.error('Fetch error:', err.message));
