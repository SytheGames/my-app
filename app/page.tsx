import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  MapPin,
  MonitorSmartphone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { IndustriesWeServe } from "@/components/IndustriesWeServe";
import { PageContactSection } from "@/components/PageContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Web Design & Local SEO in Chatham-Kent",
  description:
    "Kealey Design builds conversion-focused websites, local SEO systems, and Google Business Profile strategies for Chatham-Kent and Southwestern Ontario businesses.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Web Design & Local SEO in Chatham-Kent",
    description:
      "Custom web design, local SEO, and search strategy for businesses across Chatham-Kent and Southwestern Ontario.",
    url: "/",
    type: "website",
    images: [{ url: "/mockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Local SEO in Chatham-Kent",
    description:
      "Conversion-focused web design and local SEO services for Chatham-Kent and Southwestern Ontario businesses.",
    images: ["/mockup.png"],
  },
};

const services = [
  {
    title: "Web Design",
    href: "/web-design",
    Icon: MonitorSmartphone,
    copy:
      "Custom websites for service businesses that need better messaging, faster mobile performance, and clearer quote or consultation paths.",
  },
  {
    title: "Local SEO",
    href: "/local-seo",
    Icon: MapPin,
    copy:
      "Local search campaigns that improve Google Maps visibility, service-area relevance, citations, reviews, and lead tracking.",
  },
  {
    title: "Website Maintenance",
    href: "/website-maintenance",
    Icon: Wrench,
    copy:
      "Ongoing care for updates, performance checks, content changes, analytics, security basics, and small conversion improvements.",
  },
  {
    title: "GBP Management",
    href: "/google-business-profile-management",
    Icon: MapPin,
    copy:
      "Google Business Profile optimization, posts, service updates, photos, review support, and local performance reporting.",
  },
];

const projects = [
  {
    title: "Enhanced Concrete",
    href: "/portfolio/enhanced-concrete-local-seo",
    image: "/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg",
    result: "Local service website and SEO structure for a Chatham-Kent contractor.",
  },
  {
    title: "Davey Chiropractic",
    href: "/portfolio/davey-chiro-conversion-refresh",
    image: "/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg",
    result: "Patient-focused website refresh with clearer service content and booking paths.",
  },
  {
    title: "ARCstage",
    href: "/portfolio/arcstage-growth-rebuild",
    image: "/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg",
    result: "A stronger portfolio and inquiry flow for a Southwestern Ontario production company.",
  },
];

const processSteps = [
  "Audit the current site, search visibility, tracking, and customer journey.",
  "Map the service pages, location pages, content gaps, and conversion paths that matter most.",
  "Design and build the website or SEO system with mobile performance, trust signals, and local relevance.",
  "Launch with analytics, Search Console, Google Business Profile alignment, and practical next-step reporting.",
];

