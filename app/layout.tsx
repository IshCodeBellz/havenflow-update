import type { Metadata } from 'next'
import { Jost, Newsreader } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import StructuredData from '@/components/StructuredData'

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

/** Italic only — used for the accent words in headings and step numbers. */
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Haven Flow Care | Supported Living in London',
  description:
    'Haven Flow Care provides personalised supported living across London — built on compassion, trust, and a genuine belief in independence.',
  metadataBase: new URL('https://www.havenflowcare.co.uk'),
  openGraph: {
    title: 'Haven Flow Care | Supported Living in London',
    description:
      'Personalised supported living and complex care across London — built on compassion, trust, and a genuine belief in independence.',
    url: 'https://www.havenflowcare.co.uk',
    siteName: 'Haven Flow Care',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Haven Flow Care — supported living and complex care across London.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haven Flow Care | Supported Living in London',
    description:
      'Personalised supported living and complex care across London — built on compassion, trust, and a genuine belief in independence.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${jost.variable} ${newsreader.variable}`}>
      <body className="bg-blush font-sans text-body antialiased">
        <a
          href="#main-content"
          className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2.5 focus:text-[14px] focus:font-medium focus:text-navy focus:shadow-float"
        >
          Skip to main content
        </a>
        {children}
        <CookieBanner />
        <StructuredData />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
