import SiteShell from '@/components/layout/SiteShell'
import ArchFrame from '@/components/ui/ArchFrame'
import CaregiverApplicationForm from '@/components/caregiver/CaregiverApplicationForm'
import { Check } from '@/components/ui/Icons'
import { photos } from '@/lib/images'

const whyHavenFlow = [
  { title: 'Meaningful work', desc: 'Build real relationships — not just complete tasks.' },
  { title: 'Supported from day one', desc: 'Ongoing training and a team that has your back.' },
  { title: 'Fair pay & recognition', desc: 'Pay that reflects skilled, important work.' },
  {
    title: 'Room to grow',
    desc: 'Development and progression, whether you’re new or experienced.',
  },
]

const roles = [
  {
    title: 'Supported Living Caregiver',
    tag: 'Full-time or part-time',
    tagFill: 'bg-sky',
    desc: 'Day-to-day support for people in their own homes across London.',
  },
  {
    title: 'Independent Living Support Worker',
    tag: 'Part-time or flexible',
    tagFill: 'bg-rose-soft',
    desc: 'Helping people build the skills and confidence for everyday life.',
  },
  // Ofsted Registered Nanny — temporarily unavailable
  {
    title: 'Night Support Worker',
    tag: 'Night shifts',
    tagFill: 'bg-mauve',
    desc: 'Overnight care and supervision, so people feel safe through the night.',
  },
]

const requirements = [
  'Right to work in the UK',
  'Enhanced DBS check (we can help)',
  'Reliable, compassionate and professional',
  'Good spoken and written English',
  'Flexibility, including some evenings or weekends',
]

export default function CaregiverApplicationPage() {
  return (
    <SiteShell>
      <section className="container-hf flex flex-wrap items-center gap-x-12 gap-y-10 pb-[88px] pt-[clamp(40px,7vw,96px)]">
        <div className="flex min-w-0 flex-[1.2_1_480px] flex-col gap-6">
          <span className="eyebrow">Careers at Haven Flow</span>
          <h1 className="text-display-2 font-medium text-navy">
            A career worth <span className="accent text-rose-ink">caring about.</span>
          </h1>
          <p className="max-w-[560px] text-[19px] leading-[1.65]">
            We&rsquo;re looking for compassionate, professional people to join a team that puts
            relationships before routines.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#roles" className="btn btn-primary">
              See open roles
            </a>
            <a href="#apply" className="btn btn-secondary">
              Apply now
            </a>
          </div>
        </div>

        <div className="grid min-w-0 max-w-[480px] flex-[1_1_360px] grid-cols-2 gap-3.5">
          <ArchFrame
            photo={photos.team}
            shape="circle"
            fill="pink"
            ratio="aspect-square"
            sizes="(max-width: 768px) 44vw, 230px"
            priority
          />
          <div className="flex aspect-square flex-col justify-center gap-1.5 rounded-[28px] bg-navy p-[22px]">
            <span className="accent text-[clamp(22px,3vw,30px)] text-rose-soft">48 hrs</span>
            <span className="text-[15px] text-on-navy">We reply to every application</span>
          </div>
          <div className="flex aspect-square flex-col justify-center gap-1.5 rounded-[28px] bg-sky p-[22px]">
            <span className="text-[clamp(17px,2vw,20px)] font-medium text-navy">DBS support</span>
            <span className="text-[15px] text-body">We can help arrange your Enhanced DBS</span>
          </div>
          <ArchFrame
            photo={photos.about}
            shape="circle"
            fill="mauve"
            ratio="aspect-square"
            sizes="(max-width: 768px) 44vw, 230px"
          />
        </div>
      </section>

      <section className="bg-blush-2">
        <div className="container-hf flex flex-col gap-11 py-[clamp(64px,8vw,96px)]">
          <div className="flex max-w-[640px] flex-col gap-4">
            <span className="eyebrow">Why Haven Flow</span>
            <h2 className="text-display-3 font-medium text-navy">
              Good care starts with <span className="accent text-rose-ink">a supported team.</span>
            </h2>
          </div>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
            {whyHavenFlow.map((w) => (
              <div key={w.title} className="flex flex-col gap-2.5 rounded-[24px] bg-blush p-[30px]">
                <strong className="text-[21px] font-medium text-navy">{w.title}</strong>
                <span className="text-[16px] leading-[1.6]">{w.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="roles"
        className="container-hf flex scroll-mt-[140px] flex-col gap-10 pb-16 pt-[clamp(64px,9vw,104px)]"
      >
        <div className="flex max-w-[640px] flex-col gap-4">
          <span className="eyebrow">Open roles</span>
          <h2 className="text-display-3 font-medium text-navy">
            Find your place <span className="accent text-rose-ink">with us.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3.5">
          {roles.map((r) => (
            <article
              key={r.title}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 rounded-[24px] border border-line bg-white p-[28px_32px]"
            >
              <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-2">
                <h3 className="text-[24px] font-medium text-navy">{r.title}</h3>
                <p className="text-[16px] leading-[1.6]">{r.desc}</p>
              </div>
              <span
                className={`inline-flex min-h-9 items-center rounded-full px-3.5 text-[14px] font-medium text-navy ${r.tagFill}`}
              >
                {r.tag}
              </span>
              <a href="#apply" className="btn btn-sm btn-primary">
                Apply
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="apply"
        className="container-hf flex scroll-mt-[140px] flex-wrap items-start gap-12 pb-[clamp(64px,9vw,104px)] pt-10"
      >
        <aside className="on-navy flex min-w-0 flex-[1_1_320px] flex-col gap-5 rounded-[28px] bg-navy p-10 text-on-navy">
          <span className="eyebrow eyebrow-on-navy">What we&rsquo;re looking for</span>
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0 text-[16px] leading-[1.5]">
            {requirements.map((req) => (
              <li key={req} className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-rose-on-navy" />
                <span className="text-white">{req}</span>
              </li>
            ))}
          </ul>
          <p className="accent m-0 border-t border-navy-line pt-[18px] text-[21px] leading-[1.4] text-rose-soft">
            Care experience helps — but it isn&rsquo;t always required.
          </p>
        </aside>

        <CaregiverApplicationForm roles={roles} />
      </section>
    </SiteShell>
  )
}
