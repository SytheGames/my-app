import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  SearchCheck,
  Wrench,
  Rocket,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "HVAC Web Design | More Service Calls in Chatham-Kent",
  description:
    "High-converting HVAC websites for companies in Chatham-Kent. Turn local searches into booked jobs for furnace repair, AC installation, and emergency service calls.",
  alternates: { canonical: "/hvac-web-design" },
  openGraph: {
    title: "HVAC Web Design | More Service Calls in Chatham-Kent",
    description:
      "High-converting HVAC websites for companies in Chatham-Kent. Turn local searches into booked jobs for furnace repair, AC installation, and emergency service calls.",
    url: "/hvac-web-design",
    type: "website",
    images: [{ url: "/mockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Web Design | More Service Calls in Chatham-Kent",
    description:
      "High-converting HVAC websites for companies in Chatham-Kent. Turn local searches into booked jobs for furnace repair, AC installation, and emergency service calls.",
    images: ["/mockup.png"],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";
const web3formsEndpoint = "https://api.web3forms.com/submit";
const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const thankYouUrl = `${siteUrl}/thank-you`;

export default function HvacWebDesignPage() {
  return (
    <div className="landing-page">
      <SiteHeader />
      <main aria-label="HVAC web design page">
        <section className="hero hero--single-cta" aria-label="HVAC web design hero">
          <div className="hero__media" aria-hidden>
            <Image
              src="/images/AdobeStock_65737788.jpeg"
              alt=""
              fill
              priority
              quality={68}
              sizes="100vw"
              className="hero__image"
            />
          </div>
          <div className="hero__overlay" aria-hidden />
          <div className="hero__left-fade" aria-hidden />

          <div className="hero__content">
            <p className="hero__eyebrow">HVAC WEB DESIGN CHATHAM-KENT</p>
            <h1 className="hero__title">
              HVAC Web Design That Helps Chatham-Kent Companies Get More Service Calls
            </h1>
            <p className="hero__description">
              We build high-converting HVAC websites that turn local searches into booked jobs-
              especially for furnace repair, AC installation, and emergency service calls.
            </p>

            <div className="hero__actions">
              <Link href="/contact" className="quote-button quote-button--hero">
                Get a Free Website Audit
              </Link>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text hvac-problem" aria-label="HVAC lead generation problems">
          <div className="split-page__inner">
            <div className="split-page__prose hvac-problem__prose">
              <h2>Most HVAC websites don&apos;t generate real leads</h2>
              <p className="hvac-problem__intro">If your website isn&apos;t bringing in calls, it&apos;s usually because:</p>
              <ul className="hvac-problem__list">
                <li>It looks outdated or unprofessional on mobile</li>
                <li>It doesn&apos;t show up on Google for local searches</li>
                <li>It doesn&apos;t clearly push visitors to call</li>
                <li>It wasn&apos;t built to convert emergency traffic</li>
              </ul>
              <p className="hvac-problem__impact">
                In HVAC, that means missed furnace calls in winter, missed AC installs in summer,
                and lost high-value service jobs.
              </p>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text hvac-solution" aria-label="HVAC website solution">
          <div className="split-page__inner">
            <div className="split-page__prose hvac-solution__prose">
              <h2>We build HVAC websites designed to generate leads-not just look good</h2>
              <p className="hvac-solution__intro">
                Your website should do one thing well: turn local traffic into phone calls.
              </p>
              <p className="hvac-solution__focus-label">We focus on:</p>
              <ul className="hvac-solution__list">
                <li>Local SEO for HVAC keywords in your service area</li>
                <li>Mobile-first design (most emergency searches are on phones)</li>
                <li>Click-to-call optimization for urgent jobs</li>
                <li>Service pages built around what customers actually search</li>
                <li>Fast loading speeds (critical for Google rankings)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text hvac-process" aria-label="How HVAC web design process works">
          <div className="split-page__inner">
            <div className="split-page__prose hvac-process__prose">
              <h2>Simple 3-step process</h2>
              <div className="hvac-process__grid">
                <article className="hvac-process__card">
                  <div className="hvac-process__icon-wrap" aria-hidden>
                    <SearchCheck className="hvac-process__icon" />
                  </div>
                  <p className="hvac-process__step">1. Discovery</p>
                  <p className="hvac-process__copy">
                    We review your current website (or lack of one) and identify what&apos;s costing you leads.
                  </p>
                </article>

                <article className="hvac-process__card">
                  <div className="hvac-process__icon-wrap" aria-hidden>
                    <Wrench className="hvac-process__icon" />
                  </div>
                  <p className="hvac-process__step">2. Build</p>
                  <p className="hvac-process__copy">
                    We design a conversion-focused HVAC website tailored to your services and location.
                  </p>
                </article>

                <article className="hvac-process__card">
                  <div className="hvac-process__icon-wrap" aria-hidden>
                    <Rocket className="hvac-process__icon" />
                  </div>
                  <p className="hvac-process__step">3. Launch &amp; Optimize</p>
                  <p className="hvac-process__copy">
                    We publish your site and make sure it&apos;s ready to start generating calls from Google.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text hvac-compare" aria-label="What is included in each HVAC website">
          <div className="split-page__inner">
            <div className="hvac-compare__grid">
              <div className="hvac-compare__content">
                <p className="hvac-compare__eyebrow">WHAT YOU GET</p>
                <h2 className="hvac-compare__title">Every HVAC website includes:</h2>
                <p className="hvac-compare__copy">
                  A build focused on booked calls, stronger local visibility, and conversion-ready user journeys.
                </p>
              </div>

              <div className="hvac-compare__panel">
                <ul className="hvac-compare__list">
                  <li>
                    <CheckCircle2 className="hvac-compare__list-icon" aria-hidden />
                    <span>Mobile-optimized design</span>
                  </li>
                  <li>
                    <CheckCircle2 className="hvac-compare__list-icon" aria-hidden />
                    <span>Local SEO structure (Chatham-Kent + surrounding areas)</span>
                  </li>
                  <li>
                    <CheckCircle2 className="hvac-compare__list-icon" aria-hidden />
                    <span>Dedicated service pages (repairs, installs, maintenance)</span>
                  </li>
                  <li>
                    <CheckCircle2 className="hvac-compare__list-icon" aria-hidden />
                    <span>Click-to-call buttons on every page</span>
                  </li>
                  <li>
                    <CheckCircle2 className="hvac-compare__list-icon" aria-hidden />
                    <span>Contact forms that actually convert</span>
                  </li>
                  <li>
                    <CheckCircle2 className="hvac-compare__list-icon" aria-hidden />
                    <span>Google Business integration setup</span>
                  </li>
                  <li>
                    <CheckCircle2 className="hvac-compare__list-icon" aria-hidden />
                    <span>Fast load speed optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text hvac-audience" aria-label="Who this HVAC website offer is for">
          <div className="split-page__inner">
            <div className="hvac-audience__grid">
              <div className="hvac-audience__fit">
                <h2>Perfect for HVAC companies that want more local calls</h2>
                <p className="hvac-audience__intro">This is for you if:</p>
                <ul className="hvac-audience__list">
                  <li>You rely on local service calls</li>
                  <li>You want more emergency repair leads</li>
                  <li>You&apos;re tired of referrals being your only source of business</li>
                  <li>You know your current website isn&apos;t performing</li>
                </ul>
              </div>

              <div className="hvac-audience__not-fit">
                <p className="hvac-audience__not-fit-label">Not a fit</p>
                <p className="hvac-audience__not-fit-copy">
                  If you&apos;re just looking for a basic online brochure site.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text hvac-results" aria-label="HVAC website lead generation benefits">
          <div className="split-page__inner">
            <div className="split-page__prose hvac-results__prose">
              <h2>What a good HVAC website actually does</h2>
              <p className="hvac-results__intro">A properly built HVAC site can:</p>

              <div className="hvac-results__grid">
                <article className="hvac-results__card">
                  <PhoneCall className="hvac-results__icon" aria-hidden />
                  <p>Increase phone calls from Google searches</p>
                </article>
                <article className="hvac-results__card">
                  <MapPin className="hvac-results__icon" aria-hidden />
                  <p>Capture emergency near me traffic</p>
                </article>
                <article className="hvac-results__card">
                  <Smartphone className="hvac-results__icon" aria-hidden />
                  <p>Convert mobile visitors instantly</p>
                </article>
                <article className="hvac-results__card">
                  <ShieldCheck className="hvac-results__icon" aria-hidden />
                  <p>Build trust before customers even call</p>
                </article>
              </div>

              <p className="hvac-results__close">
                Most HVAC companies already have demand-they just don&apos;t have a website that captures it.
              </p>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text hvac-about" aria-label="About Kealey Design for service businesses">
          <div className="split-page__inner">
            <div className="split-page__prose hvac-about__prose">
              <p className="hvac-about__eyebrow">BUILT FOR LOCAL SERVICE BUSINESSES</p>
              <h2>Built for local service businesses</h2>
              <p>
                Kealey Design works with trades and service companies in Ontario who want websites
                that actually bring in leads-not just sit online.
              </p>
              <p className="hvac-about__focus">We focus on practical results: more calls, more bookings, more jobs.</p>
            </div>
          </div>
        </section>

        <section className="contact-cta" aria-label="CTA and contact form">
          <div className="contact-cta__inner">
            <div className="contact-cta__left">
              <p className="contact-cta__eyebrow">LET&apos;S BUILD</p>
              <h2 className="contact-cta__title">Ready to get more HVAC calls?</h2>
              <p className="contact-cta__copy">
                Tell us about your HVAC business and we&apos;ll put together a clear plan to get your
                website ranking and converting in Chatham-Kent.
              </p>
            </div>

            <form className="contact-cta__form" aria-label="Contact us form" action={web3formsEndpoint} method="POST">
              <input type="hidden" name="access_key" value={web3formsAccessKey} />
              <input type="hidden" name="subject" value="New HVAC Web Design Inquiry - Kealey Design" />
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
                <label htmlFor="hvac-contact-name">Name</label>
                <input id="hvac-contact-name" name="name" type="text" placeholder="Your name" required />
              </div>

              <div className="contact-cta__field">
                <label htmlFor="hvac-contact-company">Company Name</label>
                <input id="hvac-contact-company" name="companyName" type="text" placeholder="Your company" />
              </div>

              <div className="contact-cta__field">
                <label htmlFor="hvac-contact-email">Email</label>
                <input id="hvac-contact-email" name="email" type="email" placeholder="you@company.com" required />
              </div>

              <div className="contact-cta__field">
                <label htmlFor="hvac-contact-phone">Phone</label>
                <input id="hvac-contact-phone" name="phone" type="tel" placeholder="(123) 456-7890" />
              </div>

              <div className="contact-cta__field contact-cta__field--full">
                <label htmlFor="hvac-contact-brief">Project Brief</label>
                <textarea
                  id="hvac-contact-brief"
                  name="projectBrief"
                  rows={5}
                  placeholder="Tell us about your HVAC business, service area, and what you want your website to do"
                  required
                />
              </div>

              <button type="submit" className="contact-cta__submit">
                Get Your Free Website Audit
              </button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
