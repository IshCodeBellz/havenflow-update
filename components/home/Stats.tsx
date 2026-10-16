const stats = [
  { num: '10+', label: 'Tailored service options' },
  { num: '100%', label: 'Person-centred care' },
  { num: '24/7', label: 'Complex care packages' },
  { num: '2024', label: 'Established in London' },
]

export default function Stats() {
  return (
    <section aria-label="At a glance" className="bg-blush-2">
      <div className="container-hf grid gap-7 py-10 [grid-template-columns:repeat(auto-fit,minmax(170px,1fr))]">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="text-[44px] font-medium leading-none text-navy">{s.num}</span>
            <span className="text-[16px]">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
