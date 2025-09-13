'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  User, 
  Users,
  Settings, 
  CreditCard, 
  BarChart3, 
  Activity,
  Shield,
  Download,
  Upload,
  Bell,
  HelpCircle,
  LogOut,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Zap,
  Database,
  Globe,
  Lock,
  Key,
  Brain,
  ArrowRight,
  Calendar,
  FileText,
  Image,
  Code,
  Server,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react'

export default function CustomerPortalPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [user] = useState({
    name: "John Smith",
    email: "john.smith@company.com",
    company: "TechCorp Inc",
    plan: "Professional",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    joinDate: "January 2024",
    lastLogin: "2 hours ago"
  })

  const [apiKeys] = useState([
    {
      id: 1,
      name: "Production API Key",
      key: "ek_live_sk_1234567890abcdef",
      created: "2024-01-15",
      lastUsed: "2 hours ago",
      status: "active",
      usage: "1,234 calls this month"
    },
    {
      id: 2,
      name: "Development API Key",
      key: "ek_test_sk_abcdef1234567890",
      created: "2024-01-10",
      lastUsed: "1 day ago",
      status: "active",
      usage: "456 calls this month"
    },
    {
      id: 3,
      name: "Old Production Key",
      key: "ek_live_sk_oldkey123456789",
      created: "2023-12-01",
      lastUsed: "1 week ago",
      status: "inactive",
      usage: "0 calls this month"
    }
  ])

  const [billingHistory] = useState([
    {
      id: 1,
      date: "2024-12-01",
      amount: "$299.00",
      status: "paid",
      description: "Professional Plan - December 2024",
      invoice: "INV-2024-1201"
    },
    {
      id: 2,
      date: "2024-11-01",
      amount: "$299.00",
      status: "paid",
      description: "Professional Plan - November 2024",
      invoice: "INV-2024-1101"
    },
    {
      id: 3,
      date: "2024-10-01",
      amount: "$299.00",
      status: "paid",
      description: "Professional Plan - October 2024",
      invoice: "INV-2024-1001"
    }
  ])

  const [usageStats] = useState({
    apiCalls: {
      current: 1247,
      limit: 10000,
      percentage: 12.47
    },
    dataProcessed: {
      current: "2.4 GB",
      limit: "10 GB",
      percentage: 24
    },
    activeProjects: 5,
    teamMembers: 8
  })

  const [recentActivity] = useState([
    {
      id: 1,
      type: "api_call",
      description: "Text analysis API called",
      timestamp: "2 minutes ago",
      status: "success",
      icon: Code
    },
    {
      id: 2,
      type: "billing",
      description: "Payment processed successfully",
      timestamp: "1 hour ago",
      status: "success",
      icon: CreditCard
    },
    {
      id: 3,
      type: "api_key",
      description: "New API key generated",
      timestamp: "3 hours ago",
      status: "success",
      icon: Key
    },
    {
      id: 4,
      type: "error",
      description: "API rate limit exceeded",
      timestamp: "5 hours ago",
      status: "warning",
      icon: AlertCircle
    },
    {
      id: 5,
      type: "login",
      description: "Successful login from new device",
      timestamp: "1 day ago",
      status: "info",
      icon: Shield
    }
  ])

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'api-keys', name: 'API Keys', icon: Key },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'usage', name: 'Usage', icon: Activity },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'support', name: 'Support', icon: HelpCircle }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-gray-100 text-gray-800'
      case 'paid': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'success': return 'text-green-600'
      case 'warning': return 'text-yellow-600'
      case 'error': return 'text-red-600'
      case 'info': return 'text-blue-600'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'api_call': return Code
      case 'billing': return CreditCard
      case 'api_key': return Key
      case 'error': return AlertCircle
      case 'login': return Shield
      default: return Activity
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                {/* User Profile */}
                <div className="text-center mb-8">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.company}</p>
                  <div className="mt-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {user.plan}
                    </span>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </nav>

                {/* Quick Actions */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Actions</h4>
                  <div className="space-y-2">
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 text-sm flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Generate API Key
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 text-sm flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Invoice
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 text-sm flex items-center gap-2">
                      <HelpCircle className="w-4 h-4" />
                      Get Support
                    </button>
                  </div>
                </div>

                {/* Logout */}
                <button className="w-full mt-8 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors duration-200">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Dashboard Tab */}
              {activeTab === 'dashboard' && (
                <div className="space-y-8">
                  {/* Welcome Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                  >
                    <h2 className="text-3xl font-bold mb-2">Welcome back, {user.name.split(' ')[0]}!</h2>
                    <p className="text-blue-100 mb-6">Here's what's happening with your account today.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Last login: {user.lastLogin}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Member since: {user.joinDate}
                      </div>
                    </div>
                  </motion.div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { icon: Code, label: "API Calls", value: "1,247", change: "+12%", trend: "up" },
                      { icon: Database, label: "Data Processed", value: "2.4 GB", change: "+8%", trend: "up" },
                      { icon: Server, label: "Active Projects", value: "5", change: "+1", trend: "up" },
                      { icon: Users, label: "Team Members", value: "8", change: "0%", trend: "neutral" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg p-6"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                            <stat.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex items-center gap-1">
                            {stat.trend === 'up' ? (
                              <TrendingUp className="w-4 h-4 text-green-600" />
                            ) : stat.trend === 'down' ? (
                              <TrendingDown className="w-4 h-4 text-red-600" />
                            ) : (
                              <div className="w-4 h-4 bg-gray-400 rounded-full" />
                            )}
                            <span className={`text-sm font-semibold ${
                              stat.trend === 'up' ? 'text-green-600' : 
                              stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              {stat.change}
                            </span>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={activity.id} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activity.status === 'success' ? 'bg-green-100' :
                            activity.status === 'warning' ? 'bg-yellow-100' :
                            activity.status === 'error' ? 'bg-red-100' : 'bg-blue-100'
                          }`}>
                            <activity.icon className={`w-5 h-5 ${
                              activity.status === 'success' ? 'text-green-600' :
                              activity.status === 'warning' ? 'text-yellow-600' :
                              activity.status === 'error' ? 'text-red-600' : 'text-blue-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">{activity.description}</p>
                            <p className="text-sm text-gray-600">{activity.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* API Keys Tab */}
              {activeTab === 'api-keys' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">API Keys</h2>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
                      <Plus className="w-5 h-5" />
                      Generate New Key
                    </button>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Key</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Usage</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {apiKeys.map((key) => (
                            <tr key={key.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4">
                                <div>
                                  <div className="font-medium text-gray-900">{key.name}</div>
                                  <div className="text-sm text-gray-600">Created {key.created}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <code className="text-sm bg-gray-100 px-2 py-1 rounded font-mono">
                                    {key.key.substring(0, 20)}...
                                  </code>
                                  <button className="text-blue-600 hover:text-blue-700">
                                    <Eye className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(key.status)}`}>
                                  {key.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-600">
                                {key.usage}
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <button className="text-blue-600 hover:text-blue-700 p-1">
                                    <Edit className="w-4 h-4" />
                                  </button>
                                  <button className="text-red-600 hover:text-red-700 p-1">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === 'billing' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Billing & Invoices</h2>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Download All
                    </button>
                  </div>

                  {/* Current Plan */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Current Plan: {user.plan}</h3>
                    <p className="text-blue-100 mb-4">$299/month • Next billing: January 1, 2025</p>
                    <div className="flex items-center gap-4">
                      <button className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                        Upgrade Plan
                      </button>
                      <button className="border border-white text-white px-6 py-2 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300">
                        Manage Billing
                      </button>
                    </div>
                  </div>

                  {/* Billing History */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Billing History</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {billingHistory.map((invoice) => (
                            <tr key={invoice.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 text-sm text-gray-900">{invoice.date}</td>
                              <td className="px-6 py-4">
                                <div>
                                  <div className="font-medium text-gray-900">{invoice.description}</div>
                                  <div className="text-sm text-gray-600">{invoice.invoice}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-sm font-semibold text-gray-900">{invoice.amount}</td>
                              <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(invoice.status)}`}>
                                  {invoice.status}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                  Download
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Usage Tab */}
              {activeTab === 'usage' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Usage Analytics</h2>
                  
                  {/* Usage Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">API Calls</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">This Month</span>
                          <span className="font-semibold">{usageStats.apiCalls.current.toLocaleString()} / {usageStats.apiCalls.limit.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${usageStats.apiCalls.percentage}%` }}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600">
                          {usageStats.apiCalls.percentage}% of monthly limit used
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Processed</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">This Month</span>
                          <span className="font-semibold">{usageStats.dataProcessed.current} / {usageStats.dataProcessed.limit}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${usageStats.dataProcessed.percentage}%` }}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600">
                          {usageStats.dataProcessed.percentage}% of monthly limit used
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Usage Stats */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Detailed Usage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                        <div className="text-sm text-gray-600">Active Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                        <div className="text-sm text-gray-600">Team Members</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                        <div className="text-sm text-gray-600">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={user.name}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={user.email}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                        <input
                          type="text"
                          value={user.company}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
                        Save Changes
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div>
                          <div className="font-medium text-gray-900">Two-Factor Authentication</div>
                          <div className="text-sm text-gray-600">Add an extra layer of security to your account</div>
                        </div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors duration-300">
                          Enable
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div>
                          <div className="font-medium text-gray-900">Change Password</div>
                          <div className="text-sm text-gray-600">Update your account password</div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Support Tab */}
              {activeTab === 'support' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Support & Help</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentation</h3>
                      <p className="text-gray-600 mb-4">Find answers to common questions and learn how to use our APIs.</p>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
                        View Docs
                      </button>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h3>
                      <p className="text-gray-600 mb-4">Get help from our support team for technical issues.</p>
                      <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300">
                        Open Ticket
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <a href="/resources" className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        <h4 className="font-medium text-gray-900 mb-2">Knowledge Base</h4>
                        <p className="text-sm text-gray-600">Browse our comprehensive help articles</p>
                      </a>
                      <a href="/community" className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        <h4 className="font-medium text-gray-900 mb-2">Community Forum</h4>
                        <p className="text-sm text-gray-600">Connect with other developers</p>
                      </a>
                      <a href="/contact" className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        <h4 className="font-medium text-gray-900 mb-2">Contact Us</h4>
                        <p className="text-sm text-gray-600">Get in touch with our team</p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
