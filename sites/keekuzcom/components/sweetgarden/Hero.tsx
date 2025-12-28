import { ArrowRight, Utensils } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400 text-blue-300 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Utensils className="h-5 w-5" />
          <span className="text-sm font-medium">Asian BBQ Fusion in Fremont, CA</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-blue-400">Sweet</span> Garden
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-200 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {restaurantInfo.tagline}
        </p>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Experience a culinary journey with our expertly crafted Asian and BBQ flavors.
          Sizzling iron plates, refreshing bubble teas, and authentic Asian cuisine.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href={restaurantInfo.orderOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Order Now
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="/sweetgarden/menu"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition backdrop-blur-sm"
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}
