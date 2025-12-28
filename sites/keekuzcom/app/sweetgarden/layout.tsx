import type { Metadata } from 'next';
import Header from '@/components/sweetgarden/Header';
import Footer from '@/components/sweetgarden/Footer';
import StructuredData from '@/components/sweetgarden/StructuredData';

export const metadata: Metadata = {
  title: {
    default: 'Sweet Garden Bakery | Artisan Baked Goods',
    template: '%s | Sweet Garden Bakery',
  },
  description: 'Artisan baked goods and fresh coffee in Palo Alto, CA. Croissants, breads, cakes, and more.',
};

export default function SweetgardenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
