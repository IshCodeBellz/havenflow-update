import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons'
import { services } from '@/lib/services'

export default function Services() {
  return (
    <section className="on-navy bg-navy text-on-navy">
      <div className="container-hf section-y flex flex-wrap gap-x-14 gap-y-12">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-5">
          <span className="eyebrow eyebrow-on-navy">What we offer</span>
          <h2 className="text-display-3 font-medium text-white">
            Comprehensive support, <span className="accent text-rose-soft">shaped around you.</span>
          </h2>
          <p className="text-[18px] leading-[1.6] text-on-navy">
            Every person we support has a unique story. Our services flex around individual goals,
            needs and aspirations.
          </p>
          <Link href="/services" className="btn btn-light mt-2 self-start">
            View all services
            <ArrowRight />
          </Link>
        </div>

        <ol className="m-0 flex min-w-0 flex-[1.4_1_520px] list-none flex-col p-0">
          {services.map((s, i) => (
            <li
              key={s.id}
              className={`flex gap-5 border-t border-navy-line py-[26px] sm:gap-7 ${
                i === services.length - 1 ? 'border-b' : ''
              }`}
            >
              <span className="accent min-w-[40px] text-[26px] text-rose-on-navy">{s.num}</span>
              <span className="flex flex-col gap-1.5">
                <strong className="text-[22px] font-medium text-white">{s.title}</strong>
                <span className="text-[16px] leading-[1.6]">{s.short}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
