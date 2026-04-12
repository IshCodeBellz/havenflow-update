import type { ReactNode } from 'react'

const h2 = 'font-serif text-2xl font-medium text-navy sm:text-3xl'
const p = 'text-[14px] font-light leading-[1.85] text-slate-soft'

export function LegalArticle({ children }: { children: ReactNode }) {
  return (
    <section className="bg-section-fade px-6 py-14 sm:px-10 lg:py-20">
      <article className="mx-auto max-w-4xl rounded-2xl border border-cream-border bg-white p-8 shadow-card sm:p-10 lg:p-12">
        <div className="space-y-10">{children}</div>
      </article>
    </section>
  )
}

export function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className={`${h2} mb-4`}>{title}</h2>
      <div className={p}>{children}</div>
    </div>
  )
}

export function LegalLead({ children }: { children: ReactNode }) {
  return <p className={`${p} text-[15px] leading-[1.9]`}>{children}</p>
}
