import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Purpose Painting & Restoration | Premium Painting Contractor in Fremont, CA',
  description: 'Trusted painting contractor in Fremont, CA since 1999. 26+ years experience, 4.9★ Yelp rating. Interior, exterior, cabinet painting & restoration. Free estimates.',
  keywords: 'painting contractor Fremont, house painter Fremont CA, interior painting, exterior painting, cabinet refinishing, drywall repair, stucco repair',
  openGraph: {
    title: 'All Purpose Painting & Restoration | Fremont, CA',
    description: 'Premium painting contractor serving the Bay Area since 1999. 26+ years experience, 4.9★ Yelp rating.',
    type: 'website',
  },
}

export default function AllPurposePaintingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
