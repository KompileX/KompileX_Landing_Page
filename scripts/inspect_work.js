const fs = require('fs');

const html = fs.readFileSync('scripts/rendered_home.html', 'utf8');
const start = html.indexOf('<!-- 05 WORK -->');
const end = html.indexOf('<!-- 06 WHY US -->');
const workHtml = html.substring(start, end);
console.log('Work HTML length:', workHtml.length);
console.log('Work start (first 600 chars):\n', workHtml.substring(0, 600));
console.log('...\nWork end (last 600 chars):\n', workHtml.substring(workHtml.length - 600));
