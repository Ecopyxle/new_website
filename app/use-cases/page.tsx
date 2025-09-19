'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  GraduationCap, 
  Users, 
  Database, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
  Calculator,
  Mail
} from 'lucide-react'
import WebsiteDoodles from '../components/WebsiteDoodles'
import { DESIGN_SYSTEM } from '../constants/design-system'

export default function UseCasesPage() {
  const [selectedStudents, setSelectedStudents] = useState(100)
  
  const calculateEGSPrice = (students: number) => {
    return students * 3650
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const caseStudies = [
    {
      icon: GraduationCap,
      title: "EGS AI – Save 17 Hours Per Week on Grading",
      description: "Give teachers their time back while delivering fairer, more consistent grading than humanly possible.",
      benefit: "Cut grading time by 85% and eliminate bias—teachers focus on teaching, not paperwork",
      features: [
        "Grade essays instantly with AI precision",
        "Eliminate unconscious grading bias forever",
        "Generate detailed feedback automatically",
        "Support any language your students write in"
      ],
      testimonial: {
        quote: "EGS AI transformed our grading process completely. What used to take our faculty 20 hours per week now takes just 3 hours, and the consistency is remarkable.",
        author: "Dr. Sarah Mitchell",
        role: "Academic Director",
        company: "Springfield University"
      },
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      stats: { metric: "85%", label: "Time Saved" },
      pricing: {
        type: "calculator",
        basePrice: 3650,
        unit: "student/year",
        description: "₹3,650 per student per year"
      }
    },
    {
      icon: Users,
      title: "ACE AI – Boost Student Success by 60%",
      description: "Turn struggling students into engaged learners with AI that spots problems before they become failures.",
      benefit: "Increase participation by 60% and catch at-risk students before they fall behind",
      features: [
        "Spot disengaged students in real-time",
        "Create personalized learning journeys",
        "Alert teachers when students need help",
        "Optimize content for maximum engagement"
      ],
      testimonial: {
        quote: "ACE AI helped us identify disengaged students early and provide targeted support. Our retention rates improved by 40% in the first semester.",
        author: "Prof. Michael Chen",
        role: "Dean of Student Success",
        company: "Tech Valley Institute"
      },
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      stats: { metric: "60%", label: "Engagement Boost" },
      pricing: {
        type: "contact",
        description: "Custom pricing based on your requirements"
      }
    },
    {
      icon: Database,
      title: "AI Database Agents – Get Insights 70% Faster",
      description: "Turn your analysts into data wizards—they ask questions in plain English, AI delivers the answers.",
      benefit: "Accelerate insights by 70% while eliminating the need for SQL expertise",
      features: [
        "Ask questions in plain English, get SQL results",
        "Discover hidden patterns automatically",
        "Optimize queries for lightning-fast performance",
        "Stream insights in real-time to your dashboard"
      ],
      testimonial: {
        quote: "Our business analysts can now get complex insights without writing a single SQL query. The AI agents understand exactly what we need.",
        author: "Jennifer Rodriguez",
        role: "Head of Analytics",
        company: "DataFlow Solutions"
      },
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      stats: { metric: "70%", label: "Faster Insights" },
      pricing: {
        type: "contact",
        description: "Enterprise pricing available on request"
      }
    },
    {
      icon: Brain,
      title: "Custom LLM – Your AI Expert in Any Domain",
      description: "Get an AI that speaks your industry's language fluently—whether it's legal, medical, or financial jargon.",
      benefit: "Deploy domain-specific AI with 95% accuracy that understands your business like a veteran employee",
      features: [
        "Build AI that masters your industry terminology",
        "Train on your proprietary knowledge base",
        "Fine-tune responses for your business context",
        "Scale from prototype to enterprise instantly"
      ],
      testimonial: {
        quote: "The custom LLM we built with Ecopyxle understands our legal terminology perfectly. It's like having a specialized AI lawyer on our team 24/7.",
        author: "David Thompson",
        role: "Managing Partner",
        company: "Thompson & Associates Law"
      },
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      stats: { metric: "95%", label: "Domain Accuracy" },
      pricing: {
        type: "contact",
        description: "Tailored pricing for custom AI development"
      }
    }
  ]

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
                <span className="text-lg mr-2">🏆</span>
                <span className="text-sm md:text-base font-bold text-gray-800">Success Stories</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Watch AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transform Businesses</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed">
                Real companies, real results, real ROI. See how we've helped businesses like yours cut costs, 
                boost efficiency, and unlock new revenue streams with AI that actually works.
              </p>
            </motion.div>
          </div>
        </div>
        </section>
      </WebsiteDoodles>

      {/* Case Studies Grid */}
      <WebsiteDoodles density="medium">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br ${caseStudy.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group hover:-translate-y-1 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform rotate-12 scale-150"></div>
                </div>
                
                {/* Header with Icon and Stats */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${caseStudy.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <caseStudy.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                      {caseStudy.stats.metric}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{caseStudy.stats.label}</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {caseStudy.description}
                  </p>
                  
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${caseStudy.color} bg-opacity-10 mb-6`}>
                    <p className="text-sm font-semibold text-gray-800">
                      💡 {caseStudy.benefit}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {caseStudy.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Pricing:</h4>
                    {caseStudy.pricing.type === 'calculator' ? (
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                        <div className="flex items-center gap-2 mb-3">
                          <Calculator className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-gray-800">Price Calculator</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">{caseStudy.pricing.description}</p>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs font-medium text-gray-700 block mb-2">Number of Students:</label>
                            <div className="flex gap-2 mb-2">
                              {[100, 500, 1000].map((count) => (
                                <button
                                  key={count}
                                  onClick={() => setSelectedStudents(count)}
                                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                                    selectedStudents === count
                                      ? `bg-gradient-to-r ${caseStudy.color} text-white shadow-md`
                                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                  }`}
                                >
                                  {count}
                                </button>
                              ))}
                            </div>
                            <input
                              type="range"
                              min="100"
                              max="2000"
                              step="100"
                              value={selectedStudents}
                              onChange={(e) => setSelectedStudents(parseInt(e.target.value))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              style={{
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((selectedStudents - 100) / (2000 - 100)) * 100}%, #e5e7eb ${((selectedStudents - 100) / (2000 - 100)) * 100}%, #e5e7eb 100%)`
                              }}
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>100</span>
                              <span className="font-medium">{selectedStudents} students</span>
                              <span>2000</span>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-200">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-900">
                                {formatPrice(calculateEGSPrice(selectedStudents))}
                              </div>
                              <div className="text-xs text-blue-700">per year for {selectedStudents} students</div>
                              <div className="text-xs text-blue-600 mt-1">
                                ≈ {formatPrice(calculateEGSPrice(selectedStudents) / 12)} per month
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="h-4 w-4 text-purple-600" />
                          <span className="text-sm font-medium text-gray-800">Get in Touch</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">{caseStudy.pricing.description}</p>
                        <button className={`w-full bg-gradient-to-r ${caseStudy.color} text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                          <Mail className="h-4 w-4" />
                          Contact for Pricing
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 mb-6">
                    <div className="flex items-start gap-3">
                      <Quote className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 italic mb-3 leading-relaxed">
                          "{caseStudy.testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{caseStudy.testimonial.role}</div>
                          <div className="text-sm font-medium text-gray-700">{caseStudy.testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${caseStudy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              </motion.div>
            ))}
          </div>
        </div>
        </section>
      </WebsiteDoodles>
    </div>
  )
}
