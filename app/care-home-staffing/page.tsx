import type { Metadata } from 'next'
import SiteShell from '@/components/layout/SiteShell'
import ArchFrame from '@/components/ui/ArchFrame'
import StaffingEnquiryForm from '@/components/staffing/StaffingEnquiryForm'
import { Cross, Heart, Home } from '@/components/ui/Icons'
import { photos } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Nurses, Carers & Staff for Care Homes | Haven Flow Care',
  description:
    'Haven Flow Care supplies registered nurses, care assistants, and support staff to other care homes across London — flexible cover you can rely on.',
  alternates: {
    canonical: '/care-home-staffing',
  },
}

const roles = [
  {
    Icon: Cross,
    fill: 'bg-sky',
    title: 'Registered nurses',
    desc: 'Clinical care, medication rounds and meeting regulatory standards.',
  },
  {
    Icon: Heart,
    fill: 'bg-rose-soft',
    title: 'Care assistants & carers',
    desc: 'Personal care, mealtimes, activities and day-to-day support.',
  },
  {
    Icon: Home,
    fill: 'bg-mauve',
    title: 'Support & ancillary staff',
    desc: 'Housekeeping, catering, laundry and other essential roles.',
  },
]

const whyPartner = [
  {
    title: 'Built on care standards',
    desc: 'Aligned with residential and nursing quality and safeguarding expectations.',
  },
  {
    title: 'Responsive to your rota',
    desc: 'Short-term gaps, leave backfill or longer-term arrangements.',
  },
  {
    title: 'Vetted professionals',
    desc: 'Every candidate is checked and assessed for relevant experience.',
  },
  {
    title: 'London & surrounding areas',
    desc: 'We cover London and nearby regions, and advise honestly on fit.',
  },
]

const process = [
  {
    num: '01',
    title: 'Discuss your needs',
    desc: 'Share vacancy types, ratios, qualifications and timeframes.',
  },
  {
    num: '02',
    title: 'We propose suitable staff',
    desc: 'Candidates matched from our network of vetted professionals.',
  },
  {
    num: '03',
    title: 'Agree terms & start dates',
    desc: 'Expectations, compliance documents and handover, agreed up front.',
  },
  {
    num: '04',
    title: 'Ongoing partnership',
    desc: 'Supply adjusts as your residents’ needs change.',
  },
]

export default function CareHomeStaffingPage() {
  return (
    <SiteShell>
      <section className="bg-steel text-white">
        <div className="container-hf flex flex-wrap items-center gap-x-12 gap-y-10 py-[clamp(48px,7vw,104px)]">
          <div className="flex min-w-0 flex-[1.3_1_500px] flex-col gap-6">
            <span className="eyebrow text-rose-soft">For care homes</span>
            <h1 className="text-display-2 font-medium text-white">
              Nurses, carers and staff —{' '}
              <span className="accent text-rose-soft">when you need them.</span>
            </h1>
            <p className="max-w-[600px] text-[19px] leading-[1.65] text-[#EEF3F7]">
              We partner with care homes across London to provide qualified nurses, experienced
              carers and support staff — for short-term cover or as your team grows.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href="#enquire" className="btn btn-white">
                Enquire for your home
              </a>
              <a href="tel:07904333304" className="btn btn-outline-white">
                Call 07904 333 304
              </a>
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_340px]">
            <ArchFrame
              photo={photos.team}
              shape="circle"
              fill="steel"
              ratio="aspect-square"
              sizes="(max-width: 768px) 88vw, 400px"
              priority
              className="mx-auto max-w-[460px]"
            />
          </div>
        </div>
      </section>

      <section className="container-hf section-y flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="flex max-w-[640px] flex-col gap-4">
            <span className="eyebrow">What we supply</span>
            <h2 className="text-display-3 font-medium text-navy">
              Staff matched to <span className="accent text-rose-ink">your residents.</span>
            </h2>
          </div>
          <p className="max-w-[440px] text-[18px] leading-[1.6]">
            Clinical intensity, dementia care, younger adults or general residential — we strengthen
            your existing team, not replace it.
          </p>
        </div>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))]">
          {roles.map(({ Icon, fill, title, desc }) => (
            <article
              key={title}
              className="flex flex-col gap-3.5 rounded-[28px] border border-line bg-white p-9"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full text-navy ${fill}`}
              >
                <Icon className="h-[26px] w-[26px]" />
              </span>
              <h3 className="text-[24px] font-medium text-navy">{title}</h3>
              <p className="text-[16px] leading-[1.6]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blush-2">
        <div className="container-hf section-y flex flex-wrap gap-x-14 gap-y-10">
          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-[18px]">
            <span className="eyebrow">Why partner with us</span>
            <h2 className="text-display-3 font-medium text-navy">
              Trust, transparency <span className="accent text-rose-ink">and consistency.</span>
            </h2>
            <p className="text-[18px] leading-[1.6]">
              We&rsquo;re honest about what we can deliver and when — so you can plan your rota with
              confidence.
            </p>
          </div>
          <div className="grid min-w-0 flex-[1.4_1_500px] gap-4 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
            {whyPartner.map((w) => (
              <div key={w.title} className="flex flex-col gap-2.5 rounded-[22px] bg-blush p-7">
                <strong className="text-[20px] font-medium text-navy">{w.title}</strong>
                <span className="text-[16px] leading-[1.6]">{w.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-hf flex flex-col gap-12 pb-[72px] pt-[clamp(64px,9vw,104px)]">
        <div className="flex max-w-[680px] flex-col gap-4">
          <span className="eyebrow">How it works</span>
          <h2 className="text-display-3 font-medium text-navy">
            From enquiry to <span className="accent text-rose-ink">first shift.</span>
          </h2>
        </div>
        <ol className="m-0 grid list-none gap-8 p-0 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
          {process.map((p) => (
            <li key={p.num} className="flex flex-col gap-3 border-t-2 border-steel pt-6">
              <span className="accent text-[26px] text-rose-ink">{p.num}</span>
              <strong className="text-[21px] font-medium text-navy">{p.title}</strong>
              <span className="text-[16px] leading-[1.6]">{p.desc}</span>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="enquire"
        className="container-hf scroll-mt-[140px] pb-[clamp(64px,9vw,104px)] pt-8"
      >
        <div className="on-navy flex flex-wrap gap-12 rounded-[32px] bg-navy p-[clamp(24px,5vw,64px)]">
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-[18px] text-on-navy">
            <span className="eyebrow eyebrow-on-navy">Staffing enquiry</span>
            <h2 id="staffing-enquiry-heading" className="text-display-4 font-medium text-white">
              Need nurses, carers or <span className="accent text-rose-soft">support staff?</span>
            </h2>
            <p className="text-[18px] leading-[1.6]">
              Tell us about your staffing gaps and we&rsquo;ll come back to you promptly.
            </p>
            <a
              href="tel:07904333304"
              className="mt-2 text-[22px] font-medium text-white hover:text-rose-on-navy"
            >
              07904 333 304
            </a>
            <a
              href="mailto:admin@havenflowcare.co.uk"
              className="break-words text-[17px] text-white hover:text-rose-on-navy"
            >
              admin@havenflowcare.co.uk
            </a>
          </div>

          <StaffingEnquiryForm />
        </div>
      </section>
    </SiteShell>
  )
}
