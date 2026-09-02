import { vars } from "./css-vars";

const COLUMNS = ["Global Trading", "Global Prop Firm", "AI Trading"];

const ROWS: Array<[string, string, string, string]> = [
  [
    "Best for",
    "Brokerages",
    "Funded-trader firms",
    "Automated and systematic desks",
  ],
  [
    "Markets",
    "FX, metals, indices, commodities, crypto CFDs",
    "Equity, F&O, currency, commodity",
    "Whichever venue you are authorised to use",
  ],
  ["Challenge engine", "—", "Yes", "—"],
  ["Liquidity bridge", "Yes", "—", "Optional"],
  ["AI strategy builder", "—", "—", "Yes"],
  ["Algorithmic execution", "Optional", "—", "Yes"],
  ["Copy trading", "Yes", "Optional", "Optional"],
  ["IB / affiliate", "Yes", "Yes", "Optional"],
  ["Mobile apps", "Yes", "Yes", "Yes"],
  ["White-label", "Yes", "Yes", "Yes"],
];

function Cell({ value }: { value: string }) {
  return value === "Yes" ? <span className="cmp__yes">Yes</span> : <>{value}</>;
}

export function ComparisonTable({
  eyebrow,
  title,
  outro,
}: {
  eyebrow: string;
  title: string;
  outro?: React.ReactNode;
}) {
  return (
    <section className="services" id="compare">
      <div className="shell services__inner">
        <div className="reveal" style={vars({ "--ty": "10px" })}>
          <span className="eyebrow">{eyebrow}</span>
        </div>

        <div className="section__head">
          <h2 className="services__title lines" data-line-delay="120">
            <span className="line">
              <span>{title}</span>
            </span>
          </h2>
        </div>

        <div className="cmp reveal" style={vars({ "--ty": "24px" })}>
          <table>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Feature</span>
                </th>
                {COLUMNS.map((col) => (
                  <th scope="col" key={col}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, ...cells]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {cells.map((cell, i) => (
                    <td key={`${label}-${COLUMNS[i]}`}>
                      <Cell value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {outro && <div className="section__outro">{outro}</div>}
      </div>
    </section>
  );
}
