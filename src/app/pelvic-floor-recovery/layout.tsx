import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pelvic Floor Recovery Estimator — NurtureCalc',
  description: 'A gentle quiz to estimate your pelvic floor recovery stage after birth. Get personalised guidance and know when to seek support.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/pelvic-floor',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
