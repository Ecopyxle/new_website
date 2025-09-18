'use client'

import { useEffect } from 'react'
import { setupGlobalErrorHandling, measurePageLoad, monitorNetworkRequests } from '../utils/monitoring'

interface MonitoringProviderProps {
  children: React.ReactNode
}

export default function MonitoringProvider({ children }: MonitoringProviderProps) {
  useEffect(() => {
    // Initialize global error handling
    setupGlobalErrorHandling()
    
    // Initialize performance monitoring
    measurePageLoad()
    
    // Monitor network requests
    monitorNetworkRequests()
    
    // Log initialization
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 Monitoring initialized')
    }
  }, [])

  return <>{children}</>
}
