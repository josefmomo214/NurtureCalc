import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact NurtureCalc — We\'re Here to Listen',
  description: 'Have a question or feedback about our postpartum calculators? Get in touch with the NurtureCalc team.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact NurtureCalc — We\'re Here to Listen',
    description: 'Have a question or feedback about our postpartum calculators? Get in touch with the NurtureCalc team.',
    url: 'https://nurturecalc.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6">
        <section className="space-y-12">
          {/* Hero */}
          <header className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-6xl tracking-tight text-[#3D2C2C] font-serif">
              Contact <span className="text-[#E8A0A8] italic">NurtureCalc</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#3D2C2C]/60 font-serif leading-relaxed max-w-2xl mx-auto">
              We're here to listen
            </p>
          </header>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(232,160,168,0.1)] border border-[#E8A0A8]/10 space-y-8 text-center max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-[#3D2C2C]/80 leading-relaxed font-serif">
              Have a question about our calculators? Found a bug? Just want to share your postpartum journey? We'd love to hear from you.
            </p>

            <div className="pt-4">
              <span className="block font-label text-xs font-bold text-[#E8A0A8] uppercase tracking-widest mb-2">Email us at</span>
              <a 
                href="mailto:hello@nurturecalc.com" 
                className="text-2xl md:text-3xl font-serif text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors underline decoration-[#E8A0A8]/30 underline-offset-8"
              >
                hello@nurturecalc.com
              </a>
            </div>

            <div className="pt-12 border-t border-[#E8A0A8]/10">
              <p className="text-sm text-[#3D2C2C]/50 italic leading-relaxed">
                <strong>Please note:</strong> We cannot provide individual medical advice. If you are experiencing a medical emergency or have urgent concerns about your or your baby's health, please contact a healthcare professional or emergency services immediately.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
