import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const pageTitle = "Careers";
const fullTitle = "Careers | Kealey Design";
const metaDescription =
  "Kealey Design is a web design + SEO agency. We don't have any open roles right now — email us if you'd like to be considered for future openings.";

export const metadata: Metadata = {
  title: pageTitle,
  description: metaDescription,
  alternates: { canonical: "/careers" },
  openGraph: {
    title: fullTitle,
    description: metaDescription,
    url: "/careers",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: metaDescription,
    images: ["/og-image.jpg"],
  },
};

export default function CareersPage() {
  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="careers-page" aria-label="Careers">
        <div className="careers-page__inner">
          <section className="careers-page__hero" aria-label="Careers overview">
            <div className="careers-page__hero-copy">
              <p className="careers-page__eyebrow">CAREERS</p>
              <h1 className="careers-page__title">Work with Kealey Design</h1>
              <p className="careers-page__lead">
                We are a web design + SEO agency that helps service-based businesses grow through better websites, local
                visibility, and lead generation systems.
              </p>
              <p className="careers-page__sublead">
                We don&apos;t have any open roles right now. Interested in working with us? Email{" "}
                <a className="careers-page__card-link" href="mailto:matt@kealeydesign.ca">
                  matt@kealeydesign.ca
                </a>
                .
              </p>
            </div>

            <div className="careers-page__hero-visual" aria-hidden="true">
              <Image
                src="/graphics/careers-hero.svg"
                alt=""
                width={640}
                height={420}
                className="careers-page__hero-image"
                priority
              />
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

