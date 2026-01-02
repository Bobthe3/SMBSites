import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JP Painting | Professional Painting Services in Redwood City & Bay Area',
  description: 'JP Painting - Professional interior and exterior painting services serving Redwood City and all Bay Area cities. Expert painting contractor with verified license. Request pricing & availability.',
  keywords: 'painting contractor, house painting, interior painting, exterior painting, Redwood City painter, Bay Area painting, drywall repair, cabinet painting',
  openGraph: {
    title: 'JP Painting | Professional Painting Services in Redwood City',
    description: 'Professional painting company serving Redwood City and Bay Area. Interior, exterior, drywall repair & more. Request pricing and availability.',
    type: 'website',
  },
}

export default function JPPaintingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
