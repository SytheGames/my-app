import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Kealey Design website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const termsPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Use",
    description: "Terms of Use for Kealey Design website and services.",
    url: `${siteUrl}/terms`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Terms of Use page">
        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h1 className="legal-page__title">Terms of Use</h1>
              <p><strong>Effective date:</strong> March 10, 2026</p>

              <h2>Acceptance of Terms</h2>
              <p>
                By using this website, you agree to these terms. If you do not agree,
                please do not use the website.
              </p>

              <h2>Website Content</h2>
              <p>
                All website content is provided for general informational purposes and may be updated
                without notice.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                Unless otherwise stated, content on this website is owned by Kealey Design and may not be
                reproduced or redistributed without permission.
              </p>

              <h2>Service Information</h2>
              <p>
                Project scope, timelines, and pricing are defined separately through proposals and client agreements.
                Website content does not constitute a binding service contract.
              </p>

              <h2>Third-Party Links and Tools</h2>
              <p>
                This website may link to third-party services. Kealey Design is not responsible for
                external content, policies, or service availability.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Kealey Design is not liable for direct or indirect damages resulting from use of this website,
                to the extent permitted by applicable law.
              </p>

              <h2>Governing Law</h2>
              <p>
                These terms are governed by the laws of Ontario, Canada.
              </p>

              <h2>Contact</h2>
              <p>
                For terms-related questions, contact Kealey Design through the contact page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsPageSchema) }}
      />
    </div>
  );
}
