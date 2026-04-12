import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Haven Flow Care | Supported Living in London',
  description:
    'Haven Flow Care provides personalised supported living across London — built on compassion, trust, and a genuine belief in independence.',
  metadataBase: new URL('https://www.havenflowcare.co.uk'),
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
  },
  openGraph: {
    title: 'Haven Flow Care',
    description: 'Excellence in personalised care across London.',
    url: 'https://www.havenflowcare.co.uk',
    siteName: 'Haven Flow Care',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/havenflow-logo.png',
        width: 1200,
        height: 630,
        alt: 'Haven Flow Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haven Flow Care',
    description: 'Excellence in personalised care across London.',
    images: ['/havenflow-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-cream text-navy pt-[5.75rem] sm:pt-[6rem]">
        <a
          href="#main-content"
          className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2.5 focus:text-[13px] focus:font-medium focus:text-navy focus:shadow-nav"
        >
          Skip to main content
        </a>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
