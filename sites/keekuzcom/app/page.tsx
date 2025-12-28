import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Claude Supply
        </h1>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Building digital solutions for small and medium businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@claudesupply.com"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
