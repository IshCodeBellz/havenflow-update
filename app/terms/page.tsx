import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import PageHero from '@/components/layout/PageHero'
import { LegalArticle, LegalBlock, LegalLead } from '@/components/layout/LegalArticle'

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero eyebrow="Legal" title="Terms of Use" meta="Last updated: 9 April 2026" />

        <LegalArticle>
          <LegalLead>
            By using this website, you agree to these terms. If you do not agree, please do not use the site.
          </LegalLead>

          <LegalBlock title="1. Website Content">
            <p>
              The information on this website is for general guidance only. While we aim to keep content accurate and
              up to date, we do not guarantee completeness or suitability for every individual situation.
            </p>
          </LegalBlock>

          <LegalBlock title="2. Acceptable Use">
            <p>
              You agree not to misuse this website, attempt unauthorized access, or interfere with security,
              availability, or normal operation.
            </p>
          </LegalBlock>

          <LegalBlock title="3. Third-Party Links">
            <p>
              This website may include links to third-party websites. We are not responsible for the content,
              policies, or practices of those sites.
            </p>
          </LegalBlock>

          <LegalBlock title="4. Liability">
            <p>
              To the fullest extent permitted by law, Haven Flow Care is not liable for losses arising from use of
              this website or reliance on its content.
            </p>
          </LegalBlock>

          <LegalBlock title="5. Contact">
            <p>Questions about these terms can be sent to admin@havenflowcare.co.uk.</p>
          </LegalBlock>
        </LegalArticle>
      </main>
      <Footer />
    </>
  )
}
