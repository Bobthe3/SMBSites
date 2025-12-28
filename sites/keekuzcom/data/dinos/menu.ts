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
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'sandwiches', name: 'Sandwiches' },
  { id: 'sides', name: 'Sides' },
  { id: 'drinks', name: 'Drinks' },
];

export const menuItems: MenuItem[] = [
  { id: '1', name: 'Classic Breakfast', description: 'Two eggs, bacon, toast, and hash browns', price: 12.99, category: 'breakfast', isPopular: true },
  { id: '2', name: 'Pancake Stack', description: 'Three fluffy buttermilk pancakes with maple syrup', price: 10.99, category: 'breakfast', isVegetarian: true },
  { id: '3', name: 'Veggie Omelette', description: 'Three eggs with peppers, onions, mushrooms, and cheese', price: 13.99, category: 'breakfast', isVegetarian: true },
  { id: '4', name: 'Dino Burger', description: 'Half-pound beef patty with lettuce, tomato, onion, and special sauce', price: 14.99, category: 'burgers', isPopular: true },
  { id: '5', name: 'Bacon Cheeseburger', description: 'Classic burger with crispy bacon and American cheese', price: 15.99, category: 'burgers' },
  { id: '6', name: 'Mushroom Swiss Burger', description: 'Topped with sautéed mushrooms and Swiss cheese', price: 15.99, category: 'burgers' },
  { id: '7', name: 'Club Sandwich', description: 'Turkey, bacon, lettuce, tomato on toasted bread', price: 13.99, category: 'sandwiches', isPopular: true },
  { id: '8', name: 'Grilled Cheese', description: 'Classic comfort with American and cheddar cheese', price: 9.99, category: 'sandwiches', isVegetarian: true },
  { id: '9', name: 'French Fries', description: 'Crispy golden fries with seasoning', price: 4.99, category: 'sides', isVegetarian: true },
  { id: '10', name: 'Onion Rings', description: 'Beer-battered and fried to perfection', price: 5.99, category: 'sides', isVegetarian: true },
  { id: '11', name: 'Milkshake', description: 'Chocolate, vanilla, or strawberry', price: 6.99, category: 'drinks', isVegetarian: true },
  { id: '12', name: 'Fresh Lemonade', description: 'House-made with real lemons', price: 3.99, category: 'drinks', isVegetarian: true },
];

export const featuredItems = menuItems.filter(item => item.isPopular);
