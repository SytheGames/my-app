import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CareersApplicationForm } from "@/components/CareersApplicationForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";
const jobTitle = "Remote Appointment Setter / Sales Representative (Commission Only)";
const canonicalPath = "/careers/remote-appointment-setter";
const applicationUrl = `${siteUrl}${canonicalPath}#apply`;
const datePosted = "2026-05-30";
const validThrough = "2026-12-31T23:59:59-05:00";

const metaTitle = "Remote Appointment Setter Job | Commission Only Sales Representative | Kealey Design";
const metaDescription =
  "Remote appointment setter / commission-only sales role at Kealey Design. We provide the leads. Earn 15%–35% commission on closed revenue from appointments you book.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: canonicalPath,
    type: "website",
    images: [{ url: "/mockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: ["/mockup.png"],
  },
};

export default function RemoteAppointmentSetterJobPage() {
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: jobTitle,
    datePosted,
    validThrough,
    description:
      "Kealey Design is hiring a remote appointment setter / sales representative (commission only). We provide weekly lead assignments. Earn 15%–35% commission on closed revenue from appointments you book.",
    hiringOrganization: {
      "@type": "Organization",
      name: "Kealey Design",
      sameAs: siteUrl,
    },
    employmentType: ["CONTRACTOR"],
    jobLocationType: "TELECOMMUTE",
    identifier: {
      "@type": "PropertyValue",
      name: "Kealey Design",
      value: "remote-appointment-setter",
    },
    url: `${siteUrl}${canonicalPath}`,
    directApply: true,
    incentiveCompensation: "15%–35% commission on closed revenue (commission-only role).",
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "CAD",
      value: {
        "@type": "QuantitativeValue",
        value: 0,
        unitText: "HOUR",
      },
    },
    applicantLocationRequirements: [
      {
        "@type": "Country",
        name: "Canada",
      },
    ],
    potentialAction: {
      "@type": "ApplyAction",
      target: applicationUrl,
    },
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="job-page" aria-label={jobTitle}>
        <div className="job-page__inner">
          <header className="job-page__hero" aria-label="Role overview">
            <div className="job-page__hero-copy">
              <p className="job-page__eyebrow">
                <Link href="/careers" className="job-page__breadcrumb">
                  Careers
                </Link>{" "}
                / Open role
              </p>
              <h1 className="job-page__title">{jobTitle}</h1>
              <p className="job-page__lead">
                Company: <strong>Kealey Design</strong> · Location: <strong>Remote</strong> · Compensation:{" "}
                <strong>15%–35% commission on closed revenue</strong>
              </p>
              <ul className="job-page__badges" aria-label="Highlights">
                <li className="job-page__badge">We provide the leads</li>
                <li className="job-page__badge">No earning cap</li>
                <li className="job-page__badge">Fast payouts</li>
                <li className="job-page__badge">Commission-only</li>
              </ul>

              <p className="job-page__copy">
                <a className="careers-page__card-link" href="#apply">
                  Apply now
                </a>
              </p>
            </div>

            <div className="job-page__hero-visual" aria-hidden="true">
              <Image
                src="/graphics/careers-role.svg"
                alt=""
                width={640}
                height={420}
                className="job-page__hero-image"
                priority
              />
            </div>
          </header>

          <div className="job-page__layout" aria-label="Job details and application form">
            <section className="job-page__content" aria-label="Job details">
              <h2 className="job-page__section-title">About Kealey Design</h2>
              <p className="job-page__copy">
                Kealey Design is a web design and SEO agency that helps service-based businesses grow through
                high-converting websites, SEO, and digital marketing solutions.
              </p>
              <p className="job-page__copy">
                We are looking for motivated appointment setters and sales representatives who are comfortable working
                remotely and earning based on performance.
              </p>

              <h2 className="job-page__section-title">The role</h2>
              <p className="job-page__copy">
                This is not a traditional sales position where you are expected to spend hours prospecting for leads.
                <strong> We provide the leads.</strong>
              </p>
              <p className="job-page__copy">
                At the beginning of each week, you will receive a list of leads through our agency software. Your job is
                to contact those leads, build rapport, qualify interest, and book meetings for our team.
              </p>
              <p className="job-page__copy">
                Once a meeting is booked, our team will handle the sales presentation and closing process.
              </p>

              <h3 className="job-page__subheading">What you will be doing</h3>
              <ul className="job-page__list">
                <li>Contacting assigned leads</li>
                <li>Following up with prospects via phone, email, and/or SMS</li>
                <li>Qualifying business owners who may be interested in our services</li>
                <li>Booking appointments for our closing team</li>
                <li>Updating lead information and notes within our CRM</li>
                <li>Maintaining consistent communication and follow-up</li>
              </ul>

              <h3 className="job-page__subheading">Compensation</h3>
              <ul className="job-page__list">
                <li>Earn 15%–35% commission on revenue generated from deals that close from appointments you book</li>
                <li>Commission percentage is based on performance, experience, and appointment quality</li>
                <li>Applies regardless of the service or package sold</li>
                <li>No earning cap</li>
                <li>No cold lead generation required</li>
                <li>Commissions are paid within the week the deal closes</li>
              </ul>

              <h3 className="job-page__subheading">Requirements</h3>
              <ul className="job-page__list">
                <li>Excellent communication skills</li>
                <li>Professional and confident phone presence</li>
                <li>Self-motivated and reliable</li>
                <li>Comfortable working independently in a remote environment</li>
                <li>Organized and able to manage follow-ups</li>
                <li>Previous sales, appointment setting, or customer service experience is preferred but not required</li>
              </ul>

              <aside className="job-page__callout" aria-label="Important note">
                <h3 className="job-page__callout-title">Important</h3>
                <p className="job-page__callout-copy">
                  This is a <strong>100% commission-only</strong> opportunity. There is no hourly pay, salary, or
                  guaranteed income.
                </p>
                <p className="job-page__callout-copy">
                  This role is ideal for individuals who are confident in their ability to communicate with prospects
                  and want the opportunity to earn significant commissions without having to source their own leads.
                </p>
              </aside>

              <h3 className="job-page__subheading">What we provide</h3>
              <ul className="job-page__list">
                <li>Weekly lead assignments</li>
                <li>CRM and agency software access</li>
                <li>Proven web design and SEO services</li>
                <li>Sales team that handles closing</li>
                <li>Ongoing support and training</li>
                <li>Fast commission payouts</li>
                <li>Fully remote work environment</li>
              </ul>
            </section>

            <aside id="apply" className="job-page__apply" aria-label="Application form">
              <div className="job-page__apply-card">
                <p className="job-page__apply-kicker">HOW TO APPLY</p>
                <h2 className="job-page__apply-title">Apply for this role</h2>
                <p className="job-page__apply-lead">
                  Send a brief introduction, any relevant sales or appointment-setting experience, and why you would be
                  a great fit for a commission-based role with Kealey Design.
                </p>
                <CareersApplicationForm jobTitle={jobTitle} />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
    </div>
  );
}
