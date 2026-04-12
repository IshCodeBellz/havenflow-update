import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Caregiver Jobs in London | Apply at Haven Flow Care',
  description:
    'Apply to join Haven Flow Care. Explore caregiver opportunities in London and submit your application online.',
  alternates: {
    canonical: '/caregiver-application',
  },
}

export default function CaregiverApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
