import type { Metadata } from "next";
import { Noto_Serif, Be_Vietnam_Pro, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

import CookieBanner from "@/components/CookieBanner";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "NurtureCalc — Free Postpartum Health Calculators for New Mothers",
  description: "Free science-based postpartum calculators for new mothers. Calculate safe weight loss rates, breastfeeding calorie needs, return-to-exercise timelines, and more.",
  keywords: "postpartum calculator, breastfeeding calories, return to exercise after birth, pelvic floor recovery, baby weight percentile",
  openGraph: {
    siteName: "NurtureCalc",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nurturecalc.com/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body 
        className={`${notoSerif.variable} ${beVietnamPro.variable} ${plusJakartaSans.variable} min-h-full flex flex-col antialiased`}
        suppressHydrationWarning={true}
      >
        <ClientProviders>
          {children}
          <CookieBanner />
        </ClientProviders>
      </body>
    </html>
  );
}
