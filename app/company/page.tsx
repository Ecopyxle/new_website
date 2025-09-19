'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Users, 
  Target, 
  Globe, 
  Heart, 
  Lightbulb,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Award,
  Lock,
  FileCheck,
  Eye,
  Brain,
  Code,
  BarChart3,
  Briefcase
} from 'lucide-react'
import WebsiteDoodles from '../components/WebsiteDoodles'
import { DESIGN_SYSTEM } from '../constants/design-system'

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <WebsiteDoodles density="heavy">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ecopyxle</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed">
                Ecopyxle is redefining the way teachers and students experience learning. We help educators focus on what truly matters — 
                content delivery, student engagement, and mentoring — by removing repetitive grading tasks through AI-powered solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      </WebsiteDoodles>

      {/* Mission Statement & Company Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mission Statement Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 shadow-md mb-6">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-sm md:text-base font-bold text-gray-800">Mission & Values</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Purpose & Principles</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We exist to democratize AI and make it accessible to every business, regardless of size or technical expertise. 
                Our mission drives everything we do, from product development to customer relationships.
              </p>
            </motion.div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Make AI simple.</strong> Turn complex AI into easy-to-use tools that work for everyone.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Save time and money.</strong> Deploy AI solutions in days, not months, at a fraction of the cost.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Deliver real results.</strong> Focus on solutions that actually improve your business performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>AI for everyone.</strong> Every business should have access to powerful AI tools, regardless of size or budget.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Work together.</strong> AI should help people do their jobs better, not replace them.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Build responsibly.</strong> Create AI that's fair, transparent, and makes the world better.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Company Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 border border-gray-200"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Strategic Goals</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These ambitious goals guide our roadmap and measure our success in transforming the AI landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Global Reach</h4>
                <p className="text-sm text-gray-600">Serve 10,000+ businesses worldwide by 2026</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Innovation Leadership</h4>
                <p className="text-sm text-gray-600">Launch 50+ AI solutions across industries</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Impact Focus</h4>
                <p className="text-sm text-gray-600">Generate $1B+ in client value creation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Educational Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 shadow-md mb-6">
                <Lightbulb className="w-5 h-5 mr-2 text-emerald-600" />
                <span className="text-sm md:text-base font-bold text-gray-800">Educational Innovation</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transforming Education with AI</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We're revolutionizing the educational landscape by empowering teachers with AI-powered tools 
                that enhance learning outcomes and create personalized educational experiences.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Core Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">AI-Powered Educational Tools</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Exam Paper Correction</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Automated AI-powered correction of exam papers with precision and consistency, 
                      eliminating human bias and reducing grading time by up to 90%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Assignment Evaluation</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive assessment of assignments with detailed rubric-based evaluation, 
                      ensuring fair and thorough feedback for every student submission.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Plagiarism Detection</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced plagiarism detection system that maintains academic integrity 
                      while helping students understand proper citation and original thinking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Homework Correction</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Instant homework correction with detailed explanations, allowing students 
                      to learn from mistakes and teachers to track progress efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - What Sets Us Apart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What Sets Ecopyxle Apart</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Personalized AI-Generated Reviews</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Every student receives individualized feedback highlighting their unique strengths, 
                    weaknesses, and specific areas for improvement, creating a truly personalized learning experience.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Data-Driven Learning Journeys</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Teachers gain powerful insights at scale through comprehensive analytics, 
                    enabling them to make informed decisions about curriculum and individual student support.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Targeted Student Feedback</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Students receive specific, actionable feedback that guides their learning path, 
                    helping them understand not just what to improve, but how to improve it.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl border border-indigo-200">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">90%</div>
                    <div className="text-sm text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Consistency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Availability</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Automation + Personalization Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200 mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Automation Meets Personalization</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                By combining automation with personalization, Ecopyxle ensures comprehensive educational excellence:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Faster and More Accurate Grading</h4>
                    <p className="text-gray-600 leading-relaxed">
                      AI-powered precision eliminates human error while delivering results in minutes, not hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduced Teacher Workload</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Free educators from repetitive tasks to focus on teaching, mentoring, and student engagement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Continuous Improvement for Students</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Personalized feedback loops help students identify and address learning gaps consistently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Fair and Transparent Assessment</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Eliminate bias with consistent, objective evaluation criteria applied to every student.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Educational Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 border border-gray-200"
          >
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Empowering Educational Institutions Worldwide</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              Ecopyxle empowers schools, colleges, and universities to elevate education quality while saving 
              teachers' time and improving student outcomes. It's not just an AI tool — it's a partner in modern education.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-100 border border-indigo-200">
              <Heart className="w-5 h-5 mr-2 text-indigo-600" />
              <span className="text-indigo-800 font-semibold">A Partner in Modern Education</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200 shadow-md mb-6">
                <Users className="w-5 h-5 mr-2 text-purple-600" />
                <span className="text-sm md:text-base font-bold text-gray-800">Leadership Team</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse leadership team combines decades of experience in AI, technology, and business strategy 
                to drive innovation and deliver exceptional results for our clients.
              </p>
            </motion.div>
          </div>

          {/* Founders Subsection */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Founding Team</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The visionary leaders who founded Ecopyxle and continue to drive our mission forward.
              </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rambabu Pallam",
                designation: "Founder, Board of Directors & CEO",
                role: "Strategic Leadership",
                description: "Visionary leader driving Ecopyxle's strategic direction and growth initiatives.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
                image: "/founders/rambabu-pallam.jpeg",
                hasImage: true
              },
              {
                name: "Vamsi Priya Padala",
                designation: "Founder, Board of Directors & CTH",
                role: "Technical Excellence",
                description: "Technical architect ensuring our AI solutions meet the highest standards of innovation.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
                image: "/founders/vamsi-priya-padala.png",
                hasImage: true
              },
              {
                name: "Maruthi Yarapathineni",
                designation: "Founder, Board of Directors & CMO",
                role: "Technology Strategy",
                description: "Leading our technology roadmap and ensuring cutting-edge AI implementations.",
                gradient: "from-indigo-500 to-purple-500",
                bgGradient: "from-indigo-50 to-purple-50",
                image: "/founders/maruthi-yarapathineni.jpeg",
                hasImage: true
              },
              {
                name: "Chandramouli Pothugunta",
                designation: "Founder, Board of Directors & CMO",
                role: "Market Growth",
                description: "Driving market expansion and building strategic partnerships across industries.",
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-50 to-teal-50",
                image: "/founders/chandramouli-pothugunta.jpeg",
                hasImage: true
              }
            ].map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  {/* Avatar */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                    {founder.hasImage ? (
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white text-3xl font-bold`}>
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  
                  {/* Name & Designation */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 whitespace-nowrap">{founder.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{founder.designation}</p>
                  </div>

                  {/* Role Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${founder.gradient} mb-4 mx-auto block w-fit`}>
                    {founder.role}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {founder.description}
                  </p>

                  {/* Decorative Element */}
                  <div className={`mt-6 h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${founder.gradient}`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Founders Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="text-6xl text-blue-500 mb-4">"</div>
              <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                "Together, we believe that AI should be accessible to every business, regardless of size. 
                Our shared vision drives us to create solutions that not only solve today's challenges 
                but also pave the way for tomorrow's possibilities."
              </blockquote>
              <div className="text-sm text-gray-600 font-semibold">
                — The Ecopyxle Founding Team
              </div>
            </div>
          </motion.div>
          </div>

          {/* Extended Leadership Team */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Executive Leadership</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our specialized team brings together deep expertise in AI, data architecture, quality assurance, and IoT analytics 
                to deliver comprehensive solutions that drive innovation and excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "S V Ramana Patnaik",
                  designation: "NLP Architect",
                  role: "Natural Language Processing",
                  description: "Expert in natural language processing and computational linguistics, architecting advanced NLP solutions for complex business applications.",
                  gradient: "from-indigo-500 to-blue-500",
                  bgGradient: "from-indigo-50 to-blue-50",
                  icon: Brain,
                  hasImage: false
                },
                {
                  name: "Shaik Qureshi",
                  designation: "Data Architect",
                  role: "Data Architecture & Engineering",
                  description: "Specialized in designing scalable data architectures and implementing robust data pipelines for enterprise AI solutions.",
                  gradient: "from-green-500 to-emerald-500",
                  bgGradient: "from-green-50 to-emerald-50",
                  icon: BarChart3,
                  hasImage: false
                },
                {
                  name: "Kishore Kalindhi",
                  designation: "QA Analyst",
                  role: "Quality Assurance & Testing",
                  description: "Ensuring the highest quality standards for our AI solutions through comprehensive testing methodologies and quality assurance processes.",
                  gradient: "from-purple-500 to-pink-500",
                  bgGradient: "from-purple-50 to-pink-50",
                  icon: CheckCircle,
                  hasImage: false
                },
                {
                  name: "Siva Shankar",
                  designation: "IoT Analyst",
                  role: "Internet of Things & Analytics",
                  description: "Leading IoT integration and analytics initiatives, connecting smart devices with AI-powered insights for comprehensive solutions.",
                  gradient: "from-orange-500 to-red-500",
                  bgGradient: "from-orange-50 to-red-50",
                  icon: Zap,
                  hasImage: false
                }
              ].map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200 h-full">
                    {/* Avatar */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                      {leader.hasImage ? (
                        <Image
                          src={`/leadership/${leader.name.toLowerCase().replace(' ', '-')}.jpg`} // PLACEHOLDER path
                          alt={leader.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center`}>
                          <leader.icon className="h-8 w-8 text-white" />
                        </div>
                      )}
                    </div>
                    
                    {/* Name & Designation */}
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{leader.designation}</p>
                    </div>

                    {/* Role Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${leader.gradient} mb-3 mx-auto block w-fit`}>
                      {leader.role}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {leader.description}
                    </p>

                    {/* Decorative Element */}
                    <div className={`mt-4 h-1 w-8 mx-auto rounded-full bg-gradient-to-r ${leader.gradient}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
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





    </div>
  )
}