import { Metadata } from 'next';
import SafeWeightLossContent from './SafeWeightLossContent';

export const metadata: Metadata = {
  title: 'Safe Postpartum Weight Loss Calculator | NurtureCalc',
  description: 'Find your safe weekly weight loss rate while breastfeeding. Our free calculator accounts for your weeks postpartum and feeding status. No sign-up required.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/safe-weight-loss',
  },
};

export default function SafeWeightLoss() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much weight can I safely lose per week while breastfeeding?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most healthcare providers recommend no more than 0.5kg (1lb) per week while breastfeeding, to protect your milk supply and energy levels." }
      },
      {
        "@type": "Question",
        "name": "When can I start trying to lose weight after having a baby?",
        "acceptedAnswer": { "@type": "Answer", "text": "Medical guidelines recommend waiting at least 6 to 8 weeks postpartum before consciously restricting calories, to allow time to heal and establish milk supply." }
      },
      {
        "@type": "Question",
        "name": "Does breastfeeding help you lose weight?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, breastfeeding burns approximately 500 extra calories per day, which can assist with postpartum weight loss, provided you are eating a balanced diet." }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SafeWeightLossContent />
    </>
  );
}
