import Link from "next/link";
import SiteIcon from "./SiteIcon";

const explore = [
  ["About", "/about/"],
  ["Stores", "/stores/"],
  ["Offers", "/offers/"],
  ["What’s On", "/whats-on/"],
  ["Gallery", "/gallery/"],
  ["Blog", "/blog/"],
  ["Plan a visit", "/visit/"],
] as const;
const visitor = [
  ["Directions", "/visit/"],
  ["Parking", "/visit/"],
  ["Amenities", "/visit/"],
  ["Store directory", "/stores/"],
] as const;

export default function Footer() {
  return (
    <footer className="mall-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link
            className="footer-logo-link"
            href="/"
            aria-label="R.B. Complex home"
          >
            <span className="footer-brand-large">
              <img src="/images/RBC-logo-cropped.png" alt="R.B. Complex" />
            </span>
          </Link>
          <p>
            A shopping and commercial destination in the heart of New Road,
            Kathmandu. Find stores, offers and visitor information in one place.
          </p>
          <div className="footer-social" aria-label="R.B. Complex social media">
            <a
              href="https://www.facebook.com/profile.php?id=61594139743229"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v3H6v4h3v6h4v-6h3.1l.9-4H13V9c0-.7.3-1 1-1Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/rbcomplexofficial/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" className="social-dot" />
              </svg>
            </a>
            {/* <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8Z" />
                <path d="m10 15 5-3-5-3v6Z" className="social-play" />
              </svg>
            </a> */}
            <a
              href="https://www.tiktok.com/@rbcomplexofficial"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3v11.1a3.3 3.3 0 1 1-2.5-3.2V7a7.4 7.4 0 1 0 6.5 7.4V9.1A7.7 7.7 0 0 0 22 10V6.2A4 4 0 0 1 18 3h-4Z" />
              </svg>
            </a>
          </div>
        </div>
        <nav className="footer-col" aria-label="Explore R.B. Complex">
          <h2>Explore</h2>
          {explore.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <nav className="footer-col" aria-label="Visitor information">
          <h2>Visitor</h2>
          {visitor.map(([label, href]) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="footer-contact-card">
          <p className="footer-kicker">For businesses</p>
          <h2>Bring your brand to New Road.</h2>
          <Link className="footer-cta" href="/leasing/">
            Leasing enquiry <SiteIcon name="external" className="inline-icon" />
          </Link>
          <div className="footer-contact-details">
            <div>
              <span>Visit us</span>
              <strong>
                Pako, New Road
                <br />
                Kathmandu
              </strong>
            </div>
            <div>
              <span>Call us</span>
              <a href="tel:+97714220503">01–4220503</a>
            </div>
          </div>
        </div>
        <section
          className="footer-newsletter"
          aria-labelledby="newsletter-title"
        >
          <form className="newsletter-form">
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter your email address"
              required
              name="email"
              autoComplete="email"
            />
            <button type="submit">
              Subscribe <SiteIcon name="arrow" className="inline-icon" />
            </button>
          </form>
          <div>
            <p className="footer-kicker">Stay in the loop</p>
            <h2 id="newsletter-title">What’s new at R.B. Complex?</h2>
            <p>
              Receive updates on new arrivals, offers and moments happening at
              the complex.
            </p>
          </div>
        </section>
      </div>
      <div className="footer-bottom">
        <span>© 2026 R.B. Complex</span>
        <span>New Road · Kathmandu · Nepal</span>
        <span>Website prototype</span>
      </div>
    </footer>
  );
}
