import { ArrowRight, Globe, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-emerald-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-300">Now accepting new clients</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
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
                href="mailto:claudesupplyds@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border border-white/10 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                color: 'from-indigo-500 to-indigo-600',
              },
              {
                icon: TrendingUp,
                title: 'SEO & Visibility',
                description: 'Get found on Google. We optimize your site to rank higher and attract more traffic.',
                color: 'from-emerald-500 to-emerald-600',
              },
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Launch quickly without sacrificing quality. Most projects delivered within 2 weeks.',
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
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for Small Business Success
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We understand the unique challenges SMBs face. That's why we deliver enterprise-quality
                solutions at prices that make sense for growing businesses.
              </p>

              <ul className="space-y-4">
                {[
                  'No bloated agencies or hidden fees',
                  'Direct communication, fast turnaround',
                  'Websites that actually drive results',
                  'Ongoing support when you need it',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border border-slate-700/50 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-10 h-10 text-indigo-400" />
                <div>
                  <div className="text-3xl font-bold text-white">SMB Focused</div>
                  <div className="text-slate-400">Built for businesses like yours</div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We specialize in helping restaurants, retail shops, service providers, and local
                businesses establish their digital presence and compete with bigger players.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-transparent to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Let's talk about your goals and how we can help you reach more customers online.
          </p>
          <a
            href="mailto:claudesupplyds@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-emerald-500 text-white px-10 py-5 rounded-xl font-semibold hover:opacity-90 transition text-lg"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Claude Supply. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
