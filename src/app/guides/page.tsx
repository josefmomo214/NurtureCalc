import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { guides } from "@/data/guides";

export function generateMetadata(): Metadata {
  const title = "Free Printable Guides — Postpartum Recovery Resources | NurtureCalc";
  const description = "Free, printable postpartum guides — no sign-up required. Breastfeeding, weight loss, and pelvic floor recovery, backed by clinical guidelines.";

  return {
    title,
    description,
    alternates: {
      canonical: "/guides",
    },
    openGraph: {
      title,
      description,
      url: "https://nurturecalc.com/guides",
      type: "website",
    },
  };
}

export default function GuidesHub() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nurturecalc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Free Guides", "item": "https://nurturecalc.com/guides/" }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full py-16 px-6">
        <header className="space-y-4 text-center border-b border-[#E8A0A8]/20 pb-12 mb-12">
          <h1 className="text-4xl md:text-5xl tracking-tight text-[#3D2C2C] font-serif">
            Free Printable Guides
          </h1>
          <p className="text-[#E8A0A8] text-xl font-serif italic">
            No sign-up required. Print them, save them, share them with anyone who needs them.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.slug}
              className="bg-[#FFFDF9] rounded-2xl p-6 shadow-[0_4px_20px_rgba(232,160,168,0.12)] hover:shadow-[0_10px_40px_rgba(232,160,168,0.3)] transition-shadow duration-300 flex flex-col"
            >
              <span className="font-label uppercase tracking-wider text-xs text-[#E8A0A8] font-bold mb-3">
                Free PDF · {guide.pageCount} pages
              </span>

              <h2 className="font-serif text-xl text-[#3D2C2C] mb-3">
                {guide.title}
              </h2>

              <p className="text-[#3D2C2C]/70 leading-relaxed mb-8 flex-1">
                {guide.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={`/guides/${guide.filename}`}
                  download
                  className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-6 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
                >
                  Download PDF →
                </a>
                <Link
                  href={guide.relatedCalculatorUrl}
                  className="font-label uppercase tracking-widest text-[#E8A0A8] hover:text-[#D58A92] font-bold text-xs transition-colors"
                >
                  Try the {guide.relatedCalculatorName} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
