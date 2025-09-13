"use client"

import { motion } from 'framer-motion'

const industries = [
  { name: 'Healthcare & Pharma', icon: '🏥', roi: '40% faster diagnosis, 60% cost reduction', desc: 'AI-powered diagnostics, drug discovery, telemedicine' },
  { name: 'Banking & Finance', icon: '🏦', roi: '₹50 crore saved annually', desc: 'Fraud detection, trading, loan approvals' },
  { name: 'E-commerce & Retail', icon: '🛒', roi: '25% sales increase', desc: 'Recommendation, price intelligence, analytics' },
  { name: 'Manufacturing & Auto', icon: '🏭', roi: '45% defect reduction', desc: 'Quality control, predictive maintenance' },
  { name: 'Agriculture & Food', icon: '🌾', roi: '30% yield increase', desc: 'Crop monitoring, precision farming' },
  { name: 'EdTech & Learning', icon: '📚', roi: '50% better outcomes', desc: 'Personalized learning and analytics' },
]

export default function IndustriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Across All Industries</h1>
        <p className="text-lg text-gray-600">Solutions tailored for each sector.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="ethereal-card p-8"
          >
            <div className="flex items-center mb-3">
              <div className="text-3xl mr-3">{ind.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{ind.name}</h3>
                <div className="text-sm text-green-600 font-semibold">{ind.roi}</div>
              </div>
            </div>
            <p className="text-gray-600">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}


