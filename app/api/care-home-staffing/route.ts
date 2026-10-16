import { NextRequest, NextResponse } from 'next/server'
import { getClientIp, isRateLimited, isValidEmail, splitFirstLastName } from '@/lib/formSubmission'

type StaffingPayload = {
  careHome?: string
  name?: string
  email?: string
  phone?: string
  staffNeeded?: string
  coverType?: string
  message?: string
  website?: string
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request)
  const limitKey = `staffing:${ip}`

  if (isRateLimited(limitKey, 5, 15 * 60 * 1000)) {
    return NextResponse.json(
      { ok: false, error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    )
  }

  const body = (await request.json()) as StaffingPayload
  const careHome = (body.careHome ?? '').trim()
  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim().toLowerCase()
  const phone = (body.phone ?? '').trim()
  const staffNeeded = (body.staffNeeded ?? '').trim()
  const coverType = (body.coverType ?? '').trim()
  const message = (body.message ?? '').trim()
  const website = (body.website ?? '').trim()

  // Honeypot: silently accept bot payloads to reduce retried spam traffic.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!careHome || !name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: 'Care home, name, email, and details are required.' },
      { status: 400 }
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a valid email address.' },
      { status: 400 }
    )
  }

  // Shares the contact webhook — staffing enquiries land in the same inbox,
  // tagged by enquiryType.
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL
  if (!webhookUrl) {
    return NextResponse.json({ ok: false, error: 'Form service not configured yet.' }, { status: 503 })
  }

  const { firstName, lastName } = splitFirstLastName(name)
  const comments = [
    `Care home: ${careHome}`,
    staffNeeded ? `Staff needed: ${staffNeeded}` : '',
    coverType ? `Cover type: ${coverType}` : '',
    '',
    message,
  ]
    .filter((line, i, all) => line !== '' || i < all.length - 1)
    .join('\n')

  const webhookBody: Record<string, string | boolean> = {
    firstName,
    lastName,
    email,
    comments,
    newsletter: false,
    enquiryType: 'Care home staffing',
  }
  if (phone) webhookBody.phone = phone

  const upstream = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(webhookBody),
    cache: 'no-store',
  })

  if (!upstream.ok) {
    return NextResponse.json(
      { ok: false, error: 'Unable to submit your enquiry right now. Please try again.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
