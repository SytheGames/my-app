import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Kealey Design.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const privacyPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description: "Privacy Policy for Kealey Design.",
    url: `${siteUrl}/privacy`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Privacy Policy page">
        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h1 className="legal-page__title">Privacy Policy</h1>
              <p><strong>Effective date:</strong> March 10, 2026</p>

              <h2>Information We Collect</h2>
              <p>
                Kealey Design may collect personal information you voluntarily submit through contact forms,
                including your name, email address, phone number, and project details.
              </p>

              <h2>How We Use Information</h2>
              <p>
                We use submitted information to respond to inquiries, provide requested services,
                and improve our website and communication process.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                This website uses third-party services such as Web3Forms and Cal.com for inquiry handling
                and scheduling. Information submitted through those tools is processed according to their
                respective privacy policies.
              </p>

              <h2>Cookies and Analytics</h2>
              <p>
                We may use standard analytics and technical cookies to understand website performance,
                visitor behavior, and opportunities to improve user experience.
              </p>

              <h2>Data Retention and Security</h2>
              <p>
                We keep personal information only as long as reasonably necessary for business and legal purposes
                and take reasonable steps to protect submitted data.
              </p>

              <h2>Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information by contacting us.
              </p>

              <h2>Contact</h2>
              <p>
                For privacy-related questions, contact Kealey Design through the contact page on this website.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPageSchema) }}
      />
    </div>
  );
}
