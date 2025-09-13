'use client'

import AppleHero from './components/AppleHero'
import Apple5D from './components/Apple5D'
import AppleProducts from './components/AppleProducts'
import AppleFooter from './components/AppleFooter'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <AppleHero />
      <Apple5D />
      <AppleProducts />
      <AppleFooter />
    </div>
  )
} 