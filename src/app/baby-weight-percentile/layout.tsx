import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baby Weight Percentile Calculator (WHO Charts) | NurtureCalc',
  description: 'Instantly check your baby\'s weight against WHO growth charts. Free, no sign-up required. Works for boys and girls from 0 to 24 months.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/baby-weight',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
