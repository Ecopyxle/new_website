'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  Brain,
  Target,
  Award,
  TrendingUp,
  Play
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="AI Technology Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-purple-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-blue-200 shadow-lg mb-8">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm font-semibold text-gray-800">Leading AI Solutions Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise-Grade AI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Delivered in Days
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive AI-as-a-Service platform. 
              From machine learning to computer vision, we deliver scalable solutions that integrate seamlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                <Play className="w-5 h-5" />
                See AI in Action
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">1M+</div>
                <div className="text-blue-200 text-sm">API Calls/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-200 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">70%</div>
                <div className="text-blue-200 text-sm">Cost Savings</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ecopyxle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make AI accessible, affordable, and effective for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Launch AI Features Today</h3>
              <p className="text-gray-600 leading-relaxed">
                Go from idea to implementation in days—our APIs work with your existing code and require no AI expertise.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scale Without Worry</h3>
              <p className="text-gray-600 leading-relaxed">
                Sleep soundly knowing your AI runs on SOC 2 compliant infrastructure that grows with your business.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Save 70% on AI Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Skip the million-dollar AI team—get enterprise-grade intelligence at startup prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning to computer vision, we provide the AI capabilities your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="AI Solutions"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning</h3>
                  <p className="text-gray-600">Predictive analytics, data classification, and pattern recognition for smarter business decisions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Vision</h3>
                  <p className="text-gray-600">Object detection, facial recognition, and image analysis to automate visual tasks.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Language Processing</h3>
                  <p className="text-gray-600">Sentiment analysis, text summarization, and chatbots for better customer interactions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom AI Models</h3>
                  <p className="text-gray-600">Tailored solutions built specifically for your business requirements and use cases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Transforming Education with AI
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our EGS AI platform revolutionizes educational assessment with automated grading, 
              plagiarism detection, and personalized feedback for students and teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300">
                Explore EGS AI
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients say about working with Ecopyxle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Ecopyxle transformed our AI capabilities. What used to take months now takes days, 
                and the quality is outstanding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Doe</div>
                  <div className="text-gray-600 text-sm">CTO, TechCorp</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The EGS AI platform has revolutionized our grading process. Our teachers save 20+ hours per week."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Miller</div>
                  <div className="text-gray-600 text-sm">Principal, University</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Outstanding support and incredible results. Ecopyxle delivered exactly what we needed, when we needed it."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Johnson</div>
                  <div className="text-gray-600 text-sm">CEO, StartupCo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses already using Ecopyxle to accelerate their AI journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
