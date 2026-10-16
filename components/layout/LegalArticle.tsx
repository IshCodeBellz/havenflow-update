import type { ReactNode } from 'react'
import Link from 'next/link'

export type LegalSection = {
  /** Anchor id, also used by the "On this page" nav. */
  id: string
  heading: string
  body: ReactNode
}

type LegalArticleProps = {
  title: string
  lastUpdated: string
  intro: ReactNode
  sections: LegalSection[]
  /** Which of the three legal documents is open. */
  active: 'privacy' | 'cookies' | 'terms'
}

const docs = [
  { key: 'privacy', label: 'Privacy', href: '/privacy' },
  { key: 'cookies', label: 'Cookies', href: '/cookies' },
  { key: 'terms', label: 'Terms', href: '/terms' },
] as const

/** Shared layout for /privacy, /cookies and /terms. */
export function LegalArticle({
  title,
  lastUpdated,
  intro,
  sections,
  active,
}: LegalArticleProps) {
  return (
    <>
      <section className="bg-blush-2">
        <div className="container-hf flex flex-col gap-5 pb-10 pt-[clamp(40px,6vw,80px)]">
          <span className="eyebrow">Legal</span>
          <h1 className="text-[clamp(40px,5vw,64px)] font-medium leading-[1.05] tracking-[-0.02em] text-navy">
            {title}
          </h1>
          <p className="text-[17px] text-body">Last updated: {lastUpdated}</p>
          <nav aria-label="Legal documents" className="mt-3 flex flex-wrap gap-2">
            {docs.map((d) => {
              const selected = d.key === active
              return (
                <Link
                  key={d.key}
                  href={d.href}
                  aria-current={selected ? 'page' : undefined}
                  className={`inline-flex min-h-[46px] items-center rounded-full border px-5 text-[16px] font-medium no-underline transition-colors ${
                    selected
                      ? 'border-navy bg-navy text-white'
                      : 'border-input-border bg-blush text-navy hover:bg-pink-pale'
                  }`}
                >
                  {d.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </section>

      <section className="container-hf flex flex-wrap items-start gap-12 pb-[clamp(64px,9vw,104px)] pt-16">
        <nav
          aria-label="On this page"
          className="flex min-w-0 max-w-[300px] flex-[1_1_240px] flex-col gap-1"
        >
          <span className="eyebrow mb-2.5 tracking-[0.16em]">On this page</span>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex min-h-10 items-center border-l-2 border-line pl-3.5 text-[16px] text-navy no-underline transition-colors hover:border-rose-ink hover:text-rose-ink"
            >
              {s.heading}
            </a>
          ))}
        </nav>

        <article className="flex min-w-0 max-w-[760px] flex-[999_1_520px] flex-col gap-10">
          <p className="m-0 text-[19px] leading-[1.7] text-body">{intro}</p>
          {sections.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="flex scroll-mt-[140px] flex-col gap-3.5 border-t border-line pt-7"
            >
              <h2 className="m-0 text-[26px] font-medium text-navy">{s.heading}</h2>
              <div className="flex flex-col gap-3.5 text-[17px] leading-[1.75]">{s.body}</div>
            </div>
          ))}

          <div className="flex flex-col gap-2 rounded-[22px] border border-line bg-white p-7">
            <strong className="text-[19px] font-medium text-navy">
              Questions about this policy?
            </strong>
            <span className="text-[16px] leading-[1.6]">
              Email{' '}
              <a href="mailto:admin@havenflowcare.co.uk" className="text-navy underline">
                admin@havenflowcare.co.uk
              </a>{' '}
              or call{' '}
              <a href="tel:07904333304" className="text-navy underline">
                07904 333 304
              </a>
              .
            </span>
            <span className="text-[15px] text-muted">
              Haven Flow Care Ltd · Company No. 15697128
            </span>
          </div>
        </article>
      </section>
    </>
  )
}
