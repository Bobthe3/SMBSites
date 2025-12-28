export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

export const categories: MenuCategory[] = [
  { id: 'hot-food', name: 'Hot Food', description: 'Delicious fried and crispy favorites' },
  { id: 'iron-plate', name: 'Iron Plate', description: 'Sizzling stir-fried dishes served on hot iron plates' },
  { id: 'noodles', name: 'Noodles', description: 'Ramen and fried noodle dishes' },
  { id: 'fruit-tea', name: 'Fruit Tea', description: 'Refreshing fruit-infused teas' },
  { id: 'milk-tea', name: 'Milk Tea', description: 'Creamy milk tea beverages' },
  { id: 'bbq', name: 'BBQ', description: 'Grilled skewers and BBQ items' },
];

export const menuItems: MenuItem[] = [
  // Hot Food
  {
    id: '1',
    name: 'Hawaiian Chicken Wings',
    description: 'Sweet and tangy chicken wings with Hawaiian-style glaze',
    price: 14.99,
    category: 'hot-food',
    isPopular: true,
  },
  {
    id: '2',
    name: 'Hot and Sour Chicken Wings',
    description: 'Crispy chicken wings with a spicy and tangy kick',
    price: 14.99,
    category: 'hot-food',
  },
  {
    id: '3',
    name: 'Chicken Katsu',
    description: 'Breaded and fried chicken cutlet, served with a side of tangy dipping sauce',
    price: 14.99,
    category: 'hot-food',
    isPopular: true,
  },
  {
    id: '4',
    name: 'Salt and Pepper Chicken',
    description: 'Crispy fried chicken with aromatic salt and pepper seasoning',
    price: 14.99,
    category: 'hot-food',
  },
  {
    id: '5',
    name: 'Pineapple Chicken',
    description: 'Tender chicken, sweet pineapple, and a hint of spice come together in a harmonious balance of flavors',
    price: 14.99,
    category: 'hot-food',
  },

  // Iron Plate Dishes
  {
    id: '6',
    name: 'Iron Plate Beef',
    description: 'Sizzling beef stir-fried on a hot iron plate',
    price: 16.99,
    category: 'iron-plate',
    isPopular: true,
  },
  {
    id: '7',
    name: 'Iron Plate Beef Brisket',
    description: 'Tender beef brisket served sizzling on iron plate',
    price: 16.99,
    category: 'iron-plate',
  },
  {
    id: '8',
    name: 'Iron Plate Prawns',
    description: 'Fresh prawns stir-fried on a sizzling iron plate',
    price: 16.99,
    category: 'iron-plate',
    isPopular: true,
  },
  {
    id: '9',
    name: 'Iron Plate Chicken',
    description: 'Tender chicken served sizzling on hot iron plate',
    price: 16.99,
    category: 'iron-plate',
  },
  {
    id: '10',
    name: 'Iron Plate Chicken Wings',
    description: 'Crispy chicken wings on sizzling iron plate',
    price: 16.99,
    category: 'iron-plate',
  },
  {
    id: '11',
    name: 'Iron Plate Squid',
    description: 'Tender squid stir-fried on a hot iron plate',
    price: 16.99,
    category: 'iron-plate',
  },
  {
    id: '12',
    name: 'Iron Plate Tofu',
    description: 'Crispy tofu served sizzling on iron plate',
    price: 16.99,
    category: 'iron-plate',
  },
  {
    id: '13',
    name: 'Iron Plate Tomato and Egg',
    description: 'Classic tomato and egg dish on sizzling iron plate',
    price: 16.99,
    category: 'iron-plate',
  },

  // Noodles
  {
    id: '14',
    name: 'Beef Sirloin Ramen',
    description: 'Rich ramen topped with tender beef sirloin',
    price: 13.99,
    category: 'noodles',
    isPopular: true,
  },
  {
    id: '15',
    name: 'Japanese Ramen',
    description: 'Traditional Japanese-style ramen with rich broth',
    price: 13.99,
    category: 'noodles',
  },
  {
    id: '16',
    name: 'Garlic Fried Noodles',
    description: 'Wok-fried noodles with aromatic garlic',
    price: 9.99,
    category: 'noodles',
  },

  // Fruit Tea
  {
    id: '17',
    name: 'Passion Fruit Black Tea',
    description: 'Refreshing black tea with tropical passion fruit',
    price: 4.25,
    category: 'fruit-tea',
    isPopular: true,
  },
  {
    id: '18',
    name: 'Passion Fruit Green Tea',
    description: 'Light green tea infused with passion fruit',
    price: 4.25,
    category: 'fruit-tea',
  },
  {
    id: '19',
    name: 'Honey Black Tea',
    description: 'Sweet black tea with natural honey',
    price: 4.25,
    category: 'fruit-tea',
  },
  {
    id: '20',
    name: 'Honey Green Tea',
    description: 'Delicate green tea sweetened with honey',
    price: 4.25,
    category: 'fruit-tea',
  },
  {
    id: '21',
    name: 'Mango Black Tea',
    description: 'Tropical mango-infused black tea',
    price: 4.25,
    category: 'fruit-tea',
  },
  {
    id: '22',
    name: 'Peach Black Tea',
    description: 'Sweet peach-flavored black tea',
    price: 4.25,
    category: 'fruit-tea',
  },

  // Milk Tea
  {
    id: '23',
    name: 'Black Milk Tea',
    description: 'Classic creamy black milk tea',
    price: 4.25,
    category: 'milk-tea',
    isPopular: true,
  },
  {
    id: '24',
    name: 'Green Milk Tea',
    description: 'Smooth green tea with creamy milk',
    price: 4.25,
    category: 'milk-tea',
  },
  {
    id: '25',
    name: 'Taro Milk',
    description: 'Sweet and creamy taro-flavored milk drink',
    price: 4.95,
    category: 'milk-tea',
    isPopular: true,
  },
  {
    id: '26',
    name: 'Matcha Milk',
    description: 'Premium matcha blended with creamy milk',
    price: 4.95,
    category: 'milk-tea',
  },
  {
    id: '27',
    name: 'Mango Milk',
    description: 'Tropical mango blended with creamy milk',
    price: 4.95,
    category: 'milk-tea',
  },
  {
    id: '28',
    name: 'Strawberry Milk',
    description: 'Sweet strawberry-flavored milk drink',
    price: 4.95,
    category: 'milk-tea',
  },

  // BBQ
  {
    id: '29',
    name: 'Pork Belly Skewer',
    description: 'Grilled pork belly on skewer',
    price: 5.99,
    category: 'bbq',
    isPopular: true,
  },
  {
    id: '30',
    name: 'Beef Skewer',
    description: 'Tender grilled beef on skewer',
    price: 5.99,
    category: 'bbq',
  },
  {
    id: '31',
    name: 'Chicken Skewer',
    description: 'Juicy grilled chicken on skewer',
    price: 4.99,
    category: 'bbq',
  },
];

export const featuredItems = menuItems.filter(item => item.isPopular);
