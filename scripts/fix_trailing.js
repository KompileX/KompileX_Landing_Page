const fs = require('fs');

let file = fs.readFileSync('components/redesign/ExactHome.tsx', 'utf8');

// Remove trailing </div> and </x-dc> before the closing JSX
file = file.replace(/<\/footer>\s*<\/div>\s*<\/x-dc>/gi, '</footer>');

fs.writeFileSync('components/redesign/ExactHome.tsx', file, 'utf8');
console.log('Fixed trailing tags in ExactHome.tsx');
