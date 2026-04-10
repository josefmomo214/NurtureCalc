import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { pelvicFloorDysfunctionContent } from "./content";

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/postpartum-pelvic-floor-dysfunction',
  },
  title: "Signs of Postpartum Pelvic Floor Dysfunction — And What To Do | NurtureCalc",
  description: "Leaking, heaviness, pain — these are signs of postpartum pelvic floor dysfunction. Learn to recognise them early and what steps to take to heal.",
  openGraph: {
    title: "Signs of Postpartum Pelvic Floor Dysfunction — And What To Do | NurtureCalc",
    description: "Learn to recognise signs of pelvic floor dysfunction and how to start the healing process.",
    url: 'https://nurturecalc.com/blog/postpartum-pelvic-floor-dysfunction',
    type: 'article',
    publishedTime: '2026-03-28T00:00:00Z',
    authors: ['https://nurturecalc.com/author/nurturecalc-team'],
  },
};

export default function BlogPost() {
  const c = pelvicFloorDysfunctionContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "Leaking, heaviness, pain — these are signs of postpartum pelvic floor dysfunction. Learn to recognise them early and what steps to take to heal.",
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
    "datePublished": "2026-03-28",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/postpartum-pelvic-floor-dysfunction"
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
                Signs of Postpartum Pelvic Floor Dysfunction: <span className="text-[#E8A0A8] italic">{c.header.subtitle}</span>
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
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.signs.title}</h2>
            <p className="mb-10">{c.signs.p1}</p>
            <div className="space-y-12">
              {c.signs.items.map((item: any, idx: number) => (
                <div key={idx} className="border-l-2 border-[#E8A0A8]/20 pl-8">
                  <h3 className="text-2xl font-serif text-[#3D2C2C] mb-4">{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.hypertonicVsHypotonic.title}</h2>
            <p>{c.hypertonicVsHypotonic.p1}</p>
            <p>{c.hypertonicVsHypotonic.p2}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm">
                <h4 className="text-xl font-serif text-[#3D2C2C] mb-4">{c.hypertonicVsHypotonic.hypotonic.title}</h4>
                <p className="text-sm">{c.hypertonicVsHypotonic.hypotonic.content}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm">
                <h4 className="text-xl font-serif text-[#3D2C2C] mb-4">{c.hypertonicVsHypotonic.hypertonic.title}</h4>
                <p className="text-sm">{c.hypertonicVsHypotonic.hypertonic.content}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.physioAppointment.title}</h2>
            <p>{c.physioAppointment.p1}</p>
            <div className="space-y-8 mt-10">
              {c.physioAppointment.steps.map((step: any, idx: number) => (
                <div key={idx} className="flex gap-6">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8A0A8] text-white flex items-center justify-center font-bold text-sm mt-1">{idx + 1}</span>
                  <div>
                    <h4 className="text-xl font-serif text-[#3D2C2C] mb-2">{step.title}</h4>
                    <p className="text-base">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-[#E8A0A8]/10 rounded-3xl p-10 my-20 shadow-sm">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.atHome.title}</h2>
            <p className="mb-10">{c.atHome.p1}</p>
            <div className="bg-[#FFFDF9] p-8 rounded-2xl border border-[#E8A0A8]/20 mb-10">
              <h4 className="text-xl font-serif text-[#3D2C2C] mb-6 underline decoration-[#E8A0A8]/30 underline-offset-8 decoration-4">{c.atHome.breathTitle}</h4>
              <ul className="space-y-4 list-none p-0">
                {c.atHome.breathSteps.map((step: string, idx: number) => (
                  <li key={idx} className="text-base leading-relaxed">{step}</li>
                ))}
              </ul>
            </div>
            <p className="italic text-center text-sm px-10 border-t border-[#E8A0A8]/10 pt-8 mt-8">{c.atHome.gentleReconnection}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.whatNotToDo.title}</h2>
            <p className="mb-10">{c.whatNotToDo.p1}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {c.whatNotToDo.items.map((item: any, idx: number) => (
                <div key={idx} className="relative pl-8">
                  <span className="absolute left-0 top-0 text-2xl text-[#E8A0A8]">✕</span>
                  <h4 className="text-lg font-bold text-[#3D2C2C] mb-2">{item.title}</h4>
                  <p className="text-sm">{item.content}</p>
                </div>
              ))}
            </div>
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
            <div className="bg-[#E8A0A8] rounded-3xl p-12 text-center space-y-6 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">Take Control of Your Recovery</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">{c.cta.text}</p>
              <Link 
                href={c.cta.link}
                className="inline-block bg-white text-[#E8A0A8] hover:bg-[#FFFDF9] px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold shadow-xl transition-all"
              >
                Start Estimator →
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
