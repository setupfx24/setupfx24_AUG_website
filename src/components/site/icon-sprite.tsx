/** Inline SVG sprite. Every `<use href="#i-…" />` on the page resolves here. */
export function IconSprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <symbol id="i-logo" viewBox="0 0 48 48">
        <path
          fill="currentColor"
          d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"
        />
      </symbol>
      <symbol id="i-arrow-right" viewBox="0 0 24 24">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-arrow-ur" viewBox="0 0 24 24">
        <path
          d="M7 17 17 7M8 7h9v9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-star" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"
        />
      </symbol>
      <symbol id="i-globe" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="12" cy="12" r="9.25" />
          <path d="M12 2.75c2.6 2.3 4 5.8 4 9.25s-1.4 6.95-4 9.25c-2.6-2.3-4-5.8-4-9.25s1.4-6.95 4-9.25zM2.75 12h18.5" />
        </g>
      </symbol>
      <symbol id="i-x" viewBox="0 0 24 24">
        <path
          d="M4 4l16 16M20 4 4 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-dot" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="3.2" fill="currentColor" />
      </symbol>
      <symbol id="i-instagram" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
        </g>
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </symbol>
      <symbol id="i-facebook" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.13-2.41-.13-2.4 0-4.05 1.46-4.05 4.15v2.28H7.5V13h2.74v8h3.26Z"
        />
      </symbol>
      <symbol id="i-whatsapp" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.8 9.8 0 0 0 4.6 1.17c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.77 9.77 0 0 0 12.04 2Zm0 1.66c2.18 0 4.23.85 5.77 2.4a8.14 8.14 0 0 1 2.39 5.78c0 4.52-3.67 8.19-8.2 8.19a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.09.81.82-3.01-.2-.31a8.13 8.13 0 0 1-1.25-4.36c0-4.52 3.68-8.18 8.22-8.18Zm-4.5 4.4c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.62.75.29 1.34.46 1.8.59.75.24 1.44.2 1.98.12.6-.09 1.86-.76 2.13-1.5.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37-.31-.16-1.86-.92-2.14-1.02-.29-.11-.5-.16-.71.15-.21.32-.81 1.03-1 1.24-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.15-.19.2-.32.31-.53.1-.21.05-.4-.03-.55-.08-.16-.7-1.71-.96-2.34-.25-.61-.51-.53-.7-.54h-.6Z"
        />
      </symbol>
      <symbol id="i-grid" viewBox="0 0 24 24">
        <path
          d="M4 6h16M4 12h16M4 18h16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
    </svg>
  );
}
