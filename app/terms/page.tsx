import type { Metadata } from 'next'
import SiteShell from '@/components/layout/SiteShell'
import { LegalArticle, type LegalSection } from '@/components/layout/LegalArticle'

export const metadata: Metadata = {
  title: 'Terms of Use | Haven Flow Care',
  description: 'The terms that apply when you use the Haven Flow Care website.',
  alternates: { canonical: '/terms' },
}

const sections: LegalSection[] = [
  {
    id: 'website-content',
    heading: 'Website content',
    body: (
      <p>
        The information on this website is for general guidance only. While we aim to keep content
        accurate and up to date, we do not guarantee completeness or suitability for every
        individual situation.
      </p>
    ),
  },
  {
    id: 'acceptable-use',
    heading: 'Acceptable use',
    body: (
      <p>
        You agree not to misuse this website, attempt unauthorized access, or interfere with
        security, availability, or normal operation.
      </p>
    ),
  },
  {
    id: 'third-party-links',
    heading: 'Third-party links',
    body: (
      <p>
        This website may include links to third-party websites. We are not responsible for the
        content, policies, or practices of those sites.
      </p>
    ),
  },
  {
    id: 'liability',
    heading: 'Liability',
    body: (
      <p>
        To the fullest extent permitted by law, Haven Flow Care is not liable for losses arising
        from use of this website or reliance on its content.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: <p>Questions about these terms can be sent to admin@havenflowcare.co.uk.</p>,
  },
]

export default function TermsPage() {
  return (
    <SiteShell>
      <LegalArticle
        active="terms"
        title="Terms of use"
        lastUpdated="9 April 2026"
        intro="By using this website, you agree to these terms. If you do not agree, please do not use the site."
        sections={sections}
      />
    </SiteShell>
  )
}
