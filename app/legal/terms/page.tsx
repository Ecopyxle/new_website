'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Scale, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Brain,
  Mail,
  Phone,
  Globe
} from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Please read these terms carefully before using our AI services and platform.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: December 12, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Scale className="w-6 h-6 text-blue-600" />
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    By accessing or using Ecopyxle's services, you agree to be bound by these Terms of Service 
                    and all applicable laws and regulations. If you do not agree with any of these terms, 
                    you are prohibited from using our services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  Service Description
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Ecopyxle provides AI-as-a-Service (AIaaS) solutions including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Machine Learning and AI model APIs</li>
                    <li>Natural Language Processing services</li>
                    <li>Computer Vision and image analysis</li>
                    <li>Custom AI model development</li>
                    <li>Data analytics and insights</li>
                    <li>AI consulting and implementation services</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                  User Responsibilities
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>As a user of our services, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information when creating an account</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not attempt to reverse engineer or compromise our systems</li>
                    <li>Not use our services to generate harmful, illegal, or inappropriate content</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-red-600" />
                  Prohibited Uses
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>You may not use our services for:</p>
                  <div className="bg-red-50 rounded-xl p-6">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Creating or distributing malicious software or content</li>
                      <li>Violating any applicable laws or regulations</li>
                      <li>Infringing on intellectual property rights</li>
                      <li>Generating spam, phishing, or fraudulent content</li>
                      <li>Attempting to gain unauthorized access to our systems</li>
                      <li>Interfering with the proper functioning of our services</li>
                      <li>Creating content that promotes violence, discrimination, or hate speech</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  Service Availability
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    While we strive to provide reliable service, we cannot guarantee uninterrupted access. 
                    Our services may be temporarily unavailable due to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Scheduled maintenance and updates</li>
                    <li>Technical issues or system failures</li>
                    <li>Force majeure events beyond our control</li>
                    <li>Third-party service disruptions</li>
                  </ul>
                  <p>
                    We will make reasonable efforts to notify users of planned maintenance and minimize downtime.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our pricing is based on usage and service tiers as outlined in our pricing page. 
                    You agree to pay all applicable fees according to your selected plan.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Payment Terms:</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fees are billed in advance for subscription plans</li>
                      <li>Usage-based charges are billed monthly</li>
                      <li>All fees are non-refundable unless otherwise specified</li>
                      <li>We reserve the right to change pricing with 30 days notice</li>
                      <li>Late payments may result in service suspension</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    All content, features, and functionality of our services are owned by Ecopyxle and are 
                    protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You retain ownership of your data and content. By using our services, you grant us a 
                    limited license to process your data solely for the purpose of providing our services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Privacy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Your privacy is important to us. Our collection and use of personal information is 
                    governed by our Privacy Policy, which is incorporated into these terms by reference.
                  </p>
                  <p>
                    We implement appropriate security measures to protect your data, but cannot guarantee 
                    absolute security. You are responsible for backing up your important data.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    To the maximum extent permitted by law, Ecopyxle shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including but not limited to 
                    loss of profits, data, or business opportunities.
                  </p>
                  <p>
                    Our total liability for any claims arising from these terms or your use of our services 
                    shall not exceed the amount you paid us in the 12 months preceding the claim.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Either party may terminate these terms at any time. We may suspend or terminate your 
                    access to our services immediately if you breach these terms.
                  </p>
                  <p>
                    Upon termination, your right to use our services will cease immediately, and we may 
                    delete your account and data in accordance with our data retention policies.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of the 
                    State of Delaware, without regard to conflict of law principles.
                  </p>
                  <p>
                    Any disputes arising from these terms or your use of our services shall be resolved 
                    through binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We reserve the right to modify these terms at any time. We will notify users of 
                    material changes by email or through our service. Your continued use of our services 
                    after such changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <span>ecopyxle4@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gray-600" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-gray-600" />
                        <span>17305 Redmond, WA, USA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
