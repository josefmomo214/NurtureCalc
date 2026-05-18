import { Metadata } from 'next';
import BreastfeedingCaloriesContent from './BreastfeedingCaloriesContent';

export const metadata: Metadata = {
  title: 'How Many Calories Do You Burn Breastfeeding? Free Calculator',
  description: 'Find out exactly how many extra calories your body burns each day while breastfeeding. Enter your stats for a free personalised result — no sign-up needed.',
  alternates: {
    canonical: '/breastfeeding-calories',
  },
  openGraph: {
    title: 'How Many Calories Do You Burn Breastfeeding? Free Calculator',
    description: 'Find out exactly how many extra calories your body burns each day while breastfeeding. Enter your stats for a free personalised result — no sign-up needed.',
    url: 'https://nurturecalc.com/breastfeeding-calories',
    type: 'website',
  },
};

export default function BreastfeedingCalories() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many extra calories do I need while breastfeeding?",
        "acceptedAnswer": { "@type": "Answer", "text": "A mother exclusively breastfeeding typically needs an extra 450 to 500 calories per day to maintain her energy and milk supply." }
      },
      {
        "@type": "Question",
        "name": "Can I eat less to lose weight while nursing?",
        "acceptedAnswer": { "@type": "Answer", "text": "It is generally recommended not to drop below 1,800 calories per day while breastfeeding, as this can cause a significant decrease in milk supply and leave you feeling exhausted." }
      },
      {
        "@type": "Question",
        "name": "What are the best foods for breastfeeding nutrition?",
        "acceptedAnswer": { "@type": "Answer", "text": "Prioritize nutrient-dense foods like leafy greens, lean proteins, oats, avocados, and salmon, which provide essential fats for your baby's brain development." }
      }
    ]
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Breastfeeding Calorie Calculator",
    "description": "Calculate how many extra calories you need while breastfeeding based on your weight, activity level, and nursing frequency.",
    "url": "https://nurturecalc.com/breastfeeding-calories/",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
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
      <BreastfeedingCaloriesContent />
    </>
  );
}
