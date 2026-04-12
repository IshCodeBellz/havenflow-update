import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import PageHero from '@/components/layout/PageHero'
import CaregiverApplicationForm from '@/components/caregiver/CaregiverApplicationForm'

const reasons = [
  {
    num: '01',
    title: 'Meaningful Work',
    desc: "Every day you make a real difference in someone's life. This is care that goes beyond tasks — it builds genuine relationships.",
  },
  {
    num: '02',
    title: 'Supported From Day One',
    desc: "We don't place you and disappear. You'll have a team behind you, ongoing training, and a management team that listens.",
  },
  {
    num: '03',
    title: 'Fair Pay & Recognition',
    desc: 'We believe caregivers deserve to be valued. Our rates reflect the skilled, important work our team does every day.',
  },
  {
    num: '04',
    title: 'Room to Grow',
    desc: "Whether you're starting out or experienced, we invest in your professional development and progression.",
  },
]

const requirements = [
  'Right to work in the UK',
  'Enhanced DBS check (we can assist)',
  'Reliable, compassionate, and professional',
  'Good spoken and written English',
  'Able to work flexibly, including some evenings or weekends',
  'Previous care experience is an advantage but not always required',
]

const roles = [
  {
    title: 'Supported Living Caregiver',
    type: 'Full-time / Part-time',
    desc: 'Provide day-to-day support to individuals in their own homes across London. No two days are the same.',
  },
  {
    title: 'Independent Living Support Worker',
    type: 'Part-time / Flexible',
    desc: 'Help individuals build confidence and capability in daily life skills — from cooking to community engagement.',
  },
  {
    title: 'Ofsted Registered Nanny',
    type: 'Full-time / Live-in / Live-out',
    desc: 'Join our nanny placement pool and be matched with London families who value quality childcare.',
  },
  {
    title: 'Night Support Worker',
    type: 'Night shifts available',
    desc: 'Provide overnight care and supervision for individuals who need safe, comfortable support through the night.',
  },
]

export default function CaregiverApplicationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          layout="split"
          eyebrow="Join Our Team"
          title="A career worth caring about."
          description={
            "We're always looking for compassionate, professional people to join the Haven Flow Care team. If you believe in person-centred care and want to make a genuine difference, we want to hear from you."
          }
        />

        <section className="px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-xl lg:mb-14">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Why Haven Flow Care</p>
              <h2 className="font-serif text-4xl font-medium leading-[1.12] text-navy lg:text-[2.65rem]">More than just a job.</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {reasons.map((r) => (
                <article
                  key={r.num}
                  className="rounded-2xl border border-cream-border bg-white p-8 shadow-card transition-all duration-200 ease-out-expo hover:border-rose/25 hover:shadow-card-hover lg:p-9"
                >
                  <p className="mb-4 font-serif text-[12px] font-semibold tracking-[0.14em] text-rose">{r.num}</p>
                  <h3 className="mb-3 font-serif text-[1.25rem] font-medium leading-snug text-navy">{r.title}</h3>
                  <p className="text-[13px] font-light leading-[1.75] text-slate-soft">{r.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Open Roles</p>
              <h2 className="mb-10 font-serif text-4xl font-medium leading-tight text-navy">Where you could fit in.</h2>
              <div className="flex flex-col gap-4">
                {roles.map((role) => (
                  <div
                    key={role.title}
                    className="rounded-2xl border border-cream-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-card"
                  >
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-serif text-xl font-medium leading-snug text-navy">{role.title}</h3>
                      <span className="shrink-0 rounded-full bg-rose/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-rose-dark">
                        {role.type}
                      </span>
                    </div>
                    <p className="text-[13px] font-light leading-[1.75] text-slate-soft">{role.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">What We&apos;re Looking For</p>
              <h2 className="mb-6 font-serif text-4xl font-medium leading-tight text-navy">Basic requirements.</h2>
              <p className="mb-8 text-[15px] font-light leading-[1.85] text-slate-soft">
                We hire for character as much as experience. If you have the right values and attitude, we&apos;ll invest
                in training and development.
              </p>
              <ul className="flex flex-col gap-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose shadow-[0_0_0_3px_rgba(202,155,171,0.2)]" aria-hidden />
                    <p className="text-[14px] font-light leading-[1.7] text-slate-soft">{req}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Apply Now</p>
              <h2 className="font-serif text-4xl font-medium leading-tight text-navy lg:text-[2.65rem]">Take the first step.</h2>
              <p className="mt-4 max-w-md text-[15px] font-light leading-[1.85] text-slate-soft">
                Fill in the form below and we&apos;ll be in touch within 48 hours to discuss the right role for you.
              </p>
            </div>

            <div className="rounded-2xl border border-cream-border bg-cream/40 p-8 shadow-card sm:p-10 lg:max-w-2xl lg:bg-white/90 lg:backdrop-blur-sm">
              <CaregiverApplicationForm roles={roles} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
