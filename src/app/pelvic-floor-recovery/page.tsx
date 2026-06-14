import { Metadata } from 'next';
import PelvicFloorRecoveryContent from './PelvicFloorRecoveryContent';

export const metadata: Metadata = {
  title: 'Pelvic Floor After Birth: Free Recovery Quiz | NurtureCalc',
  description: 'Take our 2-minute pelvic floor quiz and find out where you are in your postpartum recovery. Get a personalised plan based on your birth type and symptoms.',
  alternates: {
    canonical: '/pelvic-floor-recovery',
  },
  openGraph: {
    title: 'Pelvic Floor After Birth: Free Recovery Quiz | NurtureCalc',
    description: 'Take our 2-minute pelvic floor quiz and find out where you are in your postpartum recovery. Get a personalised plan based on your birth type and symptoms.',
    url: 'https://nurturecalc.com/pelvic-floor-recovery',
    type: 'website',
  },
};

export default function PelvicFloorRecovery() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I know if my pelvic floor is recovering well?",
        "acceptedAnswer": { "@type": "Answer", "text": "Signs of good recovery include no leaking during daily activities, no pelvic heaviness or pressure, comfortable return to intercourse when ready, and no pain during normal movement. A physiotherapist can give you a clear baseline assessment." }
      },
      {
        "@type": "Question",
        "name": "Is it normal to leak urine after having a baby?",
        "acceptedAnswer": { "@type": "Answer", "text": "Leaking is common but not something you must accept permanently. Stress incontinence affects many postpartum women but responds well to targeted rehabilitation. If leaking persists beyond 3 months, seek assessment from a pelvic floor physiotherapist." }
      },
      {
        "@type": "Question",
        "name": "When should I start Kegel exercises after birth?",
        "acceptedAnswer": { "@type": "Answer", "text": "Gentle pelvic floor activation can begin within the first few days after a vaginal birth, once pain has settled. After a C-section, most physiotherapists recommend starting around week 2-3, focusing on releasing and relaxing as much as contracting." }
      },
      {
        "@type": "Question",
        "name": "Can pelvic floor problems resolve on their own without treatment?",
        "acceptedAnswer": { "@type": "Answer", "text": "Mild symptoms often improve in the first 3-6 months. However, moderate to severe symptoms such as prolapse, significant incontinence, or persistent pain rarely resolve completely without guided rehabilitation. Early intervention produces better outcomes." }
      },
      {
        "@type": "Question",
        "name": "What is a pelvic floor physiotherapist and do I need one?",
        "acceptedAnswer": { "@type": "Answer", "text": "A pelvic floor physiotherapist assesses and treats pelvic floor dysfunction using internal examinations to gauge muscle function. Most postpartum women benefit from at least one assessment, even without symptoms, to establish a rehabilitation baseline." }
      }
    ]
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Postpartum Pelvic Floor Recovery Estimator",
    "description": "Estimate your postpartum pelvic floor recovery timeline and get personalised guidance based on your birth type and symptoms.",
    "url": "https://nurturecalc.com/pelvic-floor-recovery/",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nurturecalc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Pelvic Floor Recovery Quiz", "item": "https://nurturecalc.com/pelvic-floor-recovery/" }
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
      <PelvicFloorRecoveryContent />
    </>
  );
}
