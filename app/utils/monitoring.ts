// Monitoring and error tracking utilities

export interface ErrorReport {
  message: string
  stack?: string
  url: string
  userAgent: string
  timestamp: string
  userId?: string
  sessionId?: string
  additionalData?: Record<string, any>
}

export interface PerformanceReport {
  metric: string
  value: number
  url: string
  timestamp: string
  additionalData?: Record<string, any>
}

class MonitoringService {
  private sessionId: string
  private userId?: string
  private isProduction: boolean

  constructor() {
    this.sessionId = this.generateSessionId()
    this.isProduction = process.env.NODE_ENV === 'production'
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  // Error tracking
  captureException(error: Error, additionalData?: Record<string, any>) {
    const errorReport: ErrorReport = {
      message: error.message,
      stack: error.stack,
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId,
      additionalData
    }

    // Log to console in development
    if (!this.isProduction) {
      console.error('Error captured:', errorReport)
    }

    // In production, send to monitoring service
    if (this.isProduction) {
      this.sendErrorReport(errorReport)
    }
  }

  // Performance tracking
  capturePerformance(metric: string, value: number, additionalData?: Record<string, any>) {
    const performanceReport: PerformanceReport = {
      metric,
      value,
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      timestamp: new Date().toISOString(),
      additionalData
    }

    // Log to console in development
    if (!this.isProduction) {
      console.log('Performance metric:', performanceReport)
    }

    // In production, send to monitoring service
    if (this.isProduction) {
      this.sendPerformanceReport(performanceReport)
    }
  }

  // Custom event tracking
  captureEvent(eventName: string, properties?: Record<string, any>) {
    const event = {
      event: eventName,
      properties: {
        ...properties,
        sessionId: this.sessionId,
        userId: this.userId,
        timestamp: new Date().toISOString(),
        url: typeof window !== 'undefined' ? window.location.href : 'unknown'
      }
    }

    if (!this.isProduction) {
      console.log('Event captured:', event)
    }

    if (this.isProduction) {
      this.sendEvent(event)
    }
  }

  // User identification
  setUser(userId: string) {
    this.userId = userId
  }

  // Health check
  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch('/api/health', {
        method: 'HEAD',
        cache: 'no-cache'
      })
      return response.ok
    } catch (error) {
      console.error('Health check failed:', error)
      return false
    }
  }

  // Send reports to monitoring service
  private async sendErrorReport(report: ErrorReport) {
    try {
      // Replace with your actual monitoring service endpoint
      // Examples: Sentry, LogRocket, DataDog, etc.
      
      // For now, we'll use a simple endpoint or external service
      await fetch('/api/monitoring/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(report)
      }).catch(() => {
        // Silently fail if monitoring is down
      })
    } catch (error) {
      // Don't let monitoring errors break the app
      console.warn('Failed to send error report:', error)
    }
  }

  private async sendPerformanceReport(report: PerformanceReport) {
    try {
      await fetch('/api/monitoring/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(report)
      }).catch(() => {
        // Silently fail if monitoring is down
      })
    } catch (error) {
      console.warn('Failed to send performance report:', error)
    }
  }

  private async sendEvent(event: any) {
    try {
      await fetch('/api/monitoring/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      }).catch(() => {
        // Silently fail if monitoring is down
      })
    } catch (error) {
      console.warn('Failed to send event:', error)
    }
  }
}

// Singleton instance
export const monitoring = new MonitoringService()

// React hook for monitoring
export function useMonitoring() {
  return {
    captureException: monitoring.captureException.bind(monitoring),
    capturePerformance: monitoring.capturePerformance.bind(monitoring),
    captureEvent: monitoring.captureEvent.bind(monitoring),
    setUser: monitoring.setUser.bind(monitoring),
    checkHealth: monitoring.checkHealth.bind(monitoring)
  }
}

// Automatic error boundary integration
export function setupGlobalErrorHandling() {
  if (typeof window === 'undefined') return

  // Capture unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    monitoring.captureException(
      new Error(`Unhandled promise rejection: ${event.reason}`),
      { type: 'unhandledrejection', reason: event.reason }
    )
  })

  // Capture global JavaScript errors
  window.addEventListener('error', (event) => {
    monitoring.captureException(
      new Error(event.message),
      {
        type: 'javascript_error',
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      }
    )
  })

  // Capture resource loading errors
  window.addEventListener('error', (event) => {
    if (event.target && event.target !== window) {
      const target = event.target as any
      monitoring.captureException(
        new Error(`Resource loading error: ${target.src || target.href}`),
        {
          type: 'resource_error',
          tagName: target.tagName,
          src: target.src,
          href: target.href
        }
      )
    }
  }, true)
}

// Performance monitoring helpers
export function measurePageLoad() {
  if (typeof window === 'undefined') return

  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        monitoring.capturePerformance('page_load_time', navigation.loadEventEnd - navigation.fetchStart)
        monitoring.capturePerformance('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.fetchStart)
        monitoring.capturePerformance('first_byte', navigation.responseStart - navigation.fetchStart)
      }
    }, 0)
  })
}

// Network monitoring
export function monitorNetworkRequests() {
  if (typeof window === 'undefined') return

  const originalFetch = window.fetch
  window.fetch = async (...args) => {
    const start = performance.now()
    try {
      const response = await originalFetch(...args)
      const duration = performance.now() - start
      
      monitoring.capturePerformance('api_request_duration', duration, {
        url: args[0],
        status: response.status,
        ok: response.ok
      })
      
      if (!response.ok) {
        monitoring.captureException(
          new Error(`HTTP ${response.status}: ${response.statusText}`),
          {
            type: 'http_error',
            url: args[0],
            status: response.status,
            statusText: response.statusText
          }
        )
      }
      
      return response
    } catch (error) {
      const duration = performance.now() - start
      monitoring.capturePerformance('api_request_duration', duration, {
        url: args[0],
        error: true
      })
      
      monitoring.captureException(error as Error, {
        type: 'network_error',
        url: args[0]
      })
      
      throw error
    }
  }
}
