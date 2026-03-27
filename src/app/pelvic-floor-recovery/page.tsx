import { Metadata } from 'next';
import PelvicFloorRecoveryContent from './PelvicFloorRecoveryContent';

export const metadata: Metadata = {
  title: 'Postpartum Pelvic Floor Recovery Estimator | NurtureCalc',
  description: 'Take our gentle pelvic floor quiz designed for new mothers. Understand where you are in your healing journey and what to focus on next. Free, no sign-up required.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/pelvic-floor-recovery',
  },
};

export default function PelvicFloorRecovery() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does pelvic floor recovery take after birth?",
        "acceptedAnswer": { "@type": "Answer", "text": "Pelvic floor recovery varies widely. Many mothers see significant improvement within 3 to 6 months with consistent exercises, but some symptoms may take longer and benefit from physiotherapy." }
      },
      {
        "@type": "Question",
        "name": "Is it normal to leak urine after having a baby?",
        "acceptedAnswer": { "@type": "Answer", "text": "Stress urinary incontinence is very common after birth, affecting up to 1 in 3 mothers. It is not something you simply have to accept — pelvic floor exercises and physiotherapy are highly effective." }
      },
      {
        "@type": "Question",
        "name": "Do I need to do pelvic floor exercises after a C-section?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Nine months of pregnancy places significant load on the pelvic floor regardless of delivery method. C-section mothers benefit just as much from pelvic floor rehabilitation." }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PelvicFloorRecoveryContent />
    </>
  );
}
