import Link from "next/link";
import SiteIcon from "../../components/SiteIcon";
export const metadata = { title: "Plan your visit" };
export default function Page(){return (<div className="view active" id="view-visit">
<section className="hero" style={{"height": "64vh", "minHeight": "500px"}}>
<img src="/images/DSC01215.webp" alt="R.B. Complex shops and courtyard" loading="eager" />
<div className="hero-content reveal-left show"><p className="eyebrow">{"Plan your visit"}</p><h1 >{"See you at"}<br  /><em >{"R.B. Complex."}</em></h1><p >{"Pako, New Road, Kathmandu."}</p></div>
</section>
<section className="section">
<div className="section-head reveal show"><div ><p className="kicker">{"Visit"}</p><h2 >{"Everything you need"}<br  /><em >{"before you arrive."}</em></h2></div><p >{"Use directions for your journey and call ahead for current opening hours, parking and accessibility information."}</p></div>
<div className="visit-layout">
<div className="visit-copy reveal-left show">
<h3 >{"Right in the heart"}<br  />{"of New Road."}</h3>
<p >{"Use this page for directions, official hours, parking guidance and visitor services."}</p>
<div className="info-list">
<div className="info-row"><small >{"Address"}</small><strong >{"New Road (Pukhudhyan Marg / Ranamukteshwor Marg), Kathmandu, Nepal"}</strong></div>
<div className="info-row"><small >{"Phone"}</small><strong >{"01-4220503"}</strong></div>
<div className="info-row"><small >{"Visitor note"}</small><strong >{"Individual store schedules and holiday availability may vary."}</strong></div>
</div>
<div className="actions">
<a className="btn btn-dark" href="https://www.google.com/maps/search/?api=1&query=RB+Complex+New+Road+Kathmandu" target="_blank" rel="noopener">{"Open Google Maps ↗"}</a>
<a className="btn btn-red" href="tel:+97714220503">{"Call R.B. Complex"}</a>
</div>
</div>
<div className="map-card reveal-right show">
<iframe title="Map showing R.B. Complex in Pako, New Road, Kathmandu" src="https://www.google.com/maps?q=RB%20Complex%20New%20Road%20Kathmandu&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
</div>
</div>
<div className="amenities reveal show">
<article className="amenity"><SiteIcon name="parking" /><h3 >{"Parking"}</h3><p >{"Call 01-4220503 for current parking guidance before you travel."}</p></article>
<article className="amenity"><SiteIcon name="access" /><h3 >{"Access"}</h3><p >{"Call ahead to confirm lift, stairs and accessible arrival options."}</p></article>
<article className="amenity"><SiteIcon name="services" /><h3 >{"Services"}</h3><p >{"Ask management about available visitor services and facilities."}</p></article>
<article className="amenity"><SiteIcon name="info" /><h3 >{"Visitor info"}</h3><p >{"Individual store schedules and holiday availability may vary."}</p></article>
</div>
</section>
<section className="section cream">
<div className="section-head reveal show">
<div ><p className="kicker">{"Getting here"}</p><h2 >{"Choose the way"}<br  /><em >{"that works for you."}</em></h2></div>
<p >{"Use live directions for current traffic conditions, then call ahead for parking and drop-off guidance."}</p>
</div>
<div className="transport-grid">
<article className="transport-card reveal-left show"><SiteIcon name="walk" /><h3 >{"By foot"}</h3><p >{"Open the map for a live walking route from your current location."}</p></article>
<article className="transport-card reveal show"><SiteIcon name="drive" /><h3 >{"By vehicle"}</h3><p >{"Check live traffic and call ahead for the best arrival and parking guidance."}</p></article>
<article className="transport-card reveal-right show"><SiteIcon name="transit" /><h3 >{"Public transport"}</h3><p >{"Use the map to compare current routes and nearby drop-off points."}</p></article>
</div>
</section>
<section className="section">
<div className="section-head reveal show">
<div ><p className="kicker">{"Plan your day"}</p><h2 >{"A smoother visit"}<br  /><em >{"starts online."}</em></h2></div>
<p >{"A useful visit page combines planning, amenities, directions and store discovery in one long, easy-to-scan experience."}</p>
</div>
<div className="day-strip">
<article className="day-item reveal-left show"><time >{"Before"}</time><h4 >{"Search stores"}</h4><p >{"Know the shops and floors you want to visit."}</p></article>
<article className="day-item reveal show"><time >{"Arrival"}</time><h4 >{"Find New Road"}</h4><p >{"Open directions and note current visitor guidance."}</p></article>
<article className="day-item reveal show"><time >{"Inside"}</time><h4 >{"Use the directory"}</h4><p >{"Find the floor, shop number and useful amenities."}</p></article>
<article className="day-item reveal-right show"><time >{"After"}</time><h4 >{"See what's next"}</h4><p >{"Check new offers or plan another visit."}</p></article>
</div>
</section>
<section className="section dark">
<div className="section-head reveal show">
<div ><p className="kicker">{"Common questions"}</p><h2 >{"Helpful before"}<br  /><em >{"you leave home."}</em></h2></div>
<p >{"For same-day changes or information not listed here, call the complex before travelling."}</p>
</div>
<div className="faq">
<details className="reveal show"><summary >{"Do all stores follow the same schedule?"}</summary><p >{"Individual store schedules and festival availability may vary. Contact a store directly when planning a specific visit."}</p></details>
<details className="reveal show"><summary >{"Where can visitors park?"}</summary><p >{"Parking guidance may change. Call 01-4220503 before travelling for the latest visitor information."}</p></details>
<details className="reveal show"><summary >{"How do I find a particular store?"}</summary><p >{"Use the searchable Stores page. A production version can connect each tenant to a verified floor position and unit number."}</p></details>
<details className="reveal show"><summary >{"How can I contact R.B. Complex?"}</summary><p >{"Call 01-4220503 for current visitor, store and access information."}</p></details>
</div>
</section>
<section className="long-cta reveal show">
<img src="/images/DSC01226.webp" alt="R.B. Complex courtyard and visitor parking" loading="lazy" />
<div className="long-cta-copy">
<p className="kicker" style={{"color": "#e6c4a5"}}>{"Ready to go?"}</p>
<h3 >{"New Road is waiting."}<br  /><em >{"We'll see you at R.B."}</em></h3>
<p >{"Open directions or check your stores one more time before leaving."}</p>
<div className="actions"><a className="btn btn-light" href="https://www.google.com/maps/search/?api=1&query=RB+Complex+New+Road+Kathmandu" target="_blank" rel="noopener">{"Open Google Maps ↗"}</a><Link className="btn btn-outline-white route" data-view="stores" href="/stores/">{"Stores"}</Link></div>
</div>
</section>
</div>);}
