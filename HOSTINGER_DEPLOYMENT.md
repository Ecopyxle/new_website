# 🚀 Hostinger Cloud Hosting Deployment Guide

Complete guide for deploying the Ecopyxle AI website to Hostinger cloud hosting.

## 📋 Prerequisites

### Required Tools
- ✅ Node.js 18+ installed locally
- ✅ npm or yarn package manager
- ✅ Git (for version control)
- ✅ Hostinger Cloud Hosting account
- ✅ Domain configured (optional)

### Hostinger Requirements
- **Hosting Plan**: Cloud Hosting (recommended) or Premium/Business
- **PHP Version**: 8.0+ (for Composer support)
- **Node.js**: 18.x (available on cloud hosting)
- **SSL Certificate**: Auto-generated or custom

## 🛠️ Deployment Methods

### Method 1: Automated Deployment Script (Recommended)

1. **Clone and prepare the project:**
   ```bash
   git clone https://github.com/Ecopyxle/new_website.git
   cd new_website
   npm install
   ```

2. **Run the deployment script:**
   ```bash
   chmod +x deploy.hostinger.sh
   ./deploy.hostinger.sh
   ```

3. **Upload to Hostinger:**
   - Access your Hostinger control panel
   - Navigate to File Manager
   - Upload all contents from the `out/` directory to `public_html/`
   - Ensure `.htaccess` file is included

### Method 2: Git Deployment (Cloud Hosting)

1. **Setup Git repository in Hostinger:**
   - Go to Hostinger control panel
   - Navigate to Git section
   - Connect your GitHub repository
   - Set branch: `main`

2. **Configure build settings:**
   ```json
   {
     "build_command": "npm run build:hostinger",
     "publish_directory": "out",
     "node_version": "18.x"
   }
   ```

3. **Environment variables:**
   ```
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

### Method 3: Manual Build and Upload

1. **Build locally:**
   ```bash
   npm install
   npm run build:hostinger
   ```

2. **Upload files:**
   - Compress the `out/` directory
   - Upload via File Manager or FTP
   - Extract to `public_html/`

## 📁 File Structure After Deployment

```
public_html/
├── _next/                    # Next.js static assets
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── media/
├── images/                   # Static images
├── favicon.ico
├── index.html               # Homepage
├── features.html            # Features page
├── use-cases.html           # Use cases page
├── company.html             # About page
├── contact.html             # Contact page
├── 404.html                 # Error page
├── .htaccess               # Server configuration
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine instructions
└── manifest.json           # PWA manifest
```

## ⚙️ Configuration Files Explained

### `composer.json`
- PHP dependency management
- Optimized for Hostinger environment
- Includes deployment scripts

### `next.config.hostinger.js`
- Next.js configuration for static export
- Optimized for Hostinger hosting
- Disabled image optimization
- Enabled trailing slashes

### `.htaccess`
- URL rewriting for clean URLs
- GZIP compression
- Cache headers
- Security headers

### `hostinger-deploy.json`
- Deployment configuration
- Performance optimizations
- Security settings

## 🔧 Environment Configuration

### 1. Create Environment File
```bash
cp hostinger.env.example .env.production
```

### 2. Update Environment Variables
```env
# Production URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Performance
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Domain Configuration
- Point your domain to Hostinger nameservers
- Configure SSL certificate (auto or custom)
- Enable HTTPS redirect

## 🚀 Performance Optimization

### 1. Caching Strategy
```apache
# In .htaccess
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/* "access plus 1 year"
</IfModule>
```

### 2. Compression
```apache
# GZIP compression enabled automatically
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

### 3. Image Optimization
- Use WebP format when possible
- Compress images before upload
- Implement lazy loading (already included)

## 🔒 Security Configuration

### 1. Security Headers
```apache
# In .htaccess
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options SAMEORIGIN
Header always set X-XSS-Protection "1; mode=block"
```

### 2. SSL/TLS
- Enable SSL certificate in Hostinger panel
- Force HTTPS redirects
- Update all internal links to HTTPS

### 3. File Permissions
```bash
# Recommended permissions
Files: 644
Directories: 755
.htaccess: 644
```

## 📊 Monitoring and Maintenance

### 1. Uptime Monitoring
- Use Hostinger's built-in monitoring
- Set up external monitoring (UptimeRobot, Pingdom)
- Configure email alerts

### 2. Performance Monitoring
```javascript
// Google Analytics 4 (optional)
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href
});
```

### 3. Error Tracking
- Monitor server logs in Hostinger panel
- Set up error logging in PHP (if needed)
- Use browser dev tools for client-side issues

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. 404 Errors on Page Refresh
**Problem**: Direct URL access returns 404
**Solution**: 
```apache
# Add to .htaccess
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^/]+)/?$ $1.html [L]
```

#### 2. Images Not Loading
**Problem**: Images return 404 errors
**Solutions**:
- Verify images are in `public/` folder before build
- Check image paths are relative
- Ensure proper file permissions (644)

#### 3. CSS/JS Not Loading
**Problem**: Styles or scripts not applied
**Solutions**:
- Verify `_next/` folder uploaded completely
- Check file permissions
- Clear browser cache
- Verify .htaccess rules

#### 4. Build Fails
**Problem**: `npm run build:hostinger` fails
**Solutions**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build:hostinger
```

#### 5. Slow Loading Times
**Solutions**:
- Enable GZIP compression
- Optimize images
- Use CDN (Cloudflare integration available)
- Minify CSS/JS (automatic in build)

### Performance Checklist

- ✅ GZIP compression enabled
- ✅ Browser caching configured
- ✅ Images optimized
- ✅ CSS/JS minified
- ✅ SSL certificate active
- ✅ CDN configured (optional)

## 📞 Support and Resources

### Hostinger Support
- **Knowledge Base**: https://support.hostinger.com
- **Live Chat**: Available 24/7
- **Email Support**: Available for all plans

### Project Support
- **Documentation**: This file and README.md
- **Issues**: GitHub Issues page
- **Email**: support@ecopyxle.com

### Useful Links
- [Hostinger Control Panel](https://hpanel.hostinger.com)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Hostinger Git Deployment](https://support.hostinger.com/en/articles/6000191)

## 🔄 Updating Your Website

### For Git Deployment
1. Push changes to your repository
2. Hostinger will automatically rebuild and deploy

### For Manual Deployment
1. Run `./deploy.hostinger.sh` locally
2. Upload new `out/` directory contents
3. Clear any caches

### Version Management
```bash
# Tag releases for better tracking
git tag -a v1.0.1 -m "Release version 1.0.1"
git push origin v1.0.1
```

---

## 🎉 Deployment Complete!

Your Ecopyxle AI website should now be live on Hostinger. Visit your domain to verify everything is working correctly.

### Post-Deployment Checklist
- ✅ Website loads correctly
- ✅ All pages accessible
- ✅ Images and assets loading
- ✅ Forms working (if any)
- ✅ SSL certificate active
- ✅ Mobile responsive
- ✅ SEO meta tags present
- ✅ Analytics tracking (if configured)

**Need help?** Contact our support team or check the troubleshooting section above.
