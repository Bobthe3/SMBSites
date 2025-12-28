'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { restaurantInfo } from '@/data/dinos/restaurant';

const navigation = [
  { name: 'Home', href: '/dinos' },
  { name: 'Menu', href: '/dinos/menu' },
  { name: 'About', href: '/dinos/about' },
  { name: 'Contact', href: '/dinos/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-red-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/dinos" className="text-2xl font-bold">
            {restaurantInfo.name}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition ${
                  pathname === item.href ? 'text-yellow-300' : 'hover:text-yellow-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href={`tel:${restaurantInfo.phone}`} className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-500">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 font-medium"
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
