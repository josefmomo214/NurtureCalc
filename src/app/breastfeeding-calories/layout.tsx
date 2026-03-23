import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Breastfeeding Calorie Needs Calculator — NurtureCalc',
  description: 'Estimate how many calories you need each day while breastfeeding. Based on the Mifflin-St Jeor formula and WHO breastfeeding guidelines.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/breastfeeding-calories',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
