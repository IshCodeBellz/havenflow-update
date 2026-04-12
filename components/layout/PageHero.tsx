import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  /** Shown under description (e.g. last updated) */
  meta?: string
  layout?: 'single' | 'split'
  align?: 'left' | 'center'
  children?: ReactNode
}

export default function PageHero({
  eyebrow,
  title,
  description,
  meta,
  layout = 'single',
  align = 'left',
  children,
}: PageHeroProps) {
  const isCenter = align === 'center'
  const titleBlock = (
    <h1
      className={`max-w-3xl font-serif text-[2.35rem] font-medium leading-[1.08] text-white sm:text-5xl lg:text-6xl ${
        isCenter ? 'mx-auto' : ''
      }`}
    >
      {title}
    </h1>
  )

  return (
    <section className="relative overflow-hidden bg-navy-deep px-6 py-16 sm:px-10 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-90" aria-hidden />
      <div
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-rose/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-navy/50 blur-3xl"
        aria-hidden
      />

      <div
        className={`relative mx-auto max-w-7xl ${
          isCenter ? 'text-center' : ''
        }`}
      >
        <p
          className={`mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose ${
            isCenter ? 'mx-auto max-w-2xl' : ''
          }`}
        >
          {eyebrow}
        </p>

        {layout === 'split' && description ? (
          <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
            <div>{titleBlock}</div>
            <div>
              <p className="max-w-xl text-[15px] font-light leading-[1.85] text-slate-muted lg:max-w-none">
                {description}
              </p>
              {meta ? (
                <p className="mt-5 text-[14px] font-light leading-relaxed text-slate-mid">{meta}</p>
              ) : null}
            </div>
          </div>
        ) : (
          <>
            <div className={isCenter ? 'mx-auto max-w-3xl' : ''}>{titleBlock}</div>
            {description ? (
              <p
                className={`mt-6 max-w-2xl text-[15px] font-light leading-[1.85] text-slate-muted ${
                  isCenter ? 'mx-auto' : ''
                }`}
              >
                {description}
              </p>
            ) : null}
            {meta ? (
              <p
                className={`mt-5 text-[14px] font-light leading-relaxed text-slate-mid ${
                  isCenter ? 'mx-auto max-w-2xl' : ''
                }`}
              >
                {meta}
              </p>
            ) : null}
          </>
        )}

        {children}
      </div>
    </section>
  )
}
