import Link from 'next/link'
import { Mail, Phone, Pin } from '@/components/ui/Icons'

const tileClass = 'flex items-center gap-4 rounded-[18px] bg-blush p-[20px_22px] no-underline'
const iconClass =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-soft text-navy'

export default function HomeCta() {
  return (
    <section className="container-hf pb-[clamp(64px,9vw,104px)] pt-16">
      <div className="flex flex-wrap items-center gap-10 rounded-[32px] border border-line bg-white p-[clamp(28px,5vw,64px)]">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[18px]">
          <span className="eyebrow">Get in touch</span>
          <h2 className="text-display-3 font-medium text-navy">
            Ready to find the <span className="accent text-rose-ink">right</span> care?
          </h2>
          <p className="text-[18px] leading-[1.6]">
            Whether you&rsquo;re exploring options for a loved one or looking to join our team,
            we&rsquo;d love to hear from you.
          </p>
          <div className="mt-1.5 flex flex-wrap gap-3.5">
            <Link href="/contact" className="btn btn-primary">
              Start a conversation
            </Link>
            <Link href="/caregiver-application" className="btn btn-secondary">
              Caregiver jobs
            </Link>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-3">
          <a href="tel:07904333304" className={tileClass}>
            <span className={iconClass}>
              <Phone className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-[14px] text-muted">Call us</span>
              <strong className="text-[19px] font-medium text-navy">07904 333 304</strong>
            </span>
          </a>
          <a href="mailto:admin@havenflowcare.co.uk" className={tileClass}>
            <span className={iconClass}>
              <Mail className="h-5 w-5" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[14px] text-muted">Email us</span>
              <strong className="break-words text-[17px] font-medium text-navy">
                admin@havenflowcare.co.uk
              </strong>
            </span>
          </a>
          <div className={tileClass}>
            <span className={iconClass}>
              <Pin className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-[14px] text-muted">Based in</span>
              <strong className="text-[19px] font-medium text-navy">London, UK</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
