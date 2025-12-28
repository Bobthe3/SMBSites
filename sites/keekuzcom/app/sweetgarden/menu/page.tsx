import { Metadata } from 'next';
import MenuCard from '@/components/sweetgarden/MenuCard';
import { menuItems, categories } from '@/data/sweetgarden/menu';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'View our full menu of Asian BBQ fusion dishes, iron plate specialties, ramen, and refreshing bubble teas at Sweet Garden in Fremont, CA.',
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            From sizzling iron plate dishes to refreshing bubble teas - explore our full menu of Asian BBQ fusion favorites
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => {
          const categoryItems = menuItems.filter((item) => item.category === category.id);
          if (categoryItems.length === 0) return null;

          return (
            <section key={category.id} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryItems.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Order CTA */}
        <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Order?</h3>
          <p className="text-gray-600 mb-6">Order online for convenient pickup at our Fremont location</p>
          <a
            href={restaurantInfo.orderOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
          >
            Order Online Now
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
