import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { babyWeightContent } from "./content";

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/how-long-to-lose-baby-weight',
  },
  title: "How Long Does It Take to Lose the Baby Weight? (An Honest Answer) | NurtureCalc",
  description: "Most mothers wonder how long postpartum weight loss really takes. An honest, science-based answer with realistic timelines for breastfeeding and non-breastfeeding mothers.",
};

export default function BlogPost() {
  const c = babyWeightContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "An honest, science-based look at the postpartum weight loss timeline, addressing the differences between breastfeeding and non-breastfeeding mothers, hormonal impacts, and realistic expectations.",
    "author": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com/author/nurturecalc-team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nurturecalc.com/logo.png"
      }
    },
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/how-long-to-lose-baby-weight"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const renderStrong = (text: string) => <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6">
        <article className="prose prose-rose lg:prose-xl max-w-none text-[#3D2C2C]/80 font-sans leading-relaxed">
          
          <header className="mb-16 not-prose border-b border-[#E8A0A8]/20 pb-12 text-center">
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3">
                <span className="bg-[#F9E4E8] text-[#D58A92] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-label">{c.header.category}</span>
                <span className="text-xs text-[#3D2C2C]/50 font-label tracking-wide uppercase">{c.header.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#3D2C2C] leading-tight mb-6">
                {c.header.title} <span className="text-[#E8A0A8] italic text-3xl md:text-5xl block mt-2">{c.header.subtitle}</span>
              </h1>
              <div className="flex flex-col items-center gap-2">
                <Link href="/author/nurturecalc-team" className="text-sm font-label font-bold tracking-wide text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors">
                  {c.header.author}
                </Link>
                <p className="text-[10px] text-[#3D2C2C]/50 font-label tracking-wide uppercase max-w-xs mx-auto">
                  {c.header.reviewNote}
                </p>
              </div>
            </div>
          </header>

          <section>
            <p className="text-xl md:text-2xl font-serif italic text-[#3D2C2C] mb-10 leading-relaxed border-l-4 border-[#E8A0A8]/30 pl-8 py-2">
              {c.intro.quote}
            </p>
            <p>{c.intro.p1}</p>
            <p>{c.intro.p2}</p>
            <p>{c.intro.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">{c.immediateLoss.title}</h2>
            <p>{c.immediateLoss.p1}</p>
            <p>{renderStrong(c.immediateLoss.p2)}</p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              {c.immediateLoss.items.map((item, idx) => (
                <li key={idx}><strong>{item.label}:</strong> {item.value}</li>
              ))}
            </ul>
            <p>{c.immediateLoss.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">{c.weeks1to6.title}</h2>
            <p>{c.weeks1to6.p1}</p>
            <p>{renderStrong(c.weeks1to6.p2)}</p>
            <p>{c.weeks1to6.p3}</p>
            <p>{renderStrong(c.weeks1to6.p4)}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">{c.months2to6.title}</h2>
            <p>{c.months2to6.p1}</p>
            <p>{renderStrong(c.months2to6.p2)}</p>
            <p>{c.months2to6.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">{c.breastfeedingFactors.title}</h2>
            <p>{c.breastfeedingFactors.p1}</p>
            <p>{renderStrong(c.breastfeedingFactors.nursing)}</p>
            <p>{renderStrong(c.breastfeedingFactors.formula)}</p>
            <p>{c.breastfeedingFactors.conclusion}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">{c.individualVariables.title}</h2>
            <p>{c.individualVariables.p1}</p>
            <ul className="list-disc pl-6 space-y-4 mb-10">
              {c.individualVariables.items.map((item, idx) => (
                <li key={idx}><strong>{item.label}:</strong> {item.value}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">{c.theLast5kg.title}</h2>
            <p>{c.theLast5kg.p1}</p>
            <p>{c.theLast5kg.p2}</p>
            <p>{renderStrong(c.theLast5kg.p3)}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">{c.redFlags.title}</h2>
            <p>{c.redFlags.p1}</p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              {c.redFlags.items.map((item, idx) => (
                <li key={idx}><strong>{item.label}:</strong> {item.value}</li>
              ))}
            </ul>
          </section>

          <section className="bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-3xl p-8 my-16 not-prose">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8 text-center">Postpartum FAQ</h2>
            <div className="space-y-8">
              {c.faqs.map((faq, idx) => (
                <div key={idx}>
                  <h4 className="font-serif text-[#3D2C2C] text-xl mb-3">{faq.q}</h4>
                  <p className="text-[#3D2C2C]/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="not-prose my-16 bg-white rounded-3xl p-10 border border-[#E8A0A8]/30 shadow-[0_10px_40px_rgba(232,160,168,0.12)] text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-[#3D2C2C]">Find your safe path forward</h3>
            <p className="text-lg text-[#3D2C2C]/70 max-w-xl mx-auto">
              Find your safe weekly weight loss target with our free calculator — built specifically for postpartum and breastfeeding mothers.
            </p>
            <Link 
              href="/safe-weight-loss"
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all shadow-lg hover:translate-y-[-2px]"
            >
              Go to the Safe Weight Loss Calculator →
            </Link>
          </div>

          <footer className="not-prose mt-20">
            <div className="pt-8 border-t border-[#E8A0A8]/20 mb-16">
              <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label max-w-2xl">
                Sources: {c.sources}
              </p>
            </div>

            <h3 className="text-2xl font-serif text-[#3D2C2C] mb-10">You might also like...</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/safe-weight-loss-breastfeeding" className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">Weight Loss</span>
                <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">Is it Safe to Lose Weight While Breastfeeding?</h4>
                <p className="text-sm text-[#3D2C2C]/60 mt-4 leading-relaxed">Everything you need to know about protecting your supply while reaching your goals.</p>
              </Link>
              <Link href="/blog/breastfeeding-calorie-needs" className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">Nutrition</span>
                <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">How Many Extra Calories Do You Need When Breastfeeding?</h4>
                <p className="text-sm text-[#3D2C2C]/60 mt-4 leading-relaxed">A breakdown of the metabolic demands of milk production and how to fuel correctly.</p>
              </Link>
            </div>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
