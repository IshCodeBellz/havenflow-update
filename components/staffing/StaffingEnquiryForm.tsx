'use client'

import { useState } from 'react'

const emptyForm = {
  careHome: '',
  name: '',
  email: '',
  phone: '',
  staffNeeded: 'Registered nurses',
  coverType: 'Short-term cover',
  message: '',
  website: '',
}

const staffOptions = [
  'Registered nurses',
  'Care assistants / carers',
  'Support & ancillary staff',
  'A mix',
]

const coverOptions = ['Short-term cover', 'Leave backfill', 'Ongoing arrangement']

export default function StaffingEnquiryForm() {
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
      const response = await fetch('/api/care-home-staffing', {
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
      <div className="flex min-w-0 flex-[1.3_1_440px] flex-col gap-4 rounded-[24px] bg-blush p-[clamp(24px,3vw,36px)]">
        <p className="text-[28px] font-medium text-navy">Enquiry received.</p>
        <p className="text-[17px] leading-[1.6]">
          Thanks for getting in touch — we&rsquo;ll come back to you promptly about your staffing
          needs.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn btn-sm btn-secondary self-start"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="staffing-enquiry-heading"
      className="grid min-w-0 flex-[1.3_1_440px] gap-[18px] rounded-[24px] bg-blush p-[clamp(24px,3vw,36px)] [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]"
    >
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="staffing-website">Website</label>
        <input
          id="staffing-website"
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="field-label" htmlFor="staffing-home">
        Care home name *
        <input
          id="staffing-home"
          type="text"
          name="careHome"
          required
          value={formData.careHome}
          onChange={handleChange}
          className="field-control bg-white"
        />
      </label>

      <label className="field-label" htmlFor="staffing-name">
        Your name *
        <input
          id="staffing-name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="field-control bg-white"
        />
      </label>

      <label className="field-label" htmlFor="staffing-email">
        Email *
        <input
          id="staffing-email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="field-control bg-white"
        />
      </label>

      <label className="field-label" htmlFor="staffing-phone">
        Phone
        <input
          id="staffing-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="field-control bg-white"
        />
      </label>

      <label className="field-label" htmlFor="staffing-staff">
        Staff needed
        <select
          id="staffing-staff"
          name="staffNeeded"
          value={formData.staffNeeded}
          onChange={handleChange}
          className="field-control bg-white"
        >
          {staffOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="field-label" htmlFor="staffing-cover">
        Cover type
        <select
          id="staffing-cover"
          name="coverType"
          value={formData.coverType}
          onChange={handleChange}
          className="field-control bg-white"
        >
          {coverOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="field-label col-[1/-1]" htmlFor="staffing-message">
        Tell us about your staffing gaps *
        <textarea
          id="staffing-message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="field-control bg-white"
        />
      </label>

      {submitError ? (
        <p className="col-[1/-1] m-0 text-[15px] font-medium text-rose-ink">{submitError}</p>
      ) : null}

      <div className="col-[1/-1]">
        <button type="submit" disabled={isSubmitting} className="btn btn-primary disabled:opacity-60">
          {isSubmitting ? 'Sending…' : 'Send enquiry'}
        </button>
      </div>
    </form>
  )
}
