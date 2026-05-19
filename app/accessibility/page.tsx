import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility statement for Kealey Design, including our commitment to usable, accessible website experiences.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  const accessibilityPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Accessibility Statement",
    description: "Accessibility statement for Kealey Design.",
    url: `${siteUrl}/accessibility`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Accessibility Statement page">
        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h1 className="legal-page__title">Accessibility Statement</h1>
              <p><strong>Effective date:</strong> May 19, 2026</p>

              <h2>Our Commitment</h2>
              <p>
                Kealey Design is committed to making this website usable for as many people as possible,
                including visitors using assistive technologies such as screen readers, keyboard navigation,
                browser zoom, and alternative input devices.
              </p>

              <h2>Accessibility Practices</h2>
              <p>
                We aim to follow practical web accessibility practices, including semantic HTML, descriptive
                link text, readable contrast, responsive layouts, image alt text where appropriate, and clear
                form labels.
              </p>

              <h2>Ongoing Improvements</h2>
              <p>
                Accessibility is an ongoing process. As the website changes, we review templates, content,
                navigation, and interactive elements so the experience remains clear and usable across devices.
              </p>

              <h2>Feedback</h2>
              <p>
                If you experience an accessibility issue on this website, please contact us through the{" "}
                <Link href="/contact">contact page</Link>. Include the page URL and a short description of
                the issue so we can investigate and improve it.
              </p>

              <h2>Related Policies</h2>
              <p>
                You can also review our <Link href="/privacy">Privacy Policy</Link> and{" "}
                <Link href="/terms">Terms of Use</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accessibilityPageSchema) }}
      />
    </div>
  );
}
