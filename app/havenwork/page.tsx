import type { Metadata } from 'next'
import SiteShell from '@/components/layout/SiteShell'
import PageHero from '@/components/layout/PageHero'
import PageCta from '@/components/layout/PageCta'

const HAVENWORK_URL = 'https://havenwork.co.uk'

export const metadata: Metadata = {
  title: 'HavenWork | The Care Workforce App from Haven Flow Care',
  description:
    'HavenWork is our care workforce app — GPS-verified clock-in, your full rota and estimated pay, open shifts, bedside care records, and vitals tracking. Visit havenwork.co.uk to learn more.',
  alternates: {
    canonical: '/havenwork',
  },
}

const features = [
  {
    num: '01',
    title: 'Clock in on-site, verified by GPS',
    desc: 'One tap to start and end every shift, location-checked against the visit area. Geofence verification confirms carers are exactly where they should be — no paper timesheets, no guesswork.',
  },
  {
    num: '02',
    title: 'Your whole rota, always in your pocket',
    desc: 'Every upcoming shift, time, team, and estimated pay laid out at a glance. Carers always know where they are working next and what they will earn — without chasing the office.',
  },
  {
    num: '03',
    title: 'Grab open shifts in a single tap',
    desc: 'See open shifts nearby with the rate, length, and distance up front, then apply instantly. Fill gaps faster and give your team the flexibility to pick up the work that suits them.',
  },
  {
    num: '04',
    title: 'Care records, done at the bedside',
    desc: 'Medication charts, visit checklists, tasks, and notes — all completed on the phone, right where care happens. Mark medications given, tick off tasks, and keep an accurate record in real time.',
  },
  {
    num: '05',
    title: 'Track vitals and care in one place',
    desc: 'Log blood pressure, heart rate, temperature, and SpO₂ that sync straight to the care record. Trends are visible over time and managers are notified the moment readings are saved.',
  },
]

const benefits = [
  {
    title: 'Built for frontline carers',
    desc: 'A simple, mobile-first experience designed around the realities of a shift — fast to use, even with one hand at the bedside.',
  },
  {
    title: 'Accurate, accountable records',
    desc: 'GPS-verified attendance and real-time care logging mean cleaner audit trails and fewer disputes over hours or visits.',
  },
  {
    title: 'Less admin, more care',
    desc: 'Rotas, timesheets, and observations live in one app, cutting paperwork so time goes back to the people who matter.',
  },
  {
    title: 'Connected to the office',
    desc: 'Shifts, applications, and observations flow straight to managers — keeping everyone aligned without endless calls.',
  },
]

export default function HavenWorkPage() {
  return (
    <SiteShell>
      <PageHero
        layout="split"
        eyebrow="Introducing HavenWork"
        title={
          <>
            The care workforce app, <span className="accent text-rose-ink">made for the people doing the work.</span>
          </>
        }
        lead="HavenWork puts shifts, clock-in, care records, and vitals in one place — built for carers on the floor and the teams who support them."
      >
        <div className="flex flex-wrap gap-3.5">
          <a
            href={HAVENWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit havenwork.co.uk
          </a>
          <a href="/contact" className="btn btn-secondary">
            Talk to our team
          </a>
        </div>
      </PageHero>

      <section className="container-hf section-y flex flex-col gap-12">
        <div className="flex max-w-[680px] flex-col gap-4">
          <span className="eyebrow">What HavenWork does</span>
          <h2 className="text-display-3 font-medium text-navy">
            Everything a shift needs, <span className="accent text-rose-ink">in one app.</span>
          </h2>
          <p className="text-[18px] leading-[1.6]">
            From the moment a carer arrives to the last note before they leave, HavenWork keeps the
            day moving — accurate attendance, clear rotas, and care records captured as they happen.
          </p>
        </div>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))]">
          {features.map((f) => (
            <article
              key={f.num}
              className="flex flex-col gap-3.5 rounded-[28px] border border-line bg-white p-9"
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
            <span className="eyebrow">Why HavenWork</span>
            <h2 className="text-display-3 font-medium text-navy">
              Less paperwork. <span className="accent text-rose-ink">More care.</span>
            </h2>
            <p className="text-[18px] leading-[1.6]">
              We built HavenWork around how care actually works — fast, mobile, and accountable. It
              gives carers clarity over their shifts and pay, and gives managers confidence in the
              records behind them.
            </p>
          </div>
          <div className="grid min-w-0 flex-[1.4_1_500px] gap-4 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col gap-2.5 rounded-[22px] bg-blush p-7">
                <strong className="text-[20px] font-medium text-navy">{b.title}</strong>
                <span className="text-[16px] leading-[1.6]">{b.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={
          <>
            See HavenWork <span className="accent text-rose-deep">in action.</span>
          </>
        }
        description="Head to havenwork.co.uk for the full tour, screenshots, and details on how to get your team set up."
        actions={[
          { href: HAVENWORK_URL, label: 'Go to havenwork.co.uk', external: true },
          { href: '/contact', label: 'Get in touch', variant: 'secondary' },
        ]}
      />
    </SiteShell>
  )
}
