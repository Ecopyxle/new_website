'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin, 
  Github,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Zap
} from 'lucide-react'
import { DESIGN_SYSTEM } from '../constants/design-system'

export default function AppleFooter() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        'EGS AI - Education Grading System',
        'Advanced Classroom Engagement ACE AI',
        'AI Database Agents',
        'AI Custom LLM Building'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'Press',
        'Contact'
      ]
    },
    {
      title: 'Legal',
      links: [
        'Privacy Policy',
        'Terms of Service',
        'Security Center',
        'Compliance',
        'Cookie Policy',
        'GDPR'
      ]
    }
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full">
                  <span className="text-white font-bold text-lg">e</span>
                </div>
                <span className="text-2xl md:text-3xl font-bold leading-tight font-semibold">Ecopyxle</span>
              </div>
              <p className={`${DESIGN_SYSTEM.typography.body.base} text-gray-400 mb-6 leading-relaxed`}>
                Transforming businesses with cutting-edge AI solutions. 
                Your trusted partner in the AI revolution.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 ${DESIGN_SYSTEM.borderRadius.base} flex items-center justify-center hover:bg-gray-700 ${DESIGN_SYSTEM.transitions.base}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`${DESIGN_SYSTEM.typography.h5} font-semibold mb-4`}>{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`text-gray-400 hover:text-white ${DESIGN_SYSTEM.transitions.base} ${DESIGN_SYSTEM.typography.body.sm}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className={`text-gray-400 ${DESIGN_SYSTEM.typography.body.sm}`}>
              © 2024 Ecopyxle. All rights reserved.
            </div>
            <div className={`flex flex-wrap gap-6 ${DESIGN_SYSTEM.typography.body.sm}`}>
              <a href="/legal/privacy" className={`text-gray-400 hover:text-white ${DESIGN_SYSTEM.transitions.base}`}>
                Privacy Policy
              </a>
              <a href="/legal/terms" className={`text-gray-400 hover:text-white ${DESIGN_SYSTEM.transitions.base}`}>
                Terms of Service
              </a>
              <a href="#" className={`text-gray-400 hover:text-white ${DESIGN_SYSTEM.transitions.base}`}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
