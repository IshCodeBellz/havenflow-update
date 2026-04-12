import Link from 'next/link'

type PageCtaProps = {
  title: string
  description: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}

const btnPrimary =
  'inline-flex cursor-pointer items-center justify-center rounded-lg bg-rose px-10 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm transition-all duration-200 hover:bg-rose-dark hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep'

const btnGhost =
  'inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/35 bg-white/[0.04] px-10 py-3.5 text-[12px] font-light uppercase tracking-[0.1em] text-white backdrop-blur-[2px] transition-all duration-200 hover:border-white/55 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep'

export default function PageCta({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageCtaProps) {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-6 py-20 text-center sm:px-10 lg:py-24">
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-rose/[0.06] blur-3xl" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-navy/50 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-xl">
        <h2 className="font-serif text-4xl font-medium leading-[1.12] text-white sm:text-5xl">{title}</h2>
        <p className="mt-5 text-[15px] font-light leading-[1.85] text-slate-muted">{description}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link href={primaryHref} className={btnPrimary}>
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link href={secondaryHref} className={btnGhost}>
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
