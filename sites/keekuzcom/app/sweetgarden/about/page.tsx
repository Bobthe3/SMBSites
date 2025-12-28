import { Heart, Flame, Award, Fish } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-amber-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Our Story</h1>
          <p className="text-red-100">A passion for authentic Asian flavors</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Sweet Garden brings the authentic flavors of Japanese cuisine and Asian BBQ to Fremont.
              Our chefs craft each dish with care, from hand-rolled sushi to sizzling iron plate
              specialties that capture the perfect blend of sweet and umami.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We source the freshest ingredients daily, ensuring every bite delivers the quality
              and flavor our guests deserve. Whether you&apos;re craving traditional Japanese rolls
              or our signature BBQ skewers, we prepare each dish with expertise and dedication.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Fish, title: 'Fresh Daily', desc: 'Premium ingredients' },
              { icon: Heart, title: 'Made with Care', desc: 'Authentic recipes' },
              { icon: Flame, title: 'Expertly Grilled', desc: 'Perfect every time' },
              { icon: Award, title: 'Local Favorite', desc: 'Fremont\'s best' },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <item.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
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
