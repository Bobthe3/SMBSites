import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EJ Painting | Professional Painting Services in Menlo Park & Bay Area',
  description: 'EJ Painting Inc. - Professional interior and exterior painting services serving Menlo Park and all Bay Area cities. 4.9★ on Yelp, verified license, family owned & operated. Call (650) 249-9264 for a free estimate.',
  keywords: 'painting contractor, house painting, interior painting, exterior painting, Menlo Park painter, Bay Area painting, drywall repair, cabinet painting',
  openGraph: {
    title: 'EJ Painting | Professional Painting Services in Menlo Park',
    description: 'Family owned professional painting company. Interior, exterior, drywall repair & more. 4.9★ Yelp rating. Free estimates.',
    type: 'website',
  },
}

export default function EJPaintingLayout({
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
