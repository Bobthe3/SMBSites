export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  source: 'google' | 'yelp' | 'doordash';
  avatar?: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Priya S.',
    rating: 5,
    date: '2 weeks ago',
    text: 'Absolutely amazing! The butter chicken here is the best I\'ve had outside of India. The naan is perfectly fluffy and the service is wonderful. Will definitely be back!',
    source: 'google',
  },
  {
    id: '2',
    name: 'Michael T.',
    rating: 5,
    date: '1 month ago',
    text: 'Found this gem through SF Chronicle\'s food truck list and it did not disappoint. The paneer tikka is incredible - perfectly spiced and charred. Great vegetarian options!',
    source: 'yelp',
  },
  {
    id: '3',
    name: 'Anjali M.',
    rating: 5,
    date: '3 weeks ago',
    text: 'This place brings back memories of roadside dhabas in Punjab. The dal makhani is cooked to perfection - creamy and rich. Authentic flavors that are hard to find!',
    source: 'google',
  },
  {
    id: '4',
    name: 'David L.',
    rating: 4,
    date: '1 week ago',
    text: 'Great food and quick delivery through DoorDash. The chicken biryani was flavorful and the portion size was generous. The spice level was perfect for me.',
    source: 'doordash',
  },
  {
    id: '5',
    name: 'Ravi K.',
    rating: 5,
    date: '2 months ago',
    text: 'Finally, authentic dhaba-style food in Fremont! The lamb rogan josh is outstanding. My family orders from here every weekend now. Highly recommend!',
    source: 'google',
  },
  {
    id: '6',
    name: 'Sarah J.',
    rating: 5,
    date: '1 month ago',
    text: 'I\'m not usually a fan of Indian food but this place converted me. Started with the mango lassi and samosas - absolutely delicious! The staff helped me pick dishes based on my spice preference.',
    source: 'yelp',
  },
];

export const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
export const totalReviews = 127; // Display number (actual reviews + more on platforms)
