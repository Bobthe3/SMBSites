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
  { id: 'hot-food', name: 'Hot Food' },
  { id: 'iron-plate', name: 'Iron Plate' },
  { id: 'noodles', name: 'Noodles' },
  { id: 'fruit-tea', name: 'Fruit Tea' },
  { id: 'milk-tea', name: 'Milk Tea' },
  { id: 'bbq', name: 'BBQ Skewers' },
];

export const menuItems: MenuItem[] = [
  // Hot Food
  { id: '1', name: 'Hawaiian Chicken Wings', description: 'Crispy chicken wings with sweet Hawaiian glaze', price: 14.99, category: 'hot-food', isPopular: true },
  { id: '2', name: 'Hot and Sour Chicken Wings', description: 'Chicken wings with tangy hot and sour sauce', price: 14.99, category: 'hot-food' },
  { id: '3', name: 'Chicken Katsu', description: 'Crispy Japanese-style breaded chicken cutlet', price: 14.99, category: 'hot-food', isPopular: true },
  { id: '4', name: 'Salt and Pepper Chicken', description: 'Crispy fried chicken with salt and pepper seasoning', price: 14.99, category: 'hot-food' },
  { id: '5', name: 'Pineapple Chicken', description: 'Tender chicken with sweet pineapple sauce', price: 14.99, category: 'hot-food' },

  // Iron Plate Stir Fried Dishes (served with white rice)
  { id: '6', name: 'Iron Plate Beef', description: 'Sizzling beef on iron plate, served with white rice', price: 16.99, category: 'iron-plate', isPopular: true },
  { id: '7', name: 'Iron Plate Beef Brisket', description: 'Tender beef brisket on sizzling iron plate, served with white rice', price: 16.99, category: 'iron-plate' },
  { id: '8', name: 'Iron Plate Prawns', description: 'Fresh prawns on sizzling iron plate, served with white rice', price: 16.99, category: 'iron-plate', isPopular: true },
  { id: '9', name: 'Iron Plate Chicken', description: 'Tender chicken on sizzling iron plate, served with white rice', price: 16.99, category: 'iron-plate' },
  { id: '10', name: 'Iron Plate Chicken Wings', description: 'Crispy chicken wings on sizzling iron plate, served with white rice', price: 16.99, category: 'iron-plate' },
  { id: '11', name: 'Iron Plate Squid', description: 'Fresh squid on sizzling iron plate, served with white rice', price: 16.99, category: 'iron-plate' },
  { id: '12', name: 'Iron Plate Tofu', description: 'Crispy tofu on sizzling iron plate, served with white rice', price: 16.99, category: 'iron-plate', isVegetarian: true },
  { id: '13', name: 'Iron Plate Tomato and Egg', description: 'Classic tomato and egg on sizzling iron plate, served with white rice', price: 16.99, category: 'iron-plate', isVegetarian: true },

  // Noodles
  { id: '14', name: 'Beef Sirloin Ramen', description: 'Rich ramen broth with tender beef sirloin', price: 13.99, category: 'noodles', isPopular: true },
  { id: '15', name: 'Japanese Ramen', description: 'Classic Japanese-style ramen with savory broth', price: 13.99, category: 'noodles' },
  { id: '16', name: 'Garlic Fried Noodles', description: 'Stir-fried noodles with aromatic garlic', price: 9.99, category: 'noodles' },

  // Fruit Tea
  { id: '17', name: 'Tea (Sugar)', description: 'Classic sweetened tea', price: 3.50, category: 'fruit-tea', isVegetarian: true },
  { id: '18', name: 'Honey Black Tea', description: 'Black tea sweetened with natural honey', price: 4.25, category: 'fruit-tea', isVegetarian: true },
  { id: '19', name: 'Honey Green Tea', description: 'Green tea sweetened with natural honey', price: 4.25, category: 'fruit-tea', isVegetarian: true },
  { id: '20', name: 'Passion Fruit Black Tea', description: 'Refreshing black tea with passion fruit flavor', price: 4.25, category: 'fruit-tea', isVegetarian: true, isPopular: true },
  { id: '21', name: 'Passion Fruit Green Tea', description: 'Refreshing green tea with passion fruit flavor', price: 4.25, category: 'fruit-tea', isVegetarian: true },
  { id: '22', name: 'Black Milk Tea', description: 'Classic black tea with creamy milk', price: 4.25, category: 'fruit-tea', isVegetarian: true },
  { id: '23', name: 'Green Milk Tea', description: 'Smooth green tea with creamy milk', price: 4.25, category: 'fruit-tea', isVegetarian: true },
  { id: '24', name: 'Mango Black Tea', description: 'Black tea infused with sweet mango', price: 4.25, category: 'fruit-tea', isVegetarian: true },
  { id: '25', name: 'Mango Green Tea', description: 'Green tea infused with sweet mango', price: 4.25, category: 'fruit-tea', isVegetarian: true },
  { id: '26', name: 'Peach Black Tea', description: 'Black tea with fresh peach flavor', price: 4.25, category: 'fruit-tea', isVegetarian: true },
  { id: '27', name: 'Peach Green Tea', description: 'Green tea with fresh peach flavor', price: 4.25, category: 'fruit-tea', isVegetarian: true },

  // Milk Tea
  { id: '28', name: 'Taro Milk', description: 'Creamy taro-flavored milk drink', price: 4.95, category: 'milk-tea', isVegetarian: true, isPopular: true },
  { id: '29', name: 'Matcha Milk', description: 'Rich Japanese matcha with creamy milk', price: 4.95, category: 'milk-tea', isVegetarian: true },
  { id: '30', name: 'Mango Milk', description: 'Sweet mango blended with creamy milk', price: 4.95, category: 'milk-tea', isVegetarian: true },
  { id: '31', name: 'Strawberry Milk', description: 'Fresh strawberry blended with creamy milk', price: 4.95, category: 'milk-tea', isVegetarian: true },
  { id: '32', name: 'Coconut Milk', description: 'Tropical coconut-flavored milk drink', price: 4.95, category: 'milk-tea', isVegetarian: true },
  { id: '33', name: 'Hami Milk', description: 'Sweet Hami melon blended with creamy milk', price: 5.00, category: 'milk-tea', isVegetarian: true },

  // BBQ Skewers (available 4:00 PM - 11:00 PM)
  { id: '34', name: 'Beef Skewers', description: 'Grilled beef skewers with savory seasoning', price: 3.99, category: 'bbq', isPopular: true },
  { id: '35', name: 'Lamb Skewers', description: 'Tender lamb skewers grilled to perfection', price: 4.99, category: 'bbq', isPopular: true },
  { id: '36', name: 'Pork Belly Skewers', description: 'Crispy pork belly skewers with sweet glaze', price: 3.99, category: 'bbq' },
  { id: '37', name: 'Chicken Skewers', description: 'Juicy chicken skewers with house seasoning', price: 2.99, category: 'bbq' },
  { id: '38', name: 'Chicken Wings Skewers', description: 'Grilled chicken wing skewers', price: 3.99, category: 'bbq' },
  { id: '39', name: 'Shrimp Skewers', description: 'Fresh shrimp grilled with garlic butter', price: 4.99, category: 'bbq' },
  { id: '40', name: 'Squid Skewers', description: 'Tender squid skewers with spicy seasoning', price: 4.99, category: 'bbq' },
  { id: '41', name: 'Vegetable Skewers', description: 'Assorted grilled vegetables', price: 2.49, category: 'bbq', isVegetarian: true },
];

export const featuredItems = menuItems.filter(item => item.isPopular);
