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
    <header className="bg-[#1e3a5f] text-white sticky top-0 z-50 shadow-lg">
      {/* Top bar with phone number - always visible */}
      <div className="bg-[#b91c1c] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-end">
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="flex items-center gap-2 text-lg font-semibold tracking-wide hover:text-amber-200 transition"
          >
            <Phone className="w-5 h-5" />
            Call Now: {restaurantInfo.phoneFormatted}
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/dinos" className="flex items-center gap-3">
            <span className="text-3xl font-bold tracking-tight text-white">
              {restaurantInfo.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium tracking-wide transition-colors ${
                  pathname === item.href
                    ? 'text-amber-400 border-b-2 border-amber-400 pb-1'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/dinos/menu"
              className="bg-[#d97706] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-amber-600 transition-colors shadow-md"
            >
              Order Now
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xl font-medium py-2 ${
                    pathname === item.href ? 'text-amber-400' : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/dinos/menu"
                className="bg-[#d97706] text-white px-6 py-4 rounded-lg text-xl font-bold text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
