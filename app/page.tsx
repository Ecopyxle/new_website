'use client'

import { lazy, Suspense, useEffect } from 'react'
import AppleHero from './components/AppleHero'
import { usePerformanceMonitor } from './utils/performance'
import { ErrorBoundary } from './components/ErrorBoundary'
import { useMonitoring } from './utils/monitoring'

// Lazy load heavy components
const Apple5D = lazy(() => import('./components/Apple5D'))
const AppleProducts = lazy(() => import('./components/AppleProducts'))
const AppleFooter = lazy(() => import('./components/AppleFooter'))

// Loading component
const ComponentLoader = ({ children }: { children?: React.ReactNode }) => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    {children && <span className="ml-3 text-gray-600">Loading...</span>}
  </div>
)

export default function HomePage() {
  // Temporarily disable performance monitoring to prevent errors
  // const performanceMonitor = usePerformanceMonitor()
  const monitoring = useMonitoring()

  useEffect(() => {
    // Track page visit
    monitoring.captureEvent('page_view', { page: 'home' })

    // Preload critical resources
    if (typeof window !== 'undefined') {
      // Preload the next sections after initial render
      const timer = setTimeout(() => {
        Promise.all([
          import('./components/Apple5D'),
          import('./components/AppleProducts')
        ]).catch((error) => {
          monitoring.captureException(error, { context: 'component_preload' })
        })
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [monitoring])

  return (
    <div className="min-h-screen bg-white">
      <ErrorBoundary>
        <AppleHero />
      </ErrorBoundary>
      
      <ErrorBoundary fallback={<ComponentLoader>Failed to load section. Please refresh the page.</ComponentLoader>}>
        <Suspense fallback={<ComponentLoader />}>
          <Apple5D />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary fallback={<ComponentLoader>Failed to load products section. Please refresh the page.</ComponentLoader>}>
        <Suspense fallback={<ComponentLoader />}>
          <div id="products">
            <AppleProducts />
          </div>
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary fallback={<ComponentLoader>Failed to load footer. Please refresh the page.</ComponentLoader>}>
        <Suspense fallback={<ComponentLoader />}>
          <AppleFooter />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
} 