'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Database,
  Cpu,
  Image,
  FileText,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Play,
  Code,
  Lock,
  Award,
  Zap as Lightning,
  Clock,
  Smartphone,
  Cloud,
  Settings,
  Workflow,
  Bot,
  Send,
  Mic,
  Camera,
  FileText as Document
} from 'lucide-react'

const navigation = [
  { name: 'Services', href: '#services' },
  { name: '🔥 Trends', href: '#trends' },
  { name: 'Industries', href: '#industries' },
  { name: 'Demo', href: '#demo' },
  { name: 'Pricing', href: '#pricing' },
]

const aiServices = [
  {
    icon: Brain,
    title: 'Generative AI & LLMs',
    description: 'ChatGPT-style AI assistants, content generation, and large language models tailored for Indian businesses.',
    features: ['Custom ChatGPT Clones', 'Hindi-English AI', 'Document Generation', 'Code Generation'],
    trending: true,
    useCases: ['Customer Support Bots', 'Content Creation', 'Legal Document Review', 'Educational Tutors']
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Advanced visual AI for quality control, security, and automation in Indian manufacturing and retail.',
    features: ['Quality Inspection', 'Facial Recognition', 'OCR for Regional Languages', 'Defect Detection'],
    useCases: ['Manufacturing QC', 'Retail Analytics', 'Security Systems', 'Vehicle Recognition']
  },
  {
    icon: MessageSquare,
    title: 'Multimodal AI',
    description: 'Next-gen AI that understands text, images, audio, and video together for comprehensive analysis.',
    features: ['Voice + Vision AI', 'Document Analysis', 'Video Understanding', 'Audio Processing'],
    trending: true,
    useCases: ['KYC Verification', 'Media Analysis', 'Voice Commerce', 'Educational Content']
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'AI-powered forecasting for Indian markets, monsoon patterns, and business predictions.',
    features: ['Market Forecasting', 'Demand Planning', 'Risk Assessment', 'Price Optimization'],
    useCases: ['Crop Yield Prediction', 'Stock Market Analysis', 'Inventory Management', 'Insurance Claims']
  },
  {
    icon: Database,
    title: 'Knowledge Mining',
    description: 'Extract insights from unstructured data, documents, and regional language content.',
    features: ['Document AI', 'Regional Language NLP', 'Knowledge Graphs', 'Smart Search'],
    useCases: ['Legal Research', 'Medical Records', 'Compliance Monitoring', 'Academic Research']
  },
  {
    icon: Cpu,
    title: 'Intelligent Automation',
    description: 'End-to-end process automation with AI decision-making for Indian enterprises.',
    features: ['RPA + AI', 'Smart Workflows', 'Exception Handling', 'Approval Automation'],
    useCases: ['Invoice Processing', 'Loan Approvals', 'HR Onboarding', 'Compliance Checks']
  }
]

