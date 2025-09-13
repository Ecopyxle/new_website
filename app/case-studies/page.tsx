'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  Star,
  Quote,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Brain,
  Globe,
  Award,
  Play,
  Download,
  ExternalLink
} from 'lucide-react'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "EduTech Solutions: Transforming Classroom Learning with AI",
      company: "EduTech Solutions",
      industry: "Education",
      challenge: "Manual grading was consuming 60% of teachers' time, limiting their ability to focus on student engagement and personalized learning.",
      solution: "Implemented Ecopyxle's AI Paper Correction system with automated grading, feedback generation, and student performance analytics.",
      results: {
        timeSaved: "75%",
        accuracy: "95%",
        satisfaction: "98%",
        students: "10,000+"
      },
      metrics: [
        { label: "Time Saved", value: "75%", icon: Clock },
        { label: "Grading Accuracy", value: "95%", icon: Target },
        { label: "Teacher Satisfaction", value: "98%", icon: Star },
        { label: "Students Impacted", value: "10,000+", icon: Users }
      ],
      testimonial: {
        quote: "Ecopyxle's AI solution has revolutionized our teaching process. We can now focus on what matters most - our students.",
        author: "Dr. Sarah Johnson",
        role: "Head of Academic Affairs",
        company: "EduTech Solutions",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
    },
    {
      title: "HealthFirst Medical: AI-Powered Diagnostic Assistance",
      company: "HealthFirst Medical",
      industry: "Healthcare",
      challenge: "Radiologists were overwhelmed with image analysis workload, leading to delayed diagnoses and potential missed conditions.",
      solution: "Deployed Ecopyxle's Computer Vision AI for medical imaging analysis, providing instant preliminary assessments and highlighting areas of concern.",
      results: {
        timeSaved: "50%",
        accuracy: "99.2%",
        satisfaction: "96%",
        patients: "25,000+"
      },
      metrics: [
        { label: "Analysis Time Reduced", value: "50%", icon: Clock },
        { label: "Detection Accuracy", value: "99.2%", icon: Target },
        { label: "Radiologist Satisfaction", value: "96%", icon: Star },
        { label: "Patients Served", value: "25,000+", icon: Users }
      ],
      testimonial: {
        quote: "The AI system has become an indispensable tool in our diagnostic workflow, helping us catch conditions we might have missed.",
        author: "Dr. Michael Chen",
        role: "Chief Radiologist",
        company: "HealthFirst Medical",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
    },
    {
      title: "FinanceFlow: Automated Risk Assessment & Fraud Detection",
      company: "FinanceFlow",
      industry: "Finance",
      challenge: "Manual risk assessment processes were slow and inconsistent, leading to delayed loan approvals and increased fraud incidents.",
      solution: "Integrated Ecopyxle's ML models for real-time risk scoring, fraud detection, and automated decision-making in loan processing.",
      results: {
        timeSaved: "80%",
        accuracy: "99.5%",
        satisfaction: "94%",
        transactions: "1M+"
      },
      metrics: [
        { label: "Processing Time Reduced", value: "80%", icon: Clock },
        { label: "Fraud Detection Rate", value: "99.5%", icon: Target },
        { label: "Customer Satisfaction", value: "94%", icon: Star },
        { label: "Transactions Processed", value: "1M+", icon: Users }
      ],
      testimonial: {
        quote: "Ecopyxle's AI has transformed our risk management capabilities, enabling us to process loans faster while maintaining security.",
        author: "Jennifer Martinez",
        role: "VP of Risk Management",
        company: "FinanceFlow",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
    }
  ]

  const testimonials = [
    {
      quote: "Ecopyxle's AI solutions have been a game-changer for our business. The implementation was seamless and the results exceeded our expectations.",
      author: "Alex Thompson",
      role: "CTO",
      company: "TechCorp",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The customer support team at Ecopyxle is outstanding. They helped us every step of the way during our AI transformation journey.",
      author: "Maria Rodriguez",
      role: "Head of Operations",
      company: "DataFlow Inc",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "We've seen a 300% improvement in our data processing efficiency since implementing Ecopyxle's AI platform. Highly recommended!",
      author: "David Kim",
      role: "Data Science Director",
      company: "Analytics Pro",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The ROI from Ecopyxle's AI services was evident within the first month. Our team productivity has increased significantly.",
      author: "Lisa Wang",
      role: "VP of Technology",
      company: "InnovateTech",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ]

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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Stories</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover how leading companies are transforming their operations with Ecopyxle's AI solutions. 
                Real results from real businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth look at how our clients achieved remarkable results with AI
            </p>
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {study.industry}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{study.company}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center">
                          <metric.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-6">
                      <Quote className="w-8 h-8 text-blue-600 mb-4" />
                      <p className="text-gray-700 italic mb-4">"{study.testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={study.testimonial.avatar}
                          alt={study.testimonial.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{study.testimonial.role}</div>
                          <div className="text-sm text-blue-600">{study.testimonial.company}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
                        <Play className="w-4 h-4" />
                        Watch Video
                      </button>
                      <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about working with Ecopyxle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The results speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful Implementations", icon: CheckCircle },
              { number: "99.9%", label: "Uptime Guarantee", icon: Globe },
              { number: "50%", label: "Average Time Savings", icon: Clock },
              { number: "98%", label: "Client Satisfaction", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already transforming their business with Ecopyxle's AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
              >
                <Award className="w-5 h-5" />
                Start Your Journey
              </a>
              <a
                href="/demo"
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
