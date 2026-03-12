import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Locations",
  description: "Web design and social media services across Chatham, Windsor, London, Sarnia, and Leamington.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Locations",
    description: "Web design and social media services across Chatham, Windsor, London, Sarnia, and Leamington.",
    url: "/locations",
    type: "website",
    images: [{ url: "/images/locations-images/Chatham_ON_1.JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locations",
    description: "Web design and social media services across Chatham, Windsor, London, Sarnia, and Leamington.",
    images: ["/images/locations-images/Chatham_ON_1.JPG"],
  },
};

const webDesignLocations = [
  {
    label: "Web Design Chatham",
    href: "/locations/web-design-chatham",
    image: "/images/locations-images/Chatham_ON_1.JPG",
    copy: "We help Chatham businesses launch modern, conversion-focused websites that are easy to manage and built for steady local lead generation.",
  },
  {
    label: "Web Design Windsor",
    href: "/locations/web-design-windsor",
    image: "/images/locations-images/Windsor,_Ontario_(aerial_view).jpg",
    copy: "For Windsor companies, we design high-clarity websites that improve digital positioning and support better inbound lead quality.",
  },
  {
    label: "Web Design London",
    href: "/locations/web-design-london",
    image: "/images/locations-images/London_Ontario_Skyline_2017_(cropped).jpg",
    copy: "Our London web projects are structured for growth, with strong messaging, responsive UX, and search-friendly page architecture.",
  },
  {
    label: "Web Design Sarnia",
    href: "/locations/web-design-sarnia",
    image: "/images/locations-images/Sarnia_skyline.JPG",
    copy: "In the Sarnia and Lambton region, we create practical websites that make your services easy to understand and easy to contact.",
  },
  {
    label: "Web Design Leamington",
    href: "/locations/web-design-leamington",
    image: "/images/locations-images/Lake_Erie_Leamington.jpg",
    copy: "Leamington businesses rely on websites that build trust quickly, and we design clean digital experiences that support consistent lead flow.",
  },
];

const socialMediaLocations = [
  {
    label: "Social Media Management Chatham",
    href: "/locations/social-media-management-chatham",
    image: "/images/locations-images/Chatham_ON_1.JPG",
    copy: "Monthly social media management for Chatham businesses with custom graphics, posting support, and profile optimization.",
  },
];

export default function LocationsPage() {
  const locationsPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Locations",
    description: "Web design and social media services across Chatham, Windsor, London, Sarnia, and Leamington.",
    url: `${siteUrl}/locations`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Locations page">
        <SplitPageHero
          eyebrow="LOCATIONS"
          title="Cities We Serve"
          description="Localized web design and SEO services tailored to each market across Southwestern Ontario."
          imageSrc="/daveychiro.png"
          imageAlt="City-focused web design coverage"
          ctaLabel="Talk about your location"
          ctaHref="/contact"
        />

        <section className="split-page__section locations-page">
          <div className="locations-page__inner">
            <div className="locations-page__group">
              <h2 className="locations-page__group-title">Web Design Locations</h2>
              <div className="locations-page__grid">
                {webDesignLocations.map((location) => (
                  <Link key={location.href} href={location.href} className="locations-page__link-card">
                    <span className="locations-page__card-image-wrap">
                      <Image
                        src={location.image}
                        alt={location.label}
                        className="locations-page__card-image"
                        width={1200}
                        height={760}
                      />
                    </span>
                    <span className="locations-page__card-label">{location.label}</span>
                    <span className="locations-page__card-subcopy">{location.copy}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="locations-page__group">
              <h2 className="locations-page__group-title">Social Media Management Locations</h2>
              <div className="locations-page__grid">
                {socialMediaLocations.map((location) => (
                  <Link key={location.href} href={location.href} className="locations-page__link-card">
                    <span className="locations-page__card-image-wrap">
                      <Image
                        src={location.image}
                        alt={location.label}
                        className="locations-page__card-image"
                        width={1200}
                        height={760}
                      />
                    </span>
                    <span className="locations-page__card-label">{location.label}</span>
                    <span className="locations-page__card-subcopy">{location.copy}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text" aria-label="Location image credits">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h2>Image Credits</h2>
              <p>All location images were sourced from Wikipedia.</p>
              <ul>
                <li>London image credit: Mcalpinestudios</li>
                <li>Chatham image credit: P199</li>
                <li>Sarnia image credit: P199</li>
                <li>Windsor image credit: WMrapids</li>
                <li>Leamington image credit: Adam Bishop</li>
              </ul>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Need support in your city market?"
          copy="Tell us where you operate and we will recommend the best web strategy for your local market."
          subject="New Locations Page Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsPageSchema) }}
      />
    </div>
  );
}
