import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dina's Family Restaurant | Breakfast, Lunch & Dinner in Fremont, CA",
  description: "Family-owned restaurant serving homestyle breakfast, lunch & dinner since 1985. Everything prepared fresh from scratch, just like home. Located in Fremont, CA.",
  keywords: "Dina's Family Restaurant, Fremont restaurant, breakfast Fremont, diner Fremont CA, family restaurant, homestyle cooking",
  openGraph: {
    title: "Dina's Family Restaurant | Homestyle Cooking in Fremont",
    description: "Family-owned restaurant serving homestyle breakfast, lunch & dinner. Everything prepared fresh from scratch, just like home.",
    type: 'website',
  },
};

export default function DinasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
