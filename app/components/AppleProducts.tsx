'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  Workflow, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Film,
  Database,
  FileText,
  Phone,
  Cpu,
  TrendingUp
} from 'lucide-react'

export default function AppleProducts() {
  const products = [
    {
      icon: Brain,
      title: 'EGS AI - Education Grading System',
      description: 'Advanced AI-powered paper correction system for educational institutions, research papers, and academic content.',
      features: ['Grammar & Style Check', 'Plagiarism Detection', 'Citation Validation', 'Academic Writing Enhancement'],
      useCases: ['University Papers', 'Research Publications', 'Student Assignments', 'Academic Journals'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Eye,
      title: 'Advanced Classroom Engagement ACE AI',
      description: 'Intelligent classroom monitoring system using computer vision to track student engagement and behavior.',
      features: ['Student Attention Tracking', 'Behavioral Analysis', 'Attendance Automation', 'Performance Insights'],
      useCases: ['Online Education', 'Physical Classrooms', 'Student Assessment', 'Teacher Training'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Film,
      title: 'AI Movie Review System',
      description: 'Automated movie review and sentiment analysis system for entertainment platforms and content creators.',
      features: ['Sentiment Analysis', 'Review Summarization', 'Rating Prediction', 'Content Recommendation'],
      useCases: ['Streaming Platforms', 'Movie Studios', 'Content Marketing', 'Audience Insights'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    },
    {
      icon: Workflow,
      title: 'AI Supply Chain Management',
      description: 'End-to-end AI-powered supply chain optimization from farmers to flavors, covering agriculture to retail.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Quality Control'],
      useCases: ['Agricultural Supply Chain', 'Food Processing', 'Retail Distribution', 'Logistics Optimization'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: Database,
      title: 'AI Database Agents',
      description: 'Intelligent database management and optimization agents for enterprise data operations.',
      features: ['Query Optimization', 'Performance Monitoring', 'Data Quality Checks', 'Automated Maintenance'],
      useCases: ['Enterprise Databases', 'Data Warehouses', 'Cloud Storage', 'Big Data Platforms'],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50'
    },
    {
      icon: Cpu,
      title: 'AI Custom LLM Model Building',
      description: 'Custom large language model development and fine-tuning for specific industry requirements.',
      features: ['Model Training', 'Fine-tuning', 'Domain Adaptation', 'Performance Optimization'],
      useCases: ['Industry-Specific AI', 'Enterprise Chatbots', 'Content Generation', 'Knowledge Management'],
      color: 'from-violet-500 to-purple-500',
      bgColor: 'from-violet-50 to-purple-50'
    },
    {
      icon: FileText,
      title: 'AI Paperless Documentation for Hospitals',
      description: 'Intelligent document management and automation system for healthcare institutions.',
      features: ['Medical Record Processing', 'Document Classification', 'Data Extraction', 'Compliance Automation'],
      useCases: ['Hospital Management', 'Medical Records', 'Insurance Claims', 'Regulatory Compliance'],
      color: 'from-emerald-500 to-green-500',
      bgColor: 'from-emerald-50 to-green-50'
    },
    {
      icon: Phone,
      title: 'AI Call Centers',
      description: 'Intelligent call center automation with natural language processing and sentiment analysis.',
      features: ['Voice Recognition', 'Sentiment Analysis', 'Call Routing', 'Performance Analytics'],
      useCases: ['Customer Service', 'Sales Support', 'Technical Support', 'Quality Monitoring'],
      color: 'from-rose-500 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50'
    }
  ]

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Powerful AI Projects
            </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover our comprehensive suite of AI-powered tools designed to transform 
            your business operations and drive unprecedented growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${product.bgColor} rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 aspect-square border border-gray-100 flex flex-col`}>
                {/* Header */}
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3 flex-grow">{product.description}</p>

                {/* Key Capabilities */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Capabilities</h4>
                  <div className="space-y-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-xs line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proven Results */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Proven Results</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.useCases?.slice(0, 2).map((useCase, idx) => (
                      <span key={idx} className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${product.color} text-white`}>
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 border border-gray-200 text-sm">
                  Explore Solution
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
