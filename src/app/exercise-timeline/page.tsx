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
        "name": "When can I start exercising again after a C-section?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most doctors recommend waiting 6 to 8 weeks before starting anything beyond gentle walking, as your body needs time to heal from major abdominal surgery." }
      },
      {
        "@type": "Question",
        "name": "Is it safe to run 6 weeks after giving birth?",
        "acceptedAnswer": { "@type": "Answer", "text": "Clinical guidelines generally recommend waiting 12 weeks before returning to high-impact activities like running, to allow the pelvic floor and core to regain sufficient strength." }
      },
      {
        "@type": "Question",
        "name": "What are red flags to stop exercising postpartum?",
        "acceptedAnswer": { "@type": "Answer", "text": "Stop exercising and see a professional if you experience leaking, pelvic heaviness, pain at the incision site, or a sudden increase in vaginal bleeding." }
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
    "operatingSystem": "All",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
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
      <ExerciseTimelineContent />
    </>
  );
}
