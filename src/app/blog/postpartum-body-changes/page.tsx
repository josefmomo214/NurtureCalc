import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { postpartumBodyChangesContent } from "./content";

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/postpartum-body-changes',
  },
  title: "Postpartum Body Changes Nobody Warns You About | NurtureCalc",
  description: "From night sweats to loose joints, the postpartum body goes through changes that nobody prepares you for. Here is the honest guide to what is happening and why it is all normal.",
  openGraph: {
    title: "Postpartum Body Changes Nobody Warns You About | NurtureCalc",
    description: "From night sweats to loose joints, the postpartum body goes through changes that nobody prepares you for. Here is the honest guide to what is happening and why it is all normal.",
    url: 'https://nurturecalc.com/blog/postpartum-body-changes',
    type: 'article',
    publishedTime: '2026-04-07T00:00:00Z',
    authors: ['https://nurturecalc.com/author/nurturecalc-team'],
  },
};

export default function BlogPost() {
  const c = postpartumBodyChangesContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "From night sweats to loose joints, the postpartum body goes through changes that nobody prepares you for. Here is the honest guide to what is happening and why it is all normal.",
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
    "datePublished": "2026-04-07",
    "dateModified": "2026-04-07",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/postpartum-body-changes"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": c.s14.q1,
        "acceptedAnswer": { "@type": "Answer", "text": c.s14.a1 }
      },
      {
        "@type": "Question",
        "name": c.s14.q2,
        "acceptedAnswer": { "@type": "Answer", "text": c.s14.a2 }
      },
      {
        "@type": "Question",
        "name": c.s14.q3,
        "acceptedAnswer": { "@type": "Answer", "text": c.s14.a3 }
      },
      {
        "@type": "Question",
        "name": c.s14.q4,
        "acceptedAnswer": { "@type": "Answer", "text": c.s14.a4 }
      },
      {
        "@type": "Question",
        "name": c.s14.q5,
        "acceptedAnswer": { "@type": "Answer", "text": c.s14.a5 }
      }
    ]
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
                Postpartum Body Changes: <span className="text-[#E8A0A8] italic">{c.header.subtitle}</span>
              </h1>
              <div className="flex flex-col items-center gap-2">
                <Link href="/author/nurturecalc-team" className="text-sm font-label font-bold tracking-wide text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors">
                  {c.header.author}
                </Link>
                <p className="text-[10px] text-[#3D2C2C]/50 font-label tracking-wide uppercase max-w-xs mx-auto text-center">
                  {c.header.reviewNote}
                </p>
              </div>
            </div>
          </header>

          <section>
            <p className="text-xl md:text-2xl font-serif italic text-[#3D2C2C] mb-12 leading-relaxed border-l-4 border-[#E8A0A8]/30 pl-8 py-2">
              You catch a glimpse of yourself in the mirror after birth and think, "What happened to my body?" We are here to name every single one of these changes.
            </p>
            <p dangerouslySetInnerHTML={{ __html: c.s1.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s1.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s1.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s2.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s2.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s2.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s2.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s3.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s3.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s3.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s3.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s4.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s4.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s4.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s4.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s5.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s5.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s5.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s5.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s6.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s6.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s6.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s6.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s7.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s7.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s7.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s7.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s8.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s8.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s8.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s8.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s9.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s9.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s9.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s9.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s10.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s10.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s10.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s10.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s11.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s11.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s11.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s11.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s12.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s12.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s12.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s12.p3 }}></p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.s13.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.s13.p1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s13.p2 }}></p>
            <p dangerouslySetInnerHTML={{ __html: c.s13.p3 }}></p>
          </section>

          <section className="bg-white border border-[#E8A0A8]/20 rounded-3xl p-10 my-20 not-prose shadow-sm">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8 text-center">{c.s14.title}</h2>
            <div className="space-y-8">
              {[
                { q: c.s14.q1, a: c.s14.a1 },
                { q: c.s14.q2, a: c.s14.a2 },
                { q: c.s14.q3, a: c.s14.a3 },
                { q: c.s14.q4, a: c.s14.a4 },
                { q: c.s14.q5, a: c.s14.a5 }
              ].map((faq, idx) => (
                <div key={idx} className="group">
                  <h4 className="font-serif text-[#3D2C2C] text-xl mb-3 group-hover:text-[#E8A0A8] transition-colors">{faq.q}</h4>
                  <p className="text-[#3D2C2C]/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="not-prose my-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#E8A0A8] rounded-3xl p-8 text-center space-y-6 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-2xl font-serif text-white leading-tight">Pelvic Floor Support</h3>
              <p className="text-white/90 text-sm max-w-sm mx-auto">{c.ctas.cta1}</p>
              <Link 
                href={c.ctas.cta1Link}
                className="inline-block bg-white text-[#E8A0A8] hover:bg-[#FFFDF9] px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold shadow-xl transition-all"
              >
                Gentle Estimator →
              </Link>
            </div>
            
            <div className="bg-[#D58A92] rounded-3xl p-8 text-center space-y-6 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-2xl font-serif text-white leading-tight">Safe Weight Loss</h3>
              <p className="text-white/90 text-sm max-w-sm mx-auto">{c.ctas.cta2}</p>
              <Link 
                href={c.ctas.cta2Link}
                className="inline-block bg-white text-[#D58A92] hover:bg-[#FFFDF9] px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold shadow-xl transition-all"
              >
                Free Calculator →
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
