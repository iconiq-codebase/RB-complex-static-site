import Link from "next/link";
import SiteIcon from "../../components/SiteIcon";

const stories = [
  { image: "/images/product-fashion.png", category: "Style guide", title: "A fresh way to shop New Road", excerpt: "From everyday essentials to a statement piece, build a shopping list that leaves space for an unexpected find." },
  { image: "/images/product-footwear.png", category: "New arrivals", title: "Step into the new season", excerpt: "Footwear is where comfort and personal style meet. Explore the shapes and finishes worth watching this season." },
  { image: "/images/product-electronics.png", category: "Technology", title: "The everyday tech edit", excerpt: "A short guide to finding useful devices, accessories and upgrades while you are in the city." },
  { image: "/images/product-accessories.png", category: "Accessories", title: "The details that complete a look", excerpt: "Watches, wallets and finishing touches make thoughtful gifts and effortless everyday additions." },
  { image: "/images/product-beauty.png", category: "Beauty", title: "A little time for yourself", excerpt: "Discover personal care and beauty essentials that bring a small lift to your regular routine." },
  { image: "/images/shopping-4.jpg", category: "Visit guide", title: "Make a day of New Road", excerpt: "Plan the stores you want to visit, leave time to explore, and enjoy the neighbourhood along the way." },
] as const;

export const metadata = { title: "Stories from R.B." };

export default function Page() {
  return <div className="view active blog-page" id="view-blog">
    <section className="blog-hero">
      <div><p className="eyebrow">Stories from R.B.</p><h1>More than<br /><em>a shopping trip.</em></h1><p>Ideas, new finds and practical guides for enjoying your time at R.B. Complex and around New Road.</p><Link className="btn btn-light" href="#latest">Explore stories <SiteIcon name="arrow" className="inline-icon" /></Link></div>
      <img src="/images/shopping-4.jpg" alt="People enjoying a retail and dining space" />
    </section>
    <section className="section" id="latest">
      <div className="section-head"><div><p className="kicker">Latest stories</p><h2>Find your next<br /><em>favourite thing.</em></h2></div><p>Articles share shopping inspiration and practical ideas for your next day in Kathmandu’s New Road district.</p></div>
      <div className="blog-grid">
        {stories.map((story, index) => <article className={`blog-card blog-card-${index + 1}`} key={story.title}><div className="blog-image"><img src={story.image} alt="" loading={index < 3 ? "eager" : "lazy"} /></div><div className="blog-copy"><p>{story.category}</p><h2>{story.title}</h2><span>{story.excerpt}</span><Link href={`/blog/${index === 0 ? "fresh-way-to-shop-new-road" : index === 1 ? "step-into-the-new-season" : "everyday-tech-edit"}/`}>Read story <SiteIcon name="arrow" className="inline-icon" /></Link></div></article>)}
      </div>
    </section>
    <section className="blog-visit"><div><p className="kicker">Plan your next stop</p><h2>Everything you need<br /><em>before you arrive.</em></h2></div><Link className="btn btn-dark" href="/visit/">Visitor information <SiteIcon name="external" className="inline-icon" /></Link></section>
  </div>;
}
