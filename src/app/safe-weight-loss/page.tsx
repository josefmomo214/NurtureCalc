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
