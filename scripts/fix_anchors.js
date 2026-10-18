const fs = require('fs');
const path = require('path');

const dir = 'components/redesign';
const files = fs.readdirSync(dir);

files.forEach(f => {
  if (f.startsWith('Exact') && f.endsWith('.tsx')) {
    const p = path.join(dir, f);
    let c = fs.readFileSync(p, 'utf8');

    // Fix Work link
    c = c.replace(/<a([^>]*?)href="\/">Work<\/a>/g, '<a$1href="/#work">Work</a>');
    c = c.replace(/<a([^>]*?)href="\/">Our Work<\/a>/g, '<a$1href="/#work">Our Work</a>');
    
    // Fix Contact links
    c = c.replace(/<a([^>]*?)href="\/">Contact<\/a>/g, '<a$1href="/#contact">Contact</a>');
    c = c.replace(/<a([^>]*?)href="\/">Contact Us<\/a>/g, '<a$1href="/#contact">Contact Us</a>');
    
    // Fix Why Us links
    c = c.replace(/<a([^>]*?)href="\/">Why Us<\/a>/g, '<a$1href="/#why">Why Us</a>');

    fs.writeFileSync(p, c, 'utf8');
    console.log(`Updated links in ${f}`);
  }
});
