import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { restaurantInfo } from '@/data/dinos/restaurant';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 mb-8">
            We'd love to hear from you
          </p>
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="bg-[#d97706] text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-amber-600 transition-colors inline-flex items-center gap-3"
          >
            <Phone className="w-6 h-6" />
            Call Now: {restaurantInfo.phoneFormatted}
          </a>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-xl p-10 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Call Us</h3>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="text-2xl font-bold text-[#d97706] hover:text-amber-600 transition-colors"
              >
                {restaurantInfo.phoneFormatted}
              </a>
              <p className="text-lg text-gray-600 mt-4">
                Call ahead for takeout orders
              </p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-10 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Visit Us</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                {restaurantInfo.address.street}
                <br />
                {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
              </p>
              <p className="text-lg text-gray-600 mt-4">
                Free parking available
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-10 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Hours</h3>
              <ul className="space-y-3">
                {restaurantInfo.hoursDisplay.map((h, i) => (
                  <li key={i} className="flex justify-between text-lg text-gray-700">
                    <span className="font-medium">{h.days}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Questions, feedback, or catering inquiries? We're here to help.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-[#1e3a5f] mb-3">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 rounded-lg px-5 py-4 text-lg focus:border-[#d97706] focus:outline-none transition-colors"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-[#1e3a5f] mb-3">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border-2 border-gray-200 rounded-lg px-5 py-4 text-lg focus:border-[#d97706] focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-[#1e3a5f] mb-3">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                className="w-full border-2 border-gray-200 rounded-lg px-5 py-4 text-lg focus:border-[#d97706] focus:outline-none transition-colors"
                placeholder="(555) 555-5555"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-[#1e3a5f] mb-3">
                Your Message
              </label>
              <textarea
                rows={5}
                className="w-full border-2 border-gray-200 rounded-lg px-5 py-4 text-lg focus:border-[#d97706] focus:outline-none transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#d97706] text-white py-5 rounded-lg text-xl font-bold hover:bg-amber-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#b91c1c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hungry? Don't Wait!
          </h2>
          <p className="text-xl text-red-100 mb-8">
            The fastest way to order is to give us a call. We'll have it ready when you arrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="bg-white text-[#b91c1c] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call: {restaurantInfo.phoneFormatted}
            </a>
            <Link
              href="/dinos/menu"
              className="bg-[#1e3a5f] text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-[#2d4a73] transition-colors inline-flex items-center justify-center gap-3"
            >
              View Menu
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
