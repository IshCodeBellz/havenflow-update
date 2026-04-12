import Link from 'next/link'

const details = [
  { label: 'Call us', value: '07904 333 304', href: 'tel:07904333304' },
  { label: 'Email us', value: 'admin@havenflowcare.co.uk', href: 'mailto:admin@havenflowcare.co.uk' },
  { label: 'Based in', value: 'London, UK', href: null },
]

const btnPrimary =
  'inline-flex cursor-pointer items-center justify-center rounded-lg bg-rose px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.1em] text-white shadow-sm transition-all duration-200 hover:bg-rose-dark hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep'

const btnGhost =
  'inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/35 bg-white/[0.04] px-8 py-3.5 text-[12px] font-light uppercase tracking-[0.1em] text-white backdrop-blur-[2px] transition-all duration-200 hover:border-white/60 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep'

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-6 py-20 text-center sm:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-24 -top-28 h-96 w-96 rounded-full bg-rose/[0.06] blur-3xl" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-navy/60 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_120%,rgba(202,155,171,0.08)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Get In Touch</p>

        <h2 className="mb-5 font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-[2.85rem]">
          Ready to find the <em className="italic text-rose-light">right</em> care?
        </h2>

        <p className="mb-12 text-[15px] font-light leading-[1.85] text-slate-muted">
          Whether you&apos;re exploring options for a loved one or looking to join our team, we&apos;d love to hear
          from you.
        </p>

        <div className="mb-16 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link href="/contact" className={btnPrimary}>
            Start a Conversation
          </Link>
          <Link href="/caregiver-application" className={btnGhost}>
            Caregiver Jobs
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-10 border-t border-white/10 pt-10 sm:gap-16">
          {details.map((d) => (
            <div key={d.label} className="min-w-[10rem] text-left sm:min-w-0">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-mid">{d.label}</p>
              {d.href ? (
                <a
                  href={d.href}
                  className="text-[15px] text-white transition-colors duration-200 hover:text-rose-light cursor-pointer focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
                >
                  {d.value}
                </a>
              ) : (
                <p className="text-[15px] text-white">{d.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
