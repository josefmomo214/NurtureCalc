import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { newbornSleepContent } from "./content";

export function generateMetadata(): Metadata {
  return {
    alternates: {
      canonical: '/blog/newborn-sleep-schedule',
    },
    title: "Newborn Sleep Schedule: What to Really Expect in the First 3 Months | NurtureCalc",
    description: "Newborn sleep is chaotic, exhausting and completely normal. Here is an honest, month-by-month guide to what to expect — and how to survive it with your sanity intact.",
    openGraph: {
      title: "Newborn Sleep Schedule: What to Really Expect in the First 3 Months | NurtureCalc",
      description: "Newborn sleep is chaotic, exhausting and completely normal. Here is an honest, month-by-month guide to what to expect — and how to survive it with your sanity intact.",
      url: 'https://nurturecalc.com/blog/newborn-sleep-schedule',
      type: 'article',
      publishedTime: '2026-04-06T00:00:00Z',
      authors: ['https://nurturecalc.com/author/nurturecalc-team'],
    },
  };
}

export default function NewbornSleepPage() {
  const c = newbornSleepContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "Newborn sleep is chaotic, exhausting and completely normal. Here is an honest, month-by-month guide to what to expect — and how to survive it with your sanity intact.",
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
    "datePublished": "2026-04-06",
    "dateModified": "2026-04-06",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/newborn-sleep-schedule"
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
                Newborn Sleep: <span className="text-[#E8A0A8] italic">What to Really Expect</span>
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
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.biology.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.biology.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.biology.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.biology.p3 }} />
          </section>

          <section className="bg-[#F9E4E8]/20 rounded-3xl p-10 my-20 border border-[#E8A0A8]/10">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.month1.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.month1.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.month1.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.month1.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.month2.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.month2.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.month2.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.month2.p3 }} />
          </section>

          <section className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm my-20">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.month3.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.month3.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.month3.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.month3.p3 }} />
          </section>

          <section className="bg-[#FDF5F6] rounded-3xl p-10 my-20 border-l-8 border-[#E8A0A8]">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.safeSleep.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.safeSleep.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.safeSleep.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.safeSleep.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.contactNaps.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.contactNaps.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.contactNaps.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.contactNaps.p3 }} />
          </section>

          <section className="bg-[#F9E4E8]/10 rounded-3xl p-10 my-20 border border-[#E8A0A8]/10 shadow-sm">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.wakeWindows.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.wakeWindows.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.wakeWindows.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.wakeWindows.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.mindset.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.mindset.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.mindset.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.mindset.p3 }} />
          </section>

          <section className="bg-[#FDF5F6] rounded-3xl p-10 my-20 border border-[#E8A0A8]/10 shadow-sm">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.sleepTraining.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.sleepTraining.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.sleepTraining.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.sleepTraining.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">{c.survivalTips.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.survivalTips.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.survivalTips.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.survivalTips.p3 }} />
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

          <section className="mt-20">
            <div className="prose prose-rose lg:prose-xl max-w-none text-[#3D2C2C]/80 font-sans leading-relaxed whitespace-pre-line">
              {c.longFormText}
            </div>
          </section>

          <div className="not-prose my-20">
            <div className="bg-[#E8A0A8] rounded-3xl p-12 text-center space-y-6 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">Check Your Baby's Growth</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">{c.cta.text}</p>
              <Link 
                href={c.cta.link}
                className="inline-block bg-white text-[#E8A0A8] hover:bg-[#FFFDF9] px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold shadow-xl transition-all"
              >
                Baby Weight Percentile Calculator →
              </Link>
            </div>
          </div>

          <footer className="not-prose border-t border-[#E8A0A8]/20 pt-16">
            <div className="mb-16">
              <div className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label max-w-2xl text-center md:text-left">
                Sources: 
                <ul className="list-none p-0 mt-2 space-y-1">
                  {c.sources.map((source, idx) => (
                    <li key={idx}>• {source}</li>
                  ))}
                </ul>
              </div>
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
