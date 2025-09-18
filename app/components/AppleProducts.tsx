'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Database,
  Cpu,
  TrendingUp
} from 'lucide-react'
import { DESIGN_SYSTEM, getProductColor } from '../constants/design-system'

const AppleProducts = memo(function AppleProducts() {
  const products = [
    {
      icon: Brain,
      title: 'EGS AI - Education Grading System',
      description: 'Cut grading time by 80% while improving accuracy. Our AI instantly corrects papers, detects plagiarism, and provides detailed feedback that helps students learn faster.',
      features: ['Save 20+ hours per week on grading', 'Eliminate human error in scoring', 'Catch plagiarism instantly', 'Boost student writing quality'],
      useCases: ['Universities reduce grading workload', 'Schools improve writing standards', 'Research institutions ensure quality', 'Online education platforms scale'],
    },
    {
      icon: Eye,
      title: 'Advanced Classroom Engagement ACE AI',
      description: 'Increase student engagement by 40% and identify struggling learners before they fall behind. Our AI monitors attention and provides real-time insights to improve learning outcomes.',
      features: ['Boost student participation rates', 'Identify at-risk students early', 'Reduce teacher workload', 'Improve learning outcomes'],
      useCases: ['Online courses increase completion rates', 'Schools improve student success', 'Training programs optimize engagement', 'Universities enhance teaching quality'],
    },
    {
      icon: Database,
      title: 'AI Database Agents',
      description: 'Accelerate your database performance by 300% and eliminate costly downtime. Our AI agents optimize queries, prevent failures, and keep your data flowing smoothly.',
      features: ['Triple your database speed', 'Prevent costly system crashes', 'Reduce maintenance costs by 60%', 'Ensure 99.9% uptime'],
      useCases: ['Enterprises scale without bottlenecks', 'Startups handle rapid growth', 'E-commerce sites handle traffic spikes', 'SaaS companies maintain reliability'],
    },
    {
      icon: Cpu,
      title: 'AI Custom LLM Model Building',
      description: 'Build AI that understands your industry perfectly. We create custom language models that speak your business language and deliver results your competitors can\'t match.',
      features: ['Outperform generic AI by 200%', 'Reduce training time by 90%', 'Cut AI development costs', 'Gain competitive advantage'],
      useCases: ['Healthcare improves patient care', 'Finance detects fraud faster', 'Legal firms accelerate research', 'Manufacturing optimizes operations'],
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
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              Powerful AI Projects
            </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            Discover our comprehensive suite of AI-powered tools designed to transform 
            your business operations and drive unprecedented growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => {
            const colors = getProductColor(index)
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${colors.bg} ${DESIGN_SYSTEM.cards.elevated} aspect-square sm:aspect-square flex flex-col p-4 sm:p-6`}>
                  {/* Header */}
                  <div className="flex items-start mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${colors.gradient} ${DESIGN_SYSTEM.borderRadius.base} flex items-center justify-center group-hover:scale-110 ${DESIGN_SYSTEM.transitions.base}`}>
                      <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 leading-tight">{product.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3 flex-grow leading-relaxed">{product.description}</p>

                  {/* Key Capabilities */}
                  <div className="mb-4">
                    <h4 className={`${DESIGN_SYSTEM.typography.body.xs} font-semibold text-gray-500 uppercase tracking-wide mb-2`}>Key Capabilities</h4>
                    <div className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className={`w-3 h-3 ${DESIGN_SYSTEM.colors.success.main} flex-shrink-0`} />
                          <span className={`${DESIGN_SYSTEM.typography.body.xs} text-gray-700 line-clamp-1`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Proven Results */}
                  <div className="mb-4">
                    <h4 className={`${DESIGN_SYSTEM.typography.body.xs} font-semibold text-gray-500 uppercase tracking-wide mb-2`}>Proven Results</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.useCases?.slice(0, 2).map((useCase, idx) => (
                        <span key={idx} className={`px-2 py-1 ${DESIGN_SYSTEM.borderRadius.full} ${DESIGN_SYSTEM.typography.body.xs} font-semibold bg-gradient-to-r ${colors.gradient} text-white`}>
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className={`w-full bg-white text-gray-900 py-2 ${DESIGN_SYSTEM.borderRadius.base} font-semibold hover:bg-gray-50 ${DESIGN_SYSTEM.transitions.base} flex items-center justify-center gap-2 group-hover:scale-105 border border-gray-200 ${DESIGN_SYSTEM.typography.body.sm}`}>
                    Explore Solution
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
})

export default AppleProducts
