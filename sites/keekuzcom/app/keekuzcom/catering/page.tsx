'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Phone,
  Mail,
  Check,
  Star,
  ChefHat,
  Clock,
  Truck,
  Sparkles,
  ArrowRight,
  Plus,
} from 'lucide-react';
import { cateringPackages, cateringAddons, cateringInfo } from '@/data/keekuzcom/catering';
import { restaurantInfo } from '@/data/keekuzcom/restaurant';

export default function CateringPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState(20);

  const getPackageTotal = (packageId: string) => {
    const pkg = cateringPackages.find((p) => p.id === packageId);
    if (!pkg) return 0;
    return pkg.pricePerPerson * Math.max(guestCount, pkg.minGuests);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur rounded-full mb-6">
            <ChefHat className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Catering Services</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Bring the authentic flavors of Keeku da Dhaba to your next event. From intimate
            gatherings to grand celebrations, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, text: '72hr Notice' },
              { icon: Truck, text: 'Free Delivery*' },
              { icon: Users, text: '15+ Guests' },
              { icon: Sparkles, text: 'Customizable' },
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-gray-600">
                <feature.icon className="h-5 w-5 text-primary-500" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Count Selector */}
      <section className="py-8 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How many guests are you expecting?
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="15"
                max="200"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
              />
              <div className="bg-primary-100 px-4 py-2 rounded-lg min-w-[80px] text-center">
                <span className="text-2xl font-bold text-primary-600">{guestCount}</span>
                <span className="text-sm text-gray-600 block">guests</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Catering Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated packages or let us create a custom menu for your event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cateringPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl overflow-hidden transition-all ${
                  selectedPackage === pkg.id
                    ? 'ring-4 ring-primary-500 shadow-2xl scale-105'
                    : 'shadow-lg hover:shadow-xl'
                } ${pkg.isPopular ? 'border-2 border-primary-500' : 'border border-gray-200'}`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-500 text-white text-center py-1 text-sm font-semibold">
                    <Star className="h-4 w-4 inline mr-1" />
                    Most Popular
                  </div>
                )}

                <div className={`p-6 ${pkg.isPopular ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-bold text-dark mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-600">
                      ${pkg.pricePerPerson}
                    </span>
                    <span className="text-gray-500">/person</span>
                    <p className="text-sm text-gray-500 mt-1">
                      Minimum {pkg.minGuests} guests
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Estimated Total:</span>
                      <span className="text-xl font-bold text-primary-600">
                        ${getPackageTotal(pkg.id).toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`w-full py-3 rounded-xl font-semibold transition ${
                        selectedPackage === pkg.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                      }`}
                    >
                      {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Enhance Your Event</h2>
            <p className="text-gray-600">Add these extras to make your event even more special</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cateringAddons.map((addon) => (
              <div
                key={addon.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-dark">{addon.name}</h3>
                  <Plus className="h-5 w-5 text-primary-500" />
                </div>
                <p className="text-sm text-gray-600 mb-3">{addon.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-primary-600">
                    ${addon.price}
                  </span>
                  <span className="text-sm text-gray-500">{addon.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Contact Us',
                description: 'Call or email us with your event details and preferences',
              },
              {
                step: 2,
                title: 'Plan Your Menu',
                description: 'We\'ll work with you to customize the perfect menu',
              },
              {
                step: 3,
                title: 'Enjoy Your Event',
                description: 'We deliver, set up, and you enjoy delicious food!',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-500 text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-dark mb-4">Request a Quote</h2>
              <p className="text-gray-600">
                Tell us about your event and we&apos;ll get back to you within 24 hours
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="(510) 555-1234"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    required
                    min="15"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option>Corporate Event</option>
                    <option>Wedding</option>
                    <option>Birthday Party</option>
                    <option>Family Gathering</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                  placeholder="Tell us about your event, dietary requirements, or special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2"
              >
                Submit Catering Request
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">Or contact us directly:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  {restaurantInfo.phoneFormatted}
                </a>
                <a
                  href="mailto:catering@keekuz.com"
                  className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  <Mail className="h-5 w-5" />
                  catering@keekuz.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Catering FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How far in advance should I book?',
                a: 'We recommend booking at least 72 hours in advance. For large events (100+ guests), please book 1-2 weeks ahead.',
              },
              {
                q: 'Do you provide serving staff?',
                a: 'Serving staff is available for an additional fee. Contact us for details and pricing.',
              },
              {
                q: 'Can you accommodate dietary restrictions?',
                a: 'Yes! We can customize any package for vegetarian, vegan, gluten-free, or other dietary needs.',
              },
              {
                q: 'What is your delivery area?',
                a: 'We deliver within 30 miles of Fremont. Delivery is free within 10 miles; $2/mile beyond.',
              },
              {
                q: 'What is your cancellation policy?',
                a: 'Full refund for cancellations 48+ hours before the event. 50% refund for 24-48 hours notice.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
