import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.havenflowcare.co.uk'

/**
 * Real content dates, not build time. `new Date()` would stamp every URL with
 * the moment of each deploy, telling crawlers the whole site changed whenever
 * anything did — which they learn to discount. Bump a route's date here when
 * its content actually changes.
 */
const REDESIGN = '2026-10-16' // full site rebuild on the new design system
const LEGAL_REVIEW = '2026-04-09' // matches the "Last updated" shown on the pages

type Route = {
  path: string
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const routes: Route[] = [
  { path: '/', lastModified: REDESIGN, changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', lastModified: REDESIGN, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', lastModified: REDESIGN, changeFrequency: 'monthly', priority: 0.8 },
  // { path: '/nanny-services', ... }, // temporarily unavailable
  { path: '/care-home-staffing', lastModified: REDESIGN, changeFrequency: 'monthly', priority: 0.75 },
  { path: '/havenwork', lastModified: REDESIGN, changeFrequency: 'monthly', priority: 0.75 },
  { path: '/contact', lastModified: REDESIGN, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/caregiver-application', lastModified: REDESIGN, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy', lastModified: LEGAL_REVIEW, changeFrequency: 'yearly', priority: 0.4 },
  { path: '/cookies', lastModified: LEGAL_REVIEW, changeFrequency: 'yearly', priority: 0.4 },
  { path: '/terms', lastModified: LEGAL_REVIEW, changeFrequency: 'yearly', priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
