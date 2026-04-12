'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  btnGhostUnderlineClass,
  btnSubmitClass,
  inputClass,
  labelClass,
  selectClass,
  textareaClass,
} from '@/lib/formClasses'

const enquiryTypes = [
  'Supported living services',
  // 'Ofsted nanny placement', // temporarily unavailable
  'Refer a client',
  'Caregiver opportunities',
  'General enquiry',
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
    newsletter: false,
    website: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, newsletter: e.target.checked })
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
      setFormData({
        name: '',
        email: '',
        phone: '',
        enquiryType: '',
        message: '',
        newsletter: false,
        website: '',
      })
    } catch {
      setSubmitError('Unable to submit right now. Please try again shortly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-cream-border bg-white p-10 text-center shadow-card sm:p-12">
        <p className="font-serif text-3xl font-medium text-navy">Thank you for reaching out.</p>
        <p className="mt-4 text-[15px] font-light leading-[1.85] text-slate-soft">
          We&apos;ve received your message and will be in touch within 24 hours.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className={`${btnGhostUnderlineClass} mt-8`}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col gap-6">
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
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

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full Name <span className="text-rose">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email Address <span className="text-rose">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Optional"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-enquiry" className={labelClass}>
            Enquiry Type
          </label>
          <select
            id="contact-enquiry"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Select one…</option>
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span className="text-rose">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell us a bit about what you're looking for…"
          className={textareaClass}
        />
      </div>

      <div className="flex gap-3">
        <input
          id="contact-newsletter"
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleNewsletterChange}
          className="mt-1 h-4 w-4 shrink-0 rounded border-cream-border text-navy focus:ring-2 focus:ring-rose/40 focus:ring-offset-0"
        />
        <label htmlFor="contact-newsletter" className="text-[14px] font-light leading-snug text-slate-soft">
          I&apos;d like to receive occasional news and updates from Haven Flow Care by email. You can unsubscribe at
          any time. See our{' '}
          <Link
            href="/privacy"
            className="font-medium text-navy underline decoration-navy/20 underline-offset-2 hover:text-rose hover:decoration-rose/40"
          >
            privacy policy
          </Link>
          .
        </label>
      </div>

      {submitError ? <p className="text-[13px] font-medium text-rose-dark">{submitError}</p> : null}

      <div className="flex flex-wrap items-center justify-between gap-6">
        <p className="text-[12px] font-light text-slate-soft">We&apos;ll respond within 24 hours.</p>
        <button type="submit" disabled={isSubmitting} className={btnSubmitClass}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
