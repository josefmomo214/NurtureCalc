import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Postpartum Pelvic Floor Recovery Estimator | NurtureCalc',
  description: 'Take our gentle pelvic floor quiz designed for new mothers. Understand where you are in your healing journey and what to focus on next. Free, no sign-up required.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/pelvic-floor',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
