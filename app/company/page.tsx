'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb,
  Shield,
  Zap,
  Building,
  CheckCircle,
  ArrowRight,
  Star,
  Brain
} from 'lucide-react'

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 shadow-md mb-6">
                <span className="text-lg mr-2">🚀</span>
                <span className="text-sm md:text-base font-bold text-gray-800">You Dream It, We AI It</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ecopyxle</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We're on a mission to democratize AI technology, making advanced artificial intelligence 
                accessible and affordable for businesses of all sizes across India and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To bridge the gap between cutting-edge AI technology and practical business applications, 
                empowering organizations to achieve unprecedented efficiency and growth through intelligent automation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every business, regardless of size, should have access to world-class AI solutions 
                that can transform their operations and drive sustainable success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To become India's leading AI-as-a-Service platform, recognized globally for our innovative 
                solutions and commitment to making AI accessible, ethical, and beneficial for all.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where AI seamlessly integrates into every aspect of business operations, 
                creating a more efficient, sustainable, and prosperous world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Founding Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionary leaders who founded Ecopyxle and are driving our mission to democratize AI technology.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rambabu Pallam",
                designation: "Founder, Board of Directors & Chief Executive Officer (CEO)",
                role: "Strategic Leadership & Vision"
              },
              {
                name: "Chandramouli Pothugunta",
                designation: "Co-Founder, Board of Directors & Chief Marketing Officer (CMO)",
                role: "Marketing & Business Development"
              },
              {
                name: "Maruthi Yarapathineni",
                designation: "Co-Founder, Board of Director & Chief Technology Officer (CTO)",
                role: "Technology & Innovation"
              },
              {
                name: "Vamsi Priya Padala",
                designation: "Co-Founder, Board of Directors & Chief Technical Head (CTH)",
                role: "Technical Architecture & Development"
              }
            ].map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{founder.designation}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{founder.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape our culture, decisions, and relationships.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Customer-Centric",
                description: "Every solution we build starts with understanding our clients' unique challenges and goals."
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "We maintain the highest ethical standards in all our business practices and AI implementations."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible with AI technology."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of teamwork, both within our organization and with our clients."
              },
              {
                icon: Zap,
                title: "Excellence",
                description: "We strive for the highest quality in everything we deliver, from code to customer service."
              },
              {
                icon: Globe,
                title: "Impact",
                description: "We measure our success by the positive impact we create for our clients and society."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We're a diverse team of AI researchers, software engineers, data scientists, and business strategists 
                united by our passion for technology and commitment to excellence.
              </p>


              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">50+ AI experts and engineers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">15+ years combined experience in AI</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">PhD holders in Computer Science and AI</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Industry veterans from top tech companies</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Culture</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Collaborative Environment</h4>
                    <p className="text-gray-600">We foster open communication and knowledge sharing across all teams.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                    <p className="text-gray-600">We invest in our team's growth through training and development programs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Work-Life Balance</h4>
                    <p className="text-gray-600">We believe in maintaining a healthy balance between work and personal life.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ecopyxle by the Numbers</h2>
            <p className="text-xl text-blue-100">Our impact in numbers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1 Lakh+", label: "API Calls/Month", icon: Zap },
              { number: "10", label: "Enterprise Clients", icon: Building },
              { number: "50+", label: "AI Experts", icon: Users },
              { number: "15+", label: "Years Experience", icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <stat.icon className="h-12 w-12 text-white mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Our Journey?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking to transform your business with AI or join our team of innovators, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2">
                Partner with Us
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center gap-2">
                View Careers
                <Users className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}