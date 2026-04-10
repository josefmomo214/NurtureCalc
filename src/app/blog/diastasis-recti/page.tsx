import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { diastasisRectiContent } from "./content";

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/diastasis-recti',
  },
  title: "Diastasis Recti: What It Is, How to Check for It and How to Heal It | NurtureCalc",
  description: "Diastasis recti affects up to 60% of pregnant women. Learn what it actually is, how to check yourself at home, what makes it worse, and how to genuinely heal it.",
  openGraph: {
    title: "Diastasis Recti: What It Is, How to Check for It and How to Heal It | NurtureCalc",
    description: "Diastasis recti affects up to 60% of pregnant women. Learn what it actually is, how to check yourself at home, what makes it worse, and how to genuinely heal it.",
    url: 'https://nurturecalc.com/blog/diastasis-recti',
    type: 'article',
    publishedTime: '2026-04-01T00:00:00Z',
    authors: ['https://nurturecalc.com/author/nurturecalc-team'],
  },
};

export default function BlogPost() {
  const c = diastasisRectiContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "Diastasis recti affects up to 60% of pregnant women. Learn what it actually is, how to check yourself at home, what makes it worse, and how to genuinely heal it.",
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
      "@id": "https://nurturecalc.com/blog/diastasis-recti"
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
        "text": faq.a.replace(/<[^>]*>?/gm, '') // Strip HTML tags for JSON-LD
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
                Diastasis Recti: <span className="text-[#E8A0A8] italic">What It Is and How to Heal It</span>
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
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whatIsIt.title}</h2>
            <p>{c.whatIsIt.p1}</p>
            <p>{c.whatIsIt.p2}</p>
            <p>{c.whatIsIt.p3}</p>
          </section>

          <section className="bg-[#F9E4E8]/20 rounded-3xl p-10 my-20 border border-[#E8A0A8]/10">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.howCommon.title}</h2>
            <p>{c.howCommon.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.howCommon.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.howCommon.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.howToCheck.title}</h2>
            <p>{c.howToCheck.p1}</p>
            <div className="space-y-6 mt-10">
              <div className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm">
                <p className="font-bold text-[#3D2C2C] mb-4">Step-by-Step Check:</p>
                <p className="mb-4">{c.howToCheck.p2}</p>
                <p className="mb-4">{c.howToCheck.p3}</p>
                <p>{c.howToCheck.p4}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whatMakesItWorse.title}</h2>
            <p>{c.whatMakesItWorse.p1}</p>
            <p>{c.whatMakesItWorse.p2}</p>
            <p>{c.whatMakesItWorse.p3}</p>
          </section>

          <section className="bg-[#FDF5F6] rounded-3xl p-10 my-20">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.startHealing.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.startHealing.p1 }} />
            <p>{c.startHealing.p2}</p>
            <p>{c.startHealing.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.exercisesHelp.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.exercisesHelp.p1 }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
              <div className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm">
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-4">Heel Slides</h4>
                <p className="text-sm text-[#3D2C2C]/70">{c.exercisesHelp.p2}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm">
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-4">Modified Dead Bugs</h4>
                <p className="text-sm text-[#3D2C2C]/70">{c.exercisesHelp.p3}</p>
              </div>
            </div>
            <p>{c.exercisesHelp.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.seePhysio.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.seePhysio.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.seePhysio.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.seePhysio.p3 }} />
          </section>

          <section className="bg-[#F9E4E8]/10 rounded-3xl p-10 my-20 border-l-8 border-[#E8A0A8]">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.pelvicFloorConnection.title}</h2>
            <p>{c.pelvicFloorConnection.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.pelvicFloorConnection.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.pelvicFloorConnection.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whatAboutSurgery.title}</h2>
            <p>{c.whatAboutSurgery.p1}</p>
            <p>{c.whatAboutSurgery.p2}</p>
            <p>{c.whatAboutSurgery.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.howLongHealing.title}</h2>
            <p>{c.howLongHealing.p1}</p>
            <p>{c.howLongHealing.p2}</p>
            <p>{c.howLongHealing.p3}</p>
          </section>

          <section className="bg-white border border-[#E8A0A8]/20 rounded-3xl p-10 my-20 not-prose shadow-sm">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {c.faqs.map((faq, idx) => (
                <div key={idx} className="group">
                  <h4 className="font-serif text-[#3D2C2C] text-xl mb-3 group-hover:text-[#E8A0A8] transition-colors">{faq.q}</h4>
                  <p className="text-[#3D2C2C]/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
                </div>
              ))}
            </div>
          </section>

          <div className="not-prose my-20">
            <div className="bg-[#E8A0A8] rounded-3xl p-12 text-center space-y-6 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">Rebuild Your Core Foundation</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">{c.cta.text}</p>
              <Link 
                href={c.cta.link}
                className="inline-block bg-white text-[#E8A0A8] hover:bg-[#FFFDF9] px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold shadow-xl transition-all"
              >
                Safe Return to Exercise →
              </Link>
            </div>
          </div>

          <footer className="not-prose border-t border-[#E8A0A8]/20 pt-16">
            <div className="mb-16">
              <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label max-w-2xl text-center md:text-left">
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
