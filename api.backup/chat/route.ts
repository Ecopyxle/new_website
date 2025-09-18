import { NextRequest, NextResponse } from 'next/server'

// Rate limiting (simple in-memory store for demo)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 10 // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = rateLimitMap.get(ip)
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }
  
  if (userLimit.count >= RATE_LIMIT) {
    return false
  }
  
  userLimit.count++
  return true
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Validate content type
    const contentType = req.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      )
    }

    // Parse and validate request body
    let body: any
    try {
      body = await req.json()
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    // Validate messages array
    const messages = Array.isArray(body?.messages) ? body.messages : []
    if (messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required and cannot be empty' },
        { status: 400 }
      )
    }

    // Find last user message
    const lastUser = [...messages].reverse().find((m: any) => m?.role === 'user')
    if (!lastUser?.content) {
      return NextResponse.json(
        { error: 'No user message found' },
        { status: 400 }
      )
    }

    const question = lastUser.content.toString().trim()
    if (question.length > 1000) {
      return NextResponse.json(
        { error: 'Message too long. Please keep it under 1000 characters.' },
        { status: 400 }
      )
    }

    // Generate response based on question
    let reply = 'Thanks for reaching out! How can I help you with our AI services today?'
    const lower = question.toLowerCase()
    
    if (lower.includes('price') || lower.includes('pricing') || lower.includes('cost')) {
      reply = 'Our EGS AI starts at ₹3,650 per student/year. For other solutions like ACE AI, Database Agents, and Custom LLMs, we offer tailored pricing. Would you like a detailed quote?'
    } else if (lower.includes('service') || lower.includes('services') || lower.includes('solution')) {
      reply = 'We specialize in: EGS AI (Education Grading), ACE AI (Classroom Engagement), AI Database Agents, and Custom LLM development. Which area interests you most?'
    } else if (lower.includes('demo') || lower.includes('trial') || lower.includes('test')) {
      reply = 'I\'d be happy to arrange a personalized demo! Please share your email or company details, or use our "Contact" page to schedule a call.'
    } else if (lower.includes('support') || lower.includes('help') || lower.includes('problem')) {
      reply = 'Our support team is here to help! For technical issues, email support@ecopyxle.com. For sales inquiries, use our contact form or schedule a call.'
    }

    return NextResponse.json({ 
      reply,
      timestamp: new Date().toISOString(),
      messageId: Math.random().toString(36).substr(2, 9)
    })

  } catch (error: any) {
    console.error('Chat API error:', error)
    
    // Log error for monitoring
    if (process.env.NODE_ENV === 'production') {
      // Send to error tracking service
      // errorTracker.captureException(error)
    }

    return NextResponse.json(
      { 
        error: 'Internal server error. Please try again later.',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to send messages.' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to send messages.' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to send messages.' },
    { status: 405 }
  )
}


