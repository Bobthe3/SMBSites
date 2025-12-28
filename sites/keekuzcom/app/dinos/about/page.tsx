import { Award, Heart, Users, Clock } from 'lucide-react';
import { restaurantInfo } from '@/data/dinos/restaurant';

export default function AboutPage() {
  return (
    <>
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Our Story</h1>
          <p className="text-red-100">Serving Oakland since 1985</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {restaurantInfo.name} has been a beloved Oakland institution for nearly four decades.
              What started as a small family diner has grown into a neighborhood staple, serving
              up classic American comfort food with the same dedication and love as day one.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our recipes have been passed down through generations, and we take pride in using
              fresh, quality ingredients. From our famous burgers to our fluffy pancakes, every
              dish is made with care and served with a smile.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Clock, title: '35+ Years', desc: 'Serving the community' },
              { icon: Heart, title: 'Family Owned', desc: 'Three generations strong' },
              { icon: Users, title: 'Local Team', desc: 'Oakland born and raised' },
              { icon: Award, title: 'Award Winning', desc: 'Best Diner in Oakland' },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <item.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
