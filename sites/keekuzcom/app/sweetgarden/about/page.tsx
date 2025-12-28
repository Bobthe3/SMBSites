import { Heart, Leaf, Award, Clock } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pink-400 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Our Story</h1>
          <p className="text-pink-100">A passion for baking</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Sweet Garden Bakery started with a simple dream: to bring the joy of freshly baked
              goods to our community. Every morning, our bakers arrive before dawn to craft
              croissants, breads, and pastries that taste like home.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We source our ingredients locally whenever possible, using organic flour,
              real butter, and seasonal fruits. Every item is made from scratch with
              recipes perfected over years of baking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Clock, title: 'Fresh Daily', desc: 'Baked every morning' },
              { icon: Heart, title: 'Made with Love', desc: 'Family recipes' },
              { icon: Leaf, title: 'Quality First', desc: 'Premium ingredients' },
              { icon: Award, title: 'Award Winning', desc: 'Best Bakery 2023' },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <item.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
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
