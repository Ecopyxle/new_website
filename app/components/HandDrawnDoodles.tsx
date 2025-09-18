'use client'

import { motion } from 'framer-motion'

// Hand-drawn style AI doodles similar to the image provided
export const HandDrawnDoodles = {
  // AI Chip/Processor
  AIChip: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Main chip body */}
        <rect x="10" y="20" width="60" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Pins */}
        <line x1="0" y1="25" x2="10" y2="25" stroke="currentColor" strokeWidth="2"/>
        <line x1="0" y1="35" x2="10" y2="35" stroke="currentColor" strokeWidth="2"/>
        <line x1="0" y1="45" x2="10" y2="45" stroke="currentColor" strokeWidth="2"/>
        <line x1="0" y1="55" x2="10" y2="55" stroke="currentColor" strokeWidth="2"/>
        
        <line x1="70" y1="25" x2="80" y2="25" stroke="currentColor" strokeWidth="2"/>
        <line x1="70" y1="35" x2="80" y2="35" stroke="currentColor" strokeWidth="2"/>
        <line x1="70" y1="45" x2="80" y2="45" stroke="currentColor" strokeWidth="2"/>
        <line x1="70" y1="55" x2="80" y2="55" stroke="currentColor" strokeWidth="2"/>
        
        {/* AI Text */}
        <text x="40" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">AI</text>
        {/* Circuit dots */}
        <circle cx="20" cy="30" r="1" fill="currentColor"/>
        <circle cx="25" cy="35" r="1" fill="currentColor"/>
        <circle cx="30" cy="30" r="1" fill="currentColor"/>
        <circle cx="50" cy="35" r="1" fill="currentColor"/>
        <circle cx="55" cy="30" r="1" fill="currentColor"/>
        <circle cx="60" cy="35" r="1" fill="currentColor"/>
      </g>
    </motion.g>
  ),

  // Brain with connections
  Brain: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Brain outline */}
        <path d="M30 20 Q20 15 15 25 Q10 35 15 45 Q20 55 30 50 Q40 55 50 50 Q60 45 65 35 Q70 25 60 20 Q50 15 40 20 Q35 15 30 20 Z" 
              fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Brain folds */}
        <path d="M25 25 Q30 20 35 25 Q40 30 45 25" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 35 Q25 30 30 35 Q35 40 40 35" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M35 40 Q40 35 45 40 Q50 45 55 40" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        
        {/* Connection points */}
        <circle cx="15" cy="25" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="65" cy="35" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="30" cy="55" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
        
        {/* Connection lines */}
        <line x1="15" y1="25" x2="5" y2="15" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
        <line x1="65" y1="35" x2="75" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
        <line x1="30" y1="55" x2="20" y2="65" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
      </g>
    </motion.g>
  ),

  // Robot/Bot
  Robot: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Head */}
        <rect x="25" y="10" width="30" height="25" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Eyes */}
        <circle cx="32" cy="20" r="3" fill="currentColor"/>
        <circle cx="48" cy="20" r="3" fill="currentColor"/>
        {/* Mouth */}
        <line x1="35" y1="28" x2="45" y2="28" stroke="currentColor" strokeWidth="2"/>
        
        {/* Body */}
        <rect x="20" y="35" width="40" height="35" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Body details */}
        <rect x="25" y="45" width="30" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
        <line x1="30" y1="58" x2="50" y2="58" stroke="currentColor" strokeWidth="1"/>
        <line x1="30" y1="62" x2="45" y2="62" stroke="currentColor" strokeWidth="1"/>
        
        {/* Arms */}
        <rect x="5" y="40" width="15" height="8" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        <rect x="60" y="40" width="15" height="8" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        
        {/* Legs */}
        <rect x="25" y="70" width="8" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        <rect x="47" y="70" width="8" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        
        {/* Antenna */}
        <line x1="40" y1="10" x2="40" y2="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="40" cy="3" r="2" fill="currentColor"/>
      </g>
    </motion.g>
  ),

  // Computer/Monitor with AI
  Computer: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Monitor */}
        <rect x="10" y="10" width="60" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Screen */}
        <rect x="15" y="15" width="50" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
        {/* AI window */}
        <rect x="20" y="20" width="20" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
        <text x="30" y="30" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">AI</text>
        
        {/* Stand */}
        <rect x="35" y="50" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="25" y1="58" x2="55" y2="58" stroke="currentColor" strokeWidth="2"/>
        
        {/* Code lines */}
        <line x1="45" y1="22" x2="60" y2="22" stroke="currentColor" strokeWidth="1"/>
        <line x1="45" y1="26" x2="55" y2="26" stroke="currentColor" strokeWidth="1"/>
        <line x1="45" y1="30" x2="58" y2="30" stroke="currentColor" strokeWidth="1"/>
        <line x1="20" y1="38" x2="35" y2="38" stroke="currentColor" strokeWidth="1"/>
        <line x1="40" y1="38" x2="60" y2="38" stroke="currentColor" strokeWidth="1"/>
      </g>
    </motion.g>
  ),

  // Cloud with connections
  Cloud: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Cloud shape */}
        <path d="M20 40 Q15 35 20 30 Q25 25 35 30 Q45 25 55 30 Q60 35 55 40 Q50 45 40 40 Q30 45 20 40 Z" 
              fill="none" stroke="currentColor" strokeWidth="2"/>
        
        {/* Connection points */}
        <circle cx="25" cy="35" r="2" fill="currentColor"/>
        <circle cx="50" cy="35" r="2" fill="currentColor"/>
        
        {/* Connection lines */}
        <line x1="25" y1="35" x2="15" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
        <line x1="50" y1="35" x2="60" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
        <line x1="37" y1="45" x2="37" y2="55" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
        
        {/* External connection nodes */}
        <circle cx="15" cy="25" r="1.5" fill="currentColor"/>
        <circle cx="60" cy="25" r="1.5" fill="currentColor"/>
        <circle cx="37" cy="55" r="1.5" fill="currentColor"/>
      </g>
    </motion.g>
  ),

  // Neural Network Node
  NetworkNode: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Central node */}
        <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="40" cy="40" r="3" fill="currentColor"/>
        
        {/* Connected nodes */}
        <circle cx="20" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="60" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="60" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        
        {/* Connection lines */}
        <line x1="24" y1="24" x2="32" y2="32" stroke="currentColor" strokeWidth="1"/>
        <line x1="56" y1="24" x2="48" y2="32" stroke="currentColor" strokeWidth="1"/>
        <line x1="24" y1="56" x2="32" y2="48" stroke="currentColor" strokeWidth="1"/>
        <line x1="56" y1="56" x2="48" y2="48" stroke="currentColor" strokeWidth="1"/>
        
        {/* Small dots */}
        <circle cx="20" cy="20" r="1" fill="currentColor"/>
        <circle cx="60" cy="20" r="1" fill="currentColor"/>
        <circle cx="20" cy="60" r="1" fill="currentColor"/>
        <circle cx="60" cy="60" r="1" fill="currentColor"/>
      </g>
    </motion.g>
  ),

  // Chat/Speech Bubble
  ChatBubble: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Bubble */}
        <ellipse cx="30" cy="25" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Tail */}
        <path d="M15 35 L10 45 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Dots inside */}
        <circle cx="22" cy="25" r="1.5" fill="currentColor"/>
        <circle cx="30" cy="25" r="1.5" fill="currentColor"/>
        <circle cx="38" cy="25" r="1.5" fill="currentColor"/>
      </g>
    </motion.g>
  ),

  // Lightbulb (Ideas)
  Lightbulb: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Bulb */}
        <circle cx="25" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Base */}
        <rect x="20" y="37" width="10" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Screw lines */}
        <line x1="18" y1="40" x2="32" y2="40" stroke="currentColor" strokeWidth="1"/>
        <line x1="18" y1="42" x2="32" y2="42" stroke="currentColor" strokeWidth="1"/>
        
        {/* Light rays */}
        <line x1="25" y1="8" x2="25" y2="3" stroke="currentColor" strokeWidth="2"/>
        <line x1="40" y1="15" x2="44" y2="11" stroke="currentColor" strokeWidth="2"/>
        <line x1="40" y1="35" x2="44" y2="39" stroke="currentColor" strokeWidth="2"/>
        <line x1="10" y1="15" x2="6" y2="11" stroke="currentColor" strokeWidth="2"/>
        <line x1="10" y1="35" x2="6" y2="39" stroke="currentColor" strokeWidth="2"/>
        
        {/* Filament */}
        <path d="M20 20 Q25 15 30 20 Q25 25 20 20" fill="none" stroke="currentColor" strokeWidth="1"/>
      </g>
    </motion.g>
  ),

  // Gear/Settings
  Gear: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ opacity: 1, scale: size, rotate: 360 }}
      transition={{ delay, duration: 2, rotate: { duration: 10, repeat: Infinity, ease: "linear" } }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Gear teeth */}
        <path d="M25 5 L30 5 L30 10 L35 10 L35 15 L40 15 L40 20 L35 20 L35 25 L40 25 L40 30 L35 30 L35 35 L30 35 L30 40 L25 40 L25 35 L20 35 L20 30 L15 30 L15 25 L20 25 L20 20 L15 20 L15 15 L20 15 L20 10 L25 10 Z" 
              fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Center hole */}
        <circle cx="27.5" cy="22.5" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="27.5" cy="22.5" r="2" fill="currentColor"/>
      </g>
    </motion.g>
  ),

  // Question Mark
  Question: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Question mark bubble */}
        <rect x="10" y="10" width="25" height="25" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Question mark */}
        <path d="M18 18 Q18 15 21 15 Q24 15 24 18 Q24 21 21 21" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="21" cy="26" r="1.5" fill="currentColor"/>
      </g>
    </motion.g>
  ),

  // Book/Learning
  Book: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Book cover */}
        <rect x="15" y="20" width="30" height="25" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Pages */}
        <line x1="30" y1="20" x2="30" y2="45" stroke="currentColor" strokeWidth="1"/>
        {/* Text lines */}
        <line x1="18" y1="25" x2="27" y2="25" stroke="currentColor" strokeWidth="1"/>
        <line x1="18" y1="28" x2="25" y2="28" stroke="currentColor" strokeWidth="1"/>
        <line x1="18" y1="31" x2="27" y2="31" stroke="currentColor" strokeWidth="1"/>
        
        <line x1="33" y1="25" x2="42" y2="25" stroke="currentColor" strokeWidth="1"/>
        <line x1="33" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="1"/>
        <line x1="33" y1="31" x2="42" y2="31" stroke="currentColor" strokeWidth="1"/>
      </g>
    </motion.g>
  ),

  // User/Person with headset
  User: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Head */}
        <circle cx="25" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Face */}
        <circle cx="22" cy="18" r="1" fill="currentColor"/>
        <circle cx="28" cy="18" r="1" fill="currentColor"/>
        <path d="M22 22 Q25 24 28 22" fill="none" stroke="currentColor" strokeWidth="1"/>
        
        {/* Headset */}
        <path d="M17 15 Q17 10 25 10 Q33 10 33 15" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="33" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        
        {/* Body */}
        <rect x="18" y="28" width="14" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Arms */}
        <line x1="18" y1="35" x2="10" y2="40" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="35" x2="40" y2="40" stroke="currentColor" strokeWidth="2"/>
      </g>
    </motion.g>
  ),

  // Magnifying Glass/Search
  Search: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Magnifying glass */}
        <circle cx="25" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="35" y1="35" x2="45" y2="45" stroke="currentColor" strokeWidth="3"/>
        {/* Handle end */}
        <circle cx="45" cy="45" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        
        {/* Search content */}
        <circle cx="25" cy="25" r="6" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
        <circle cx="25" cy="25" r="2" fill="currentColor"/>
      </g>
    </motion.g>
  ),

  // Wrench/Tool
  Tool: ({ x = 0, y = 0, size = 1, delay = 0 }: { x?: number, y?: number, size?: number, delay?: number }) => (
    <motion.g
      initial={{ opacity: 1, scale: size }}
      animate={{ opacity: 1, scale: size }}
      transition={{ delay, duration: 0.8 }}
    >
      <g transform={`translate(${x}, ${y})`}>
        {/* Wrench head */}
        <rect x="10" y="15" width="8" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Wrench handle */}
        <line x1="18" y1="22" x2="40" y2="44" stroke="currentColor" strokeWidth="3"/>
        {/* Handle end */}
        <circle cx="40" cy="44" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        
        {/* Wrench jaw */}
        <line x1="10" y1="20" x2="6" y2="16" stroke="currentColor" strokeWidth="2"/>
        <line x1="10" y1="25" x2="6" y2="29" stroke="currentColor" strokeWidth="2"/>
      </g>
    </motion.g>
  )
}

