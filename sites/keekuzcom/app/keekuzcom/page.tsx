import Link from 'next/link';
import { ArrowRight, Clock, Utensils, Truck, Award } from 'lucide-react';
import Hero from '@/components/keekuzcom/Hero';
import MenuCard from '@/components/keekuzcom/MenuCard';
import DeliveryButtons from '@/components/keekuzcom/DeliveryButtons';
import GoogleMap from '@/components/keekuzcom/GoogleMap';
import ReviewsSection from '@/components/keekuzcom/ReviewsSection';
import { featuredItems } from '@/data/keekuzcom/menu';
import { restaurantInfo } from '@/data/keekuzcom/restaurant';

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
                icon: Award,
                title: 'Award Winning',
                description: 'Featured in SF Chronicle Best Food Trucks',
              },
              {
                icon: Utensils,
                title: 'Authentic Recipes',
                description: 'Traditional Dhaba-style cooking from Punjab',
              },
              {
                icon: Clock,
                title: 'Fresh Daily',
                description: 'Made fresh with quality ingredients',
              },
              {
                icon: Truck,
                title: 'Easy Delivery',
                description: 'Order via DoorDash, UberEats, or Grubhub',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-warm-50 to-white border border-primary-100 hover:shadow-lg transition"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                  <feature.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
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
              href="/keekuzcom/menu"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              View Full Menu
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Craving Indian Food?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Order now and have authentic Dhaba-style cuisine delivered to your door
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <DeliveryButtons size="large" showTitle={false} />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Hours & Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-primary-500" />
                Hours of Operation
              </h2>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6">
                <ul className="space-y-4">
                  {restaurantInfo.hoursDisplay.map((schedule, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-primary-200 last:border-0"
                    >
                      <span className="font-medium text-dark">{schedule.days}</span>
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
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Find Us</h2>
              <GoogleMap height="350px" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience Authentic Indian Flavors?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Visit us today or order online for delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/keekuzcom/order"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              Order Online
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/keekuzcom/contact"
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
