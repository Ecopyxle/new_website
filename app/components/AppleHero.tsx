'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, X } from 'lucide-react'
import { useState } from 'react'
import { DESIGN_SYSTEM } from '../constants/design-system'
import TextDoodles from './TextDoodles'

export default function AppleHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <TextDoodles>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tagline */}
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Enterprise-Grade AI Solutions
            </span>
            <br />
            Delivered in Days
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-3 sm:mb-4 leading-tight">
            Transform your business with our comprehensive AI-as-a-Service platform
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            From machine learning APIs to custom AI models, we deliver scalable, secure AI capabilities that integrate 
            seamlessly into your existing systems—no AI expertise required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center mb-12 sm:mb-16"
        >
          <button 
            onClick={() => setIsVideoModalOpen(true)}
            className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 text-base sm:text-lg font-semibold flex items-center gap-2 hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            See AI in Action
          </button>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-0"
        >
          {[
            { 
              icon: '⚡', 
              title: 'Launch AI Features Today', 
              description: 'Go from idea to implementation in hours, not months—our APIs work with your existing code',
              color: 'from-blue-500 to-cyan-500'
            },
            { 
              icon: '🔒', 
              title: 'Scale Without Worry', 
              description: 'Sleep soundly knowing your AI runs on SOC 2 compliant infrastructure that grows with you',
              color: 'from-purple-500 to-pink-500'
            },
            { 
              icon: '💰', 
              title: 'Save 70% on AI Development', 
              description: 'Skip the million-dollar AI team—get enterprise-grade intelligence at startup prices',
              color: 'from-green-500 to-emerald-500'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0 mt-12"
        >
          {[
            { number: '1M+', label: 'API Calls/Month', color: 'text-blue-600' },
            { number: '50+', label: 'Enterprise Clients', color: 'text-purple-600' },
            { number: '99.9%', label: 'Uptime SLA', color: 'text-green-600' },
            { number: '70%', label: 'Cost Savings', color: 'text-orange-600' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="text-center"
            >
              <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        </TextDoodles>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Video Player */}
            <video
              controls
              autoPlay
              className="w-full h-full"
              poster="/videos/video-thumbnail.jpg" // Optional: add a thumbnail image
            >
              <source src="/videos/Adobe Express - veo3_video_1758238074573.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}

    </section>
  )
}
