import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction 
  ? process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'AI as a Service - Comprehensive AI Solutions for Every Industry',
  description: 'Transform your business with our comprehensive AI platform. From machine learning to computer vision, natural language processing to predictive analytics - we provide AI solutions for every industry and use case.',
  keywords: 'AI as a Service, Machine Learning, Computer Vision, Natural Language Processing, Predictive Analytics, AI Solutions, Artificial Intelligence, Business Intelligence',
  authors: [{ name: 'AIaaS Platform' }],
  robots: 'index, follow',
  openGraph: {
    title: 'AI as a Service - Comprehensive AI Solutions',
    description: 'Transform your business with our comprehensive AI platform. From machine learning to computer vision, natural language processing to predictive analytics.',
    type: 'website',
    url: baseUrl,
    siteName: 'AIaaS Platform',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI as a Service - Comprehensive AI Solutions',
    description: 'Transform your business with our comprehensive AI platform',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 