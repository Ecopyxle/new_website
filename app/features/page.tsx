"use client"

import { motion } from 'framer-motion'
import { Shield, Zap, Cloud, Settings, Workflow } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Real-time Processing', desc: 'Sub-50ms responses with horizontally scalable pipelines.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'SOC2/ISO-ready controls, encryption, and auditability.' },
  { icon: Cloud, title: 'Multi-cloud & On-prem', desc: 'Deploy on AWS, Azure, GCP, or your private cloud.' },
  { icon: Settings, title: 'Auto-scaling', desc: 'Scale up/down seamlessly based on traffic and load.' },
  { icon: Workflow, title: 'No-code Integration', desc: 'Visual builders and SDKs for quick integrations.' },
]

export default function FeaturesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platform Features</h1>
        <p className="text-lg text-gray-600">Everything you need to build and scale AI experiences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="advanced-feature-card"
          >
            <div className="flex items-center mb-3">
              <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">{f.title}</h3>
            </div>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}


