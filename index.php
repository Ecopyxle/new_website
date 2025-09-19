<?php
/**
 * Ecopyxle Website - Hostinger Deployment Handler
 * 
 * This file ensures Hostinger recognizes this as a valid project
 * and redirects to the actual Next.js static build files.
 */

// Check if static build exists
if (file_exists(__DIR__ . '/out/index.html')) {
    // Redirect to the static build
    header('Location: /out/index.html');
    exit;
}

// If no static build, show deployment instructions
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ecopyxle - Deployment Required</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            line-height: 1.6;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
            border: 1px solid rgba(255, 255, 255, 0.18);
        }
        h1 { color: #fff; text-align: center; margin-bottom: 30px; }
        .status { background: #ff6b6b; padding: 15px; border-radius: 10px; margin: 20px 0; }
        .instructions { background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0; }
        code { background: rgba(0, 0, 0, 0.3); padding: 2px 6px; border-radius: 4px; }
        .step { margin: 15px 0; padding-left: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Ecopyxle Website</h1>
        
        <div class="status">
            <strong>⚠️ Deployment Required</strong><br>
            The static build files are not found. Please complete the deployment process.
        </div>
        
        <div class="instructions">
            <h3>📋 Deployment Instructions:</h3>
            
            <div class="step">
                <strong>1. Build the project locally:</strong><br>
                <code>npm run build:hostinger</code>
            </div>
            
            <div class="step">
                <strong>2. Upload the 'out' folder contents to your Hostinger public_html directory</strong><br>
                Include all files: HTML, CSS, JS, images, and .htaccess
            </div>
            
            <div class="step">
                <strong>3. Alternative: Use the deployment script:</strong><br>
                <code>./deploy.hostinger.sh</code>
            </div>
        </div>
        
        <div class="instructions">
            <h3>✅ What's Ready:</h3>
            <ul>
                <li>✅ Composer files created (composer.json, composer.lock)</li>
                <li>✅ PHP compatibility layer added</li>
                <li>✅ Static export configuration ready</li>
                <li>✅ Deployment scripts prepared</li>
            </ul>
        </div>
        
        <p style="text-align: center; margin-top: 30px;">
            <strong>Need help?</strong> Check the README.hostinger.md file for detailed instructions.
        </p>
    </div>
</body>
</html>
