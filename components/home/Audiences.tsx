import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons'

export default function Audiences() {
  return (
    <section className="container-hf grid gap-6 pb-10 pt-[clamp(64px,9vw,104px)] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
      <Link
        href="/care-home-staffing"
        className="flex min-h-[280px] flex-col gap-4 rounded-[28px] bg-steel p-[clamp(28px,4vw,44px)] text-white no-underline transition-colors hover:bg-[#53728d]"
      >
        <span className="eyebrow text-rose-soft">For care homes</span>
        <strong className="text-[clamp(26px,3vw,34px)] font-medium leading-[1.12]">
          Nurses, carers and support staff when you need them.
        </strong>
        <span className="text-[17px] leading-[1.6] text-[#EEF3F7]">
          Short-term cover or longer arrangements, matched to your rota and residents.
        </span>
        <span className="mt-auto inline-flex items-center gap-2 font-medium">
          Care home staffing
          <ArrowRight />
        </span>
      </Link>

      <Link
        href="/caregiver-application"
        className="flex min-h-[280px] flex-col gap-4 rounded-[28px] bg-pink-pale p-[clamp(28px,4vw,44px)] text-navy no-underline transition-colors hover:bg-[#e8c6cc]"
      >
        <span className="eyebrow text-rose-deep">Careers</span>
        <strong className="text-[clamp(26px,3vw,34px)] font-medium leading-[1.12]">
          A career worth caring about.
        </strong>
        <span className="text-[17px] leading-[1.6] text-body">
          Meaningful work, training from day one and real room to grow.
        </span>
        <span className="mt-auto inline-flex items-center gap-2 font-medium">
          See open roles
          <ArrowRight />
        </span>
      </Link>
    </section>
  )
}
