import SiteShell from '@/components/layout/SiteShell'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import LifeWithUs from '@/components/home/LifeWithUs'
import Services from '@/components/home/Services'
import HowItWorks from '@/components/home/HowItWorks'
import WhoWeAre from '@/components/home/WhoWeAre'
import Audiences from '@/components/home/Audiences'
import HomeCta from '@/components/home/HomeCta'

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
