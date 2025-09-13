'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  FileText, 
  Play, 
  HelpCircle, 
  Search,
  Calendar,
  Download,
  ArrowRight,
  Clock,
  User,
  Tag,
  Star,
  TrendingUp,
  Brain,
  Zap
} from 'lucide-react'

export default function ResourcesPage() {
  const blogPosts = [
    {
      title: "The Future of AI in Education: Transforming Learning Experiences",
      excerpt: "Explore how AI is revolutionizing education through personalized learning, automated grading, and intelligent classroom management.",
      author: "Dr. Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop",
      featured: true
    },
    {
      title: "Machine Learning Best Practices for Enterprise Implementation",
      excerpt: "Learn the essential strategies for successfully implementing ML solutions in large-scale enterprise environments.",
      author: "Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      featured: false
    },
    {
      title: "AI Ethics: Building Responsible AI Systems",
      excerpt: "Understanding the importance of ethical AI development and how to implement responsible practices in your organization.",
      author: "Dr. Priya Patel",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      featured: false
    },
    {
      title: "Natural Language Processing: From Theory to Practice",
      excerpt: "A comprehensive guide to implementing NLP solutions for business applications and real-world use cases.",
      author: "Alex Thompson",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      featured: false
    }
  ]

  const whitepapers = [
    {
      title: "AI Transformation in Healthcare: A Comprehensive Guide",
      description: "Detailed analysis of AI implementation strategies in healthcare organizations, including ROI calculations and best practices.",
      pages: "45 pages",
      downloadCount: "2.3k downloads",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
    },
    {
      title: "Enterprise AI Adoption: Success Factors and Pitfalls",
      description: "Research-based insights on what makes AI implementations successful in large enterprises.",
      pages: "32 pages",
      downloadCount: "1.8k downloads",
      category: "Enterprise",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
    },
    {
      title: "The Economics of AI-as-a-Service: Cost-Benefit Analysis",
      description: "Comprehensive financial analysis of AIaaS adoption, including TCO and ROI frameworks.",
      pages: "28 pages",
      downloadCount: "3.1k downloads",
      category: "Business",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    }
  ]

  const webinars = [
    {
      title: "Getting Started with AI: A Beginner's Guide",
      date: "Jan 15, 2025",
      time: "2:00 PM EST",
      duration: "45 minutes",
      speaker: "Dr. Sarah Chen",
      description: "Learn the fundamentals of AI and how to identify opportunities in your organization.",
      attendees: "1,200+ registered",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      title: "Advanced Machine Learning Techniques",
      date: "Jan 22, 2025",
      time: "3:00 PM EST",
      duration: "60 minutes",
      speaker: "Michael Rodriguez",
      description: "Deep dive into advanced ML algorithms and their practical applications.",
      attendees: "850+ registered",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      title: "AI Implementation Success Stories",
      date: "Jan 29, 2025",
      time: "2:30 PM EST",
      duration: "50 minutes",
      speaker: "Alex Thompson",
      description: "Real-world case studies and lessons learned from successful AI projects.",
      attendees: "950+ registered",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
    }
  ]

  const faqs = [
    {
      question: "What is AI-as-a-Service (AIaaS)?",
      answer: "AIaaS is a cloud-based service model that provides artificial intelligence capabilities through APIs and web services. It allows businesses to access advanced AI technologies without the need for extensive in-house expertise or infrastructure."
    },
    {
      question: "How quickly can I integrate Ecopyxle's AI services?",
      answer: "Most of our AI services can be integrated within 1-2 weeks. Our APIs are designed for easy integration, and we provide comprehensive documentation and SDKs to accelerate the process."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including education, healthcare, finance, manufacturing, retail, and more. Our AI solutions are customizable to meet specific industry requirements and compliance standards."
    },
    {
      question: "Do you offer custom AI model development?",
      answer: "Yes, we provide custom AI model development services. Our team of data scientists and ML engineers can build tailored solutions based on your specific data and requirements."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including 24/7 technical support, dedicated account managers for enterprise clients, documentation, tutorials, and community forums."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including data encryption, secure APIs, compliance with GDPR and HIPAA, and regular security audits. Your data remains secure and private."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Resources & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Stay ahead with the latest AI insights, research, and best practices. 
                Access our comprehensive library of resources to accelerate your AI journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Latest Insights</h2>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group cursor-pointer ${post.featured ? 'md:col-span-2' : ''}`}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Whitepapers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth research and analysis on AI trends, implementation strategies, and industry insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {paper.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {paper.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{paper.pages}</span>
                      <span>{paper.downloadCount}</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our expert-led webinars to learn about the latest AI trends and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{webinar.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {webinar.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Speaker: {webinar.speaker}</span>
                      <span>{webinar.attendees}</span>
                    </div>
                    <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Register Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our AI services and solutions.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
