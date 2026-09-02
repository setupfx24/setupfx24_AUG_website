import { vars } from "./css-vars";

const STATS = [
  { count: "100", suffix: "%", label: "White-label delivery", delay: "0ms" },
  { count: "120", suffix: "+", label: "Projects delivered", delay: "90ms" },
  { count: "8", suffix: "+", label: "Countries served", delay: "180ms" },
  { count: "24", suffix: "/7", label: "Support coverage", delay: "270ms" },
];

export function Stats() {
  return (
    <section className="stats" aria-label="By the numbers">
      <div className="shell stats__inner">
        <div
          className="stats__panel reveal"
          style={vars({ "--ty": "40px", "--sc": "0.99" })}
        >
          <span className="eyebrow eyebrow--light">By the numbers</span>
          <h2 className="stats__title lines" data-line-delay="120">
            <span className="line">
              <span>Proof in the work, not the words.</span>
            </span>
          </h2>

          <ul className="stats__grid" id="statsGrid">
            {STATS.map((stat) => (
              <li
                key={stat.label}
                className="reveal"
                style={vars({ "--ty": "20px", "--d": stat.delay })}
              >
                <p className="stat__value">
                  <span data-count={stat.count}>0</span>
                  {stat.suffix}
                </p>
                <p className="stat__label">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
