import Link from "next/link";
import SiteIcon from "../../components/SiteIcon";
export const metadata = { title: "Store directory" };
export default function Page(){return (<div className="view active" id="view-stores">
<section className="hero" style={{"height": "68vh", "minHeight": "520px"}}>
<img src="/images/shopping-5.jpg" alt="Shopping mall interior concept" loading="eager" />
<div className="hero-content reveal-left show">
<p className="eyebrow">{"Store directory"}</p>
<h1 >{"Find your"}<br  /><em >{"favourites."}</em></h1>
<p >{"Search by store, category or floor."}</p>
</div>
</section>

<section className="section">
<div className="section-head reveal show">
<div ><p className="kicker">{"Stores"}</p><h2 >{"Everything"}<br  /><em >{"in one place."}</em></h2></div>
<p >{"This searchable directory is ready to be populated with the actual R.B. Complex tenant list."}</p>
</div>
<div className="store-toolbar reveal show">
<label className="store-search"><SiteIcon name="search" /><input id="storeSearch" placeholder="Search store, category or floor…" aria-label="Search stores" /></label>
<div className="filters">
<button className="filter active" data-filter="all">{"All"}</button>
<button className="filter" data-filter="fashion">{"Fashion"}</button>
<button className="filter" data-filter="footwear">{"Footwear"}</button>
<button className="filter" data-filter="electronics">{"Electronics"}</button>
<button className="filter" data-filter="services">{"Services"}</button>
</div>
</div>
<div className="store-grid">
<article className="store reveal-left show" data-category="fashion" data-search="urban line fashion ground g12"><div className="store-top"><span >{"G-12"}</span><SiteIcon name="external" /></div><img className="store-product" src="/images/product-fashion.png" alt="Folded fashion apparel" /><div ><div className="store-cat">{"Fashion"}</div><h3 >{"Urban Line"}</h3></div><small >{"Ground Floor"}</small></article>
<article className="store reveal show" data-category="footwear" data-search="stride footwear first 108"><div className="store-top"><span >{"1-08"}</span><SiteIcon name="external" /></div><img className="store-product" src="/images/product-footwear.png" alt="Running shoes" /><div ><div className="store-cat">{"Footwear"}</div><h3 >{"Stride"}</h3></div><small >{"First Floor"}</small></article>
<article className="store featured reveal-right show" data-category="electronics" data-search="pixel point electronics mobile second 221"><div className="store-top"><span >{"2-21"}</span><SiteIcon name="external" /></div><img className="store-product" src="/images/product-electronics.png" alt="Smartphone and headphones" /><div ><div className="store-cat">{"Electronics"}</div><h3 >{"Pixel Point"}</h3></div><small >{"Second Floor"}</small></article>
<article className="store reveal-left show" data-category="services" data-search="city services third 305"><div className="store-top"><span >{"3-05"}</span><SiteIcon name="external" /></div><img className="store-product" src="/images/product-services.png" alt="Retail service counter" /><div ><div className="store-cat">{"Services"}</div><h3 >{"City Services"}</h3></div><small >{"Third Floor"}</small></article>
<article className="store reveal show" data-category="fashion" data-search="everyday edit fashion first 114"><div className="store-top"><span >{"1-14"}</span><SiteIcon name="external" /></div><img className="store-product" src="/images/product-accessories.png" alt="Leather wallet and wristwatch" /><div ><div className="store-cat">{"Fashion"}</div><h3 >{"Everyday Edit"}</h3></div><small >{"First Floor"}</small></article>
<article className="store reveal-right show" data-category="footwear" data-search="sole room footwear second 204"><div className="store-top"><span >{"2-04"}</span><SiteIcon name="external" /></div><img className="store-product" src="/images/product-footwear.png" alt="Running shoes" /><div ><div className="store-cat">{"Footwear"}</div><h3 >{"Sole Room"}</h3></div><small >{"Second Floor"}</small></article>
</div>
<p className="note">{"Demo shop names/unit numbers only — replace with verified tenant data for production."}</p>
</section>
<section className="section cream">
<div className="section-head reveal show">
<div ><p className="kicker">{"Directory overview"}</p><h2 >{"Browse by"}<br  /><em >{"floor and category."}</em></h2></div>
<p >{"Long store pages help visitors understand the retail mix before they search individual names."}</p>
</div>
<div className="directory-stats">
<div className="directory-stat reveal-left show"><strong >{"G"}</strong><small >{"Ground floor"}</small></div>
<div className="directory-stat reveal show"><strong >{"01"}</strong><small >{"First floor"}</small></div>
<div className="directory-stat reveal show"><strong >{"02"}</strong><small >{"Second floor"}</small></div>
<div className="directory-stat reveal-right show"><strong >{"03"}</strong><small >{"Third floor"}</small></div>
</div>
<div className="az-strip reveal show">
<button >{"A"}</button><button >{"B"}</button><button >{"C"}</button><button >{"D"}</button><button >{"E"}</button><button >{"F"}</button><button >{"G"}</button><button >{"H"}</button><button >{"I"}</button><button >{"J"}</button><button >{"K"}</button><button >{"L"}</button><button >{"M"}</button><button >{"N"}</button><button >{"O"}</button><button >{"P"}</button><button >{"Q"}</button><button >{"R"}</button><button >{"S"}</button><button >{"T"}</button><button >{"U"}</button><button >{"V"}</button><button >{"W"}</button><button >{"X"}</button><button >{"Y"}</button><button >{"Z"}</button>
</div>
</section>
<section className="section">
<div className="section-title-row reveal show">
<div ><p className="kicker">{"Shop by floor"}</p><h3 >{"Know where to start."}</h3></div>
<p >{"Each floor can have its own mini-directory, key categories and highlights."}</p>
</div>
<div className="floor-directory">
<article className="reveal-left show"><div className="floor-number">{"G"}</div><h3 >{"Ground Floor"}</h3><p >{"Entry-level retail, fashion and everyday shopping."}</p></article>
<article className="reveal show"><div className="floor-number">{"01"}</div><h3 >{"First Floor"}</h3><p >{"Fashion, footwear and related retail categories."}</p></article>
<article className="reveal show"><div className="floor-number">{"02"}</div><h3 >{"Second Floor"}</h3><p >{"Mobile, electronics, accessories and specialist retail."}</p></article>
<article className="reveal-right show"><div className="floor-number">{"03"}</div><h3 >{"Third Floor"}</h3><p >{"Services, specialty businesses and additional retail."}</p></article>
</div>
</section>
<section className="section dark">
<div className="section-head reveal show">
<div ><p className="kicker">{"Featured categories"}</p><h2 >{"Find the things"}<br  /><em >{"you came for."}</em></h2></div>
<p >{"Use visual category discovery for people who know what they want, but not the exact store name."}</p>
</div>
<div className="category-showcase">
<div className="category-tile reveal-left show"><img src="/images/shopping-3.jpg" alt="Fashion category" loading="lazy" /><div className="cat-copy"><small >{"Fashion"}</small><h4 >{"Clothing & style"}</h4><span >{"Browse category"}</span></div></div>
<div className="category-tile reveal show"><img src="/images/shopping-5.jpg" alt="Footwear category" loading="lazy" /><div className="cat-copy"><small >{"Footwear"}</small><h4 >{"Shoes & more"}</h4><span >{"Browse category"}</span></div></div>
<div className="category-tile reveal show"><img src="/images/shopping-6.jpg" alt="Accessories category" loading="lazy" /><div className="cat-copy"><small >{"Accessories"}</small><h4 >{"Finishing touches"}</h4><span >{"Browse category"}</span></div></div>
<div className="category-tile reveal-right show"><img src="/images/shopping-2.jpg" alt="Electronics category" loading="lazy" /><div className="cat-copy"><small >{"Electronics"}</small><h4 >{"Tech & services"}</h4><span >{"Browse category"}</span></div></div>
</div>
</section>
<section className="section">
<div className="section-title-row reveal show">
<div ><p className="kicker">{"Need help?"}</p><h3 >{"Make shopping simpler."}</h3></div>
<p >{"A production directory can add favourite stores, click-to-call, map locations and accessible routes."}</p>
</div>
<div className="amenities">
<article className="amenity reveal-left show"><SiteIcon name="search" /><h3 >{"Search"}</h3><p >{"Find a tenant instantly by name or category."}</p></article>
<article className="amenity reveal show"><SiteIcon name="visit" /><h3 >{"Locate"}</h3><p >{"Jump from a store listing to its floor position."}</p></article>
<article className="amenity reveal show"><SiteIcon name="phone" /><h3 >{"Contact"}</h3><p >{"Add verified store numbers and direct contact actions."}</p></article>
<article className="amenity reveal-right show"><SiteIcon name="save" /><h3 >{"Save"}</h3><p >{"Future option for visitors to save stores before arriving."}</p></article>
</div>
</section>
<section className="long-cta reveal show">
<img src="/images/shopping-5.jpg" alt="Retail interior concept" loading="lazy" />
<div className="long-cta-copy">
<p className="kicker" style={{"color": "#e6c4a5"}}>{"Next step"}</p>
<h3 >{"Found what you need?"}<br  /><em >{"Come find us."}</em></h3>
<p >{"Move directly from store discovery to practical visitor information."}</p>
<div className="actions"><Link className="btn btn-light route" data-view="visit" href="/visit/">{"Plan a visit ↗"}</Link></div>
</div>
</section>
</div>);}
