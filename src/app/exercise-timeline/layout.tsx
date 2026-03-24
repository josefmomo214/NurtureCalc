import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Postpartum Exercise Timeline Calculator | NurtureCalc',
  description: 'Get a personalised exercise return timeline based on your delivery type and symptoms. Safe, science-backed guidance for returning to fitness after birth. Free, no sign-up required.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/exercise-timeline',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
