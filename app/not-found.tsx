import Link from 'next/link'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import PageHero from '@/components/layout/PageHero'

const btnPrimary =
  'inline-flex cursor-pointer items-center justify-center rounded-lg bg-rose px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm transition-all duration-200 hover:bg-rose-dark hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep'

const btnGhost =
  'inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/35 bg-white/[0.04] px-8 py-3.5 text-[12px] font-light uppercase tracking-[0.1em] text-white backdrop-blur-[2px] transition-all duration-200 hover:border-white/60 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          align="center"
          eyebrow="Page Not Found"
          title={"We couldn't find that page."}
          description="The page may have moved, been renamed, or no longer exists. You can head back to the homepage or explore our services."
        >
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/" className={btnPrimary}>
              Go Home
            </Link>
            <Link href="/services" className={btnGhost}>
              View Services
            </Link>
          </div>
        </PageHero>
      </main>
      <Footer />
    </>
  )
}
