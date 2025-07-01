/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'ambient-pulse': 'ambientPulse 8s ease-in-out infinite',
        'ambient-pulse-dark': 'ambientPulseDark 10s ease-in-out infinite',
        'float-particle': 'floatParticle 15s infinite linear',
        'gentle-glow': 'gentleGlow 4s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'aurora-flow': 'auroraFlow 12s ease-in-out infinite',
        'stellar-float': 'stellarFloat 20s infinite linear',
        'orb-float': 'orbFloat 8s ease-in-out infinite',
        'ultra-glow': 'ultraGlow 3s ease-in-out infinite alternate',
        'cosmic-pulse': 'cosmicPulse 10s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ambientPulse: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1) rotate(0deg)'
          },
          '50%': { 
            opacity: '0.6',
            transform: 'scale(1.1) rotate(180deg)'
          },
        },
        ambientPulseDark: {
          '0%, 100%': { 
            opacity: '0.2',
            transform: 'scale(1) rotate(0deg)'
          },
          '50%': { 
            opacity: '0.4',
            transform: 'scale(1.2) rotate(-180deg)'
          },
        },
        floatParticle: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0px) scale(0)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1',
            transform: 'translateY(90vh) translateX(10px) scale(1)'
          },
          '90%': { 
            opacity: '1',
            transform: 'translateY(10vh) translateX(-10px) scale(1)'
          },
          '100%': { 
            transform: 'translateY(-10vh) translateX(0px) scale(0)',
            opacity: '0'
          },
        },
        gentleGlow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2), 0 0 80px rgba(59, 130, 246, 0.1)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.3), 0 0 120px rgba(139, 92, 246, 0.2)'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        auroraFlow: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'translateX(-20px) translateY(-20px) scale(1)',
          },
          '33%': { 
            opacity: '0.6',
            transform: 'translateX(20px) translateY(-10px) scale(1.1)',
          },
          '66%': { 
            opacity: '0.4',
            transform: 'translateX(-10px) translateY(20px) scale(0.9)',
          },
        },
        stellarFloat: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0px) scale(0) rotate(0deg)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1',
            transform: 'translateY(90vh) translateX(20px) scale(1) rotate(45deg)'
          },
          '50%': { 
            transform: 'translateY(50vh) translateX(-20px) scale(1.2) rotate(180deg)'
          },
          '90%': { 
            opacity: '1',
            transform: 'translateY(10vh) translateX(10px) scale(0.8) rotate(315deg)'
          },
          '100%': { 
            transform: 'translateY(-10vh) translateX(0px) scale(0) rotate(360deg)',
            opacity: '0'
          },
        },
        orbFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) scale(1)',
            opacity: '0.6'
          },
          '25%': { 
            transform: 'translateY(-30px) translateX(20px) scale(1.1)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'translateY(-10px) translateX(-15px) scale(0.9)',
            opacity: '0.7'
          },
          '75%': { 
            transform: 'translateY(-40px) translateX(10px) scale(1.05)',
            opacity: '0.9'
          },
        },
        ultraGlow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.2)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.4), 0 0 120px rgba(59, 130, 246, 0.3)'
          },
        },
        cosmicPulse: {
          '0%, 100%': { 
            opacity: '0.2',
            transform: 'scale(1) rotate(0deg)'
          },
          '33%': { 
            opacity: '0.4',
            transform: 'scale(1.1) rotate(120deg)'
          },
          '66%': { 
            opacity: '0.3',
            transform: 'scale(0.9) rotate(240deg)'
          },
        },
      },
    },
  },
  plugins: [],
} 