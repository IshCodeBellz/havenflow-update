import { services } from '@/lib/services'

const siteUrl = 'https://www.havenflowcare.co.uk'

/**
 * Organisation-level JSON-LD. Every value here is something the site already
 * states publicly — no address beyond the locality we actually publish, and
 * no ratings or review counts.
 */
const organisation = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#organisation`,
  name: 'Haven Flow Care',
  legalName: 'Haven Flow Care Ltd',
  url: siteUrl,
  logo: `${siteUrl}/havenflow-logo.png`,
  image: `${siteUrl}/havenflow-logo.png`,
  description:
    'Personalised supported living and complex care across London — built on compassion, trust, and a genuine belief in every person’s capacity to thrive independently.',
  telephone: '+44 7904 333304',
  email: 'admin@havenflowcare.co.uk',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
  areaServed: {
    '@type': 'City',
    name: 'London',
  },
  identifier: {
    '@type': 'PropertyValue',
    name: 'Company number',
    value: '15697128',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/havenflowcare/',
    'https://www.linkedin.com/company/haven-flow-care/',
    'https://www.facebook.com/profile.php?id=61567039918468',
    'https://x.com/HavenFlowCare',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Supported living services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.short,
        url: `${siteUrl}/services#${s.id}`,
      },
    })),
  },
}

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Escape `<` so the payload can't terminate the script element early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organisation).replace(/</g, '\\u003c'),
      }}
    />
  )
}
