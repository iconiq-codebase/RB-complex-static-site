import Link from "next/link";
import SiteIcon from "../../components/SiteIcon";

const gallery = [
  ["/images/shopping-1.jpg", "Inside R.B.", "A bright, contemporary retail moment."],
  ["/images/product-fashion.png", "New season style", "Fashion finds for every day."],
  ["/images/product-footwear.png", "Step out", "Footwear and fresh arrivals."],
  ["/images/shopping-4.jpg", "Make a day of it", "Meet, browse and enjoy New Road."],
  ["/images/product-electronics.png", "Everyday tech", "Devices and accessories to discover."],
  ["/images/product-beauty.png", "Small details", "Beauty and personal style."],
  ["/images/shopping-5.jpg", "Retail in motion", "A changing collection of new finds."],
  ["/images/product-accessories.png", "The finishing touch", "Accessories for the everyday."],
] as const;

export const metadata = { title: "Gallery" };

export default function Page() {
  return <div className="view active gallery-page" id="view-gallery">
    <section className="gallery-hero">
      <img src="/images/shopping-1.jpg" alt="Shopping interior at R.B. Complex" />
      <div className="gallery-hero-copy"><p className="eyebrow">Gallery</p><h1>See what’s<br /><em>waiting inside.</em></h1><p>A visual collection of fresh finds, everyday style and moments from the R.B. Complex experience.</p></div>
    </section>
    <section className="section">
      <div className="section-head"><div><p className="kicker">At R.B. Complex</p><h2>New Road,<br /><em>in focus.</em></h2></div><p>From fashion and footwear to technology and everyday essentials, explore the spirit of the complex through the collection below.</p></div>
      <div className="gallery-grid">
        {gallery.map(([src, title, description], index) => <article className={`gallery-card gallery-card-${index + 1}`} key={src}><img src={src} alt={title} loading={index < 3 ? "eager" : "lazy"} /><div><p>{title}</p><span>{description}</span></div></article>)}
      </div>
    </section>
    <section className="gallery-cta"><p className="kicker">Make a day of it</p><h2>Find something<br /><em>worth taking home.</em></h2><div className="actions"><Link className="btn btn-light" href="/stores/">Explore stores <SiteIcon name="external" className="inline-icon" /></Link><Link className="btn btn-outline-white" href="/visit/">Plan your visit</Link></div></section>
  </div>;
}
