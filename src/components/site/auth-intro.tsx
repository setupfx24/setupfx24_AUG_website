import { vars } from "./css-vars";

/** Left column of the auth pages: eyebrow, title, body and supporting points. */
export function AuthIntro({
  eyebrow,
  title,
  body,
  points,
}: {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
}) {
  return (
    <div className="reveal" style={vars({ "--ty": "16px" })}>
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="auth__intro-title">{title}</h1>
      <p className="auth__intro-body">{body}</p>

      <ul className="auth__points">
        {points.map((point) => (
          <li className="auth__point" key={point}>
            <svg className="icon">
              <use href="#i-dot" />
            </svg>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
