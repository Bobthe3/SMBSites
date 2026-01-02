'use client';

import { useState } from 'react';
import { menuItems, categories } from '@/data/dinos/menu';
import { Leaf, Phone, Users } from 'lucide-react';
import { restaurantInfo } from '@/data/dinos/restaurant';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-blue-100 mb-8">
            Classic American comfort food made fresh daily
          </p>
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="bg-[#d97706] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-amber-600 transition-colors inline-flex items-center gap-3"
          >
            <Phone className="w-5 h-5" />
            Call to Order: {restaurantInfo.phoneFormatted}
          </a>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-[#faf7f2] sticky top-[104px] z-40 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#1e3a5f] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              All Items
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-lg text-lg font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#1e3a5f] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Family Meals Banner - Show when viewing family meals */}
      {activeCategory === 'family' && (
        <section className="py-8 bg-[#b91c1c]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Feed the Whole Family!</h2>
            <p className="text-lg text-red-100">
              Our family meals are perfect for gatherings, game nights, or just a cozy dinner at home.
            </p>
          </div>
        </section>
      )}

      {/* Menu Items */}
      <section className="py-16 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map(item => (
              <div
                key={item.id}
                className={`bg-white rounded-xl p-8 shadow-sm border-2 border-transparent hover:border-[#d97706] transition-colors ${
                  item.category === 'family' ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">{item.name}</h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {item.isVegetarian && (
                      <span className="flex items-center gap-1 bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                        <Leaf className="w-4 h-4" />
                        Veggie
                      </span>
                    )}
                    {item.isPopular && (
                      <span className="bg-[#b91c1c] text-white text-sm font-bold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-bold text-[#d97706]">${item.price.toFixed(2)}</p>
                  {item.serves && (
                    <span className="flex items-center gap-2 bg-[#1e3a5f] text-white text-sm font-semibold px-4 py-2 rounded-full">
                      <Users className="w-4 h-4" />
                      {item.serves}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#b91c1c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Give us a call and we'll have your meal ready when you arrive.
          </p>
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="bg-white text-[#b91c1c] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
          >
            <Phone className="w-6 h-6" />
            Call Now: {restaurantInfo.phoneFormatted}
          </a>
        </div>
      </section>
    </>
  );
}
