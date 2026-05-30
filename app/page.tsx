import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  MapPin,
  MonitorSmartphone,
  RefreshCcw,
  Wrench,
} from "lucide-react";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { IndustriesWeServe } from "@/components/IndustriesWeServe";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Contractor Website Design in Southwestern Ontario",
  description:
    "Kealey Design builds modern, conversion-focused websites for contractors and service businesses across Southwestern Ontario, including Chatham-Kent, Windsor, and Sarnia.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Contractor Website Design in Southwestern Ontario",
    description:
      "Modern, conversion-focused websites for contractors and service businesses across Southwestern Ontario, including Chatham-Kent, Windsor, and Sarnia.",
    url: "/",
    type: "website",
    images: [{ url: "/mockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractor Website Design in Southwestern Ontario",
    description:
      "Conversion-focused websites for contractors and service businesses across Southwestern Ontario.",
    images: ["/mockup.png"],
  },
};

const services = [
  {
    title: "Custom Website Design",
    href: "/web-design",
    Icon: MonitorSmartphone,
    copy:
      "Modern websites built to reflect the quality of your business and guide visitors toward requesting a quote.",
  },
  {
    title: "Website Redesigns",
    href: "/services/website-redesign",
    Icon: RefreshCcw,
    copy:
      "Upgrade outdated websites into fast, professional lead-generation assets without losing existing search value.",
  },
  {
    title: "Local SEO Foundations",
    href: "/local-seo",
    Icon: MapPin,
    copy:
      "Structured pages and optimization designed to support local search visibility and map pack relevance.",
  },
  {
    title: "Conversion Optimization",
    href: "/web-design",
    Icon: BarChart3,
    copy:
      "Clear calls-to-action and strategic layouts designed to increase calls, quote requests, and inquiries.",
  },
  {
    title: "Ongoing Support & Maintenance",
    href: "/website-maintenance",
    Icon: Wrench,
    copy:
      "Reliable updates, edits, and ongoing website support so your site stays current after launch.",
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
    title: "Pebbles Gravel",
    href: "/portfolio/pebbles-gravel-regional-lead-flow",
    image: "/case-studies/Screenshot_20-5-2026_161715_www.pebblesgravel.com.jpeg",
    result: "Website rebuild and SEO foundation that improved product discovery and quote requests.",
  },
  {
    title: "R3 Restomod",
    href: "/portfolio/r3-restomod-showcase-to-sales",
    image: "/case-studies/screencapture-r3restomod-2026-05-20-16_23_08.png",
    result: "A conversion-focused redesign that turned a showcase site into a consultation-ready platform.",
  },
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
              <span className="hero__eyebrow-accent">CONTRACTOR WEBSITES</span> SOUTHWESTERN ONTARIO
            </p>
            <h1 className="hero__title">Websites Built to Help Contractors &amp; Service Businesses Grow</h1>
            <p className="hero__description">
              Kealey Design creates modern, conversion-focused websites for businesses across Southwestern Ontario -
              designed to generate more leads, build trust faster, and improve your online presence.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="quote-button quote-button--hero">
                Book a Free Website Audit
                <ArrowRight className="quote-button__icon" aria-hidden />
              </Link>
              <Link href="/portfolio" className="hero__call-link">
                View Recent Projects
              </Link>
            </div>
            <div className="hero__trustbar" aria-label="Trust bar">
              <p className="hero__trustbar-title">
                Trusted by businesses across Chatham-Kent, Windsor, Sarnia &amp; Southwestern Ontario
              </p>
              <p className="hero__trustbar-sub">
                Mobile Optimized &#8226; SEO Ready &#8226; Conversion Focused &#8226; Fast Turnaround
              </p>
            </div>
          </div>
        </section>

        <section className="home-problem" aria-label="Website lead generation problems">
          <div className="home-problem__inner">
            <div className="home-problem__intro">
              <p className="home-problem__eyebrow">PROBLEM</p>
              <h2 className="home-problem__title">Your Website Might Be Costing You Leads</h2>
              <p className="home-problem__copy">
                Many contractor and service business websites are outdated, slow, difficult to use on mobile, or missing
                the trust elements that help customers feel confident reaching out.
              </p>
              <p className="home-problem__copy">
                Your website should help your business win jobs - not just exist online. If someone is comparing two
                companies from a phone, the site that loads fast, explains services clearly, and makes it easy to request
                an estimate usually wins the inquiry.
              </p>
            </div>

            <div className="home-problem__grid" aria-label="Common website issues">
              <article className="home-problem__card">
                <h3>Weak Mobile Experience</h3>
                <p>
                  Most customers visit your website from mobile first. If the experience feels outdated or difficult to
                  use, you lose trust immediately.
                </p>
              </article>
              <article className="home-problem__card">
                <h3>Outdated Design</h3>
                <p>
                  An outdated website can make even great businesses appear less professional online.
                </p>
              </article>
              <article className="home-problem__card">
                <h3>Poor Conversion Flow</h3>
                <p>
                  If visitors cannot quickly understand your services or contact you easily, you are likely losing
                  estimate requests.
                </p>
              </article>
              <article className="home-problem__card">
                <h3>Weak Local Visibility</h3>
                <p>
                  Without proper structure and SEO foundations, your website may struggle to appear in local searches.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="home-solution" aria-label="Solution section">
          <div className="home-solution__inner">
            <div className="home-solution__content">
              <p className="home-solution__eyebrow">SOLUTION</p>
              <h2 className="home-solution__title">Built for Growth - Not Just Looks</h2>
              <p className="home-solution__copy">
                We create websites designed to help contractors and service businesses improve credibility, generate more
                inquiries, and compete more effectively online. Every project is built with performance, user experience,
                mobile optimization, and lead generation in mind.
              </p>
              <p className="home-solution__copy">
                That means clear service pages, proof sections that build confidence, and frictionless contact paths. It
                also means the technical pieces are handled properly: fast load times, clean structure, and internal
                links that support local SEO over time.
              </p>
              <div className="home-solution__actions" aria-label="Solution section links">
                <Link href="/web-design" className="home-solution__link">
                  Explore web design
                  <ArrowRight className="home-solution__link-icon" aria-hidden />
                </Link>
                <Link href="/local-seo" className="home-solution__link">
                  Explore local SEO foundations
                  <ArrowRight className="home-solution__link-icon" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services" aria-label="Services overview">
          <div className="services__inner">
            <p className="services__eyebrow">SERVICES</p>
            <h2 className="services__title">What We Help With</h2>
            <p className="services__lead">
              Contractor and service business websites need more than a fresh coat of paint. We build and improve the
              pages that drive calls, estimate requests, and booked work, with structure that supports local search.
            </p>
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

        <section className="projects" aria-label="Recent projects">
          <div className="projects__inner">
            <p className="projects__eyebrow">CASE STUDIES</p>
            <h2 className="projects__title">Recent Projects</h2>
            <p className="projects__lead">
              See how Kealey Design helps local businesses modernize their online presence and improve how they attract
              customers online.
            </p>
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

        <section className="home-why" aria-label="Why businesses choose Kealey Design">
          <div className="home-why__inner">
            <div className="home-why__content">
              <p className="home-why__eyebrow">WHY KEALEY DESIGN</p>
              <h2>Why Businesses Choose Kealey Design</h2>
              <p>
                You work directly with the person planning and building the website. That keeps decisions fast, the scope
                clear, and the final result focused on what matters: more qualified inquiries and a better first
                impression when someone finds you on Google.
              </p>
            </div>
            <div className="home-why__panel">
              <ul className="homepage-checklist">
                <li>
                  <CheckCircle2 className="homepage-checklist__icon" aria-hidden />
                  <div className="home-why__item">
                    <strong>Modern, Professional Design</strong>
                    <span>Websites designed to build trust and credibility immediately.</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="homepage-checklist__icon" aria-hidden />
                  <div className="home-why__item">
                    <strong>Conversion-Focused Strategy</strong>
                    <span>Built to encourage more calls, quote requests, and customer inquiries.</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="homepage-checklist__icon" aria-hidden />
                  <div className="home-why__item">
                    <strong>Mobile-First Experience</strong>
                    <span>Optimized for the devices your customers actually use.</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="homepage-checklist__icon" aria-hidden />
                  <div className="home-why__item">
                    <strong>Fast, Responsive Communication</strong>
                    <span>Straightforward process with clear communication from start to finish.</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="homepage-checklist__icon" aria-hidden />
                  <div className="home-why__item">
                    <strong>Local Understanding</strong>
                    <span>We understand the Southwestern Ontario business landscape and the industries we serve.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="faq" aria-label="Frequently asked questions">
        <div className="faq__inner">
          <p className="faq__eyebrow">FAQ</p>
          <h2 className="faq__title">Web Design and SEO FAQs</h2>

          <div className="faq__columns">
            {[0, 1].map((columnIndex) => {
              const midpoint = Math.ceil(faqs.length / 2);
              const columnFaqs =
                columnIndex === 0 ? faqs.slice(0, midpoint) : faqs.slice(midpoint);

              return (
                <div className="faq__column" key={columnIndex}>
                  {columnFaqs.map((item) => (
                    <details key={item.question} className="faq__item">
                      <summary className="faq__summary">
                        <h3 className="faq__question">{item.question}</h3>
                        <span className="faq__indicator" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <p className="faq__answer">{item.answer}</p>
                    </details>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

        <section className="home-final-cta" aria-label="Final call to action">
          <div className="home-final-cta__inner">
            <p className="home-final-cta__eyebrow">NEXT STEP</p>
            <h2 className="home-final-cta__title">Ready to Improve Your Online Presence?</h2>
            <p className="home-final-cta__copy">
              Whether you need a complete redesign or want to improve how your website performs, Kealey Design can help
              create a stronger online experience for your business.
            </p>
            <div className="home-final-cta__actions" aria-label="Final call to action buttons">
              <Link href="/contact" className="quote-button home-final-cta__primary">
                Book a Free Website Audit
                <ArrowRight className="quote-button__icon" aria-hidden />
              </Link>
              <Link href="/contact#book-call" className="home-final-cta__secondary">
                Get in Touch
              </Link>
              <Link href="/careers/remote-appointment-setter" className="home-final-cta__secondary">
                We&apos;re hiring
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ExitIntentPopup />
    </div>
  );
}
