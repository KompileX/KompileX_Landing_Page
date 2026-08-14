import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Comment out output: 'export' to enable SSR and dynamic API routes for the Groq AI assistant.
  // Uncomment if you strictly need a static-only HTML/CSS export.
  // output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  env: {
    VITE_API_BASE_URL: process.env.VITE_API_BASE_URL ?? '',
  },
}

export default nextConfig
