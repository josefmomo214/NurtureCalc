import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NurtureCalc — Our Mission & How Our Tools Work',
  description: 'Learn how NurtureCalc\'s free postpartum calculators are built, what medical guidelines they use, and the team behind them.',
  alternates: {
    canonical: '/author/nurturecalc-team',
  },
  openGraph: {
    title: 'About NurtureCalc — Our Mission & How Our Tools Work',
    description: 'Learn how NurtureCalc\'s free postpartum calculators are built, what medical guidelines they use, and the team behind them.',
    url: 'https://nurturecalc.com/author/nurturecalc-team',
    type: 'website',
  },
};

export default function AuthorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "NurtureCalc Editorial Team",
    "url": "https://nurturecalc.com/author/nurturecalc-team/",
    "description": "A group of health researchers and postnatal specialists dedicated to providing evidence-based recovery tools for new mothers."
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6">
        <article className="space-y-16">
          <header className="space-y-6 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl tracking-tight text-[#3D2C2C] font-serif">
              The NurtureCalc Team
            </h1>
            <p className="text-[#E8A0A8] text-xl md:text-2xl font-serif italic">
              Evidence-based health information for every stage of motherhood.
            </p>
          </header>

          {/* Team Methodology */}
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#E8A0A8]/10 space-y-6">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Our Content Methodology</h2>
            <p className="text-[#3D2C2C]/70 leading-relaxed">
              The NurtureCalc Editorial Team consists of health researchers and content specialists committed to educational transparency. We don't believe in "one-size-fits-all" advice; instead, we provide the data you need to understand your own body's recovery benchmarks.
            </p>
            <p className="text-[#3D2C2C]/70 leading-relaxed">
              Every tool and calculator on this site is built using validated clinical formulas and reviewed against current guidelines from established medical bodies. You can read more about our process in our <a href="/editorial-standards" className="text-[#E8A0A8] hover:underline font-bold">Editorial Standards</a>.
            </p>
          </section>

          {/* Primary Sources */}
          <section className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-serif text-[#3D2C2C]">Primary Clinical Sources</h2>
              <p className="text-[#3D2C2C]/60 mt-2">We rely on data from these leading health organizations:</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "World Health Organization (WHO) Growth References",
                "National Health Service (NHS) Postnatal Pathways",
                "American College of Obstetricians and Gynecologists (ACOG)",
                "Academy of Breastfeeding Medicine (ABM)",
                "La Leche League International",
                "Peer-Reviewed Medical Journals (The Lancet, JOGNN)"
              ].map((source, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-[#E8A0A8]/10 text-[#3D2C2C]/80">
                  <span className="text-[#E8A0A8] mt-1">•</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Advisory Note */}
          <section className="bg-[#FCE4E8]/30 p-8 md:p-12 rounded-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Trust & Transparency</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed italic">
              Our team manually verifies every clinical formula integrated into our calculators. We cite our sources transparently so you can verify the data for yourself. NurtureCalc remains an independent resource specifically designed to support, not replace, the relationship between a patient and their doctor.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
