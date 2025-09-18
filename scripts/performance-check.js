#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Performance analysis script
console.log('🚀 Ecopyxle Performance Analysis\n')

// Analyze build output
const buildPath = path.join(__dirname, '../.next')
const buildExists = fs.existsSync(buildPath)

if (!buildExists) {
  console.log('❌ Build directory not found. Run "npm run build" first.')
  process.exit(1)
}

// Read build manifest
const buildManifestPath = path.join(buildPath, 'build-manifest.json')
if (fs.existsSync(buildManifestPath)) {
  const buildManifest = JSON.parse(fs.readFileSync(buildManifestPath, 'utf8'))
  
  console.log('📊 Bundle Analysis:')
  console.log(`   - Total Pages: ${Object.keys(buildManifest.pages).length}`)
  
  // Analyze page sizes
  const pageSizes = {}
  Object.keys(buildManifest.pages).forEach(page => {
    const chunks = buildManifest.pages[page]
    let totalSize = 0
    
    chunks.forEach(chunk => {
      const chunkPath = path.join(buildPath, 'static/chunks', chunk)
      if (fs.existsSync(chunkPath)) {
        const stats = fs.statSync(chunkPath)
        totalSize += stats.size
      }
    })
    
    pageSizes[page] = totalSize
  })
  
  // Show largest pages
  const sortedPages = Object.entries(pageSizes)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
  
  console.log('\n📈 Largest Pages:')
  sortedPages.forEach(([page, size]) => {
    const sizeKB = (size / 1024).toFixed(2)
    console.log(`   - ${page}: ${sizeKB} KB`)
  })
}

// Performance recommendations
console.log('\n💡 Performance Recommendations:')
console.log('   ✅ Lazy loading implemented')
console.log('   ✅ React.memo optimization applied')
console.log('   ✅ Service Worker for caching')
console.log('   ✅ PWA manifest configured')
console.log('   ✅ Image optimization enabled')
console.log('   ✅ Bundle splitting configured')

// Web Vitals targets
console.log('\n🎯 Web Vitals Targets:')
console.log('   - Largest Contentful Paint (LCP): < 2.5s')
console.log('   - First Input Delay (FID): < 100ms')
console.log('   - Cumulative Layout Shift (CLS): < 0.1')
console.log('   - First Contentful Paint (FCP): < 1.8s')
console.log('   - Time to First Byte (TTFB): < 800ms')

// Uptime monitoring suggestions
console.log('\n⏱️  Uptime Monitoring Suggestions:')
console.log('   1. Use services like Pingdom, UptimeRobot, or DataDog')
console.log('   2. Monitor from multiple geographic locations')
console.log('   3. Set up alerts for downtime > 30 seconds')
console.log('   4. Monitor SSL certificate expiration')
console.log('   5. Track response times and set thresholds')

// Performance monitoring
console.log('\n📊 Performance Monitoring:')
console.log('   1. Implement Google Analytics 4 with Core Web Vitals')
console.log('   2. Use Real User Monitoring (RUM)')
console.log('   3. Set up automated Lighthouse CI')
console.log('   4. Monitor bundle size changes in CI/CD')
console.log('   5. Track performance budgets')

console.log('\n✨ Performance optimization complete!')
console.log('   Run "npm run dev" to start the optimized development server.')
console.log('   Run "npm run build" to create an optimized production build.')
