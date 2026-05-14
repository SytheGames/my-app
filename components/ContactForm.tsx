"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const web3formsEndpoint = "https://api.web3forms.com/submit";
const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";
const thankYouUrl = `${siteUrl}/thank-you`;

export function ContactForm() {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan && messageRef.current) {
      messageRef.current.value = `I'm interested in: ${plan}\n\n`;
      messageRef.current.focus();
    }
  }, [searchParams]);

  return (
    <form
      id="contact-form"
      className="contact-page__form"
      aria-label="Contact form"
      action={web3formsEndpoint}
      method="POST"
    >
      <input type="hidden" name="access_key" value={web3formsAccessKey} />
      <input type="hidden" name="subject" value="Free Audit Request - Kealey Design" />
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

      <label htmlFor="contact-full-name">Name</label>
      <input id="contact-full-name" type="text" name="name" placeholder="Your name" required />

      <label htmlFor="contact-email-page">Email</label>
      <input id="contact-email-page" type="email" name="email" placeholder="you@company.com" required />

      <label htmlFor="contact-budget">Budget</label>
      <select id="contact-budget" name="budget" defaultValue="" required>
        <option value="" disabled>
          Select your budget
        </option>
        <option value="$500 - $1,500">$500 - $1,500</option>
        <option value="$1,500 - $3,500">$1,500 - $3,500</option>
        <option value="$3,500 - $7,500">$3,500 - $7,500</option>
        <option value="$7,500 - $12,500">$7,500 - $12,500</option>
        <option value="$12,500+">$12,500+</option>
        <option value="Not sure">Not sure</option>
      </select>

      <label htmlFor="contact-message">Project Details</label>
      <textarea
        ref={messageRef}
        id="contact-message"
        name="message"
        rows={6}
        placeholder="Website URL + what you want to improve"
        required
      />

      <button type="submit">Get My Free Audit</button>
    </form>
  );
}
