import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Company Name] | Licensed Electrician in [City], [State]',
  description: 'Licensed electrical contractor in [City], [State]. 24/7 emergency service, residential & commercial. Panel upgrades, lighting, repairs. Free estimates. Call now!',
  keywords: 'electrician [city], electrical contractor, licensed electrician, emergency electrician, panel upgrade, electrical repair, commercial electrician',
  openGraph: {
    title: '[Company Name] | Licensed Electrician in [City], [State]',
    description: 'Licensed electrical contractor. 24/7 emergency service, residential & commercial. Free estimates.',
    type: 'website',
  },
}

export default function ElectricianLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      {children}
    </>
  )
}
