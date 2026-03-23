import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baby Weight Percentile Calculator — NurtureCalc',
  description: 'Check your baby\'s weight percentile using WHO growth standards. Enter age, weight, and sex for an instant result with a clear explanation.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/baby-weight',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
