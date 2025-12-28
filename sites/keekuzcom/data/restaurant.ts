export const restaurantInfo = {
  name: "Keeku da Dhaba",
  tagline: "Authentic Dhaba-Style Indian Cuisine",
  description: "Experience the flavors of traditional Indian roadside eateries, right here in Fremont. Our Dhaba-style cooking brings you the authentic taste of Punjab with recipes passed down through generations.",

  address: {
    street: "39935 Mission Blvd",
    city: "Fremont",
    state: "CA",
    zip: "94539",
    full: "39935 Mission Blvd, Fremont, CA 94539",
  },

  phone: "510-789-3437",
  phoneFormatted: "(510) 789-3437",

  hours: {
    wednesday: { open: "5:00 PM", close: "10:00 PM" },
    thursday: { open: "5:00 PM", close: "10:00 PM" },
    friday: { open: "5:00 PM", close: "11:00 PM" },
    saturday: { open: "5:00 PM", close: "11:00 PM" },
    sunday: { open: "5:00 PM", close: "10:00 PM" },
    monday: null, // Closed
    tuesday: null, // Closed
  },

  hoursDisplay: [
    { days: "Monday - Tuesday", hours: "Closed" },
    { days: "Wednesday - Thursday", hours: "5:00 PM - 10:00 PM" },
    { days: "Friday - Saturday", hours: "5:00 PM - 11:00 PM" },
    { days: "Sunday", hours: "5:00 PM - 10:00 PM" },
  ],

  social: {
    instagram: "#",
    facebook: "#",
    yelp: "#",
  },

  mapCoordinates: {
    lat: 37.5529571,
    lng: -121.9790961,
  },

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.8!2d-121.9801903!3d37.5529591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzEwLjciTiAxMjHCsDU4JzQ0LjgiVw!5e0!3m2!1sen!2sus!4v1234567890",

  features: [
    "Featured in SF Chronicle Best Food Trucks",
    "Authentic Dhaba-Style Cooking",
    "Fresh Ingredients Daily",
    "Family Recipes",
  ],

  deliveryServices: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/keeku-da-dhaba-fremont-27898814/",
      color: "#FF3008",
      icon: "doordash",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/store/keeku-da-dhaba/",
      color: "#06C167",
      icon: "ubereats",
    },
    {
      name: "Grubhub",
      url: "https://www.grubhub.com/restaurant/keeku-da-dhaba-fremont/",
      color: "#F63440",
      icon: "grubhub",
    },
  ],

  copyright: `© ${new Date().getFullYear()} Keeku Food Products LLC. All rights reserved.`,
};
