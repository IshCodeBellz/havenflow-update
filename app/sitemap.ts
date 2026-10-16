import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.havenflowcare.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // { url: `${siteUrl}/nanny-services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 }, // temporarily unavailable
    { url: `${siteUrl}/care-home-staffing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/havenwork`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/caregiver-application`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${siteUrl}/cookies`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${siteUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  ]
}
