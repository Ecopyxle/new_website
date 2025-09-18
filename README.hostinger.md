# Ecopyxle Website - Hostinger Deployment Guide

This guide will help you deploy your Next.js website to Hostinger using Git or manual upload.

## 🚀 Quick Deployment

### Method 1: Using the Deployment Script (Recommended)

1. **Run the deployment script:**
   ```bash
   ./deploy.hostinger.sh
   ```

2. **Upload to Hostinger:**
   - Upload all contents of the `out` folder to your Hostinger `public_html` directory
   - Make sure to include the `.htaccess` file

### Method 2: Manual Build and Upload

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build for production:**
   ```bash
   cp next.config.hostinger.js next.config.js
   npm run build
   ```

3. **Upload the `out` folder contents to Hostinger**

## 📁 File Structure for Hostinger

After building, upload these files to your `public_html` directory:

```
public_html/
├── _next/                 # Next.js assets
├── images/               # Static images
├── favicon.ico
├── index.html           # Homepage
├── about.html           # About page
├── features.html        # Features page
├── use-cases.html       # Use cases page
├── contact.html         # Contact page
├── .htaccess           # Server configuration
└── ... (other static files)
```

## 🔧 Configuration Files

### `next.config.hostinger.js`
- Optimized Next.js configuration for static export
- Disabled image optimization for compatibility
- Enabled trailing slashes for better SEO

### `.htaccess`
- Handles clean URLs and routing
- Enables GZIP compression
- Sets proper cache headers
- Adds security headers

## 🌐 Git Deployment on Hostinger

If your Hostinger plan supports Git deployment:

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Connect to your Git repository:**
   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

3. **Set up Git deployment in Hostinger:**
   - Go to Hostinger control panel
   - Navigate to Git section
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `out`

## 🔍 Troubleshooting

### Common Issues:

1. **404 Errors on page refresh:**
   - Ensure `.htaccess` file is uploaded
   - Check that trailing slashes are enabled

2. **Images not loading:**
   - Verify all images are in the `public` folder
   - Check image paths are relative

3. **CSS/JS not loading:**
   - Ensure `_next` folder is uploaded completely
   - Check file permissions on server

4. **Build fails:**
   - Ensure Node.js 18+ is available
   - Run `npm ci` to clean install dependencies

### Performance Optimization:

1. **Enable GZIP compression** (included in .htaccess)
2. **Set proper cache headers** (included in .htaccess)
3. **Optimize images** before uploading
4. **Use CDN** for better global performance

## 📞 Support

For Hostinger-specific issues:
- Check Hostinger documentation
- Contact Hostinger support
- Verify your hosting plan supports static websites

For website issues:
- Check browser console for errors
- Verify all files uploaded correctly
- Test on different devices/browsers

## 🔄 Updates

To update your website:

1. Make changes to your code
2. Run `./deploy.hostinger.sh`
3. Upload new `out` folder contents to Hostinger
4. Clear browser cache to see changes

---

**Note:** This website is built as a static export, which means it will work on any web hosting service that supports HTML/CSS/JS files, including Hostinger's shared hosting plans.
