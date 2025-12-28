export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVegetarian?: boolean;
  isPopular?: boolean;
}

export const categories = [
  { id: 'pastries', name: 'Pastries' },
  { id: 'breads', name: 'Breads' },
  { id: 'cakes', name: 'Cakes' },
  { id: 'coffee', name: 'Coffee & Drinks' },
];

export const menuItems: MenuItem[] = [
  { id: '1', name: 'Butter Croissant', description: 'Flaky, buttery French-style croissant', price: 4.50, category: 'pastries', isVegetarian: true, isPopular: true },
  { id: '2', name: 'Almond Croissant', description: 'Filled with almond cream and topped with sliced almonds', price: 5.50, category: 'pastries', isVegetarian: true },
  { id: '3', name: 'Pain au Chocolat', description: 'Chocolate-filled croissant pastry', price: 5.00, category: 'pastries', isVegetarian: true, isPopular: true },
  { id: '4', name: 'Cinnamon Roll', description: 'Soft, gooey with cream cheese frosting', price: 5.50, category: 'pastries', isVegetarian: true },
  { id: '5', name: 'Sourdough Loaf', description: 'Traditional tangy sourdough bread', price: 8.00, category: 'breads', isVegetarian: true },
  { id: '6', name: 'Baguette', description: 'Classic French bread with crispy crust', price: 4.50, category: 'breads', isVegetarian: true },
  { id: '7', name: 'Multigrain Loaf', description: 'Hearty bread with seeds and grains', price: 7.50, category: 'breads', isVegetarian: true },
  { id: '8', name: 'Chocolate Cake Slice', description: 'Rich dark chocolate layer cake', price: 7.00, category: 'cakes', isVegetarian: true, isPopular: true },
  { id: '9', name: 'Carrot Cake Slice', description: 'Spiced cake with cream cheese frosting', price: 6.50, category: 'cakes', isVegetarian: true },
  { id: '10', name: 'Latte', description: 'Espresso with steamed milk', price: 5.50, category: 'coffee', isVegetarian: true },
  { id: '11', name: 'Cappuccino', description: 'Espresso with foamed milk', price: 5.00, category: 'coffee', isVegetarian: true },
  { id: '12', name: 'Matcha Latte', description: 'Japanese green tea with steamed milk', price: 6.00, category: 'coffee', isVegetarian: true },
];

export const featuredItems = menuItems.filter(item => item.isPopular);
