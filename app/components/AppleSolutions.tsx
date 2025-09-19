'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Heart, 
  TrendingUp, 
  Settings, 
  Building, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react'

export default function AppleSolutions() {
  const solutions = [
    {
      title: 'Education',
      description: 'Transform learning experiences with AI-powered tools for students, teachers, and institutions.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      features: ['Smart Classrooms', 'Personalized Learning', 'Automated Grading', 'Student Analytics'],
      benefits: ['40% Better Engagement', '60% Time Savings', '95% Accuracy']
    },
    {
      title: 'Healthcare',
      description: 'Revolutionize patient care with intelligent diagnostics, treatment planning, and health monitoring.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      features: ['Medical Imaging', 'Diagnostic AI', 'Treatment Planning', 'Patient Monitoring'],
      benefits: ['30% Faster Diagnosis', '25% Cost Reduction', '99% Accuracy']
    },
    {
      title: 'Finance',
      description: 'Enhance financial services with AI-driven risk assessment, fraud detection, and automated trading.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      features: ['Risk Assessment', 'Fraud Detection', 'Algorithmic Trading', 'Credit Scoring'],
      benefits: ['50% Fraud Reduction', '35% Faster Processing', '99.9% Uptime']
    },
    {
      title: 'Manufacturing',
      description: 'Optimize production processes with predictive maintenance, quality control, and supply chain management.',
      icon: Settings,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain AI', 'Process Optimization'],
      benefits: ['20% Efficiency Gain', '15% Cost Reduction', '90% Uptime']
    },
    {
      title: 'Retail',
      description: 'Enhance customer experience with AI-powered personalization, inventory management, and demand forecasting.',
      icon: Building,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      features: ['Personalized Recommendations', 'Inventory Optimization', 'Demand Forecasting', 'Customer Analytics'],
      benefits: ['35% Sales Increase', '25% Inventory Reduction', '90% Customer Satisfaction']
    },
    {
      title: 'Transportation',
      description: 'Optimize logistics and transportation with AI-driven route planning, fleet management, and predictive maintenance.',
      icon: Globe,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50',
      features: ['Route Optimization', 'Fleet Management', 'Predictive Maintenance', 'Traffic Analysis'],
      benefits: ['30% Fuel Savings', '40% Route Efficiency', '95% On-time Delivery']
    },
    {
      title: 'Agriculture',
      description: 'Revolutionize farming with AI-powered crop monitoring, yield prediction, and precision agriculture.',
      icon: Star,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      features: ['Crop Monitoring', 'Yield Prediction', 'Precision Agriculture', 'Weather Analysis'],
      benefits: ['25% Yield Increase', '30% Water Savings', '90% Crop Health']
    },
    {
      title: 'Energy',
      description: 'Optimize energy production and consumption with AI-driven smart grids, predictive maintenance, and renewable integration.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      features: ['Smart Grid Management', 'Predictive Maintenance', 'Renewable Integration', 'Energy Optimization'],
      benefits: ['20% Energy Savings', '35% Maintenance Reduction', '99% Grid Reliability']
    }
  ]

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Industry Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Tailored AI solutions designed specifically for your industry, 
            delivering measurable results and competitive advantages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${solution.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 h-full border border-gray-100`}>
                {/* Header */}
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{solution.description}</p>

                {/* Key Capabilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Key Capabilities</h4>
                  <div className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proven Results */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Proven Results</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.benefits.map((benefit, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${solution.color} text-white`}>
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a 
                  href={solution.title === 'Education' ? '/education' : '#'}
                  className="w-full bg-white text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 border border-gray-200"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Don't See Your Industry?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We create custom AI solutions for any industry. Let's discuss how we can help your specific use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
