import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { babyGrowthSpurtsContent } from "./content";

export const metadata: Metadata = {
  title: "Baby Growth Spurts: What They Are, When They Happen and How to Survive Them | NurtureCalc",
  description: "Baby growth spurts can feel sudden and overwhelming. Learn the typical timeline, signs to look for, and how to support your baby through each one.",
};

export default function BlogPost() {
  const c = babyGrowthSpurtsContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "Baby growth spurts can feel sudden and overwhelming. Learn the typical timeline, signs to look for, and how to support your baby through each one.",
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
    "datePublished": "2026-03-28",
    "dateModified": "2026-03-28",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/baby-growth-spurts"
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
                Baby Growth Spurts: <span className="text-[#E8A0A8] italic">{c.header.subtitle}</span>
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
              {c.intro.quote}
            </p>
            <p>{c.intro.p1}</p>
            <p>{c.intro.p2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.timeline.title}</h2>
            <p className="mb-10">{c.timeline.p1}</p>
            <div className="space-y-12">
              {c.timeline.items.map((item: any, idx: number) => (
                <div key={idx} className="border-l-2 border-[#E8A0A8]/20 pl-8">
                  <h3 className="text-2xl font-serif text-[#3D2C2C] mb-4">{item.stage}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.signs.title}</h2>
            <p className="mb-10">{c.signs.p1}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              {c.signs.items.map((item: any, idx: number) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm transition-all hover:shadow-md">
                  <h4 className="text-xl font-serif text-[#3D2C2C] mb-4">{item.title}</h4>
                  <p className="text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.duration.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.duration.p1.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <p>{c.duration.p2}</p>
          </section>

          <section className="bg-white border border-[#E8A0A8]/10 rounded-3xl p-10 my-20 shadow-sm">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.breastfeeding.title}</h2>
            <p>{c.breastfeeding.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.breastfeeding.p2.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <div className="mt-8 space-y-4">
              {c.breastfeeding.tips.map((tip: string, idx: number) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="text-[#E8A0A8] font-bold">✓</span>
                  <p className="text-base my-0">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.formula.title}</h2>
            <p>{c.formula.p1}</p>
            <p>{c.formula.p2}</p>
          </section>

          <section className="bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-3xl p-10 my-20 not-prose">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.scale.title}</h2>
            <p className="text-lg leading-relaxed mb-8">{c.scale.content}</p>
            <div className="text-center">
              <Link 
                href={c.scale.link}
                className="inline-block border-2 border-[#E8A0A8] text-[#E8A0A8] hover:bg-[#F9E4E8] px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold transition-all"
              >
                Track on Calculator →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.selfCare.title}</h2>
            <p>{c.selfCare.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.selfCare.p2.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
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

          <div className="not-prose my-20">
            <div className="bg-white rounded-3xl p-12 text-center space-y-6 border border-[#E8A0A8]/30 shadow-sm overflow-hidden relative">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#F9E4E8] rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-serif text-[#3D2C2C] leading-tight">Monitor Their Growth</h3>
                <p className="text-[#3D2C2C]/70 text-lg max-w-2xl mx-auto">{c.cta.text}</p>
                <Link 
                  href={c.cta.link}
                  className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold shadow-xl transition-all mt-6"
                >
                  Start Calculator →
                </Link>
              </div>
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
