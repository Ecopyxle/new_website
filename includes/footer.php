<?php
/**
 * Footer template for Ecopyxle website
 */
?>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-6 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div class="lg:col-span-1">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full">
                            <span class="text-white font-bold text-lg">e</span>
                        </div>
                        <span class="text-2xl md:text-3xl font-bold">Ecopyxle</span>
                    </div>
                    <p class="text-gray-400 mb-6 leading-relaxed">
                        Transforming businesses with cutting-edge AI solutions. Your trusted partner in the AI revolution.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Products -->
                <div>
                    <h3 class="text-xl font-semibold mb-4">Products</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">EGS AI - Education Grading System</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Advanced Classroom Engagement ACE AI</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">AI Database Agents</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">AI Custom LLM Building</a></li>
                    </ul>
                </div>

                <!-- Company -->
                <div>
                    <h3 class="text-xl font-semibold mb-4">Company</h3>
                    <ul class="space-y-3">
                        <li><a href="/company.php" class="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                        <li><a href="/careers.php" class="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                        <li><a href="/contact.php" class="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                        <li><a href="/portal.php" class="text-gray-400 hover:text-white transition-colors duration-300">Customer Portal</a></li>
                    </ul>
                </div>

                <!-- Legal -->
                <div>
                    <h3 class="text-xl font-semibold mb-4">Legal</h3>
                    <ul class="space-y-3">
                        <li><a href="/legal/privacy.php" class="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                        <li><a href="/legal/terms.php" class="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                        <li><a href="/security.php" class="text-gray-400 hover:text-white transition-colors duration-300">Security</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Compliance</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-800">
            <div class="max-w-7xl mx-auto px-6 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div class="text-gray-400 text-sm">
                        © <?php echo date('Y'); ?> Ecopyxle. All rights reserved.
                    </div>
                    <div class="flex flex-wrap gap-6 text-sm">
                        <a href="/legal/privacy.php" class="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                        <a href="/legal/terms.php" class="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script>
        // Mobile menu toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Fade in animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe all elements with fade-in class
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        });
    </script>
</body>
</html>
