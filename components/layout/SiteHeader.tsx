'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  // { label: 'Nanny Services', href: '/nanny-services' }, // temporarily unavailable
  { label: 'Care Home Staffing', href: '/care-home-staffing' },
  { label: 'HavenWork', href: '/havenwork' },
  { label: 'Careers', href: '/caregiver-application' },
  { label: 'Contact', href: '/contact' },
]

const navLinkBase =
  'inline-flex min-h-[44px] items-center rounded-full px-3 text-[15px] font-medium text-navy transition-colors duration-200 hover:bg-blush-2 xl:px-[14px] xl:text-[16px]'

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the mobile panel whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-blush/95 backdrop-blur-md">
      <div className="bg-navy text-[14px] text-rose-soft">
        <div className="container-hf flex flex-wrap justify-between gap-x-6 gap-y-1.5 py-2">
          <span className="hidden sm:inline">
            Supported living &amp; complex care across London
          </span>
          <span className="flex flex-wrap gap-x-[22px] gap-y-1.5">
            <a
              href="tel:07904333304"
              className="inline-flex min-h-[32px] items-center text-white hover:text-rose-soft"
            >
              07904 333 304
            </a>
            <a
              href="mailto:admin@havenflowcare.co.uk"
              className="inline-flex min-h-[32px] items-center text-white hover:text-rose-soft"
            >
              admin@havenflowcare.co.uk
            </a>
          </span>
        </div>
      </div>

      <div className="container-hf flex items-center justify-between gap-4 py-3 lg:gap-8 lg:py-4">
        <Link href="/" aria-label="Haven Flow Care home" className="flex shrink-0 items-center">
          <Image
            src="/havenflow-logo.png"
            alt="Haven Flow Care"
            width={977}
            height={315}
            priority
            className="h-11 w-auto sm:h-[52px] lg:h-[58px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden min-w-0 flex-1 lg:block">
          <ul className="flex list-none items-center justify-end gap-0.5 xl:gap-1">
            {navLinks.map((l) => {
              const active = isActive(l.href)
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? 'page' : undefined}
                    className={`${navLinkBase} ${active ? 'bg-rose-soft' : ''}`}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link href="/contact" className="btn btn-sm btn-primary hidden sm:inline-flex">
            Refer a client
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-input-border bg-white transition-colors hover:bg-blush-2 lg:hidden"
          >
            <span
              className={`block h-[2px] w-[18px] origin-center rounded-full bg-navy transition-transform duration-200 ease-out-expo ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-[18px] rounded-full bg-navy transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-[18px] origin-center rounded-full bg-navy transition-transform duration-200 ease-out-expo ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-blush lg:hidden">
          <ul className="container-hf flex list-none flex-col py-2">
            {navLinks.map((l) => {
              const active = isActive(l.href)
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? 'page' : undefined}
                    className={`flex min-h-[48px] items-center rounded-xl px-4 text-[17px] font-medium text-navy ${
                      active ? 'bg-rose-soft' : ''
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
            <li className="mt-2 pb-2">
              <Link href="/contact" className="btn btn-primary w-full">
                Refer a client
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
