import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Web Design", href: "/services/web-design" },
    { label: "Website Redesign", href: "/services/website-redesign" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "Ecommerce", href: "/services/ecommerce-websites" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/portfolio" },
    { label: "Industries", href: "/#locations" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/kealey-design", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/mattkealeydesign/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/mattkealeydesign", icon: Facebook },
];

export function SiteFooter() {
  return (
    <>
      <section className="site-map" aria-label="Business location map">
        <iframe
          className="site-map__frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5893.743103058098!2d-82.1878151880869!3d42.38788273322292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ff928fd61984d%3A0x9203b43c123c0201!2sKealey%20Design%20-%20Chatham%20Website%20Design!5e0!3m2!1sen!2sca!4v1773189952455!5m2!1sen!2sca"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kealey Design location map"
        />
      </section>

      <footer className="site-footer" aria-label="Footer">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <div className="site-footer__brand-block">
              <Link href="/" className="site-footer__logo" aria-label="Kealey Design home">
                <span className="site-footer__logo-text">kealeydesign.</span>
              </Link>
              <p className="site-footer__description">
                We design and build performance-first websites that help brands scale faster.
              </p>
              <address className="site-footer__contact" aria-label="Business contact details">
                73 Marion Ave, Chatham, ON N7M 5N7
                <br />
                <a href="tel:+15194011469">+1 519 401-1469</a>
              </address>
              <Link href="/contact" className="site-footer__cta">
                Start your project
                <ArrowUpRight className="site-footer__cta-icon" aria-hidden="true" />
              </Link>
            </div>

            <div className="site-footer__links-grid">
              <div className="site-footer__column">
                <p className="site-footer__heading">Services</p>
                <ul className="site-footer__list">
                  {footerLinks.services.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="site-footer__column">
                <p className="site-footer__heading">Company</p>
                <ul className="site-footer__list">
                  {footerLinks.company.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="site-footer__column">
                <p className="site-footer__heading">Follow</p>
                <div className="site-footer__socials" aria-label="Social links">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="site-footer__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="site-footer__social-icon" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="site-footer__bottom">
            <p className="site-footer__copyright">© {new Date().getFullYear()} Kealey Design. All rights reserved.</p>
            <p className="site-footer__legal">
              <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
