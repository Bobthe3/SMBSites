'use client';

import { ArrowRight, ExternalLink, Globe, Utensils, Cake, Flame, Leaf, Star } from 'lucide-react';
import { useState } from 'react';

type Category = 'all' | 'restaurant' | 'bakery' | 'fusion';

interface Project {
  id: string;
  name: string;
  chineseName?: string;
  description: string;
  category: 'restaurant' | 'bakery' | 'fusion';
  url: string;
  image: string;
  tags: string[];
  features: string[];
  color: string;
  icon: typeof Utensils;
}

const projects: Project[] = [
  {
    id: 'siafusion',
    name: 'Sia Fusion',
    description: 'Korean-Japanese fusion eatery specializing in crispy wings, Seoul burgers, and late-night comfort food. Bold flavors for night owls.',
    category: 'fusion',
    url: '/siafusion',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop',
    tags: ['Korean-Japanese', 'Late Night', 'Fusion'],
    features: ['Interactive menu filtering', 'Modern dark theme', 'Social links integration'],
    color: 'from-violet-500 to-violet-700',
    icon: Flame,
  },
  {
    id: 'pingsbistro',
    name: "Ping's Bistro",
    chineseName: '留湘老店',
    description: 'Authentic Hunan Chinese cuisine with bold, fiery flavors. Bilingual site serving both English and Chinese-speaking customers.',
    category: 'restaurant',
    url: '/pingsbistro',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=600&fit=crop',
    tags: ['Bilingual', 'Chinese', 'Hunan'],
    features: ['Language selector (EN/中文)', 'Signature dish showcase', 'Online ordering integration'],
    color: 'from-red-500 to-red-700',
    icon: Flame,
  },
  {
    id: 'verdant',
    name: 'Verdant',
    description: 'Fresh, seasonal ingredients crafted into nourishing bowls and salads. Modern healthy fast-casual concept.',
    category: 'restaurant',
    url: '/verdant',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    tags: ['Healthy', 'Modern', 'Fast-Casual'],
    features: ['Calorie display', 'Location finder', 'Sustainability focus'],
    color: 'from-emerald-500 to-emerald-700',
    icon: Leaf,
  },
  {
    id: 'ysg',
    name: "YSG Halal",
    chineseName: "YeeShaan's Grubb",
    description: 'Pakistani-American fusion comfort food. From legendary food truck to beloved Fremont restaurant.',
    category: 'fusion',
    url: '/ysg',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
    tags: ['Halal', 'Fusion', 'Pakistani-American'],
    features: ['HFSAA certified badge', 'Truck-art inspired design', 'Delivery platform links'],
    color: 'from-amber-500 to-amber-700',
    icon: Utensils,
  },
  {
    id: 'keekuzcom',
    name: 'Keekuz',
    description: 'Full-service restaurant website with menu management, catering options, and online ordering capabilities.',
    category: 'restaurant',
    url: '/keekuzcom',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    tags: ['Full-Service', 'Catering', 'Menu System'],
    features: ['Dynamic menu pages', 'Catering request form', 'Multi-page structure'],
    color: 'from-indigo-500 to-indigo-700',
    icon: Utensils,
  },
  {
    id: 'dinos',
    name: 'Dinos',
    description: 'Classic restaurant experience with a modern digital presence. Clean design focused on the dining experience.',
    category: 'restaurant',
    url: '/dinos',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
    tags: ['Classic', 'Elegant', 'Dining'],
    features: ['Reservation system', 'Photo gallery', 'Contact integration'],
    color: 'from-slate-500 to-slate-700',
    icon: Utensils,
  },
  {
    id: 'sweetgarden',
    name: 'Sweet Garden',
    description: 'Artisan bakery showcasing fresh-baked goods, craft coffee, and custom cakes for every occasion.',
    category: 'bakery',
    url: '/sweetgarden',
    image: 'https://images.unsplash.com/photo-1517433670267-30f41c09a2a6?w=800&h=600&fit=crop',
    tags: ['Bakery', 'Artisan', 'Custom Cakes'],
    features: ['Product showcase', 'Order ahead', 'Event catering'],
    color: 'from-pink-500 to-pink-700',
    icon: Cake,
  },
];

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'restaurant', label: 'Restaurants' },
  { id: 'bakery', label: 'Bakeries' },
  { id: 'fusion', label: 'Fusion' },
];

const getCategoryCount = (cat: Category) => cat === 'all' ? projects.length : projects.filter(p => p.category === cat).length;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">Claude Supply</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-slate-400 hover:text-white transition">Services</a>
            <a href="/portfolio" className="text-white font-medium">Portfolio</a>
            <a href="/#pricing" className="text-slate-400 hover:text-white transition">Pricing</a>
            <a href="/#contact" className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-emerald-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 rounded-full px-4 py-2 mb-8">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-slate-300">{projects.length} Live Projects</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400"> Portfolio</span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Real websites for real businesses. Each project is custom-designed to reflect the unique brand and drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {cat.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === cat.id ? 'bg-slate-200' : 'bg-slate-700'
                }`}>
                  {getCategoryCount(cat.id)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${project.color}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* External Link */}
                  <div className={`absolute top-4 right-4 p-2 rounded-lg bg-white/10 backdrop-blur transition-all ${
                    hoveredProject === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}>
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>

                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-indigo-400 transition">
                        {project.name}
                      </h3>
                      {project.chineseName && (
                        <span className="text-slate-500 text-sm">{project.chineseName}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">Live</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-1 h-1 bg-emerald-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border border-slate-700/50 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Portfolio?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Let&apos;s create something amazing for your business. Get a custom website that drives real results.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
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
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/#services" className="hover:text-white transition">Services</a>
            <a href="/#pricing" className="hover:text-white transition">Pricing</a>
            <a href="/#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
