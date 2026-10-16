import Link from 'next/link'
import SiteShell from '@/components/layout/SiteShell'
import PageHero from '@/components/layout/PageHero'

export default function NotFound() {
  return (
    <SiteShell>
      <PageHero
        layout="center"
        eyebrow="Page not found"
        title={
          <>
            We couldn&rsquo;t find <span className="accent text-rose-ink">that page.</span>
          </>
        }
        lead="The page may have moved, been renamed, or no longer exists. You can head back to the homepage or explore our services."
      >
        <div className="mt-4 flex flex-wrap justify-center gap-3.5">
          <Link href="/" className="btn btn-primary">
            Go home
          </Link>
          <Link href="/services" className="btn btn-secondary">
            View services
          </Link>
        </div>
      </PageHero>
    </SiteShell>
  )
}
