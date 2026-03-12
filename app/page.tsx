"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Bus,
  ChartNoAxesCombined,
  Clapperboard,
  Cpu,
  FileText,
  Globe,
  GraduationCap,
  HeartPulse,
  Plane,
  Scale,
  RefreshCw,
  ShoppingCart,
  Shirt,
  ShoppingBag,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getHomepageShowcaseTestimonials,
} from "@/lib/testimonials";

const aboutStats = [
  { value: "25+", label: "Websites launched" },
  { value: "7", label: "Years of delivery" },
  { value: "98%", label: "Client satisfaction" },
];

const services = [
  {
    title: "Website Design & Development",
    image: "/service-placeholder-web.svg",
    href: "/services/web-design",
    Icon: Globe,
    description:
      "Custom website design in Chatham-Kent with fast performance, mobile-first UX, and conversion-focused page structure.",
  },
  {
    title: "Local SEO & Management",
    image: "/service-placeholder-seo.svg",
    href: "/services/local-seo",
    Icon: ChartNoAxesCombined,
    description:
      "Local SEO services for Chatham-Kent and Southwestern Ontario, including on-page optimization and Google Business Profile management.",
  },
  {
    title: "Website Redesign",
    image: "/service-placeholder-redesign.svg",
    href: "/services/website-redesign",
    Icon: RefreshCw,
    description:
      "Website redesign services that modernize outdated pages, improve site speed, and create clearer conversion paths for local businesses.",
  },
  {
    title: "Ecommerce Websites",
    image: "/service-placeholder-ecommerce.svg",
    href: "/services/ecommerce-websites",
    Icon: ShoppingCart,
    description:
      "Ecommerce website development focused on product discovery, checkout UX, and better conversion performance across desktop and mobile.",
  },
];

const projects = [
  {
    title: "Arcstage",
    image: "/arcstage.png",
    href: "/portfolio/arcstage-growth-rebuild",
  },
  {
    title: "Davey Chiro",
    image: "/daveychiro.png",
    href: "/portfolio/davey-chiro-conversion-refresh",
  },
  {
    title: "Enhanced Concrete",
    image: "/enhancedconcrete.png",
    href: "/portfolio/enhanced-concrete-local-seo",
  },
  {
    title: "One Hundred King",
    image: "/onehundredking.png",
    href: "/portfolio/one-hundred-king-brand-positioning",
  },
  {
    title: "Pebbles Gravel",
    image: "/pebblesgravel.png",
    href: "/portfolio/pebbles-gravel-regional-lead-flow",
  },
  {
    title: "R3 Restomod",
    image: "/r3restomod.png",
    href: "/portfolio/r3-restomod-showcase-to-sales",
  },
];

const initialFeaturedBlogPosts = [
  {
    slug: "why-local-seo-matters-small-businesses-ontario",
    title: "Why Local SEO Matters for Small Businesses in Ontario",
    image: "/daveychiro.png",
    date: "2025-01-01",
  },
];

const homepageTestimonials = getHomepageShowcaseTestimonials();

type FeaturedBlogPost = {
  slug: string;
  title: string;
  image: string;
  date: string;
};

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

