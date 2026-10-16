import type { Metadata } from 'next'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import PageHero from '@/components/layout/PageHero'
import PageCta from '@/components/layout/PageCta'

const services = [
  {
    num: '01',
    title: 'Skilled Nursing & Personal Care',
    desc: `Medically supervised personal care delivered with dignity and professionalism, in the comfort of your own home. Our trained caregivers assist with bathing, grooming, medication management, and health monitoring — always respecting each person's privacy and preferences.`,
    includes: [
      'Personal hygiene and grooming',
      'Medication prompting and management',
      'Health monitoring and reporting',
      'Post-hospital recovery support',
    ],
  },
  {
    num: '02',
    title: 'Household & Daily Living',
    desc: `Hands-on help with household tasks, meal planning, and budgeting to support a safe, comfortable, and independent lifestyle. We work alongside individuals — not instead of them — to build sustainable daily routines.`,
    includes: [
      'Meal preparation and nutrition guidance',
      'Household cleaning and organisation',
      'Shopping and errand support',
      'Budgeting and financial life skills',
    ],
  },
  {
    num: '03',
    title: 'Emotional & Social Support',
    desc: `Companionship, emotional wellbeing, and community connection — because thriving means more than physical care. Our team builds genuine relationships, actively listening and advocating for each person's social and emotional needs.`,
    includes: [
      'Regular companionship and conversation',
      'Accompanying to social activities',
      'Mental wellbeing check-ins',
      'Family communication and updates',
    ],
  },
  {
    num: '04',
    title: 'Independent Living Skills',
    desc: `Building confidence and capability in everyday routines, so each person can live life on their own terms. We develop personalised skill-building plans that grow with the individual, celebrating every step forward.`,
    includes: [
      'Cooking and self-care training',
      'Public transport and community navigation',
      'Time management and routine building',
      'Decision-making and problem-solving support',
    ],
  },
  {
    num: '05',
    title: 'Education, Employment & Volunteering',
    desc: `Supporting access to meaningful opportunities in education, work, and community engagement. We believe every person deserves the chance to contribute, learn, and grow — and we actively open doors to make that possible.`,
    includes: [
      'CV writing and job application support',
      'College and training course enrolment',
      'Volunteering placement coordination',
      'Workplace settling-in support',
    ],
  },
  {
    num: '06',
    title: 'Transport & Community Access',
    desc: `Safe, reliable travel support so appointments, activities, and everyday errands are never out of reach. Our caregivers accompany each person door to door, building familiarity and confidence with every journey.`,
    includes: [
      'Accompanied travel to medical appointments',
      'Transport to social and community activities',
      'Support with shopping and errand trips',
      'Door-to-door assistance and journey planning',
    ],
  },
  // Ofsted Nanny Services — temporarily unavailable
  // {
  //   num: '07',
  //   title: 'Ofsted Nanny Services',
  //   desc: `Professional, registered nanny placements for families across London, held to the highest care standards. All our nannies are Ofsted registered, DBS checked, and carefully matched to each family's specific needs and values.`,
  //   includes: [
  //     'Ofsted-registered nanny placement',
  //     'Full DBS and reference checks',
  //     'Family compatibility matching',
  //     'Ongoing placement support',
  //   ],
  // },
]

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
    step: '01',
    title: 'Initial Consultation',
    desc: 'We take time to understand your situation, goals, and what good care looks like for you or your loved one.',
  },
  {
    step: '02',
    title: 'Personalised Care Plan',
    desc: 'Together we build a tailored plan — flexible, practical, and centred entirely on the individual.',
  },
  {
    step: '03',
    title: 'Caregiver Matching',
    desc: 'We carefully match you with a caregiver whose skills, experience, and personality are the right fit.',
  },
  {
    step: '04',
    title: 'Ongoing Review',
    desc: 'Care needs evolve. We check in regularly to adjust plans, address concerns, and ensure continued quality.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="What We Offer"
          title="Services built around each individual."
          description="No two people are the same, and neither are their care needs. Every service we provide is shaped around the individual — their goals, their preferences, and their pace."
        />

        <section className="bg-section-fade px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-10">
            {services.map((s) => (
              <article
                key={s.num}
                className="grid gap-10 rounded-2xl border border-cream-border bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-14 lg:p-10 xl:p-12"
              >
                <div>
                  <p className="mb-4 font-serif text-[12px] font-semibold tracking-[0.14em] text-rose">{s.num}</p>
                  <h2 className="font-serif text-3xl font-medium leading-tight text-navy lg:text-4xl">{s.title}</h2>
                </div>
                <div>
                  <p className="mb-8 max-w-xl text-[15px] font-light leading-[1.85] text-slate-soft">{s.desc}</p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[13px] font-light text-slate-soft">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-cream px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-md lg:mb-14">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">How It Works</p>
              <h2 className="font-serif text-4xl font-medium leading-tight text-navy lg:text-[2.65rem]">
                Getting started is straightforward.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="rounded-2xl border border-cream-border bg-white p-8 shadow-sm transition-all duration-200 hover:border-rose/20 hover:shadow-card lg:p-9"
                >
                  <p className="mb-5 font-serif text-4xl font-medium leading-none text-navy/15">{p.step}</p>
                  <h3 className="mb-3 font-serif text-xl font-medium text-navy">{p.title}</h3>
                  <p className="text-[13px] font-light leading-[1.75] text-slate-soft">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title="Ready to talk about care?"
          description={
            "Reach out and we'll help you find the right service — no pressure, no jargon."
          }
          primaryHref="/contact"
          primaryLabel="Get in Touch"
        />
      </main>
      <Footer />
    </>
  )
}
