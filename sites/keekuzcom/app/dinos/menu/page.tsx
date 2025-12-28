'use client';

import { useState } from 'react';
import MenuCard from '@/components/dinos/MenuCard';
import { menuItems, categories } from '@/data/dinos/menu';
import { restaurantInfo } from '@/data/dinos/restaurant';
import { Phone } from 'lucide-react';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = menuItems.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Classic American breakfast and lunch favorites, made fresh with quality ingredients
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white md:sticky md:top-[104px] z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeCategory === 'all'
                  ? 'bg-blue-700 text-white'
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
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category description */}
          {activeCategory !== 'all' && (
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {categories.find(c => c.id === activeCategory)?.description}
              </p>
            </div>
          )}

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

      {/* Call to Order CTA */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to Order?</h2>
            <p className="text-gray-400 mb-6">Give us a call or stop by for dine-in</p>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              <Phone className="h-5 w-5" />
              Call {restaurantInfo.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
