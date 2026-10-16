'use client'

import Link from 'next/link'
import { useState } from 'react'

const enquiryTypes = [
  'Supported living services',
  'Referring a client',
  'Caregiver opportunities',
  'Care home staffing',
  'General enquiry',
]

const callTimes = ['Any time', 'Morning', 'Afternoon']

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  enquiryType: enquiryTypes[0],
  bestTime: callTimes[0],
  message: '',
  newsletter: false,
  website: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { ok?: boolean; error?: string }
      if (!response.ok || !result.ok) {
        setSubmitError(result.error ?? 'Something went wrong. Please try again.')
        return
      }

      setSubmitted(true)
      setFormData(emptyForm)
    } catch {
      setSubmitError('Unable to submit right now. Please try again shortly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex min-w-0 flex-[1.6_1_500px] flex-col gap-4 rounded-[28px] border border-line bg-white p-[clamp(24px,4vw,44px)]">
        <p className="text-[28px] font-medium text-navy">Thank you for reaching out.</p>
        <p className="text-[17px] leading-[1.6]">
          We&rsquo;ve received your message and will be in touch within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn btn-sm btn-secondary self-start"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid min-w-0 flex-[1.6_1_500px] gap-5 rounded-[28px] border border-line bg-white p-[clamp(24px,4vw,44px)] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]"
    >
      <h2 className="col-[1/-1] m-0 mb-1 text-[32px] font-medium text-navy">Send us a message</h2>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <fieldset className="col-[1/-1] m-0 border-0 p-0">
        <legend className="mb-2.5 p-0 text-[15px] font-medium text-navy">
          I&rsquo;m getting in touch about…
        </legend>
        <div className="flex flex-wrap gap-2">
          {enquiryTypes.map((t) => {
            const selected = formData.enquiryType === t
            return (
              <button
                key={t}
                type="button"
                aria-pressed={selected}
                onClick={() => setFormData({ ...formData, enquiryType: t })}
                className={`inline-flex min-h-[44px] items-center rounded-full border px-[18px] text-[15px] font-medium transition-colors ${
                  selected
                    ? 'border-navy bg-navy text-white'
                    : 'border-input-border bg-blush text-navy hover:bg-blush-2'
                }`}
              >
                {t}
              </button>
            )
          })}
        </div>
      </fieldset>

      <label className="field-label" htmlFor="contact-name">
        Full name *
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="field-control"
        />
      </label>

      <label className="field-label" htmlFor="contact-email">
        Email address *
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="field-control"
        />
      </label>

      <label className="field-label" htmlFor="contact-phone">
        Phone number
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="field-control"
        />
      </label>

      <label className="field-label" htmlFor="contact-time">
        Best time to call
        <select
          id="contact-time"
          name="bestTime"
          value={formData.bestTime}
          onChange={handleChange}
          className="field-control"
        >
          {callTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="field-label col-[1/-1]" htmlFor="contact-message">
        Message *
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="field-control"
        />
      </label>

      <div className="col-[1/-1] flex items-start gap-3 text-[15px] leading-[1.5]">
        <input
          id="contact-newsletter"
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
          className="mt-0.5 h-5 w-5 shrink-0 accent-navy"
        />
        <label htmlFor="contact-newsletter">
          Send me occasional news and updates by email. Unsubscribe at any time — see our{' '}
          <Link href="/privacy" className="text-navy underline underline-offset-2">
            privacy policy
          </Link>
          .
        </label>
      </div>

      {submitError ? (
        <p className="col-[1/-1] m-0 text-[15px] font-medium text-rose-ink">{submitError}</p>
      ) : null}

      <div className="col-[1/-1] flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" disabled={isSubmitting} className="btn btn-primary disabled:opacity-60">
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
        <span className="text-[15px] text-muted">We&rsquo;ll respond within 24 hours.</span>
      </div>
    </form>
  )
}
