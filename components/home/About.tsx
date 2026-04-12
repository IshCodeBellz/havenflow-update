const values = [
  {
    title: 'Compassion first',
    desc: 'Every decision begins with empathy — for the people we support and the families who trust us.',
  },
  {
    title: 'Genuine respect',
    desc: "We honour each person's autonomy, choices, and dignity at every stage of their journey.",
  },
  {
    title: 'Quality you can feel',
    desc: 'Not just ticking boxes — we raise the bar on what good care actually looks and feels like.',
  },
]

export default function About() {
  return (
    <section className="grid overflow-hidden bg-cream lg:grid-cols-2">
      <div className="relative px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div
          className="pointer-events-none absolute left-0 top-24 hidden h-32 w-px bg-gradient-to-b from-rose via-rose/40 to-transparent lg:block"
          aria-hidden
        />
        <div className="relative mx-auto max-w-lg lg:mx-0">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Who We Are</p>
          <h2 className="mb-6 font-serif text-4xl font-medium leading-[1.12] text-navy lg:text-[2.65rem]">
            A team built on care,
            <br className="hidden lg:block" /> not just compliance.
          </h2>
          <p className="text-[15px] font-light leading-[1.85] text-slate-soft">
            Established in 2024, Haven Flow Care was founded with a clear purpose — to offer supported living that
            truly feels like home. We go beyond checklists. Our team of experienced professionals builds real
            relationships, tailoring every interaction to the individual.
          </p>
          <p className="mt-5 text-[15px] font-light leading-[1.85] text-slate-soft">
            At the heart of what we do is a genuine belief in enhancing quality of life — for individuals, their
            families, and the wider community.
          </p>
        </div>
      </div>

      <div className="relative bg-navy px-6 py-20 sm:px-10 lg:rounded-tl-[2.5rem] lg:px-14 lg:py-28 xl:rounded-tl-[3rem]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgba(202,155,171,0.12)_0%,transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-lg lg:mx-0">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Our Values</p>
          <h2 className="mb-10 font-serif text-4xl font-medium leading-[1.12] text-white lg:text-[2.65rem]">
            What drives everything we do.
          </h2>

          <ul className="border-t border-white/10">
            {values.map((v) => (
              <li key={v.title} className="flex gap-5 border-b border-white/10 py-7 last:border-b-0">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose shadow-[0_0_0_4px_rgba(202,155,171,0.2)]"
                  aria-hidden
                />
                <div>
                  <p className="mb-2 text-[15px] font-medium tracking-[0.02em] text-white">{v.title}</p>
                  <p className="text-[14px] font-light leading-[1.75] text-slate-mid">{v.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
