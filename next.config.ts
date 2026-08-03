import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  env: {
    VITE_API_BASE_URL: process.env.VITE_API_BASE_URL ?? '',
  },
}

export default nextConfig
