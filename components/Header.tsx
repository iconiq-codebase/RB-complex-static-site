"use client";
import Link from "next/link";
import { useCallback, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import SiteIcon from "./SiteIcon";
export default function Header() {
  const [language, setLanguage] = useState<"en" | "ne">("en");
  const updateLanguage = useCallback((nextLanguage: "en" | "ne") => {
    setLanguage(nextLanguage);
  }, []);
  const copy = language === "ne" ? {
    home: "होम", about: "हाम्रो बारेमा", stores: "पसलहरु", offers: "अफरहरु",
    whatsOn: "के हुँदैछ", gallery: "ग्यालरी", blog: "ब्लग", visit: "भ्रमण", leasing: "लिजिङ",
    plan: "भ्रमण योजना",
  } : {
    home: "Home", about: "About", stores: "Stores", offers: "Offers", whatsOn: "What's On",
    gallery: "Gallery", blog: "Blog", visit: "Visit", leasing: "Leasing", plan: "Plan a visit",
  };
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
          {copy.home}
        </Link>
        <Link className="route" data-view="about" href="/about/">
          {copy.about}
        </Link>
        <Link className="route" data-view="stores" href="/stores/">
          {copy.stores}
        </Link>
        <Link className="route" data-view="offers" href="/offers/">
          {copy.offers}
        </Link>
        <Link className="route" data-view="whats-on" href="/whats-on/">
          {copy.whatsOn}
        </Link>
        <Link className="route" data-view="gallery" href="/gallery/">
          {copy.gallery}
        </Link>
        <Link className="route" data-view="blog" href="/blog/">
          {copy.blog}
        </Link>
        <Link className="route" data-view="visit" href="/visit/">
          {copy.visit}
        </Link>
        <Link className="route" data-view="leasing" href="/leasing/">
          {copy.leasing}
        </Link>
      </nav>
      <div className="header-end">
        <LanguageSwitcher onChange={updateLanguage} />
        <Link className="visit-btn route" data-view="visit" href="/visit/">
          {copy.plan} <SiteIcon name="external" className="inline-icon" />
        </Link>
        <button className="menu" aria-label="Menu">
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
