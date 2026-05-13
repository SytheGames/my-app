"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Locations", href: "/locations" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

const utilityItems = [
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlertDismissed, setIsAlertDismissed] = useState(false);

  const ALERT_KEY = "site-header-alert-dismissed";
  const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const stored = window.localStorage.getItem(ALERT_KEY);
    if (stored && Date.now() - Number(stored) < SEVEN_DAYS) {
      setIsAlertDismissed(true);
    } else if (stored) {
      window.localStorage.removeItem(ALERT_KEY);
    }
  }, []);

  const dismissAlert = () => {
    window.localStorage.setItem(ALERT_KEY, String(Date.now()));
    setIsAlertDismissed(true);
  };

  return (
    <header className="site-header">
      {!isAlertDismissed ? (
        <div className="site-header__alert" role="status" aria-label="Booking availability">
          <Link href="/contact" className="site-header__alert-link" onClick={() => setIsMenuOpen(false)}>
            <div className="site-header__alert-inner">
              <span className="site-header__alert-text">Now booking web design projects.</span>
              <span className="site-header__alert-cta">
                Get your free consultation
                <ArrowRight className="site-header__alert-icon" aria-hidden />
              </span>
            </div>
          </Link>
          <button
            type="button"
            className="site-header__alert-dismiss"
            aria-label="Dismiss booking availability banner"
            onClick={dismissAlert}
          >
            <X aria-hidden />
          </button>
        </div>
      ) : null}
      <div className="site-header__topbar" aria-label="Secondary navigation">
        <div className="site-header__topbar-inner">
          <div className="site-header__topbar-links">
            {utilityItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="site-header__utility-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label="Kealey Design home">
          <span className="brand__text">
            kealeydesign<span className="brand__dot">.</span>
          </span>
        </Link>

        <button
          type="button"
          className="site-header__menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>

        <nav id="primary-navigation" className={`site-nav ${isMenuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="site-nav__link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="quote-button site-nav__cta" onClick={() => setIsMenuOpen(false)}>
            Get a Quote
            <ArrowRight className="quote-button__icon" aria-hidden />
          </Link>
        </nav>

        <Link href="/contact" className="quote-button quote-button--header">
          Get a Quote
          <ArrowRight className="quote-button__icon" aria-hidden />
        </Link>
      </div>
    </header>
  );
}
