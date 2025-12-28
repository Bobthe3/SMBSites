export const restaurantInfo = {
  name: 'Sweet Garden Bakery',
  tagline: 'Artisan Baked Goods & Fresh Coffee',
  phone: '6505551234',
  phoneFormatted: '(650) 555-1234',
  email: 'hello@sweetgardenbakery.com',
  address: {
    street: '456 Oak Avenue',
    city: 'Palo Alto',
    state: 'CA',
    zip: '94301',
    full: '456 Oak Avenue, Palo Alto, CA 94301',
  },
  coordinates: {
    lat: 37.4419,
    lng: -122.1430,
  },
  hours: {
    monday: { open: '06:30', close: '18:00' },
    tuesday: { open: '06:30', close: '18:00' },
    wednesday: { open: '06:30', close: '18:00' },
    thursday: { open: '06:30', close: '18:00' },
    friday: { open: '06:30', close: '19:00' },
    saturday: { open: '07:00', close: '19:00' },
    sunday: { open: '07:00', close: '17:00' },
  },
  hoursDisplay: [
    { days: 'Mon - Thu', hours: '6:30am - 6pm' },
    { days: 'Fri - Sat', hours: '6:30am - 7pm' },
    { days: 'Sun', hours: '7am - 5pm' },
  ],
  social: {
    instagram: 'https://instagram.com/sweetgardenbakery',
    facebook: 'https://facebook.com/sweetgardenbakery',
  },
  colors: {
    primary: '#ec4899',
    secondary: '#a855f7',
  },
  copyright: '© 2024 Sweet Garden Bakery. All rights reserved.',
};