const industries = [
  { 
    name: 'Healthcare & Pharma', 
    description: 'AI-powered diagnostics, drug discovery, telemedicine, and patient care optimization',
    icon: '🏥',
    examples: ['AIIMS Delhi using AI for radiology', 'Apollo Hospitals automated diagnosis', 'Pharma R&D acceleration'],
    roi: '40% faster diagnosis, 60% cost reduction'
  },
  { 
    name: 'Banking & Finance', 
    description: 'Fraud detection, algorithmic trading, loan approvals, and risk management',
    icon: '🏦',
    examples: ['HDFC Bank chatbots', 'ICICI fraud detection', 'Zerodha trading algorithms'],
    roi: '₹50 crore saved annually in fraud prevention'
  },
  { 
    name: 'E-commerce & Retail', 
    description: 'Recommendation engines, inventory optimization, price intelligence, customer analytics',
    icon: '🛒',
    examples: ['Flipkart recommendation AI', 'Amazon India logistics', 'Reliance Retail analytics'],
    roi: '25% increase in sales, 30% inventory reduction'
  },
  { 
    name: 'Manufacturing & Auto', 
    description: 'Quality control, predictive maintenance, supply chain optimization, smart factories',
    icon: '🏭',
    examples: ['Tata Motors AI QC', 'Bajaj Auto predictive maintenance', 'Maruti Suzuki automation'],
    roi: '45% reduction in defects, 35% maintenance savings'
  },
  { 
    name: 'Agriculture & Food', 
    description: 'Crop monitoring, yield prediction, precision farming, supply chain tracking',
    icon: '🌾',
    examples: ['ITC crop advisory', 'Mahindra precision farming', 'FPO yield optimization'],
    roi: '30% yield increase, 25% water savings'
  },
  { 
    name: 'EdTech & Learning', 
    description: 'Personalized learning, content generation, student analytics, skill assessment',
    icon: '📚',
    examples: ['BYJU\'S adaptive learning', 'Unacademy AI tutors', 'Vedantu personalization'],
    roi: '50% better learning outcomes, 40% time savings'
  },
  { 
    name: 'Real Estate & PropTech', 
    description: 'Property valuation, market analysis, investment insights, smart buildings',
    icon: '🏢',
    examples: ['Housing.com price prediction', '99acres market analysis', 'PropTiger insights'],
    roi: '20% better investment decisions, 15% cost optimization'
  },
  { 
    name: 'Media & Entertainment', 
    description: 'Content recommendation, audience analytics, automated editing, regional content',
    icon: '🎬',
    examples: ['Netflix India recommendations', 'Hotstar content optimization', 'YouTube regional AI'],
    roi: '35% viewer engagement increase, 50% content costs reduction'
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹8,499',
    period: '/month',
    originalPrice: '₹12,999',
    description: 'Perfect for small businesses exploring AI',
    features: [
      '10,000 AI API calls per month',
      'Basic NLP & Computer Vision',
      'Email support (24/7)',
      'Dashboard access',
      'Basic analytics & reporting',
      'API documentation access',
      '5 GB cloud storage'
    ],
    savings: '35% OFF'
  },
  {
    name: 'Professional',
    price: '₹24,999',
    period: '/month',
    originalPrice: '₹39,999',
    description: 'For growing businesses with regular AI needs',
    features: [
      '100,000 AI API calls per month',
      'All AI services included',
      'Priority support (Phone + Email)',
      'Custom model training (5 models)',
      'Advanced analytics & insights',
      'Full API documentation',
      '50 GB cloud storage',
      'White-label options',
      'Dedicated account manager'
    ],
    popular: true,
    savings: '37% OFF'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited API calls',
      'Custom AI development',
      'Dedicated support team',
      'On-premise deployment',
      'SLA guarantees (99.9% uptime)',
      'White-label solutions',
      'Unlimited cloud storage',
      'Custom integrations',
      'Compliance support (ISO, SOC2)',
      'Advanced security features'
    ]
  }
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'CTO, TechCorp India',
    company: 'Mumbai',
    content: 'AIaaS helped us deploy ChatGPT-style AI for customer support in Hindi and English. Our CSAT scores jumped from 3.2 to 4.8 stars, and we reduced support costs by ₹1.2 crores annually.',
    rating: 5,
    avatar: '👩‍💼',
    metric: '₹1.2 Cr saved annually',
    technology: 'Generative AI + NLP'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Head of Innovation, FinServ Ltd',
    company: 'Bangalore',
    content: 'Their multimodal AI for KYC verification processes both documents and facial recognition simultaneously. We reduced onboarding time from 2 days to 15 minutes while maintaining 99.7% accuracy.',
    rating: 5,
    avatar: '👨‍💻',
    metric: '15 min onboarding',
    technology: 'Multimodal AI + Computer Vision'
  },
  {
    name: 'Ananya Gupta',
    role: 'VP Operations, RetailMax',
    company: 'Delhi',
    content: 'The AI-powered demand forecasting considers monsoon patterns, festivals, and local events. Our inventory accuracy improved to 96%, and we reduced stockouts during Diwali by 85%.',
    rating: 5,
    avatar: '👩‍🚀',
    metric: '96% inventory accuracy',
    technology: 'Predictive Analytics + Weather AI'
  },
  {
    name: 'Suresh Patel',
    role: 'Chief Digital Officer, AgriTech Solutions',
    company: 'Pune',
    content: 'Their crop monitoring AI using satellite imagery and IoT sensors helped our farmers increase yields by 35%. The regional language support in Marathi made adoption seamless.',
    rating: 5,
    avatar: '👨‍🌾',
    metric: '35% yield increase',
    technology: 'Computer Vision + IoT'
  },
  {
    name: 'Kavya Nair',
    role: 'Head of Product, EdTech Unicorn',
    company: 'Hyderabad',
    content: 'AIaaS built personalized learning paths for our 2M+ students. The AI tutors work in 8 Indian languages, improving learning outcomes by 60% and reducing dropout rates.',
    rating: 5,
    avatar: '👩‍🎓',
    metric: '60% better outcomes',
    technology: 'Personalized AI + Language Models'
  },
  {
    name: 'Amit Agarwal',
    role: 'CTO, HealthTech Startup',
    company: 'Chennai',
    content: 'Their medical imaging AI detected early-stage diabetic retinopathy with 94% accuracy. We\'ve screened over 50,000 patients and prevented vision loss in 3,000+ cases.',
    rating: 5,
    avatar: '👨‍⚕️',
    metric: '3,000+ cases prevented',
    technology: 'Medical AI + Deep Learning'
  }
]

