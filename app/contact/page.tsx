import SiteShell from '@/components/layout/SiteShell'
import PageHero from '@/components/layout/PageHero'
import ContactForm from '@/components/contact/ContactForm'
import { Mail, Phone, Pin } from '@/components/ui/Icons'

const cardClass =
  'flex items-start gap-[18px] rounded-[22px] border border-line bg-white p-6 no-underline'
const iconClass =
  'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-soft text-navy'

/** Boroughs we currently cover — shown in place of an embedded third-party map. */
const coverage = [
  'Barking & Dagenham',
  'Barnet',
  'Brent',
  'Camden',
  'Croydon',
  'Ealing',
  'Enfield',
  'Greenwich',
  'Hackney',
  'Haringey',
  'Islington',
  'Lambeth',
  'Lewisham',
  'Newham',
  'Redbridge',
  'Southwark',
  'Tower Hamlets',
  'Waltham Forest',
]

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            We&rsquo;d love to <span className="accent text-rose-ink">hear from you.</span>
          </>
        }
        lead="Exploring care options, referring a client or interested in joining the team — send us a message and we’ll respond within 24 hours."
      />

      <section className="container-hf flex flex-wrap items-start gap-8 pb-[88px]">
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3.5">
          <a href="tel:07904333304" className={cardClass}>
            <span className={iconClass}>
              <Phone className="h-[22px] w-[22px]" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[14px] text-muted">Call us</span>
              <strong className="text-[22px] font-medium text-navy">07904 333 304</strong>
              <span className="text-[15px] text-body">Mon–Fri, 9am–5pm</span>
            </span>
          </a>

          <a href="mailto:admin@havenflowcare.co.uk" className={cardClass}>
            <span className={iconClass}>
              <Mail className="h-[22px] w-[22px]" />
            </span>
            <span className="flex min-w-0 flex-col gap-1">
              <span className="text-[14px] text-muted">Email us</span>
              <strong className="break-words text-[19px] font-medium text-navy">
                admin@havenflowcare.co.uk
              </strong>
              <span className="text-[15px] text-body">Reply within 24 hours</span>
            </span>
          </a>

          <div className={cardClass}>
            <span className={iconClass}>
              <Pin className="h-[22px] w-[22px]" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[14px] text-muted">Based in</span>
              <strong className="text-[22px] font-medium text-navy">London, UK</strong>
              <span className="text-[15px] text-body">Serving London-wide</span>
            </span>
          </div>

          <div className="on-navy flex flex-col gap-3.5 rounded-[22px] bg-navy p-7 text-on-navy">
            <span className="eyebrow eyebrow-on-navy">For professionals</span>
            <strong className="accent text-[26px] font-normal leading-[1.25] text-white">
              Referring a client to Haven Flow Care?
            </strong>
            <span className="text-[16px] leading-[1.6]">
              We work with social workers, healthcare professionals and local authorities. Send us
              the referral details and we&rsquo;ll be in touch.
            </span>
            <a
              href="mailto:admin@havenflowcare.co.uk?subject=Client%20referral"
              className="btn btn-sm btn-light self-start"
            >
              Email a referral
            </a>
          </div>
        </div>

        <ContactForm />
      </section>

      <section
        className="container-hf pb-[clamp(64px,9vw,104px)]"
        aria-labelledby="coverage-heading"
      >
        <div className="flex flex-col gap-6 rounded-[32px] bg-mauve p-[clamp(28px,4vw,48px)]">
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-rose-deep">Where we work</span>
            <h2 id="coverage-heading" className="text-display-4 font-medium text-navy">
              London service area
            </h2>
            <p className="max-w-[620px] text-[18px] leading-[1.6] text-body">
              We deliver supported living and complex care across London and nearby regions. If your
              borough isn&rsquo;t listed, call us — we often can still help.
            </p>
          </div>
          <ul className="m-0 grid list-none gap-2.5 p-0 [grid-template-columns:repeat(auto-fit,minmax(170px,1fr))]">
            {coverage.map((b) => (
              <li
                key={b}
                className="rounded-full bg-blush px-4 py-2.5 text-center text-[15px] text-navy"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  )
}
