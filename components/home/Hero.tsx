import Link from 'next/link'
import Image from 'next/image'
import ArchFrame from '@/components/ui/ArchFrame'
import { ArrowRight, Check } from '@/components/ui/Icons'
import { photos } from '@/lib/images'

const assurances = ['Fully DBS-checked team', 'Personalised care plans', 'Regular reviews']

export default function Hero() {
  return (
    <section className="container-hf flex flex-wrap items-center gap-x-14 gap-y-12 pb-[72px] pt-[clamp(40px,7vw,96px)]">
      <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-7">
        <span className="eyebrow">Supported living · London</span>
        <h1 className="text-display-1 font-medium text-navy">
          Care that feels like <span className="accent text-rose-ink">home.</span>
        </h1>
        <p className="max-w-[540px] text-lead">
          Personalised supported living across London — built on compassion, trust, and a genuine
          belief in every person&rsquo;s capacity to thrive independently.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Link href="/services" className="btn btn-primary">
            Explore our services
            <ArrowRight />
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Refer a client
          </Link>
        </div>
        <ul className="mt-2 flex list-none flex-wrap gap-x-[26px] gap-y-2.5 text-[15px]">
          {assurances.map((a) => (
            <li key={a} className="flex items-center gap-2">
              <Check className="h-[18px] w-[18px] shrink-0 text-steel" />
              {a}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex min-w-0 flex-[1_1_420px] justify-center">
        <ArchFrame
          photo={photos.home}
          shape="arch"
          fill="pink"
          ratio="aspect-[4/5]"
          sizes="(max-width: 768px) 92vw, 42vw"
          priority
          className="max-w-[520px]"
        />
        <div className="absolute bottom-10 left-0 flex items-center gap-3.5 rounded-[20px] bg-white p-[18px_22px] shadow-float sm:bottom-16">
          <Image src="/havenflow-mark.png" alt="" width={280} height={495} className="h-11 w-auto" />
          <span className="flex flex-col">
            <strong className="text-[16px] font-semibold text-navy">London-wide coverage</strong>
            <span className="text-[14px]">Care in your own home</span>
          </span>
        </div>
      </div>
    </section>
  )
}
