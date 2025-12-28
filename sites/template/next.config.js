const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set basePath to deploy under claudesupply.com/template/
  // Change 'template' to your site folder name
  basePath: '/template',
  turbopack: {
    root: path.join(__dirname, '../..'),
  },
  output: 'export',
}

module.exports = nextConfig
