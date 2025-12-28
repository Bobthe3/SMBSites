import Link from 'next/link';
import { ArrowRight, Clock, Utensils, Users, Heart } from 'lucide-react';
import Hero from '@/components/dinos/Hero';
import MenuCard from '@/components/dinos/MenuCard';
import GoogleMap from '@/components/dinos/GoogleMap';
import { featuredItems } from '@/data/dinos/menu';
import { restaurantInfo } from '@/data/dinos/restaurant';

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
                icon: Users,
                title: 'Family Owned',
                description: 'Proudly serving Fremont since 1985',
              },
              {
                icon: Utensils,
                title: 'Homemade Recipes',
                description: 'Traditional recipes made fresh daily',
              },
              {
                icon: Clock,
                title: 'Open Daily',
                description: 'Breakfast & lunch 7am - 3pm',
              },
              {
                icon: Heart,
                title: 'Made with Love',
                description: 'Quality ingredients, friendly service',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Popular Dishes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the favorites that keep our customers coming back for more
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredItems.slice(0, 6).map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/dinos/menu"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              View Full Menu
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            A Fremont Tradition Since 1985
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            For over 35 years, Dino's Family Restaurant has been a cornerstone of the Fremont community.
            What started as a small family diner has grown into a beloved local institution,
            serving generations of families with the same commitment to quality, warmth, and delicious food.
          </p>
          <Link
            href="/dinos/about"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
          >
            Our Story
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-blue-700" />
                Hours of Operation
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-6">
                <ul className="space-y-4">
                  {restaurantInfo.hoursDisplay.map((schedule, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-blue-200 last:border-0"
                    >
                      <span className="font-medium text-gray-900">{schedule.days}</span>
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
                <div className="mt-6 text-center">
                  <a
                    href={`tel:${restaurantInfo.phone}`}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    Call Us: {restaurantInfo.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              <GoogleMap height="350px" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Some Good Home Cooking?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Stop by for breakfast or lunch - we can't wait to serve you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dinos/menu"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              View Menu
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/dinos/contact"
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
