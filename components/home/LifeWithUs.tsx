import ArchFrame from '@/components/ui/ArchFrame'
import { photos } from '@/lib/images'

/** The four Contentful assets, in the order they appear on the live site. */
const moments = [
  {
    photo: photos.home,
    fill: 'pink' as const,
    title: 'Supported living',
    caption: 'A safe, nurturing environment where people thrive with the right care around them.',
  },
  {
    photo: photos.about,
    fill: 'mauve' as const,
    title: 'Compassion & respect',
    caption: 'Care shaped around each person — never a one-size-fits-all checklist.',
  },
  {
    photo: photos.services,
    fill: 'sky' as const,
    title: 'Comprehensive support',
    caption:
      'From personal care and daily living to emotional wellbeing and independence skills.',
  },
  {
    photo: photos.team,
    fill: 'pink' as const,
    title: 'Experienced professionals',
    caption: 'London-based carers and staff who combine skill with genuine warmth.',
  },
]

export default function LifeWithUs() {
  return (
    <section
      className="container-hf flex flex-col gap-12 pb-24 pt-[clamp(72px,10vw,112px)]"
      aria-labelledby="life-with-us-heading"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[640px] flex-col gap-4">
          <span className="eyebrow">Life with us</span>
          <h2 id="life-with-us-heading" className="text-display-3 font-medium text-navy">
            Care in real moments, <span className="accent text-rose-ink">not stock phrases.</span>
          </h2>
        </div>
        <p className="max-w-[420px] text-[18px] leading-[1.6]">
          Every day looks a little different. Here&rsquo;s what support from Haven Flow feels like.
        </p>
      </div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
        {moments.map((m) => (
          <article key={m.title} className="flex flex-col gap-[18px]">
            <ArchFrame
              photo={m.photo}
              shape="archSm"
              fill={m.fill}
              ratio="aspect-[4/5]"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 25vw"
            />
            <h3 className="text-[22px] font-medium text-navy">{m.title}</h3>
            <p className="text-[16px] leading-[1.6]">{m.caption}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
