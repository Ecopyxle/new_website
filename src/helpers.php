<?php

/**
 * Ecopyxle Website Helper Functions
 * 
 * This file contains utility functions for the Ecopyxle website
 * optimized for Hostinger cloud hosting environment.
 */

if (!function_exists('get_site_url')) {
    /**
     * Get the site URL based on environment
     */
    function get_site_url() {
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https://' : 'http://';
        $host = $_SERVER['HTTP_HOST'] ?? 'localhost';
        return $protocol . $host;
    }
}

if (!function_exists('get_asset_url')) {
    /**
     * Get asset URL with proper base path
     */
    function get_asset_url($path) {
        $baseUrl = get_site_url();
        return $baseUrl . '/' . ltrim($path, '/');
    }
}

if (!function_exists('is_production')) {
    /**
     * Check if we're in production environment
     */
    function is_production() {
        return ($_SERVER['SERVER_NAME'] ?? '') !== 'localhost' && 
               ($_ENV['NODE_ENV'] ?? '') === 'production';
    }
}

if (!function_exists('get_cache_buster')) {
    /**
     * Generate cache buster for static assets
     */
    function get_cache_buster() {
        return is_production() ? '?v=' . time() : '';
    }
}

if (!function_exists('sanitize_input')) {
    /**
     * Sanitize user input
     */
    function sanitize_input($input) {
        return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
    }
}

if (!function_exists('log_error')) {
    /**
     * Log errors for debugging
     */
    function log_error($message, $context = []) {
        if (is_production()) {
            error_log('[Ecopyxle] ' . $message . ' ' . json_encode($context));
        }
    }
}

if (!function_exists('get_meta_description')) {
    /**
     * Get meta description for SEO
     */
    function get_meta_description($page = 'home') {
        $descriptions = [
            'home' => 'Transform your business with Ecopyxle\'s comprehensive AI platform. From machine learning to computer vision, natural language processing to predictive analytics.',
            'features' => 'Discover Ecopyxle\'s powerful AI features including machine learning APIs, computer vision, NLP, and custom AI model development.',
            'use-cases' => 'Explore real-world AI use cases across industries including healthcare, finance, retail, manufacturing, and education.',
            'company' => 'Learn about Ecopyxle\'s mission to democratize AI technology and make enterprise-grade AI solutions accessible to all businesses.',
            'contact' => 'Get in touch with Ecopyxle\'s AI experts. Contact us for custom AI solutions, partnerships, or technical support.'
        ];
        
        return $descriptions[$page] ?? $descriptions['home'];
    }
}

if (!function_exists('render_json_ld')) {
    /**
     * Render JSON-LD structured data for SEO
     */
    function render_json_ld($type = 'Organization') {
        $baseUrl = get_site_url();
        
        $jsonLd = [
            "@context" => "https://schema.org",
            "@type" => $type,
            "name" => "Ecopyxle",
            "url" => $baseUrl,
            "logo" => $baseUrl . "/images/logo.png",
            "description" => "AI as a Service platform providing enterprise-grade AI solutions",
            "sameAs" => [
                "https://twitter.com/ecopyxle",
                "https://linkedin.com/company/ecopyxle",
                "https://github.com/ecopyxle"
            ],
            "contactPoint" => [
                "@type" => "ContactPoint",
                "telephone" => "+1-XXX-XXX-XXXX",
                "contactType" => "Customer Service",
                "email" => "info@ecopyxle.com"
            ]
        ];
        
        return '<script type="application/ld+json">' . json_encode($jsonLd, JSON_PRETTY_PRINT) . '</script>';
    }
}

// Initialize error reporting for production
if (is_production()) {
    ini_set('display_errors', 0);
    ini_set('log_errors', 1);
    ini_set('error_log', __DIR__ . '/../logs/php_errors.log');
}

// Set default timezone
date_default_timezone_set('UTC');

// Security headers function
if (!function_exists('set_security_headers')) {
    function set_security_headers() {
        if (!headers_sent()) {
            header('X-Content-Type-Options: nosniff');
            header('X-Frame-Options: SAMEORIGIN');
            header('X-XSS-Protection: 1; mode=block');
            header('Referrer-Policy: strict-origin-when-cross-origin');
            
            if (is_production()) {
                header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
            }
        }
    }
}

// Auto-set security headers
set_security_headers();
