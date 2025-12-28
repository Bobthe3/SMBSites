export const restaurantInfo = {
  name: 'Sweet Garden',
  tagline: 'Japanese Cuisine & Asian BBQ',
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
  },
  website: 'https://www.sweetgardenfremont.com',
  orderOnline: 'https://www.sweetgardenfremont.com/rfqd5e5r/sweet-garden-fremont-94538/order-online',
  colors: {
    primary: '#dc2626', // Red for Asian BBQ
    secondary: '#f59e0b', // Amber/gold accent
  },
  copyright: '© 2024 Sweet Garden. All rights reserved.',
};
