'use client';

import { MenuItem } from '@/data/sweetgarden/menu';
import { Star } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-30">
            {item.category === 'milk-tea' || item.category === 'fruit-tea' ? '🧋' :
             item.category === 'bbq' ? '🍢' :
             item.category === 'noodles' ? '🍜' : '🍛'}
          </div>
        </div>

        {/* Badges */}
        {item.isPopular && (
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <Star className="h-3 w-3" fill="currentColor" />
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-blue-600">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
