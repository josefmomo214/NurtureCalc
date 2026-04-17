import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { returnToWorkContent } from "./content";

export function generateMetadata(): Metadata {
  return {
    alternates: {
      canonical: '/blog/returning-to-work-after-maternity-leave',
    },
    title: "Returning to Work After Maternity Leave: A Practical Guide for New Mothers | NurtureCalc",
    description: "Going back to work after having a baby is one of the hardest transitions a mother faces. This honest, practical guide covers everything from breastfeeding at work to managing mum guilt.",
    openGraph: {
      title: "Returning to Work After Maternity Leave: A Practical Guide for New Mothers | NurtureCalc",
      description: "Going back to work after having a baby is one of the hardest transitions a mother faces. This honest, practical guide covers everything from breastfeeding at work to managing mum guilt.",
      url: 'https://nurturecalc.com/blog/returning-to-work-after-maternity-leave',
      type: 'article',
      publishedTime: '2026-04-09T00:00:00Z',
      authors: ['https://nurturecalc.com/author/nurturecalc-team'],
    },
  };
}

export default function BlogPost() {
  const c = returnToWorkContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "Going back to work after having a baby is one of the hardest transitions a mother faces. This honest, practical guide covers everything from breastfeeding at work to managing mum guilt.",
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
    "datePublished": "2026-04-09",
    "dateModified": "2026-04-09",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/returning-to-work-after-maternity-leave"
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
                {c.header.title}
              </h1>
              <div className="flex flex-col items-center gap-2">
                <Link href="/author/nurturecalc-team" className="text-sm font-label font-bold tracking-wide text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors">
                  {c.header.author}
                </Link>
                <p className="text-xs font-label text-[#3D2C2C]/70">
                  Written by the NurtureCalc Editorial Team · {c.header.reviewNote}
                </p>
              </div>
            </div>
          </header>

          <section>
            <p dangerouslySetInnerHTML={{ __html: c.intro.p1 }} />
            <p className="text-xl md:text-2xl font-serif italic text-[#3D2C2C] my-12 leading-relaxed border-l-4 border-[#E8A0A8]/30 pl-8 py-2">
              {c.intro.p2}
            </p>
            <p dangerouslySetInnerHTML={{ __html: c.intro.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.emotionalReality.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.emotionalReality.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.emotionalReality.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.emotionalReality.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.preparing.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.preparing.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.preparing.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.preparing.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.breastfeeding.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.breastfeeding.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.breastfeeding.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.breastfeeding.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.logistics.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.logistics.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.logistics.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.logistics.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.sleepDeprivation.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.sleepDeprivation.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.sleepDeprivation.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.sleepDeprivation.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.rights.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.rights.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.rights.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.rights.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.guilt.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.guilt.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.guilt.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.guilt.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.selfCare.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.selfCare.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.selfCare.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.selfCare.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.harderThanExpected.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.harderThanExpected.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.harderThanExpected.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.harderThanExpected.p3 }} />
          </section>

          <section className="bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-3xl p-10 my-20 not-prose">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-4 text-center">{c.faqSection.title}</h2>
            <p className="text-[#3D2C2C]/70 text-center mb-10">{c.faqSection.p1}</p>
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
              <h3 className="text-2xl font-serif text-[#3D2C2C]">Need support?</h3>
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
                Sources: {c.sources.join(" ")}
              </p>
            </div>

            <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8 uppercase tracking-tight">You might also like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {c.relatedPosts.map((post, idx) => (
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
