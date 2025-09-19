'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  CheckCircle, 
  Eye, 
  Globe, 
  Users, 
  BookOpen, 
  Target, 
  Zap,
  ArrowRight,
  Heart,
  Award,
  Clock,
  Shield,
  TrendingUp
} from 'lucide-react'

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Education Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 shadow-md mb-6"
            >
              <span className="text-lg mr-2">💡</span>
              <span className="text-sm md:text-base font-bold text-gray-800">Educational Innovation</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Education with AI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed"
            >
              We're revolutionizing the educational landscape by empowering teachers with AI-powered tools that enhance learning outcomes and create personalized educational experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* AI-Powered Educational Tools Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: AI Tools */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">AI-Powered Educational Tools</h2>
              
              {/* Exam Paper Correction */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Exam Paper Correction</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Automated AI-powered correction of exam papers with precision and consistency, eliminating human bias and reducing grading time by up to 90%.
                    </p>
                  </div>
                </div>
              </div>

              {/* Assignment Evaluation */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Assignment Evaluation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive assessment of assignments with detailed rubric-based evaluation, ensuring fair and thorough feedback for every student submission.
                    </p>
                  </div>
                </div>
              </div>

              {/* Plagiarism Detection */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Plagiarism Detection</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced AI algorithms detect plagiarism instantly, helping maintain academic integrity while providing detailed similarity reports.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: What Sets Ecopyxle Apart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Sets Ecopyxle Apart</h3>
              </div>

              {/* Personalized AI-Generated Reviews */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Personalized AI-Generated Reviews</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every student receives individualized feedback highlighting their unique strengths, weaknesses, and specific areas for improvement, creating a truly personalized learning experience.
                </p>
              </div>

              {/* Data-Driven Learning Journeys */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Data-Driven Learning Journeys</h4>
                <p className="text-gray-600 leading-relaxed">
                  Teachers gain powerful insights at scale through comprehensive analytics that track student progress, identify learning patterns, and suggest targeted interventions.
                </p>
              </div>

              {/* Multi-Language Support */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Multi-Language Support</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our AI understands and evaluates content in multiple languages, making it perfect for international schools and diverse student populations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EGS AI Product Showcase */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">EGS AI - Education Grading System</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The most advanced AI-powered grading system that transforms how educational institutions handle assessment and feedback.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Key Capabilities</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Save 20+ hours per week on grading</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Eliminate human error in scoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Catch plagiarism instantly</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Boost student writing quality</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Proven Results</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold">
                      Universities reduce grading workload
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold">
                      Schools improve writing standards
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
                    Explore Solution
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">💬</span>
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "EGS AI transformed our grading process completely. What used to take our faculty 20 hours per week now takes just 3 hours, and the consistency is remarkable. Our students are getting better feedback than ever before."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Dr. Sarah Johnson</div>
                  <div className="text-gray-600">Head of English Department, Stanford University</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Empowering Educational Institutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Empowering Educational Institutions Worldwide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ecopyxle empowers schools, colleges, and universities to elevate education quality while saving teachers' time and improving student outcomes. It's not just an AI tool — it's a partner in modern education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Schools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schools</h3>
              <p className="text-gray-600 leading-relaxed">
                Improve writing standards and reduce teacher workload with automated grading and detailed feedback.
              </p>
            </motion.div>

            {/* Colleges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colleges</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale assessment capabilities and maintain academic integrity with advanced AI-powered evaluation tools.
              </p>
            </motion.div>

            {/* Universities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Universities</h3>
              <p className="text-gray-600 leading-relaxed">
                Handle massive grading workloads efficiently while providing personalized feedback to thousands of students.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Institution?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of educational institutions already using EGS AI to improve their teaching and assessment processes.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center gap-2">
                <Heart className="w-5 h-5" />
                A Partner in Modern Education
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
