'use client';

import { useState } from 'react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { menuItems, categories } from '@/data/sweetgarden/menu';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const getCategoryCount = (categoryId: string) => {
    return menuItems.filter(item => item.category === categoryId).length;
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 via-red-600 to-amber-500 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Menu</h1>
          <p className="text-red-100 text-lg mb-4">{menuItems.length} delicious items to choose from</p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(restaurantInfo.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-red-300'}`} />
              ))}
            </div>
            <span className="text-red-200">{restaurantInfo.reviewCount}+ reviews</span>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-4 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium transition ${
                activeCategory === 'all'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({menuItems.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium transition ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name} ({getCategoryCount(cat.id)})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-8 md:py-12 bg-amber-50 pb-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Quick Order Banner */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <h3 className="font-bold text-lg">Ready to order?</h3>
              <p className="text-gray-300 text-sm">Skip the wait - order online for pickup or delivery</p>
            </div>
            <a
              href={restaurantInfo.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-500 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-amber-400 transition shadow-lg whitespace-nowrap"
            >
              <ShoppingBag className="w-5 h-5" />
              Order Now
            </a>
          </div>

          {/* Category Title */}
          {activeCategory !== 'all' && (
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>
          )}

          {/* Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map(item => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-red-200"
              >
                <div className="flex justify-between items-start gap-3 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      {item.isPopular && (
                        <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    {item.isVegetarian && (
                      <span className="text-green-600 text-xs font-medium">Vegetarian</span>
                    )}
                  </div>
                  <span className="text-xl font-bold text-red-600">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <a
                  href={restaurantInfo.orderOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 font-medium text-sm hover:text-red-700 group-hover:underline"
                >
                  Add to order <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 max-w-xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hungry yet?</h3>
              <p className="text-gray-600 mb-6">Order now and enjoy our delicious food!</p>
              <a
                href={restaurantInfo.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="w-5 h-5" />
                Start Your Order
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
