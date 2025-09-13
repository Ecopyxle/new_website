<?php
// Simple PHP redirect to static HTML files
// This makes the Next.js static export compatible with Hostinger's PHP deployment

// Check if the request is for a specific file
$request_uri = $_SERVER['REQUEST_URI'];
$request_path = parse_url($request_uri, PHP_URL_PATH);

// Remove leading slash and handle root
if ($request_path === '/' || $request_path === '') {
    $request_path = 'index.html';
} else {
    // Remove leading slash
    $request_path = ltrim($request_path, '/');
    
    // If it's a directory, add index.html
    if (is_dir($request_path)) {
        $request_path = rtrim($request_path, '/') . '/index.html';
    }
    
    // If no extension, assume it's a directory and add index.html
    if (!pathinfo($request_path, PATHINFO_EXTENSION)) {
        $request_path = rtrim($request_path, '/') . '/index.html';
    }
}

// Check if the file exists
if (file_exists($request_path)) {
    // Set appropriate content type
    $extension = pathinfo($request_path, PATHINFO_EXTENSION);
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
        case 'woff2':
            header('Content-Type: font/woff2');
            break;
        default:
            header('Content-Type: text/plain');
    }
    
    // Output the file
    readfile($request_path);
} else {
    // File not found, try 404.html
    if (file_exists('404.html')) {
        header('HTTP/1.0 404 Not Found');
        readfile('404.html');
    } else {
        // Fallback 404
        header('HTTP/1.0 404 Not Found');
        echo '<!DOCTYPE html><html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1><p>The requested page could not be found.</p></body></html>';
    }
}
?>
