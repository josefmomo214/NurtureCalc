import { Metadata } from 'next';
import BabyWeightPercentileContent from './BabyWeightPercentileContent';

export const metadata: Metadata = {
  title: 'Baby Weight Percentile Calculator (WHO Charts) | NurtureCalc',
  description: 'Instantly check your baby\'s weight against WHO growth charts. Free, no sign-up required. Works for boys and girls from 0 to 52 weeks.',
  alternates: {
    canonical: '/baby-weight-percentile',
  },
  openGraph: {
    title: 'Baby Weight Percentile Calculator (WHO Charts) | NurtureCalc',
    description: 'Instantly check your baby\'s weight against WHO growth charts. Free, no sign-up required.',
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
        "acceptedAnswer": { "@type": "Answer", "text": "Any percentile between the 3rd and 97th is generally considered within the normal range, provided the baby is meeting milestones and following their growth curve." }
      },
      {
        "@type": "Question",
        "name": "Is the 50th percentile the 'ideal' weight?",
        "acceptedAnswer": { "@type": "Answer", "text": "No, the 50th percentile is simply the mathematical average. A baby in the 10th percentile can be just as healthy as a baby in the 90th percentile." }
      },
      {
        "@type": "Question",
        "name": "Why does my pediatrician use WHO growth charts?",
        "acceptedAnswer": { "@type": "Answer", "text": "The World Health Organization (WHO) charts are the global standard for babies under two, as they reflect how healthy, breastfed babies grow under optimal conditions." }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BabyWeightPercentileContent />
    </>
  );
}
