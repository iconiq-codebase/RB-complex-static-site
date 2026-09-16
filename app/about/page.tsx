import Link from "next/link";
import SiteIcon from "../../components/SiteIcon";

export const metadata = {
  title: "About R.B. Complex",
  description:
    "The story of Ranamukteshwor Business Complex, a New Road shopping landmark in Kathmandu.",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-copy">
          <p className="eyebrow">About R.B. Complex</p>
          <h1 id="about-title">
            A New Road<br />
            <em>landmark.</em>
          </h1>
          <p>
            A lasting part of Kathmandu’s commercial life, shaped by the
            people, businesses and energy of New Road.
          </p>
        </div>
        <div className="about-hero-image">
          <img
            src="/images/shopping-1.jpg"
            alt="R.B. Complex shopping interior"
            loading="eager"
          />
        </div>
      </section>

      <section className="history-section" aria-labelledby="history-title">
        <div className="history-heading">
          <div>
            <p className="kicker">Our history</p>
            <h2 id="history-title">
              A landmark in the heart<br />
              <em>of New Road.</em>
            </h2>
          </div>
          <p className="history-lead">
            A Kathmandu shopping landmark since the late 1990s.
          </p>
        </div>
        <div className="history-body">
          <p>
            Located in the heart of Kathmandu’s historic New Road,{' '}
            <strong>Ranamukteshwor Business Complex (RB Complex)</strong> has
            been part of the city’s evolving commercial landscape for more
            than two decades.
          </p>
          <p>
            Recognized as the{' '}
            <strong>
              first major commercial complex developed under the BOOT model in
              Kathmandu
            </strong>
            , RB Complex brought numerous businesses and products together
            under one roof—an important new approach to organized shopping in
            the city.
          </p>
        </div>
        <div className="history-timeline" aria-label="R.B. Complex timeline">
          <span>Late 1990s</span><i></i><span>January 2001</span><i></i><span>Today</span>
        </div>
        <div className="history-footer">
          <div>
            <p className="kicker">Growing with Kathmandu</p>
            <h3>
              New Road’s enduring<br />
              <em>business identity.</em>
            </h3>
          </div>
          <div>
            <p>
              By January 2001, RB Complex was already recognized as a
              prominent building in Ranamukteshwor, with an architectural
              character that aimed to connect traditional Kathmandu and modern
              commerce.
            </p>
            <p>
              Through changing trends and generations of businesses, the
              complex has remained connected to the energy of New Road—bringing
              businesses and customers together in one of Kathmandu’s most
              important marketplaces.
            </p>
            <strong>
              RB Complex — A legacy of business in the heart of Kathmandu.
            </strong>
          </div>
        </div>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <div>
          <p className="kicker">Explore the complex</p>
          <h2 id="about-cta-title">See what’s here today.</h2>
        </div>
        <div className="about-cta-actions">
          <Link className="btn btn-dark" href="/stores/">
            Browse stores <SiteIcon name="arrow" className="inline-icon" />
          </Link>
          <Link className="text-link" href="/visit/">
            Plan a visit <SiteIcon name="external" className="inline-icon" />
          </Link>
        </div>
      </section>
    </div>
  );
}
