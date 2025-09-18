/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger hosting
  output: 'export',
  trailingSlash: true,
  
  // Disable middleware for static export
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Basic optimizations
  poweredByHeader: false,
  compress: true,
  
  // Asset prefix for CDN (optional - uncomment if using CDN)
  // assetPrefix: 'https://your-cdn-domain.com',
  
  // Base path (uncomment if hosting in subdirectory)
  // basePath: '/your-subdirectory',


  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
          reuseExistingChunk: true,
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
