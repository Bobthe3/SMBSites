import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Claude Supply',
  description: 'Browse our portfolio of custom websites for restaurants, bakeries, and local businesses. Real projects, real results.',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
