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
        "name": "How many calories should I eat per day while breastfeeding?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most breastfeeding mothers need 2,200–2,500 calories per day depending on size and activity level. Exclusively breastfeeding adds roughly 500 calories above pre-pregnancy maintenance. Use the calculator for a personalised figure." }
      },
      {
        "@type": "Question",
        "name": "Can I diet while breastfeeding?",
        "acceptedAnswer": { "@type": "Answer", "text": "A moderate calorie reduction is possible after breastfeeding is well established, usually around 8–12 weeks postpartum. Most guidelines recommend not going below 1,500 kcal per day. Aggressive dieting risks reducing milk supply." }
      },
      {
        "@type": "Question",
        "name": "Does eating more actually increase milk supply?",
        "acceptedAnswer": { "@type": "Answer", "text": "Eating enough protects your supply but does not increase it beyond your baby's demand. Milk supply is driven primarily by how frequently the breast is emptied. Under-eating can reduce supply, but eating above your needs will not produce more milk." }
      },
      {
        "@type": "Question",
        "name": "Do I need to eat differently when pumping compared to direct nursing?",
        "acceptedAnswer": { "@type": "Answer", "text": "Calorie needs are similar whether you nurse directly or pump, provided your total milk output is equivalent. The key variable is your total daily milk production volume, not the method of delivery." }
      },
      {
        "@type": "Question",
        "name": "When do breastfeeding calorie needs decrease?",
        "acceptedAnswer": { "@type": "Answer", "text": "Calorie needs reduce gradually as your baby introduces solid foods around 6 months. By 12 months, if nursing less frequently, your extra calorie requirement may be closer to 200–300 kcal above baseline rather than 500." }
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
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nurturecalc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Breastfeeding Calorie Calculator", "item": "https://nurturecalc.com/breastfeeding-calories/" }
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
      <BreastfeedingCaloriesContent />
    </>
  );
}
