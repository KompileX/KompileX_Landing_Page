const fs=require('fs');
const a=fs.readFileSync('_a.txt','utf8');
const team=[...a.matchAll(/<article[\s\S]*?<\/article>/g)].map(m=>{const x=m[0];
 const name=(x.match(/<h3[^>]*>([^<]*)</)||[])[1];const role=(x.match(/<p style[^>]*>([^<]*)<\/p>/)||[])[1];
 const lis=[...x.matchAll(/<\/span>([^<]+)<\/li>/g)].map(l=>l[1].trim());return {name,role,lis,img:(x.match(/src="([^"]+)"/)||[])[1]};});
console.log(JSON.stringify(team,null,1));
const t=fs.readFileSync('_t.txt','utf8');
const tiles=[...t.matchAll(/<span style=\{\{ display: 'flex', flexDirection: 'column', gap: '3px'[^>]*>\s*<span[^>]*>([^<]*)<\/span>\s*<span className="mono"[^>]*>([^<]*)<\/span>/g)].map(m=>m[1]+'|'+m[2]);
console.log(tiles.length, tiles.join('; '));
// other sections of about
const h=[...a.matchAll(/<h[23][^>]*>([^<]*)</g)].map(m=>m[1]);console.log(h.join('\n'));
