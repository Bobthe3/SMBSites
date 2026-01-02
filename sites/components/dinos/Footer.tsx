import Link from 'next/link';
import { Phone, MapPin, Clock, Star } from 'lucide-react';
import { restaurantInfo } from '@/data/dinos/restaurant';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{restaurantInfo.name}</h3>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              {restaurantInfo.tagline}
            </p>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-2 text-white text-lg">Oakland's Favorite</span>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-amber-400" />
              Hours
            </h4>
            <ul className="space-y-3">
              {restaurantInfo.hoursDisplay.map((h, i) => (
                <li key={i} className="flex justify-between text-lg text-blue-100">
                  <span className="font-medium">{h.days}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center gap-3 text-lg text-blue-100 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-6 h-6 text-amber-400" />
                {restaurantInfo.phoneFormatted}
              </a>
              <div className="flex items-start gap-3 text-lg text-blue-100">
                <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <span>{restaurantInfo.address.full}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/dinos" className="text-lg text-blue-100 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dinos/menu" className="text-lg text-blue-100 hover:text-amber-400 transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/dinos/about" className="text-lg text-blue-100 hover:text-amber-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/dinos/contact" className="text-lg text-blue-100 hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#162d4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-base">
              {restaurantInfo.copyright}
            </p>
            <p className="text-blue-200 text-base">
              Proudly serving Oakland families since 1985
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
