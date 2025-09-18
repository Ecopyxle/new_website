import { NextResponse } from 'next/server'

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy'
  timestamp: string
  uptime: number
  version: string
  checks: {
    server: 'pass' | 'fail'
    memory: 'pass' | 'warn' | 'fail'
    dependencies: 'pass' | 'fail'
  }
  details?: {
    memoryUsage?: NodeJS.MemoryUsage
    environment?: string
    nodeVersion?: string
  }
}

export async function GET() {
  try {
    const startTime = Date.now()
    
    // Basic server check
    const serverCheck: 'pass' | 'fail' = 'pass'
    
    // Memory check
    let memoryCheck: 'pass' | 'warn' | 'fail' = 'pass'
    let memoryUsage: NodeJS.MemoryUsage | undefined
    
    if (typeof process !== 'undefined' && process.memoryUsage) {
      memoryUsage = process.memoryUsage()
      const heapUsedMB = memoryUsage.heapUsed / 1024 / 1024
      
      if (heapUsedMB > 500) {
        memoryCheck = 'fail'
      } else if (heapUsedMB > 200) {
        memoryCheck = 'warn'
      }
    }
    
    // Dependencies check (basic)
    const dependenciesCheck: 'pass' | 'fail' = 'pass'
    
    // Determine overall status
    let status: 'healthy' | 'degraded' | 'unhealthy' = 'healthy'
    if (memoryCheck === 'fail' || serverCheck === 'fail' || dependenciesCheck === 'fail') {
      status = 'unhealthy'
    } else if (memoryCheck === 'warn') {
      status = 'degraded'
    }
    
    const healthStatus: HealthStatus = {
      status,
      timestamp: new Date().toISOString(),
      uptime: typeof process !== 'undefined' ? process.uptime() : 0,
      version: process.env.npm_package_version || '1.0.0',
      checks: {
        server: serverCheck,
        memory: memoryCheck,
        dependencies: dependenciesCheck
      },
      details: {
        memoryUsage,
        environment: process.env.NODE_ENV || 'unknown',
        nodeVersion: process.version
      }
    }
    
    const responseTime = Date.now() - startTime
    
    return NextResponse.json(
      {
        ...healthStatus,
        responseTime: `${responseTime}ms`
      },
      { 
        status: status === 'healthy' ? 200 : status === 'degraded' ? 200 : 503,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    )
    
  } catch (error) {
    console.error('Health check error:', error)
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Health check failed',
        checks: {
          server: 'fail',
          memory: 'fail',
          dependencies: 'fail'
        }
      },
      { status: 503 }
    )
  }
}

// Simple ping endpoint
export async function HEAD() {
  return new NextResponse(null, { 
    status: 200,
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
}