// Main doodle background component
interface HandDrawnBackgroundProps {
  children: React.ReactNode
  density?: 'light' | 'medium' | 'heavy'
  className?: string
  opacity?: number
}

export default function HandDrawnBackground({ 
  children, 
  density = 'medium', 
  className = "",
  opacity = 0.08
}: HandDrawnBackgroundProps) {
  // Generate random positions for doodles
  const generateDoodles = () => {
    const doodleCount = density === 'light' ? 8 : density === 'medium' ? 12 : 16
    const doodleTypes = [
      HandDrawnDoodles.AIChip,
      HandDrawnDoodles.Brain,
      HandDrawnDoodles.Robot,
      HandDrawnDoodles.Computer,
      HandDrawnDoodles.Cloud,
      HandDrawnDoodles.NetworkNode,
      HandDrawnDoodles.ChatBubble,
      HandDrawnDoodles.Lightbulb,
      HandDrawnDoodles.Gear,
      HandDrawnDoodles.Question,
      HandDrawnDoodles.Book,
      HandDrawnDoodles.User,
      HandDrawnDoodles.Search,
      HandDrawnDoodles.Tool
    ]

    return Array.from({ length: doodleCount }, (_, i) => {
      const DoodleComponent = doodleTypes[i % doodleTypes.length]
      return {
        Component: DoodleComponent,
        x: Math.random() * 80 + 10, // 10-90% of width
        y: Math.random() * 80 + 10, // 10-90% of height
        size: 0.6 + Math.random() * 0.6, // 0.6-1.2 scale
        delay: i * 0.2
      }
    })
  }

  const doodles = generateDoodles()

  return (
    <div className={`relative ${className}`}>
      {/* Doodle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg 
          viewBox="0 0 1200 800" 
          className="w-full h-full" 
          style={{ opacity }}
        >
          <g className="text-blue-400">
            {doodles.map((doodle, index) => (
              <doodle.Component
                key={index}
                x={doodle.x * 12} // Scale to viewBox
                y={doodle.y * 8}  // Scale to viewBox
                size={doodle.size}
                delay={doodle.delay}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
