'use client'

import { motion } from 'framer-motion'

// AI-themed doodle components with subtle animations
export const AIDoodles = {
  // Neural Network Pattern
  NeuralNetwork: ({ className = "", opacity = 0.1 }: { className?: string, opacity?: number }) => (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        viewBox="0 0 800 600" 
        className="w-full h-full" 
        style={{ opacity }}
      >
        {/* Nodes */}
        <g stroke="currentColor" fill="currentColor" className="text-blue-500">
          {[
            { x: 100, y: 150, size: 4 },
            { x: 200, y: 100, size: 3 },
            { x: 200, y: 200, size: 3 },
            { x: 300, y: 80, size: 2 },
            { x: 300, y: 150, size: 4 },
            { x: 300, y: 220, size: 2 },
            { x: 400, y: 120, size: 3 },
            { x: 400, y: 180, size: 3 },
            { x: 500, y: 150, size: 4 },
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r={node.size}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
        </g>
        {/* Connections */}
        <g stroke="currentColor" fill="none" strokeWidth="1" className="text-blue-400">
          <motion.line
            x1="100" y1="150" x2="200" y2="100"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <motion.line
            x1="100" y1="150" x2="200" y2="200"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
          <motion.line
            x1="200" y1="100" x2="300" y2="80"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          />
          <motion.line
            x1="200" y1="100" x2="300" y2="150"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
          <motion.line
            x1="200" y1="200" x2="300" y2="150"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          />
          <motion.line
            x1="200" y1="200" x2="300" y2="220"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.0, duration: 1 }}
          />
        </g>
      </svg>
    </div>
  ),

  // Circuit Pattern
  CircuitPattern: ({ className = "", opacity = 0.08 }: { className?: string, opacity?: number }) => (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        className="w-full h-full" 
        style={{ opacity }}
      >
        <g stroke="currentColor" fill="none" strokeWidth="1" className="text-purple-500">
          {/* Circuit paths */}
          <path d="M50 50 L150 50 L150 100 L250 100" />
          <path d="M50 150 L100 150 L100 200 L200 200" />
          <path d="M250 100 L300 100 L300 150 L350 150" />
          <path d="M150 50 L150 20 L200 20 L200 80" />
          
          {/* Circuit nodes */}
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="150" cy="100" r="3" fill="currentColor" />
          <circle cx="250" cy="100" r="3" fill="currentColor" />
          <circle cx="100" cy="150" r="3" fill="currentColor" />
          <circle cx="200" cy="200" r="3" fill="currentColor" />
          <circle cx="350" cy="150" r="3" fill="currentColor" />
          
          {/* Small rectangles for components */}
          <rect x="145" y="95" width="10" height="10" rx="1" fill="currentColor" />
          <rect x="195" y="195" width="10" height="10" rx="1" fill="currentColor" />
          <rect x="345" y="145" width="10" height="10" rx="1" fill="currentColor" />
        </g>
      </svg>
    </div>
  ),

  // Data Flow Pattern
  DataFlow: ({ className = "", opacity = 0.06 }: { className?: string, opacity?: number }) => (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        viewBox="0 0 600 400" 
        className="w-full h-full" 
        style={{ opacity }}
      >
        <g className="text-green-500">
          {/* Data flow arrows */}
          {[
            { x: 50, y: 100, width: 80 },
            { x: 150, y: 150, width: 60 },
            { x: 230, y: 80, width: 70 },
            { x: 320, y: 200, width: 90 },
            { x: 430, y: 120, width: 50 },
          ].map((arrow, i) => (
            <motion.g
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
            >
              <path
                d={`M${arrow.x} ${arrow.y} L${arrow.x + arrow.width} ${arrow.y}`}
                stroke="currentColor"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              <circle cx={arrow.x} cy={arrow.y} r="2" fill="currentColor" />
            </motion.g>
          ))}
          
          {/* Arrow marker */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="currentColor"
              />
            </marker>
          </defs>
        </g>
      </svg>
    </div>
  ),

  // Brain/AI Pattern
  BrainPattern: ({ className = "", opacity = 0.05 }: { className?: string, opacity?: number }) => (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        viewBox="0 0 500 400" 
        className="w-full h-full" 
        style={{ opacity }}
      >
        <g stroke="currentColor" fill="none" strokeWidth="1.5" className="text-indigo-500">
          {/* Brain-like curved paths */}
          <motion.path
            d="M100 200 Q150 150 200 200 Q250 250 300 200 Q350 150 400 200"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M80 180 Q130 130 180 180 Q230 230 280 180 Q330 130 380 180"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
          <motion.path
            d="M120 220 Q170 170 220 220 Q270 270 320 220 Q370 170 420 220"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </g>
      </svg>
    </div>
  ),

  // Code/API Pattern
  CodePattern: ({ className = "", opacity = 0.04 }: { className?: string, opacity?: number }) => (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        className="w-full h-full" 
        style={{ opacity }}
      >
        <g className="text-gray-600">
          {/* Code brackets and symbols */}
          <text x="50" y="80" fontSize="24" fill="currentColor" fontFamily="monospace">{'{'}</text>
          <text x="80" y="100" fontSize="16" fill="currentColor" fontFamily="monospace">API</text>
          <text x="120" y="80" fontSize="24" fill="currentColor" fontFamily="monospace">{'}'}</text>
          
          <text x="200" y="150" fontSize="20" fill="currentColor" fontFamily="monospace">{'</'}</text>
          <text x="230" y="150" fontSize="16" fill="currentColor" fontFamily="monospace">AI</text>
          <text x="260" y="150" fontSize="20" fill="currentColor" fontFamily="monospace">{'>'}</text>
          
          <text x="300" y="220" fontSize="18" fill="currentColor" fontFamily="monospace">ML()</text>
          
          {/* Connection lines */}
          <path d="M120 85 L200 145" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
          <path d="M260 155 L300 215" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        </g>
      </svg>
    </div>
  ),

  // Geometric AI Pattern
  GeometricAI: ({ className = "", opacity = 0.07 }: { className?: string, opacity?: number }) => (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        viewBox="0 0 800 600" 
        className="w-full h-full" 
        style={{ opacity }}
      >
        <g className="text-cyan-500">
          {/* Hexagonal patterns */}
          {[
            { x: 100, y: 100, size: 30 },
            { x: 300, y: 200, size: 25 },
            { x: 500, y: 150, size: 35 },
            { x: 200, y: 350, size: 20 },
            { x: 600, y: 300, size: 28 },
          ].map((hex, i) => (
            <motion.polygon
              key={i}
              points={`${hex.x},${hex.y-hex.size} ${hex.x+hex.size*0.866},${hex.y-hex.size*0.5} ${hex.x+hex.size*0.866},${hex.y+hex.size*0.5} ${hex.x},${hex.y+hex.size} ${hex.x-hex.size*0.866},${hex.y+hex.size*0.5} ${hex.x-hex.size*0.866},${hex.y-hex.size*0.5}`}
              stroke="currentColor"
              fill="none"
              strokeWidth="1"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ 
                delay: i * 0.2, 
                duration: 2,
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

// Background wrapper component
interface AIBackgroundProps {
  children: React.ReactNode
  pattern?: 'neural' | 'circuit' | 'dataflow' | 'brain' | 'code' | 'geometric'
  className?: string
}

export default function AIBackground({ children, pattern = 'neural', className = "" }: AIBackgroundProps) {
  const renderPattern = () => {
    switch (pattern) {
      case 'neural':
        return <AIDoodles.NeuralNetwork />
      case 'circuit':
        return <AIDoodles.CircuitPattern />
      case 'dataflow':
        return <AIDoodles.DataFlow />
      case 'brain':
        return <AIDoodles.BrainPattern />
      case 'code':
        return <AIDoodles.CodePattern />
      case 'geometric':
        return <AIDoodles.GeometricAI />
      default:
        return <AIDoodles.NeuralNetwork />
    }
  }

  return (
    <div className={`relative ${className}`}>
      {renderPattern()}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
