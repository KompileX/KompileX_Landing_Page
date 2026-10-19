import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about-us', destination: '/#team', permanent: true },
      { source: '/services', destination: '/#services', permanent: true },
      { source: '/technologies', destination: '/#stack', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
