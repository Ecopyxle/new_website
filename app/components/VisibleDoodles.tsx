'use client'

import React from 'react'

interface VisibleDoodlesProps {
  children: React.ReactNode
  className?: string
}

export default function VisibleDoodles({ children, className = "" }: VisibleDoodlesProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Highly Visible Doodles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* AI Chip - Top Left */}
        <div className="absolute top-20 left-20 w-20 h-12 border-2 border-blue-400 rounded opacity-40">
          <div className="absolute -left-2 top-2 w-1 h-2 bg-blue-400"></div>
          <div className="absolute -left-2 top-5 w-1 h-2 bg-blue-400"></div>
          <div className="absolute -left-2 top-8 w-1 h-2 bg-blue-400"></div>
          <div className="absolute -right-2 top-2 w-1 h-2 bg-blue-400"></div>
          <div className="absolute -right-2 top-5 w-1 h-2 bg-blue-400"></div>
          <div className="absolute -right-2 top-8 w-1 h-2 bg-blue-400"></div>
          <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold text-sm">AI</div>
        </div>

        {/* Robot - Top Right */}
        <div className="absolute top-32 right-32 opacity-30">
          {/* Head */}
          <div className="w-8 h-6 border-2 border-blue-400 rounded-sm relative">
            <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-blue-400"></div>
          </div>
          {/* Body */}
          <div className="w-10 h-8 border-2 border-blue-400 rounded mt-1 relative">
            <div className="absolute top-1 left-1 right-1 h-2 border border-blue-400 rounded-sm"></div>
          </div>
          {/* Arms */}
          <div className="absolute top-8 -left-2 w-4 h-2 border-2 border-blue-400 rounded-full"></div>
          <div className="absolute top-8 -right-2 w-4 h-2 border-2 border-blue-400 rounded-full"></div>
          {/* Antenna */}
          <div className="absolute -top-2 left-3 w-0.5 h-2 bg-blue-400"></div>
          <div className="absolute -top-3 left-3 w-1 h-1 bg-blue-400 rounded-full"></div>
        </div>

        {/* Brain - Center Left */}
        <div className="absolute top-1/2 left-16 opacity-25">
          <div className="w-16 h-12 relative">
            <svg viewBox="0 0 60 40" className="w-full h-full">
              <path 
                d="M10 20 Q5 10 15 5 Q25 0 35 5 Q45 0 55 5 Q65 10 55 20 Q50 30 40 25 Q30 35 20 25 Q5 30 10 20 Z" 
                fill="none" 
                stroke="#60a5fa" 
                strokeWidth="2"
              />
              <path d="M15 15 Q20 10 25 15 Q30 20 35 15" fill="none" stroke="#60a5fa" strokeWidth="1"/>
              <path d="M20 25 Q25 20 30 25 Q35 30 40 25" fill="none" stroke="#60a5fa" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        {/* Computer - Bottom Right */}
        <div className="absolute bottom-32 right-20 opacity-35">
          <div className="w-16 h-10 border-2 border-blue-400 rounded relative">
            <div className="absolute inset-1 border border-blue-300 rounded-sm">
              <div className="absolute top-1 left-1 w-6 h-4 border border-blue-300 rounded-sm flex items-center justify-center text-xs text-blue-500 font-bold">AI</div>
            </div>
            {/* Stand */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-2 border-2 border-blue-400"></div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-400"></div>
          </div>
        </div>

        {/* Cloud - Top Center */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-30">
          <div className="relative w-20 h-8">
            <svg viewBox="0 0 80 32" className="w-full h-full">
              <path 
                d="M20 16 Q15 10 20 8 Q25 4 35 8 Q45 4 55 8 Q60 10 55 16 Q50 22 40 18 Q30 22 20 16 Z" 
                fill="none" 
                stroke="#60a5fa" 
                strokeWidth="2"
              />
              <circle cx="25" cy="14" r="2" fill="#60a5fa"/>
              <circle cx="50" cy="14" r="2" fill="#60a5fa"/>
            </svg>
          </div>
        </div>

        {/* Neural Network - Bottom Left */}
        <div className="absolute bottom-40 left-24 opacity-30">
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 64 64" className="w-full h-full">
              {/* Central node */}
              <circle cx="32" cy="32" r="6" fill="none" stroke="#60a5fa" strokeWidth="2"/>
              <circle cx="32" cy="32" r="2" fill="#60a5fa"/>
              
              {/* Connected nodes */}
              <circle cx="12" cy="12" r="3" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
              <circle cx="52" cy="12" r="3" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
              <circle cx="12" cy="52" r="3" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
              <circle cx="52" cy="52" r="3" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
              
              {/* Connection lines */}
              <line x1="15" y1="15" x2="26" y2="26" stroke="#60a5fa" strokeWidth="1"/>
              <line x1="49" y1="15" x2="38" y2="26" stroke="#60a5fa" strokeWidth="1"/>
              <line x1="15" y1="49" x2="26" y2="38" stroke="#60a5fa" strokeWidth="1"/>
              <line x1="49" y1="49" x2="38" y2="38" stroke="#60a5fa" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        {/* Lightbulb - Middle Right */}
        <div className="absolute top-1/2 right-40 transform -translate-y-1/2 opacity-25">
          <div className="relative w-12 h-16">
            <svg viewBox="0 0 48 64" className="w-full h-full">
              <circle cx="24" cy="24" r="12" fill="none" stroke="#60a5fa" strokeWidth="2"/>
              <rect x="18" y="36" width="12" height="6" rx="2" fill="none" stroke="#60a5fa" strokeWidth="2"/>
              <line x1="24" y1="6" x2="24" y2="0" stroke="#60a5fa" strokeWidth="2"/>
              <line x1="38" y1="12" x2="42" y2="8" stroke="#60a5fa" strokeWidth="2"/>
              <line x1="38" y1="36" x2="42" y2="40" stroke="#60a5fa" strokeWidth="2"/>
              <line x1="10" y1="12" x2="6" y2="8" stroke="#60a5fa" strokeWidth="2"/>
              <line x1="10" y1="36" x2="6" y2="40" stroke="#60a5fa" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Chat Bubble - Center */}
        <div className="absolute top-1/3 left-1/3 opacity-25">
          <div className="relative w-16 h-10">
            <svg viewBox="0 0 64 40" className="w-full h-full">
              <ellipse cx="32" cy="20" rx="24" ry="12" fill="none" stroke="#60a5fa" strokeWidth="2"/>
              <path d="M12 28 L6 36 L18 32 Z" fill="none" stroke="#60a5fa" strokeWidth="2"/>
              <circle cx="22" cy="20" r="2" fill="#60a5fa"/>
              <circle cx="32" cy="20" r="2" fill="#60a5fa"/>
              <circle cx="42" cy="20" r="2" fill="#60a5fa"/>
            </svg>
          </div>
        </div>

        {/* Gear - Bottom Center */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-30">
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <path d="M20 4 L24 4 L24 8 L28 8 L28 12 L32 12 L32 16 L28 16 L28 20 L32 20 L32 24 L28 24 L28 28 L24 28 L24 32 L20 32 L20 28 L16 28 L16 24 L12 24 L12 20 L16 20 L16 16 L12 16 L12 12 L16 12 L16 8 L20 8 Z" 
                    fill="none" stroke="#60a5fa" strokeWidth="2"/>
              <circle cx="20" cy="18" r="5" fill="none" stroke="#60a5fa" strokeWidth="2"/>
              <circle cx="20" cy="18" r="2" fill="#60a5fa"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
