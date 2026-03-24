import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Breastfeeding Calorie Calculator — How Much Do You Need? | NurtureCalc',
  description: 'Discover exactly how many extra calories your body needs while breastfeeding. Personalised to your weight, height, activity level and feeding method. Free, no sign-up required.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/breastfeeding-calories',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
