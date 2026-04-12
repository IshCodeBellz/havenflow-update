'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const COOKIE_CONSENT_KEY = 'hf_cookie_consent'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY)
    setIsVisible(!saved)
  }, [])

  const saveChoice = (choice: 'accepted' | 'rejected') => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, choice)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-cream-border bg-white/95 shadow-nav backdrop-blur-md">
        <div className="p-5 sm:p-6">
          <p className="text-[13px] font-light leading-[1.75] text-slate-soft">
            We use essential cookies to keep this site working. If we add optional analytics or marketing cookies in
            future, we will ask for your consent. Read our{' '}
            <Link
              href="/cookies"
              className="font-medium text-navy underline decoration-navy/30 underline-offset-4 transition-colors duration-200 hover:text-rose hover:decoration-rose/40 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 rounded-sm"
            >
              Cookie Policy
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => saveChoice('accepted')}
              className="cursor-pointer rounded-lg bg-rose px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm transition-all duration-200 hover:bg-rose-dark hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => saveChoice('rejected')}
              className="cursor-pointer rounded-lg border border-navy/20 bg-cream/50 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-navy transition-all duration-200 hover:border-navy/35 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
            >
              Reject non-essential
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
