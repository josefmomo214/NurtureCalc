import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Return to Exercise After Birth Calculator — NurtureCalc',
  description: 'Find out when it\'s safe to return to exercise after giving birth. Personalised timeline based on delivery type, weeks postpartum, and symptoms.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/exercise-timeline',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
