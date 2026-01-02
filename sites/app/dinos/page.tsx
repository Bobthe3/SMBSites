import Link from 'next/link';
import { ArrowRight, Clock, Utensils, Star, Users, Phone, MapPin, Quote } from 'lucide-react';
import { restaurantInfo } from '@/data/dinos/restaurant';
import { featuredItems, familyMeals } from '@/data/dinos/menu';

const testimonials = [
  {
    name: 'Margaret T.',
    location: 'Oakland',
    text: "We've been coming here every Sunday after church for 15 years. The pot roast reminds me of my grandmother's cooking. A true family tradition.",
    rating: 5,
  },
  {
    name: 'Robert & Susan K.',
    location: 'Alameda',
    text: "Best burgers in the East Bay, hands down. The kids love the milkshakes and we love the prices. Our go-to spot for family dinner night.",
    rating: 5,
  },
  {
    name: 'James M.',
    location: 'Oakland',
    text: "I've been eating breakfast here since 1992. Same great food, same friendly faces. Dino's is a neighborhood treasure.",
    rating: 5,
  },
];

export default function DinosHome() {
  return (
    <>
      {/* Hero - Warm cream background, no gradient */}
      <section className="bg-[#faf7f2] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#b91c1c] text-xl font-semibold tracking-wide uppercase mb-4">
              Est. 1985 - Oakland, California
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              {restaurantInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-10 leading-relaxed">
              {restaurantInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dinos/menu"
                className="bg-[#d97706] text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-amber-600 transition-colors inline-flex items-center justify-center gap-3 shadow-lg"
              >
                View Our Menu
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="bg-[#1e3a5f] text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-[#2d4a73] transition-colors inline-flex items-center justify-center gap-3 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                Call to Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#1e3a5f] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              <span className="text-lg font-medium">4.8 Star Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-amber-400" />
              <span className="text-lg font-medium">Family Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-amber-400" />
              <span className="text-lg font-medium">35+ Years Serving Oakland</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1e3a5f] mb-16">
            Why Families Love Dino's
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Utensils,
                title: 'Made Fresh Daily',
                desc: 'Every dish prepared to order using quality ingredients. No shortcuts, just honest home-style cooking.',
              },
              {
                icon: Clock,
                title: 'Quick & Friendly',
                desc: 'Fast service that never feels rushed. Come hungry, leave happy - just like Sunday dinner at home.',
              },
              {
                icon: Star,
                title: 'Oakland Favorite',
                desc: 'Three generations of families trust us for birthdays, celebrations, and everyday comfort food.',
              },
            ].map((f, i) => (
              <div key={i} className="bg-[#faf7f2] rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-6">
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">{f.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
              Customer Favorites
            </h2>
            <p className="text-xl text-gray-600">
              The dishes our regulars keep coming back for
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-8 shadow-md border-2 border-transparent hover:border-[#d97706] transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">{item.name}</h3>
                  {item.isPopular && (
                    <span className="bg-[#b91c1c] text-white text-sm font-bold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <p className="text-3xl font-bold text-[#d97706]">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/dinos/menu"
              className="bg-[#1e3a5f] text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-[#2d4a73] transition-colors inline-flex items-center gap-3"
            >
              See Full Menu
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Family Meals Section */}
      <section className="py-20 bg-[#b91c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Family Meals
            </h2>
            <p className="text-xl text-red-100">
              Feed the whole crew with our family-sized portions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyMeals.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">{item.name}</h3>
                  {item.serves && (
                    <span className="flex items-center gap-1 bg-[#1e3a5f] text-white text-sm font-semibold px-3 py-1 rounded-full">
                      <Users className="w-4 h-4" />
                      {item.serves}
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <p className="text-3xl font-bold text-[#d97706]">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/dinos/menu"
              className="bg-white text-[#b91c1c] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
            >
              See All Family Meals
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from real families
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-[#faf7f2] rounded-xl p-8 relative">
                <Quote className="w-10 h-10 text-[#d97706] mb-4" />
                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-bold text-[#1e3a5f] text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location - High contrast for easy reading */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Visit Us Today
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours */}
            <div className="bg-white/10 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">Hours</h3>
              </div>
              <ul className="space-y-4">
                {restaurantInfo.hoursDisplay.map((h, i) => (
                  <li key={i} className="flex justify-between text-xl text-blue-100">
                    <span className="font-medium">{h.days}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="bg-white/10 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">Location</h3>
              </div>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                {restaurantInfo.address.full}
              </p>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center gap-3 text-xl text-amber-400 hover:text-amber-300 transition-colors font-semibold"
              >
                <Phone className="w-6 h-6" />
                {restaurantInfo.phoneFormatted}
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="bg-[#d97706] text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-amber-600 transition-colors inline-flex items-center gap-3 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Call Now: {restaurantInfo.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-[#faf7f2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Ready for Real American Comfort Food?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the thousands of Oakland families who have made Dino's their go-to diner.
          </p>
          <Link
            href="/dinos/menu"
            className="bg-[#b91c1c] text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-3"
          >
            Browse Our Menu
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </>
  );
}
