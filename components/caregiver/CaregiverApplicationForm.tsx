'use client'

import { useState } from 'react'

type RoleOption = { title: string }

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  role: '',
  experience: '',
  availability: 'Full-time',
  message: '',
  website: '',
}

const experienceOptions = [
  'No experience yet',
  'Less than 1 year',
  '1–3 years',
  '3–5 years',
  '5+ years',
]

const availabilityOptions = ['Full-time', 'Part-time', 'Weekends', 'Flexible']

export default function CaregiverApplicationForm({ roles }: { roles: RoleOption[] }) {
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
        <p className="text-[28px] font-medium text-navy">Application received.</p>
        <p className="text-[17px] leading-[1.6]">
          Thank you for your interest in joining Haven Flow Care. We&rsquo;ll review your
          application and be in touch within 48 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn btn-sm btn-secondary self-start"
        >
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid min-w-0 flex-[1.6_1_500px] gap-5 rounded-[28px] border border-line bg-white p-[clamp(24px,4vw,44px)] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]"
    >
      <h2 className="col-[1/-1] m-0 mb-1 text-[32px] font-medium text-navy">
        Apply to join our team
      </h2>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
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

      <label className="field-label" htmlFor="app-name">
        Full name *
        <input
          id="app-name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="field-control"
        />
      </label>

      <label className="field-label" htmlFor="app-email">
        Email address *
        <input
          id="app-email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="field-control"
        />
      </label>

      <label className="field-label" htmlFor="app-phone">
        Phone number *
        <input
          id="app-phone"
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="field-control"
        />
      </label>

      <label className="field-label" htmlFor="app-role">
        Role of interest *
        <select
          id="app-role"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          className="field-control"
        >
          <option value="">Select a role…</option>
          {roles.map((r) => (
            <option key={r.title} value={r.title}>
              {r.title}
            </option>
          ))}
          <option value="Any / not sure">Any / not sure</option>
        </select>
      </label>

      <label className="field-label" htmlFor="app-exp">
        Years of care experience
        <select
          id="app-exp"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="field-control"
        >
          <option value="">Select…</option>
          {experienceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
        <legend className="mb-2 p-0 text-[15px] font-medium text-navy">Availability *</legend>
        <div className="flex flex-wrap gap-2">
          {availabilityOptions.map((o) => (
            <label
              key={o}
              className={`inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border px-3.5 text-[15px] transition-colors ${
                formData.availability === o
                  ? 'border-navy bg-navy text-white'
                  : 'border-input-border bg-white text-navy hover:bg-blush-2'
              }`}
            >
              <input
                type="radio"
                name="availability"
                value={o}
                checked={formData.availability === o}
                onChange={handleChange}
                className="h-4 w-4 accent-rose-ink"
              />
              {o}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="field-label col-[1/-1]" htmlFor="app-message">
        Tell us about yourself *
        <textarea
          id="app-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Why do you want to work in care? Tell us a bit about your background and what you're looking for…"
          className="field-control"
        />
      </label>

      {submitError ? (
        <p className="col-[1/-1] m-0 text-[15px] font-medium text-rose-ink">{submitError}</p>
      ) : null}

      <div className="col-[1/-1] flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" disabled={isSubmitting} className="btn btn-primary disabled:opacity-60">
          {isSubmitting ? 'Submitting…' : 'Submit application'}
        </button>
        <span className="text-[15px] text-muted">We&rsquo;ll reply within 48 hours.</span>
      </div>
    </form>
  )
}
