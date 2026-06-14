import { Metadata } from 'next';
import BabyWeightPercentileContent from './BabyWeightPercentileContent';

export const metadata: Metadata = {
  title: 'Baby Weight Percentile Calculator (WHO Charts) | NurtureCalc',
  description: "Calculate your baby's weight percentile using WHO growth charts. Track growth from birth to 24 months and understand what the numbers mean.",
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
        "acceptedAnswer": { "@type": "Answer", "text": "Any percentile from the 3rd to the 97th can be healthy for an individual baby. There is no single ideal percentile. What matters most is that your baby follows a consistent curve over time and is feeding well, producing adequate wet nappies, and meeting developmental milestones." }
      },
      {
        "@type": "Question",
        "name": "My baby dropped from the 60th to the 30th percentile. Should I be worried?",
        "acceptedAnswer": { "@type": "Answer", "text": "A drop of this size warrants a conversation with your health visitor or paediatrician, but does not automatically indicate a problem. Some percentile movement in early months is normal as babies settle onto their natural growth curve." }
      },
      {
        "@type": "Question",
        "name": "Do breastfed babies weigh less than formula-fed babies?",
        "acceptedAnswer": { "@type": "Answer", "text": "Breastfed babies gain weight more quickly in the first 3 months then slightly more slowly from 3 to 6 months. The WHO charts are based on breastfed baby data. Older chart systems can make breastfed babies appear to grow too slowly after 3 months." }
      },
      {
        "@type": "Question",
        "name": "How often should I weigh my baby?",
        "acceptedAnswer": { "@type": "Answer", "text": "Health visitors typically recommend weighing no more than once a month after the first few weeks, once initial weight loss has been regained. Frequent weighing can increase parental anxiety without providing clinically useful additional information." }
      },
      {
        "@type": "Question",
        "name": "My baby was premature. How do I use this calculator?",
        "acceptedAnswer": { "@type": "Answer", "text": "For premature babies, use corrected age rather than actual age — subtract the number of weeks early from their current age. A 4-month-old born 8 weeks early should be plotted as a 2-month-old. Most clinicians use corrected age until age 2." }
      }
    ]
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Baby Weight Percentile Calculator",
    "description": "Calculate your baby's weight percentile using WHO growth charts. Works for newborns through 24 months.",
    "url": "https://nurturecalc.com/baby-weight-percentile/",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nurturecalc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Baby Weight Percentile Calculator", "item": "https://nurturecalc.com/baby-weight-percentile/" }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BabyWeightPercentileContent />
    </>
  );
}
