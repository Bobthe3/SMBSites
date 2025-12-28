import Link from 'next/link';
import { ArrowRight, Clock, Utensils, Star } from 'lucide-react';
import { restaurantInfo } from '@/data/dinos/restaurant';
import { featuredItems } from '@/data/dinos/menu';

export default function DinosHome() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{restaurantInfo.name}</h1>
          <p className="text-xl text-red-100 mb-8">{restaurantInfo.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dinos/menu" className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2">
              View Menu <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${restaurantInfo.phone}`} className="bg-white/10 backdrop-blur px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition">
              Call to Order
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Utensils, title: 'Fresh Daily', desc: 'All dishes made fresh to order' },
              { icon: Clock, title: 'Fast Service', desc: 'Quick and friendly service' },
              { icon: Star, title: 'Local Favorite', desc: 'Serving Oakland since 1985' },
            ].map((f, i) => (
              <div key={i} className="p-6">
                <f.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Favorites</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-red-600">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/dinos/menu" className="text-red-600 font-semibold hover:underline">
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Hours & Location</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Hours</h3>
              {restaurantInfo.hoursDisplay.map((h, i) => (
                <p key={i} className="text-red-100">{h.days}: {h.hours}</p>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-4">Location</h3>
              <p className="text-red-100">{restaurantInfo.address.full}</p>
              <p className="text-red-100 mt-2">{restaurantInfo.phoneFormatted}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
