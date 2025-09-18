'use client'

import React from 'react'

// Doodles specifically positioned behind text content
interface TextDoodlesProps {
  children: React.ReactNode
  className?: string
}

export default function TextDoodles({ children, className = "" }: TextDoodlesProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Doodles positioned behind text content only */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* AI Chip - Behind headline */}
        <div className="absolute top-32 left-12" style={{ opacity: 0.25 }}>
          <svg width="120" height="75" viewBox="0 0 80 50">
            <g className="text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="10" y="10" width="60" height="30" rx="4" />
              <line x1="0" y1="18" x2="10" y2="18" />
              <line x1="0" y1="25" x2="10" y2="25" />
              <line x1="0" y1="32" x2="10" y2="32" />
              <line x1="70" y1="18" x2="80" y2="18" />
              <line x1="70" y1="25" x2="80" y2="25" />
              <line x1="70" y1="32" x2="80" y2="32" />
              <text x="40" y="30" textAnchor="middle" fontSize="12" fontWeight="normal" fill="currentColor">AI</text>
            </g>
          </svg>
        </div>

        {/* Brain - Behind subheading */}
        <div className="absolute top-48 right-16" style={{ opacity: 0.25 }}>
          <svg width="100" height="75" viewBox="0 0 70 50">
            <g className="text-purple-500" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 25 Q5 15 15 10 Q25 5 35 10 Q45 5 55 10 Q65 15 55 25 Q50 35 40 30 Q30 40 20 30 Q5 35 10 25 Z" />
              <path d="M15 20 Q20 15 25 20 Q30 25 35 20" strokeWidth="1"/>
              <path d="M20 30 Q25 25 30 30 Q35 35 40 30" strokeWidth="1"/>
              <circle cx="10" cy="20" r="2" fill="currentColor"/>
              <circle cx="55" cy="25" r="2" fill="currentColor"/>
            </g>
          </svg>
        </div>

        {/* Robot - Behind description */}
        <div className="absolute top-64 left-20" style={{ opacity: 0.25 }}>
          <svg width="90" height="120" viewBox="0 0 60 80">
            <g className="text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5">
              {/* Head */}
              <rect x="20" y="5" width="20" height="15" rx="2" />
              <circle cx="25" cy="12" r="2" fill="currentColor"/>
              <circle cx="35" cy="12" r="2" fill="currentColor"/>
              <line x1="27" y1="17" x2="33" y2="17" strokeWidth="1"/>
              
              {/* Body */}
              <rect x="15" y="20" width="30" height="30" rx="3" />
              <rect x="20" y="30" width="20" height="6" rx="2" />
              
              {/* Arms */}
              <rect x="5" y="25" width="10" height="6" rx="3" />
              <rect x="45" y="25" width="10" height="6" rx="3" />
              
              {/* Legs */}
              <rect x="20" y="50" width="6" height="15" rx="3" />
              <rect x="34" y="50" width="6" height="15" rx="3" />
              
              {/* Antenna */}
              <line x1="30" y1="5" x2="30" y2="0" />
              <circle cx="30" cy="-2" r="2" fill="currentColor"/>
            </g>
          </svg>
        </div>

        {/* Computer - Behind button area */}
        <div className="absolute top-80 right-24" style={{ opacity: 0.25 }}>
          <svg width="120" height="90" viewBox="0 0 80 60">
            <g className="text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="10" y="10" width="60" height="35" rx="3" />
              <rect x="15" y="15" width="50" height="25" rx="2" />
              <rect x="20" y="20" width="20" height="12" rx="2" />
              <text x="30" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">AI</text>
              <rect x="35" y="45" width="10" height="6" />
              <line x1="25" y1="51" x2="55" y2="51" strokeWidth="3"/>
              
              {/* Code lines */}
              <line x1="45" y1="22" x2="60" y2="22" strokeWidth="1"/>
              <line x1="45" y1="26" x2="55" y2="26" strokeWidth="1"/>
              <line x1="45" y1="30" x2="58" y2="30" strokeWidth="1"/>
            </g>
          </svg>
        </div>

        {/* Neural Network - Behind features */}
        <div className="absolute bottom-32 left-32" style={{ opacity: 0.25 }}>
          <svg width="120" height="120" viewBox="0 0 80 80">
            <g className="text-indigo-500" fill="none" stroke="currentColor">
              {/* Central node */}
              <circle cx="40" cy="40" r="8" strokeWidth="2"/>
              <circle cx="40" cy="40" r="3" fill="currentColor"/>
              
              {/* Connected nodes */}
              <circle cx="15" cy="15" r="5" strokeWidth="1.5"/>
              <circle cx="65" cy="15" r="5" strokeWidth="1.5"/>
              <circle cx="15" cy="65" r="5" strokeWidth="1.5"/>
              <circle cx="65" cy="65" r="5" strokeWidth="1.5"/>
              
              {/* Connection lines */}
              <line x1="20" y1="20" x2="32" y2="32" strokeWidth="1"/>
              <line x1="60" y1="20" x2="48" y2="32" strokeWidth="1"/>
              <line x1="20" y1="60" x2="32" y2="48" strokeWidth="1"/>
              <line x1="60" y1="60" x2="48" y2="48" strokeWidth="1"/>
              
              <circle cx="15" cy="15" r="1" fill="currentColor"/>
              <circle cx="65" cy="15" r="1" fill="currentColor"/>
              <circle cx="15" cy="65" r="1" fill="currentColor"/>
              <circle cx="65" cy="65" r="1" fill="currentColor"/>
            </g>
          </svg>
        </div>

        {/* Cloud - Behind stats */}
        <div className="absolute bottom-16 right-40" style={{ opacity: 0.25 }}>
          <svg width="140" height="90" viewBox="0 0 100 60">
            <g className="text-cyan-500" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 30 Q15 20 25 15 Q35 10 50 15 Q65 10 75 15 Q85 20 80 30 Q75 40 60 35 Q40 45 20 30 Z" />
              <circle cx="30" cy="25" r="3" fill="currentColor"/>
              <circle cx="70" cy="25" r="3" fill="currentColor"/>
              <line x1="30" y1="25" x2="20" y2="15" strokeDasharray="3,3"/>
              <line x1="70" y1="25" x2="80" y2="15" strokeDasharray="3,3"/>
              <line x1="50" y1="40" x2="50" y2="50" strokeDasharray="3,3"/>
            </g>
          </svg>
        </div>

        {/* Lightbulb - Behind tagline */}
        <div className="absolute top-20 right-32" style={{ opacity: 0.25 }}>
          <svg width="75" height="105" viewBox="0 0 50 70">
            <g className="text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="25" cy="25" r="15" />
              <rect x="18" y="40" width="14" height="8" rx="2" />
              <line x1="16" y1="44" x2="34" y2="44" strokeWidth="1"/>
              <line x1="16" y1="46" x2="34" y2="46" strokeWidth="1"/>
              
              {/* Light rays */}
              <line x1="25" y1="5" x2="25" y2="0" strokeWidth="2"/>
              <line x1="42" y1="12" x2="47" y2="7" strokeWidth="2"/>
              <line x1="42" y1="38" x2="47" y2="43" strokeWidth="2"/>
              <line x1="8" y1="12" x2="3" y2="7" strokeWidth="2"/>
              <line x1="8" y1="38" x2="3" y2="43" strokeWidth="2"/>
              
              {/* Filament */}
              <path d="M18 20 Q25 15 32 20 Q25 25 18 20" strokeWidth="1"/>
            </g>
          </svg>
        </div>

        {/* Chat Bubble - Behind CTA */}
        <div className="absolute bottom-40 left-16" style={{ opacity: 0.25 }}>
          <svg width="130" height="90" viewBox="0 0 90 60">
            <g className="text-pink-500" fill="none" stroke="currentColor" strokeWidth="1.5">
              <ellipse cx="45" cy="25" rx="30" ry="18" />
              <path d="M20 40 L12 52 L28 45 Z" />
              <circle cx="30" cy="25" r="3" fill="currentColor"/>
              <circle cx="45" cy="25" r="3" fill="currentColor"/>
              <circle cx="60" cy="25" r="3" fill="currentColor"/>
            </g>
          </svg>
        </div>

      </div>

      {/* Content */}
      {children}
    </div>
  )
}
