import type { Metadata } from 'next';
import SweetGardenHeader from '@/components/sweetgarden/Header';
import SweetGardenFooter from '@/components/sweetgarden/Footer';
import StructuredData from '@/components/sweetgarden/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://claudesupply.com/sweetgarden'),
  title: {
    default: 'Sweet Garden | Asian BBQ Fusion in Fremont, CA',
    template: '%s | Sweet Garden',
  },
  description: 'Experience the best authentic Asian and BBQ fusion at Sweet Garden in Fremont, CA. Iron plate specialties, ramen, bubble tea, and more. Order online for pickup!',
  keywords: [
    'Asian restaurant Fremont',
    'BBQ Fremont',
    'Japanese food Bay Area',
    'Iron plate dishes',
    'Bubble tea Fremont',
    'Ramen Fremont',
    'Asian fusion',
    'Sweet Garden Fremont',
    'Takeout Fremont',
  ],
  openGraph: {
    title: 'Sweet Garden | Asian BBQ Fusion',
    description: 'Experience authentic Asian and BBQ fusion in Fremont, CA.',
    url: 'https://claudesupply.com/sweetgarden',
    siteName: 'Sweet Garden',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SweetGardenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      <SweetGardenHeader />
      <main>{children}</main>
      <SweetGardenFooter />
    </>
  );
}
