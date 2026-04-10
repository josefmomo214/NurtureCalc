import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { postpartumHairLossContent } from "./content";

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/postpartum-hair-loss',
  },
  title: "Postpartum Hair Loss: Why It Happens and When It Stops | NurtureCalc",
  description: "Losing handfuls of hair after birth is normal but alarming. Learn exactly why postpartum hair loss happens, when it peaks, and when it stops completely.",
  openGraph: {
    title: "Postpartum Hair Loss: Why It Happens and When It Stops | NurtureCalc",
    description: "Losing handfuls of hair after birth is normal but alarming. Learn exactly why postpartum hair loss happens, when it peaks, and when it stops completely.",
    url: 'https://nurturecalc.com/blog/postpartum-hair-loss',
    type: 'article',
    publishedTime: '2026-03-31T00:00:00Z',
    authors: ['https://nurturecalc.com/author/nurturecalc-team'],
  },
};

export default function BlogPost() {
  const c = postpartumHairLossContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "Losing handfuls of hair after birth is normal but alarming. Learn exactly why postpartum hair loss happens, when it peaks, and when it stops completely.",
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
      "@id": "https://nurturecalc.com/blog/postpartum-hair-loss"
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
                Postpartum Hair Loss: <span className="text-[#E8A0A8] italic">{c.header.subtitle}</span>
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
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whyItHappens.title}</h2>
            <p>{c.whyItHappens.p1}</p>
            <p>{c.whyItHappens.p2}</p>
            <p>{c.whyItHappens.p3}</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20 not-prose">
            <div className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm text-center">
              <span className="text-[#E8A0A8] font-bold text-sm uppercase tracking-widest block mb-4">Starts</span>
              <p className="text-[#3D2C2C] font-serif text-lg">2–4 months postpartum</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm text-center">
              <span className="text-[#E8A0A8] font-bold text-sm uppercase tracking-widest block mb-4">Peaks</span>
              <p className="text-[#3D2C2C] font-serif text-lg">3–4 months postpartum</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm text-center">
              <span className="text-[#E8A0A8] font-bold text-sm uppercase tracking-widest block mb-4">Stops</span>
              <p className="text-[#3D2C2C] font-serif text-lg">6–12 months postpartum</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-10 mb-10">{c.whenStarts.title}</h2>
            <p>{c.whenStarts.p1}</p>
            <p>{c.whenStarts.p2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whenPeaks.title}</h2>
            <p>{c.whenPeaks.p1}</p>
            <p>{c.whenPeaks.p2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whenStops.title}</h2>
            <p>{c.whenStops.p1}</p>
            <p>{c.whenStops.p2}</p>
          </section>

          <section className="bg-[#F9E4E8]/30 rounded-3xl p-10 my-20">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.breastfeedingMyth.title}</h2>
            <p>{c.breastfeedingMyth.p1}</p>
            <p>{c.breastfeedingMyth.p2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whatToDo.title}</h2>
            <p>{c.whatToDo.p1}</p>
            <div className="space-y-6 mt-10">
              {[c.whatToDo.p2, c.whatToDo.p3, c.whatToDo.p4, c.whatToDo.p5, c.whatToDo.p6, c.whatToDo.p7].map((tip, idx) => (
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
              <p>{c.whenSeeDoctor.p4}</p>
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
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">Nourish Your Regrowth</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">{c.cta.text}</p>
              <Link 
                href={c.cta.link}
                className="inline-block bg-white text-[#E8A0A8] hover:bg-[#FFFDF9] px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold shadow-xl transition-all"
              >
                Read Nutrition Guide →
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
