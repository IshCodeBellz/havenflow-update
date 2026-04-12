import Navbar     from '@/components/home/Navbar'
import Hero       from '@/components/home/Hero'
import Strip      from '@/components/home/Strip'
import Services   from '@/components/home/Services'
import About      from '@/components/home/About'
import CtaSection from '@/components/home/CtaSection'
import Footer     from '@/components/home/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Strip />
        <Services />
        <About />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
