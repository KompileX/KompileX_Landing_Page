import { NextRequest, NextResponse } from 'next/server'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://app.kompilex.ai/api'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const upstream = await fetch(`${API_BASE}/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await upstream.json().catch(() => ({}))
    return NextResponse.json(data, { status: upstream.status })
  } catch (err) {
    console.error('[waitlist route]', err)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
