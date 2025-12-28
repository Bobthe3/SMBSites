import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verdant | Fresh. Local. Nourishing.',
  description: 'Fresh, seasonal ingredients crafted into nourishing bowls and salads. Made with love, served with speed, designed for your wellbeing.',
};

export default function VerdantLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
