'use client'

import React from 'react'

// Simple, always-visible AI doodles
interface SimpleAIDoodlesProps {
  children: React.ReactNode
  className?: string
  opacity?: number
}

export default function SimpleAIDoodles({ children, className = "", opacity = 0.2 }: SimpleAIDoodlesProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Doodle Background - Always visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg 
          viewBox="0 0 800 600" 
          className="w-full h-full" 
          style={{ opacity }}
        >
          <g className="text-blue-500" fill="none" stroke="currentColor" strokeWidth="2">
            {/* AI Chip */}
            <g transform="translate(100, 50)">
              <rect x="0" y="0" width="60" height="40" rx="4" />
              <line x1="-10" y1="10" x2="0" y2="10" />
              <line x1="-10" y1="20" x2="0" y2="20" />
              <line x1="-10" y1="30" x2="0" y2="30" />
              <line x1="60" y1="10" x2="70" y2="10" />
              <line x1="60" y1="20" x2="70" y2="20" />
              <line x1="60" y1="30" x2="70" y2="30" />
              <text x="30" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">AI</text>
            </g>

            {/* Brain */}
            <g transform="translate(300, 100)">
              <path d="M0 20 Q-10 10 0 0 Q10 -5 25 0 Q40 -5 50 0 Q60 10 50 20 Q45 30 35 25 Q25 30 15 25 Q5 30 0 20 Z" />
              <path d="M10 10 Q15 5 20 10 Q25 15 30 10" strokeWidth="1"/>
              <path d="M15 20 Q20 15 25 20 Q30 25 35 20" strokeWidth="1"/>
              <circle cx="0" cy="10" r="2" fill="currentColor"/>
              <circle cx="50" cy="20" r="2" fill="currentColor"/>
            </g>

            {/* Robot */}
            <g transform="translate(500, 150)">
              <rect x="10" y="0" width="20" height="15" rx="2" />
              <circle cx="15" cy="7" r="2" fill="currentColor"/>
              <circle cx="25" cy="7" r="2" fill="currentColor"/>
              <line x1="17" y1="12" x2="23" y2="12" strokeWidth="1"/>
              <rect x="5" y="15" width="30" height="25" rx="3" />
              <rect x="0" y="20" width="10" height="6" rx="3" />
              <rect x="40" y="20" width="10" height="6" rx="3" />
              <line x1="20" y1="0" x2="20" y2="-5" />
              <circle cx="20" cy="-7" r="2" fill="currentColor"/>
            </g>

            {/* Computer */}
            <g transform="translate(200, 300)">
              <rect x="0" y="0" width="50" height="30" rx="2" />
              <rect x="5" y="5" width="40" height="20" rx="1" />
              <rect x="10" y="10" width="15" height="10" rx="1" />
              <text x="17" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">AI</text>
              <rect x="20" y="30" width="10" height="5" />
              <line x1="10" y1="35" x2="40" y2="35" strokeWidth="2"/>
            </g>

            {/* Cloud */}
            <g transform="translate(450, 300)">
              <path d="M10 20 Q5 15 10 10 Q15 5 25 10 Q35 5 45 10 Q50 15 45 20 Q40 25 30 20 Q20 25 10 20 Z" />
              <circle cx="15" cy="15" r="2" fill="currentColor"/>
              <circle cx="40" cy="15" r="2" fill="currentColor"/>
              <line x1="15" y1="15" x2="5" y2="5" strokeDasharray="2,2"/>
              <line x1="40" y1="15" x2="50" y2="5" strokeDasharray="2,2"/>
            </g>

            {/* Neural Network */}
            <g transform="translate(600, 50)">
              <circle cx="20" cy="20" r="6" />
              <circle cx="20" cy="20" r="2" fill="currentColor"/>
              <circle cx="5" cy="5" r="3" />
              <circle cx="35" cy="5" r="3" />
              <circle cx="5" cy="35" r="3" />
              <circle cx="35" cy="35" r="3" />
              <line x1="8" y1="8" x2="17" y2="17" strokeWidth="1"/>
              <line x1="32" y1="8" x2="23" y2="17" strokeWidth="1"/>
              <line x1="8" y1="32" x2="17" y2="23" strokeWidth="1"/>
              <line x1="32" y1="32" x2="23" y2="23" strokeWidth="1"/>
            </g>

            {/* Lightbulb */}
            <g transform="translate(50, 400)">
              <circle cx="15" cy="15" r="10" />
              <rect x="10" y="25" width="10" height="5" rx="1" />
              <line x1="8" y1="27" x2="22" y2="27" strokeWidth="1"/>
              <line x1="15" y1="3" x2="15" y2="-2" strokeWidth="2"/>
              <line x1="27" y1="8" x2="31" y2="4" strokeWidth="2"/>
              <line x1="27" y1="22" x2="31" y2="26" strokeWidth="2"/>
              <line x1="3" y1="8" x2="-1" y2="4" strokeWidth="2"/>
              <line x1="3" y1="22" x2="-1" y2="26" strokeWidth="2"/>
            </g>

            {/* Chat Bubble */}
            <g transform="translate(350, 450)">
              <ellipse cx="20" cy="15" rx="15" ry="10" />
              <path d="M8 22 L3 30 L13 25 Z" />
              <circle cx="13" cy="15" r="1.5" fill="currentColor"/>
              <circle cx="20" cy="15" r="1.5" fill="currentColor"/>
              <circle cx="27" cy="15" r="1.5" fill="currentColor"/>
            </g>

            {/* Gear */}
            <g transform="translate(650, 400)">
              <path d="M15 3 L18 3 L18 6 L21 6 L21 9 L24 9 L24 12 L21 12 L21 15 L24 15 L24 18 L21 18 L21 21 L18 21 L18 24 L15 24 L15 21 L12 21 L12 18 L9 18 L9 15 L12 15 L12 12 L9 12 L9 9 L12 9 L12 6 L15 6 Z" />
              <circle cx="16.5" cy="13.5" r="4" />
              <circle cx="16.5" cy="13.5" r="1.5" fill="currentColor"/>
            </g>

            {/* Book */}
            <g transform="translate(150, 500)">
              <rect x="0" y="0" width="25" height="20" rx="1" />
              <line x1="12" y1="0" x2="12" y2="20" strokeWidth="1"/>
              <line x1="3" y1="5" x2="10" y2="5" strokeWidth="1"/>
              <line x1="3" y1="8" x2="9" y2="8" strokeWidth="1"/>
              <line x1="3" y1="11" x2="10" y2="11" strokeWidth="1"/>
              <line x1="15" y1="5" x2="22" y2="5" strokeWidth="1"/>
              <line x1="15" y1="8" x2="20" y2="8" strokeWidth="1"/>
              <line x1="15" y1="11" x2="22" y2="11" strokeWidth="1"/>
            </g>

            {/* Search */}
            <g transform="translate(550, 500)">
              <circle cx="12" cy="12" r="8" />
              <line x1="18" y1="18" x2="25" y2="25" strokeWidth="3"/>
              <circle cx="25" cy="25" r="2" />
              <circle cx="12" cy="12" r="4" strokeDasharray="1,1"/>
            </g>
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
