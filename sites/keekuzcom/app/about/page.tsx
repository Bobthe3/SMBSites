import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Leaf, Users, ArrowRight, Flame, ChefHat } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Bringing the authentic flavors of Delhi and Punjab to Fremont, one dish at a time
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-gradient-to-r from-accent-100 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-dark italic">
            &ldquo;Food is my passion - my art is creating a delicious and surprising menu that will overwhelm your every sense&rdquo;
          </blockquote>
          <p className="mt-4 text-primary-600 font-semibold">— Varun Sapra (Keeku)</p>
        </div>
      </section>

      {/* Chef Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chef Image */}
            <div className="relative">
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://static.wixstatic.com/media/d72c91_4ec4a7ddd2b247dc83c1b5092d061b82~mv2.jpg/v1/fill/w_405,h_713,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20190605_180242.jpg"
                  alt="Varun Sapra - Chef and Owner of Keeku da Dhaba"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Name badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-2xl px-8 py-4 text-center">
                <h3 className="text-2xl font-bold text-dark">Varun Sapra</h3>
                <p className="text-primary-600 font-medium">Chef & Owner</p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8 pt-8 lg:pt-0">
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full mb-6">
                <ChefHat className="h-5 w-5" />
                <span className="text-sm font-medium">Meet the Chef</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
                The Story of <span className="text-primary-600">Keeku</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-dark">A foodie by heart and a Delhite by blood</strong>, Varun
                  aka &ldquo;Keeku&rdquo; graduated from IHM Shimla (Institute of Hotel Management) and was
                  trained by the famous old Delhi chefs who have mastered the art of Mughalai cuisine
                  for generations.
                </p>
                <p>
                  His passion for cooking led him to bring the <strong className="text-primary-600">original
                  Mughalai flavors</strong> to the Bay Area through his signature Biryanis and Kababs.
                  Every dish is crafted with the same dedication and authentic techniques that have
                  been perfected over centuries in the streets of Old Delhi.
                </p>
                <p>
                  To ensure the most authentic flavor possible, Keeku had a <strong className="text-dark">custom
                  charcoal barbeque grill made in India</strong> and installed on the food truck. Now,
                  customers can watch as fresh kababs and chicken tikkas are cooked to perfection
                  over open flames - just like at the legendary dhabas of Punjab!
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary-600" />
                    <span className="font-semibold text-dark">IHM Trained</span>
                  </div>
                  <p className="text-sm text-gray-600">Graduate of IHM Shimla</p>
                </div>
                <div className="bg-accent-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="h-5 w-5 text-accent-600" />
                    <span className="font-semibold text-dark">Authentic Grill</span>
                  </div>
                  <p className="text-sm text-gray-600">Custom charcoal BBQ from India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Dhaba Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
              What is a <span className="text-primary-600">Dhaba</span>?
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                In Punjab and across India, a <strong className="text-primary-600">Dhaba</strong> is a
                roadside restaurant that serves travelers and locals alike. These humble eateries are
                known for their rustic charm and incredibly flavorful food – simple dishes cooked with
                love and time-honored recipes passed down through generations.
              </p>
              <p>
                The typical dhaba features <strong className="text-dark">charpoy</strong> (rope beds) for
                seating, food cooked in large <strong className="text-dark">kadais</strong> (woks) over
                roaring flames, and the irresistible aroma of spices that draws travelers from miles away.
              </p>
              <p>
                At <strong className="text-primary-600">Keeku da Dhaba</strong>, we bring that authentic
                dhaba experience to Fremont. Our kitchen follows traditional cooking methods, using
                fresh ingredients and aromatic spices to create dishes that taste just like they would
                at a roadside dhaba in Punjab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do, from sourcing ingredients to serving our guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Made with Love',
                description: 'Every dish is prepared with care and passion, just like home cooking',
              },
              {
                icon: Leaf,
                title: 'Fresh Ingredients',
                description: 'We use only the freshest ingredients, sourced daily for quality',
              },
              {
                icon: Award,
                title: 'Authentic Recipes',
                description: 'Traditional recipes from the streets of Old Delhi',
              },
              {
                icon: Users,
                title: 'Family Tradition',
                description: 'A family-owned business dedicated to hospitality',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 text-center hover:shadow-xl transition"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow">
                  <value.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-gradient-to-br from-accent-100 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <Award className="h-16 w-16 text-accent-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Recognized by SF Chronicle
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re proud to be featured in the San Francisco Chronicle&apos;s list of
              <strong> Best Food Trucks in the Bay Area</strong>. This recognition reflects our
              commitment to quality and authentic Indian cuisine that has won the hearts of
              food lovers across the region.
            </p>
            <a
              href="https://www.sfchronicle.com/projects/best-food-trucks-san-francisco-bay-area/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Read the Article
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Keeku&apos;s Flavors?
          </h2>
          <p className="text-gray-400 mb-8">
            Visit us at {restaurantInfo.address.city} or order online for delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              Explore Menu
            </Link>
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 bg-white text-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
