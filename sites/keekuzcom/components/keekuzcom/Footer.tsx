import Link from 'next/link';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { restaurantInfo } from '@/data/keekuzcom/restaurant';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/keekuzcom" className="inline-block mb-4">
              <span className="text-2xl font-bold text-primary-400">Keeku</span>
              <span className="text-xl font-medium text-white"> da Dhaba</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Authentic Dhaba-Style Indian Cuisine in Fremont, CA. Experience the true flavors of Punjab.
            </p>
            <div className="flex gap-4">
              <a href={restaurantInfo.social.instagram} className="text-gray-400 hover:text-primary-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={restaurantInfo.social.facebook} className="text-gray-400 hover:text-primary-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/keekuzcom/menu" className="text-gray-400 hover:text-primary-400 transition">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/keekuzcom/order" className="text-gray-400 hover:text-primary-400 transition">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/keekuzcom/about" className="text-gray-400 hover:text-primary-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/keekuzcom/contact" className="text-gray-400 hover:text-primary-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary-400" />
              Hours
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {restaurantInfo.hoursDisplay.map((schedule, index) => (
                <li key={index} className="flex justify-between">
                  <span>{schedule.days}</span>
                  <span className={schedule.hours === 'Closed' ? 'text-red-400' : 'text-green-400'}>
                    {schedule.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition"
                >
                  <Phone className="h-5 w-5 text-primary-400" />
                  {restaurantInfo.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-400 hover:text-primary-400 transition"
                >
                  <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>{restaurantInfo.address.full}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>{restaurantInfo.copyright}</p>
          <p className="mt-2">Featured in SF Chronicle Best Food Trucks</p>
        </div>
      </div>
    </footer>
  );
}
