export function RequestModal() {
  return (
    <div
      className="modal"
      id="modal"
      role="dialog"
      aria-modal="true"
      aria-label="Book a free demo"
      hidden
    >
      <div className="modal__panel" id="modalPanel">
        <button
          suppressHydrationWarning
          className="modal__close"
          type="button"
          id="modalClose"
          aria-label="Close"
        >
          <svg className="icon">
            <use href="#i-x" />
          </svg>
        </button>

        <div id="modalForm">
          <div className="modal__head">
            <span className="modal__kicker">Book a free demo</span>
            <h2>{"Tell us what you're building."}</h2>
          </div>

          <form className="modal__form" id="requestForm">
            <label className="field">
              <span>Name</span>
              <input
                suppressHydrationWarning
                type="text"
                name="name"
                required
                placeholder="Your name"
              />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                suppressHydrationWarning
                type="email"
                name="email"
                required
                placeholder="you@company.com"
              />
            </label>
            <label className="field">
              <span>Your project</span>
              <textarea
                suppressHydrationWarning
                name="project"
                rows={4}
                required
                placeholder="Which platform you need, your target market, and your timeline."
              ></textarea>
            </label>

            <div className="modal__bottom">
              <p className="modal__note">We reply within one business day.</p>
              <button
                suppressHydrationWarning
                className="pill pill--dark pill--arrow"
                type="submit"
                id="submitBtn"
              >
                <span className="pill__scale" data-hover="pillScale">
                  <span className="pill__inner">
                    <span id="submitLabel">Send Enquiry</span>
                    <span className="pill__badge">
                      <svg className="icon" data-hover-arrow="up-right">
                        <use href="#i-arrow-ur" />
                      </svg>
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="modal__success" id="modalSuccess" hidden>
          <span className="modal__success-badge">
            <svg className="icon">
              <use href="#i-logo" />
            </svg>
          </span>
          <h2>Request received</h2>
          <p>
            {
              "Thanks — we've got your enquiry. Expect a reply within one business day."
            }
          </p>
          <button
            suppressHydrationWarning
            className="pill pill--dark"
            type="button"
            id="successClose"
          >
            <span className="pill__scale" data-hover="pillScale">
              <span className="pill__inner">Close</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
