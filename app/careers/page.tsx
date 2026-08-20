import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const pageTitle = "Careers";
const fullTitle = "Remote Appointment Setter Job | Commission Only Sales Representative | Kealey Design";
const metaDescription =
  "Kealey Design is hiring a remote appointment setter / commission-only sales representative. We provide the leads. Apply in under 2 minutes.";

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

const roles = [
  {
    title: "Appointment Setter / Sales Representative",
    subtitle: "Remote · Commission Only",
    highlight: "15%–35% commission on closed revenue",
    href: "/careers/remote-appointment-setter",
  },
];

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
                Open role:{" "}
                <Link className="careers-page__card-link" href="/careers/remote-appointment-setter">
                  Remote appointment setter / sales representative
                </Link>
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

          <section className="careers-page__section" aria-label="Open roles">
            <h2 className="careers-page__section-title">Open roles</h2>
            <div className="careers-page__grid">
              {roles.map((role) => (
                <article key={role.href} className="careers-page__card">
                  <p className="careers-page__card-subtitle">{role.subtitle}</p>
                  <h3 className="careers-page__card-title">{role.title}</h3>
                  <p className="careers-page__card-highlight">{role.highlight}</p>
                  <Link className="careers-page__card-link" href={role.href}>
                    View details & apply
                    <ArrowRight aria-hidden="true" className="careers-page__card-icon" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

