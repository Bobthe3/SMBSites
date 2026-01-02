import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-400 text-accent-300 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Award className="h-5 w-5" />
          <span className="text-sm font-medium">Featured in SF Chronicle Best Food Trucks</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-primary-400">Keeku</span> da Dhaba
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-200 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Authentic Dhaba-Style Indian Cuisine
        </p>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Experience the flavors of traditional Punjabi roadside eateries.
          Fresh ingredients, time-honored recipes, and the warmth of home cooking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/order"
            className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg shadow-primary-500/30"
          >
            Order Now
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition backdrop-blur-sm"
          >
            View Menu
          </Link>
        </div>

      </div>
    </section>
  );
}
