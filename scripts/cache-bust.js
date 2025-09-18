#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Generate a unique timestamp
const timestamp = Date.now()

console.log('🚀 Cache busting with timestamp:', timestamp)

// Update service worker cache names
const swPath = path.join(__dirname, '../public/sw.js')
if (fs.existsSync(swPath)) {
  let swContent = fs.readFileSync(swPath, 'utf8')
  
  // Replace cache names with new timestamp
  swContent = swContent.replace(
    /const CACHE_NAME = 'ecopyxle-v[\d\.]+-\d+'/g,
    `const CACHE_NAME = 'ecopyxle-v3.0.0-${timestamp}'`
  )
  swContent = swContent.replace(
    /const STATIC_CACHE = 'ecopyxle-static-v[\d\.]+-\d+'/g,
    `const STATIC_CACHE = 'ecopyxle-static-v3.0.0-${timestamp}'`
  )
  swContent = swContent.replace(
    /const DYNAMIC_CACHE = 'ecopyxle-dynamic-v[\d\.]+-\d+'/g,
    `const DYNAMIC_CACHE = 'ecopyxle-dynamic-v3.0.0-${timestamp}'`
  )
  
  fs.writeFileSync(swPath, swContent)
  console.log('✅ Updated service worker cache names')
}

// Create a version file
const versionPath = path.join(__dirname, '../public/version.json')
fs.writeFileSync(versionPath, JSON.stringify({
  version: '3.0.0',
  timestamp: timestamp,
  buildTime: new Date().toISOString()
}, null, 2))

console.log('✅ Created version file')
console.log('🎉 Cache busting complete!')
