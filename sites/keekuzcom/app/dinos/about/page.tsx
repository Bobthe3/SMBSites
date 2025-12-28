import Link from 'next/link';
import { Award, Heart, Users, Clock, ArrowRight, Phone } from 'lucide-react';
import { restaurantInfo } from '@/data/dinos/restaurant';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-blue-100">
            A family tradition serving Oakland since 1985
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl p-10 md:p-14 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8">
              Welcome to {restaurantInfo.name}
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {restaurantInfo.name} has been a beloved Oakland institution for nearly four decades.
                What started as a small family diner has grown into a neighborhood staple, serving
                up classic American comfort food with the same dedication and love as day one.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our recipes have been passed down through generations, and we take pride in using
                fresh, quality ingredients. From our famous burgers to our fluffy buttermilk pancakes,
                every dish is made with care and served with a genuine smile.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We believe a great meal brings families together. That's why we've created a warm,
                welcoming atmosphere where everyone from toddlers to grandparents feels right at home.
                When you dine with us, you're not just a customer - you're part of the Dino's family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a5f] mb-16">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: '35+ Years', desc: 'Proudly serving our community' },
              { icon: Heart, title: 'Family Owned', desc: 'Three generations strong' },
              { icon: Users, title: 'Local Team', desc: 'Oakland born and raised' },
              { icon: Award, title: 'Award Winning', desc: 'Best Diner in Oakland' },
            ].map((item, i) => (
              <div key={i} className="bg-[#faf7f2] rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our Promise to You
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Fresh Ingredients',
                desc: 'We source quality ingredients daily. No shortcuts, no compromises.',
              },
              {
                title: 'Fair Prices',
                desc: "Honest, family-friendly pricing. Great food shouldn't break the bank.",
              },
              {
                title: 'Warm Welcome',
                desc: 'Every guest is treated like family from the moment you walk in.',
              },
              {
                title: 'Quick Service',
                desc: 'Hot food served fast, but never rushed. We respect your time.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 flex gap-6 items-start">
                <div className="w-3 h-3 bg-amber-400 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-lg text-blue-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#b91c1c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Come Join the Family
          </h2>
          <p className="text-xl text-red-100 mb-8">
            We can't wait to serve you. Stop by today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dinos/menu"
              className="bg-white text-[#b91c1c] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-3"
            >
              View Our Menu
              <ArrowRight className="w-6 h-6" />
            </Link>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="bg-[#1e3a5f] text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-[#2d4a73] transition-colors inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
