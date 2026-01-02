'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';

import OpenStatus from './OpenStatus';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Catering', href: '/catering' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href={`tel:${restaurantInfo.phone}`} className="flex items-center gap-1 hover:text-primary-200 transition">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{restaurantInfo.phoneFormatted}</span>
              </a>
              <span className="hidden md:flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {restaurantInfo.address.city}, {restaurantInfo.address.state}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <OpenStatus size="sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary-600">Keeku</span>
            <span className="text-xl font-medium text-dark">da Dhaba</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition ${
                    isActive
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-dark hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/order"
              className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition font-medium"
            >
              Order Online
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium py-2 transition ${
                      isActive
                        ? 'text-primary-600 border-l-4 border-primary-600 pl-3'
                        : 'text-dark hover:text-primary-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/order"
                className="bg-primary-500 text-white px-4 py-3 rounded-lg text-center hover:bg-primary-600 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Online
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
