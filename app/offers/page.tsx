import Link from "next/link";
export const metadata = { title: "Offers" };
export default function Page() {
  return (
    <div className="view active" id="view-offers">
      <section className="hero" style={{ height: "72vh", minHeight: "560px" }}>
        <img
          src="/images/DSC01217.webp"
          alt="Fashion retail promotion at R.B. Complex"
          loading="eager"
        />
        <div className="hero-content reveal-left show">
          <p className="eyebrow">{"Offers & promotions"}</p>
          <h1>
            {"More value."}
            <br />
            <em>{"More reasons to shop."}</em>
          </h1>
          <p>
            {"A dedicated space for seasonal campaigns and tenant promotions."}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"Current campaigns"}</p>
            <h2>
              {"Offers worth"}
              <br />
              <em>{"coming in for."}</em>
            </h2>
          </div>
          <p>{"Live promotions will include participating stores, validity dates and terms before they are published here."}</p>
        </div>
        <div className="promo-grid">
          <article className="promo main promo-with-image reveal-left show">
            <img
              className="promo-image"
              src="/images/product-fashion.png"
              alt="Fashion collection"
            />
            <span className="tag">{"Fashion"}</span>
            <div>
              <h3>{"Fashion highlights"}</h3>
              <p>{"Discover the latest styles from fashion stores at R.B. Complex."}</p>
            </div>
            <div className="big">{"R.B."}</div>
          </article>
          <article className="promo promo-with-image reveal show">
            <img
              className="promo-image"
              src="/images/product-footwear.png"
              alt="Running shoes"
            />
            <span className="tag">{"Footwear"}</span>
            <div>
              <h3>{"Weekend edit"}</h3>
              <p>{"See footwear stores and current arrivals."}</p>
            </div>
          </article>
          <article className="promo promo-with-image reveal-right show">
            <img
              className="promo-image"
              src="/images/product-electronics.png"
              alt="Smartphone and headphones"
            />
            <span className="tag">{"Electronics"}</span>
            <div>
              <h3>{"Tech deals"}</h3>
              <p>{"Find electronics, accessories and everyday services."}</p>
            </div>
          </article>
        </div>
        <p className="note">{"Promotions are published only after participating stores confirm their details."}</p>
      </section>
      <section className="section cream">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"More promotions"}</p>
            <h2>
              {"Something for"}
              <br />
              <em>{"every kind of shopper."}</em>
            </h2>
          </div>
          <p>
            {
              "Long offer pages work best when campaigns are grouped by category and have clear expiry / participation details."
            }
          </p>
        </div>
        <div className="offer-board">
          <article className="offer-wide reveal-left show">
            <img
              src="/images/product-fashion.png"
              alt="Fashion collection"
              loading="lazy"
            />
            <div className="copy">
              <small>{"Fashion"}</small>
              <h3>{"Refresh your wardrobe."}</h3>
              <p>{"Browse fashion stores and discover seasonal arrivals."}</p>
            </div>
          </article>
          <article className="offer-wide reveal-right show">
            <img
              src="/images/product-footwear.png"
              alt="Footwear collection"
              loading="lazy"
            />
            <div className="copy">
              <small>{"Footwear"}</small>
              <h3>{"Step into the weekend."}</h3>
              <p>{"Find footwear stores across the directory."}</p>
            </div>
          </article>
          <article className="offer-wide reveal-left show">
            <img
              src="/images/product-beauty.png"
              alt="Beauty products"
              loading="lazy"
            />
            <div className="copy">
              <small>{"Beauty & accessories"}</small>
              <h3>{"Small details. Big difference."}</h3>
              <p>{"Explore accessories and personal style destinations."}</p>
            </div>
          </article>
          <article className="offer-wide reveal-right show">
            <img
              src="/images/product-electronics.png"
              alt="Consumer electronics"
              loading="lazy"
            />
            <div className="copy">
              <small>{"Electronics"}</small>
              <h3>{"Upgrade your everyday."}</h3>
              <p>{"Find electronics and services for everyday needs."}</p>
            </div>
          </article>
        </div>
      </section>
      <section className="quote-band reveal show">
        <blockquote>
          {"New offers should make the website feel "}
          <em>{"different every week."}</em>
        </blockquote>
        <small>{"Campaign content strategy"}</small>
      </section>
      <section className="section">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"How offers work"}</p>
            <h2>
              {"Clear before"}
              <br />
              <em>{"you shop."}</em>
            </h2>
          </div>
          <p>
            {
              "Every live promotion will show participating stores, expiry dates and conditions before publication."
            }
          </p>
        </div>
        <div className="offer-terms">
          <article className="offer-term reveal-left show">
            <h4>{"Participating stores"}</h4>
            <p>
              {
                "Each live offer can list the exact stores taking part, with links back to the directory."
              }
            </p>
          </article>
          <article className="offer-term reveal-right show">
            <h4>{"Dates & conditions"}</h4>
            <p>
              {
                "Add campaign validity dates and concise terms to prevent ambiguity for visitors."
              }
            </p>
          </article>
        </div>
      </section>
      <section className="long-cta reveal show">
        <img
          src="/images/DSC01217.webp"
          alt="Fashion shopping campaign at R.B. Complex"
          loading="lazy"
        />
        <div className="long-cta-copy">
          <p className="kicker" style={{ color: "#e6c4a5" }}>
            {"Don't miss what's new"}
          </p>
          <h3>
            {"Offers change."}
            <br />
            <em>{"Your plans can too."}</em>
          </h3>
          <p>
            {
              "Connect promotions with events and new openings to keep visitors returning."
            }
          </p>
          <div className="actions">
            <Link
              className="btn btn-light route"
              data-view="whats-on"
              href="/whats-on/"
            >
              {"See what's on →"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
