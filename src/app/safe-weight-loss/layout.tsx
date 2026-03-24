import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safe Postpartum Weight Loss Calculator | NurtureCalc',
  description: 'Find your safe weekly weight loss rate while breastfeeding. Our free calculator accounts for your weeks postpartum and feeding status. No sign-up required.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/safe-weight-loss',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
