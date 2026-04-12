import type { Metadata } from 'next'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import PageHero from '@/components/layout/PageHero'
import PageCta from '@/components/layout/PageCta'

const roles = [
  {
    num: '01',
    title: 'Registered nurses',
    desc: 'Qualified nursing professionals to support clinical care, medication rounds, and regulatory standards when your home needs experienced cover.',
  },
  {
    num: '02',
    title: 'Care assistants & carers',
    desc: 'Compassionate, trained carers for personal care, mealtimes, activities, and day-to-day support — matched to the ethos of your service.',
  },
  {
    num: '03',
    title: 'Support & ancillary staff',
    desc: 'Reliable team members for housekeeping, catering support, laundry, and other roles that keep your home running smoothly for residents.',
  },
]

const whyPartner = [
  {
    title: 'Built on care standards',
    desc: 'We understand regulated environments. Our approach aligns with the quality and safeguarding expectations of residential and nursing care.',
  },
  {
    title: 'Responsive to your rota',
    desc: 'Whether you need short-term cover, backfill for leave, or longer arrangements, we work with you to reduce pressure on permanent teams.',
  },
  {
    title: 'Vetted professionals',
    desc: 'Robust checks and relevant experience are central to how we present candidates — so you can focus on residents, not endless recruitment admin.',
  },
  {
    title: 'London & surrounding areas',
    desc: 'We support care homes across London and nearby regions. Tell us your location, shift patterns, and skill mix — we will advise honestly on fit.',
  },
]

const process = [
  {
    step: '01',
    title: 'Discuss your needs',
    desc: 'Share vacancy types, ratios, qualifications required, and timeframes — ad hoc shifts, block booking, or ongoing support.',
  },
  {
    step: '02',
    title: 'We propose suitable staff',
    desc: 'We identify nurses, carers, or support staff from our network whose skills and availability match what you have outlined.',
  },
  {
    step: '03',
    title: 'Agree terms & start dates',
    desc: 'We align on expectations, compliance documentation, and handover so your team feels prepared from day one.',
  },
  {
    step: '04',
    title: 'Ongoing partnership',
    desc: 'Care needs and staffing levels change. We stay in touch to adjust supply and maintain continuity for your home.',
  },
]

export const metadata: Metadata = {
  title: 'Nurses, Carers & Staff for Care Homes | Haven Flow Care',
  description:
    'Haven Flow Care supplies registered nurses, care assistants, and support staff to other care homes across London — flexible cover you can rely on.',
  alternates: {
    canonical: '/care-home-staffing',
  },
}

export default function CareHomeStaffingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          layout="split"
          eyebrow="For care homes"
          title="Nurses, carers, and staff when you need them."
          description={
            'We partner with other care homes to provide qualified nurses, experienced carers, and dependable support staff. If you are short on cover or scaling your team, we can help bridge the gap with people who take pride in dignified, person-centred care.'
          }
        />

        <section className="bg-section-fade px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl lg:mb-14">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">What we supply</p>
              <h2 className="font-serif text-4xl font-medium leading-tight text-navy lg:text-[2.65rem]">
                The right mix of skills for your home.
              </h2>
              <p className="mt-6 text-[15px] font-light leading-[1.85] text-slate-soft">
                Every home is different. We listen to your staffing plan — clinical intensity, dementia specialism,
                younger adults, or general residential — and work to supply professionals who strengthen your existing
                team rather than unsettling it.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
              {roles.map((r) => (
                <article
                  key={r.num}
                  className="rounded-2xl border border-cream-border bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover lg:p-9"
                >
                  <p className="mb-4 font-serif text-[12px] font-semibold tracking-[0.14em] text-rose">{r.num}</p>
                  <h3 className="mb-3 font-serif text-[1.35rem] font-medium leading-snug text-navy">{r.title}</h3>
                  <p className="text-[13px] font-light leading-[1.75] text-slate-soft">{r.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Why partner with us</p>
              <h2 className="mb-6 font-serif text-4xl font-medium leading-tight text-navy lg:text-[2.65rem]">
                Support that respects how you already care.
              </h2>
              <p className="max-w-md text-[15px] font-light leading-[1.85] text-slate-soft">
                Supplying staff to other care homes is about trust. We aim to be straightforward, transparent on
                capability and availability, and consistent — so managers can plan with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {whyPartner.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-cream-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-card sm:p-7"
                >
                  <h3 className="mb-2 font-serif text-xl font-medium text-navy">{item.title}</h3>
                  <p className="text-[13px] font-light leading-[1.75] text-slate-soft">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy px-6 py-16 sm:px-10 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_0%,rgba(202,155,171,0.1)_0%,transparent_50%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 max-w-md lg:mb-14">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">How it works</p>
              <h2 className="font-serif text-4xl font-medium leading-tight text-white lg:text-[2.65rem]">
                From first call to staff on the floor.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-200 hover:border-rose/25 lg:p-9"
                >
                  <p className="mb-5 font-serif text-4xl font-medium leading-none text-white/20">{p.step}</p>
                  <h3 className="mb-3 font-serif text-xl font-medium text-white">{p.title}</h3>
                  <p className="text-[13px] font-light leading-[1.75] text-slate-mid">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title="Need nurses, carers, or support staff?"
          description={
            'Tell us about your home and staffing gaps — we will respond promptly and advise how we can help.'
          }
          primaryHref="/contact"
          primaryLabel="Enquire for Your Care Home"
        />
      </main>
      <Footer />
    </>
  )
}
