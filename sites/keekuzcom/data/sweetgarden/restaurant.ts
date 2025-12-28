export const restaurantInfo = {
  name: 'Sweet Garden',
  tagline: 'Sizzling Iron Plates & Asian BBQ',
  description: 'Fremont\'s favorite spot for sizzling iron plate dishes, authentic Asian BBQ skewers, and refreshing bubble teas.',
  phone: '5107719518',
  phoneFormatted: '(510) 771-9518',
  email: 'info@sweetgardenfremont.com',
  address: {
    street: '39473 Fremont Blvd',
    city: 'Fremont',
    state: 'CA',
    zip: '94538',
    full: '39473 Fremont Blvd, Fremont, CA 94538',
  },
  coordinates: {
    lat: 37.5442602,
    lng: -121.9814502,
  },
  hours: {
    monday: null,
    tuesday: { open: '11:00', close: '22:00', break: { start: '14:30', end: '16:30' } },
    wednesday: { open: '11:00', close: '22:00', break: { start: '14:30', end: '16:30' } },
    thursday: { open: '11:00', close: '22:00', break: { start: '14:30', end: '16:30' } },
    friday: { open: '11:00', close: '22:30', break: { start: '14:30', end: '16:30' } },
    saturday: { open: '11:00', close: '22:30', break: { start: '14:30', end: '16:30' } },
    sunday: { open: '11:00', close: '22:30', break: { start: '14:30', end: '16:30' } },
  },
  hoursDisplay: [
    { days: 'Monday', hours: 'Closed' },
    { days: 'Tue - Thu', hours: '11am - 2:30pm, 4:30pm - 10pm' },
    { days: 'Fri - Sun', hours: '11am - 2:30pm, 4:30pm - 10:30pm' },
  ],
  social: {
    instagram: 'https://instagram.com/sweetgardenfremont',
    facebook: 'https://facebook.com/sweetgardenfremont',
    yelp: 'https://www.yelp.com/biz/sweet-garden-fremont',
  },
  website: 'https://www.sweetgardenfremont.com',
  orderOnline: 'https://www.sweetgardenfremont.com/rfqd5e5r/sweet-garden-fremont-94538/order-online',
  colors: {
    primary: '#dc2626',
    secondary: '#f59e0b',
  },
  // Social proof for conversions
  rating: 4.5,
  reviewCount: 280,
  yearsInBusiness: 8,
  // Testimonials for social proof
  testimonials: [
    {
      name: 'Michelle T.',
      rating: 5,
      text: 'Best iron plate dishes in Fremont! The sizzling beef is amazing and the portions are generous.',
      source: 'Yelp',
    },
    {
      name: 'David L.',
      rating: 5,
      text: 'Love their BBQ skewers - perfect for a late night meal. The lamb skewers are a must-try!',
      source: 'Google',
    },
    {
      name: 'Sarah K.',
      rating: 5,
      text: 'Their taro milk tea is the best I\'ve had. Great bubble tea selection and friendly staff.',
      source: 'Yelp',
    },
  ],
  // Unique selling points
  highlights: [
    'Sizzling iron plate specialties',
    'Authentic Asian BBQ skewers',
    'Fresh bubble tea & fruit drinks',
    'Family-owned since 2016',
  ],
  copyright: '© 2024 Sweet Garden. All rights reserved.',
};
