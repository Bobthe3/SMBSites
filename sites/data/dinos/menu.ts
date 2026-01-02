export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVegetarian?: boolean;
  isPopular?: boolean;
  serves?: string;
}

export const categories = [
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'sandwiches', name: 'Sandwiches' },
  { id: 'dinner', name: 'Dinner Plates' },
  { id: 'family', name: 'Family Meals' },
  { id: 'sides', name: 'Sides' },
  { id: 'drinks', name: 'Drinks' },
];

export const menuItems: MenuItem[] = [
  // Breakfast
  { id: '1', name: 'Classic Breakfast', description: 'Two eggs any style, bacon or sausage, toast, and crispy hash browns', price: 12.99, category: 'breakfast', isPopular: true },
  { id: '2', name: 'Pancake Stack', description: 'Three fluffy buttermilk pancakes with real maple syrup and whipped butter', price: 10.99, category: 'breakfast', isVegetarian: true },
  { id: '3', name: 'Veggie Omelette', description: 'Three eggs with bell peppers, onions, mushrooms, and melted cheddar', price: 13.99, category: 'breakfast', isVegetarian: true },
  { id: '4', name: 'Country Fried Steak & Eggs', description: 'Hand-breaded steak smothered in country gravy with two eggs and biscuit', price: 15.99, category: 'breakfast', isPopular: true },
  { id: '5', name: 'Biscuits & Gravy', description: 'Two fresh-baked biscuits topped with homemade sausage gravy', price: 9.99, category: 'breakfast' },

  // Burgers
  { id: '10', name: 'Dino Burger', description: 'Half-pound Angus beef patty with lettuce, tomato, onion, pickles, and our secret sauce', price: 14.99, category: 'burgers', isPopular: true },
  { id: '11', name: 'Bacon Cheeseburger', description: 'Classic burger with crispy applewood bacon and melted American cheese', price: 15.99, category: 'burgers' },
  { id: '12', name: 'Mushroom Swiss Burger', description: 'Topped with sauteed mushrooms and melted Swiss cheese', price: 15.99, category: 'burgers' },
  { id: '13', name: 'Patty Melt', description: 'Beef patty with grilled onions and Swiss on toasted rye bread', price: 14.99, category: 'burgers' },
  { id: '14', name: 'BBQ Bacon Burger', description: 'Tangy BBQ sauce, crispy bacon, cheddar, and crispy onion rings', price: 16.99, category: 'burgers', isPopular: true },

  // Sandwiches
  { id: '20', name: 'Club Sandwich', description: 'Triple-decker with turkey, bacon, lettuce, tomato, and mayo on toasted bread', price: 13.99, category: 'sandwiches', isPopular: true },
  { id: '21', name: 'Grilled Cheese', description: 'Classic comfort with American and cheddar on buttery grilled sourdough', price: 9.99, category: 'sandwiches', isVegetarian: true },
  { id: '22', name: 'BLT', description: 'Crispy bacon, fresh lettuce, ripe tomato, and mayo on toasted bread', price: 11.99, category: 'sandwiches' },
  { id: '23', name: 'Philly Cheesesteak', description: 'Thinly sliced ribeye with peppers, onions, and melted provolone on a hoagie roll', price: 15.99, category: 'sandwiches', isPopular: true },
  { id: '24', name: 'Reuben', description: 'Corned beef, sauerkraut, Swiss cheese, and Thousand Island on grilled rye', price: 14.99, category: 'sandwiches' },

  // Dinner Plates
  { id: '30', name: 'Chicken Fried Steak Dinner', description: 'Hand-breaded and fried golden, smothered in country gravy. Served with mashed potatoes and green beans', price: 18.99, category: 'dinner', isPopular: true },
  { id: '31', name: 'Grilled Chicken Breast', description: 'Seasoned and grilled to perfection. Served with rice pilaf and steamed vegetables', price: 16.99, category: 'dinner' },
  { id: '32', name: 'Meatloaf Dinner', description: 'Homestyle meatloaf with tangy glaze. Served with mashed potatoes and gravy', price: 17.99, category: 'dinner', isPopular: true },
  { id: '33', name: 'Pot Roast', description: 'Slow-cooked beef with carrots, potatoes, and onions in rich gravy', price: 19.99, category: 'dinner' },
  { id: '34', name: 'Fried Chicken Dinner', description: 'Three pieces of crispy fried chicken with coleslaw and biscuit', price: 17.99, category: 'dinner', isPopular: true },
  { id: '35', name: 'Liver & Onions', description: 'Pan-fried calves liver with caramelized onions. Served with mashed potatoes', price: 16.99, category: 'dinner' },
  { id: '36', name: 'Fish & Chips', description: 'Beer-battered cod with crispy fries, coleslaw, and tartar sauce', price: 16.99, category: 'dinner' },

  // Family Meals
  { id: '40', name: 'Family Fried Chicken Bucket', description: '12 pieces of our famous fried chicken with 2 large sides and 4 biscuits', price: 44.99, category: 'family', isPopular: true, serves: 'Serves 4-6' },
  { id: '41', name: 'Burger Family Pack', description: '4 Dino Burgers with 2 large fries and 4 drinks', price: 54.99, category: 'family', serves: 'Serves 4' },
  { id: '42', name: 'Sunday Pot Roast Dinner', description: 'Large pot roast with potatoes, carrots, gravy, rolls, and garden salad', price: 49.99, category: 'family', isPopular: true, serves: 'Serves 4-5' },
  { id: '43', name: 'Breakfast for the Family', description: 'Scrambled eggs, bacon, sausage, pancakes, hash browns, and toast', price: 39.99, category: 'family', serves: 'Serves 4' },
  { id: '44', name: 'Meatloaf Family Dinner', description: 'Whole meatloaf with mashed potatoes, gravy, green beans, and rolls', price: 46.99, category: 'family', serves: 'Serves 4-5' },

  // Sides
  { id: '50', name: 'French Fries', description: 'Crispy golden fries with seasoning salt', price: 4.99, category: 'sides', isVegetarian: true },
  { id: '51', name: 'Onion Rings', description: 'Beer-battered and fried to golden perfection', price: 5.99, category: 'sides', isVegetarian: true },
  { id: '52', name: 'Mashed Potatoes & Gravy', description: 'Creamy whipped potatoes with rich brown gravy', price: 4.99, category: 'sides', isVegetarian: true },
  { id: '53', name: 'Coleslaw', description: 'Creamy homemade coleslaw', price: 3.99, category: 'sides', isVegetarian: true },
  { id: '54', name: 'Green Beans', description: 'Seasoned green beans with bacon', price: 4.49, category: 'sides' },
  { id: '55', name: 'Side Salad', description: 'Fresh greens with tomato, cucumber, and choice of dressing', price: 5.99, category: 'sides', isVegetarian: true },
  { id: '56', name: 'Mac & Cheese', description: 'Creamy three-cheese macaroni', price: 5.99, category: 'sides', isVegetarian: true },

  // Drinks
  { id: '60', name: 'Milkshake', description: 'Hand-spun chocolate, vanilla, or strawberry', price: 6.99, category: 'drinks', isVegetarian: true, isPopular: true },
  { id: '61', name: 'Fresh Lemonade', description: 'House-made with real lemons', price: 3.99, category: 'drinks', isVegetarian: true },
  { id: '62', name: 'Iced Tea', description: 'Fresh-brewed sweet or unsweetened', price: 2.99, category: 'drinks', isVegetarian: true },
  { id: '63', name: 'Coffee', description: 'Fresh hot coffee with free refills', price: 2.49, category: 'drinks', isVegetarian: true },
  { id: '64', name: 'Soft Drinks', description: 'Coke, Diet Coke, Sprite, Dr Pepper, Root Beer', price: 2.99, category: 'drinks', isVegetarian: true },
  { id: '65', name: 'Hot Chocolate', description: 'Rich and creamy with whipped cream', price: 3.49, category: 'drinks', isVegetarian: true },
];

export const featuredItems = menuItems.filter(item => item.isPopular).slice(0, 3);

export const familyMeals = menuItems.filter(item => item.category === 'family');

export const dinnerSpecials = menuItems.filter(item => item.category === 'dinner').slice(0, 3);
