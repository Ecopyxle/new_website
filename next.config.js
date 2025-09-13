/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  ...(isProd ? { output: 'export', trailingSlash: true } : {}),
  images: {
    // In production export we must disable optimizer; keep it enabled in dev
    ...(isProd ? { unoptimized: true } : {}),
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig 