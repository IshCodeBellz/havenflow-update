import type { Metadata } from 'next'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import PageHero from '@/components/layout/PageHero'
import PageCta from '@/components/layout/PageCta'

const features = [
  {
    num: '01',
    title: 'Ofsted Registered',
    desc: 'All our nannies hold Ofsted registration, meaning families can use Tax-Free Childcare and Childcare Vouchers where eligible.',
  },
  {
    num: '02',
    title: 'Thoroughly Vetted',
    desc: 'Enhanced DBS checks, reference verification, and a thorough interview process — we only place nannies we would trust ourselves.',
  },
  {
    num: '03',
    title: 'Carefully Matched',
    desc: "We take the time to understand your family's personality, routine, and values — and match you with a nanny who genuinely fits.",
  },
  {
    num: '04',
    title: 'Ongoing Support',
    desc: "Our relationship doesn't end at placement. We provide continued support to both families and nannies throughout the engagement.",
  },
]

const whatWeOffer = [
  {
    title: 'Full-time & Part-time Nannies',
    desc: "Flexible arrangements to suit your family's schedule, whether you need daily care or a few days a week.",
  },
  {
    title: 'Live-in & Live-out',
    desc: "We place both live-in and live-out nannies depending on what works best for your household.",
  },
  {
    title: 'Temporary & Permanent',
    desc: 'Short-term cover, holiday nannies, and permanent long-term placements across London.',
  },
  {
    title: 'Special Needs Experience',
    desc: 'Nannies with experience supporting children with additional needs, matched with the specific skills required.',
  },
]

const faqs = [
  {
    q: 'What does Ofsted registered mean for our family?',
    a: 'Ofsted registration means our nannies meet government standards for early years childcare. Crucially, it allows families to pay using Tax-Free Childcare or Childcare Vouchers, saving up to 20% on nanny costs.',
  },
  {
    q: 'How long does the matching process take?',
    a: "Most families are matched within 1–3 weeks. We don't rush — we take the time to find someone who is genuinely the right fit, not just available.",
  },
  {
    q: 'Are the nannies employed by Haven Flow Care?',
    a: 'Our nannies are placed with families directly. We handle the matching, vetting, and ongoing support — the employment arrangement is between you and the nanny, which we guide you through fully.',
  },
  {
    q: "What if the placement doesn't work out?",
    a: "We stand behind every placement. If things aren't working out, get in touch and we'll work with you to find a resolution — including re-matching where needed.",
  },
]

const process = [
  {
    step: '01',
    title: 'Tell Us About Your Family',
    desc: "A short consultation to understand your needs, schedule, and what you're looking for in a nanny.",
  },
  {
    step: '02',
    title: 'We Source & Screen',
    desc: 'We identify candidates from our vetted pool and conduct thorough checks before presenting profiles.',
  },
  {
    step: '03',
    title: 'Meet Your Matches',
    desc: 'We arrange introductions with shortlisted nannies so you can find the right personal fit.',
  },
  {
    step: '04',
    title: 'Place & Support',
    desc: "Once you've chosen, we handle the transition and remain available throughout the placement.",
  },
]

export const metadata: Metadata = {
  title: 'Ofsted Nanny Services in London | Haven Flow Care',
  description:
    'Find trusted Ofsted-registered nanny services in London with careful matching, thorough vetting, and ongoing family support.',
  alternates: {
    canonical: '/nanny-services',
  },
}

export default function NannyServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          layout="split"
          eyebrow="Nanny Services"
          title="Ofsted-registered nannies across London."
          description={
            "We match families with carefully vetted, Ofsted-registered nannies who bring warmth, professionalism, and genuine care to your home. Every placement is personal — because your family deserves nothing less."
          }
        />

        <section className="px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-lg lg:mb-14">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Why Choose Us</p>
              <h2 className="font-serif text-4xl font-medium leading-tight text-navy lg:text-[2.65rem]">
                Standards that make the difference.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {features.map((f) => (
                <article
                  key={f.num}
                  className="rounded-2xl border border-cream-border bg-white p-8 shadow-card transition-all duration-200 ease-out-expo hover:border-rose/25 hover:shadow-card-hover lg:p-9"
                >
                  <p className="mb-4 font-serif text-[12px] font-semibold tracking-[0.14em] text-rose">{f.num}</p>
                  <h3 className="mb-3 font-serif text-[1.25rem] font-medium leading-snug text-navy">{f.title}</h3>
                  <p className="text-[13px] font-light leading-[1.75] text-slate-soft">{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Types of Placement</p>
              <h2 className="mb-6 font-serif text-4xl font-medium leading-tight text-navy lg:text-[2.65rem]">
                Flexible to suit your family.
              </h2>
              <p className="max-w-md text-[15px] font-light leading-[1.85] text-slate-soft">
                Every family runs differently. We offer a range of placement types so you can find what works —
                not what&apos;s just available.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {whatWeOffer.map((item) => (
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
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">The Process</p>
              <h2 className="font-serif text-4xl font-medium leading-tight text-white lg:text-[2.65rem]">
                From enquiry to placement.
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

        <section className="bg-section-fade px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-md lg:mb-14">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Common Questions</p>
              <h2 className="font-serif text-4xl font-medium leading-tight text-navy lg:text-[2.65rem]">
                Everything you need to know.
              </h2>
            </div>
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-cream-border bg-white p-7 shadow-sm sm:p-8"
                >
                  <h3 className="mb-3 font-serif text-xl font-medium leading-snug text-navy">{faq.q}</h3>
                  <p className="text-[14px] font-light leading-[1.8] text-slate-soft">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title={"Find your family's perfect nanny."}
          description={"Reach out and we'll start finding the right match for your home."}
          primaryHref="/contact"
          primaryLabel="Enquire About a Nanny"
        />
      </main>
      <Footer />
    </>
  )
}
