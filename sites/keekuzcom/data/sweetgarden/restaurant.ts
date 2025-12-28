export const restaurantInfo = {
  name: "Sweet Garden",
  tagline: "Spice, Sizzle, and Sweet Delights Await",
  description: "Experience a culinary journey with our expertly crafted Asian and BBQ flavors, featuring the perfect blend of sweet and umami. Enjoy high-quality dishes made for takeout in Fremont, CA.",

  address: {
    street: "39473 Fremont Blvd",
    city: "Fremont",
    state: "CA",
    zip: "94538",
    full: "39473 Fremont Blvd, Fremont, CA 94538",
  },

  phone: "510-771-9518",
  phoneFormatted: "(510) 771-9518",

  hours: {
    monday: null, // Closed
    tuesday: { open: "11:00 AM", close: "10:00 PM", break: { start: "2:30 PM", end: "4:30 PM" } },
    wednesday: { open: "11:00 AM", close: "10:00 PM", break: { start: "2:30 PM", end: "4:30 PM" } },
    thursday: { open: "11:00 AM", close: "10:00 PM", break: { start: "2:30 PM", end: "4:30 PM" } },
    friday: { open: "11:00 AM", close: "10:30 PM", break: { start: "2:30 PM", end: "4:30 PM" } },
    saturday: { open: "11:00 AM", close: "10:30 PM", break: { start: "2:30 PM", end: "4:30 PM" } },
    sunday: { open: "11:00 AM", close: "10:30 PM", break: { start: "2:30 PM", end: "4:30 PM" } },
  },

  hoursDisplay: [
    { days: "Monday", hours: "Closed" },
    { days: "Tuesday - Thursday", hours: "11:00 AM - 2:30 PM, 4:30 PM - 10:00 PM" },
    { days: "Friday - Sunday", hours: "11:00 AM - 2:30 PM, 4:30 PM - 10:30 PM" },
  ],

  social: {
    instagram: "#",
    facebook: "#",
    yelp: "#",
  },

  mapCoordinates: {
    lat: 37.543807,
    lng: -121.981757,
  },

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.8!2d-121.981757!3d37.543807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMyJzM3LjciTiAxMjHCsDU4JzU0LjMiVw!5e0!3m2!1sen!2sus!4v1234567890",

  features: [
    "Asian BBQ Fusion",
    "Iron Plate Specialties",
    "Fresh Bubble Tea",
    "Convenient Takeout",
  ],

  orderOnlineUrl: "https://www.sweetgardenfremont.com/rfqd5e5r/sweet-garden-fremont-94538/order-online",

  deliveryServices: [
    {
      name: "Order Online",
      url: "https://www.sweetgardenfremont.com/rfqd5e5r/sweet-garden-fremont-94538/order-online",
      color: "#3B82F6",
      icon: "online",
    },
  ],

  copyright: `© ${new Date().getFullYear()} Sweet Garden. All rights reserved.`,
};
