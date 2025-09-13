"use client"

import { motion } from 'framer-motion'
import { CheckCircle, FileText, Eye, MessageSquare, Database, Cpu, Workflow } from 'lucide-react'

const services = [
  { icon: FileText, title: 'AI Paper Correction', desc: 'Advanced AI-powered paper correction system', features: ['Grammar & Style', 'Plagiarism Detection', 'Citation Validation']},
  { icon: Eye, title: 'AI Classroom Monitoring', desc: 'Intelligent classroom monitoring system', features: ['Attention Tracking', 'Behavior Analysis', 'Attendance Automation']},
  { icon: MessageSquare, title: 'AI Movie Review System', desc: 'Automated review and sentiment analysis', features: ['Sentiment', 'Summarization', 'Recommendation']},
  { icon: Workflow, title: 'AI Supply Chain Management', desc: 'End-to-end supply chain optimization', features: ['Forecasting', 'Inventory', 'Route Planning']},
  { icon: Database, title: 'AI Database Agents', desc: 'Intelligent DB management and optimization', features: ['Query Optimization', 'Performance Monitoring', 'Data Quality']},
  { icon: Cpu, title: 'Custom LLM Models', desc: 'Custom large language model development', features: ['Training', 'Fine-tuning', 'Domain Adaptation']},
]

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specialized AI Solutions</h1>
        <p className="text-lg text-gray-600">Explore our suite of ready-to-deploy AI services.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="ethereal-card"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg">
                <service.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="ml-4 text-xl font-bold text-gray-900">{service.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </main>
  )
}


