export interface CateringPackage {
  id: string;
  name: string;
  description: string;
  pricePerPerson: number;
  minGuests: number;
  items: string[];
  isPopular?: boolean;
}

export interface CateringAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: 'per person' | 'per tray' | 'each';
}

export const cateringPackages: CateringPackage[] = [
  {
    id: 'basic',
    name: 'Essential Package',
    description: 'Perfect for small gatherings and casual events',
    pricePerPerson: 18.99,
    minGuests: 15,
    items: [
      'Choice of 1 Main Course (Veg or Non-Veg)',
      'Dal Makhani or Chana Masala',
      'Jeera Rice',
      'Butter Naan (2 per person)',
      'Raita',
      'Disposable plates & cutlery',
    ],
  },
  {
    id: 'classic',
    name: 'Classic Package',
    description: 'Our most popular option for parties and celebrations',
    pricePerPerson: 26.99,
    minGuests: 20,
    items: [
      'Choice of 2 Main Courses',
      'Paneer Tikka or Chicken Tikka',
      'Dal Makhani',
      'Vegetable Biryani or Jeera Rice',
      'Butter Naan & Tandoori Roti (2 each per person)',
      'Garden Salad with Dressing',
      'Raita & Chutneys',
      'Gulab Jamun (2 per person)',
      'Disposable plates & cutlery',
    ],
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium Feast',
    description: 'The ultimate spread for special occasions and large events',
    pricePerPerson: 38.99,
    minGuests: 30,
    items: [
      'Choice of 3 Main Courses',
      'Mixed Appetizer Platter (Tikka, Samosa, Pakora)',
      'Dal Makhani & Chana Masala',
      'Chicken Biryani or Vegetable Biryani',
      'Assorted Breads (Naan, Roti, Paratha)',
      'Garden Salad & Raita',
      'Complete Chutney Selection',
      'Mango Lassi',
      'Gulab Jamun & Kheer',
      'Serving utensils & chafing dishes',
      'Disposable premium plates & cutlery',
    ],
  },
];

export const cateringAddons: CateringAddon[] = [
  {
    id: 'appetizer-tray',
    name: 'Extra Appetizer Tray',
    description: 'Samosa, Pakora, or Tikka (serves 10-12)',
    price: 65,
    unit: 'per tray',
  },
  {
    id: 'biryani-upgrade',
    name: 'Biryani Upgrade',
    description: 'Upgrade from rice to Biryani',
    price: 4,
    unit: 'per person',
  },
  {
    id: 'dessert-platter',
    name: 'Dessert Platter',
    description: 'Assorted sweets (serves 10-12)',
    price: 55,
    unit: 'per tray',
  },
  {
    id: 'masala-chai',
    name: 'Masala Chai Service',
    description: 'Traditional spiced tea',
    price: 3,
    unit: 'per person',
  },
  {
    id: 'live-station',
    name: 'Live Cooking Station',
    description: 'Fresh kababs cooked on-site (min 50 guests)',
    price: 250,
    unit: 'each',
  },
];

export const cateringInfo = {
  leadTime: '72 hours minimum notice required',
  deliveryFee: 'Free delivery within 10 miles, $2/mile beyond',
  setupIncluded: 'Setup and breakdown included for orders over 50 guests',
  customizable: 'All packages can be customized to dietary requirements',
  contact: {
    phone: '510-789-3437',
    email: 'catering@keekuz.com',
  },
};
