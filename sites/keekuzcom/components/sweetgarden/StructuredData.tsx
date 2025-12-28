import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantInfo.name,
    description: restaurantInfo.description,
    servesCuisine: ['Asian', 'Japanese', 'BBQ', 'Taiwanese'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurantInfo.address.street,
      addressLocality: restaurantInfo.address.city,
      addressRegion: restaurantInfo.address.state,
      postalCode: restaurantInfo.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurantInfo.mapCoordinates.lat,
      longitude: restaurantInfo.mapCoordinates.lng,
    },
    telephone: restaurantInfo.phoneFormatted,
    url: 'https://claudesupply.com/sweetgarden',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
        opens: '11:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
        opens: '11:00',
        closes: '22:30',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
