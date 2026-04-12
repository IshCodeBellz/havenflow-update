import Image from 'next/image'

/** Same Contentful assets as https://www.havenflowcare.co.uk (homepage, about, services). */
const moments = [
  {
    src: 'https://images.ctfassets.net/bdlach144dfs/1bd1ds9i8dPqohGVg9jPWw/b9601a7e16a5953b049639565294c7dd/1.png',
    alt: 'Haven Flow Care homepage hero — welcoming supported living imagery.',
    title: 'Supported living',
    caption: 'A safe, nurturing environment where people can thrive with the right care around them.',
  },
  {
    src: 'https://images.ctfassets.net/bdlach144dfs/qoOXhLAATLeuvfgzxvaFr/a9597d905141f069e4617445c68e1478/2.png',
    alt: 'Haven Flow Care — imagery from our about page.',
    title: 'Compassion & respect',
    caption: 'Care shaped around each person — not one-size-fits-all checklists.',
  },
  {
    src: 'https://images.ctfassets.net/bdlach144dfs/77TIUP4qXKpHpXO40ANphF/7d507108a6178f515a513bfe76d31d17/3.png',
    alt: 'Haven Flow Care — imagery from our services page.',
    title: 'Comprehensive support',
    caption: 'From personal care and daily living to emotional wellbeing and independence skills.',
  },
  {
    src: 'https://images.ctfassets.net/bdlach144dfs/33HGtY6TL7SPrX1yl22Aho/e9af22ed0aca1a2add7d014a14e126a6/stock-staff-1.png',
    alt: 'Haven Flow Care team member.',
    title: 'Experienced professionals',
    caption: 'London-based carers and staff who combine skill with genuine warmth.',
  },
] as const

export default function LifeWithUs() {
  return (
    <section
      className="border-t border-cream-border bg-cream px-6 py-20 sm:px-10 lg:py-24"
      aria-labelledby="life-with-us-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl lg:mb-14">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Life with us</p>
          <h2
            id="life-with-us-heading"
            className="mb-5 font-serif text-4xl font-medium leading-[1.12] text-navy lg:text-[2.65rem]"
          >
            Care in real moments — not stock phrases.
          </h2>
          <p className="max-w-lg text-[15px] font-light leading-[1.85] text-slate-soft">
            The same Contentful imagery we use on{' '}
            <a
              href="https://www.havenflowcare.co.uk"
              className="text-navy underline decoration-rose/40 underline-offset-2 transition-colors hover:text-rose-dark"
              rel="noopener noreferrer"
              target="_blank"
            >
              havenflowcare.co.uk
            </a>{' '}
            — homepage, about, services, and team.
          </p>
        </div>

        {/* Mobile: horizontal scroll, no auto-play. Desktop: full grid visible. */}
        <div className="relative -mx-6 sm:-mx-10 lg:mx-0">
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 pt-1 [scrollbar-width:thin] sm:gap-5 sm:px-10 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0"
            role="list"
            aria-label="Moments of care and daily life"
          >
            {moments.map((m) => (
              <article
                key={m.title}
                role="listitem"
                className="w-[min(82vw,20rem)] shrink-0 snap-center sm:w-[min(72vw,22rem)] lg:w-auto"
              >
                <div className="overflow-hidden rounded-2xl border border-cream-border bg-white shadow-card">
                  <div className="relative aspect-[4/5] w-full bg-cream-light">
                    <Image
                      src={m.src}
                      alt={m.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 85vw, 25vw"
                    />
                  </div>
                  <div className="border-t border-cream-border p-5 sm:p-6">
                    <h3 className="font-serif text-[1.2rem] font-medium leading-snug text-navy">{m.title}</h3>
                    <p className="mt-2 text-[13px] font-light leading-[1.75] text-slate-soft">{m.caption}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p
            className="mt-3 px-6 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-slate-mid sm:px-10 lg:hidden"
            aria-hidden
          >
            Swipe for more
          </p>
        </div>
      </div>
    </section>
  )
}
