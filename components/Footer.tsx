import Link from "next/link";
import SiteIcon from "./SiteIcon";

const explore = [["Stores", "/stores/"], ["Offers", "/offers/"], ["What’s On", "/whats-on/"], ["Plan a visit", "/visit/"]] as const;
const visitor = [["Directions", "/visit/"], ["Parking", "/visit/"], ["Amenities", "/visit/"], ["Store directory", "/stores/"]] as const;

export default function Footer() {
  return <footer className="mall-footer">
    <div className="footer-top">
      <div className="footer-brand-block">
        <Link className="footer-logo-link" href="/" aria-label="R.B. Complex home"><span className="footer-brand-large"><img src="/images/rb-logo.png" alt="R.B. Complex" /></span></Link>
        <p>A shopping and commercial destination in the heart of New Road, Kathmandu. Find stores, offers and visitor information in one place.</p>
      </div>
      <nav className="footer-col" aria-label="Explore R.B. Complex"><h2>Explore</h2>{explore.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <nav className="footer-col" aria-label="Visitor information"><h2>Visitor</h2>{visitor.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
      <div className="footer-contact-card">
        <p className="footer-kicker">For businesses</p><h2>Bring your brand to New Road.</h2>
        <Link className="footer-cta" href="/leasing/">Leasing enquiry <SiteIcon name="external" className="inline-icon" /></Link>
        <div className="footer-contact-details"><div><span>Visit us</span><strong>Pako, New Road<br />Kathmandu</strong></div><div><span>Call us</span><a href="tel:+97714220503">01–4220503</a></div></div>
      </div>
      <section className="footer-newsletter" aria-labelledby="newsletter-title">
        <form className="newsletter-form"><label className="sr-only" htmlFor="footer-email">Email address</label><input id="footer-email" type="email" placeholder="Enter your email address" required name="email" autoComplete="email" /><button type="submit">Subscribe <SiteIcon name="arrow" className="inline-icon" /></button></form>
        <div><p className="footer-kicker">Stay in the loop</p><h2 id="newsletter-title">What’s new at R.B. Complex?</h2><p>Receive updates on new arrivals, offers and moments happening at the complex.</p></div>
      </section>
    </div>
    <div className="footer-bottom"><span>© 2026 R.B. Complex</span><span>New Road · Kathmandu · Nepal</span><span>Website prototype</span></div>
  </footer>;
}
