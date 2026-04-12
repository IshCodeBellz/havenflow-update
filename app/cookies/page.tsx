import Link from 'next/link'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import PageHero from '@/components/layout/PageHero'
import { LegalArticle, LegalBlock, LegalLead } from '@/components/layout/LegalArticle'

const linkClass =
  'font-medium text-navy underline decoration-navy/30 underline-offset-4 transition-colors duration-200 hover:text-rose hover:decoration-rose/40 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 rounded-sm'

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero eyebrow="Legal" title="Cookie Policy" meta="Last updated: 9 April 2026" />

        <LegalArticle>
          <LegalLead>
            This policy explains how Haven Flow Care uses cookies and similar technologies on this website.
          </LegalLead>

          <LegalBlock title="1. What Cookies Are">
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites function
              and can also be used to measure performance and usage.
            </p>
          </LegalBlock>

          <LegalBlock title="2. Cookies We Currently Use">
            <p>
              At present, this website is designed to run without non-essential analytics or marketing cookies. If this
              changes, this policy and our consent mechanism will be updated before such cookies are activated.
            </p>
          </LegalBlock>

          <LegalBlock title="3. Strictly Necessary Cookies">
            <p>
              Some essential cookies may be used to support core website functionality, security, and reliability. These
              do not require opt-in consent under applicable law.
            </p>
          </LegalBlock>

          <LegalBlock title="4. Future Analytics or Marketing Cookies">
            <p>
              If we introduce analytics, advertising, or similar optional cookies, we will ask for your consent first
              and provide controls to accept, reject, or change your preferences.
            </p>
          </LegalBlock>

          <LegalBlock title="5. Contact">
            <p>
              If you have questions about cookies or data handling, please contact us at admin@havenflowcare.co.uk or
              read our{' '}
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
              .
            </p>
          </LegalBlock>
        </LegalArticle>
      </main>
      <Footer />
    </>
  )
}
