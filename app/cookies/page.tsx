import type { Metadata } from 'next'
import Link from 'next/link'
import SiteShell from '@/components/layout/SiteShell'
import { LegalArticle, type LegalSection } from '@/components/layout/LegalArticle'

export const metadata: Metadata = {
  title: 'Cookie Policy | Haven Flow Care',
  description:
    'How Haven Flow Care uses cookies and similar technologies on this website, and how you can manage your choices.',
  alternates: { canonical: '/cookies' },
}

const sections: LegalSection[] = [
  {
    id: 'what-cookies-are',
    heading: 'What cookies are',
    body: (
      <p>
        Cookies are small text files stored on your device when you visit a website. They help
        websites function and can also be used to measure performance and usage.
      </p>
    ),
  },
  {
    id: 'cookies-we-use',
    heading: 'Cookies we currently use',
    body: (
      <p>
        At present, this website is designed to run without non-essential analytics or marketing
        cookies. If this changes, this policy and our consent mechanism will be updated before such
        cookies are activated.
      </p>
    ),
  },
  {
    id: 'strictly-necessary',
    heading: 'Strictly necessary cookies',
    body: (
      <p>
        Some essential cookies may be used to support core website functionality, security, and
        reliability. These do not require opt-in consent under applicable law.
      </p>
    ),
  },
  {
    id: 'future-analytics',
    heading: 'Future analytics or marketing cookies',
    body: (
      <p>
        If we introduce analytics, advertising, or similar optional cookies, we will ask for your
        consent first and provide controls to accept, reject, or change your preferences.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: (
      <p>
        If you have questions about cookies or data handling, please contact us at
        admin@havenflowcare.co.uk or read our{' '}
        <Link href="/privacy" className="text-navy underline">
          privacy policy
        </Link>
        .
      </p>
    ),
  },
]

export default function CookiesPage() {
  return (
    <SiteShell>
      <LegalArticle
        active="cookies"
        title="Cookie policy"
        lastUpdated="9 April 2026"
        intro="This policy explains how Haven Flow Care uses cookies and similar technologies on this website."
        sections={sections}
      />
    </SiteShell>
  )
}
