import { Metadata } from 'next';
import ExerciseTimelineContent from './ExerciseTimelineContent';

export const metadata: Metadata = {
  title: 'Postpartum Exercise Timeline Calculator | NurtureCalc',
  description: 'Get a personalised exercise return timeline based on your delivery type and symptoms. Safe, science-backed guidance for returning to fitness after birth. Free, no sign-up required.',
  alternates: {
    canonical: '/exercise-timeline',
  },
  openGraph: {
    title: 'Postpartum Exercise Timeline Calculator | NurtureCalc',
    description: 'Get a personalised exercise return timeline based on your delivery type and symptoms. Safe, science-backed guidance for returning to fitness after birth.',
    url: 'https://nurturecalc.com/exercise-timeline',
    type: 'website',
  },
};

export default function ExerciseTimeline() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When can I start exercising after a vaginal birth?",
        "acceptedAnswer": { "@type": "Answer", "text": "Gentle walking can begin within the first week if comfortable and complication-free. Structured exercise should wait until at least 6 weeks. High-impact activities like running should not begin before 12 weeks and only when symptom-free." }
      },
      {
        "@type": "Question",
        "name": "When can I start exercising after a C-section?",
        "acceptedAnswer": { "@type": "Answer", "text": "Short gentle walks are appropriate from around day 3-7 post-surgery. Low-impact exercise can begin at 8-10 weeks once the wound is healed. Running and high-impact training should wait until at least 12-16 weeks." }
      },
      {
        "@type": "Question",
        "name": "Can I do sit-ups or crunches postpartum?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sit-ups and crunches are not recommended early postpartum. They increase intra-abdominal pressure that stresses the healing linea alba and can worsen diastasis recti. Start with breathing and stability exercises first." }
      },
      {
        "@type": "Question",
        "name": "Is it safe to run while breastfeeding?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, running while breastfeeding is safe once ready — typically no earlier than 12 weeks postpartum for a vaginal birth. Be aware that relaxin may still be elevated while breastfeeding, increasing joint laxity and injury risk." }
      },
      {
        "@type": "Question",
        "name": "How do I know if I am returning to exercise too soon?",
        "acceptedAnswer": { "@type": "Answer", "text": "The clearest signs are leaking urine, pelvic heaviness, pain at the incision site, abdominal doming during exertion, or return of bright red postpartum bleeding. Reduce intensity and see a pelvic floor physiotherapist." }
      }
    ]
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Postpartum Exercise Timeline Calculator",
    "description": "Get a personalised week-by-week exercise timeline for returning to fitness after birth based on your delivery type and recovery.",
    "url": "https://nurturecalc.com/exercise-timeline/",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nurturecalc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Postpartum Exercise Timeline Calculator", "item": "https://nurturecalc.com/exercise-timeline/" }
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
      <ExerciseTimelineContent />
    </>
  );
}
