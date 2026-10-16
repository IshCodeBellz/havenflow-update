import Link from 'next/link'
import Image from 'next/image'

const exploreLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About us', href: '/about' },
  // { label: 'Nanny services', href: '/nanny-services' }, // temporarily unavailable
  { label: 'Care home staffing', href: '/care-home-staffing' },
  { label: 'HavenWork', href: '/havenwork' },
  { label: 'Careers', href: '/caregiver-application' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Terms', href: '/terms' },
]

const socials = [
  {
    label: 'Haven Flow on Instagram',
    href: 'https://www.instagram.com/havenflowcare/',
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" />
      </>
    ),
  },
  {
    label: 'Haven Flow on LinkedIn',
    href: 'https://www.linkedin.com/company/haven-flow-care/',
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </>
    ),
  },
  {
    label: 'Haven Flow on Facebook',
    href: 'https://www.facebook.com/profile.php?id=61567039918468',
    path: <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z" />,
  },
  {
    label: 'Haven Flow on X',
    href: 'https://x.com/HavenFlowCare',
    path: <path d="M4 4l16 16M20 4L4 20" />,
  },
]

/* 44px rows keep every footer link a comfortable touch target on phones. */
const footerLink =
  'flex min-h-[44px] items-center text-[16px] text-white transition-colors hover:text-rose-on-navy'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="on-navy relative overflow-hidden bg-navy text-on-navy">
      {/* Navy arc rising out of the blush page background. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-[56px] w-full bg-blush"
      >
        <path d="M0 80 C 360 0, 1080 0, 1440 80 Z" fill="#0F3459" />
      </svg>

      <div className="container-hf grid gap-10 pt-10 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        <div className="flex min-w-0 flex-col gap-5">
          <Link href="/" aria-label="Haven Flow Care home" className="inline-flex">
            <Image
              src="/havenflow-logo-white.png"
              alt="Haven Flow Care"
              width={977}
              height={315}
              className="h-auto w-[220px]"
            />
          </Link>
          <p className="text-[16px] leading-[1.6] text-on-navy">
            Personalised supported living and complex care across London. Established 2024.
          </p>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-soft text-white transition-colors hover:border-rose-on-navy hover:text-rose-on-navy"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[18px] w-[18px]"
                >
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-1.5">
          <span className="eyebrow eyebrow-on-navy mb-2 tracking-[0.16em]">Explore</span>
          {exploreLinks.map((l) => (
            <Link key={l.href} href={l.href} className={footerLink}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1.5">
          <span className="eyebrow eyebrow-on-navy mb-2 tracking-[0.16em]">Get in touch</span>
          <a
            href="tel:07904333304"
            className="text-[22px] font-medium text-white transition-colors hover:text-rose-on-navy"
          >
            07904 333 304
          </a>
          <span className="text-[15px] text-on-navy">Mon–Fri, 9am–5pm</span>
          <a
            href="mailto:admin@havenflowcare.co.uk"
            className="mt-3 break-words text-[16px] text-white transition-colors hover:text-rose-on-navy"
          >
            admin@havenflowcare.co.uk
          </a>
          <span className="text-[15px] text-on-navy">We reply within 24 hours</span>
        </div>

        <div className="flex flex-col gap-3.5 rounded-[20px] bg-navy-card p-[26px]">
          <span className="accent text-[24px] leading-[1.25] text-white">
            Referring someone into our care?
          </span>
          <span className="text-[15px] leading-[1.55] text-on-navy">
            We work with social workers, healthcare professionals and local authorities.
          </span>
          <Link href="/contact" className="btn btn-sm btn-light self-start">
            Make a referral
          </Link>
        </div>
      </div>

      <div className="container-hf mt-12 flex flex-wrap justify-between gap-x-6 gap-y-2.5 border-t border-navy-line pb-7 pt-[22px] text-[14px] text-on-navy-dim">
        <span>
          © {year} Haven Flow Care Ltd · Registered in England &amp; Wales, Company No. 15697128
        </span>
        <span className="flex flex-wrap items-center gap-x-5">
          {legalLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex min-h-[44px] items-center text-white transition-colors hover:text-rose-on-navy"
            >
              {l.label}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  )
}
