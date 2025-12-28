import { Phone, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pink-400 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-pink-100">We would love to hear from you</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <Phone className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href={`tel:${restaurantInfo.phone}`} className="text-pink-600 text-xl font-semibold">
                {restaurantInfo.phoneFormatted}
              </a>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <MapPin className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">{restaurantInfo.address.full}</p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <Clock className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              {restaurantInfo.hoursDisplay.map((h, i) => (
                <p key={i} className="text-gray-600 text-sm">{h.days}: {h.hours}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" className="w-full border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={4} className="w-full border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500" placeholder="Your message" />
            </div>
            <button type="submit" className="w-full bg-pink-500 text-white py-4 rounded-xl font-semibold hover:bg-pink-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
