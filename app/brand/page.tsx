"use client"

import Image from "next/image"

export default function BrandPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Ecopyxle Brand Kit</h1>
        <p className="text-gray-600 mt-2">Logo, variants, and usage guidance</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4">Full‑color Logo</h2>
        <div className="bg-white rounded-xl border p-6 flex items-center justify-center">
          <Image src="/brand/ecopyxle-logo-color.svg" alt="Ecopyxle Logo (color)" width={900} height={240} />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Monochrome Logo</h2>
        <div className="bg-white rounded-xl border p-6 flex items-center justify-center">
          <Image src="/brand/ecopyxle-logo-mono.svg" alt="Ecopyxle Logo (mono)" width={900} height={240} />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Minimal Luxury Variant</h2>
        <div className="bg-white rounded-xl border p-6 flex items-center justify-center">
          <Image src="/brand/ecopyxle-logo-minimal.svg" alt="Ecopyxle Logo (minimal)" width={900} height={240} />
        </div>
        <p className="text-gray-600 mt-2">Premium, reduced detail for signage/merch and enterprise contexts.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border p-6">
          <h3 className="font-semibold mb-2">Website Header Mockup</h3>
          <div className="h-40 bg-gradient-to-b from-white to-gray-50 rounded-lg border flex items-center px-6">
            <Image src="/brand/ecopyxle-logo-color.svg" alt="Header" width={420} height={120} />
          </div>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <h3 className="font-semibold mb-2">Avatar / Social</h3>
          <div className="h-40 bg-gray-50 rounded-lg border flex items-center justify-center">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-black">ex</span>
            </div>
          </div>
        </div>
      </section>

      <section className="prose max-w-none">
        <h2>Rationale</h2>
        <p>
          The wordmark separates <strong>eco</strong> and <strong>pyxle</strong> to narrate the brand: eco stands for best‑value economy and sustainability,
          while pyxle represents the pixel – the smallest digital building block. The color logo blends emerald and sky on the eco half to suggest clean energy and
          accessible value, and uses a deep royal ink on the pyxle half to convey dependable technology. A four‑pixel X becomes the signature motif that references
          AI at the particle level.
        </p>
        <ul>
          <li><strong>Colors:</strong> emerald/sky for eco friendliness; royal ink with neon accents for tech confidence.</li>
          <li><strong>Typography:</strong> Bold geometric forms for strength and modernity; tight tracking for a premium silhouette.</li>
          <li><strong>Imagery:</strong> Leaf‑notch on the E and a seed dot in the o; pixel‑grid X for the tech core.</li>
          <li><strong>Versatility:</strong> Supplied in full color, monochrome, and a minimal variant; works from favicons to signage.</li>
        </ul>
      </section>
    </main>
  )
}
