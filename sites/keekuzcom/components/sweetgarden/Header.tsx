'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

const navigation = [
  { name: 'Home', href: '/sweetgarden' },
  { name: 'Menu', href: '/sweetgarden/menu' },
  { name: 'About', href: '/sweetgarden/about' },
  { name: 'Contact', href: '/sweetgarden/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/sweetgarden" className="text-2xl font-bold text-red-600">
              {restaurantInfo.name}
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition ${
                    pathname === item.href ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition font-medium"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">{restaurantInfo.phoneFormatted}</span>
              </a>
              <a
                href={restaurantInfo.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-red-700 transition shadow-md hover:shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Now
              </a>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <a
                href={restaurantInfo.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Order
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 font-medium ${
                    pathname === item.href ? 'text-red-600' : 'text-gray-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center gap-2 py-3 text-gray-600 font-medium"
              >
                <Phone className="w-4 h-4" />
                {restaurantInfo.phoneFormatted}
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Sticky Order Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-2xl md:hidden z-50">
        <a
          href={restaurantInfo.orderOnline}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-red-600 text-white w-full py-4 rounded-full font-bold text-lg shadow-lg"
        >
          <ShoppingBag className="w-5 h-5" />
          Order Online Now
        </a>
      </div>
    </>
  );
}
