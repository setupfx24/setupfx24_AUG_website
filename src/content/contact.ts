/**
 * Single source for the company's contact details.
 *
 * Used by the About page and the Contact page so the two can never drift.
 * Anything still unknown stays as the literal "[insert]" placeholder rather
 * than a plausible-looking guess.
 */
export const CONTACT = {
  email: "setupfx24@gmail.com",
  whatsappDisplay: "+1 (908) 228-0305",
  /** wa.me needs the number as digits only, including the country code. */
  whatsappHref: "https://wa.me/19082280305",
  office:
    "9364hn 3 Fitzroy Place, Sauchiehall Street, Glasgow City Centre, G3 7RH, United Kingdom",
};

export type ContactRow = {
  label: string;
  value: string;
  href?: string;
};

/** Email / WhatsApp / Office — the three details we actually have. */
export const CONTACT_ROWS: ContactRow[] = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsappHref,
  },
  { label: "Office", value: CONTACT.office },
];
