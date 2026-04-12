import Link from 'next/link'

const stats = [
  { num: '10+', label: 'Tailored service options' },
  { num: '100%', label: 'Person-centred care' },
  { num: 'Est. 2024', label: 'London-based & growing' },
]

const btnPrimary =
  'inline-flex cursor-pointer items-center justify-center rounded-lg bg-rose px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.1em] text-white shadow-sm transition-all duration-200 hover:bg-rose-dark hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep'

const btnGhost =
  'inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/35 bg-white/[0.04] px-8 py-3.5 text-[12px] font-light uppercase tracking-[0.1em] text-white backdrop-blur-[2px] transition-all duration-200 hover:border-white/60 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep'

export default function Hero() {
  return (
    <section className="relative grid min-h-[calc(100vh-6rem)] overflow-hidden bg-navy-deep lg:min-h-[calc(100vh-6.5rem)] lg:grid-cols-2">
      <div
        className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[min(90vw,28rem)] w-[min(90vw,28rem)] -translate-y-1/2 rounded-full bg-rose/[0.07] blur-3xl"
        aria-hidden
      />

      <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
        <p className="animate-fade-up animate-delay-100 mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">
          Supported Living · London
        </p>

        <h1 className="animate-fade-up animate-delay-200 mb-7 max-w-xl font-serif text-[2.35rem] font-medium leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          Care that feels
          <br />
          like <em className="italic text-rose-light">home.</em>
        </h1>

        <p className="animate-fade-up animate-delay-300 mb-12 max-w-[440px] text-[15px] font-light leading-[1.85] text-slate-muted">
          Haven Flow Care provides personalised supported living across London — built on compassion, trust, and a
          genuine belief in every person&apos;s capacity to thrive independently.
        </p>

        <div className="animate-fade-up animate-delay-400 flex flex-wrap gap-3 sm:gap-4">
          <Link href="/services" className={btnPrimary}>
            Explore Our Services
          </Link>
          <Link href="/about" className={btnGhost}>
            About Haven Flow
          </Link>
        </div>
      </div>

      <div className="relative hidden flex-col justify-center overflow-hidden bg-gradient-to-br from-navy/50 via-navy-deep to-navy-darker lg:flex lg:px-12 xl:px-16">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-rose/[0.08] blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-navy/80 blur-2xl"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-sm rounded-2xl border border-white/[0.12] bg-white/[0.06] p-10 shadow-card backdrop-blur-md ring-1 ring-white/[0.06]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={i > 0 ? 'mt-8 border-t border-white/[0.08] pt-8' : ''}
            >
              <p className="font-serif text-5xl font-medium leading-none tracking-tight text-white">{s.num}</p>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-mid">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid grid-cols-3 border-t border-white/10 bg-navy-darker/95 lg:hidden">
        {stats.map((s) => (
          <div key={s.label} className="border-r border-white/10 px-4 py-7 last:border-r-0 sm:px-6">
            <p className="font-serif text-2xl font-medium text-white sm:text-3xl">{s.num}</p>
            <p className="mt-2 text-[9px] font-medium uppercase leading-snug tracking-[0.12em] text-slate-mid sm:text-[10px]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
