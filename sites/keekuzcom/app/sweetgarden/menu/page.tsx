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
      <section className="bg-gradient-to-br from-pink-400 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
          <p className="text-pink-100">Freshly baked with love</p>
        </div>
      </section>

      <section className="py-8 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeCategory === 'all' ? 'bg-pink-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeCategory === cat.id ? 'bg-pink-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(item => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-pink-600">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
