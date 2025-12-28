import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sia Fusion Eatery | Korean-Japanese Fusion | Newark, CA',
  description: 'Korean-Japanese fusion comfort food. Wings, burgers, Korean BBQ & more. Open late until 2AM in Newark, CA.',
  openGraph: {
    title: 'Sia Fusion Eatery | Korean-Japanese Fusion',
    description: 'Korean-Japanese fusion comfort food. Wings, burgers, Korean BBQ & more. Open late until 2AM.',
    type: 'website',
  },
};

export default function SiaFusionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
