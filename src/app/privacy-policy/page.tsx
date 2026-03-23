import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — NurtureCalc',
  description: 'NurtureCalc privacy policy. Learn how we handle data, how Google AdSense uses cookies on this site, and how to manage your ad preferences.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6">
        <article className="space-y-16">
          <header className="space-y-4 max-w-2xl mx-auto text-center border-b border-[#E8A0A8]/20 pb-12">
            <h1 className="text-4xl md:text-5xl tracking-tight text-[#3D2C2C] font-serif">
              Privacy <span className="text-[#E8A0A8] italic">Policy</span>
            </h1>
            <p className="font-label text-xs font-bold text-[#3D2C2C]/50 uppercase tracking-widest">
              Last updated: March 2026
            </p>
          </header>

          <div className="space-y-12 text-[#3D2C2C]/80 text-lg leading-relaxed prose prose-rose max-w-none">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-[#3D2C2C]">What data we collect</h2>
              <p>
                At NurtureCalc, your privacy is our priority. We do not require you to sign up, create an account, or provide personal identifiable information to use our calculators. All health calculations happen directly in your browser and are not saved to our servers.
              </p>
              <p>
                To keep NurtureCalc free and to understand how our site is used, we utilize standard cookies through Google Analytics and Google AdSense.
              </p>
            </section>

            <section className="space-y-4 bg-[#FFFDF9] p-8 rounded-2xl border border-[#E8A0A8]/20">
              <h2 className="text-2xl font-serif text-[#3D2C2C]">How Google AdSense uses cookies</h2>
              <p>
                Third party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#E8A0A8]">
                <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to NurtureCalc and/or other sites on the Internet.</li>
                <li>These cookies help ensure the ads you see are relevant and useful.</li>
                <li>We do not have access to or control over these third-party cookies.</li>
              </ul>
              <p className="pt-4">
                You can learn more by reading <a href="https://policies.google.com/privacy" className="text-[#E8A0A8] hover:underline transition-colors" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-[#3D2C2C]">How to opt out of personalized ads</h2>
              <p>
                Users may opt out of personalized advertising by visiting Google's <a href="https://myadcenter.google.com/" className="text-[#E8A0A8] hover:underline transition-colors" target="_blank" rel="noopener noreferrer">Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" className="text-[#E8A0A8] hover:underline transition-colors" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-[#3D2C2C]">Children's Privacy</h2>
              <p>
                NurtureCalc is designed to support mothers and parents. Our services are not directed at or intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-[#3D2C2C]">Contact Us</h2>
              <p>
                If you have any questions or concerns about this privacy policy or our data practices, please reach out directly at <a href="mailto:hello@nurturecalc.com" className="text-[#E8A0A8] hover:underline font-medium">hello@nurturecalc.com</a>.
              </p>
            </section>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
