import Link from 'next/link';
import { ArrowRight, Clock, Utensils, Flame, Coffee } from 'lucide-react';
import Hero from '@/components/sweetgarden/Hero';
import MenuCard from '@/components/sweetgarden/MenuCard';
import GoogleMap from '@/components/sweetgarden/GoogleMap';
import { featuredItems } from '@/data/sweetgarden/menu';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Flame,
                title: 'Iron Plate Sizzle',
                description: 'Hot sizzling dishes served on iron plates',
              },
              {
                icon: Utensils,
                title: 'Asian Fusion',
                description: 'Authentic Asian and BBQ flavors combined',
              },
              {
                icon: Coffee,
                title: 'Bubble Tea',
                description: 'Refreshing milk teas and fruit teas',
              },
              {
                icon: Clock,
                title: 'Quick Pickup',
                description: 'Order online for convenient takeout',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-lg transition"
              >
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

      {/* Featured Menu Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our Popular Dishes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our customer favorites - from sizzling iron plates to refreshing bubble teas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredItems.slice(0, 6).map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/sweetgarden/menu"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              View Full Menu
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Craving Asian Fusion?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Order now for convenient pickup at our Fremont location
          </p>
          <a
            href={restaurantInfo.orderOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105"
          >
            Order Online Now
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-blue-500" />
                Hours of Operation
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <ul className="space-y-4">
                  {restaurantInfo.hoursDisplay.map((schedule, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-blue-200 last:border-0"
                    >
                      <span className="font-medium text-slate-800">{schedule.days}</span>
                      <span
                        className={`font-semibold ${
                          schedule.hours === 'Closed' ? 'text-red-500' : 'text-green-600'
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  * Closed between 2:30 PM - 4:30 PM for break
                </p>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Find Us</h2>
              <GoogleMap height="350px" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience Asian BBQ Fusion?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Order online or visit us in Fremont today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={restaurantInfo.orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              Order Online
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/sweetgarden/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
