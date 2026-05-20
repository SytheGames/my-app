"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  Bus,
  Clapperboard,
  Cpu,
  GraduationCap,
  HeartPulse,
  Plane,
  Scale,
  Shirt,
  ShoppingBag,
  Store,
  UtensilsCrossed,
} from "lucide-react";

type Industry = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  Icon: LucideIcon;
};

const industries: Industry[] = [
  {
    id: "b2b",
    label: "B2B",
    title: "B2B",
    description:
      "B2B website design for manufacturers, service firms, and contractors across Chatham-Kent and Southwestern Ontario.",
    Icon: BriefcaseBusiness,
    bullets: [
      "Professional design",
      "Interactive user experience",
      "Responsive and SEO-optimized pages",
      "Research-backed content strategy",
      "Lead generation focused layouts",
    ],
  },
  {
    id: "b2c",
    label: "B2C",
    title: "B2C",
    description:
      "Consumer-focused web design that helps local businesses generate more leads, calls, and online sales.",
    Icon: ShoppingBag,
    bullets: [
      "Brand-forward visuals",
      "Fast purchase journeys",
      "Retention-focused UX",
      "Cross-device consistency",
      "Performance analytics setup",
    ],
  },
  {
    id: "d2c",
    label: "D2C",
    title: "D2C",
    description:
      "Direct-to-consumer website strategy built for stronger brand visibility and better ecommerce conversion rates.",
    Icon: Store,
    bullets: [
      "Narrative-led homepage strategy",
      "Conversion-ready product pages",
      "Subscription and repeat-order flows",
      "Lifecycle email integration",
      "Paid media landing page support",
    ],
  },
  {
    id: "food-beverage",
    label: "Food & Beverage",
    title: "Food & Beverage",
    description:
      "Restaurant and food business websites designed for local search visibility, online ordering, and fast mobile browsing.",
    Icon: UtensilsCrossed,
    bullets: [
      "Menu and product UX",
      "Ordering and booking paths",
      "Location-first SEO",
      "Visual brand cohesion",
      "Promotion campaign pages",
    ],
  },
  {
    id: "education",
    label: "Education",
    title: "Education",
    description:
      "Education websites with clear navigation and enrollment-focused pages for schools and training organizations.",
    Icon: GraduationCap,
    bullets: [
      "Program discovery design",
      "Enrollment funnel optimization",
      "Accessibility-minded layouts",
      "Campus or online pathways",
      "Content hubs for authority",
    ],
  },
  {
    id: "transportation",
    label: "Transportation",
    title: "Transportation",
    description:
      "Transportation websites that communicate reliability, service areas, and quick quote pathways.",
    Icon: Bus,
    bullets: [
      "Service route clarity",
      "Quote and booking flows",
      "Trust and compliance signals",
      "Fleet or logistics showcases",
      "Call-first mobile experiences",
    ],
  },
  {
    id: "health-care",
    label: "Health Care",
    title: "Health Care",
    description:
      "Healthcare web design for clinics and medical practices with trust-first content and appointment-driven UX.",
    Icon: HeartPulse,
    bullets: [
      "Appointment conversion UX",
      "Service information architecture",
      "Privacy-forward page design",
      "Provider profile pages",
      "Local search optimization",
    ],
  },
  {
    id: "travel",
    label: "Travel",
    title: "Travel",
    description:
      "Travel and tourism websites that drive bookings with strong visuals, clear packages, and frictionless planning flows.",
    Icon: Plane,
    bullets: [
      "Package and itinerary layout",
      "Booking inquiry optimization",
      "Visual destination storytelling",
      "Seasonal campaign pages",
      "Review-driven trust cues",
    ],
  },
  {
    id: "fashion",
    label: "Fashion",
    title: "Fashion",
    description:
      "Fashion ecommerce websites that blend visual storytelling, product discovery, and checkout optimization.",
    Icon: Shirt,
    bullets: [
      "Lookbook and campaign blocks",
      "Collection-first navigation",
      "Size and fit UX",
      "Mobile shopping speed",
      "Merchandising strategy support",
    ],
  },
  {
    id: "entertainment",
    label: "Entertainment",
    title: "Entertainment",
    description:
      "Entertainment websites built for events, ticket sales, and audience engagement campaigns.",
    Icon: Clapperboard,
    bullets: [
      "Event and ticket pathways",
      "Media-rich content layouts",
      "Fan engagement sections",
      "Campaign launch pages",
      "Social funnel integration",
    ],
  },
  {
    id: "real-estate",
    label: "Real Estate",
    title: "Real Estate",
    description:
      "Real estate website design with lead-focused listing layouts, agent profiles, and local SEO strategy.",
    Icon: Building2,
    bullets: [
      "Listing and neighborhood UX",
      "Lead capture optimization",
      "Agent and brokerage positioning",
      "SEO for local intent",
      "Mobile listing performance",
    ],
  },
  {
    id: "law",
    label: "Law",
    title: "Law",
    description:
      "Law firm websites that build trust, showcase expertise, and convert local search traffic into consultations.",
    Icon: Scale,
    bullets: [
      "Practice-area focused UX",
      "Case evaluation conversion flows",
      "Trust-oriented content hierarchy",
      "Attorney profile structure",
      "Local search visibility setup",
    ],
  },
  {
    id: "technology",
    label: "Technology",
    title: "Technology",
    description:
      "Technology websites that simplify complex services and support demo, trial, and inbound lead generation goals.",
    Icon: Cpu,
    bullets: [
      "Product messaging architecture",
      "Demo/trial conversion design",
      "Feature storytelling sections",
      "Scalable content systems",
      "B2B demand-gen landing pages",
    ],
  },
];

const industryPageLinks = [
  { label: "HVAC companies", href: "/industries/hvac" },
  { label: "Roofing companies", href: "/roofing-company-web-design-southwestern-ontario" },
  { label: "Contractors", href: "/contractor-web-design" },
  { label: "Chiropractors", href: "/chiropractor-web-design" },
  { label: "All industries", href: "/industries" },
];

export function IndustriesWeServe() {
  const [activeIndustryId, setActiveIndustryId] = useState(industries[0].id);
  const activeIndustry = useMemo(
    () => industries.find((item) => item.id === activeIndustryId) ?? industries[0],
    [activeIndustryId],
  );

  return (
    <section id="industries" className="industries" aria-label="Industries we serve">
      <div className="industries__inner">
        <h2 className="industries__heading">Industries We Serve</h2>
        <p className="industries__lead">
          Kealey Design supports businesses across Chatham-Kent and Southwestern Ontario with
          conversion-focused web design, local SEO, and performance-first digital strategy.
        </p>
        <nav className="industries__links" aria-label="Featured industry pages">
          {industryPageLinks.map((link) => (
            <Link key={link.href} href={link.href} className="industries__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="industries__layout">
          <aside className="industries__content" aria-live="polite">
            <h3 className="industries__content-title">{activeIndustry.title}</h3>
            <p className="industries__content-text">{activeIndustry.description}</p>
            <h4 className="industries__content-subtitle">Why choose these services?</h4>
            <ul className="industries__list">
              {activeIndustry.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>

          <div className="industries__tabs" role="tablist" aria-label="Industries">
            {industries.map((item) => {
              const isActive = item.id === activeIndustry.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`industries__tab ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveIndustryId(item.id)}
                >
                  <span className="industries__icon" aria-hidden>
                    <item.Icon className="industries__icon-svg" />
                  </span>
                  <span className="industries__label">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