const faqs = [
  {
    question: "How long does a typical website project take?",
    answer:
      "Most projects are delivered in 4 to 8 weeks depending on scope, content readiness, and required integrations.",
  },
  {
    question: "Do you redesign existing websites or only build from scratch?",
    answer:
      "Both. We can modernize your current site structure or build a new one from the ground up based on your goals.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. Every page is designed and tested for responsive behavior across modern phones, tablets, and desktops.",
  },
  {
    question: "Can you help with copywriting and content planning?",
    answer:
      "Yes. We can assist with page messaging, content hierarchy, and conversion-focused copy recommendations.",
  },
  {
    question: "Do you provide local SEO with website builds?",
    answer:
      "Yes. Every website includes technical SEO fundamentals, and we offer ongoing local SEO for Chatham-Kent and Southwestern Ontario businesses.",
  },
  {
    question: "Can you integrate booking forms, CRMs, or third-party tools?",
    answer:
      "Absolutely. We regularly connect sites with CRMs, analytics platforms, booking systems, and marketing tools.",
  },
  {
    question: "Do you work with ecommerce websites?",
    answer:
      "Yes. We build and optimize ecommerce experiences including product pages, collections, and conversion flows.",
  },
  {
    question: "Do you offer web design services in Chatham and nearby towns?",
    answer:
      "Yes. We work with businesses in Chatham and nearby communities across Southwestern Ontario, including:",
    towns: ["Wallaceburg", "Tilbury", "Blenheim", "Ridgetown", "Dresden"],
  },
  {
    question: "Do you optimize for both Chatham and Chatham-Kent searches?",
    answer:
      "Yes. We naturally use both Chatham and Chatham-Kent throughout core pages, service content, and location messaging so your site can match how real people search in this area.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer post-launch support, maintenance, performance checks, and optional growth plans for ongoing improvements.",
  },
  {
    question: "Can I update the website myself after delivery?",
    answer:
      "Yes. We build with manageable systems and provide guidance so your team can safely update content when needed.",
  },
  {
    question: "How do we get started?",
    answer:
      "We start with a discovery call, define scope and priorities, then provide a clear proposal and delivery timeline.",
  },
];

const leftColumnFaqs = faqs.slice(0, 5);
const rightColumnFaqs = faqs.slice(5);
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";
const web3formsEndpoint = "https://api.web3forms.com/submit";
const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const thankYouUrl = `${siteUrl}/thank-you`;

