'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import WebsiteDoodles from '../components/WebsiteDoodles'
import { DESIGN_SYSTEM } from '../constants/design-system'

const plans = [
  { name: 'Starter', price: '₹8,499', period: '/month', original: '₹12,999', savings: '35% OFF', features: ['10,000 AI API calls', 'Basic NLP & CV', 'Email support (24/7)'] },
  { name: 'Professional', price: '₹24,999', period: '/month', original: '₹39,999', savings: '37% OFF', popular: true, features: ['100,000 AI API calls', 'All AI services', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited API calls', 'Custom AI development', 'Dedicated support'] },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <WebsiteDoodles density="medium">
        <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 shadow-md mb-6">
                <span className="text-lg mr-2">💰</span>
                <span className="text-sm md:text-base font-bold text-gray-800">Transparent Pricing</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transparent</span> Pricing
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed">
                Choose the plan that fits your needs. Start small and scale as you grow, with no hidden fees or surprises.
              </p>
            </motion.div>
          </div>
        </div>
        </section>
      </WebsiteDoodles>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={`ethereal-card ${plan.popular ? 'pricing-card-popular ultra-glow' : 'pricing-card-standard glow-effect'}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <div className="mb-4">
              {plan.original && (
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg text-gray-500 line-through">{plan.original}</span>
                  {plan.savings && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">{plan.savings}</span>
                  )}
                </div>
              )}
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-1">{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />{f}</li>
              ))}
            </ul>
            <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>Get Started</button>
          </motion.div>
        ))}
          </div>
        </div>
      </section>
    </div>
  )
}


