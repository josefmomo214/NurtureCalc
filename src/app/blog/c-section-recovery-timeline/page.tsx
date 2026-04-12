import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { cSectionRecoveryContent } from "./content";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://nurturecalc.com/blog/c-section-recovery-timeline/',
  },
  title: "C-Section Recovery: What to Expect Week by Week | NurtureCalc",
  description: "A realistic week-by-week guide to C-section recovery — from hospital discharge through 12 weeks. What to expect, what to avoid, and when most women feel like themselves again.",
  openGraph: {
    title: "C-Section Recovery: What to Expect Week by Week | NurtureCalc",
    description: "A realistic week-by-week guide to C-section recovery — from hospital discharge through 12 weeks. What to expect, what to avoid, and when most women feel like themselves again.",
    url: 'https://nurturecalc.com/blog/c-section-recovery-timeline/',
    type: 'article',
    publishedTime: '2026-03-15T00:00:00Z',
    authors: ['https://nurturecalc.com/author/nurturecalc-team'],
  },
};

export default function BlogPost() {
  const c = cSectionRecoveryContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "C-Section Recovery: What to Expect Week by Week",
    "description": "A realistic week-by-week guide to C-section recovery — from hospital discharge through 12 weeks. What to expect, what to avoid, and when most women feel like themselves again.",
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
    "datePublished": "2026-03-15",
    "dateModified": "2026-04-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/c-section-recovery-timeline/"
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

  /**
   * Helper to render basic markdown-style bold (**text**) and links ([text](url))
   */
  const renderText = (text: string) => {
    if (!text) return null;
    
    // First, handle links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, linkText, url] = match;
      const index = match.index;

      // Add text before the match
      if (index > lastIndex) {
        parts.push(text.substring(lastIndex, index));
      }

      // Add the Link component, with bolding handled in the link text
      parts.push(
        <Link key={url} href={url} className="text-[#E8A0A8] hover:underline font-bold">
          {linkText.split(/\*\*([^*]+)\*\*/g).map((subPart, i) => 
            i % 2 === 1 ? <strong key={i}>{subPart}</strong> : subPart
          )}
        </Link>
      );

      lastIndex = index + fullMatch.length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    // Now handle bold: **text** within the non-link parts
    return parts.map((part, i) => {
      if (typeof part !== 'string') return part;

      const boldRegex = /\*\*([^*]+)\*\*/g;
      const subParts = [];
      let subLastIndex = 0;
      let subMatch;

      while ((subMatch = boldRegex.exec(part)) !== null) {
        const [fullSubMatch, boldText] = subMatch;
        const subIndex = subMatch.index;

        if (subIndex > subLastIndex) {
          subParts.push(part.substring(subLastIndex, subIndex));
        }

        subParts.push(<strong key={subIndex} className="font-bold text-[#3D2C2C]">{boldText}</strong>);
        subLastIndex = subIndex + fullSubMatch.length;
      }

      if (subLastIndex < part.length) {
        subParts.push(part.substring(subLastIndex));
      }

      return <span key={i}>{subParts}</span>;
    });
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
                C-Section Recovery: What to Expect Week by Week
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
            <p>{c.opening.p1}</p>
            <p>{c.opening.p2}</p>
            <p>{c.opening.p3}</p>
          </section>

          {/* Featured Snippet Block */}
          <div className="bg-[#FDF2F4] border border-[#E8A0A8]/30 rounded-3xl p-8 my-12 not-prose shadow-sm">
            <h3 className="text-2xl font-serif text-[#3D2C2C] mb-6">{c.featuredSnippet.title}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E8A0A8]/20">
                    <th className="py-4 px-4 font-serif text-[#D58A92] uppercase tracking-wider text-sm">{c.featuredSnippet.rows[0][0]}</th>
                    <th className="py-4 px-4 font-serif text-[#D58A92] uppercase tracking-wider text-sm">{c.featuredSnippet.rows[0][1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8A0A8]/10 text-[#3D2C2C]/80">
                  {c.featuredSnippet.rows.slice(1).map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-4 px-4 font-bold text-sm">{row[0]}</td>
                      <td className="py-4 px-4 text-sm">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.hospitalStay.title}</h2>
            <p>{renderText(c.hospitalStay.p1)}</p>
            <p>{renderText(c.hospitalStay.p2)}</p>
            <p>{renderText(c.hospitalStay.p3)}</p>
            <p>{renderText(c.hospitalStay.p4)}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.week1.title}</h2>
            <p>{renderText(c.week1.p1)}</p>
            <p>{renderText(c.week1.p2)}</p>
            <p>{renderText(c.week1.p3)}</p>
            <p>{renderText(c.week1.p4)}</p>
            
            <div className="bg-[#FFF5F6] border-2 border-[#E8A0A8]/40 rounded-3xl p-8 my-10 not-prose">
              <h3 className="text-xl font-serif text-[#D58A92] mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E8A0A8] rounded-full"></span>
                {c.week1.warningBox.title}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {c.week1.warningBox.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#3D2C2C]/80 bg-white/50 p-3 rounded-xl border border-[#E8A0A8]/10">
                    <span className="text-[#E8A0A8] font-bold">!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.week2.title}</h2>
            <p>{renderText(c.week2.p1)}</p>
            <p>{renderText(c.week2.p2)}</p>
            <p>{renderText(c.week2.p3)}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.week3_4.title}</h2>
            <p>{renderText(c.week3_4.p1)}</p>
            <p>{renderText(c.week3_4.p2)}</p>
            <p>{renderText(c.week3_4.p3)}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.week5_6.title}</h2>
            <p>{renderText(c.week5_6.p1)}</p>
            <p>{renderText(c.week5_6.p2)}</p>
            <p>{renderText(c.week5_6.p3)}</p>
            <p>{renderText(c.week5_6.p4)}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.week7_12.title}</h2>
            <p>{renderText(c.week7_12.p1)}</p>
            <p>{renderText(c.week7_12.p2)}</p>
            <p>{renderText(c.week7_12.p3)}</p>
            <p>{renderText(c.week7_12.p4)}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.threeToSixMonths.title}</h2>
            <p>{renderText(c.threeToSixMonths.p1)}</p>
            <p>{renderText(c.threeToSixMonths.p2)}</p>
            <p>{renderText(c.threeToSixMonths.p3)}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.theScar.title}</h2>
            <p>{renderText(c.theScar.p1)}</p>
            <p>{renderText(c.theScar.p2)}</p>
            <p>{renderText(c.theScar.p3)}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.emotionalSide.title}</h2>
            <p>{renderText(c.emotionalSide.p1)}</p>
            <p>{renderText(c.emotionalSide.p2)}</p>
            <p>{renderText(c.emotionalSide.p3)}</p>
          </section>

          {/* Activity Safety Table */}
          <section className="my-20 not-prose">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">{c.safetyTable.title}</h2>
            <div className="overflow-x-auto rounded-3xl border border-[#E8A0A8]/20 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#FDF2F4]/50">
                  <tr>
                    {c.safetyTable.headers.map((header, idx) => (
                      <th key={idx} className="py-5 px-6 font-serif text-[#D58A92] uppercase tracking-wider text-xs border-b border-[#E8A0A8]/10">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8A0A8]/5 text-[#3D2C2C]/80">
                  {c.safetyTable.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FFFDF9] transition-colors">
                      <td className="py-5 px-6 font-bold text-sm">{row[0]}</td>
                      <td className="py-5 px-6 text-sm">{row[1]}</td>
                      <td className="py-5 px-6 text-xs italic">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-[#FFFDF9] border border-[#E8A0A8]/30 rounded-3xl p-10 my-20 not-prose shadow-inner">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {c.faqs.map((faq, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="font-serif text-[#3D2C2C] text-xl leading-snug border-l-2 border-[#E8A0A8] pl-4">{faq.q}</h4>
                  <p className="text-[#3D2C2C]/70 leading-relaxed text-sm ml-4">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing CTA */}
          <div className="bg-[#E8A0A8]/10 border-2 border-[#E8A0A8]/20 rounded-[3rem] p-12 my-20 not-prose text-center space-y-8 shadow-sm">
            <h3 className="text-3xl font-serif text-[#3D2C2C] leading-tight">{c.ctaBox.headline}</h3>
            <p className="text-lg text-[#3D2C2C]/70 max-w-2xl mx-auto leading-relaxed">{c.ctaBox.body}</p>
            <Link 
              href={c.ctaBox.buttonHref}
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
            >
              {c.ctaBox.buttonText}
            </Link>
          </div>

          <footer className="not-prose border-t border-[#E8A0A8]/20 pt-16">
            <div className="mb-16">
              <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label max-w-2xl">
                Sources: {c.sources}
              </p>
            </div>

            <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8 uppercase tracking-tight">Read This Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {c.related.map((post, idx) => (
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
