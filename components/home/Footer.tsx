import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  // { label: 'Nanny Services', href: '/nanny-services' }, // temporarily unavailable
  { label: 'Care Home Staffing', href: '/care-home-staffing' },
  { label: 'Careers', href: '/caregiver-application' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/havenflowcare/',
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/haven-flow-care/',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61567039918468',
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/HavenFlowCare',
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
]

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {children}
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-darker">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-rose/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-navy/[0.5] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-white/95 p-3 shadow-sm ring-1 ring-white/20 transition-shadow duration-200 hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-navy-darker"
              aria-label="Haven Flow Care home"
            >
              <Image
                src="/havenflow-logo.png"
                alt="Haven Flow Care"
                width={395}
                height={103}
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <p className="mt-6 max-w-md text-[14px] font-light leading-[1.75] text-slate-muted">
              A dedicated care service specialising in supported living across London. Established 2024.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-muted transition-all duration-200 hover:border-rose/35 hover:bg-rose/[0.12] hover:text-rose-light cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-navy-darker"
                >
                  <SocialIcon>{s.icon}</SocialIcon>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-light/90">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] font-light text-slate-muted transition-colors duration-200 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-navy-darker"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-light/90">
              Contact
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:07904333304"
                  className="inline-flex text-[15px] font-light text-slate-muted transition-colors duration-200 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-navy-darker"
                >
                  07904 333 304
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@havenflowcare.co.uk"
                  className="inline-flex break-all text-[15px] font-light text-slate-muted transition-colors duration-200 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-navy-darker"
                >
                  admin@havenflowcare.co.uk
                </a>
              </li>
              <li className="text-[14px] font-light text-slate-muted">London, UK</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-10">
          <p className="text-center text-[11px] tracking-[0.04em] text-slate-mid sm:text-left">
            © 2024 Haven Flow Care. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:justify-end">
            <Link
              href="/privacy"
              className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-mid transition-colors duration-200 hover:text-rose-light cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-navy-darker"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-mid transition-colors duration-200 hover:text-rose-light cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-navy-darker"
            >
              Cookies
            </Link>
            <Link
              href="/terms"
              className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-mid transition-colors duration-200 hover:text-rose-light cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-navy-darker"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
