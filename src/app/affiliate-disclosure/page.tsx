import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Affiliate Disclosure | NurtureCalc",
  description: "NurtureCalc's affiliate disclosure — how we handle affiliate links and our commitment to honest recommendations.",
  alternates: {
    canonical: "/affiliate-disclosure",
  }
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6">
        <article className="prose prose-rose lg:prose-xl max-w-none text-[#3D2C2C]/80 font-sans leading-relaxed">
          <header className="mb-12 border-b border-[#E8A0A8]/20 pb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D2C2C] leading-tight">
              Affiliate Disclosure
            </h1>
          </header>

          <section className="bg-white p-8 md:p-12 rounded-[2rem] border border-[#E8A0A8]/10 shadow-sm text-lg leading-relaxed space-y-6">
            <p>
              Some links on NurtureCalc.com are affiliate links. This means that if you click a link and make a purchase, we may earn a small commission — at no additional cost to you.
            </p>
            <p>
              We only recommend products we genuinely believe are helpful to new mothers. Our editorial content and calculator results are never influenced by affiliate relationships.
            </p>
            <p className="font-medium text-[#E8A0A8]">
              Thank you for supporting NurtureCalc — your support helps us keep all our tools and content completely free.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