const demoFeatures = [
  {
    title: 'Text Analysis Demo',
    description: 'Try our sentiment analysis on your text',
    icon: MessageSquare,
    demoType: 'text'
  },
  {
    title: 'Image Recognition',
    description: 'Upload an image and see AI classification',
    icon: Eye,
    demoType: 'image'
  },
  {
    title: 'Prediction Engine',
    description: 'Enter data points for ML predictions',
    icon: TrendingUp,
    demoType: 'prediction'
  }
]

const advancedFeatures = [
  {
    icon: Lightning,
    title: 'Real-time Processing',
    description: 'Process millions of requests with sub-50ms latency'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'SOC2, ISO 27001 compliant with end-to-end encryption'
  },
  {
    icon: Cloud,
    title: 'Multi-cloud Deployment',
    description: 'Deploy on AWS, Azure, GCP, or on-premises'
  },
  {
    icon: Workflow,
    title: 'No-Code Integration',
    description: 'Visual workflow builder for non-technical users'
  },
  {
    icon: Clock,
    title: '99.9% Uptime SLA',
    description: 'Guaranteed availability with automatic failover'
  },
  {
    icon: Settings,
    title: 'Auto-scaling',
    description: 'Automatically scale based on demand and usage patterns'
  }
]

const integrations = [
  'Salesforce', 'Microsoft Teams', 'Slack', 'WhatsApp Business', 
  'SAP', 'Oracle', 'MongoDB', 'PostgreSQL', 'Shopify', 'WooCommerce',
  'Zapier', 'Power BI', 'Tableau', 'Google Analytics', 'HubSpot', 'Zoho'
]

const hotTrends = [
  {
    icon: '🤖',
    title: 'ChatGPT for Business',
    description: 'Custom AI assistants trained on your data, supporting Hindi and regional languages',
    tag: 'Most Requested',
    gradient: 'from-green-400 to-blue-500'
  },
  {
    icon: '👁️',
    title: 'Multimodal AI',
    description: 'AI that understands text, images, audio, and video simultaneously',
    tag: 'Next-Gen',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: '🧠',
    title: 'Fine-tuned LLMs',
    description: 'Industry-specific large language models customized for Indian businesses',
    tag: 'Enterprise Ready',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    icon: '⚡',
    title: 'Real-time AI APIs',
    description: 'Sub-50ms response times for live applications and user interactions',
    tag: 'Ultra Fast',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '🌐',
    title: 'Regional Language AI',
    description: 'AI models supporting 22+ Indian languages including voice and text',
    tag: 'India First',
    gradient: 'from-teal-400 to-cyan-500'
  },
  {
    icon: '🔐',
    title: 'Private AI Cloud',
    description: 'Secure, on-premises AI deployment for sensitive data and compliance',
    tag: 'Enterprise Security',
    gradient: 'from-indigo-400 to-purple-500'
  }
]

