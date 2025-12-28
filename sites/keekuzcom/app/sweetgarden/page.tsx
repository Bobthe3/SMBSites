import Link from 'next/link';
import { ArrowRight, Flame, Star, Clock, MapPin, Phone, ChefHat, Sparkles, Users } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';
import { featuredItems, menuItems, categories } from '@/data/sweetgarden/menu';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export default function SweetgardenHome() {
  const itemCount = menuItems.length;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-amber-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Serving Fremont since 2016</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              {restaurantInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-6 font-medium">
              {restaurantInfo.tagline}
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <StarRating rating={restaurantInfo.rating} />
                <span className="font-bold">{restaurantInfo.rating}</span>
              </div>
              <div className="text-red-200">
                <span className="font-semibold text-white">{restaurantInfo.reviewCount}+</span> happy customers
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={restaurantInfo.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Order Online Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {restaurantInfo.phoneFormatted}
              </a>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-red-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Fremont Blvd, Fremont CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Open until 10pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Flame, title: 'Sizzling Hot', desc: 'Iron plate dishes' },
              { icon: ChefHat, title: 'Fresh Daily', desc: 'Quality ingredients' },
              { icon: Users, title: 'Family Owned', desc: 'Since 2016' },
              { icon: Clock, title: 'Fast Service', desc: 'Ready in minutes' },
            ].map((f, i) => (
              <div key={i} className="p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                  <f.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu - Popular Items */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Most Popular
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Favorites
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why locals love Sweet Garden. These dishes keep our customers coming back for more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-red-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="inline-block bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full font-medium mb-2">
                      Best Seller
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  </div>
                  <span className="text-2xl font-bold text-red-600">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={restaurantInfo.orderOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 group-hover:underline"
                >
                  Order this <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/sweetgarden/menu"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-xl"
            >
              View Full Menu ({itemCount} items)
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* BBQ Special Callout */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Flame className="w-4 h-4" />
                Evening Special
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                BBQ Skewers Available Nightly
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                From 4pm to 11pm, enjoy our authentic Asian BBQ skewers grilled to perfection.
                Lamb, beef, chicken, seafood and more!
              </p>
              <div className="flex flex-wrap gap-3">
                {['Lamb Skewers', 'Beef Skewers', 'Pork Belly', 'Shrimp'].map((item) => (
                  <span key={item} className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href={restaurantInfo.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition shadow-xl"
              >
                Order BBQ Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              <StarRating rating={restaurantInfo.rating} />
              <span className="text-gray-600">{restaurantInfo.rating} out of 5 based on {restaurantInfo.reviewCount}+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {restaurantInfo.testimonials.map((testimonial, i) => (
              <div key={i} className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  <span className="text-sm text-gray-500">via {testimonial.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Explore Our Menu
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/sweetgarden/menu`}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition border border-gray-100 hover:border-red-200 group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {menuItems.filter(item => item.category === cat.id).length} items
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Us Today</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">{restaurantInfo.address.full}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(restaurantInfo.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 font-medium hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      Get Directions <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <div className="space-y-1">
                      {restaurantInfo.hoursDisplay.map((h, i) => (
                        <p key={i} className="text-gray-600">
                          <span className="font-medium">{h.days}:</span> {h.hours}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${restaurantInfo.phone}`}
                      className="text-gray-600 hover:text-red-600 transition"
                    >
                      {restaurantInfo.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-80 md:h-96">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(restaurantInfo.address.full)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-amber-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Skip the wait. Order online for pickup or delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={restaurantInfo.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-red-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-50 transition shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2"
            >
              Order Online Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
