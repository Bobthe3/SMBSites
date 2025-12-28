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
  { id: 'sushi-rolls', name: 'Sushi Rolls' },
  { id: 'iron-plate', name: 'Iron Plate' },
  { id: 'skewers', name: 'BBQ Skewers' },
  { id: 'drinks', name: 'Drinks' },
];

export const menuItems: MenuItem[] = [
  // Sushi Rolls
  { id: '1', name: 'Salmon Avocado Roll', description: 'Fresh salmon with creamy avocado, rolled in seasoned rice', price: 12.95, category: 'sushi-rolls', isPopular: true },
  { id: '2', name: 'Spicy Tuna Roll', description: 'Spicy tuna with cucumber and sesame seeds', price: 11.95, category: 'sushi-rolls' },
  { id: '3', name: 'California Roll', description: 'Crab, avocado, and cucumber with tobiko', price: 9.95, category: 'sushi-rolls' },
  { id: '4', name: 'Rainbow Roll', description: 'California roll topped with assorted sashimi', price: 16.95, category: 'sushi-rolls', isPopular: true },
  { id: '5', name: 'Dragon Roll', description: 'Eel and cucumber topped with avocado and eel sauce', price: 15.95, category: 'sushi-rolls' },
  { id: '6', name: 'Shrimp Tempura Roll', description: 'Crispy shrimp tempura with avocado and spicy mayo', price: 13.95, category: 'sushi-rolls' },

  // Iron Plate
  { id: '7', name: 'Shredded Pork', description: 'Tender shredded pork sizzling on iron plate with vegetables', price: 15.95, category: 'iron-plate', isPopular: true },
  { id: '8', name: 'Beef with Black Pepper', description: 'Sliced beef with black pepper sauce on sizzling plate', price: 17.95, category: 'iron-plate' },
  { id: '9', name: 'Garlic Chicken', description: 'Crispy chicken with garlic sauce served on hot plate', price: 14.95, category: 'iron-plate' },
  { id: '10', name: 'Seafood Iron Plate', description: 'Mixed seafood with vegetables on sizzling plate', price: 18.95, category: 'iron-plate' },

  // BBQ Skewers
  { id: '11', name: 'Pork Belly Skewers', description: 'Grilled pork belly with sweet and savory glaze', price: 8.95, category: 'skewers', isPopular: true },
  { id: '12', name: 'Chicken Yakitori', description: 'Classic Japanese grilled chicken skewers', price: 7.95, category: 'skewers' },
  { id: '13', name: 'Beef Skewers', description: 'Tender beef cubes grilled to perfection', price: 9.95, category: 'skewers' },
  { id: '14', name: 'Shrimp Skewers', description: 'Grilled shrimp with garlic butter', price: 10.95, category: 'skewers' },
  { id: '15', name: 'Vegetable Skewers', description: 'Assorted grilled vegetables with teriyaki glaze', price: 6.95, category: 'skewers', isVegetarian: true },

  // Drinks
  { id: '16', name: 'Passion Fruit Black Tea', description: 'Refreshing black tea with passion fruit flavor', price: 5.50, category: 'drinks', isVegetarian: true, isPopular: true },
  { id: '17', name: 'Black Milk Tea', description: 'Classic milk tea with tapioca pearls', price: 5.95, category: 'drinks', isVegetarian: true },
  { id: '18', name: 'Mango Smoothie', description: 'Fresh mango blended with ice', price: 6.50, category: 'drinks', isVegetarian: true },
  { id: '19', name: 'Thai Iced Tea', description: 'Sweet and creamy Thai-style iced tea', price: 4.95, category: 'drinks', isVegetarian: true },
  { id: '20', name: 'Japanese Ramune', description: 'Classic Japanese marble soda', price: 3.95, category: 'drinks', isVegetarian: true },
];

export const featuredItems = menuItems.filter(item => item.isPopular);
