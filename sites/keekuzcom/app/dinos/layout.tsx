import type { Metadata } from 'next';
import Header from '@/components/dinos/Header';
import Footer from '@/components/dinos/Footer';
import StructuredData from '@/components/dinos/StructuredData';

export const metadata: Metadata = {
  title: {
    default: "Dino's Diner | Classic American Comfort Food",
    template: "%s | Dino's Diner",
  },
  description: 'Classic American comfort food since 1985. Breakfast, burgers, and more in Oakland, CA.',
};

export default function DinosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
