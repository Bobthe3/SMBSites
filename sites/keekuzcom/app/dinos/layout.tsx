import type { Metadata } from 'next';
import Header from '@/components/dinos/Header';
import Footer from '@/components/dinos/Footer';
import StructuredData from '@/components/dinos/StructuredData';

export const metadata: Metadata = {
  title: {
    default: "Dino's Diner | Classic American Comfort Food in Oakland, CA",
    template: "%s | Dino's Diner Oakland",
  },
  description: "Family-owned since 1985. Serving classic American comfort food - burgers, breakfast, family meals & more. Oakland's favorite neighborhood diner. Call (510) 555-1234 to order.",
  keywords: [
    'Oakland diner',
    'American comfort food',
    'family restaurant Oakland',
    'breakfast Oakland',
    'burgers Oakland',
    'family meals',
    'Dinos Diner',
    'Oakland CA restaurant',
  ],
  openGraph: {
    title: "Dino's Diner | Classic American Comfort Food",
    description: "Family-owned since 1985. Serving classic American comfort food in Oakland, CA. Breakfast, burgers, dinner plates & family meals.",
    type: 'website',
    locale: 'en_US',
  },
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
