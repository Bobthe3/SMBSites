'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/sweetgarden" className="text-2xl font-bold text-red-600">
            {restaurantInfo.name}
          </Link>

          <div className="hidden md:flex items-center gap-8">
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
            <a href={restaurantInfo.orderOnline} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition">
              <Phone className="w-4 h-4" />
              Order
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 font-medium text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
