const items = [
  'Ofsted Registered Nanny Services',
  'Customised Care Plans',
  'Independent Living Support',
  'Caregiver Opportunities',
  'London-Wide Coverage',
]

function Marker() {
  return (
    <svg className="h-2 w-2 shrink-0 text-white/55" viewBox="0 0 8 8" fill="currentColor" aria-hidden>
      <path d="M4 0 8 4 4 8 0 4Z" />
    </svg>
  )
}

export default function Strip() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-rose via-rose to-rose-dark py-4 sm:py-5"
      aria-label="Highlights"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.06)_50%,transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3.5 px-6 sm:gap-x-14 sm:px-10">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-white">
            <Marker />
            <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-[12px]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
