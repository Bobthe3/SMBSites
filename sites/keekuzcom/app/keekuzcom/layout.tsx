import type { Metadata } from 'next';
import KeekuzHeader from '@/components/keekuzcom/Header';
import KeekuzFooter from '@/components/keekuzcom/Footer';
import StructuredData from '@/components/keekuzcom/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://claudesupply.com/keekuzcom'),
  title: {
    default: 'Keeku da Dhaba | Authentic Indian Cuisine in Fremont, CA',
    template: '%s | Keeku da Dhaba',
  },
  description: 'Experience authentic Dhaba-style Indian cuisine at Keeku da Dhaba in Fremont, CA. Fresh ingredients, traditional Mughlai recipes, and the warmth of Punjab.',
  keywords: [
    'Indian restaurant Fremont',
    'Dhaba Fremont',
    'Indian food Bay Area',
    'Paneer Tikka',
    'Butter Chicken',
    'Chicken Biryani',
    'Best Indian food Fremont',
    'Mughlai cuisine',
    'Punjabi food',
    'Indian catering Bay Area',
  ],
  openGraph: {
    title: 'Keeku da Dhaba | Authentic Indian Cuisine',
    description: 'Experience authentic Dhaba-style Indian cuisine in Fremont, CA.',
    url: 'https://claudesupply.com/keekuzcom',
    siteName: 'Keeku da Dhaba',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KeekuzcomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      <KeekuzHeader />
      <main id="main-content">{children}</main>
      <KeekuzFooter />
    </>
  );
}
