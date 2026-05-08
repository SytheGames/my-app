"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const web3formsEndpoint = "https://api.web3forms.com/submit";
const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const STORAGE_KEY = "exit_popup_dismissed";

function isWithinExpiry(): boolean {
  return sessionStorage.getItem(STORAGE_KEY) === "1";
}

function markDismissed() {
  sessionStorage.setItem(STORAGE_KEY, "1");
}

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const firedRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (isWithinExpiry()) return;

    function trigger() {
      if (firedRef.current) return;
      firedRef.current = true;
      setVisible(true);
    }

    // Desktop: mouse heading toward tab/close bar
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 20) trigger();
    }

    // All devices: fire once user has scrolled past 50% of page height
    function handleScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= 0.5) trigger();
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function dismiss() {
    markDismissed();
    setVisible(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(web3formsEndpoint, {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        markDismissed();
        setSubmitted(true);
        setTimeout(() => {
          router.push("/thank-you");
        }, 800);
      } else {
        setSubmitting(false);
      }
    } catch {
      setSubmitting(false);
    }
  }

  if (!visible) return null;

  return (
    <div
      className="exit-popup__overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Limited-time offer"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains("exit-popup__overlay")) dismiss();
      }}
    >
      <div className="exit-popup__modal">
        <button
          className="exit-popup__close"
          onClick={dismiss}
          aria-label="Close offer"
          type="button"
        >
          ✕
        </button>

        {/* Left column — visual */}
        <div className="exit-popup__visual">
          <Image
            src="/daveychiro.png"
            alt="Davey Chiropractic website built by Kealey Design"
            width={900}
            height={700}
            className="exit-popup__mockup-img"
            priority
          />
          <div className="exit-popup__visual-copy">
            <div className="exit-popup__badge">Limited-Time Offer</div>
            <p className="exit-popup__visual-headline">
              Save <span className="exit-popup__highlight">$500</span> on a new website
            </p>
            <p className="exit-popup__visual-sub">Offer ends June&nbsp;20th</p>
          </div>
        </div>

        {/* Right column — form */}
        <div className="exit-popup__panel">
          <h2 className="exit-popup__heading">
            Let&apos;s build something great together
          </h2>
          <p className="exit-popup__subhead">
            Fill out the form and we&apos;ll apply your <strong>$500 discount</strong> automatically to your quote.
          </p>

          {submitted ? (
            <p className="exit-popup__success">Message sent! Redirecting…</p>
          ) : (
            <form className="exit-popup__form" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="access_key" value={web3formsAccessKey} />
              <input
                type="hidden"
                name="subject"
                value="$500 Off Offer — Exit Popup Inquiry"
              />
              <input type="hidden" name="from_name" value="Kealey Design Website" />
              <input
                type="checkbox"
                name="botcheck"
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <label htmlFor="exit-popup-name">Name</label>
              <input
                id="exit-popup-name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                disabled={submitting}
              />

              <label htmlFor="exit-popup-email">Email</label>
              <input
                id="exit-popup-email"
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                disabled={submitting}
              />

              <label htmlFor="exit-popup-message">Tell us about your project</label>
              <textarea
                id="exit-popup-message"
                name="message"
                rows={3}
                placeholder="What does your business do and what are you looking for?"
                disabled={submitting}
              />

              <button type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Claim My $500 Discount"}
              </button>
            </form>
          )}

          <p className="exit-popup__fine">Offer valid on new web design projects only. Ends June 20th.</p>
        </div>
      </div>
    </div>
  );
}
