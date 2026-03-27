import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { nutritionGuideContent } from "./content";

export const metadata: Metadata = {
  title: "Postpartum Nutrition: What to Eat to Heal, Recover and Thrive | NurtureCalc",
  description: "A complete postpartum nutrition guide covering the key nutrients new mothers need for healing, breastfeeding and sustained energy in the fourth trimester.",
};

export default function BlogPost() {
  const c = nutritionGuideContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "A comprehensive guide to postpartum nutrition, focusing on essential nutrients, practical meal ideas for new mothers, and science-based recovery advice.",
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
      "@id": "https://nurturecalc.com/blog/postpartum-nutrition-guide"
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
                Postpartum Nutrition: What to Eat to <span className="text-[#E8A0A8] italic">{c.header.subtitle}</span>
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
            <p className="text-xl md:text-2xl font-serif italic text-[#3D2C2C] mb-12 leading-relaxed border-l-4 border-[#E8A0A8]/30 pl-8 py-2">
              {c.intro.quote}
            </p>
            <p>{c.intro.p1}</p>
            <p>{c.intro.p2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.nutrients.title}</h2>
            <p className="mb-10">{c.nutrients.p1}</p>
            <div className="space-y-12">
              {c.nutrients.items.map((item, idx) => (
                <div key={idx} className="border-l-2 border-[#E8A0A8]/20 pl-8">
                  <h3 className="text-2xl font-serif text-[#3D2C2C] mb-4">{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-[#E8A0A8]/10 rounded-3xl p-10 my-20 shadow-sm">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.meals.title}</h2>
            <p className="mb-8 italic">{c.meals.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              {c.meals.items.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <strong className="text-[#E8A0A8] uppercase tracking-wide block">{item.title}</strong>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">{c.mindfulness.title}</h2>
            <p>{c.mindfulness.p1}</p>
            <p><strong>Caffeine:</strong> {c.mindfulness.caffeine}</p>
            <p><strong>Alcohol:</strong> {c.mindfulness.alcohol}</p>
            <p><strong>Ultra-processed Foods:</strong> {c.mindfulness.processed}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.hydration.title}</h2>
            <p>{c.hydration.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.hydration.p2.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.supplements.title}</h2>
            <p>{c.supplements.content}</p>
            <p>{c.supplements.nhs}</p>
          </section>

          <section className="bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-3xl p-10 my-20 not-prose">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8 text-center">Postpartum Nutrition FAQ</h2>
            <div className="space-y-8">
              {c.faqs.map((faq, idx) => (
                <div key={idx}>
                  <h4 className="font-serif text-[#3D2C2C] text-xl mb-3">{faq.q}</h4>
                  <p className="text-[#3D2C2C]/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
            <div className="bg-white rounded-3xl p-10 border border-[#E8A0A8]/30 shadow-sm text-center space-y-4">
              <h3 className="text-2xl font-serif text-[#3D2C2C]">Check your needs</h3>
              <p className="text-[#3D2C2C]/70">Find out exactly how many calories your body needs right now with our free Breastfeeding Calorie Calculator.</p>
              <Link 
                href="/breastfeeding-calories"
                className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold transition-all"
              >
                Calculate Now →
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-[#E8A0A8]/30 shadow-sm text-center space-y-4">
              <h3 className="text-2xl font-serif text-[#3D2C2C]">Safe Progress</h3>
              <p className="text-[#3D2C2C]/70">Wondering about safe weight loss while nursing? Our free calculator has you covered.</p>
              <Link 
                href="/safe-weight-loss"
                className="inline-block border-2 border-[#E8A0A8] text-[#E8A0A8] hover:bg-[#F9E4E8] px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold transition-all"
              >
                View Target →
              </Link>
            </div>
          </div>

          <footer className="not-prose border-t border-[#E8A0A8]/20 pt-16">
            <div className="mb-16">
              <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label max-w-2xl">
                Sources: {c.sources}
              </p>
            </div>

            <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8 uppercase tracking-tight">Read This Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/breastfeeding-calorie-needs" className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">Nutrition</span>
                <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">How Many Extra Calories Do You Need When Breastfeeding?</h4>
              </Link>
              <Link href="/blog/safe-weight-loss-breastfeeding" className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">Weight Loss</span>
                <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">Is it Safe to Lose Weight While Breastfeeding?</h4>
              </Link>
            </div>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
