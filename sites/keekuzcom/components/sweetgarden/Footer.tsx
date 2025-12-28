import Link from 'next/link';
import { Phone, MapPin, Clock, Star, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA */}
        <div className="bg-gradient-to-r from-red-600 to-amber-500 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Craving something delicious?</h3>
          <p className="text-red-100 mb-6">Order online now for pickup or delivery</p>
          <a
            href={restaurantInfo.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-50 transition shadow-xl"
          >
            Order Online
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">{restaurantInfo.name}</h3>
            <p className="text-gray-400 mb-4">{restaurantInfo.tagline}</p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(restaurantInfo.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                ))}
              </div>
              <span className="text-gray-400 text-sm">{restaurantInfo.reviewCount}+ reviews</span>
            </div>
            <div className="flex gap-3">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/sweetgarden" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sweetgarden/menu" className="text-gray-400 hover:text-white transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/sweetgarden/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sweetgarden/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              Hours
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {restaurantInfo.hoursDisplay.map((h, i) => (
                <li key={i} className="flex justify-between gap-4">
                  <span className="text-gray-500">{h.days}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-red-500" />
                </div>
                {restaurantInfo.phoneFormatted}
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(restaurantInfo.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-sm">{restaurantInfo.address.full}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>{restaurantInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