const aiStats = [
  { label: 'AI Models Deployed', value: '2,500+', change: '+45% this month' },
  { label: 'API Calls Processed', value: '50M+', change: '+120% QoQ' },
  { label: 'Languages Supported', value: '25+', change: 'Including 22 Indian languages' },
  { label: 'Enterprise Clients', value: '500+', change: 'Fortune 500 & Unicorns' },
  { label: 'Average ROI', value: '340%', change: 'Within 6 months' },
  { label: 'Uptime Guarantee', value: '99.9%', change: 'SLA backed' }
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m your AI assistant. Ask me about our services, pricing, or how AI can transform your business!' },
  ])
  const [inputMessage, setInputMessage] = useState('')

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Brain className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">AIaaS</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary">Get Started</button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-primary-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 aurora-bg">
        {/* Stellar Particle System */}
        <div className="stellar-particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="stellar-particle animate-stellar-float"
              style={{
                left: `${(i * 7) % 100}%`,
                animationDelay: `${(i * 1.5) % 20}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Floating Orbs */}
        <div className="floating-orb animate-orb-float"></div>
        <div className="floating-orb animate-orb-float"></div>
        <div className="floating-orb animate-orb-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 depth-layer">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 px-4 py-2 rounded-full text-sm font-medium text-green-800 mb-4">
                <span className="animate-pulse mr-2">🔥</span>
                Now with ChatGPT-style AI for Indian businesses
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              India's Most Advanced
              <span className="block bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 bg-clip-text text-transparent">
                AI as a Service Platform
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              Deploy <strong>ChatGPT-style AI</strong>, <strong>Multimodal AI</strong>, and <strong>Custom LLMs</strong> in Hindi and 25+ languages. 
              Join 500+ Indian enterprises saving ₹2+ crores annually with our enterprise-grade AI platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button className="btn-primary text-lg py-4 px-8 ultra-glow animate-ultra-glow">
                Start Building with AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary text-lg py-4 px-8">
                View Live Demos
              </button>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">10M+</div>
                <div className="text-sm text-gray-600">API Calls/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform covers the entire spectrum of AI capabilities, ensuring you have the right tools for any challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ethereal-card group relative animate-breathe ultra-glow h-full"
              >
                {service.trending && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 transform -translate-y-1 translate-x-1">
                    🔥 TRENDING
                  </div>
                )}
                
                <div className="flex-grow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300 shadow-sm">
                      <service.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {service.useCases && (
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Popular Use Cases:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.useCases.map((useCase) => (
                        <div key={useCase} className="bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary-50 hover:to-primary-100 px-3 py-2 rounded-lg text-xs text-gray-700 hover:text-primary-700 transition-all duration-200 shadow-sm hover:shadow-md">
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Across All Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are designed to meet the unique challenges of every industry sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ethereal-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-1 animate-breathe ultra-glow relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/50 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{industry.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                      <div className="text-sm text-green-600 font-semibold">{industry.roi}</div>
                    </div>
                  </div>
                
                <p className="text-gray-600 mb-4">{industry.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Success Stories:</h4>
                    <ul className="space-y-1">
                      {industry.examples.map((example, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-2 flex-shrink-0"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center group">
                      View Case Studies
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. Scale up as your AI requirements grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`ethereal-card ${
                  plan.popular 
                    ? 'pricing-card-popular ultra-glow animate-ultra-glow' 
                    : 'pricing-card-standard glow-effect'
                } animate-breathe`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                      {plan.savings && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                          {plan.savings}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot AI Trends Section */}
      <section id="trends" className="py-20 cosmic-bg">
        {/* Cosmic Stellar Particles */}
        <div className="stellar-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="stellar-particle animate-stellar-float"
              style={{
                left: `${(i * 5.2) % 100}%`,
                animationDelay: `${(i * 1.25) % 25}s`,
                background: i % 3 === 0 ? 'rgba(139, 92, 246, 0.9)' : 
                           i % 3 === 1 ? 'rgba(59, 130, 246, 0.9)' : 
                           'rgba(6, 182, 212, 0.9)',
                boxShadow: i % 3 === 0 ? '0 0 8px rgba(139, 92, 246, 0.9)' : 
                          i % 3 === 1 ? '0 0 8px rgba(59, 130, 246, 0.9)' : 
                          '0 0 8px rgba(6, 182, 212, 0.9)',
              }}
            ></div>
          ))}
        </div>
        
        {/* Floating Cosmic Orbs */}
        <div className="floating-orb animate-orb-float" style={{background: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.8), rgba(139, 92, 246, 0.2))'}}></div>
        <div className="floating-orb animate-orb-float" style={{background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.2))'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 depth-layer">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🔥 Hottest AI Technologies in 2024
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Stay ahead with the latest AI innovations that are transforming businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotTrends.map((trend, index) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 group ultra-glow animate-ultra-glow"
              >
                <div className="absolute top-3 right-3">
                  <span className={`bg-gradient-to-r ${trend.gradient} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {trend.tag}
                  </span>
                </div>
                
                <div className="text-4xl mb-4">{trend.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{trend.title}</h3>
                <p className="text-blue-200 text-sm">{trend.description}</p>
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <button className="text-white hover:text-blue-200 text-sm font-medium flex items-center group">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Statistics Dashboard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Live AI Platform Statistics
            </h2>
            <p className="text-lg text-gray-600">
              Real-time metrics showing the scale and impact of our AI platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 hover:shadow-lg transition-all duration-300 ethereal-card animate-breathe ultra-glow relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 aurora-bg relative">
        {/* Demo Stellar Particles */}
        <div className="stellar-particles">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="stellar-particle animate-stellar-float"
              style={{
                left: `${(i * 12.5) % 100}%`,
                animationDelay: `${(i * 1.875) % 15}s`,
                background: 'rgba(59, 130, 246, 0.7)',
                boxShadow: '0 0 6px rgba(59, 130, 246, 0.8)',
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Try Our AI Live Demos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of our AI services with interactive demonstrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoFeatures.map((demo, index) => (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                                 className="ethereal-card animate-breathe ultra-glow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 mx-auto">
                  <demo.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{demo.title}</h3>
                <p className="text-gray-600 text-center mb-6">{demo.description}</p>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  <Play className="h-5 w-5 mr-2" />
                  Try Demo
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade AI Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale, security, and reliability with advanced features that enterprises trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                                 className="advanced-feature-card"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Indian Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses across India are transforming with our AI solutions
            </p>
          </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {testimonial.metric}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{testimonial.content}"</p>
                
                <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <div className="text-xs font-semibold text-blue-800 mb-1">Technology Used:</div>
                  <div className="text-xs text-blue-700">{testimonial.technology}</div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and workflows in minutes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                                 className="integration-card"
              >
                <span className="text-sm font-medium text-gray-700">{integration}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">
              <Code className="h-5 w-5 mr-2" />
              View API Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Enterprise Security & Compliance
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center text-white">
                <Lock className="h-8 w-8 mr-3 text-green-400" />
                <span className="font-semibold">SOC 2 Certified</span>
              </div>
              <div className="flex items-center text-white">
                <Award className="h-8 w-8 mr-3 text-blue-400" />
                <span className="font-semibold">ISO 27001</span>
              </div>
              <div className="flex items-center text-white">
                <Shield className="h-8 w-8 mr-3 text-purple-400" />
                <span className="font-semibold">GDPR Compliant</span>
              </div>
              <div className="flex items-center text-white">
                <Cloud className="h-8 w-8 mr-3 text-indigo-400" />
                <span className="font-semibold">Multi-Cloud Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cosmic-bg relative overflow-hidden">
        {/* Ultra Ambient Effects */}
        <div className="stellar-particles">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="stellar-particle animate-stellar-float"
              style={{
                left: `${(i * 8.33) % 100}%`,
                animationDelay: `${(i * 1.5) % 18}s`,
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.9)',
              }}
            ></div>
          ))}
        </div>
        
        {/* Cosmic Orbs */}
        <div className="floating-orb animate-orb-float" style={{background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), rgba(59, 130, 246, 0.3))', top: '30%', right: '20%'}}></div>
        <div className="floating-orb animate-orb-float" style={{background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), rgba(139, 92, 246, 0.3))', bottom: '30%', left: '25%'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 depth-layer">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Lead India's AI Revolution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 500+ Indian enterprises already using our AI platform to drive digital transformation. 
            Start your AI journey today with ₹0 setup cost.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Free 30-Day Trial</div>
              <div className="text-blue-100">No credit card required</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">₹0 Setup Cost</div>
              <div className="text-blue-100">Get started immediately</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">24/7 Indian Support</div>
              <div className="text-blue-100">Hindi & English support</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg text-lg transition-colors shadow-lg ultra-glow animate-ultra-glow">
              Start Free Trial
              <Lightning className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg text-lg transition-colors">
              Schedule Demo Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold">AIaaS India</span>
              </div>
              <p className="text-gray-400 mb-6">
                India's leading AI as a Service platform. Empowering businesses across the subcontinent 
                with cutting-edge artificial intelligence solutions.
              </p>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Smartphone className="h-4 w-4 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>support@aiaas.in</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  <span>Mumbai | Bangalore | Delhi | Hyderabad</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">AI Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Computer Vision</a></li>
                <li><a href="#" className="hover:text-white transition-colors">NLP & Chatbots</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Predictive Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Intelligence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Automation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Healthcare & Pharma</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Banking & Finance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce & Retail</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agriculture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Developer Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">White Papers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog & Insights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>&copy; 2024 AIaaS India Pvt. Ltd. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Security</a>
                <a href="#" className="hover:text-white transition-colors">Compliance</a>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800 text-center text-sm text-gray-500">
              <p>Registered Office: 123 Innovation Hub, Bandra Kurla Complex, Mumbai 400051, Maharashtra, India</p>
              <p className="mt-1">CIN: U72900MH2024PTC123456 | GST: 27ABCDE1234F1Z5</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Chat Assistant */}
      <div className="fixed bottom-6 right-6 z-50">
        {!chatOpen ? (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setChatOpen(true)}
            className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 relative group ultra-glow animate-ultra-glow animate-orb-float"
          >
            <Bot className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Try our AI assistant!
            </div>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 h-96 flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs opacity-90">Online • Powered by AIaaS</p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t border-gray-100">
              <div className="flex gap-2 mb-2">
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-xs py-2 px-3 rounded-lg transition-colors">
                  💰 Pricing
                </button>
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-xs py-2 px-3 rounded-lg transition-colors">
                  🤖 AI Services
                </button>
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-xs py-2 px-3 rounded-lg transition-colors">
                  📞 Demo
                </button>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything about AI..."
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-lg transition-colors">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 