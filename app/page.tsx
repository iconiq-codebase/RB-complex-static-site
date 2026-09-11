import Link from "next/link";
import SiteIcon from "../components/SiteIcon";
export const metadata = { title: "Shopping in New Road, Kathmandu" };
export default function Page(){return (<div className="view active" id="view-home">
<section className="hero">
<img src="/images/shopping-1.jpg" alt="Premium shopping mall interior concept image" loading="eager" />
<div className="hero-content reveal-left show">
<p className="eyebrow">{"R.B. Complex · New Road"}</p>
<h1 >{"Everything you love."}<br  /><em >{"Under one roof."}</em></h1>
<p >{"Shop fashion, footwear, electronics, accessories and everyday services in the heart of Kathmandu's New Road district."}</p>
<div className="actions">
<Link className="btn btn-light route" data-view="stores" href="/stores/">Explore stores <SiteIcon name="external" className="inline-icon" /></Link>
<Link className="btn btn-outline-white route" data-view="whats-on" href="/whats-on/">{"What's happening"}</Link>
</div>
</div>
<div className="hero-badge"><div ><small >{"Welcome to"}</small><strong >{"R.B."}<br  />{"Complex"}</strong></div></div>
</section>
<section className="quick-links">
<Link className="route" data-view="stores" href="/stores/"><SiteIcon name="fashion" /><strong >{"Fashion"}</strong></Link>
<Link className="route" data-view="stores" href="/stores/"><SiteIcon name="footwear" /><strong >{"Footwear"}</strong></Link>
<Link className="route" data-view="stores" href="/stores/"><SiteIcon name="electronics" /><strong >{"Electronics"}</strong></Link>
<Link className="route" data-view="offers" href="/offers/"><SiteIcon name="offer" /><strong >{"Offers"}</strong></Link>
<Link className="route" data-view="visit" href="/visit/"><SiteIcon name="visit" /><strong >{"Visit"}</strong></Link>
</section>
<section className="section">
<div className="section-head reveal show">
<div ><p className="kicker">{"Discover R.B."}</p><h2 >{"Shopping made"}<br  /><em >{"easy to explore."}</em></h2></div>
<p >{"Explore your next find, discover seasonal inspiration, and plan a day in the heart of New Road."}</p>
</div>
<div className="feature-grid">
<Link className="feature-card route reveal-left show" data-view="stores" style={{"border": "0", "padding": "0", "textAlign": "left"}} href="/stores/">
<img src="/images/shopping-2.jpg" alt="Shopping mall interior concept" loading="lazy" />
<div className="content"><small >{"Shop"}</small><h3 >{"Browse the store directory"}</h3></div>
</Link>
<div className="feature-side">
<Link className="feature-card small route reveal-right show" data-view="offers" style={{"border": "0", "padding": "0", "textAlign": "left"}} href="/offers/">
<img src="/images/shopping-3.jpg" alt="Fashion retail concept" loading="lazy" />
<div className="content"><small >{"Offers"}</small><h3 >{"See what's on sale"}</h3></div>
</Link>
<Link className="feature-card small route reveal-right show" data-view="whats-on" style={{"border": "0", "padding": "0", "textAlign": "left"}} href="/whats-on/">
<img src="/images/shopping-4.jpg" alt="Dining concept" loading="lazy" />
<div className="content"><small >{"What's On"}</small><h3 >{"Events & experiences"}</h3></div>
</Link>
</div>
</div>
</section>
<section className="section cream">
<div className="section-head reveal show">
<div ><p className="kicker">{"Featured now"}</p><h2 >{"More reasons"}<br  /><em >{"to stop by."}</em></h2></div>
<p >{"A little inspiration for your next shopping day. Explore our sample seasonal highlights below."}</p>
</div>
<div className="promo-grid">
<article className="promo main promo-with-image reveal-left show"><img className="promo-image" src="/images/product-fashion.png" alt="Seasonal fashion collection" /><span className="tag">{"Seasonal campaign"}</span><div ><h3 >{"New season."}<br  />{"New finds."}</h3><p >{"Discover fresh arrivals across fashion, footwear and accessories."}</p></div><div className="big">{"%"}</div></article>
<article className="promo promo-with-image reveal show"><img className="promo-image" src="/images/product-footwear.png" alt="Running shoes" /><span className="tag">{"Weekend"}</span><div ><h3 >{"Shop & save"}</h3><p >{"Prototype offer space for participating stores."}</p></div></article>
<article className="promo promo-with-image reveal-right show"><img className="promo-image" src="/images/product-beauty.png" alt="Beauty and skincare products" /><span className="tag">{"Discover"}</span><div ><h3 >{"What's new at R.B."}</h3><p >{"Highlight recently opened stores and services."}</p></div></article>
</div>
</section>
<section className="section">
<div className="section-title-row reveal show">
<div ><p className="kicker">{"Shop by category"}</p><h3 >{"Whatever brings you in."}</h3></div>
<p >{"From a new look to everyday essentials, find a place to start exploring."}</p>
</div>
<div className="category-showcase">
<Link className="category-tile route reveal-left show" data-view="stores" href="/stores/"><img src="/images/shopping-3.jpg" alt="Fashion shopping concept" loading="lazy" /><div className="cat-copy"><small >{"Fashion"}</small><h4 >{"Wear it your way."}</h4><span >{"Explore clothing & style →"}</span></div></Link>
<Link className="category-tile route reveal show" data-view="stores" href="/stores/"><img src="/images/shopping-5.jpg" alt="Footwear and retail concept" loading="lazy" /><div className="cat-copy"><small >{"Footwear"}</small><h4 >{"Step into something new."}</h4><span >{"Explore shoes & accessories →"}</span></div></Link>
<Link className="category-tile route reveal show" data-view="stores" href="/stores/"><img src="/images/shopping-6.jpg" alt="Beauty and accessories concept" loading="lazy" /><div className="cat-copy"><small >{"Beauty & accessories"}</small><h4 >{"The finishing touch."}</h4><span >{"Explore personal style →"}</span></div></Link>
<Link className="category-tile route reveal-right show" data-view="stores" href="/stores/"><img src="/images/shopping-2.jpg" alt="Electronics and services concept" loading="lazy" /><div className="cat-copy"><small >{"Electronics & services"}</small><h4 >{"Everyday essentials."}</h4><span >{"Explore technology & services →"}</span></div></Link>
</div>
</section>
<div className="brand-band">
<div className="brand-track">
<span >{"Fashion"}</span><i >{"◆"}</i><span >{"Footwear"}</span><i >{"◆"}</i><span >{"Accessories"}</span><i >{"◆"}</i><span >{"Electronics"}</span><i >{"◆"}</i><span >{"Services"}</span><i >{"◆"}</i><span >{"New Road"}</span><i >{"◆"}</i>
<span >{"Fashion"}</span><i >{"◆"}</i><span >{"Footwear"}</span><i >{"◆"}</i><span >{"Accessories"}</span><i >{"◆"}</i><span >{"Electronics"}</span><i >{"◆"}</i><span >{"Services"}</span><i >{"◆"}</i><span >{"New Road"}</span><i >{"◆"}</i>
</div>
</div>
<section className="section">
<div className="section-head reveal show">
<div ><p className="kicker">{"A full day at R.B."}</p><h2 >{"Shop. Meet."}<br  /><em >{"Discover."}</em></h2></div>
<p >{"Make room for a little discovery. Browse the shops, meet a friend, and enjoy the energy of New Road."}</p>
</div>
<div className="lifestyle-split">
<div className="lifestyle-main reveal-left show"><img src="/images/shopping-3.jpg" alt="Fashion shopping experience concept" loading="lazy" /><div className="lifestyle-copy"><small >{"Style"}</small><h3 >{"Start with something new."}</h3><p >{"Fresh fashion, accessories and everyday finds across multiple floors."}</p></div></div>
<div className="lifestyle-side-wrap">
<div className="lifestyle-side reveal-right show"><img src="/images/shopping-4.jpg" alt="Dining and social experience concept" loading="lazy" /><div className="lifestyle-copy"><small >{"Meet"}</small><h3 >{"Make time for people."}</h3><p >{"Catch up with friends and explore nearby food spots after a day of shopping."}</p></div></div>
<div className="lifestyle-side reveal-right show"><img src="/images/shopping-2.jpg" alt="Mall architecture concept" loading="lazy" /><div className="lifestyle-copy"><small >{"Explore"}</small><h3 >{"See what's around the corner."}</h3><p >{"New stores, seasonal campaigns and changing retail moments."}</p></div></div>
</div>
</div>
</section>
<section className="section cream">
<div className="section-title-row reveal show">
<div ><p className="kicker">{"Your day, your pace"}</p><h3 >{"From first stop to last bag."}</h3></div>
<p >{"Take your time, explore something different, and make the most of your day in Kathmandu."}</p>
</div>
<div className="day-strip">
<article className="day-item reveal-left show"><time >{"10:00"}</time><h4 >{"Arrive in New Road"}</h4><p >{"Plan the stores you want before you step inside."}</p></article>
<article className="day-item reveal show"><time >{"12:00"}</time><h4 >{"Browse & compare"}</h4><p >{"Move between fashion, footwear, electronics and services."}</p></article>
<article className="day-item reveal show"><time >{"15:00"}</time><h4 >{"Catch what's new"}</h4><p >{"Check seasonal campaigns, offers and new openings."}</p></article>
<article className="day-item reveal-right show"><time >{"17:00"}</time><h4 >{"One last stop"}</h4><p >{"Save a favourite store or plan your next visit."}</p></article>
</div>
</section>
<section className="section">
<div className="section-head reveal show">
<div ><p className="kicker">{"Find your way"}</p><h2 >{"Know the floor"}<br  /><em >{"before you arrive."}</em></h2></div>
<p >{"Explore the sample directory and get an idea of how to plan your shopping stops."}</p>
</div>
<div className="floor-teaser">
<div className="floor-copy reveal-left show">
<h3 >{"Four levels."}<br  />{"One clear guide."}</h3>
<p >{"Prototype floor numbers are shown for visual direction. The final site can use verified plans and real tenant locations."}</p>
<div className="actions"><Link className="btn btn-dark route" data-view="stores" href="/stores/">{"Browse stores"}</Link><Link className="btn btn-red route" data-view="visit" href="/visit/">{"Plan your visit"}</Link></div>
</div>
<div className="floor-stack-mini reveal-right show">
<div className="floor-mini" data-floor="G"><i ></i><i ></i><i ></i></div>
<div className="floor-mini" data-floor="01"><i ></i><i ></i><i ></i></div>
<div className="floor-mini" data-floor="02"><i ></i><i ></i><i ></i></div>
<div className="floor-mini" data-floor="03"><i ></i><i ></i><i ></i></div>
</div>
</div>
</section>
<section className="quote-band reveal show">
<blockquote >{"“The digital version of R.B. should feel as active as "}<em >{"New Road itself."}</em>{"”"}</blockquote>
<small >{"Prototype design principle"}</small>
</section>
<section className="section">
<div className="section-title-row reveal show">
<div ><p className="kicker">{"Seen at R.B."}</p><h3 >{"Retail in motion."}</h3></div>
<p >{"A little shopping inspiration. Gallery photographs are illustrative concept images."}</p>
</div>
<div className="social-grid">
<div className="social-tile reveal-left show"><img src="/images/shopping-3.jpg" alt="Fashion concept" loading="lazy" /></div>
<div className="social-tile reveal show"><img src="/images/shopping-2.jpg" alt="Mall concept" loading="lazy" /></div>
<div className="social-tile reveal show"><img src="/images/shopping-6.jpg" alt="Beauty concept" loading="lazy" /></div>
<div className="social-tile reveal show"><img src="/images/shopping-4.jpg" alt="Dining concept" loading="lazy" /></div>
<div className="social-tile reveal-right show"><img src="/images/shopping-5.jpg" alt="Retail architecture concept" loading="lazy" /></div>
</div>
</section>
<section className="long-cta reveal show">
<img src="/images/shopping-1.jpg" alt="Shopping mall interior concept" loading="lazy" />
<div className="long-cta-copy">
<p className="kicker" style={{"color": "#e6c4a5"}}>{"Come to New Road"}</p>
<h3 >{"Make R.B. part of"}<br  /><em >{"your next city day."}</em></h3>
<p >{"Find your stores, check what's happening, then get directions — all from one place."}</p>
<div className="actions"><Link className="btn btn-light route" data-view="visit" href="/visit/">{"Plan your visit ↗"}</Link><Link className="btn btn-outline-white route" data-view="stores" href="/stores/">{"See all stores"}</Link></div>
</div>
</section>
</div>);}
