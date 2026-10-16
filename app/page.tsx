import type { Metadata } from 'next'
import SiteShell from '@/components/layout/SiteShell'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import LifeWithUs from '@/components/home/LifeWithUs'
import Services from '@/components/home/Services'
import HowItWorks from '@/components/home/HowItWorks'
import WhoWeAre from '@/components/home/WhoWeAre'
import Audiences from '@/components/home/Audiences'
import HomeCta from '@/components/home/HomeCta'

/* Title and description are inherited from the root layout; this only pins
   the canonical, which every other route sets for itself. Keeping it here
   rather than in the root layout avoids /_not-found inheriting it. */
export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Stats />
      <LifeWithUs />
      <Services />
      <HowItWorks />
      <WhoWeAre />
      <Audiences />
      <HomeCta />
    </SiteShell>
  )
}
