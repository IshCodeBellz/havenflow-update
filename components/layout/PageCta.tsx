import type { ReactNode } from 'react'
import Link from 'next/link'

type Action = {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
  /** tel:/mailto: links render as plain anchors. */
  external?: boolean
}

type PageCtaProps = {
  /** Pass a <span className="accent"> for the italic accent words. */
  title: ReactNode
  description: ReactNode
  actions: Action[]
  /** Pull the band up tight against the preceding section. */
  flush?: boolean
}

/** The pink-pale closing band used at the foot of the inner pages. */
export default function PageCta({ title, description, actions, flush = false }: PageCtaProps) {
  return (
    <section className={`container-hf ${flush ? 'pb-[clamp(64px,9vw,104px)]' : 'section-y'}`}>
      <div className="flex flex-wrap items-center justify-between gap-7 rounded-[32px] bg-pink-pale p-[clamp(28px,5vw,64px)]">
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-3.5">
          <h2 className="text-display-4 font-medium text-navy">{title}</h2>
          <p className="text-[18px] leading-[1.6] text-body">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          {actions.map((a) => {
            const className = `btn ${a.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}`
            return a.external ? (
              <a key={a.href} href={a.href} className={className}>
                {a.label}
              </a>
            ) : (
              <Link key={a.href} href={a.href} className={className}>
                {a.label}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
