import { NextRequest, NextResponse } from 'next/server'
import { getClientIp, isRateLimited, isValidEmail } from '@/lib/formSubmission'

type ApplicationPayload = {
  name?: string
  email?: string
  phone?: string
  role?: string
  experience?: string
  availability?: string
  message?: string
  website?: string
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request)
  const limitKey = `caregiver:${ip}`

  if (isRateLimited(limitKey, 5, 15 * 60 * 1000)) {
    return NextResponse.json(
      { ok: false, error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    )
  }

  const body = (await request.json()) as ApplicationPayload
  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim().toLowerCase()
  const phone = (body.phone ?? '').trim()
  const role = (body.role ?? '').trim()
  const experience = (body.experience ?? '').trim()
  const availability = (body.availability ?? '').trim()
  const message = (body.message ?? '').trim()
  const website = (body.website ?? '').trim()

  // Honeypot: silently accept bot payloads to reduce retried spam traffic.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !phone || !role || !message) {
    return NextResponse.json(
      { ok: false, error: 'Please complete all required fields.' },
      { status: 400 }
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const webhookUrl = process.env.CAREGIVER_FORM_WEBHOOK_URL
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: 'Form service not configured yet.' },
      { status: 503 }
    )
  }

  const webhookBody: Record<string, string> = {
    fullName: name,
    email,
    phone,
    message,
  }
  if (experience) webhookBody.experience = experience
  if (role) webhookBody.role = role
  if (availability) webhookBody.availability = availability

  const upstream = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(webhookBody),
    cache: 'no-store',
  })

  if (!upstream.ok) {
    return NextResponse.json(
      { ok: false, error: 'Unable to submit your application right now. Please try again.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
