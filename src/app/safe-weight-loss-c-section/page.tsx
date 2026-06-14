import { Metadata } from "next";
import { conditionPages } from "@/data/condition-pages";
import ConditionPageTemplate from "@/components/ConditionPageTemplate";

const page = conditionPages.find((p) => p.slug === "safe-weight-loss-c-section")!;

export function generateMetadata(): Metadata {
  return {
    title: `${page.metaTitle} | NurtureCalc`,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: `${page.metaTitle} | NurtureCalc`,
      description: page.metaDescription,
      url: `https://nurturecalc.com/${page.slug}`,
      type: "website",
    },
  };
}

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nurturecalc.com/" },
      { "@type": "ListItem", position: 2, name: page.breadcrumbLabel, item: `https://nurturecalc.com/${page.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ConditionPageTemplate data={page} />
    </>
  );
}
