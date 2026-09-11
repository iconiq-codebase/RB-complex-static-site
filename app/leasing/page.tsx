import Link from "next/link";
export const metadata = { title: "Leasing" };
export default function Page() {
  return (
    <div className="view active" id="view-leasing">
      <section className="lease-hero">
        <div className="lease-copy reveal-left show">
          <p className="eyebrow">{"Leasing at R.B."}</p>
          <h1>
            {"Bring your brand"}
            <br />
            <em>{"to New Road."}</em>
          </h1>
          <p>
            {
              "A clean commercial proposition for retailers, service businesses and brands considering space at R.B. Complex."
            }
          </p>
          <div className="actions">
            <a className="btn btn-light" href="#leasingForm">
              {"Make an enquiry ↓"}
            </a>
          </div>
        </div>
        <div className="lease-image reveal-right show">
          <img
            src="/images/shopping-5.jpg"
            alt="Premium mall leasing concept"
            loading="lazy"
          />
        </div>
      </section>
      <section className="section" id="leasingForm">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"Leasing enquiry"}</p>
            <h2>
              {"Tell us about"}
              <br />
              <em>{"your business."}</em>
            </h2>
          </div>
          <p>{"This demo form works visually but does not transmit data."}</p>
        </div>
        <form className="form demo-form reveal show">
          <div className="field">
            <label htmlFor="field-0">{"Your name"}</label>
            <input
              required
              placeholder="Full name"
              id="field-0"
              name="field-0"
            />
          </div>
          <div className="field">
            <label htmlFor="field-1">{"Phone"}</label>
            <input required placeholder="+977 …" id="field-1" name="field-1" />
          </div>
          <div className="field">
            <label htmlFor="field-2">{"Business / brand"}</label>
            <input placeholder="Brand name" id="field-2" name="field-2" />
          </div>
          <div className="field">
            <label htmlFor="field-3">{"Category"}</label>
            <input
              placeholder="Fashion, electronics, services…"
              id="field-3"
              name="field-3"
            />
          </div>
          <div className="field full">
            <label htmlFor="field-4">{"Requirements"}</label>
            <textarea
              placeholder="Preferred floor, approximate area, timeline…"
              id="field-4"
              name="field-4"
            ></textarea>
          </div>
          <div className="field full">
            <button className="btn btn-red" type="submit">
              {"Submit prototype enquiry →"}
            </button>
          </div>
        </form>
        <div className="form-status">
          {
            "Demo complete. Your enquiry has not been sent. Please contact mall management directly."
          }
        </div>
      </section>
      <section className="section cream">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"Why R.B."}</p>
            <h2>
              {"A New Road address"}
              <br />
              <em>{"with visibility."}</em>
            </h2>
          </div>
          <p>
            {
              "This section gives prospective tenants the context they expect before filling in a leasing form."
            }
          </p>
        </div>
        <div className="lease-stats">
          <div className="lease-stat reveal-left show">
            <strong>{"01"}</strong>
            <small>{"Central commercial area"}</small>
          </div>
          <div className="lease-stat reveal show">
            <strong>{"02"}</strong>
            <small>{"Multi-category retail mix"}</small>
          </div>
          <div className="lease-stat reveal show">
            <strong>{"03"}</strong>
            <small>{"Multiple floor opportunities"}</small>
          </div>
          <div className="lease-stat reveal-right show">
            <strong>{"04"}</strong>
            <small>{"Direct management enquiry"}</small>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"Available-space concept"}</p>
            <h2>
              {"Show the space."}
              <br />
              <em>{"Sell the possibility."}</em>
            </h2>
          </div>
          <p>
            {
              "A strong leasing page should visually show available units instead of asking businesses to call blindly. The units below are prototype placeholders."
            }
          </p>
        </div>
        <div className="space-preview">
          <div className="space-photo reveal-left show">
            <img
              src="/images/shopping-5.jpg"
              alt="Retail space concept"
              loading="lazy"
            />
            <div className="label">
              <small>{"Concept vacancy"}</small>
              <h3>{"Put your brand in view."}</h3>
            </div>
          </div>
          <div className="space-list">
            <article className="space-unit reveal-right show">
              <div className="unit">{"G"}</div>
              <div>
                <h4>{"Ground-floor unit"}</h4>
                <p>{"High-visibility prototype space."}</p>
              </div>
              <a href="#leasingForm">{"Enquire"}</a>
            </article>
            <article className="space-unit reveal-right show">
              <div className="unit">{"01"}</div>
              <div>
                <h4>{"First-floor unit"}</h4>
                <p>{"Fashion / footwear prototype positioning."}</p>
              </div>
              <a href="#leasingForm">{"Enquire"}</a>
            </article>
            <article className="space-unit reveal-right show">
              <div className="unit">{"02"}</div>
              <div>
                <h4>{"Second-floor unit"}</h4>
                <p>{"Electronics / accessory prototype positioning."}</p>
              </div>
              <a href="#leasingForm">{"Enquire"}</a>
            </article>
            <article className="space-unit reveal-right show">
              <div className="unit">{"03"}</div>
              <div>
                <h4>{"Third-floor unit"}</h4>
                <p>{"Service / specialty prototype positioning."}</p>
              </div>
              <a href="#leasingForm">{"Enquire"}</a>
            </article>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"Leasing process"}</p>
            <h2>
              {"From interest"}
              <br />
              <em>{"to opening day."}</em>
            </h2>
          </div>
          <p>
            {
              "A clear process helps a prospective tenant understand what happens after an enquiry."
            }
          </p>
        </div>
        <div className="process">
          <article className="process-step reveal-left show">
            <div className="num">{"01"}</div>
            <h3>{"Enquire"}</h3>
            <p>
              {
                "Share your business, category, preferred floor and space requirements."
              }
            </p>
          </article>
          <article className="process-step reveal show">
            <div className="num">{"02"}</div>
            <h3>{"Discuss"}</h3>
            <p>{"Management reviews availability and commercial fit."}</p>
          </article>
          <article className="process-step reveal show">
            <div className="num">{"03"}</div>
            <h3>{"Visit"}</h3>
            <p>
              {"Inspect suitable spaces and understand the location in person."}
            </p>
          </article>
          <article className="process-step reveal-right show">
            <div className="num">{"04"}</div>
            <h3>{"Agree"}</h3>
            <p>{"Move into formal commercial terms and fit-out planning."}</p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="section-head reveal show">
          <div>
            <p className="kicker">{"Leasing FAQ"}</p>
            <h2>
              {"Before you"}
              <br />
              <em>{"make an enquiry."}</em>
            </h2>
          </div>
          <p>
            {
              "Actual commercial terms should never be invented on the public site. Management can decide which details to publish."
            }
          </p>
        </div>
        <div className="faq">
          <details className="reveal show">
            <summary>{"What kinds of businesses can apply?"}</summary>
            <p>
              {
                "The production site can list preferred or permitted categories once management confirms its leasing policy."
              }
            </p>
          </details>
          <details className="reveal show">
            <summary>{"Are unit sizes and rents shown online?"}</summary>
            <p>
              {
                "They can be, if management wants them public. Otherwise the website can display availability and request contact details for commercial information."
              }
            </p>
          </details>
          <details className="reveal show">
            <summary>{"Can I arrange a site visit?"}</summary>
            <p>
              {
                "A production enquiry form can include a preferred date and route the request directly to the leasing team."
              }
            </p>
          </details>
        </div>
      </section>
      <section className="long-cta reveal show">
        <img
          src="/images/shopping-5.jpg"
          alt="Retail leasing concept"
          loading="lazy"
        />
        <div className="long-cta-copy">
          <p className="kicker" style={{ color: "#e6c4a5" }}>
            {"Imagine your storefront here"}
          </p>
          <h3>
            {"Start with a conversation."}
            <br />
            <em>{"Build from there."}</em>
          </h3>
          <p>
            {
              "The final leasing journey should feel professional enough for established brands and simple enough for independent businesses."
            }
          </p>
          <div className="actions">
            <a className="btn btn-light" href="#leasingForm">
              {"Make an enquiry ↓"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
