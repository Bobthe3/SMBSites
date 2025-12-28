'use client';

import { useState } from 'react';
import { menuItems, categories } from '@/data/sweetgarden/menu';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-amber-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
          <p className="text-red-100">Japanese cuisine & Asian BBQ flavors</p>
        </div>
      </section>

      <section className="py-8 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeCategory === 'all' ? 'bg-red-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeCategory === cat.id ? 'bg-red-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(item => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  {item.isPopular && (
                    <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full font-medium">Popular</span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-red-600">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
