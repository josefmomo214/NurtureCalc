import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Standards & Review Process | NurtureCalc',
  description: 'How NurtureCalc creates evidence-based health content for mothers and families. Learn about our medical review process and source standards.',
  alternates: {
    canonical: '/editorial-standards',
  },
};

export default function EditorialStandardsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Editorial Standards & Review Process",
    "description": "Information about NurtureCalc's editorial guidelines, medical review process, and sourcing standards for postpartum health content.",
    "url": "https://nurturecalc.com/editorial-standards"
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6">
        <article className="prose prose-rose lg:prose-xl max-w-none text-[#3D2C2C]/80 font-sans leading-relaxed">
          <header className="mb-16 not-prose border-b border-[#E8A0A8]/20 pb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-[#3D2C2C] leading-tight mb-6">
              Editorial Standards & <span className="text-[#E8A0A8] italic">Review Process</span>
            </h1>
            <p className="text-[#E8A0A8] text-xl font-serif italic">
              Transparency, accuracy, and evidence-based guidance.
            </p>
          </header>

          <section className="space-y-6">
            <p className="text-xl font-serif italic text-[#3D2C2C] mb-8 border-l-4 border-[#E8A0A8]/30 pl-8 py-2">
              At NurtureCalc, we believe that every new mother deserves clear, trustworthy answers. Our goal is to simplify complex health data without sacrificing medical accuracy.
            </p>

            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-12 mb-6">Our Sourcing Standards</h2>
            <p>
              Every piece of content on NurtureCalc is grounded in academic and clinical research. We prioritize high-integrity, peer-reviewed sources and guidelines from global health authorities, including:
            </p>
            <ul>
              <li><strong>World Health Organization (WHO)</strong> guidelines on infant growth and nutrition.</li>
              <li><strong>National Health Service (NHS)</strong> clinical pathways for postnatal recovery.</li>
              <li><strong>American College of Obstetricians and Gynecologists (ACOG)</strong> clinical updates.</li>
              <li><strong>Academy of Breastfeeding Medicine (ABM)</strong> protocols.</li>
              <li>Published research in peer-reviewed journals such as <em>The Lancet</em> and the <em>Journal of Obstetric, Gynecologic & Neonatal Nursing</em>.</li>
            </ul>

            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-12 mb-6">Medical Review & Accuracy</h2>
            <p>
              Our calculators and articles are built using established clinical parameters—such as the Mifflin-St Jeor formula for metabolic calculations and WHO multicentre growth reference studies for percentile tracking.
            </p>
            <p>
              <strong>Policy on Medical Information:</strong> We do not offer personal medical diagnoses. Instead, we use established clinical guidelines to provide informational ranges and timelines that help you talk to your own doctor with more confidence.
            </p>

            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-12 mb-6">Content Update Policy</h2>
            <p>
              Medical guidance evolves. To ensure you are receiving the most current information, our core clinical pages and calculators undergo a thorough review <strong>every 6 months</strong>. If a major health body (like the WHO or ACOG) issues a significant guideline change, we prioritize updating affected content within 30 days.
            </p>

            <div className="bg-[#FCE4E8]/30 p-8 md:p-12 rounded-3xl mt-12 not-prose border border-[#E8A0A8]/10">
              <h2 className="text-2xl font-serif text-[#3D2C2C] mb-4 text-center">Medical Disclaimer</h2>
              <p className="text-[#3D2C2C]/80 leading-relaxed italic text-center">
                NurtureCalc is an informational resource. The content and tools provided are for educational purposes only and are <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
