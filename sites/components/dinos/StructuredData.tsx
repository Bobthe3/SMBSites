import { restaurantInfo } from '@/data/dinos/restaurant';

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantInfo.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurantInfo.address.street,
      addressLocality: restaurantInfo.address.city,
      addressRegion: restaurantInfo.address.state,
      postalCode: restaurantInfo.address.zip,
    },
    telephone: restaurantInfo.phoneFormatted,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
