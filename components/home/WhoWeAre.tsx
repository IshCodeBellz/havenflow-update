import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from '@/components/ui/Icons'

const values = [
  { title: 'Compassion first', desc: 'Every decision begins with empathy.' },
  { title: 'Genuine respect', desc: 'Autonomy, choice and dignity at every stage.' },
  { title: 'Quality you can feel', desc: 'Raising the bar on what good care feels like.' },
  { title: 'Community at our core', desc: 'Helping people connect and contribute.' },
]

export default function WhoWeAre() {
  return (
    <section className="bg-blush-2">
      <div className="container-hf section-y flex flex-wrap items-center gap-x-16 gap-y-12">
        <div className="flex min-w-0 flex-[1_1_400px] justify-center">
          <div className="flex aspect-square w-full max-w-[480px] items-center justify-center rounded-full bg-blush">
            <Image
              src="/havenflow-mark.png"
              alt=""
              width={280}
              height={495}
              className="h-[62%] w-auto"
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-[1.2_1_480px] flex-col gap-[22px]">
          <span className="eyebrow">Who we are</span>
          <h2 className="text-display-3 font-medium text-navy">
            A team built on care, <span className="accent text-rose-ink">not just compliance.</span>
          </h2>
          <p className="text-[18px] leading-[1.65]">
            Founded in 2024 with one purpose — to offer supported living that truly feels like home.
            Our experienced team builds real relationships and tailors every interaction to the
            individual, improving life for the people we support, their families and the wider
            community.
          </p>
          <ul className="m-0 mt-2 grid list-none gap-4 p-0 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            {values.map((v) => (
              <li key={v.title} className="flex flex-col gap-1.5 rounded-[18px] bg-blush p-[22px]">
                <strong className="text-[18px] font-medium text-navy">{v.title}</strong>
                <span className="text-[15px] leading-[1.55]">{v.desc}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="inline-flex min-h-[44px] items-center gap-2 self-start text-[17px] font-medium text-navy transition-colors hover:text-rose-ink"
          >
            More about Haven Flow
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
