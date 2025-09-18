import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const errorReport = await req.json()
    
    // Log error for development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Report Received:', {
        message: errorReport.message,
        url: errorReport.url,
        timestamp: errorReport.timestamp,
        sessionId: errorReport.sessionId
      })
    }
    
    // In production, you would:
    // 1. Store in database
    // 2. Send to external monitoring service (Sentry, LogRocket, etc.)
    // 3. Alert if critical error
    
    // For now, just acknowledge receipt
    return NextResponse.json({ 
      status: 'received',
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Failed to process error report:', error)
    return NextResponse.json(
      { error: 'Failed to process error report' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit error reports.' },
    { status: 405 }
  )
}
