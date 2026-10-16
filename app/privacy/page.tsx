import type { Metadata } from 'next'
import SiteShell from '@/components/layout/SiteShell'
import { LegalArticle, type LegalSection } from '@/components/layout/LegalArticle'

export const metadata: Metadata = {
  title: 'Privacy Policy | Haven Flow Care',
  description:
    'How Haven Flow Care collects, uses and protects your personal information, and the rights you have over your data.',
  alternates: { canonical: '/privacy' },
}

const sections: LegalSection[] = [
  {
    id: 'information-we-collect',
    heading: 'Information we collect',
    body: (
      <p>
        We may collect contact details (such as name, email address and telephone number), enquiry
        form details, and information you provide when applying for roles or requesting our
        services.
      </p>
    ),
  },
  {
    id: 'how-we-use-information',
    heading: 'How we use information',
    body: (
      <p>
        We use your information to respond to enquiries, provide care-related services, manage
        applications, improve our website, and meet legal and regulatory obligations.
      </p>
    ),
  },
  {
    id: 'sharing-and-storage',
    heading: 'Sharing and storage',
    body: (
      <p>
        We do not sell your data. Information may be shared with trusted service providers where
        necessary to operate our services and only under appropriate safeguards.
      </p>
    ),
  },
  {
    id: 'your-rights',
    heading: 'Your rights',
    body: (
      <p>
        You may request access, correction, deletion, or restriction of your personal data where
        applicable. To exercise these rights, contact us at admin@havenflowcare.co.uk.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: <p>For privacy-related questions, email admin@havenflowcare.co.uk.</p>,
  },
]

export default function PrivacyPage() {
  return (
    <SiteShell>
      <LegalArticle
        active="privacy"
        title="Privacy policy"
        lastUpdated="9 April 2026"
        intro="Haven Flow Care is committed to protecting your personal information. This page explains what we collect, how we use it, and your rights."
        sections={sections}
      />
    </SiteShell>
  )
}
