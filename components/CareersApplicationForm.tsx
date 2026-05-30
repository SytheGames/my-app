"use client";

const web3formsEndpoint = "https://api.web3forms.com/submit";
const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";
const redirectUrl = `${siteUrl}/careers/thank-you`;

type CareersApplicationFormProps = {
  jobTitle: string;
};

export function CareersApplicationForm({ jobTitle }: CareersApplicationFormProps) {
  return (
    <form className="job-page__form" aria-label="Career application form" action={web3formsEndpoint} method="POST">
      <input type="hidden" name="access_key" value={web3formsAccessKey} />
      <input type="hidden" name="subject" value={`Career Application - ${jobTitle}`} />
      <input type="hidden" name="from_name" value="Kealey Design Careers" />
      <input type="hidden" name="redirect" value={redirectUrl} />
      <input type="hidden" name="job_title" value={jobTitle} />
      <input
        type="checkbox"
        name="botcheck"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      <label htmlFor="career-name">Name</label>
      <input id="career-name" name="name" type="text" placeholder="Your full name" required />

      <label htmlFor="career-email">Email</label>
      <input id="career-email" name="email" type="email" placeholder="you@email.com" required />

      <label htmlFor="career-phone">Phone (optional)</label>
      <input id="career-phone" name="phone" type="tel" placeholder="+1 (555) 555-5555" />

      <label htmlFor="career-timezone">Timezone</label>
      <input id="career-timezone" name="timezone" type="text" placeholder="e.g. EST / CST / PST" required />

      <label htmlFor="career-links">LinkedIn / portfolio (optional)</label>
      <input id="career-links" name="links" type="url" placeholder="https://linkedin.com/in/..." />

      <label htmlFor="career-experience">Relevant experience</label>
      <textarea
        id="career-experience"
        name="experience"
        rows={5}
        placeholder="Briefly share any sales, appointment setting, or customer-facing experience."
        required
      />

      <label htmlFor="career-why">Why you&apos;re a good fit</label>
      <textarea
        id="career-why"
        name="why_fit"
        rows={5}
        placeholder="What makes you confident in a commission-only role?"
        required
      />

      <div className="job-page__form-check">
        <input id="career-commission-ack" name="commission_only_ack" type="checkbox" required />
        <label htmlFor="career-commission-ack">
          I understand this role is 100% commission-only (no hourly pay, salary, or guaranteed income).
        </label>
      </div>

      <button type="submit">Submit application</button>
    </form>
  );
}

