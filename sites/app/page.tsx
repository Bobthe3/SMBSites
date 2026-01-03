'use client';

import { useState } from 'react';
import { Globe, TrendingUp, Zap, Mail, ArrowRight, X, MessageSquare, Palette, Code, Rocket } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap');

        :root {
          --burgundy: #722F37;
          --burgundy-dark: #5A252C;
          --burgundy-light: #8B3D47;
          --charcoal: #1F2937;
          --gray-warm: #4B5563;
          --gray-light: #9CA3AF;
          --border: #E5E7EB;
          --cream: #FDFCFB;
        }

        .font-serif {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        .font-sans {
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* Elegant underline animation */
        .link-underline {
          position: relative;
        }
        .link-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--burgundy);
          transition: width 0.3s ease;
        }
        .link-underline:hover::after {
          width: 100%;
        }

        /* Subtle fade in */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }

        .fade-up-delay-1 { animation-delay: 0.1s; opacity: 0; }
        .fade-up-delay-2 { animation-delay: 0.2s; opacity: 0; }
        .fade-up-delay-3 { animation-delay: 0.3s; opacity: 0; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="font-serif text-2xl font-semibold tracking-wide" style={{ color: 'var(--burgundy)' }}>
              Claude Supply
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
              <a
                href="#services"
                className="font-sans text-sm tracking-wide link-underline"
                style={{ color: 'var(--gray-warm)' }}
              >
                Services
              </a>
              <a
                href="#pricing"
                className="font-sans text-sm tracking-wide link-underline"
                style={{ color: 'var(--gray-warm)' }}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="font-sans text-sm tracking-wide link-underline"
                style={{ color: 'var(--gray-warm)' }}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="font-sans text-sm font-medium tracking-wide px-6 py-3 transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: 'var(--burgundy)',
                  color: 'white',
                }}
              >
                Schedule a Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
              <div className="w-4 h-0.5 bg-gray-800"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl"
            style={{ backgroundColor: 'var(--cream)' }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" style={{ color: 'var(--charcoal)' }} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="px-6 py-4">
              <div className="flex flex-col gap-6">
                <a
                  href="#services"
                  className="font-sans text-lg tracking-wide"
                  style={{ color: 'var(--charcoal)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#pricing"
                  className="font-sans text-lg tracking-wide"
                  style={{ color: 'var(--charcoal)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="font-sans text-lg tracking-wide"
                  style={{ color: 'var(--charcoal)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>

                <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <a
                    href="#contact"
                    className="block font-sans text-base font-medium tracking-wide px-6 py-4 text-center transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--burgundy)',
                      color: 'white',
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          {/* Decorative Line */}
          <div className="flex justify-center mb-12 fade-up">
            <div className="w-16 h-px" style={{ backgroundColor: 'var(--burgundy)' }}></div>
          </div>

          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 fade-up fade-up-delay-1"
            style={{ color: 'var(--charcoal)' }}
          >
            Digital Excellence<br />
            <span className="italic" style={{ color: 'var(--burgundy)' }}>for Growing Businesses</span>
          </h1>

          <p
            className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed fade-up fade-up-delay-2"
            style={{ color: 'var(--gray-warm)' }}
          >
            We craft modern websites and digital strategies that establish credibility,
            attract customers, and drive measurable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up fade-up-delay-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 font-sans text-sm font-medium tracking-wide px-8 py-4 transition-all duration-300"
              style={{
                backgroundColor: 'var(--burgundy)',
                color: 'white',
              }}
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Thin Divider */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="h-px" style={{ backgroundColor: 'var(--border)' }}></div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span
              className="font-sans text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--burgundy)' }}
            >
              Our Services
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl font-medium"
              style={{ color: 'var(--charcoal)' }}
            >
              Comprehensive Digital Solutions
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Globe,
                title: 'Modern Websites',
                description: 'Fast, responsive, and beautifully crafted websites that establish trust and convert visitors into loyal customers.',
                features: ['Mobile-first design', 'Performance optimized', 'SEO foundation'],
              },
              {
                icon: TrendingUp,
                title: 'SEO & Visibility',
                description: 'Strategic optimization to ensure your business ranks prominently when customers search for your services.',
                features: ['Local search optimization', 'Google Business setup', 'Analytics & insights'],
              },
              {
                icon: Zap,
                title: 'Ongoing Support',
                description: 'Continued partnership after launch with updates, maintenance, and strategic guidance as your business evolves.',
                features: ['Content updates', 'Performance monitoring', 'Priority assistance'],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 lg:p-10 border transition-all duration-300 hover:shadow-lg"
                style={{ borderColor: 'var(--border)' }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--burgundy)' }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3
                  className="font-serif text-2xl font-medium mb-4"
                  style={{ color: 'var(--charcoal)' }}
                >
                  {service.title}
                </h3>

                <p
                  className="font-sans text-base leading-relaxed mb-6"
                  style={{ color: 'var(--gray-warm)' }}
                >
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="font-sans text-sm flex items-center gap-3"
                      style={{ color: 'var(--gray-light)' }}
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: 'var(--burgundy)' }}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span
              className="font-sans text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--burgundy)' }}
            >
              Our Process
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl font-medium"
              style={{ color: 'var(--charcoal)' }}
            >
              How We Work Together
            </h2>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              {
                icon: MessageSquare,
                step: '01',
                title: 'Discovery',
                description: 'We learn about your business, goals, and vision. A focused conversation to understand what success looks like for you.',
              },
              {
                icon: Palette,
                step: '02',
                title: 'Design',
                description: 'We craft a custom design that reflects your brand and resonates with your customers. You review and refine until it\'s perfect.',
              },
              {
                icon: Code,
                step: '03',
                title: 'Development',
                description: 'We build your site with modern technology—fast, secure, and optimized for search engines and mobile devices.',
              },
              {
                icon: Rocket,
                step: '04',
                title: 'Launch & Support',
                description: 'Your site goes live. We handle hosting, updates, and ongoing support so you can focus on running your business.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                {/* Connector line for desktop */}
                {i < 3 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px"
                    style={{ backgroundColor: 'var(--border)' }}
                  ></div>
                )}

                <div className="relative">
                  {/* Step number */}
                  <span
                    className="font-serif text-6xl font-medium opacity-10 absolute -top-4 -left-2"
                    style={{ color: 'var(--burgundy)' }}
                  >
                    {item.step}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-6 relative z-10"
                    style={{ backgroundColor: 'var(--burgundy)' }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3
                    className="font-serif text-xl font-medium mb-3"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--gray-warm)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span
              className="font-sans text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--burgundy)' }}
            >
              Pricing
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl font-medium mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Simple, Transparent Pricing
            </h2>
            <p
              className="font-sans text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--gray-warm)' }}
            >
              No hidden fees. No surprises. Just clear monthly pricing tailored to your business needs.
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-px" style={{ backgroundColor: 'var(--burgundy)' }}></div>
            </div>
            <p
              className="font-serif text-3xl md:text-4xl font-medium mb-4"
              style={{ color: 'var(--charcoal)' }}
            >
              Projects starting at <span style={{ color: 'var(--burgundy)' }}>$97/month</span>
            </p>
            <p
              className="font-sans text-base mb-8"
              style={{ color: 'var(--gray-warm)' }}
            >
              Schedule a consultation to discuss your project and get a custom quote.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 font-sans text-sm font-medium tracking-wide px-8 py-4 transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: 'var(--burgundy)',
                color: 'white',
              }}
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Text */}
            <div>
              <span
                className="font-sans text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
                style={{ color: 'var(--burgundy)' }}
              >
                Get in Touch
              </span>
              <h2
                className="font-serif text-4xl md:text-5xl font-medium mb-6"
                style={{ color: 'var(--charcoal)' }}
              >
                Schedule a<br />Consultation
              </h2>
              <p
                className="font-sans text-lg leading-relaxed mb-10"
                style={{ color: 'var(--gray-warm)' }}
              >
                Book a free 30-minute call to discuss your business goals.
                No pressure, just a conversation about how we can help.
              </p>

              {/* Email */}
              <a
                href="mailto:claudesupplyds@gmail.com"
                className="inline-flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'var(--burgundy)' }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span
                  className="font-sans text-base link-underline"
                  style={{ color: 'var(--charcoal)' }}
                >
                  claudesupplyds@gmail.com
                </span>
              </a>
            </div>

            {/* Right Column - Email CTA */}
            <div
              className="bg-white border overflow-hidden flex flex-col items-center justify-center p-12 text-center"
              style={{ borderColor: 'var(--border)', minHeight: '400px' }}
            >
              <div
                className="w-20 h-20 flex items-center justify-center mb-8"
                style={{ backgroundColor: 'var(--burgundy)' }}
              >
                <Mail className="w-10 h-10 text-white" />
              </div>
              <p
                className="font-serif text-2xl font-medium mb-4"
                style={{ color: 'var(--charcoal)' }}
              >
                Ready to Get Started?
              </p>
              <p
                className="font-sans text-base mb-8 max-w-sm"
                style={{ color: 'var(--gray-warm)' }}
              >
                Send us an email and we&apos;ll get back to you within 24 hours to schedule your free consultation.
              </p>
              <a
                href="mailto:claudesupplyds@gmail.com"
                className="inline-flex items-center gap-3 font-sans text-sm font-medium tracking-wide px-8 py-4 transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: 'var(--burgundy)',
                  color: 'white',
                }}
              >
                Email Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <span
                className="font-serif text-lg font-semibold"
                style={{ color: 'var(--burgundy)' }}
              >
                Claude Supply
              </span>
              <span
                className="hidden md:block w-px h-4"
                style={{ backgroundColor: 'var(--border)' }}
              ></span>
              <span
                className="font-sans text-sm"
                style={{ color: 'var(--gray-light)' }}
              >
                Digital solutions for growing businesses
              </span>
            </div>

            <div className="flex items-center gap-8">
              <a
                href="#services"
                className="font-sans text-sm link-underline"
                style={{ color: 'var(--gray-warm)' }}
              >
                Services
              </a>
              <a
                href="#pricing"
                className="font-sans text-sm link-underline"
                style={{ color: 'var(--gray-warm)' }}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="font-sans text-sm link-underline"
                style={{ color: 'var(--gray-warm)' }}
              >
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: 'var(--border)' }}>
            <span
              className="font-sans text-sm"
              style={{ color: 'var(--gray-light)' }}
            >
              © {new Date().getFullYear()} Claude Supply. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
