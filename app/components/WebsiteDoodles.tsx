'use client'

import React from 'react'

// Comprehensive doodle system for the entire website
interface WebsiteDoodlesProps {
  children: React.ReactNode
  className?: string
  density?: 'light' | 'medium' | 'heavy'
}

export default function WebsiteDoodles({ children, className = "", density = 'medium' }: WebsiteDoodlesProps) {
  const doodleCount = density === 'light' ? 12 : density === 'medium' ? 18 : 25
  
  // Generate random positions for doodles
  const generateDoodles = () => {
    const positions = []
    for (let i = 0; i < doodleCount; i++) {
      positions.push({
        top: Math.random() * 100, // 0-100% from top (full height)
        left: Math.random() * 100, // 0-100% from left (full width)
        rotation: Math.random() * 30 - 15, // -15 to +15 degrees
        delay: i * 0.5
      })
    }
    return positions
  }

  const doodles = generateDoodles()

  const doodleTypes = [
    // AI Chip
    (pos: any, index: number) => (
      <div key={`chip-${index}`} className="absolute" style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: `rotate(${pos.rotation}deg)`, opacity: 0.25 }}>
        <svg width="120" height="72" viewBox="0 0 80 50">
          <g className="text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="10" y="10" width="60" height="30" rx="4" />
            <line x1="0" y1="18" x2="10" y2="18" />
            <line x1="0" y1="25" x2="10" y2="25" />
            <line x1="0" y1="32" x2="10" y2="32" />
            <line x1="70" y1="18" x2="80" y2="18" />
            <line x1="70" y1="25" x2="80" y2="25" />
            <line x1="70" y1="32" x2="80" y2="32" />
            <text x="40" y="30" textAnchor="middle" fontSize="10" fontWeight="normal" fill="currentColor">AI</text>
          </g>
        </svg>
      </div>
    ),

    // Brain
    (pos: any, index: number) => (
      <div key={`brain-${index}`} className="absolute" style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: `rotate(${pos.rotation}deg)`, opacity: 0.28 }}>
        <svg width="108" height="78" viewBox="0 0 70 50">
          <g className="text-purple-500" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M10 25 Q5 15 15 10 Q25 5 35 10 Q45 5 55 10 Q65 15 55 25 Q50 35 40 30 Q30 40 20 30 Q5 35 10 25 Z" />
            <path d="M15 20 Q20 15 25 20 Q30 25 35 20" strokeWidth="1"/>
            <path d="M20 30 Q25 25 30 30 Q35 35 40 30" strokeWidth="1"/>
            <circle cx="10" cy="20" r="1.5" fill="currentColor"/>
            <circle cx="55" cy="25" r="1.5" fill="currentColor"/>
          </g>
        </svg>
      </div>
    ),

    // Robot
    (pos: any, index: number) => (
      <div key={`robot-${index}`} className="absolute" style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: `rotate(${pos.rotation}deg)`, opacity: 0.25 }}>
        <svg width="96" height="120" viewBox="0 0 60 80">
          <g className="text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="20" y="5" width="20" height="15" rx="2" />
            <circle cx="25" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="35" cy="12" r="1.5" fill="currentColor"/>
            <line x1="27" y1="17" x2="33" y2="17" strokeWidth="1"/>
            <rect x="15" y="20" width="30" height="30" rx="3" />
            <rect x="20" y="30" width="20" height="6" rx="2" />
            <rect x="5" y="25" width="10" height="6" rx="3" />
            <rect x="45" y="25" width="10" height="6" rx="3" />
            <rect x="20" y="50" width="6" height="15" rx="3" />
            <rect x="34" y="50" width="6" height="15" rx="3" />
            <line x1="30" y1="5" x2="30" y2="0" />
            <circle cx="30" cy="-2" r="1.5" fill="currentColor"/>
          </g>
        </svg>
      </div>
    ),

    // Computer
    (pos: any, index: number) => (
      <div key={`computer-${index}`} className="absolute" style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: `rotate(${pos.rotation}deg)`, opacity: 0.25 }}>
        <svg width="120" height="90" viewBox="0 0 80 60">
          <g className="text-green-500" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="10" y="10" width="60" height="35" rx="3" />
            <rect x="15" y="15" width="50" height="25" rx="2" />
            <rect x="20" y="20" width="20" height="12" rx="2" />
            <text x="30" y="28" textAnchor="middle" fontSize="8" fontWeight="normal" fill="currentColor">AI</text>
            <rect x="35" y="45" width="10" height="6" />
            <line x1="25" y1="51" x2="55" y2="51" strokeWidth="2"/>
            <line x1="45" y1="22" x2="60" y2="22" strokeWidth="1"/>
            <line x1="45" y1="26" x2="55" y2="26" strokeWidth="1"/>
            <line x1="45" y1="30" x2="58" y2="30" strokeWidth="1"/>
          </g>
        </svg>
      </div>
    ),

    // Cloud
    (pos: any, index: number) => (
      <div key={`cloud-${index}`} className="absolute" style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: `rotate(${pos.rotation}deg)`, opacity: 0.27 }}>
        <svg width="144" height="90" viewBox="0 0 100 60">
          <g className="text-cyan-500" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M20 30 Q15 20 25 15 Q35 10 50 15 Q65 10 75 15 Q85 20 80 30 Q75 40 60 35 Q40 45 20 30 Z" />
            <circle cx="30" cy="25" r="2" fill="currentColor"/>
            <circle cx="70" cy="25" r="2" fill="currentColor"/>
            <line x1="30" y1="25" x2="20" y2="15" strokeDasharray="2,2"/>
            <line x1="70" y1="25" x2="80" y2="15" strokeDasharray="2,2"/>
            <line x1="50" y1="40" x2="50" y2="50" strokeDasharray="2,2"/>
          </g>
        </svg>
      </div>
    ),

    // Neural Network
    (pos: any, index: number) => (
      <div key={`network-${index}`} className="absolute" style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: `rotate(${pos.rotation}deg)`, opacity: 0.26 }}>
        <svg width="100" height="100" viewBox="0 0 80 80">
          <g className="text-indigo-500" fill="none" stroke="currentColor">
            <circle cx="40" cy="40" r="6" strokeWidth="1.5"/>
            <circle cx="40" cy="40" r="2" fill="currentColor"/>
            <circle cx="15" cy="15" r="4" strokeWidth="1"/>
            <circle cx="65" cy="15" r="4" strokeWidth="1"/>
            <circle cx="15" cy="65" r="4" strokeWidth="1"/>
            <circle cx="65" cy="65" r="4" strokeWidth="1"/>
            <line x1="19" y1="19" x2="34" y2="34" strokeWidth="1"/>
            <line x1="61" y1="19" x2="46" y2="34" strokeWidth="1"/>
            <line x1="19" y1="61" x2="34" y2="46" strokeWidth="1"/>
            <line x1="61" y1="61" x2="46" y2="46" strokeWidth="1"/>
          </g>
        </svg>
      </div>
    ),

    // Lightbulb
    (pos: any, index: number) => (
      <div key={`lightbulb-${index}`} className="absolute" style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: `rotate(${pos.rotation}deg)`, opacity: 0.25 }}>
        <svg width="70" height="90" viewBox="0 0 50 70">
          <g className="text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="25" cy="25" r="12" />
            <rect x="18" y="37" width="14" height="6" rx="2" />
            <line x1="16" y1="40" x2="34" y2="40" strokeWidth="1"/>
            <line x1="25" y1="8" x2="25" y2="3" strokeWidth="1.5"/>
            <line x1="38" y1="15" x2="42" y2="11" strokeWidth="1.5"/>
            <line x1="38" y1="35" x2="42" y2="39" strokeWidth="1.5"/>
            <line x1="12" y1="15" x2="8" y2="11" strokeWidth="1.5"/>
            <line x1="12" y1="35" x2="8" y2="39" strokeWidth="1.5"/>
          </g>
        </svg>
      </div>
    ),

    // Chat Bubble
    (pos: any, index: number) => (
      <div key={`chat-${index}`} className="absolute" style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: `rotate(${pos.rotation}deg)`, opacity: 0.26 }}>
        <svg width="110" height="70" viewBox="0 0 90 60">
          <g className="text-pink-500" fill="none" stroke="currentColor" strokeWidth="1.2">
            <ellipse cx="45" cy="25" rx="25" ry="15" />
            <path d="M25 35 L18 45 L32 40 Z" />
            <circle cx="35" cy="25" r="2" fill="currentColor"/>
            <circle cx="45" cy="25" r="2" fill="currentColor"/>
            <circle cx="55" cy="25" r="2" fill="currentColor"/>
          </g>
        </svg>
      </div>
    ),

    // Book
    (pos: any, index: number) => (
      <div key={`book-${index}`} className="absolute" style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: `rotate(${pos.rotation}deg)`, opacity: 0.27 }}>
        <svg width="80" height="60" viewBox="0 0 60 45">
          <g className="text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="10" y="10" width="40" height="25" rx="2" />
            <line x1="30" y1="10" x2="30" y2="35" strokeWidth="1"/>
            <line x1="15" y1="18" x2="27" y2="18" strokeWidth="1"/>
            <line x1="15" y1="22" x2="25" y2="22" strokeWidth="1"/>
            <line x1="15" y1="26" x2="27" y2="26" strokeWidth="1"/>
            <line x1="33" y1="18" x2="45" y2="18" strokeWidth="1"/>
            <line x1="33" y1="22" x2="42" y2="22" strokeWidth="1"/>
            <line x1="33" y1="26" x2="45" y2="26" strokeWidth="1"/>
          </g>
        </svg>
      </div>
    ),

    // Search/Magnifying Glass
    (pos: any, index: number) => (
      <div key={`search-${index}`} className="absolute" style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: `rotate(${pos.rotation}deg)`, opacity: 0.28 }}>
        <svg width="70" height="70" viewBox="0 0 50 50">
          <g className="text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="20" cy="20" r="12" />
            <line x1="30" y1="30" x2="42" y2="42" strokeWidth="2"/>
            <circle cx="42" cy="42" r="2" />
            <circle cx="20" cy="20" r="6" strokeDasharray="1,1"/>
          </g>
        </svg>
      </div>
    )
  ]

  return (
    <div className={`relative ${className}`}>
      {/* Scattered Doodles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {doodles.map((pos, index) => {
          const DoodleComponent = doodleTypes[index % doodleTypes.length]
          return DoodleComponent(pos, index)
        })}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
