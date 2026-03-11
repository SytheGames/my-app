import Link from "next/link";

type PageContactSectionProps = {
  heading: string;
  copy: string;
  subject: string;
};

const web3formsEndpoint = "https://api.web3forms.com/submit";
const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";
const thankYouUrl = `${siteUrl}/thank-you`;

export function PageContactSection({ heading, copy, subject }: PageContactSectionProps) {
  return (
    <section className="page-contact" aria-label="Project consultation form">
      <div className="page-contact__inner">
        <div className="page-contact__intro">
          <p className="page-contact__eyebrow">NEXT STEP</p>
          <h2 className="page-contact__title">{heading}</h2>
          <p className="page-contact__copy">{copy}</p>
          <Link href="/contact#book-call" className="page-contact__link">Prefer to book now? View scheduling options</Link>
        </div>

        <form className="page-contact__form" action={web3formsEndpoint} method="POST">
          <input type="hidden" name="access_key" value={web3formsAccessKey} />
          <input type="hidden" name="subject" value={subject} />
          <input type="hidden" name="from_name" value="Kealey Design Website" />
          <input type="hidden" name="redirect" value={thankYouUrl} />
          <input type="checkbox" name="botcheck" aria-hidden="true" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

          <label htmlFor="page-contact-name">Name</label>
          <input id="page-contact-name" type="text" name="name" placeholder="Your name" required />

          <label htmlFor="page-contact-email">Email</label>
          <input id="page-contact-email" type="email" name="email" placeholder="you@company.com" required />

          <label htmlFor="page-contact-phone">Phone</label>
          <input id="page-contact-phone" type="tel" name="phone" placeholder="(123) 456-7890" />

          <label htmlFor="page-contact-message">Project Details</label>
          <textarea id="page-contact-message" name="message" rows={5} placeholder="Tell us about your project goals" required />

          <button type="submit">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
}
