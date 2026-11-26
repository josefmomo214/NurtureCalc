import { Metadata } from 'next';
import BabyWeightPercentileContent from './BabyWeightPercentileContent';

export const metadata: Metadata = {
  title: 'Baby Weight Percentile Information & WHO Growth Standards | NurtureCalc',
  description: "Learn about baby weight percentiles and WHO growth standards for infant development. (Calculator temporarily unavailable during reference data verification).",
  alternates: {
    canonical: '/baby-weight-percentile',
  },
  openGraph: {
    title: 'Baby Weight Percentile Information & WHO Growth Standards | NurtureCalc',
    description: 'Learn about baby weight percentiles and WHO growth standards for infant development.',
    url: 'https://nurturecalc.com/baby-weight-percentile',
    type: 'website',
  },
};

export default function BabyWeightPercentile() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a healthy weight percentile for a baby?",
        "acceptedAnswer": { "@type": "Answer", "text": "Any percentile from the 3rd to the 97th can be healthy for an individual baby. There is no single ideal percentile. What matters most is that your baby follows a consistent curve over time and is feeding well." }
      }
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nurturecalc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Baby Weight Percentile Information", "item": "https://nurturecalc.com/baby-weight-percentile/" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BabyWeightPercentileContent />
    </>
  );
}
