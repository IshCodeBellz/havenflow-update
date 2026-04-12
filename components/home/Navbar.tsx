'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Nanny Services', href: '/nanny-services' },
  { label: 'Care Home Staffing', href: '/care-home-staffing' },
  { label: 'Careers', href: '/caregiver-application' },
  { label: 'Contact', href: '/contact' },
]

const linkClass =
  'text-[12px] uppercase tracking-[0.14em] text-slate-dim font-medium transition-colors duration-200 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm cursor-pointer'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4 sm:px-6 lg:top-5 lg:px-8">
      <nav
        className="mx-auto flex h-[60px] max-w-7xl items-center justify-between rounded-2xl border border-navy/10 bg-white/90 px-4 shadow-nav backdrop-blur-md sm:h-[64px] sm:px-5 lg:h-[68px] lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 cursor-pointer"
          aria-label="Haven Flow Care home"
        >
          <Image
            src="/havenflow-logo.png"
            alt="Haven Flow Care"
            width={395}
            height={103}
            priority
            className="h-9 w-auto sm:h-10 md:h-11"
          />
        </Link>

        <ul className="hidden list-none gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-navy px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white shadow-sm transition-all duration-200 hover:bg-navy-deep hover:shadow-md lg:inline-flex cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Refer a Client
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex cursor-pointer flex-col gap-[5px] rounded-md p-2.5 transition-colors hover:bg-cream lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
        >
          <span
            className={`block h-[2px] w-5 origin-center rounded-full bg-navy transition-transform duration-200 ease-out-expo ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full bg-navy transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-[2px] w-5 origin-center rounded-full bg-navy transition-transform duration-200 ease-out-expo ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 max-w-7xl rounded-2xl border border-navy/10 bg-white/95 p-1 shadow-card backdrop-blur-md lg:hidden"
        >
          <div className="flex flex-col gap-0.5 px-3 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[13px] font-medium uppercase tracking-[0.12em] text-slate-dim transition-colors duration-200 hover:bg-rose-pale hover:text-navy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rose"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-navy py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-navy-deep cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
            >
              Refer a Client
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
