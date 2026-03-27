import { Metadata } from 'next';
import BreastfeedingCaloriesContent from './BreastfeedingCaloriesContent';

export const metadata: Metadata = {
  title: 'Breastfeeding Calorie Calculator — How Much Do You Need? | NurtureCalc',
  description: 'Discover exactly how many extra calories your body needs while breastfeeding. Personalised to your weight, height, activity level and feeding method. Free, no sign-up required.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/breastfeeding-calories',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreastfeedingCaloriesContent />
    </>
  );
}
