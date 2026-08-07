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

/**
 * Pre-typed into the visitor's WhatsApp composer. They still have to press
 * send — wa.me cannot dispatch a message on someone's behalf.
 */
export const WHATSAPP_GREETING = "Hello";

/** Opens a WhatsApp chat with the greeting already sitting in the input. */
export const WHATSAPP_CHAT_HREF = `${CONTACT.whatsappHref}?text=${encodeURIComponent(
  WHATSAPP_GREETING,
)}`;

/**
 * The "Find us online" row.
 *
 * WhatsApp reuses the number above. Instagram and Facebook stay on "#" until
 * the real profile URLs arrive — a dead placeholder is obvious the moment you
 * click it, whereas a guessed handle looks right and silently 404s.
 */
export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: "i-instagram",
    // Canonical profile URL. The ?igsh= token on a copied mobile link is
    // share tracking, not part of the address, so it is dropped here.
    href: "https://www.instagram.com/setup.fx24",
  },
  {
    label: "Facebook",
    icon: "i-facebook",
    href: "https://www.facebook.com/Setupfx24/",
  },
  { label: "WhatsApp", icon: "i-whatsapp", href: WHATSAPP_CHAT_HREF },
];

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
