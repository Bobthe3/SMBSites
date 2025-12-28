import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export default function Footer() {
  return (
    <footer className="bg-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-pink-600 mb-4">{restaurantInfo.name}</h3>
            <p className="text-gray-600">{restaurantInfo.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              {restaurantInfo.hoursDisplay.map((h, i) => (
                <li key={i} className="flex justify-between">
                  <span>{h.days}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-600">
              <a href={`tel:${restaurantInfo.phone}`} className="flex items-center gap-2 hover:text-pink-600">
                <Phone className="w-4 h-4" /> {restaurantInfo.phoneFormatted}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" /> {restaurantInfo.address.full}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          {restaurantInfo.copyright}
        </div>
      </div>
    </footer>
  );
}