const faqs = [
  {
    question: "Do you only work with businesses in Chatham-Kent?",
    answer:
      "No. Kealey Design is based in Chatham and works with businesses across Chatham-Kent, Windsor, London, Sarnia, Leamington, and the wider Southwestern Ontario region.",
  },
  {
    question: "Should I start with web design or local SEO?",
    answer:
      "If your website is slow, outdated, or unclear, start with web design so the traffic has somewhere useful to land. If the site is already solid, local SEO can improve visibility and lead flow faster.",
  },
  {
    question: "Can you help with Google Business Profile rankings?",
    answer:
      "Yes. Google Business Profile management is part of our local SEO work. We improve categories, services, photos, posts, review systems, profile completeness, and website alignment.",
  },
  {
    question: "How do you measure results?",
    answer:
      "We look at qualified inquiries, form submissions, phone clicks, Google Business Profile actions, Search Console data, rankings, and conversion rates. Rankings matter, but leads matter more.",
  },
  {
    question: "What industries are the best fit?",
    answer:
      "We are strongest with local service businesses: contractors, HVAC companies, roofers, clinics, trades, professional services, and businesses that need local search visibility to create qualified leads.",
  },
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
      "Yes. We work with businesses in Chatham and nearby communities across Southwestern Ontario, including Wallaceburg, Tilbury, Blenheim, Ridgetown, and Dresden.",
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

const testimonials = [
  {
    name: "ARCstage",
    quote: "Designed our website flawlessly and quickly, with great technical support!",
    logo: "/images/logos/arcstage-logo.webp",
    thumbnail: "/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg",
    href: "/portfolio/arcstage-growth-rebuild",
  },
  {
    name: "Enhanced Concrete",
    quote:
      "Matt built my website and manages it. He is very knowledgeable and great to work with I would highly recommend for any of your website needs.",
    logo: "/images/logos/enhanced-concrete-logo.svg",
    thumbnail: "/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg",
    href: "/portfolio/enhanced-concrete-local-seo",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: "Kealey Design",
        url: siteUrl,
        telephone: "+1-519-401-1469",
        image: `${siteUrl}/mockup.png`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "73 Marion Ave",
          addressLocality: "Chatham",
          addressRegion: "ON",
          postalCode: "N7M 5N7",
          addressCountry: "CA",
        },
        areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
        sameAs: [
          "https://www.linkedin.com/company/kealey-design",
          "https://www.facebook.com/mattkealeydesign",
          "https://www.instagram.com/mattkealeydesign/",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
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
        <section className="hero hero--home" aria-label="Web design and local SEO hero">
          <div className="hero__media" aria-hidden>
            <Image src="/mockup.webp" alt="" className="hero__image" fill priority sizes="100vw" />
          </div>
          <div className="hero__overlay" aria-hidden />
          <div className="hero__left-fade" aria-hidden />

          <div className="hero__content">
            <p className="hero__eyebrow">
              <span className="hero__eyebrow-accent">WEB DESIGN & SEO</span> CHATHAM-KENT
            </p>
            <h1 className="hero__title">
              Web Design and Local SEO for Businesses in{" "}
              <span className="hero__title-accent">Chatham-Kent</span>
            </h1>
            <p className="hero__description">
              Kealey Design builds custom websites, local SEO systems, and Google Business Profile strategies
              for service businesses across Chatham-Kent and Southwestern Ontario. The goal is simple: make your
              business easier to find, easier to trust, and easier to contact.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="quote-button quote-button--hero">
                Request a Free Website Audit
                <ArrowRight className="quote-button__icon" aria-hidden />
              </Link>
              <Link href="/portfolio" className="hero__call-link">
                View recent work
              </Link>
            </div>
            <div className="hero__trust" aria-label="Trust signals">
              <div className="hero__trust-item">
                <FcGoogle className="hero__trust-google" aria-hidden />
                <div className="hero__trust-copy">
                  <p className="hero__trust-title">5.0 Google rating</p>
                  <p className="hero__trust-subtitle">Local client reviews</p>
                </div>
              </div>
              <div className="hero__trust-item">
                <ShieldCheck className="hero__trust-icon" aria-hidden />
                <div className="hero__trust-copy">
                  <p className="hero__trust-title">25+ launches</p>
                  <p className="hero__trust-subtitle">Service and local brands</p>
                </div>
              </div>
              <div className="hero__trust-item">
                <BarChart3 className="hero__trust-icon" aria-hidden />
                <div className="hero__trust-copy">
                  <p className="hero__trust-title">Lead focused</p>
                  <p className="hero__trust-subtitle">Tracked after launch</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-authority" aria-label="Authority introduction">
          <div className="home-authority__inner">
            <div className="home-authority__content">
              <p className="home-authority__eyebrow">LOCAL DIGITAL FOUNDATION</p>
              <h2>A local website should work harder than a digital brochure</h2>
              <p>
                Many Southwestern Ontario businesses have a website, but the site does not explain the offer clearly,
                does not rank for enough local searches, and does not give visitors enough proof to take action. A
                stronger <Link href="/web-design">website design</Link> connects design, copywriting, technical performance, <Link href="/local-seo">local SEO</Link>, and conversion tracking
                into one system. That is the work Kealey Design focuses on.
              </p>
              <p>
                We help businesses in <Link href="/locations/web-design-chatham">Chatham</Link>,{" "}
                <Link href="/locations/web-design-windsor">Windsor</Link>,{" "}
                <Link href="/locations/web-design-london">London</Link>,{" "}
                <Link href="/locations/web-design-sarnia">Sarnia</Link>,{" "}
                <Link href="/locations/web-design-leamington">Leamington</Link>, and nearby communities build a practical online foundation. That means service pages that
                match what customers search, location signals that support map visibility, trust sections that answer
                buying objections, and calls-to-action that are easy to use from a phone. The design matters, but the
                strategy behind the design matters more.
              </p>
            </div>

            <aside className="home-authority__panel" aria-label="Website strategy focus areas">
              <p className="home-authority__panel-label">Built Around</p>
              <div className="home-authority__metrics">
                <div>
                  <strong>
                    <Link href="/local-seo">Search</Link>
                  </strong>
                  <span>Service pages, local relevance, and visibility.</span>
                </div>
                <div>
                  <strong>
                    <Link href="/portfolio">Trust</Link>
                  </strong>
                  <span>Proof, reviews, and clear positioning.</span>
                </div>
                <div>
                  <strong>
                    <Link href="/contact">Action</Link>
                  </strong>
                  <span>Calls, forms, bookings, and quote requests.</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="services" aria-label="Services overview">
          <div className="services__inner">
            <p className="services__eyebrow">SERVICES</p>
            <h2 className="services__title">Core services built around search, trust, and lead generation</h2>
            <div className="services__grid">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className="services__card">
                  <div className="services__meta">
                    <service.Icon className="services__icon" aria-hidden />
                  </div>
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-description">{service.copy}</p>
                  <span className="services__deep-link">
                    Explore service
                    <ArrowRight className="services__deep-link-icon" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <IndustriesWeServe />

        <section className="home-why" aria-label="Why choose Kealey Design">
          <div className="home-why__inner">
            <div className="home-why__content">
              <h2>Why choose Kealey Design</h2>
              <p>
                You work directly with Matt Kealey, not a layered agency account team. That makes the process clearer:
                fewer handoffs, faster decisions, and strategy that stays connected from discovery through launch. The
                work is especially useful for small businesses that need a serious digital presence but do not want a
                bloated process or vague reporting.
              </p>
            </div>
            <div className="home-why__panel">
              <ul className="homepage-checklist">
                <li>
                  <CheckCircle2 className="homepage-checklist__icon" aria-hidden />
                  <span>Local search strategy for Chatham-Kent and Southwestern Ontario markets</span>
                </li>
                <li>
                  <CheckCircle2 className="homepage-checklist__icon" aria-hidden />
                  <span>Conversion-focused page structure for calls, forms, bookings, and quote requests</span>
                </li>
                <li>
                  <CheckCircle2 className="homepage-checklist__icon" aria-hidden />
                  <span>Fast, mobile-first builds that support SEO and user experience together</span>
                </li>
                <li>
                  <CheckCircle2 className="homepage-checklist__icon" aria-hidden />
                  <span>Internal linking, schema, content hierarchy, and tracking planned from the start</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="projects" aria-label="Portfolio highlights">
          <div className="projects__inner">
            <p className="projects__eyebrow">PORTFOLIO</p>
            <h2 className="projects__title">Portfolio highlights</h2>
            <div className="projects__grid">
              {projects.map((project) => (
                <article key={project.title} className="projects__card">
                  <Image
                    src={project.image}
                    alt={`${project.title} website project`}
                    className="projects__image"
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                  <div className="projects__gradient" aria-hidden />
                  <div className="projects__content">
                    <h3 className="projects__card-title">{project.title}</h3>
                    <p>{project.result}</p>
                    <Link href={project.href} className="projects__pill">
                      View case study
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-seo" aria-label="Local SEO section">
          <div className="home-seo__inner">
            <div className="home-seo__content">
              <h2>Local SEO is where the website starts compounding</h2>
              <p>
                A good website gives local SEO somewhere to land. Local SEO gives that website more chances to be found.
                We build both sides together: Google Business Profile alignment, service-area content, city pages, on-page
                optimization, internal links, review signals, and performance reporting. For service businesses, the most
                valuable traffic often comes from searches like &quot;web design Chatham&quot;, &quot;HVAC repair near me&quot;, &quot;roofing
                company Windsor&quot;, or &quot;local SEO Chatham-Kent&quot;. Those searches need pages that are specific enough to rank
                and useful enough to convert.
              </p>
              <p>
                Visit our <Link href="/local-seo">Local SEO</Link> and <Link href="/seo-services">SEO Services</Link> pages
                for the deeper breakdown of maps visibility, organic search, technical SEO, content planning, and reporting.
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials" aria-label="Testimonials">
          <div className="testimonials__inner">
            <div className="testimonials__header">
              <div>
                <p className="testimonials__eyebrow">REVIEWS</p>
                <h2 className="testimonials__title">Trusted by local businesses</h2>
              </div>
              <Link href="/reviews" className="testimonials__view-all">Read reviews</Link>
            </div>
            <div className="testimonials__grid">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="testimonials__card">
                  <div className="testimonials__preview" aria-hidden>
                    <Image
                      src={testimonial.thumbnail}
                      alt=""
                      className="testimonials__preview-image"
                      fill
                      sizes="(max-width: 760px) 100vw, 34rem"
                    />
                    <div className="testimonials__preview-overlay" />
                    <div className="testimonials__logo-wrap">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.name} logo`}
                        className="testimonials__logo"
                        width={260}
                        height={90}
                      />
                    </div>
                  </div>
                  <p className="testimonials__quote">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="testimonials__footer">
                    <p className="testimonials__name">{testimonial.name}</p>
                    <Link href={testimonial.href} className="testimonials__case-link">
                      View project
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-process" aria-label="Process">
          <div className="home-process__inner">
            <div className="home-process__header">
              <h2>Process</h2>
              <p>
                The process is built to remove guesswork. Before design starts, we look at your current visibility,
                competitors, customer questions, service priorities, and the actions that matter most to your business.
                Then we build the page structure around revenue opportunities, not just aesthetics.
              </p>
            </div>
            <ol className="home-process__steps">
                {processSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
            </ol>
          </div>
        </section>

        <section className="faq" aria-label="Frequently asked questions">
          <div className="faq__inner">
            <p className="faq__eyebrow">FAQ</p>
            <h2 className="faq__title">Web Design and SEO FAQs</h2>
            <div className="faq__columns">
              <div className="faq__column">
                {faqs.slice(0, 3).map((item) => (
                  <details key={item.question} className="faq__item">
                    <summary className="faq__summary">
                      <h3 className="faq__question">{item.question}</h3>
                      <span className="faq__indicator" aria-hidden>+</span>
                    </summary>
                    <p className="faq__answer">{item.answer}</p>
                  </details>
                ))}
              </div>
              <div className="faq__column">
                {faqs.slice(3).map((item) => (
                  <details key={item.question} className="faq__item">
                    <summary className="faq__summary">
                      <h3 className="faq__question">{item.question}</h3>
                      <span className="faq__indicator" aria-hidden>+</span>
                    </summary>
                    <p className="faq__answer">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Ready to build a stronger local search foundation?"
          copy="Tell us what you sell, where you serve customers, and what you want more of. We will review your website and outline the highest-impact next steps."
          subject="New Homepage Authority Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <ExitIntentPopup />
    </div>
  );
}
