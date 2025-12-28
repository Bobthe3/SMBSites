import { Metadata } from 'next';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import GoogleMap from '@/components/sweetgarden/GoogleMap';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Sweet Garden in Fremont, CA. Find our location, hours, and phone number. Order online for pickup.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We&apos;d love to hear from you. Visit us or place an order online.
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Get in Touch</h2>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Phone</h3>
                </div>
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="text-xl text-blue-600 hover:text-blue-700 font-medium ml-14"
                >
                  {restaurantInfo.phoneFormatted}
                </a>
              </div>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Address</h3>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 ml-14 block"
                >
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
                </a>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Hours</h3>
                </div>
                <div className="ml-14">
                  <ul className="space-y-2">
                    {restaurantInfo.hoursDisplay.map((schedule, index) => (
                      <li key={index} className="flex justify-between max-w-xs">
                        <span className="text-gray-600">{schedule.days}</span>
                        <span className={schedule.hours === 'Closed' ? 'text-red-500 font-medium' : 'text-green-600 font-medium'}>
                          {schedule.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">* Closed between 2:30 PM - 4:30 PM</p>
                </div>
              </div>

              {/* Order Online */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <ExternalLink className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Order Online</h3>
                </div>
                <a
                  href={restaurantInfo.orderOnlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition ml-14 mt-2"
                >
                  Order Now
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Find Us</h2>
              <GoogleMap height="450px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
