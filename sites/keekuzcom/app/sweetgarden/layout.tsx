import type { Metadata } from 'next';
import Header from '@/components/sweetgarden/Header';
import Footer from '@/components/sweetgarden/Footer';
import StructuredData from '@/components/sweetgarden/StructuredData';

export const metadata: Metadata = {
  title: {
    default: 'Sweet Garden | Japanese Cuisine & Asian BBQ',
    template: '%s | Sweet Garden',
  },
  description: 'Japanese cuisine and Asian BBQ in Fremont, CA. Fresh sushi rolls, sizzling iron plate dishes, and grilled skewers.',
};

export default function SweetgardenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
