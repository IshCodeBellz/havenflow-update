import type { Metadata } from 'next'
import SiteShell from '@/components/layout/SiteShell'
import PageHero from '@/components/layout/PageHero'
import PageCta from '@/components/layout/PageCta'

export const metadata: Metadata = {
  title: 'Ofsted Nanny Services in London | Haven Flow Care',
  description:
    'Find trusted Ofsted-registered nanny services in London with careful matching, thorough vetting, and ongoing family support.',
  alternates: {
    canonical: '/nanny-services',
  },
}

const features = [
  {
    num: '01',
    title: 'Ofsted registered',
    desc: 'All our nannies hold Ofsted registration, meaning families can use Tax-Free Childcare and Childcare Vouchers where eligible.',
  },
  {
    num: '02',
    title: 'Thoroughly vetted',
    desc: 'Enhanced DBS checks, reference verification, and a thorough interview process — we only place nannies we would trust ourselves.',
  },
  {
    num: '03',
    title: 'Carefully matched',
    desc: 'We take the time to understand your family’s personality, routine, and values — and match you with a nanny who genuinely fits.',
  },
  {
    num: '04',
    title: 'Ongoing support',
    desc: 'Our relationship doesn’t end at placement. We provide continued support to both families and nannies throughout the engagement.',
  },
]

const whatWeOffer = [
  {
    title: 'Full-time & part-time nannies',
    desc: 'Flexible arrangements to suit your family’s schedule, whether you need daily care or a few days a week.',
  },
  {
    title: 'Live-in & live-out',
    desc: 'We place both live-in and live-out nannies depending on what works best for your household.',
  },
  {
    title: 'Temporary & permanent',
    desc: 'Short-term cover, holiday nannies, and permanent long-term placements across London.',
  },
  {
    title: 'Special needs experience',
    desc: 'Nannies with experience supporting children with additional needs, matched with the specific skills required.',
  },
]

const process = [
  {
    num: '01',
    title: 'Tell us about your family',
    desc: 'A short consultation to understand your needs, schedule, and what you’re looking for in a nanny.',
  },
  {
    num: '02',
    title: 'We source & screen',
    desc: 'We identify candidates from our vetted pool and conduct thorough checks before presenting profiles.',
  },
  {
    num: '03',
    title: 'Meet your matches',
    desc: 'We arrange introductions with shortlisted nannies so you can find the right personal fit.',
  },
  {
    num: '04',
    title: 'Place & support',
    desc: 'Once you’ve chosen, we handle the transition and remain available throughout the placement.',
  },
]

const faqs = [
  {
    q: 'What does Ofsted registered mean for our family?',
    a: 'Ofsted registration means our nannies meet government standards for early years childcare. Crucially, it allows families to pay using Tax-Free Childcare or Childcare Vouchers, saving up to 20% on nanny costs.',
  },
  {
    q: 'How long does the matching process take?',
    a: 'Most families are matched within 1–3 weeks. We don’t rush — we take the time to find someone who is genuinely the right fit, not just available.',
  },
  {
    q: 'Are the nannies employed by Haven Flow Care?',
    a: 'Our nannies are placed with families directly. We handle the matching, vetting, and ongoing support — the employment arrangement is between you and the nanny, which we guide you through fully.',
  },
  {
    q: 'What if the placement doesn’t work out?',
    a: 'We stand behind every placement. If things aren’t working out, get in touch and we’ll work with you to find a resolution — including re-matching where needed.',
  },
]

export default function NannyServicesPage() {
  return (
    <SiteShell>
      <PageHero
        layout="split"
        eyebrow="Nanny services"
        title={
          <>
            Ofsted-registered nannies <span className="accent text-rose-ink">across London.</span>
          </>
        }
        lead="We match families with carefully vetted, Ofsted-registered nannies who bring warmth, professionalism, and genuine care to your home."
      />

      <section className="container-hf flex flex-col gap-12 pb-[clamp(64px,9vw,104px)]">
        <div className="flex max-w-[640px] flex-col gap-4">
          <span className="eyebrow">Why choose us</span>
          <h2 className="text-display-3 font-medium text-navy">
            Standards that <span className="accent text-rose-ink">make the difference.</span>
          </h2>
        </div>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
          {features.map((f) => (
            <article
              key={f.num}
              className="flex flex-col gap-3.5 rounded-[28px] border border-line bg-white p-[34px]"
            >
              <span className="accent text-[26px] text-rose-ink">{f.num}</span>
              <h3 className="text-[22px] font-medium text-navy">{f.title}</h3>
              <p className="text-[16px] leading-[1.6]">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blush-2">
        <div className="container-hf section-y flex flex-wrap gap-x-14 gap-y-10">
          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-[18px]">
            <span className="eyebrow">Types of placement</span>
            <h2 className="text-display-3 font-medium text-navy">
              Flexible to suit <span className="accent text-rose-ink">your family.</span>
            </h2>
            <p className="text-[18px] leading-[1.6]">
              Every family runs differently. We offer a range of placement types so you can find
              what works — not what&rsquo;s just available.
            </p>
          </div>
          <div className="grid min-w-0 flex-[1.4_1_500px] gap-4 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
            {whatWeOffer.map((w) => (
              <div key={w.title} className="flex flex-col gap-2.5 rounded-[22px] bg-blush p-7">
                <strong className="text-[20px] font-medium text-navy">{w.title}</strong>
                <span className="text-[16px] leading-[1.6]">{w.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-navy bg-navy text-on-navy">
        <div className="container-hf section-y flex flex-col gap-12">
          <div className="flex max-w-[680px] flex-col gap-4">
            <span className="eyebrow eyebrow-on-navy">The process</span>
            <h2 className="text-display-3 font-medium text-white">
              From enquiry to <span className="accent text-rose-soft">placement.</span>
            </h2>
          </div>
          <ol className="m-0 grid list-none gap-8 p-0 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
            {process.map((p) => (
              <li key={p.num} className="flex flex-col gap-3 border-t-2 border-rose-on-navy pt-6">
                <span className="accent text-[26px] text-rose-on-navy">{p.num}</span>
                <strong className="text-[21px] font-medium text-white">{p.title}</strong>
                <span className="text-[16px] leading-[1.6]">{p.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-hf section-y flex flex-col gap-10">
        <div className="flex max-w-[640px] flex-col gap-4">
          <span className="eyebrow">Common questions</span>
          <h2 className="text-display-3 font-medium text-navy">
            Everything you <span className="accent text-rose-ink">need to know.</span>
          </h2>
        </div>
        <div className="flex max-w-[840px] flex-col gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-[24px] border border-line bg-white p-7 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[20px] font-medium text-navy">
                {faq.q}
                <span
                  aria-hidden
                  className="text-[24px] leading-none text-rose-ink transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3.5 text-[16px] leading-[1.7]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <PageCta
        flush
        title={
          <>
            Find your family&rsquo;s <span className="accent text-rose-deep">perfect nanny.</span>
          </>
        }
        description="Reach out and we’ll start finding the right match for your home."
        actions={[{ href: '/contact', label: 'Enquire about a nanny' }]}
      />
    </SiteShell>
  )
}
