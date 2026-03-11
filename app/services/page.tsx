import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChartNoAxesCombined, Globe, RefreshCw, ShoppingCart } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Kealey Design services including web design, website redesign, local SEO, and ecommerce website development.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services",
    description:
      "Explore Kealey Design services including web design, website redesign, local SEO, and ecommerce website development.",
    url: "/services",
    type: "website",
    images: [{ url: "/arcstage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services",
    description:
      "Explore Kealey Design services including web design, website redesign, local SEO, and ecommerce website development.",
    images: ["/arcstage.png"],
  },
};

const services = [
  {
    title: "Web Design",
    description:
      "Custom web design for small businesses in Chatham and Southwestern Ontario, focused on mobile UX and conversion.",
    Icon: Globe,
    href: "/services/web-design",
  },
  {
    title: "Website Redesign",
    description:
      "Modern redesign projects that improve speed, readability, and lead generation without losing brand identity.",
    Icon: RefreshCw,
    href: "/services/website-redesign",
  },
  {
    title: "Local SEO",
    description:
      "Google Business Profile optimization, location-targeted content, and local search strategies that drive qualified traffic.",
    Icon: ChartNoAxesCombined,
    href: "/services/local-seo",
  },
  {
    title: "Ecommerce Websites",
    description:
      "Conversion-focused ecommerce experiences designed for product discovery, trust, and smooth checkout flows.",
    Icon: ShoppingCart,
    href: "/services/ecommerce-websites",
  },
];

export default function ServicesPage() {
  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Services",
    description:
      "Explore Kealey Design services including web design, website redesign, local SEO, and ecommerce website development.",
    url: `${siteUrl}/services`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Services page">
        <SplitPageHero
          eyebrow="SERVICES"
          title="Web Design & SEO Services"
          description="A deeper look at the services Kealey Design offers to businesses across Chatham and Southwestern Ontario."
          imageSrc="/arcstage.png"
          imageAlt="Kealey Design services showcase"
          ctaLabel="Book a consultation"
          ctaHref="/contact"
        />

        <section className="split-page__section services-page__list" aria-label="Service categories">
          <div className="services-page__inner">
            <div className="services-page__grid">
              {services.map((service) => (
                <article key={service.title} className="services-page__card">
                  <span className="services-page__card-icon-wrap" aria-hidden>
                    <service.Icon className="services-page__card-icon" />
                  </span>
                  <h2 className="services-page__card-title">{service.title}</h2>
                  <p className="services-page__card-copy">{service.description}</p>
                  <Link href={service.href} className="services-page__card-link">
                    View service
                    <ArrowUpRight className="services-page__card-icon" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Need help choosing the right service mix?"
          copy="Tell us what you are trying to improve and we will recommend the best starting point based on your timeline and goals."
          subject="New Services Page Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />
    </div>
  );
}
