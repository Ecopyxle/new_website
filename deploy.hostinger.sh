#!/bin/bash

# Hostinger Deployment Script for Next.js Static Export
# Make this file executable: chmod +x deploy.hostinger.sh

echo "🚀 Starting Hostinger deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version check passed: $(node -v)"

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf .next out

# Install dependencies
print_status "Installing dependencies..."
npm ci --production=false

if [ $? -ne 0 ]; then
    print_error "Failed to install dependencies"
    exit 1
fi

print_success "Dependencies installed successfully"

# Copy Hostinger-specific config
print_status "Using Hostinger-optimized configuration..."
cp next.config.hostinger.js next.config.js

# Build the project
print_status "Building the project for static export..."
NODE_ENV=production npm run build

if [ $? -ne 0 ]; then
    print_error "Build failed"
    exit 1
fi

print_success "Build completed successfully"

# Check if out directory was created
if [ ! -d "out" ]; then
    print_error "Static export failed - 'out' directory not found"
    exit 1
fi

print_success "Static export completed - 'out' directory created"

# Create .htaccess for proper routing (if needed)
print_status "Creating .htaccess for proper routing..."
cat > out/.htaccess << 'EOF'
# Enable GZIP compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/avif "access plus 1 year"
</IfModule>

# Handle Next.js routing
RewriteEngine On

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^/]+)/$ $1.html [L]

# Handle clean URLs
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^/]+)$ $1.html [L]

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options SAMEORIGIN
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
EOF

print_success ".htaccess file created"

# Display deployment information
echo ""
print_success "🎉 Deployment preparation completed!"
echo ""
print_status "Next steps for Hostinger deployment:"
echo "1. Upload the contents of the 'out' folder to your Hostinger public_html directory"
echo "2. Or use Git deployment if you have it set up in Hostinger"
echo "3. Your static website files are ready in the 'out' directory"
echo ""
print_status "Files to upload:"
echo "   - All contents of the 'out' directory"
echo "   - Make sure to upload the .htaccess file as well"
echo ""
print_warning "Note: If using a subdirectory, update the basePath in next.config.hostinger.js"
echo ""
print_success "Deployment files are ready! 🚀"
