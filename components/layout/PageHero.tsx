import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  /** Pass a <span className="accent"> for the italic accent words. */
  title: ReactNode
  lead?: ReactNode
  /**
   * `split` puts the lead alongside the heading (Services),
   * `stacked` runs it underneath (Contact), `center` centres everything.
   */
  layout?: 'split' | 'stacked' | 'center'
  children?: ReactNode
}

export default function PageHero({
  eyebrow,
  title,
  lead,
  layout = 'stacked',
  children,
}: PageHeroProps) {
  const heading = (
    <h1 className="text-display-2 font-medium text-navy">{title}</h1>
  )

  if (layout === 'split') {
    return (
      <section className="container-hf flex flex-wrap items-end gap-x-16 gap-y-8 pb-16 pt-[clamp(40px,7vw,96px)]">
        <div className="flex min-w-0 flex-[1.3_1_520px] flex-col gap-[22px]">
          <span className="eyebrow">{eyebrow}</span>
          {heading}
          {children}
        </div>
        {lead ? (
          <p className="min-w-0 flex-[1_1_340px] text-[19px] leading-[1.65]">{lead}</p>
        ) : null}
      </section>
    )
  }

  if (layout === 'center') {
    return (
      <section className="container-hf flex flex-col items-center gap-6 pb-20 pt-[clamp(40px,7vw,96px)] text-center">
        <span className="eyebrow">{eyebrow}</span>
        <div className="max-w-[920px]">{heading}</div>
        {lead ? <p className="max-w-[640px] text-[19px] leading-[1.65]">{lead}</p> : null}
        {children}
      </section>
    )
  }

  return (
    <section className="container-hf flex flex-col gap-[22px] pb-14 pt-[clamp(40px,7vw,96px)]">
      <span className="eyebrow">{eyebrow}</span>
      <div className="max-w-[900px]">{heading}</div>
      {lead ? <p className="max-w-[620px] text-[19px] leading-[1.65]">{lead}</p> : null}
      {children}
    </section>
  )
}
