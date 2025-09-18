// Performance monitoring utilities
export interface PerformanceMetrics {
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
  fcp?: number // First Contentful Paint
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {}
  private observers: PerformanceObserver[] = []

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers()
    }
  }

  private initializeObservers() {
    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as any
          this.metrics.lcp = lastEntry.startTime
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        this.observers.push(lcpObserver)
      } catch (e) {
        console.warn('LCP observer not supported')
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })
        this.observers.push(fidObserver)
      } catch (e) {
        console.warn('FID observer not supported')
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          this.metrics.cls = clsValue
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
        this.observers.push(clsObserver)
      } catch (e) {
        console.warn('CLS observer not supported')
      }
    }

    // Navigation Timing metrics
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
      if (navigationEntries.length > 0) {
        const navigation = navigationEntries[0]
        this.metrics.ttfb = navigation.responseStart - navigation.fetchStart
        this.metrics.fcp = navigation.loadEventEnd - navigation.fetchStart
      }
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  logMetrics() {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', this.metrics)
    }
  }

  // Report to analytics service (placeholder)
  reportMetrics() {
    // In production, you would send these metrics to your analytics service
    // Example: Google Analytics, DataDog, New Relic, etc.
    if (process.env.NODE_ENV === 'production') {
      // analytics.track('performance_metrics', this.metrics)
    }
  }

  cleanup() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Web Vitals thresholds
export const PERFORMANCE_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // ms
  FID: { good: 100, needsImprovement: 300 }, // ms
  CLS: { good: 0.1, needsImprovement: 0.25 }, // score
  TTFB: { good: 800, needsImprovement: 1800 }, // ms
  FCP: { good: 1800, needsImprovement: 3000 } // ms
}

export function getPerformanceGrade(metric: keyof PerformanceMetrics, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = PERFORMANCE_THRESHOLDS[metric.toUpperCase() as keyof typeof PERFORMANCE_THRESHOLDS]
  if (!threshold) return 'good'
  
  if (value <= threshold.good) return 'good'
  if (value <= threshold.needsImprovement) return 'needs-improvement'
  return 'poor'
}

// Hook for React components
export function usePerformanceMonitor() {
  if (typeof window === 'undefined') return null
  
  try {
    const monitor = new PerformanceMonitor()
    
    // Report metrics after component mount
    setTimeout(() => {
      try {
        monitor.logMetrics()
        monitor.reportMetrics()
      } catch (error) {
        console.warn('Performance monitoring error:', error)
      }
    }, 5000)

    return monitor
  } catch (error) {
    console.warn('Failed to initialize performance monitor:', error)
    return null
  }
}
