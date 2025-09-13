'use client'

import Image from 'next/image'

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ecopyxle Logo Preview</h1>
          <p className="text-gray-600">Full-size symbol with all details visible</p>
        </div>

        {/* Main logo display - very large */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-8 flex justify-center items-center">
          <div className="relative">
            <Image
              src="/brand/ecopyxle-symbol.svg"
              alt="Ecopyxle Symbol - Full Size"
              width={800}
              height={640}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Different backgrounds for testing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Dark background */}
          <div className="bg-gray-900 rounded-xl p-8 flex justify-center items-center">
            <Image
              src="/brand/ecopyxle-symbol.svg"
              alt="Ecopyxle Symbol - Dark Background"
              width={300}
              height={240}
              className="max-w-full h-auto"
            />
          </div>

          {/* Colored background */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 flex justify-center items-center">
            <Image
              src="/brand/ecopyxle-symbol.svg"
              alt="Ecopyxle Symbol - Gradient Background"
              width={300}
              height={240}
              className="max-w-full h-auto"
            />
          </div>

          {/* Light gray background */}
          <div className="bg-gray-200 rounded-xl p-8 flex justify-center items-center">
            <Image
              src="/brand/ecopyxle-symbol.svg"
              alt="Ecopyxle Symbol - Light Background"
              width={300}
              height={240}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Logo breakdown */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Logo Elements Breakdown</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">ECO Elements (Left Side)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Large cursive "E" with earthy gradient (gold → emerald → forest)</li>
                <li>• Eco leaf symbol in cyan</li>
                <li>• Recycle arrows in green</li>
                <li>• Royal glow effect</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-4">PYXLE Elements (Right Side)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Large cursive "P" with royal gradient (purple → violet → indigo)</li>
                <li>• 6-color pixel grid (purple, blue, cyan, green, orange, red)</li>
                <li>• Circuit board lines with connection nodes</li>
                <li>• Digital data flow visualization</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Unifying Elements</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Golden infinity symbol at center (endless possibilities)</li>
              <li>• Interlocked E+P cursive letterforms</li>
              <li>• Royal gem accents (gold and purple)</li>
              <li>• Subtle glow effects for premium feel</li>
              <li>• Calligraphic flourishes and flowing curves</li>
            </ul>
          </div>
        </div>

        {/* Navigation back */}
        <div className="text-center mt-8">
          <a 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
