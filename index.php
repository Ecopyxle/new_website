<?php
// Ecopyxle Website - PHP Router for Static Files
// This routes all requests to the appropriate static HTML files

// Get the requested path
$request_uri = $_SERVER['REQUEST_URI'];
$request_path = parse_url($request_uri, PHP_URL_PATH);

// Remove query parameters and fragments
$request_path = strtok($request_path, '?');

// Handle root path
if ($request_path === '/' || $request_path === '') {
    $file_path = 'index.html';
} else {
    // Remove leading slash
    $request_path = ltrim($request_path, '/');
    
    // Check if it's a directory (no file extension)
    if (!pathinfo($request_path, PATHINFO_EXTENSION)) {
        // It's a directory, look for index.html
        $file_path = rtrim($request_path, '/') . '/index.html';
    } else {
        // It's a file, use as is
        $file_path = $request_path;
    }
}

// Check if the file exists
if (file_exists($file_path)) {
    // Set appropriate content type based on file extension
    $extension = strtolower(pathinfo($file_path, PATHINFO_EXTENSION));
    
    switch ($extension) {
        case 'html':
            header('Content-Type: text/html; charset=utf-8');
            break;
        case 'css':
            header('Content-Type: text/css');
            break;
        case 'js':
            header('Content-Type: application/javascript');
            break;
        case 'json':
            header('Content-Type: application/json');
            break;
        case 'svg':
            header('Content-Type: image/svg+xml');
            break;
        case 'png':
            header('Content-Type: image/png');
            break;
        case 'jpg':
        case 'jpeg':
            header('Content-Type: image/jpeg');
            break;
        case 'gif':
            header('Content-Type: image/gif');
            break;
        case 'ico':
            header('Content-Type: image/x-icon');
            break;
        case 'woff':
            header('Content-Type: font/woff');
            break;
        case 'woff2':
            header('Content-Type: font/woff2');
            break;
        case 'ttf':
            header('Content-Type: font/ttf');
            break;
        case 'eot':
            header('Content-Type: application/vnd.ms-fontobject');
            break;
        default:
            header('Content-Type: text/plain');
    }
    
    // Set cache headers for static assets
    if (in_array($extension, ['css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'woff', 'woff2', 'ttf', 'eot'])) {
        header('Cache-Control: public, max-age=31536000'); // 1 year
    }
    
    // Output the file
    readfile($file_path);
    exit;
} else {
    // File not found, try 404.html
    if (file_exists('404.html')) {
        header('HTTP/1.0 404 Not Found');
        header('Content-Type: text/html; charset=utf-8');
        readfile('404.html');
    } else {
        // Fallback 404
        header('HTTP/1.0 404 Not Found');
        header('Content-Type: text/html; charset=utf-8');
        echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found | Ecopyxle</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 40px; background: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; text-align: center; }
        h1 { color: #1e293b; font-size: 3rem; margin-bottom: 1rem; }
        p { color: #64748b; font-size: 1.2rem; margin-bottom: 2rem; }
        a { color: #3b82f6; text-decoration: none; font-weight: 500; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <h1>404</h1>
        <p>The page you\'re looking for doesn\'t exist.</p>
        <a href="/">← Back to Ecopyxle</a>
    </div>
</body>
</html>';
    }
    exit;
}
?>
