import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safe Postpartum Weight Loss Calculator — NurtureCalc',
  description: 'Find your safe weekly weight loss rate after birth. Takes into account breastfeeding and weeks postpartum. Free and science-based.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/safe-weight-loss',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
