export const restaurantInfo = {
  name: "Dino's Diner",
  tagline: 'Classic American Comfort Food Since 1985',
  phone: '5105551234',
  phoneFormatted: '(510) 555-1234',
  email: 'hello@dinosdiner.com',
  address: {
    street: '123 Main Street',
    city: 'Oakland',
    state: 'CA',
    zip: '94612',
    full: '123 Main Street, Oakland, CA 94612',
  },
  coordinates: {
    lat: 37.8044,
    lng: -122.2712,
  },
  hours: {
    monday: { open: '07:00', close: '21:00' },
    tuesday: { open: '07:00', close: '21:00' },
    wednesday: { open: '07:00', close: '21:00' },
    thursday: { open: '07:00', close: '21:00' },
    friday: { open: '07:00', close: '22:00' },
    saturday: { open: '08:00', close: '22:00' },
    sunday: { open: '08:00', close: '20:00' },
  },
  hoursDisplay: [
    { days: 'Mon - Thu', hours: '7am - 9pm' },
    { days: 'Fri', hours: '7am - 10pm' },
    { days: 'Sat', hours: '8am - 10pm' },
    { days: 'Sun', hours: '8am - 8pm' },
  ],
  social: {
    instagram: 'https://instagram.com/dinosdiner',
    facebook: 'https://facebook.com/dinosdiner',
  },
  colors: {
    primary: '#1e3a5f',    // Deep navy - trustworthy, American
    secondary: '#b91c1c',  // Warm brick red - appetite, warmth
    accent: '#d97706',     // Golden amber - CTAs, highlights
    cream: '#faf7f2',      // Warm cream - backgrounds
  },
  copyright: '© 2024 Dino\'s Diner. All rights reserved.',
};
