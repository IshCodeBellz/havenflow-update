import Link from 'next/link'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import PageHero from '@/components/layout/PageHero'
import ContactForm from '@/components/contact/ContactForm'
import SocialLinksRow from '@/components/layout/SocialLinksRow'

const contactDetails = [
  {
    label: 'Call us',
    value: '07904 333 304',
    href: 'tel:07904333304',
    note: 'Mon–Fri, 9am–5pm',
  },
  {
    label: 'Email us',
    value: 'admin@havenflowcare.co.uk',
    href: 'mailto:admin@havenflowcare.co.uk',
    note: 'We respond within 24 hours',
  },
  {
    label: 'Based in',
    value: 'London, UK',
    href: null,
    note: 'Serving London-wide',
  },
]

const btnNavy =
  'inline-flex cursor-pointer items-center justify-center rounded-lg bg-navy px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm transition-all duration-200 hover:bg-navy-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Get In Touch"
          title={"We'd love to hear from you."}
          description={
            "Whether you're exploring care options for a loved one, looking to refer a client, or interested in joining our team — we're here to help."
          }
        />

        <section className="px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-20">
            <div className="rounded-2xl border border-cream-border bg-white p-8 shadow-card sm:p-10">
              <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Contact Details</p>
              <div className="flex flex-col gap-9">
                {contactDetails.map((d) => (
                  <div key={d.label}>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-dim">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="block font-serif text-2xl font-medium leading-tight text-navy transition-colors duration-200 hover:text-rose cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 rounded-sm"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-serif text-2xl font-medium leading-tight text-navy">{d.value}</p>
                    )}
                    <p className="mt-2 text-[12px] font-light text-slate-soft">{d.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-cream-border pt-10">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-dim">
                  Follow Us
                </p>
                <SocialLinksRow />
              </div>
            </div>

            <div className="rounded-2xl border border-cream-border bg-cream/40 p-8 shadow-card sm:p-10 lg:bg-white/80 lg:backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="border-t border-cream-border bg-cream px-6 py-14 sm:px-10 lg:py-16">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">For Professionals</p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-navy sm:text-[2rem]">
                Referring a client to Haven Flow Care?
              </h2>
              <p className="mt-3 max-w-xl text-[15px] font-light leading-[1.85] text-slate-soft">
                We work closely with social workers, healthcare professionals, and local authorities. Get in touch
                and we&apos;ll make the process straightforward.
              </p>
            </div>
            <Link href="mailto:admin@havenflowcare.co.uk" className={`${btnNavy} shrink-0 text-center`}>
              Refer a Client
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
