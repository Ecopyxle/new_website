import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const messages = Array.isArray(body?.messages) ? body.messages : []
    const lastUser = [...messages].reverse().find((m: any) => m?.role === 'user')
    const question = (lastUser?.content || '').toString()

    // Very simple demo replies without external APIs
    let reply = 'Thanks for reaching out! How can I help you with our AI services today?'
    const lower = question.toLowerCase()
    if (lower.includes('price') || lower.includes('pricing')) {
      reply = 'Our Starter plan is ₹8,499/mo, Professional ₹24,999/mo, Enterprise is custom. Which suits you?'
    } else if (lower.includes('service') || lower.includes('services')) {
      reply = 'We offer AI Paper Correction, Classroom Monitoring, NUTRI AI, Supply Chain AI, Custom LLMs, and more.'
    } else if (lower.includes('demo')) {
      reply = 'Happy to arrange a demo. Share your email/company, or click “Schedule Demo Call” on the site.'
    }

    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (e: any) {
    return new Response(JSON.stringify({ error: 'Bad request' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    })
  }
}