export default function Home() {
  const [activeIndustryId, setActiveIndustryId] = useState(industries[0].id);
  const [featuredBlogPosts, setFeaturedBlogPosts] = useState<FeaturedBlogPost[]>(
    initialFeaturedBlogPosts,
  );

  useEffect(() => {
    let isMounted = true;

    fetch("/api/blog?limit=3")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { posts?: FeaturedBlogPost[] } | null) => {
        if (!isMounted || !data?.posts || data.posts.length === 0) {
          return;
        }

        setFeaturedBlogPosts(data.posts);
      })
      .catch(() => {
        // Keep fallback posts if the request fails.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const activeIndustry = useMemo(
    () => industries.find((item) => item.id === activeIndustryId) ?? industries[0],
    [activeIndustryId],
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Kealey Design",
        url: siteUrl,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: "Kealey Design - Chatham Website Design",
        alternateName: "Kealey Design",
        image: `${siteUrl}/favicon.ico`,
        url: siteUrl,
        description:
          "Kealey Design is a local web design agency in Chatham, Ontario serving businesses across Southwestern Ontario.",
        areaServed: [
          "Chatham",
          "Wallaceburg",
          "Tilbury",
          "Blenheim",
          "Ridgetown",
          "Dresden",
          "Southwestern Ontario",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "73 Marion Ave",
          addressLocality: "Chatham",
          addressRegion: "ON",
          postalCode: "N7M 5N7",
          addressCountry: "CA",
        },
        telephone: "+1-519-401-1469",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Design",
                url: `${siteUrl}/services/web-design`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Redesign",
                url: `${siteUrl}/services/website-redesign`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Local SEO",
                url: `${siteUrl}/services/local-seo`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ecommerce Websites",
                url: `${siteUrl}/services/ecommerce-websites`,
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map((item) => {
          const townList = item.towns ? ` ${item.towns.join(", ")}.` : "";
          return {
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${item.answer}${townList}`,
            },
          };
        }),
      },
    ],
  };

  return (
    <div className="landing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main>
        <section className="hero" aria-label="Digital growth hero">
          <div className="hero__media" aria-hidden>
            <Image
              src="/mockup.webp"
              alt=""
              className="hero__image"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero__overlay" aria-hidden />
          <div className="hero__left-fade" aria-hidden />

          <div className="hero__content">
            <h1 className="hero__eyebrow">WEB DESIGN CHATHAM-KENT</h1>
            <h2 className="hero__title">Local Web Design For Small Businesses</h2>
            <p className="hero__description">
              Kealey Design helps businesses across Chatham-Kent and Southwestern Ontario grow
              with custom website design, web development, and local SEO services.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="quote-button quote-button--hero">
                Book a Free Consultation
                <ArrowRight className="quote-button__icon" aria-hidden />
              </Link>
              <a href="tel:+15194011469" className="hero__call-link" aria-label="Call now at +1 (519) 401-1469">
                Call Now: +1 (519) 401-1469
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about" aria-label="About Kealey Design">
          <div className="about__inner">
            <div className="about__content">
              <p className="about__eyebrow">ABOUT KEALEY DESIGN</p>
              <h2 className="about__title">Your Chatham-Kent web design agency for real business growth.</h2>
              <p className="about__description">
                We partner with small businesses, service companies, and ecommerce brands throughout
                Chatham-Kent and Southwestern Ontario to build high-performing websites that rank,
                convert, and scale.
              </p>
              <Link href="/about" className="quote-button about__button">
                Learn More About Kealey Design
                <ArrowRight className="quote-button__icon" aria-hidden />
              </Link>
            </div>

            <div className="about__panel" aria-label="Company highlights">
              {aboutStats.map((item) => (
                <article key={item.label} className="about__stat">
                  <p className="about__value">{item.value}</p>
                  <p className="about__label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services" aria-label="Services provided">
          <div className="services__inner">
            <p className="services__eyebrow">SERVICES</p>
            <h2 className="services__title">Website design and local SEO services in Southwestern Ontario</h2>

            <div className="services__grid" aria-label="Service cards">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className="services__card" aria-label={service.title}>
                  <div className="services__image-wrap">
                    <Image
                      src={service.image}
                      alt={`${service.title} illustration`}
                      className="services__image"
                      width={1200}
                      height={700}
                    />
                  </div>
                  <div className="services__meta">
                    <service.Icon className="services__icon" aria-hidden />
                  </div>
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-description">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="projects" aria-label="Featured projects">
          <div className="projects__inner">
            <p className="projects__eyebrow">PROJECTS</p>
            <h2 className="projects__title">Recent web design projects across Chatham-Kent</h2>

            <div className="projects__grid">
              {projects.map((project) => (
                <article key={project.title} className="projects__card">
                  <Image
                    src={project.image}
                    alt={`${project.title} cover image`}
                    className="projects__image"
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  />
                  <div className="projects__gradient" aria-hidden />
                  <div className="projects__content">
                    <h3 className="projects__card-title">{project.title}</h3>
                    <Link href={project.href} className="projects__pill">
                      <FileText className="projects__pill-icon" aria-hidden />
                      Case Study
                    </Link>
                    <Link href={project.href} aria-label={`${project.title} case study`} className="projects__arrow">
                      <ArrowRight className="projects__arrow-icon" aria-hidden />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials" aria-label="Client reviews and testimonials">
          <div className="testimonials__inner">
            <div className="testimonials__header">
              <div>
                <p className="testimonials__eyebrow">REVIEWS</p>
                <h2 className="testimonials__title">Trusted by local businesses</h2>
              </div>
              <div className="testimonials__actions">
                <a
                  href="https://maps.app.goo.gl/pqGkSzTHJkWj9Z67A"
                  className="testimonials__view-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Google reviews
                </a>
                <Link href="/reviews" className="testimonials__view-all">
                  Read all reviews
                </Link>
              </div>
            </div>

            <div className="testimonials__grid">
              {homepageTestimonials.map((testimonial) => (
                <article key={testimonial.id} className="testimonials__card">
                  {testimonial.logo ? (
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.name} logo`}
                      className={`testimonials__logo ${testimonial.isLightLogo ? "testimonials__logo--light" : ""}`}
                      width={260}
                      height={84}
                    />
                  ) : null}
                  <p className="testimonials__quote">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="testimonials__name">{testimonial.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="industries" aria-label="Industries we serve">
          <div className="industries__inner">
            <h2 className="industries__heading">Industries We Serve</h2>
            <p className="industries__lead">
              Kealey Design supports businesses across Chatham-Kent and Southwestern Ontario with
              conversion-focused web design, local SEO, and performance-first digital strategy.
            </p>

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

        <section className="faq" aria-label="Frequently asked questions">
          <div className="faq__inner">
            <p className="faq__eyebrow">FAQ</p>
            <h2 className="faq__title">Web Design & SEO FAQs</h2>

            <div className="faq__columns">
              <div className="faq__column">
                {leftColumnFaqs.map((item) => (
                  <details key={item.question} className="faq__item">
                    <summary className="faq__summary">
                      <h3 className="faq__question">{item.question}</h3>
                      <span className="faq__indicator" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="faq__answer">{item.answer}</p>
                    {item.towns ? (
                      <ul className="faq__answer-towns">
                        {item.towns.map((town) => (
                          <li key={town}>{town}</li>
                        ))}
                      </ul>
                    ) : null}
                  </details>
                ))}
              </div>

              <div className="faq__column">
                {rightColumnFaqs.map((item) => (
                  <details key={item.question} className="faq__item">
                    <summary className="faq__summary">
                      <h3 className="faq__question">{item.question}</h3>
                      <span className="faq__indicator" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="faq__answer">{item.answer}</p>
                    {item.towns ? (
                      <ul className="faq__answer-towns">
                        {item.towns.map((town) => (
                          <li key={town}>{town}</li>
                        ))}
                      </ul>
                    ) : null}
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="blog" aria-label="Latest blog posts">
          <div className="blog__inner">
            <p className="blog__eyebrow">BLOG</p>
            <h2 className="blog__title">Latest Insights</h2>

            <div className="blog__grid">
              {featuredBlogPosts.map((post) => (
                <article key={post.slug} className="blog__card">
                  <Link href={`/blog/${post.slug}`} className="blog__card-link" aria-label={post.title}>
                    <div className="blog__image-wrap">
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="blog__image"
                        width={1200}
                        height={700}
                      />
                    </div>
                    <h3 className="blog__post-title">{post.title}</h3>
                  </Link>
                </article>
              ))}
            </div>

            <Link href="/blog" className="blog__view-all">
              View all posts
            </Link>
          </div>
        </section>

        <section className="contact-cta" aria-label="CTA and contact form">
          <div className="contact-cta__inner">
            <div className="contact-cta__left">
              <p className="contact-cta__eyebrow">LET&apos;S BUILD</p>
              <h2 className="contact-cta__title">Have a project in mind?</h2>
              <p className="contact-cta__copy">
                Tell us about your goals and we will send a tailored plan for website design, local
                SEO, and growth in Chatham-Kent and Southwestern Ontario.
              </p>
            </div>

            <form className="contact-cta__form" aria-label="Contact us form" action={web3formsEndpoint} method="POST">
              <input type="hidden" name="access_key" value={web3formsAccessKey} />
              <input type="hidden" name="subject" value="New Homepage Inquiry - Kealey Design" />
              <input type="hidden" name="from_name" value="Kealey Design Website" />
              <input type="hidden" name="redirect" value={thankYouUrl} />
              <input
                type="checkbox"
                name="botcheck"
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <div className="contact-cta__field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" placeholder="Your name" required />
              </div>

              <div className="contact-cta__field">
                <label htmlFor="contact-company">Company Name</label>
                <input id="contact-company" name="companyName" type="text" placeholder="Your company" />
              </div>

              <div className="contact-cta__field">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" placeholder="you@company.com" required />
              </div>

              <div className="contact-cta__field">
                <label htmlFor="contact-phone">Phone</label>
                <input id="contact-phone" name="phone" type="tel" placeholder="(123) 456-7890" />
              </div>

              <div className="contact-cta__field contact-cta__field--full">
                <label htmlFor="contact-brief">Project Brief</label>
                <textarea
                  id="contact-brief"
                  name="projectBrief"
                  rows={5}
                  placeholder="Tell us about your project goals, timeline, and priorities"
                  required
                />
              </div>

              <button type="submit" className="contact-cta__submit">
                Contact Us
              </button>
            </form>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
