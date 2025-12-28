import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantInfo.name,
    servesCuisine: ['Japanese', 'Asian BBQ'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurantInfo.address.street,
      addressLocality: restaurantInfo.address.city,
      addressRegion: restaurantInfo.address.state,
      postalCode: restaurantInfo.address.zip,
    },
    telephone: restaurantInfo.phoneFormatted,
    url: restaurantInfo.website,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurantInfo.coordinates.lat,
      longitude: restaurantInfo.coordinates.lng,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
