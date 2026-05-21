"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  AirVent,
  Construction,
  Droplet,
  Hammer,
  Home,
  LifeBuoy,
  TreePine,
  Zap,
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
    id: "hvac",
    label: "HVAC",
    title: "HVAC",
    description:
      "HVAC websites need to support both emergency calls and planned replacement work. We structure pages for seasonal demand, mobile-first calls-to-action, and clear service-area messaging.",
    Icon: AirVent,
    bullets: [
      "Tap-to-call and short quote forms for mobile searches",
      "Seasonal service pages for repair, maintenance, and replacement",
      "Map pack support through clear service areas and trust signals",
      "Fast load times so urgent visitors do not bounce",
      "Reviews and proof placed before the first scroll break",
    ],
  },
  {
    id: "roofing",
    label: "Roofing",
    title: "Roofing",
    description:
      "Roofing prospects want answers fast: repair vs replacement, warranty confidence, and a clear next step for estimates. The site needs proof, speed, and simple conversion paths.",
    Icon: Hammer,
    bullets: [
      "Service pages for repair, replacement, storm damage, and inspections",
      "Before/after galleries and project proof that build trust",
      "Estimate request flows that reduce friction on mobile",
      "Local relevance signals for service-area searches",
      "Clear positioning for the jobs you want more of",
    ],
  },
  {
    id: "plumbing",
    label: "Plumbing",
    title: "Plumbing",
    description:
      "Plumbing searches are often high urgency. We build websites that make it obvious who you serve, what you fix, and how to call or request service within seconds.",
    Icon: Droplet,
    bullets: [
      "Emergency-first mobile layout and contact visibility",
      "Service pages for common problems and high-value jobs",
      "Service area clarity and local intent optimization",
      "Trust cues like reviews, guarantees, and real photos",
      "Fast forms that work well on phones",
    ],
  },
  {
    id: "electrical",
    label: "Electrical",
    title: "Electrical",
    description:
      "Electrical websites need to build confidence quickly: safety, licensing, and clear service descriptions. We design around calls, quote requests, and local search visibility.",
    Icon: Zap,
    bullets: [
      "Clear service pages for residential and commercial work",
      "Trust-first sections for licensing, insurance, and reviews",
      "Conversion paths that are obvious from the first screen",
      "Local page structure for service-plus-city searches",
      "Fast performance and clean mobile UX",
    ],
  },
  {
    id: "concrete",
    label: "Concrete",
    title: "Concrete",
    description:
      "Concrete contractor websites need proof and clarity. We build pages that show real work, explain services, and make quote requests easy for homeowners and builders.",
    Icon: Construction,
    bullets: [
      "Project galleries built for fast scanning on mobile",
      "Service pages for driveways, slabs, pads, and repairs",
      "Local search structure for service-area demand",
      "Conversion-focused quote request forms",
      "Brand and positioning that looks credible online",
    ],
  },
  {
    id: "landscaping",
    label: "Landscaping",
    title: "Landscaping",
    description:
      "Landscaping websites need visual proof, local relevance, and clear seasonal offers. We structure the site so visitors can browse work and request quotes without friction.",
    Icon: TreePine,
    bullets: [
      "Before/after sections that show results quickly",
      "Seasonal service pages and offer positioning",
      "Local SEO foundations for city and neighborhood intent",
      "Fast, mobile-first quote request flows",
      "Project proof and social credibility placement",
    ],
  },
  {
    id: "restoration",
    label: "Restoration",
    title: "Restoration",
    description:
      "Restoration prospects are stressed and need certainty. We build sites that reduce hesitation with proof, clear service coverage, and fast paths to call or request help.",
    Icon: LifeBuoy,
    bullets: [
      "Emergency-first messaging and phone visibility",
      "Trust signals near the top of every core page",
      "Clear service and coverage structure for local searches",
      "Fast performance on mobile connections",
      "Simple forms for immediate quote or inspection requests",
    ],
  },
  {
    id: "home-services",
    label: "Home Services",
    title: "Home Services",
    description:
      "For home service companies, the website needs to answer two questions fast: what you do and how to contact you. We build clear paths for calls, quotes, and local search.",
    Icon: Home,
    bullets: [
      "Service clarity and simple navigation for busy visitors",
      "Conversion paths for calls, quotes, and bookings",
      "Local SEO structure for service-plus-city searches",
      "Trust-first sections for reviews and proof",
      "Fast mobile performance across every page",
    ],
  },
];

const industryPageLinks = [
  { label: "HVAC companies", href: "/industries/hvac" },
  { label: "Roofing companies", href: "/roofing-company-web-design-southwestern-ontario" },
  { label: "Contractors", href: "/contractor-web-design" },
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
        <h2 className="industries__heading">Built for Contractors &amp; Local Service Businesses</h2>
        <p className="industries__lead">
          We work with businesses that rely on trust, reputation, and lead flow to grow. Each page is structured around
          what customers need to see before they request an estimate or call your team.
        </p>
        <p className="industries__stack" aria-label="Industries served">
          HVAC &#8226; Roofing &#8226; Plumbing &#8226; Electrical &#8226; Concrete &#8226; Landscaping &#8226; Restoration &#8226; Home Services
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
