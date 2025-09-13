"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const plans = [
  { name: 'Starter', price: '₹8,499', period: '/month', original: '₹12,999', savings: '35% OFF', features: ['10,000 AI API calls', 'Basic NLP & CV', 'Email support (24/7)'] },
  { name: 'Professional', price: '₹24,999', period: '/month', original: '₹39,999', savings: '37% OFF', popular: true, features: ['100,000 AI API calls', 'All AI services', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited API calls', 'Custom AI development', 'Dedicated support'] },
]

export default function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600">Choose the plan that fits your needs.</p>
      </div>
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
    </main>
  )
}


