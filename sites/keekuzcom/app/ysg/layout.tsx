import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "YSG Halal - YeeShaan's Grubb | Bay Area's First Certified Halal",
  description: "Pakistani-American fusion halal burgers, loaded fries & more in Fremont, CA. From food truck to your favorite restaurant.",
};

export default function YSGLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
