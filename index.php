<?php
/**
 * Ecopyxle Homepage - PHP Version
 * Main landing page with AI doodles background
 */

$page_title = "Ecopyxle - You Dream It, We AI It | Leading AI Solutions Platform";
$page_description = "Transform your business with Ecopyxle's comprehensive AI platform. From machine learning to computer vision, natural language processing to predictive analytics - we provide AI solutions for every industry and use case.";

include 'includes/header.php';
?>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
    <div class="absolute inset-0 gradient-mesh"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-float"></div>
        <div class="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-float" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-cyan-400/10 rounded-full animate-float" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-400/10 rounded-full animate-float" style="animation-delay: 3s;"></div>
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <!-- Hero Content -->
        <div class="animate-fade-in">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
                <span class="text-shimmer">Enterprise-Grade AI Solutions</span><br/>
                <span class="animate-slide-up" style="animation-delay: 0.3s;">Delivered in Days</span>
            </h1>
            <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4 leading-tight animate-slide-up" style="animation-delay: 0.6s;">
                Transform your business with our comprehensive AI-as-a-Service platform
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0 animate-slide-up" style="animation-delay: 0.9s;">
                From machine learning APIs to custom AI models, we deliver scalable, secure AI capabilities that integrate seamlessly into your existing systems.
            </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex justify-center items-center mb-12 sm:mb-16 animate-scale-in" style="animation-delay: 1.2s;">
            <button class="btn-primary animate-pulse-glow hover-lift hover-glow flex items-center gap-2 w-full sm:w-auto max-w-xs sm:max-w-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 sm:w-5 sm:h-5">
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                See AI in Action
            </button>
        </div>

        <!-- Feature Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 hover-lift scroll-reveal">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl mb-4 animate-pulse">⚡</div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Launch AI Features Today</h3>
                <p class="text-gray-600 text-sm leading-relaxed">Go from idea to implementation in days—our APIs work with your existing code</p>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 hover-lift scroll-reveal" style="animation-delay: 0.2s;">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl mb-4 animate-pulse" style="animation-delay: 0.5s;">🔒</div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Scale Without Worry</h3>
                <p class="text-gray-600 text-sm leading-relaxed">Sleep soundly knowing your AI runs on SOC 2 compliant infrastructure that grows with you</p>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 hover-lift scroll-reveal" style="animation-delay: 0.4s;">
                <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-4 animate-pulse" style="animation-delay: 1s;">💰</div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">Save 70% on AI Development</h3>
                <p class="text-gray-600 text-sm leading-relaxed">Skip the million-dollar AI team—get enterprise-grade intelligence at startup prices</p>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0 mt-12 animate-fade-in">
            <div class="text-center">
                <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">1M+</div>
                <div class="text-xs sm:text-sm text-gray-600 font-medium leading-tight">API Calls/Month</div>
            </div>
            <div class="text-center">
                <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">50+</div>
                <div class="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Enterprise Clients</div>
            </div>
            <div class="text-center">
                <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-1 sm:mb-2">99.9%</div>
                <div class="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Uptime SLA</div>
            </div>
            <div class="text-center">
                <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">70%</div>
                <div class="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Cost Savings</div>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>