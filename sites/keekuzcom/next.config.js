const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/keekuzcom',
  output: 'export',
  turbopack: {
    root: path.join(__dirname, '../..'),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
  },
}

module.exports = nextConfig
