import { NextRequest, NextResponse } from 'next/server'
import { getClientIp, isRateLimited, isValidEmail } from '@/lib/formSubmission'

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  enquiryType?: string
  message?: string
  website?: string
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request)
  const limitKey = `contact:${ip}`

  if (isRateLimited(limitKey, 5, 15 * 60 * 1000)) {
    return NextResponse.json(
      { ok: false, error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    )
  }

  const body = (await request.json()) as ContactPayload
  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim().toLowerCase()
  const phone = (body.phone ?? '').trim()
  const enquiryType = (body.enquiryType ?? '').trim()
  const message = (body.message ?? '').trim()
  const website = (body.website ?? '').trim()

  // Honeypot: silently accept bot payloads to reduce retried spam traffic.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: 'Name, email, and message are required.' },
      { status: 400 }
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: 'Form service not configured yet.' },
      { status: 503 }
    )
  }

  const upstream = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: 'contact-form',
      submittedAt: new Date().toISOString(),
      name,
      email,
      phone,
      enquiryType,
      message,
    }),
    cache: 'no-store',
  })

  if (!upstream.ok) {
    return NextResponse.json(
      { ok: false, error: 'Unable to submit your message right now. Please try again.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
