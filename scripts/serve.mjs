// Static server for the static export in dist/ (output: 'export').
// `next start` cannot serve export builds, so this replaces it for local
// previews. Resolves clean URLs (/privacy-policy -> privacy-policy.html)
// and falls back to 404.html for anything else.
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)), 'dist')
const port = Number(process.env.PORT ?? 3000)

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function contentPath(pathname) {
  // Resolve and verify we stay inside dist/.
  const resolved = normalize(join(root, pathname))
  if (!resolved.startsWith(root + sep) && resolved !== root) return null
  return resolved
}

async function tryRead(file) {
  try {
    return await readFile(file)
  } catch {
    return null
  }
}

async function resolveFile(pathname) {
  if (pathname === '/') pathname = '/index.html'
  if (!extname(pathname)) {
    const candidates = [pathname + '.html', join(pathname, 'index.html')]
    for (const candidate of candidates) {
      const body = await tryRead(contentPath(candidate))
      if (body) return { body, ext: '.html' }
    }
    return null
  }
  const body = await tryRead(contentPath(pathname))
  return body ? { body, ext: extname(pathname).toLowerCase() } : null
}

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host ?? 'localhost'}`)
    let pathname = decodeURIComponent(url.pathname)
    let found = await resolveFile(pathname)

    if (!found) {
      found = await resolveFile('/404.html')
      res.statusCode = 404
    }
    if (!found) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end('Not Found')
      return
    }

    res.writeHead(res.statusCode, {
      'Content-Type': MIME[found.ext] ?? 'application/octet-stream',
      'Cache-Control': 'no-cache',
    })
    res.end(found.body)
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Internal Server Error')
  }
}).listen(port, () => {
  console.log(`Serving ${root}`)
  console.log(`  ➜  http://localhost:${port}`)
})
