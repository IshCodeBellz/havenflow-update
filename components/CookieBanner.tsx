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
      <div className="mx-auto max-w-3xl rounded-[24px] border border-line bg-white/95 p-6 shadow-float backdrop-blur-md">
        <p className="m-0 text-[16px] leading-[1.6] text-body">
          We use essential cookies to keep this site working. If we add optional analytics or
          marketing cookies in future, we will ask for your consent. Read our{' '}
          <Link href="/cookies" className="font-medium text-navy underline underline-offset-2">
            cookie policy
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" onClick={() => saveChoice('accepted')} className="btn btn-sm btn-primary">
            Accept
          </button>
          <button
            type="button"
            onClick={() => saveChoice('rejected')}
            className="btn btn-sm btn-secondary"
          >
            Reject non-essential
          </button>
        </div>
      </div>
    </div>
  )
}
