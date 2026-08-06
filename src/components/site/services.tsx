import Link from "next/link";

import { vars } from "./css-vars";
import { SERVICES } from "@/content/services";

export function Services() {
  return (
    <section className="services" id="services">
      <div className="shell services__inner">
        <div className="reveal" style={vars({ "--ty": "10px" })}>
          <span className="eyebrow">Services</span>
        </div>
        <h2 className="services__title lines" data-line-delay="120">
          <span className="line">
            <span>What we do best</span>
          </span>
        </h2>

        <ul className="services__list">
          {SERVICES.map((service, i) => (
            <li
              key={service.slug}
              className="reveal"
              style={vars({ "--ty": "24px", "--d": `${i * 80}ms` })}
            >
              <Link href={`/services/${service.slug}`}>
                <div className="srow" data-srow>
                  <span className="srow__idx">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{service.rowTitle}</h3>
                  <p className="srow__desc">{service.rowDesc}</p>
                  <span className="srow__badge" data-srow-badge>
                    <svg className="icon">
                      <use href="#i-arrow-ur" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
