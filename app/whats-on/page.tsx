import Link from "next/link";
export const metadata = { title: "What\u2019s on" };
export default function Page() {
  return (
    <div className="view active" id="view-whats-on">
      <section className="hero" style={{ height: "72vh", minHeight: "560px" }}>
        <img
          src="/images/shopping-4.jpg"
          alt="Dining and social experience concept"
          loading="eager"
        />
        <div className="hero-content reveal-left show">
          <p className="eyebrow">{"What's On"}</p>
          <h1>
            {"More than"}
            <br />
            <em>{"a shopping trip."}</em>
          </h1>
          <p>
            {"Events, new openings, seasonal moments and reasons to return."}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"What's happening"}</p>
            <h2>
              {"See what's"}
              <br />
              <em>{"coming up."}</em>
            </h2>
          </div>
          <p>
            {
              "A real mall website needs fresh content. This page can later be managed as an events/news section."
            }
          </p>
        </div>
        <div className="event-grid">
          <article className="event reveal-left show">
            <div className="event-image">
              <img
                src="/images/shopping-6.jpg"
                alt="Fashion event concept"
                loading="lazy"
              />
            </div>
            <div className="event-body">
              <small>{"Prototype event"}</small>
              <h3>{"New Season Edit"}</h3>
              <p>
                {
                  "A curated fashion-focused campaign across participating stores."
                }
              </p>
            </div>
          </article>
          <article className="event reveal show">
            <div className="event-image">
              <img
                src="/images/shopping-2.jpg"
                alt="Mall event concept"
                loading="lazy"
              />
            </div>
            <div className="event-body">
              <small>{"New opening"}</small>
              <h3>{"Something new is coming"}</h3>
              <p>
                {"Use this card to announce a new tenant or refreshed space."}
              </p>
            </div>
          </article>
          <article className="event reveal-right show">
            <div className="event-image">
              <img
                src="/images/shopping-4.jpg"
                alt="Dining event concept"
                loading="lazy"
              />
            </div>
            <div className="event-body">
              <small>{"Weekend"}</small>
              <h3>{"Meet. Shop. Stay."}</h3>
              <p>
                {"Promote weekend activations or seasonal visitor experiences."}
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="section cream">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"Calendar"}</p>
            <h2>
              {"Plan around"}
              <br />
              <em>{"what's happening."}</em>
            </h2>
          </div>
          <p>
            {
              "A compact event calendar makes a mall site feel actively managed rather than static."
            }
          </p>
        </div>
        <div className="calendar-strip">
          <article className="date-card active reveal-left show">
            <small>{"Mon"}</small>
            <strong>{"14"}</strong>
            <span>{"New arrivals"}</span>
          </article>
          <article className="date-card reveal show">
            <small>{"Tue"}</small>
            <strong>{"15"}</strong>
            <span>{"Store spotlight"}</span>
          </article>
          <article className="date-card reveal show">
            <small>{"Wed"}</small>
            <strong>{"16"}</strong>
            <span>{"Style edit"}</span>
          </article>
          <article className="date-card reveal show">
            <small>{"Thu"}</small>
            <strong>{"17"}</strong>
            <span>{"New opening"}</span>
          </article>
          <article className="date-card reveal show">
            <small>{"Fri"}</small>
            <strong>{"18"}</strong>
            <span>{"Weekend offers"}</span>
          </article>
          <article className="date-card reveal-right show">
            <small>{"Sat"}</small>
            <strong>{"19"}</strong>
            <span>{"Visitor moment"}</span>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"Stories from R.B."}</p>
            <h2>
              {"New openings."}
              <br />
              <em>{"Fresh reasons to return."}</em>
            </h2>
          </div>
          <p>
            {
              "Use editorial content for store openings, campaigns, tenant stories and announcements."
            }
          </p>
        </div>
        <div className="news-grid">
          <article className="news-main reveal-left show">
            <img
              src="/images/shopping-2.jpg"
              alt="Mall opening story concept"
              loading="lazy"
            />
            <div className="news-copy">
              <small>{"New opening"}</small>
              <h3>{"A new space joins R.B. Complex"}</h3>
            </div>
          </article>
          <div className="news-side-wrap">
            <article className="news-side reveal-right show">
              <img
                src="/images/shopping-3.jpg"
                alt="Fashion story concept"
                loading="lazy"
              />
              <div className="news-copy">
                <small>{"Style"}</small>
                <h3>{"Seasonal edit"}</h3>
              </div>
            </article>
            <article className="news-side reveal-right show">
              <img
                src="/images/shopping-4.jpg"
                alt="Community story concept"
                loading="lazy"
              />
              <div className="news-copy">
                <small>{"Weekend"}</small>
                <h3>{"Make a day of New Road"}</h3>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="section-title-row reveal show">
          <div>
            <p className="kicker">{"Stay connected"}</p>
            <h3>{"What's next at R.B."}</h3>
          </div>
          <p>
            {
              "Social-style imagery and a newsletter can create a reason for people to revisit the site even when they are not actively searching for a store."
            }
          </p>
        </div>
        <div className="social-grid">
          <div className="social-tile reveal-left show">
            <img
              src="/images/shopping-6.jpg"
              alt="Style content"
              loading="lazy"
            />
          </div>
          <div className="social-tile reveal show">
            <img
              src="/images/shopping-2.jpg"
              alt="Mall content"
              loading="lazy"
            />
          </div>
          <div className="social-tile reveal show">
            <img
              src="/images/shopping-3.jpg"
              alt="Fashion content"
              loading="lazy"
            />
          </div>
          <div className="social-tile reveal show">
            <img
              src="/images/shopping-4.jpg"
              alt="Dining content"
              loading="lazy"
            />
          </div>
          <div className="social-tile reveal-right show">
            <img
              src="/images/shopping-5.jpg"
              alt="Retail content"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="long-cta reveal show">
        <img
          src="/images/shopping-4.jpg"
          alt="Lifestyle event concept"
          loading="lazy"
        />
        <div className="long-cta-copy">
          <p className="kicker" style={{ color: "#e6c4a5" }}>
            {"Make a day of it"}
          </p>
          <h3>
            {"See what's happening."}
            <br />
            <em>{"Then come by."}</em>
          </h3>
          <p>
            {
              "Events work best when the next action is simple: get directions and visit."
            }
          </p>
          <div className="actions">
            <Link
              className="btn btn-light route"
              data-view="visit"
              href="/visit/"
            >
              {"Plan your visit →"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
