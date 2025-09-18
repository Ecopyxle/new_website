"use client"

import { motion } from 'framer-motion'
import { FileText, Eye, Play } from 'lucide-react'

const demos = [
  { title: 'AI Paper Correction', desc: 'Try our academic writing assistance and grammar checking', icon: FileText },
  { title: 'Classroom Monitoring', desc: 'Experience student engagement tracking', icon: Eye },
]

export default function DemoPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Try Our AI Live Demos</h1>
        <p className="text-lg text-gray-600">Interactive demonstrations of our AI services</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {demos.map((demo, idx) => (
          <motion.div
            key={demo.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="ethereal-card"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 mx-auto">
              <demo.icon className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{demo.title}</h3>
            <p className="text-gray-600 text-center mb-6">{demo.desc}</p>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
              <Play className="h-5 w-5 mr-2" />
              Try Demo
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  )
}


