const steps = [
  {
    n: '1',
    title: 'Initial consultation',
    desc: 'We listen to the person, their family and professionals to understand needs and goals.',
  },
  {
    n: '2',
    title: 'Personalised care plan',
    desc: 'Together we shape a plan around preferences, routines and pace.',
  },
  {
    n: '3',
    title: 'Caregiver matching',
    desc: 'We match skilled, vetted carers who suit the person — not just the rota.',
  },
  {
    n: '4',
    title: 'Ongoing review',
    desc: 'Regular reviews and feedback keep care right as needs change.',
  },
]

export default function HowItWorks() {
  return (
    <section className="container-hf section-y flex flex-col gap-12" aria-labelledby="how-it-works">
      <div className="flex max-w-[680px] flex-col gap-4">
        <span className="eyebrow">How it works</span>
        <h2 id="how-it-works" className="text-display-3 font-medium text-navy">
          Four simple steps to <span className="accent text-rose-ink">the right care.</span>
        </h2>
      </div>
      <ol className="m-0 grid list-none gap-5 p-0 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
        {steps.map((s) => (
          <li
            key={s.n}
            className="flex flex-col gap-3.5 rounded-[24px] border border-line bg-white p-[30px]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-soft text-[18px] font-semibold text-navy">
              {s.n}
            </span>
            <strong className="text-[21px] font-medium text-navy">{s.title}</strong>
            <span className="text-[16px] leading-[1.6]">{s.desc}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
