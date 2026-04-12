import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import PageHero from '@/components/layout/PageHero'
import { LegalArticle, LegalBlock, LegalLead } from '@/components/layout/LegalArticle'

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          meta="Last updated: 9 April 2026"
        />

        <LegalArticle>
          <LegalLead>
            Haven Flow Care is committed to protecting your personal information. This page explains what we collect,
            how we use it, and your rights.
          </LegalLead>

          <LegalBlock title="1. Information We Collect">
            <p>
              We may collect contact details (such as name, email address and telephone number), enquiry form details,
              and information you provide when applying for roles or requesting our services.
            </p>
          </LegalBlock>

          <LegalBlock title="2. How We Use Information">
            <p>
              We use your information to respond to enquiries, provide care-related services, manage applications,
              improve our website, and meet legal and regulatory obligations.
            </p>
          </LegalBlock>

          <LegalBlock title="3. Sharing and Storage">
            <p>
              We do not sell your data. Information may be shared with trusted service providers where necessary to
              operate our services and only under appropriate safeguards.
            </p>
          </LegalBlock>

          <LegalBlock title="4. Your Rights">
            <p>
              You may request access, correction, deletion, or restriction of your personal data where applicable. To
              exercise these rights, contact us at admin@havenflowcare.co.uk.
            </p>
          </LegalBlock>

          <LegalBlock title="5. Contact">
            <p>For privacy-related questions, email admin@havenflowcare.co.uk.</p>
          </LegalBlock>
        </LegalArticle>
      </main>
      <Footer />
    </>
  )
}
