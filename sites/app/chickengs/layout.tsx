import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chicken G's | Halal Fried Chicken | Fremont, CA",
  description: "Hand-battered halal fried chicken made to order. Certified halal, never frozen, always crispy. Order online for delivery or pickup in Fremont, CA.",
  keywords: "halal fried chicken, Fremont halal restaurant, halal chicken sandwich, hand-battered chicken, halal food near me",
  openGraph: {
    title: "Chicken G's | Halal Fried Chicken",
    description: "Hand-battered halal fried chicken made to order. You'll forget Chick-fil-A even exists.",
    type: 'website',
    locale: 'en_US',
    siteName: "Chicken G's",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chicken G's | Halal Fried Chicken",
    description: "Hand-battered halal fried chicken made to order in Fremont, CA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChickenGsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: "Chicken G's",
    image: 'https://chickengs.com/og-image.jpg',
    '@id': 'https://chickengs.com',
    url: 'https://chickengs.com',
    telephone: '+16509187777',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '40839 Fremont Blvd',
      addressLocality: 'Fremont',
      addressRegion: 'CA',
      postalCode: '94538',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.5485,
      longitude: -121.9886,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:30',
      closes: '01:00',
    },
    servesCuisine: ['Halal', 'American', 'Fried Chicken'],
    menu: 'https://chickengs.com/#menu',
    acceptsReservations: 'No',
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Sandwiches',
          hasMenuItem: [
            { '@type': 'MenuItem', name: 'The Big G', price: '14.49' },
            { '@type': 'MenuItem', name: 'Naughty-Chick', price: '14.99' },
          ],
        },
        {
          '@type': 'MenuSection',
          name: 'Fried Chicken',
          hasMenuItem: [
            { '@type': 'MenuItem', name: 'The G Meal', price: '22.99' },
            { '@type': 'MenuItem', name: 'Friends Meal', price: '38.99' },
          ],
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,400&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
