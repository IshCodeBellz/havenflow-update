'use client'

import { useState } from 'react'
import {
  btnGhostUnderlineClass,
  btnSubmitClass,
  inputClass,
  labelClass,
  selectClass,
  textareaClass,
} from '@/lib/formClasses'

type RoleOption = { title: string }

export default function CaregiverApplicationForm({ roles }: { roles: RoleOption[] }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: '',
    message: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/caregiver-application', {
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
        role: '',
        experience: '',
        availability: '',
        message: '',
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
      <div className="max-w-xl rounded-2xl border border-cream-border bg-white p-10 text-center shadow-card sm:p-12">
        <p className="font-serif text-3xl font-medium text-navy">Application received.</p>
        <p className="mt-4 text-[15px] font-light leading-[1.85] text-slate-soft">
          Thank you for your interest in joining Haven Flow Care. We&apos;ll review your application and be in touch
          within 48 hours.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className={`${btnGhostUnderlineClass} mt-8`}>
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex max-w-2xl flex-col gap-6">
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="application-website">Website</label>
        <input
          id="application-website"
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
          <label htmlFor="app-name" className={labelClass}>
            Full Name <span className="text-rose">*</span>
          </label>
          <input
            id="app-name"
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
          <label htmlFor="app-email" className={labelClass}>
            Email Address <span className="text-rose">*</span>
          </label>
          <input
            id="app-email"
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
          <label htmlFor="app-phone" className={labelClass}>
            Phone Number <span className="text-rose">*</span>
          </label>
          <input
            id="app-phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="07xxx xxxxxx"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="app-role" className={labelClass}>
            Role of Interest <span className="text-rose">*</span>
          </label>
          <select
            id="app-role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Select a role…</option>
            {roles.map((r) => (
              <option key={r.title} value={r.title}>
                {r.title}
              </option>
            ))}
            <option value="Any / Not sure">Any / Not sure</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="app-exp" className={labelClass}>
            Years of Care Experience
          </label>
          <select
            id="app-exp"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Select…</option>
            <option value="No experience">No experience yet</option>
            <option value="Less than 1 year">Less than 1 year</option>
            <option value="1–3 years">1–3 years</option>
            <option value="3–5 years">3–5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </div>
        <div>
          <label htmlFor="app-avail" className={labelClass}>
            Availability
          </label>
          <select
            id="app-avail"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Select…</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Weekends only">Weekends only</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="app-message" className={labelClass}>
          Tell Us About Yourself <span className="text-rose">*</span>
        </label>
        <textarea
          id="app-message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Why do you want to work in care? Tell us a bit about your background and what you're looking for…"
          className={textareaClass}
        />
      </div>

      {submitError ? <p className="text-[13px] font-medium text-rose-dark">{submitError}</p> : null}

      <div className="flex flex-wrap items-center justify-between gap-6">
        <p className="text-[12px] font-light text-slate-soft">We&apos;ll be in touch within 48 hours.</p>
        <button type="submit" disabled={isSubmitting} className={btnSubmitClass}>
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  )
}
