'use client';

import { useState } from 'react';
import { MenuItem } from '@/data/keekuzcom/menu';
import { Leaf, Flame, Star, Info, X, Wheat } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

const spiceLevelLabels = ['No Spice', 'Mild', 'Medium', 'Hot'];
const spiceLevelColors = ['text-gray-400', 'text-yellow-500', 'text-orange-500', 'text-red-600'];

const allergenIcons: Record<string, string> = {
  dairy: '🥛',
  gluten: '🌾',
  nuts: '🥜',
  soy: '🫘',
  eggs: '🥚',
  shellfish: '🦐',
};

export default function MenuCard({ item }: MenuCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
          {/* Placeholder pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-30">🍛</div>
          </div>

          {/* Badges - Top Left */}
          <div className="absolute top-3 left-3 flex gap-2">
            {item.isPopular && (
              <span className="bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <Star className="h-3 w-3" fill="currentColor" />
                Popular
              </span>
            )}
            {item.isGlutenFree && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1" title="Gluten Free">
                GF
              </span>
            )}
          </div>

          {/* Badges - Top Right */}
          <div className="absolute top-3 right-3 flex gap-2">
            {item.isVegetarian && (
              <span className="bg-green-500 text-white p-1.5 rounded-full" title={item.isVegan ? 'Vegan' : 'Vegetarian'}>
                <Leaf className="h-4 w-4" />
              </span>
            )}
            {item.spiceLevel > 0 && (
              <span
                className={`bg-white p-1.5 rounded-full shadow ${spiceLevelColors[item.spiceLevel]}`}
                title={spiceLevelLabels[item.spiceLevel]}
              >
                <Flame className="h-4 w-4" />
              </span>
            )}
          </div>

          {/* Info button */}
          <button
            onClick={() => setShowDetails(true)}
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
            title="View nutrition & allergen info"
          >
            <Info className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-dark group-hover:text-primary-600 transition">
              {item.name}
            </h3>
            <span className="text-lg font-bold text-primary-600">
              ${item.price.toFixed(2)}
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {item.description}
          </p>

          {/* Spice Level Indicator */}
          {item.spiceLevel > 0 && (
            <div className="flex items-center gap-1 mb-2">
              <span className="text-xs text-gray-500">Spice:</span>
              <div className="flex gap-0.5">
                {[1, 2, 3].map((level) => (
                  <Flame
                    key={level}
                    className={`h-3 w-3 ${
                      level <= item.spiceLevel ? spiceLevelColors[item.spiceLevel] : 'text-gray-300'
                    }`}
                    fill={level <= item.spiceLevel ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className={`text-xs font-medium ${spiceLevelColors[item.spiceLevel]}`}>
                {spiceLevelLabels[item.spiceLevel]}
              </span>
            </div>
          )}

          {/* Allergens */}
          {item.allergens.length > 0 && (
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-xs text-gray-500">Contains:</span>
              {item.allergens.map((allergen) => (
                <span
                  key={allergen}
                  className="text-xs bg-gray-100 px-2 py-0.5 rounded-full flex items-center gap-1"
                  title={allergen}
                >
                  {allergenIcons[allergen] || '⚠️'}
                  <span className="capitalize">{allergen}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowDetails(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-xl font-bold text-dark mb-4">{item.name}</h3>

            {/* Nutrition Info */}
            {item.nutrition && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Nutrition Information</h4>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-primary-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-primary-600">{item.nutrition.calories}</div>
                    <div className="text-xs text-gray-600">Calories</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-green-600">{item.nutrition.protein}g</div>
                    <div className="text-xs text-gray-600">Protein</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-yellow-600">{item.nutrition.carbs}g</div>
                    <div className="text-xs text-gray-600">Carbs</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-red-500">{item.nutrition.fat}g</div>
                    <div className="text-xs text-gray-600">Fat</div>
                  </div>
                </div>
              </div>
            )}

            {/* Dietary Info */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Dietary Information</h4>
              <div className="flex flex-wrap gap-2">
                {item.isVegetarian && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Leaf className="h-4 w-4" />
                    {item.isVegan ? 'Vegan' : 'Vegetarian'}
                  </span>
                )}
                {item.isGlutenFree && (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Wheat className="h-4 w-4" />
                    Gluten Free
                  </span>
                )}
                <span className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                  item.spiceLevel === 0 ? 'bg-gray-100 text-gray-600' :
                  item.spiceLevel === 1 ? 'bg-yellow-100 text-yellow-700' :
                  item.spiceLevel === 2 ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  <Flame className="h-4 w-4" />
                  {spiceLevelLabels[item.spiceLevel]}
                </span>
              </div>
            </div>

            {/* Allergens */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Allergen Information</h4>
              {item.allergens.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {item.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      {allergenIcons[allergen]}
                      <span className="capitalize">{allergen}</span>
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No common allergens</p>
              )}
            </div>

            <p className="mt-4 text-xs text-gray-400">
              * Nutritional values are approximate. Please inform staff of any allergies.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
