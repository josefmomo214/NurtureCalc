import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { periodsGuideContent } from "./content";

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/breastfeeding-and-periods',
  },
  title: "Breastfeeding and Periods: When Does Your Cycle Return? | NurtureCalc",
  description: "Wondering when your period will return after birth? Whether you're breastfeeding or not, here's exactly what to expect and why everyone's timeline is different.",
  openGraph: {
    title: "Breastfeeding and Periods: When Does Your Cycle Return? | NurtureCalc",
    description: "Wondering when your period will return after birth? Whether you're breastfeeding or not, here's exactly what to expect and why everyone's timeline is different.",
    url: 'https://nurturecalc.com/blog/breastfeeding-and-periods',
    type: 'article',
    publishedTime: '2026-04-01T00:00:00Z',
    authors: ['https://nurturecalc.com/author/nurturecalc-team'],
  },
};

export default function BlogPost() {
  const c = periodsGuideContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": metadata.description,
    "author": {
      "@type": "Organization",
      "name": "NurtureCalc Editorial Team",
      "url": "https://nurturecalc.com/author/nurturecalc-team/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com"
    },
    "datePublished": "2026-04-01",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/breastfeeding-and-periods"
    },
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
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
                Breastfeeding and Periods: <span className="text-[#E8A0A8] italic">{c.header.subtitle}</span>
              </h1>
              <div className="flex flex-col items-center gap-2">
                <Link href="/author/nurturecalc-team" className="text-sm font-label font-bold tracking-wide text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors">
                  {c.header.author}
                </Link>
                <p className="text-xs font-label text-[#3D2C2C]/70">
                  Written by the NurtureCalc Editorial Team · Reviewed against WHO & NHS <Link href="/editorial-standards" className="text-[#E8A0A8] hover:underline">guidelines</Link>
                </p>
                <p className="text-[10px] text-[#3D2C2C]/50 font-label tracking-wide uppercase max-w-xs mx-auto text-center">
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
            <p>{c.intro.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.whyDelay.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.whyDelay.p1 }} />
            <p>{c.whyDelay.p2}</p>
            <p>{c.whyDelay.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.scenarios.exclusive.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.scenarios.exclusive.p1 }} />
            <p>{c.scenarios.exclusive.p2}</p>
            
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-12 mb-8">{c.scenarios.mixed.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.scenarios.mixed.p1 }} />
            <p>{c.scenarios.mixed.p2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.pregnancy.title}</h2>
            <p>{c.pregnancy.p1}</p>
            <p>{c.pregnancy.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.pregnancy.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.firstPeriod.title}</h2>
            <p>{c.firstPeriod.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.firstPeriod.p2 }} />
            <p>{c.firstPeriod.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.doctor.title}</h2>
            <p>{c.doctor.p1}</p>
            <p>{c.doctor.p2}</p>
            <p>{c.doctor.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.stillNursing.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.stillNursing.p1 }} />
            <p>{c.stillNursing.p2}</p>
            <p>{c.stillNursing.p3}</p>
          </section>

          <section className="bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-3xl p-10 my-20 not-prose">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8 text-center">Frequently Asked Questions</h2>
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
            <div className="bg-white rounded-3xl p-10 border border-[#E8A0A8]/30 shadow-sm text-center space-y-4 md:col-span-2 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif text-[#3D2C2C]">Check your needs</h3>
              <p className="text-[#3D2C2C]/70">{c.cta.text}</p>
              <Link 
                href={c.cta.link}
                className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold transition-all mt-4"
              >
                {c.cta.button}
              </Link>
            </div>
          </div>

          <footer className="not-prose border-t border-[#E8A0A8]/20 pt-16">
            <div className="mb-16">
              <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label max-w-2xl">
                Sources: {c.sources}
              </p>
            </div>

            <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8 uppercase tracking-tight">You might also like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/breastfeeding-calorie-needs" className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">Nutrition</span>
                <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">How Many Extra Calories Do You Need When Breastfeeding?</h4>
              </Link>
              <Link href="/blog/postpartum-nutrition-guide" className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">Nutrition</span>
                <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">Postpartum Nutrition: What to Eat to Heal, Recover and Thrive</h4>
              </Link>
            </div>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
