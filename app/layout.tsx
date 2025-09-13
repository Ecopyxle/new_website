import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AppleNav from './components/AppleNav'

const inter = Inter({ subsets: ['latin'] })

const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction 
  ? process.env.NEXT_PUBLIC_SITE_URL || 'https://ecopyxle.com'
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Ecopyxle - You Dream It, We AI It | Leading AI Solutions Platform',
  description: 'Transform your business with Ecopyxle\'s comprehensive AI platform. From machine learning to computer vision, natural language processing to predictive analytics - we provide AI solutions for every industry and use case.',
  keywords: 'Ecopyxle, AI as a Service, Machine Learning, Computer Vision, Natural Language Processing, Predictive Analytics, AI Solutions, Artificial Intelligence, Business Intelligence, You Dream It We AI It',
  authors: [{ name: 'Ecopyxle Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Ecopyxle - You Dream It, We AI It',
    description: 'Transform your business with Ecopyxle\'s comprehensive AI platform. From machine learning to computer vision, natural language processing to predictive analytics.',
    type: 'website',
    url: baseUrl,
    siteName: 'Ecopyxle',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecopyxle - You Dream It, We AI It',
    description: 'Transform your business with Ecopyxle\'s comprehensive AI platform',
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
        <AppleNav />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 