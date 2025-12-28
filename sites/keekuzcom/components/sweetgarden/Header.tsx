'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';
import OpenStatus from './OpenStatus';

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
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href={`tel:${restaurantInfo.phone}`} className="flex items-center gap-1 hover:text-blue-200 transition">
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
          <Link href="/sweetgarden" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Sweet</span>
            <span className="text-xl font-medium text-slate-800">Garden</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/sweetgarden' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-800 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href={restaurantInfo.orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition font-medium"
            >
              Order Online
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-800"
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
                const isActive = pathname === item.href || (item.href !== '/sweetgarden' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium py-2 transition ${
                      isActive
                        ? 'text-blue-600 border-l-4 border-blue-600 pl-3'
                        : 'text-slate-800 hover:text-blue-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <a
                href={restaurantInfo.orderOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-3 rounded-lg text-center hover:bg-blue-600 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Online
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
