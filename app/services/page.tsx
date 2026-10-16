import type { Metadata } from 'next'
import SiteShell from '@/components/layout/SiteShell'
import PageHero from '@/components/layout/PageHero'
import PageCta from '@/components/layout/PageCta'
import ArchFrame from '@/components/ui/ArchFrame'
import { Check } from '@/components/ui/Icons'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Supported Living Services in London | Haven Flow Care',
  description:
    'Explore Haven Flow Care services in London: personal care, independent living support, emotional wellbeing, accompanied transport, and community-focused care.',
  alternates: {
    canonical: '/services',
  },
}

const process = [
  {
    num: '01',
    title: 'Initial consultation',
    desc: 'We get to know the person, their family and the professionals around them.',
  },
  {
    num: '02',
    title: 'Personalised care plan',
    desc: 'A plan built around goals, routines and preferences — written with them, not for them.',
  },
  {
    num: '03',
    title: 'Caregiver matching',
    desc: 'Vetted, trained carers matched on skills, experience and personality.',
  },
  {
    num: '04',
    title: 'Ongoing review',
    desc: 'Regular reviews and feedback, so care adapts as needs change.',
  },
]

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        layout="split"
        eyebrow="Our services"
        title={
          <>
            Services built around <span className="accent text-rose-ink">each individual.</span>
          </>
        }
        lead="Care shaped around each person’s goals, preferences and pace — from round-the-clock complex care to building everyday independence."
      />

      <nav aria-label="Jump to a service" className="container-hf flex flex-wrap gap-2.5 pb-14">
        {services.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="inline-flex min-h-[44px] items-center rounded-full bg-blush-2 px-[18px] text-[15px] font-medium text-navy no-underline transition-colors hover:bg-pink-pale"
          >
            {s.navLabel}
          </a>
        ))}
      </nav>

      <section className="container-hf flex flex-col gap-6 pb-[clamp(64px,9vw,104px)]">
        {services.map((s) => (
          <article
            key={s.id}
            id={s.id}
            className="flex scroll-mt-[140px] flex-wrap items-center gap-x-14 gap-y-8 rounded-[32px] border border-line bg-white p-[clamp(24px,4vw,48px)]"
          >
            <div className="min-w-0 flex-[0_1_300px]">
              <ArchFrame
                photo={s.photo}
                shape="arch"
                fill={s.fill}
                ratio="aspect-square"
                sizes="(max-width: 768px) 88vw, 300px"
              />
            </div>
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
              <span className="accent text-[28px] text-rose-ink">{s.num}</span>
              <h2 className="text-display-5 font-medium text-navy">{s.title}</h2>
              <p className="text-[18px] leading-[1.6]">{s.body}</p>
              <ul className="m-0 mt-1.5 grid list-none gap-x-6 gap-y-3 p-0 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[16px] leading-[1.5]">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-steel" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="on-navy bg-navy text-on-navy">
        <div className="container-hf section-y flex flex-col gap-12">
          <div className="flex max-w-[680px] flex-col gap-4">
            <span className="eyebrow eyebrow-on-navy">How it works</span>
            <h2 className="text-display-3 font-medium text-white">
              From first call to <span className="accent text-rose-soft">settled care.</span>
            </h2>
          </div>
          <ol className="m-0 grid list-none gap-8 p-0 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
            {process.map((p) => (
              <li
                key={p.num}
                className="flex flex-col gap-3 border-t-2 border-rose-on-navy pt-6"
              >
                <span className="accent text-[26px] text-rose-on-navy">{p.num}</span>
                <strong className="text-[22px] font-medium text-white">{p.title}</strong>
                <span className="text-[16px] leading-[1.6]">{p.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PageCta
        title={
          <>
            Ready to talk about <span className="accent text-rose-deep">care?</span>
          </>
        }
        description="Tell us a little about the person and their needs — we’ll respond within 24 hours."
        actions={[
          { href: '/contact', label: 'Get in touch' },
          {
            href: 'tel:07904333304',
            label: 'Call 07904 333 304',
            variant: 'secondary',
            external: true,
          },
        ]}
      />
    </SiteShell>
  )
}
