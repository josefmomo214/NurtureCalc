import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { metadata as pageMetadata, articleHeader, mainContent, faqs, ctaData, sourcesList, relatedLinks } from './content';

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  alternates: {
    canonical: '/blog/postpartum-sex',
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    url: 'https://nurturecalc.com/blog/postpartum-sex',
    type: 'article',
    publishedTime: articleHeader.publishedAt + 'T00:00:00Z',
    authors: ['https://nurturecalc.com/author/nurturecalc-team'],
  },
};

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleHeader.title,
    "description": pageMetadata.description,
    "author": {
      "@type": "Organization",
      "name": articleHeader.author,
      "url": "https://nurturecalc.com/author/nurturecalc-team/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com"
    },
    "datePublished": articleHeader.publishedAt,
    "dateModified": articleHeader.publishedAt,
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="flex-1 max-w-3xl mx-auto w-full py-16 px-6">
        <article className="prose prose-rose lg:prose-lg max-w-none text-[#3D2C2C]/80 font-sans leading-relaxed">
          
          <header className="mb-12 not-prose border-b border-[#E8A0A8]/20 pb-10 text-center">
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center gap-3">
                <span className="bg-[#F9E4E8] text-[#D58A92] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-label">{articleHeader.category}</span>
              </div>
              <div className="space-y-1">
                <Link href="/author/nurturecalc-team" className="text-sm font-label font-bold tracking-wide text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors">
                  {articleHeader.author}
                </Link>
                <p className="text-xs font-label text-[#3D2C2C]/70">
                  Written by the NurtureCalc Editorial Team · Reviewed against WHO & NHS guidelines
                </p>
                <p className="text-[10px] text-[#3D2C2C]/50 font-label tracking-wide uppercase">
                  Fact-checked against published medical guidelines
                </p>
                <span className="block text-xs text-[#3D2C2C]/50 font-label tracking-wide">{articleHeader.readTime}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D2C2C] leading-snug mb-6">
              {articleHeader.title}
            </h1>
            <p className="text-xl font-serif italic text-[#E8A0A8]">
              {articleHeader.subtitle}
            </p>
          </header>

          <div className="article-body space-y-6">
            {mainContent.map((section, index) => {
              if (section.type === "h2") {
                return <h2 key={index} className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4" dangerouslySetInnerHTML={{ __html: section.html }} />
              }
              if (section.type === "h3") {
                return <h3 key={index} className="text-xl font-serif text-[#3D2C2C] mt-8 mb-4" dangerouslySetInnerHTML={{ __html: section.html }} />
              }
              return <p key={index} dangerouslySetInnerHTML={{ __html: section.html }} />
            })}
          </div>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8 my-8">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-[#E8A0A8]/20 shadow-sm">
                <h4 className="text-lg font-serif text-[#3D2C2C] mb-3">{faq.question}</h4>
                <p className="text-sm leading-relaxed text-[#3D2C2C]/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="not-prose my-12 bg-white rounded-3xl p-8 border border-[#E8A0A8]/30 shadow-[0_4px_20px_rgba(232,160,168,0.1)] text-center space-y-4">
            <h3 className="text-xl font-serif text-[#3D2C2C]">Postpartum Health Checker</h3>
            <p className="text-[#3D2C2C]/70">{ctaData.text}</p>
            <Link 
              href={ctaData.linkUrl}
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all shadow-md hover:shadow-lg mt-4"
            >
              {ctaData.linkText}
            </Link>
          </div>

          <div className="not-prose p-6 bg-[#F9E4E8]/50 rounded-xl mt-12 mb-16">
            <p className="text-sm text-[#3D2C2C]/60 italic">
              <strong>Disclaimer:</strong> Always speak to your doctor or midwife before making changes to your lifestyle after birth. This article provides general educational information and is not a substitute for medical advice.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E8A0A8]/10">
            <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label">
              Sources: {sourcesList.join(' — ')}
            </p>
          </div>

        </article>

        <footer className="border-t border-[#E8A0A8]/20 pt-12 mt-12">
          <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8">You might also like...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedLinks.map((link, index) => (
              <Link key={index} href={link.url} className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8] hover:shadow-md transition-all">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">{link.category}</span>
                <h4 className="text-lg font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">{link.title}</h4>
              </Link>
            ))}
          </div>
        </footer>

      </main>

      <Footer />
    </div>
  );
}
