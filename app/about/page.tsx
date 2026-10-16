import type { Metadata } from 'next'
import Image from 'next/image'
import SiteShell from '@/components/layout/SiteShell'
import PageHero from '@/components/layout/PageHero'
import PageCta from '@/components/layout/PageCta'
import ArchFrame from '@/components/ui/ArchFrame'
import { Check, Community, Heart, Person, Star } from '@/components/ui/Icons'
import { photos } from '@/lib/images'

export const metadata: Metadata = {
  title: 'About Haven Flow Care | Compassionate London Care Team',
  description:
    'Learn about Haven Flow Care, our mission, values, and commitment to personalised supported living across London.',
  alternates: {
    canonical: '/about',
  },
}

const commitments = [
  'Personalised care plans',
  'Fully DBS-checked team',
  'Regular reviews & feedback',
  'London-based, est. 2024',
]

const values = [
  {
    Icon: Heart,
    title: 'Compassion first',
    desc: 'Empathy guides every decision — for the people we support, their families and our own staff.',
  },
  {
    Icon: Person,
    title: 'Genuine respect',
    desc: 'We protect autonomy, choice and dignity. Care should never feel like control.',
  },
  {
    Icon: Star,
    title: 'Quality you can feel',
    desc: 'Practical, everyday standards of good care — not tick-box exercises.',
  },
  {
    Icon: Community,
    title: 'Community at our core',
    desc: 'Helping people take part in, connect with and contribute to their communities.',
  },
]

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        layout="center"
        eyebrow="Our story"
        title={
          <>
            Supported living that feels{' '}
            <span className="accent text-rose-ink">genuinely supportive.</span>
          </>
        }
        lead="Haven Flow Care was founded in London in 2024 by people who believed care should never feel like box-ticking — and that everyone deserves support that respects who they are."
      >
        <Image
          src="/havenflow-mark.png"
          alt=""
          width={280}
          height={495}
          priority
          className="order-first h-24 w-auto"
        />
      </PageHero>

      <section className="container-hf flex flex-wrap items-center gap-x-14 gap-y-12 pb-[clamp(64px,9vw,104px)]">
        <div className="grid min-w-0 flex-[1_1_400px] grid-cols-2 gap-4">
          <ArchFrame
            photo={photos.team}
            shape="arch"
            fill="pink"
            ratio="aspect-[3/4]"
            sizes="(max-width: 768px) 44vw, 230px"
          />
          <ArchFrame
            photo={photos.about}
            shape="archDown"
            fill="sky"
            ratio="aspect-[3/4]"
            sizes="(max-width: 768px) 44vw, 230px"
            className="mt-12"
          />
        </div>
        <div className="flex min-w-0 flex-[1.1_1_440px] flex-col gap-5">
          <span className="eyebrow">Who we are</span>
          <h2 className="text-display-4 font-medium text-navy">
            An experienced team that treats every person as an individual.
          </h2>
          <p className="text-[18px] leading-[1.65]">
            We specialise in supported living and independent skills. Our carers build real,
            personal relationships with the people they support — and with their families — so that
            care fits life, not the other way round.
          </p>
          <p className="text-[18px] leading-[1.65]">
            We&rsquo;re young, London-based and growing, with one aim: to improve life for the people
            we support, their families and the wider community.
          </p>
          <ul className="m-0 mt-2 grid list-none gap-3 p-0 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            {commitments.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2.5 rounded-[14px] border border-line bg-white p-[14px_16px] text-[16px]"
              >
                <Check className="h-5 w-5 shrink-0 text-steel" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-navy bg-navy">
        <div className="container-hf flex max-w-[1000px] flex-col items-center gap-7 py-[clamp(72px,10vw,112px)] text-center">
          <span className="eyebrow eyebrow-on-navy">Our mission</span>
          <blockquote className="accent m-0 text-[clamp(30px,3.8vw,50px)] leading-[1.22] text-white">
            &ldquo;To provide compassionate, high-quality supported living that helps every person we
            support live a full and independent life.&rdquo;
          </blockquote>
          <span className="text-[17px] text-on-navy">
            The standard we hold in every home, and every plan.
          </span>
        </div>
      </section>

      <section className="container-hf section-y flex flex-col gap-12">
        <div className="flex max-w-[680px] flex-col gap-4">
          <span className="eyebrow">Our values</span>
          <h2 className="text-display-3 font-medium text-navy">
            What drives <span className="accent text-rose-ink">everything we do.</span>
          </h2>
        </div>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
          {values.map(({ Icon, title, desc }) => (
            <article
              key={title}
              className="flex flex-col gap-3.5 rounded-[28px] border border-line bg-white p-[34px]"
            >
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-rose-soft text-navy">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-[23px] font-medium text-navy">{title}</h3>
              <p className="text-[16px] leading-[1.6]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <PageCta
        flush
        title={
          <>
            Let&rsquo;s talk about{' '}
            <span className="accent text-rose-deep">what matters to you.</span>
          </>
        }
        description="Questions, referrals or just exploring options — we’re here."
        actions={[
          { href: '/contact', label: 'Get in touch' },
          { href: '/services', label: 'View our services', variant: 'secondary' },
        ]}
      />
    </SiteShell>
  )
}
