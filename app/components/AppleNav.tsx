'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import ClientOnly from './ClientOnly'

// Define navigation items outside component to prevent hydration issues
const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'About', href: '/company' },
  { name: 'Contact', href: '/contact' }
] as const

export default function AppleNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      // Handle anchor links - go to homepage first, then scroll to section
      if (window.location.pathname !== '/') {
        window.location.href = href
      } else {
        // Already on homepage, scroll to section
        const targetId = href.substring(2) // Remove '/#' prefix
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    setIsOpen(false) // Close mobile menu
  }

  // Helper function to determine if a link is active
  const isActiveLink = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  // Static fallback for SSR - no animations or dynamic state
  const StaticNav = () => (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full">
            <span className="text-white font-bold text-lg">e</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">Ecopyxle</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors duration-200 font-medium text-sm px-3 py-2 rounded-lg ${
                isActiveLink(item.href)
                  ? 'text-blue-600 bg-blue-50 font-semibold'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  )

  // Dynamic nav for client-side
  const DynamicNav = () => (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full">
              <span className="text-white font-bold text-lg">e</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Ecopyxle</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
                className={`transition-colors duration-200 font-medium text-sm px-3 py-2 rounded-lg ${
                  isActiveLink(item.href)
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  } else {
                    setIsOpen(false)
                  }
                }}
                className={`block py-3 px-6 mx-4 rounded-lg transition-colors duration-200 font-medium ${
                  isActiveLink(item.href)
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  )

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50'
    }`}>
      <ClientOnly fallback={<StaticNav />}>
        <DynamicNav />
      </ClientOnly>
    </nav>
  )
}