import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Skilled Nursing & Personal Care',
    desc: 'Medically supervised personal care delivered with dignity and professionalism, in the comfort of your own home.',
  },
  {
    num: '02',
    title: 'Household & Daily Living',
    desc: 'Hands-on help with household tasks, meal planning, and budgeting to support a safe, independent lifestyle.',
  },
  {
    num: '03',
    title: 'Emotional & Social Support',
    desc: 'Companionship, emotional wellbeing, and community connection — because thriving means more than physical care.',
  },
  {
    num: '04',
    title: 'Independent Living Skills',
    desc: 'Building confidence and capability in everyday routines, so each person can live life on their own terms.',
  },
  {
    num: '05',
    title: 'Education, Employment & Volunteering',
    desc: 'Supporting access to meaningful opportunities in education, work, and community engagement.',
  },
  {
    num: '06',
    title: 'Ofsted Nanny Services',
    desc: 'Professional, registered nanny placements for families across London, held to the highest care standards.',
  },
]

export default function Services() {
  return (
    <section className="bg-section-fade px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl lg:mb-20">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">What We Offer</p>
          <h2 className="mb-5 font-serif text-4xl font-medium leading-[1.12] text-navy lg:text-[2.75rem]">
            Comprehensive support, shaped around you.
          </h2>
          <p className="max-w-lg text-[15px] font-light leading-[1.8] text-slate-soft">
            Every person we support has a unique story. Our services flex around individual goals, needs, and
            aspirations.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((s) => (
            <article
              key={s.num}
              className="group flex flex-col rounded-2xl border border-cream-border bg-white p-8 shadow-card transition-all duration-200 ease-out-expo hover:border-rose/25 hover:shadow-card-hover lg:p-9"
            >
              <p className="mb-4 font-serif text-[12px] font-semibold tracking-[0.14em] text-rose">{s.num}</p>
              <h3 className="mb-3 font-serif text-[1.35rem] font-medium leading-snug text-navy transition-colors duration-200 group-hover:text-navy-deep lg:text-[1.4rem]">
                {s.title}
              </h3>
              <p className="flex-1 text-[13px] font-light leading-[1.75] text-slate-soft">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center lg:text-left">
          <Link
            href="/services"
            className="group inline-flex cursor-pointer items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy transition-colors duration-200 hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
          >
            <span className="border-b border-navy pb-0.5 transition-colors duration-200 group-hover:border-rose group-hover:text-rose">
              View all services
            </span>
            <span className="transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
