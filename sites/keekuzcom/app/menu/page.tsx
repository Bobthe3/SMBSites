'use client';

import { useState } from 'react';
import MenuCard from '@/components/MenuCard';
import DeliveryButtons from '@/components/DeliveryButtons';
import { menuItems, categories } from '@/data/menu';
import { Leaf, Flame } from 'lucide-react';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showVegOnly, setShowVegOnly] = useState(false);

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const vegMatch = !showVegOnly || item.isVegetarian;
    return categoryMatch && vegMatch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore our authentic Dhaba-style dishes, made fresh with traditional recipes and quality ingredients
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white md:sticky md:top-[104px] z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-4 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Items
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Dietary filter */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowVegOnly(!showVegOnly)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition ${
                showVegOnly
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Leaf className="h-4 w-4" />
              Vegetarian Only
            </button>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 bg-gradient-to-br from-warm-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legend */}
          <div className="flex flex-wrap gap-6 justify-center mb-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-green-500 text-white p-1 rounded-full">
                <Leaf className="h-3 w-3" />
              </span>
              <span className="text-gray-600">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white p-1 rounded-full">
                <Flame className="h-3 w-3" />
              </span>
              <span className="text-gray-600">Spicy</span>
            </div>
          </div>

          {/* Items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No items found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-12 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to Order?</h2>
            <p className="text-gray-400">Get your favorites delivered right to your door</p>
          </div>
          <DeliveryButtons size="large" showTitle={false} />
        </div>
      </section>
    </>
  );
}
