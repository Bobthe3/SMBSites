'use client';

import { ArrowRight, Globe, Zap, TrendingUp, Users, CheckCircle, Star, MessageSquare, Palette, Code, Rocket, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', business: '', message: '' });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">Claude Supply</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-400 hover:text-white transition">Services</a>
            <a href="/portfolio" className="text-slate-400 hover:text-white transition">Portfolio</a>
            <a href="#pricing" className="text-slate-400 hover:text-white transition">Pricing</a>
            <a href="#contact" className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-emerald-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-300">Now accepting new clients</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Grow Your Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                Online
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              We help small and medium businesses establish a powerful web presence.
              Modern websites, SEO optimization, and digital strategies that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/10 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative max-w-4xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '2 Weeks', label: 'Avg. Turnaround' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-medium mb-4 block">WHAT WE DO</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From stunning websites to strategic marketing, we provide end-to-end solutions for your digital growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Modern Websites',
                description: 'Fast, responsive, and beautiful websites that convert visitors into customers.',
                features: ['Mobile-first design', 'Lightning fast load times', 'SEO optimized'],
                color: 'from-indigo-500 to-indigo-600',
              },
              {
                icon: TrendingUp,
                title: 'SEO & Visibility',
                description: 'Get found on Google. We optimize your site to rank higher and attract more traffic.',
                features: ['Local SEO', 'Google Business setup', 'Analytics tracking'],
                color: 'from-emerald-500 to-emerald-600',
              },
              {
                icon: Zap,
                title: 'Ongoing Support',
                description: 'We dont disappear after launch. Get updates, changes, and support when you need it.',
                features: ['Content updates', 'Performance monitoring', 'Priority support'],
                color: 'from-amber-500 to-amber-600',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-medium mb-4 block">HOW WE WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Process, Great Results
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We keep things straightforward so you can focus on running your business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, step: '01', title: 'Discovery', description: 'We learn about your business, goals, and target customers.' },
              { icon: Palette, step: '02', title: 'Design', description: 'We create a custom design that reflects your brand.' },
              { icon: Code, step: '03', title: 'Build', description: 'We develop your site with clean, fast, modern code.' },
              { icon: Rocket, step: '04', title: 'Launch', description: 'We deploy, test, and hand over the keys to your new site.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-2xl mb-4">
                  <item.icon className="w-8 h-8 text-slate-400" />
                  <span className="absolute -top-2 -right-2 bg-indigo-500 text-xs font-bold px-2 py-1 rounded-full">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-medium mb-4 block">PRICING</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transparent Pricing for Every Budget
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              No hidden fees. No surprises. Just great work at fair prices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$999',
                description: 'Perfect for new businesses',
                features: ['5-page website', 'Mobile responsive', 'Contact form', 'Basic SEO', '2 rounds of revisions'],
                popular: false,
              },
              {
                name: 'Professional',
                price: '$2,499',
                description: 'Most popular for growing businesses',
                features: ['10-page website', 'Custom design', 'Advanced SEO', 'Google Analytics', 'Blog setup', '3 rounds of revisions', '30 days support'],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For established businesses',
                features: ['Unlimited pages', 'E-commerce ready', 'Custom integrations', 'Priority support', 'Ongoing maintenance', 'Dedicated manager'],
                popular: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-indigo-500/20 to-emerald-500/20 border-2 border-indigo-500/50'
                    : 'bg-slate-800/50 border border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-emerald-500 text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition ${
                    plan.popular
                      ? 'bg-white text-slate-900 hover:bg-slate-100'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border border-slate-700/50 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              &ldquo;Claude Supply transformed our online presence. Within weeks of launching our new site,
              we saw a 40% increase in customer inquiries. Professional, fast, and easy to work with.&rdquo;
            </blockquote>
            <div className="text-slate-400">
              <span className="font-semibold text-white">Local Restaurant Owner</span>
              <span className="mx-2">•</span>
              <span>Bay Area, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-indigo-400 font-medium mb-4 block">GET IN TOUCH</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Tell us about your project and we&apos;ll get back to you within 24 hours with a free consultation.
              </p>

              <div className="space-y-4">
                <a href="mailto:claudesupplyds@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition">
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  claudesupplyds@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Business Type</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="e.g., Restaurant, Retail, Service"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your project</label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition resize-none"
                    placeholder="What are you looking to build?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-emerald-500 py-4 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Claude Supply. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
