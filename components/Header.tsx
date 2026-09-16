"use client";
import Link from "next/link";
import SiteIcon from "./SiteIcon";
export default function Header() {
  return (
    <header className="header">
      <Link className="brand route" data-view="home" href="/">
        <span className="brand-logo">
          <img src="/images/RBC-logo-cropped.png" alt="R.B. Complex" />
        </span>
        <small>{"R.B. Complex · Kathmandu"}</small>
      </Link>
      <nav className="nav">
        <Link className="route active" data-view="home" href="/">
          {"Home"}
        </Link>
        <Link className="route" data-view="about" href="/about/">
          {"About"}
        </Link>
        <Link className="route" data-view="stores" href="/stores/">
          {"Stores"}
        </Link>
        <Link className="route" data-view="offers" href="/offers/">
          {"Offers"}
        </Link>
        <Link className="route" data-view="whats-on" href="/whats-on/">
          {"What's On"}
        </Link>
        <Link className="route" data-view="gallery" href="/gallery/">
          {"Gallery"}
        </Link>
        <Link className="route" data-view="blog" href="/blog/">
          {"Blog"}
        </Link>
        <Link className="route" data-view="visit" href="/visit/">
          {"Visit"}
        </Link>
        <Link className="route" data-view="leasing" href="/leasing/">
          {"Leasing"}
        </Link>
      </nav>
      <div className="header-end">
        <Link className="search-btn route" data-view="stores" href="/stores/">
          {"Search stores"}
        </Link>
        <Link className="visit-btn route" data-view="visit" href="/visit/">
          Plan a visit <SiteIcon name="external" className="inline-icon" />
        </Link>
        <button className="menu" aria-label="Menu">
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
