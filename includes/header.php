<?php
/**
 * Header template for Ecopyxle website
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#2563eb">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Ecopyxle">
    
    <!-- SEO Meta Tags -->
    <title><?php echo isset($page_title) ? $page_title : 'Ecopyxle - You Dream It, We AI It | Leading AI Solutions Platform'; ?></title>
    <meta name="description" content="<?php echo isset($page_description) ? $page_description : 'Transform your business with Ecopyxle\'s comprehensive AI platform. From machine learning to computer vision, natural language processing to predictive analytics - we provide AI solutions for every industry and use case.'; ?>">
    <meta name="keywords" content="Ecopyxle, AI as a Service, Machine Learning, Computer Vision, Natural Language Processing, Predictive Analytics, AI Solutions, Artificial Intelligence, Business Intelligence, You Dream It We AI It">
    <meta name="author" content="Ecopyxle Team">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo isset($page_title) ? $page_title : 'Ecopyxle - You Dream It, We AI It'; ?>">
    <meta property="og:description" content="Transform your business with Ecopyxle's comprehensive AI platform. From machine learning to computer vision, natural language processing to predictive analytics.">
    <meta property="og:url" content="https://ecopyxle.com<?php echo $_SERVER['REQUEST_URI']; ?>">
    <meta property="og:site_name" content="Ecopyxle">
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    
    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo isset($page_title) ? $page_title : 'Ecopyxle - You Dream It, We AI It'; ?>">
    <meta name="twitter:description" content="Transform your business with Ecopyxle's comprehensive AI platform">
    
    <!-- Favicon and Icons -->
    <link rel="icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png">
    <link rel="manifest" href="/manifest.json">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        primary: {
                            50: '#eff6ff',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8',
                        }
                    }
                }
            }
        }
    </script>
    
    <!-- Custom Styles -->
    <style>
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.18);
        }
        .btn-primary {
            @apply bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl;
        }
        
        /* Advanced Animations */
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-up {
            animation: slideUp 1s ease-out forwards;
        }
        .animate-scale-in {
            animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
        }
        
        /* Background Effects */
        .parallax-bg {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        .gradient-mesh {
            background: 
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
        }
        
        /* Floating Animations */
        .float-slow {
            animation: floatSlow 8s ease-in-out infinite;
        }
        .pulse {
            animation: pulse 2s ease-in-out infinite;
        }
        .flow {
            animation: flow 4s ease-in-out infinite;
        }
        .rotate-slow {
            animation: rotateSlow 10s linear infinite;
        }
        .scale-pulse {
            animation: scalePulse 3s ease-in-out infinite;
        }
        .drift {
            animation: drift 6s ease-in-out infinite;
        }
        .bounce-slow {
            animation: bounceSlow 4s ease-in-out infinite;
        }
        .glow {
            animation: glow 2s ease-in-out infinite;
        }
        
        /* Keyframes */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
        }
        
        @keyframes flow {
            0% { transform: translateX(-10px); opacity: 0.6; }
            50% { transform: translateX(10px); opacity: 1; }
            100% { transform: translateX(-10px); opacity: 0.6; }
        }
        
        @keyframes rotateSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes scalePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        @keyframes drift {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, -5px) rotate(1deg); }
            50% { transform: translate(-5px, 10px) rotate(-1deg); }
            75% { transform: translate(5px, 5px) rotate(0.5deg); }
        }
        
        @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
            0%, 100% { filter: brightness(1) drop-shadow(0 0 5px currentColor); }
            50% { filter: brightness(1.2) drop-shadow(0 0 15px currentColor); }
        }
        
        @keyframes pulseGlow {
            0%, 100% { 
                box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
                transform: scale(1);
            }
            50% { 
                box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
                transform: scale(1.02);
            }
        }
        
        /* Hover Effects */
        .hover-lift {
            transition: all 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .hover-glow:hover {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
        }
        
        /* Text Effects */
        .text-gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .text-shimmer {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        
        /* Scroll Animations */
        .scroll-reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease;
        }
        .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="font-sans bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full">
                        <span class="text-white font-bold text-lg">e</span>
                    </div>
                    <span class="text-xl font-semibold text-gray-900">Ecopyxle</span>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/" class="<?php echo ($_SERVER['REQUEST_URI'] == '/' || $_SERVER['REQUEST_URI'] == '/index.php') ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'; ?> transition-colors duration-200 font-medium text-sm px-3 py-2 rounded-lg">Home</a>
                    <a href="/features.php" class="<?php echo (strpos($_SERVER['REQUEST_URI'], 'features') !== false) ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'; ?> transition-colors duration-200 font-medium text-sm px-3 py-2 rounded-lg">Features</a>
                    <a href="/use-cases.php" class="<?php echo (strpos($_SERVER['REQUEST_URI'], 'use-cases') !== false) ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'; ?> transition-colors duration-200 font-medium text-sm px-3 py-2 rounded-lg">Use Cases</a>
                    <a href="/company.php" class="<?php echo (strpos($_SERVER['REQUEST_URI'], 'company') !== false) ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'; ?> transition-colors duration-200 font-medium text-sm px-3 py-2 rounded-lg">About</a>
                    <a href="/contact.php" class="<?php echo (strpos($_SERVER['REQUEST_URI'], 'contact') !== false) ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'; ?> transition-colors duration-200 font-medium text-sm px-3 py-2 rounded-lg">Contact</a>
                </div>
                
                <!-- Mobile Menu Button -->
                <button class="md:hidden p-2" onclick="toggleMobileMenu()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="md:hidden hidden py-4 border-t border-gray-200">
                <div class="flex flex-col space-y-2">
                    <a href="/" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg">Home</a>
                    <a href="/features.php" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg">Features</a>
                    <a href="/use-cases.php" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg">Use Cases</a>
                    <a href="/company.php" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg">About</a>
                    <a href="/contact.php" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- AI Doodles Background -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <?php include 'includes/advanced-animations.php'; ?>
    </div>

    <main class="pt-16 relative z-10">
