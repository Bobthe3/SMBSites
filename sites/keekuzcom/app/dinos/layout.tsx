import type { Metadata } from 'next';
import DinosHeader from '@/components/dinos/Header';
import DinosFooter from '@/components/dinos/Footer';
import StructuredData from '@/components/dinos/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://claudesupply.com/dinos'),
  title: {
    default: "Dino's Family Restaurant | Classic American Diner in Fremont, CA",
    template: "%s | Dino's Family Restaurant",
  },
  description: "Family-owned American diner serving homestyle breakfast and lunch in Fremont, CA since 1985. Famous for our homemade biscuits and gravy, fluffy pancakes, and juicy burgers.",
  keywords: [
    'American restaurant Fremont',
    'Diner Fremont CA',
    'Breakfast Fremont',
    'Lunch Fremont',
    'Family restaurant Bay Area',
    'Homemade biscuits gravy',
    'Pancakes waffles',
    'Burgers sandwiches',
    'Classic diner',
  ],
  openGraph: {
    title: "Dino's Family Restaurant | Classic American Diner",
    description: "Family-owned American diner serving homestyle breakfast and lunch in Fremont since 1985.",
    url: 'https://claudesupply.com/dinos',
    siteName: "Dino's Family Restaurant",
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DinosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      <DinosHeader />
      <main>{children}</main>
      <DinosFooter />
    </>
  );
}
