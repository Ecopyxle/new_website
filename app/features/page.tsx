'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Cloud, 
  Settings, 
  Workflow,
  Database,
  Brain,
  Lock,
  BarChart3,
  Globe,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Eye
} from 'lucide-react'
import WebsiteDoodles from '../components/WebsiteDoodles'
import { DESIGN_SYSTEM } from '../constants/design-system'

const features = [
  { 
    icon: Zap, 
    title: 'Get Instant AI Responses', 
    benefit: 'Delight users with sub-50ms AI responses that feel instantaneous',
    desc: 'Your customers never wait. Our infrastructure handles millions of requests while maintaining lightning speed.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50'
  },
  { 
    icon: Brain, 
    title: 'Deploy Smarter AI Models', 
    benefit: 'Access cutting-edge neural networks without the PhD in machine learning',
    desc: 'We handle the complexity—you get state-of-the-art transformers and CNNs that actually solve your problems.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  },
  { 
    icon: MessageSquare, 
    title: 'Understand Your Customers Better', 
    benefit: 'Turn every conversation into actionable insights with advanced NLP',
    desc: 'Analyze sentiment, generate responses, translate languages—make every interaction count.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  { 
    icon: Eye, 
    title: 'See What Others Miss', 
    benefit: 'Extract valuable insights from images and videos in real-time',
    desc: 'Detect objects, recognize faces, read text—turn visual data into competitive advantage.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  },
  { 
    icon: Workflow, 
    title: 'Eliminate Repetitive Work', 
    benefit: 'Cut manual tasks by 80% with AI that learns your workflows',
    desc: 'Smart automation that gets smarter—your team focuses on strategy while AI handles the routine.',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'from-indigo-50 to-purple-50'
  },
  { 
    icon: BarChart3, 
    title: 'Predict Before Problems Happen', 
    benefit: 'Stay ahead of trends with machine learning that sees the future',
    desc: 'Forecast demand, assess risks, spot opportunities—make decisions with confidence.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50'
  },
  { 
    icon: Database, 
    title: 'Turn Messy Data into Gold', 
    benefit: 'Transform chaotic data into AI-ready insights without the headache',
    desc: 'Stop wrestling with data prep—our pipelines clean, process, and optimize your data automatically.',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'from-teal-50 to-cyan-50'
  },
  { 
    icon: Shield, 
    title: 'Sleep Soundly with Bank-Grade Security', 
    benefit: 'Deploy AI with confidence knowing your data is fortress-protected',
    desc: 'SOC2/ISO certified, end-to-end encrypted—security so tight, even we can\'t see your data.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-50 to-pink-50'
  },
  { 
    icon: Cloud, 
    title: 'Deploy Anywhere, Scale Everywhere', 
    benefit: 'Run your AI on any cloud or on-premises without vendor lock-in',
    desc: 'AWS, Azure, GCP, or your own servers—our AI adapts to your infrastructure, not the other way around.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50'
  },
  { 
    icon: Settings, 
    title: 'Pay Only for What You Use', 
    benefit: 'Smart scaling cuts your AI costs by automatically optimizing resources',
    desc: 'No more paying for idle servers—our intelligence scales up for traffic spikes, down for savings.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50'
  },
  { 
    icon: Lock, 
    title: 'Keep Your Data Yours', 
    benefit: 'Maintain complete control with privacy-first AI architecture',
    desc: 'Your data stays where you want it—we process, you own, nobody else sees.',
    color: 'from-gray-600 to-gray-800',
    bgColor: 'from-gray-50 to-slate-50'
  },
  { 
    icon: CheckCircle, 
    title: 'Guarantee AI Performance', 
    benefit: 'Ensure consistent results with automated quality monitoring',
    desc: 'Continuous testing catches issues before your users do—reliable AI you can actually depend on.',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50'
  }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <WebsiteDoodles density="light">
        <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 shadow-md mb-6">
                <span className="text-lg mr-2">⚡</span>
                <span className="text-sm md:text-base font-bold text-gray-800">Platform Capabilities</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Supercharge Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI That Works</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed">
                Stop waiting for AI to work for you. Start delivering results today with features that solve real problems, 
                not just impress with buzzwords.
              </p>
            </motion.div>
          </div>
        </div>
        </section>
      </WebsiteDoodles>

      {/* Features Grid */}
      <WebsiteDoodles density="medium">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br ${feature.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 group hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform rotate-12 scale-150"></div>
                </div>
                
                {/* Icon with Animation */}
                <motion.div 
                  className={`relative w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-blue-600 mb-3 leading-tight">
                    {feature.benefit}
                  </p>
                  
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {feature.desc}
                  </p>
                </div>

                {/* Hover Effect Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              </motion.div>
            ))}
          </div>
        </div>
        </section>
      </WebsiteDoodles>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Experience These Features?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start building with our AI platform today and see the difference enterprise-grade features make.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}