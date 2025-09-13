#!/bin/bash

# Ecopyxle Website Deployment Script
echo "🚀 Starting Ecopyxle website deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Export static files
echo "📤 Exporting static files..."
npm run export

echo "✅ Deployment preparation complete!"
echo "📁 Static files are ready in the 'out' directory"
echo "🌐 You can now deploy the 'out' directory to any static hosting service"
