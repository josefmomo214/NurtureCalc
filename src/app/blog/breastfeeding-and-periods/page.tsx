import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { periodsGuideContent } from "./content";

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/breastfeeding-and-periods/',
  },
  title: "Breastfeeding and Periods: When Will Your Cycle Return? | NurtureCalc",
  description: "Wondering when your period will return while breastfeeding? Learn exactly how prolactin delays your cycle, what your first period will feel like, and when to see a doctor.",
  openGraph: {
    title: "Breastfeeding and Periods: When Will Your Cycle Return? | NurtureCalc",
    description: "Wondering when your period will return while breastfeeding? Learn exactly how prolactin delays your cycle, what your first period will feel like, and when to see a doctor.",
    url: 'https://nurturecalc.com/blog/breastfeeding-and-periods/',
    type: 'article',
    publishedTime: '2026-03-31T00:00:00Z',
    authors: ['https://nurturecalc.com/author/nurturecalc-team'],
  },
};

export default function BlogPost() {
  const c = periodsGuideContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "Wondering when your period will return while breastfeeding? Learn exactly how prolactin delays your cycle, what your first period will feel like, and when to see a doctor.",
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
    "datePublished": "2026-03-31",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/breastfeeding-and-periods/"
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
                Breastfeeding and Periods: When Will Your Cycle Return?
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
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whyDelay.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.whyDelay.p1.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <p dangerouslySetInnerHTML={{ __html: c.whyDelay.p2.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <p dangerouslySetInnerHTML={{ __html: c.whyDelay.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whenReturn.title}</h2>
            
            <div className="not-prose my-10 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px] shadow-sm rounded-xl overflow-hidden border border-[#E8A0A8]/20">
                <thead className="bg-[#F9E4E8]/50">
                  <tr>
                    <th className="py-4 px-6 font-serif text-[#3D2C2C] text-lg font-bold border-b border-[#E8A0A8]/20">Feeding Method</th>
                    <th className="py-4 px-6 font-serif text-[#3D2C2C] text-lg font-bold border-b border-[#E8A0A8]/20">Typical Return</th>
                    <th className="py-4 px-6 font-serif text-[#3D2C2C] text-lg font-bold border-b border-[#E8A0A8]/20">Range</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[#3D2C2C]/80">
                  <tr className="border-b border-[#E8A0A8]/10 hover:bg-[#F9E4E8]/10 transition-colors">
                    <td className="py-5 px-6 font-semibold">Exclusive breastfeeding</td>
                    <td className="py-5 px-6">6–12 months</td>
                    <td className="py-5 px-6">Sometimes beyond 12 months</td>
                  </tr>
                  <tr className="border-b border-[#E8A0A8]/10 bg-[#FFFDF9] hover:bg-[#F9E4E8]/10 transition-colors">
                    <td className="py-5 px-6 font-semibold">Mixed feeding</td>
                    <td className="py-5 px-6">3–6 months</td>
                    <td className="py-5 px-6">Varies widely</td>
                  </tr>
                  <tr className="hover:bg-[#F9E4E8]/10 transition-colors">
                    <td className="py-5 px-6 font-semibold">Formula feeding only</td>
                    <td className="py-5 px-6">6–10 weeks</td>
                    <td className="py-5 px-6">As early as 4 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>{c.whenReturn.p1}</p>
            <p>{c.whenReturn.p2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.exclusive.title}</h2>
            <p>{c.exclusive.p1}</p>
            <p>{c.exclusive.p2}</p>
          </section>

          <section className="bg-[#F9E4E8]/30 rounded-3xl p-10 my-20">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.pregnant.title}</h2>
            <p>{c.pregnant.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.pregnant.p2 }} />
            <p>{c.pregnant.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.firstPeriod.title}</h2>
            <p>{c.firstPeriod.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.firstPeriod.p2 }} />
            <p>{c.firstPeriod.p3}</p>
            <p>{c.firstPeriod.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.milkSupply.title}</h2>
            <p>{c.milkSupply.p1}</p>
            <p>{c.milkSupply.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.milkSupply.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.supportTransition.title}</h2>
            <div className="space-y-6 mt-10">
              {c.supportTransition.tips.map((tip, idx) => (
                <div key={idx} className="border-l-2 border-[#E8A0A8]/20 pl-8">
                  <p dangerouslySetInnerHTML={{ __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whenSeeDoctor.title}</h2>
            <p>{c.whenSeeDoctor.p1}</p>
            <div className="space-y-4">
              <p>{c.whenSeeDoctor.p2}</p>
              <p>{c.whenSeeDoctor.p3}</p>
              <p dangerouslySetInnerHTML={{ __html: c.whenSeeDoctor.p4 }} />
            </div>
          </section>

          <section className="bg-white border border-[#E8A0A8]/20 rounded-3xl p-10 my-20 not-prose shadow-sm">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {c.faqs.map((faq, idx) => (
                <div key={idx} className="group">
                  <h4 className="font-serif text-[#3D2C2C] text-xl mb-3 group-hover:text-[#E8A0A8] transition-colors">{faq.q}</h4>
                  <p className="text-[#3D2C2C]/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="not-prose my-20">
            <div className="bg-[#E8A0A8] rounded-3xl p-12 text-center space-y-6 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">Know How Much to Eat While Nursing</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">{c.cta.text}</p>
              <Link 
                href={c.cta.link}
                className="inline-block bg-white text-[#E8A0A8] hover:bg-[#FFFDF9] px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold shadow-xl transition-all"
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
              {c.related.map((post: any, idx: number) => (
                <Link key={idx} href={`/blog/${post.slug}`} className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                  <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">{post.category}</span>
                  <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">{post.title}</h4>
                </Link>
              ))}
            </div>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
