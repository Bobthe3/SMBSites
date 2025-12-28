import { Metadata } from 'next';
import { Flame, Utensils, Heart, Star } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sweet Garden - your destination for Asian BBQ fusion in Fremont, CA. Discover our story and commitment to quality.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Sweet Garden</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Bringing Asian BBQ fusion to Fremont, CA
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {restaurantInfo.description}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              At Sweet Garden, we bring together the best of Asian cuisine with our signature iron plate dishes,
              fresh ramen, and refreshing bubble teas. Every dish is crafted with care to deliver the perfect
              balance of sweet, savory, and umami flavors that keep our customers coming back for more.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Flame,
                title: 'Sizzling Iron Plates',
                description: 'Our signature iron plate dishes are served hot and sizzling, locking in flavors and creating an unforgettable dining experience.',
              },
              {
                icon: Utensils,
                title: 'Fusion Excellence',
                description: 'We blend traditional Asian recipes with modern BBQ techniques to create unique dishes you won\'t find anywhere else.',
              },
              {
                icon: Heart,
                title: 'Made with Love',
                description: 'Every dish is prepared with care using fresh, quality ingredients to ensure the best taste and experience.',
              },
              {
                icon: Star,
                title: 'Customer Favorites',
                description: 'From our Hawaiian Chicken Wings to our Taro Milk Tea, we have something delicious for everyone.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Visit Us</h2>
          <p className="text-gray-600 text-lg mb-4">
            Located in the heart of Fremont, we&apos;re easily accessible for pickup orders.
          </p>
          <p className="text-xl font-semibold text-blue-600 mb-8">{restaurantInfo.address.full}</p>
          <a
            href={restaurantInfo.orderOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
          >
            Order Online Now
          </a>
        </div>
      </section>
    </div>
  );
}
