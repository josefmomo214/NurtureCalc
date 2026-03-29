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
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6">
        <article className="space-y-16">
          <header className="space-y-6 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl tracking-tight text-[#3D2C2C] font-serif">
              The NurtureCalc Team
            </h1>
            <p className="text-[#E8A0A8] text-xl md:text-2xl font-serif italic">
              Written with care. Grounded in science.
            </p>
          </header>

          {/* Team Member Card */}
          <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#E8A0A8]/10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-20 h-20 rounded-full bg-[#FCE4E8] flex-shrink-0 flex items-center justify-center text-[#E8A0A8] text-xl font-bold">
              {/* Profile Image Placeholder */}
              [P]
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div>
                <h2 className="text-2xl font-serif text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors cursor-default">
                  NurtureCalc Team
                </h2>
                <p className="font-label text-xs font-bold tracking-widest text-[#E8A0A8] uppercase">
                  Founder of NurtureCalc | Passionate about evidence-based postpartum care
                </p>
              </div>
              <p className="text-[#3D2C2C]/70 leading-relaxed">
                NurtureCalc was built out of a simple belief — that every new mother deserves clear, trustworthy answers about her own recovery. We created these free tools so you never have to piece together conflicting advice from unreliable sources again. Every calculator on this site is grounded in published medical guidelines and presented in plain, human language.
              </p>
            </div>
          </section>

          {/* Sources & Standards */}
          <section className="space-y-8">
            <h2 className="text-3xl font-serif text-[#3D2C2C] text-center md:text-left">Our Sources & Standards</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "WHO Multicentre Growth Reference Study (baby weight charts)",
                "Mifflin-St Jeor metabolic formula (calorie calculations)",
                "ACOG Postpartum Guidelines (exercise and weight loss timelines)",
                "Academy of Breastfeeding Medicine protocols (breastfeeding calorie data)",
                "POGP Return-to-Exercise Guidelines (pelvic floor and exercise)"
              ].map((source, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-[#E8A0A8]/10 text-[#3D2C2C]/80">
                  <span className="text-[#E8A0A8] mt-1">•</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Medical Review Policy */}
          <section className="bg-[#FCE4E8]/30 p-8 md:p-12 rounded-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Medical Review Policy</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed italic">
              All content on NurtureCalc is based on published medical guidelines from the sources listed above. Our calculators are reviewed periodically to reflect updated guidance. NurtureCalc is an informational resource and does not replace advice from your healthcare provider.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
