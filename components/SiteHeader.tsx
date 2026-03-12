"use client";

import { useState } from "react";
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

  return (
    <header className="site-header">
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
          <span className="brand__text">kealeydesign.</span>
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
