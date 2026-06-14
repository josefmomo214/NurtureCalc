import { Metadata } from 'next';
import SafeWeightLossContent from './SafeWeightLossContent';

export const metadata: Metadata = {
  title: 'Safe Postpartum Weight Loss Calculator | NurtureCalc',
  description: 'Find your safe weekly weight loss rate while breastfeeding. Our free calculator accounts for your weeks postpartum and feeding status. No sign-up required.',
  alternates: {
    canonical: '/safe-weight-loss',
  },
  openGraph: {
    title: 'Safe Postpartum Weight Loss Calculator | NurtureCalc',
    description: 'Find your safe weekly weight loss rate while breastfeeding. Our free calculator accounts for your weeks postpartum and feeding status.',
    url: 'https://nurturecalc.com/safe-weight-loss',
    type: 'website',
  },
};

export default function SafeWeightLoss() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much weight do you lose immediately after giving birth?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most mothers lose 5–6 kg immediately after delivery — the baby's weight, placenta, and amniotic fluid. An additional 2–3 kg of fluid is typically lost in the first week through sweat and increased urination." }
      },
      {
        "@type": "Question",
        "name": "Is it normal not to lose weight while breastfeeding?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Prolactin, the hormone that drives milk production, can cause the body to retain fat stores as a protective mechanism. Weight loss often stalls during exclusive breastfeeding and accelerates after introducing solids or weaning." }
      },
      {
        "@type": "Question",
        "name": "Why am I gaining weight postpartum instead of losing?",
        "acceptedAnswer": { "@type": "Answer", "text": "Common causes include high cortisol from sleep deprivation, under-eating which slows metabolism, postpartum thyroiditis, and fluid retention. If unexplained weight gain persists beyond 3 months, discuss it with your doctor." }
      },
      {
        "@type": "Question",
        "name": "Does breastfeeding help you lose weight?",
        "acceptedAnswer": { "@type": "Answer", "text": "It can, but not immediately and not for everyone. Breastfeeding burns approximately 400–500 extra calories per day, but prolactin promotes fat retention in many women. Most mothers see more noticeable loss after 3–6 months." }
      },
      {
        "@type": "Question",
        "name": "What is the fastest safe way to lose weight after having a baby?",
        "acceptedAnswer": { "@type": "Answer", "text": "There is no shortcut that is both fast and safe postpartum. A moderate calorie reduction of 250–500 kcal below your TDEE after 12 weeks, combined with gradual return to exercise, is the most effective approach." }
      }
    ]
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Safe Postpartum Weight Loss Calculator",
    "description": "Calculate a safe weekly weight loss rate after birth that protects your milk supply and supports postpartum recovery.",
    "url": "https://nurturecalc.com/safe-weight-loss/",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nurturecalc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Safe Postpartum Weight Loss Calculator", "item": "https://nurturecalc.com/safe-weight-loss/" }
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
      <SafeWeightLossContent />
    </>
  );
}
