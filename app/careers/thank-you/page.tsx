import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Application received | Kealey Design",
  description: "Thanks for applying to Kealey Design. We will review your application and follow up if it’s a match.",
  alternates: { canonical: "/careers/thank-you" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CareersThankYouPage() {
  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="thank-you-page" aria-label="Application received">
        <section className="thank-you-page__intro">
          <div className="thank-you-page__inner">
            <p className="thank-you-page__eyebrow">THANK YOU</p>
            <h1 className="thank-you-page__title">Your application was submitted.</h1>
            <p className="thank-you-page__lead">
              If your experience is a fit, we&apos;ll reach out with next steps.
            </p>
            <Link href="/careers" className="thank-you-page__link">
              Back to careers
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

