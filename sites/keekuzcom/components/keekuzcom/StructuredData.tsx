import { restaurantInfo } from '@/data/keekuzcom/restaurant';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Keeku da Dhaba',
    alternateName: 'Keekuz',
    description: restaurantInfo.description,
    url: 'https://www.keekuz.com',
    telephone: restaurantInfo.phone,
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Thursday', 'Sunday'],
        opens: '17:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '17:00',
        closes: '23:00',
      },
    ],
    servesCuisine: ['Indian', 'Punjabi', 'Mughlai'],
    priceRange: '$$',
    image: 'https://static.wixstatic.com/media/d72c91_abcfff115d7c4793a70b646cc249cd1a~mv2_d_1600_1200_s_2.jpeg',
    menu: 'https://www.keekuz.com/menu',
    acceptsReservations: false,
    hasMenu: {
      '@type': 'Menu',
      url: 'https://www.keekuz.com/menu',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.instagram.com/keekudadhaba',
      'https://www.facebook.com/keekudadhaba',
      'https://www.yelp.com/biz/keeku-da-dhaba-fremont',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
