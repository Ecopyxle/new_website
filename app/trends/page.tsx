"use client"

import { motion } from 'framer-motion'

const trends = [
  { icon: '📚', title: 'AI Paper Correction', tag: 'Education First', desc: 'AI-powered academic writing assistance and plagiarism detection' },
  { icon: '👁️', title: 'Classroom Monitoring', tag: 'EdTech Innovation', desc: 'Student engagement tracking and behavioral analysis' },
  { icon: '🎬', title: 'AI Movie Reviews', tag: 'Media AI', desc: 'Sentiment analysis and recommendation for entertainment' },
  { icon: '🥗', title: 'NUTRI AI', tag: 'Health Tech', desc: 'Nutrition analysis and personalized diet' },
  { icon: '🚚', title: 'Supply Chain AI', tag: 'Logistics Innovation', desc: 'End-to-end supply chain optimization' },
  { icon: '🤖', title: 'Custom LLM Models', tag: 'Enterprise Ready', desc: 'Industry-specific large language models' },
]

export default function TrendsPage() {
  return (
    <main className="py-16 cosmic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">🔥 Hottest AI Technologies</h1>
          <p className="text-blue-200">Stay ahead with the latest AI innovations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((t, idx) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6"
            >
              <div className="text-4xl mb-4">{t.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
              <p className="text-blue-200 text-sm">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}


