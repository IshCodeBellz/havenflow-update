import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Haven Flow Care | Speak to Our London Team',
  description:
    'Contact Haven Flow Care for supported living, nanny placement, referrals, or general enquiries. We respond within 24 hours.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
