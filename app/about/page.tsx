import type { Metadata } from 'next'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import PageHero from '@/components/layout/PageHero'
import PageCta from '@/components/layout/PageCta'

const values = [
  {
    num: '01',
    title: 'Compassion First',
    desc: 'Every decision we make begins with empathy — for the people we support, the families who trust us, and the team members who show up every day.',
  },
  {
    num: '02',
    title: 'Genuine Respect',
    desc: "We honour each person's autonomy, choices, and dignity at every stage of their journey. Care should never feel like control.",
  },
  {
    num: '03',
    title: 'Quality You Can Feel',
    desc: 'Not just ticking boxes — we raise the bar on what good care actually looks and feels like in practice, every single day.',
  },
  {
    num: '04',
    title: 'Community at Our Core',
    desc: 'We exist to strengthen communities. That means supporting individuals to participate, connect, and contribute in ways that matter to them.',
  },
]

const commitments = [
  { label: 'Personalised care plans', sub: 'No two plans are ever the same' },
  // { label: 'Ofsted registered nannies', sub: 'London-wide placements' }, // temporarily unavailable
  { label: 'Experienced, vetted team', sub: 'Fully DBS checked' },
  { label: 'Regular review & feedback', sub: 'Care that evolves with you' },
  { label: 'London-based & growing', sub: 'Est. 2024' },
  { label: '100% person-centred', sub: 'Your goals, your pace' },
]

export const metadata: Metadata = {
  title: 'About Haven Flow Care | Compassionate London Care Team',
  description:
    'Learn about Haven Flow Care, our mission, values, and commitment to personalised supported living across London.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          layout="split"
          eyebrow="Our Story"
          title="Care rooted in real purpose."
          description={
            'Haven Flow Care was established in 2024 with a clear conviction — that supported living should feel like genuine support, not managed compliance. We set out to build something better.'
          }
        />

        <section className="px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Who We Are</p>
              <h2 className="mb-8 font-serif text-4xl font-medium leading-tight text-navy lg:text-[2.65rem]">
                A team built on care,
                <br className="hidden lg:block" /> not just compliance.
              </h2>
              <p className="mb-5 text-[15px] font-light leading-[1.85] text-slate-soft">
                We go beyond checklists. Our team of experienced professionals builds real relationships — taking the
                time to understand each person as an individual, not a case number. We tailor every interaction to
                their specific story, goals, and preferences.
              </p>
              <p className="mb-5 text-[15px] font-light leading-[1.85] text-slate-soft">
                From supported living to independent skills, everything we do is guided by a belief that good care
                enhances life — for the individuals we support, their families, and the wider community.
              </p>
              <p className="text-[15px] font-light leading-[1.85] text-slate-soft">
                Based in London and growing steadily, we are proud to be a young organisation with deep experience,
                high standards, and a genuine passion for what we do.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {commitments.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-cream-border bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover sm:p-7"
                >
                  <p className="font-serif text-lg font-medium leading-snug text-navy sm:text-[1.15rem]">{c.label}</p>
                  <p className="mt-2 text-[12px] font-light tracking-[0.04em] text-slate-soft">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy px-6 py-16 sm:px-10 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(202,155,171,0.1)_0%,transparent_55%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 max-w-lg lg:mb-16">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Our Values</p>
              <h2 className="font-serif text-4xl font-medium leading-tight text-white lg:text-[2.65rem]">
                What drives everything we do.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {values.map((v) => (
                <article
                  key={v.num}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-rose/25 hover:bg-white/[0.07] lg:p-9"
                >
                  <p className="mb-5 font-serif text-[12px] font-semibold tracking-[0.14em] text-rose">{v.num}</p>
                  <h3 className="mb-4 font-serif text-2xl font-medium leading-snug text-white">{v.title}</h3>
                  <p className="text-[13px] font-light leading-[1.75] text-slate-mid">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-fade px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Our Mission</p>
            <blockquote className="mb-8 font-serif text-3xl font-medium leading-snug text-navy lg:text-4xl">
              &ldquo;To provide compassionate, high-quality supported living that empowers individuals to live full,
              meaningful, and independent lives.&rdquo;
            </blockquote>
            <p className="text-[15px] font-light leading-[1.85] text-slate-soft">
              This isn&apos;t just a statement on a wall — it&apos;s the standard we hold ourselves to in every home,
              every interaction, and every plan we create.
            </p>
          </div>
        </section>

        <PageCta
          title="Come and meet the team."
          description={"We'd love to hear your story and explore how we can help."}
          primaryHref="/contact"
          primaryLabel="Get in Touch"
          secondaryHref="/services"
          secondaryLabel="View Our Services"
        />
      </main>
      <Footer />
    </>
  )
}
