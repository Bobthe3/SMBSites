import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.keekuz.com'),
  title: {
    default: 'Keeku da Dhaba | Authentic Indian Cuisine in Fremont, CA',
    template: '%s | Keeku da Dhaba',
  },
  description: 'Experience authentic Dhaba-style Indian cuisine at Keeku da Dhaba in Fremont, CA. Fresh ingredients, traditional Mughlai recipes, and the warmth of Punjab. Order online for delivery via DoorDash, UberEats, or Grubhub.',
  keywords: [
    'Indian restaurant Fremont',
    'Dhaba Fremont',
    'Indian food Bay Area',
    'Paneer Tikka',
    'Butter Chicken',
    'Chicken Biryani',
    'DoorDash Indian food',
    'UberEats Indian',
    'Grubhub Indian',
    'Best Indian food Fremont',
    'Mughlai cuisine',
    'Punjabi food',
    'Indian catering Bay Area',
  ],
  authors: [{ name: 'Keeku da Dhaba' }],
  creator: 'Keeku da Dhaba',
  publisher: 'Keeku Food Products LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Keeku da Dhaba | Authentic Indian Cuisine',
    description: 'Experience authentic Dhaba-style Indian cuisine in Fremont, CA. Featured in SF Chronicle Best Food Trucks.',
    url: 'https://www.keekuz.com',
    siteName: 'Keeku da Dhaba',
    images: [
      {
        url: 'https://static.wixstatic.com/media/d72c91_abcfff115d7c4793a70b646cc249cd1a~mv2_d_1600_1200_s_2.jpeg',
        width: 1600,
        height: 1200,
        alt: 'Keeku da Dhaba - Authentic Indian Cuisine',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keeku da Dhaba | Authentic Indian Cuisine in Fremont',
    description: 'Experience authentic Dhaba-style Indian cuisine. Featured in SF Chronicle Best Food Trucks.',
    images: ['https://static.wixstatic.com/media/d72c91_abcfff115d7c4793a70b646cc249cd1a~mv2_d_1600_1200_s_2.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '_rKNbCxVFCyIZQ83fAQFpKE6zkts2Mun3DYuK5-H46M',
  },
  alternates: {
    canonical: 'https://www.keekuz.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
