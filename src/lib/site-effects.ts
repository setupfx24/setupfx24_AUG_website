import Lenis from "lenis";

/**
 * Every interactive behaviour of the SetupFX24 page, ported verbatim from the
 * original single-file build. The logic is deliberately imperative and driven
 * by `data-*` attributes so the markup stays plain JSX — React never re-renders
 * these nodes, so direct DOM mutation is safe.
 *
 * `initSite()` returns a disposer. Everything it registers (listeners, rAF
 * loops, timers, observers) is tracked so React strict mode can mount, tear
 * down and re-mount without doubling up animations.
 */
export function initSite(): () => void {
  const disposers: Array<() => void> = [];
  let stopped = false;

  function listen(
    target: EventTarget,
    type: string,
    handler: EventListener,
    options?: AddEventListenerOptions,
  ) {
    target.addEventListener(type, handler, options);
    disposers.push(() => target.removeEventListener(type, handler, options));
  }

  function later(fn: () => void, ms: number) {
    const id = window.setTimeout(fn, ms);
    disposers.push(() => window.clearTimeout(id));
    return id;
  }

  /* ==================================================================
     0. ADAPTIVE GRID — scale UP above 1920px (media queries scale down)
     ================================================================== */
  function applyAdaptiveGrid() {
    const FONT_BASE = 16,
      baseWidth = 1920,
      coef = 0.6666;
    const w = window.innerWidth;
    const widthReduction = ((baseWidth - w) / baseWidth) * 100;
    const size = FONT_BASE - (FONT_BASE * (widthReduction * coef)) / 100;
    if (size > FONT_BASE) document.documentElement.style.fontSize = size + "px";
    else document.documentElement.style.removeProperty("font-size");
  }
  applyAdaptiveGrid();
  listen(window, "resize", applyAdaptiveGrid);

  /* ==================================================================
     1. SMOOTH SCROLL (Lenis) + SCROLL LOCK
     ================================================================== */
  window.scrollTo(0, 0);
  const lenis = new Lenis({ smoothWheel: true });
  function raf(t: number) {
    if (stopped) return;
    lenis.raf(t);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  disposers.push(() => lenis.destroy());

  const root = document.documentElement;

  function stopScroll() {
    lenis.stop();
    root.style.position = "relative";
    root.style.overflow = "hidden";
    root.style.height = "100%";
  }
  function startScroll() {
    lenis.start();
    root.style.removeProperty("position");
    root.style.removeProperty("overflow");
    root.style.removeProperty("height");
  }
  disposers.push(() => {
    root.style.removeProperty("position");
    root.style.removeProperty("overflow");
    root.style.removeProperty("height");
    root.style.removeProperty("font-size");
  });

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    later(() => {
      const top = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  }

  /* ==================================================================
     2. SPRING HELPER (replaces react-spring). mass = 1, dt = 1/60.
        accel = tension*(target - x) - friction*v
     ================================================================== */
  /** A spring track is keyed by a fixed literal union, e.g. "y" | "o". */
  type Vars<K extends string> = Record<K, number>;

  interface SpringSpec<K extends string> {
    from: Vars<K>;
    to: Vars<K>;
    tension?: number;
    friction?: number;
    apply: (x: Vars<K>) => void;
  }

  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)")
    .matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;

  function springHover<K extends string>(
    trigger: Element,
    spec: SpringSpec<K>,
  ) {
    const { from, to, tension = 320, friction = 18, apply } = spec;
    const keys = Object.keys(from) as K[];
    const x = { ...from };
    const v = { ...from };
    const goal = { ...from };
    keys.forEach((k) => {
      v[k] = 0;
    });
    apply(x);
    if (!canHover || reducedMotion) return;

    let rafId: number | null = null;
    const dt = 1 / 60;

    function step() {
      if (stopped) return;
      let moving = false;
      for (const k of keys) {
        const a = tension * (goal[k] - x[k]) - friction * v[k];
        v[k] += a * dt;
        x[k] += v[k] * dt;
        if (Math.abs(goal[k] - x[k]) > 0.001 || Math.abs(v[k]) > 0.001)
          moving = true;
        else {
          x[k] = goal[k];
          v[k] = 0;
        }
      }
      apply(x);
      rafId = moving ? requestAnimationFrame(step) : null;
    }
    function go(set: Vars<K>) {
      keys.forEach((k) => (goal[k] = set[k]));
      if (!rafId) rafId = requestAnimationFrame(step);
    }

    listen(trigger, "mouseenter", () => go(to));
    listen(trigger, "mouseleave", () => go(from));
    listen(trigger, "focusin", () => go(to));
    listen(trigger, "focusout", () => go(from));
    disposers.push(() => {
      if (rafId) cancelAnimationFrame(rafId);
    });
  }

  /* ---- hover-spring presets, wired by [data-hover] ---- */
  const scaleSpring = (
    el: HTMLElement,
    trigger: Element,
    to: number,
    friction: number,
    tension = 320,
  ) =>
    springHover(trigger, {
      from: { s: 1 },
      to: { s: to },
      tension,
      friction,
      apply: (x) => (el.style.transform = `scale(${x.s.toFixed(4)})`),
    });

  const liftSpring = (
    el: HTMLElement,
    trigger: Element,
    fromO: number,
    friction: number,
  ) =>
    springHover(trigger, {
      from: { y: 0, o: fromO },
      to: { y: -2, o: 1 },
      tension: 320,
      friction,
      apply: (x) => {
        el.style.transform = `translateY(${x.y.toFixed(3)}px)`;
        el.style.opacity = x.o.toFixed(3);
      },
    });

  const hoverPresets: Record<string, (el: HTMLElement) => void> = {
    // scale 1 -> 1.04, {320,18}
    pillScale: (el) => scaleSpring(el, el.closest(".pill") || el, 1.04, 18),
    // brand logo scale 1 -> 1.04, {320,18}
    brandLogo: (el) => scaleSpring(el, el.closest("button") || el, 1.04, 18),
    // menu button scale 1 -> 1.05, {320,18}
    menuBtn: (el) => scaleSpring(el, el.closest("button") || el, 1.05, 18),
    // nav label lift y 0 -> -2, opacity .8 -> 1, {320,22}
    navLift: (el) => liftSpring(el, el.closest("button") || el, 0.8, 22),
    // partner y 0 -> -2, opacity .7 -> 1, {320,20}
    partner: (el) => liftSpring(el, el, 0.7, 20),
    // social icon scale 1 -> 1.18, {320,16}
    social: (el) => scaleSpring(el, el.closest("a") || el, 1.18, 16),
    // create tile scale 1 -> 1.03, {300,18}
    bandTile: (el) => scaleSpring(el, el, 1.03, 18, 300),
  };

  document.querySelectorAll<HTMLElement>("[data-hover]").forEach((el) => {
    hoverPresets[el.dataset.hover ?? ""]?.(el);
  });

  // Pill arrow badges — triggered by the button root, {320,18}
  document
    .querySelectorAll<HTMLElement>("[data-hover-arrow]")
    .forEach((icon) => {
      const rootEl = icon.closest(".pill") || icon;
      const upRight = icon.dataset.hoverArrow === "up-right";
      springHover(rootEl, {
        from: { x: 0, y: 0 },
        to: upRight ? { x: 2, y: -2 } : { x: 3, y: 0 },
        tension: 320,
        friction: 18,
        apply: (v) =>
          (icon.style.transform = `translate(${v.x.toFixed(3)}px, ${v.y.toFixed(3)}px)`),
      });
    });

  // Animated links — translateX 0 -> 4 (legal: 3), opacity .65 -> 1 (legal: .7), {320,22}
  document.querySelectorAll<HTMLElement>(".alink").forEach((link) => {
    const span = link.querySelector("span");
    if (!span) return;
    const legal = link.hasAttribute("data-legal");
    springHover(link, {
      from: { x: 0, o: legal ? 0.7 : 0.65 },
      to: { x: legal ? 3 : 4, o: 1 },
      tension: 320,
      friction: 22,
      apply: (v) => {
        span.style.transform = `translateX(${v.x.toFixed(3)}px)`;
        span.style.opacity = v.o.toFixed(3);
      },
    });
  });

  // Portfolio cards — lift {260,22}; badge rotate/scale {280,18}, both card-triggered
  document.querySelectorAll<HTMLElement>("[data-work]").forEach((card) => {
    springHover(card, {
      from: { y: 0, s: 1 },
      to: { y: -8, s: 1.012 },
      tension: 260,
      friction: 22,
      apply: (v) =>
        (card.style.transform = `translateY(${v.y.toFixed(3)}px) scale(${v.s.toFixed(4)})`),
    });
    const badge = card.querySelector<HTMLElement>("[data-work-badge]");
    if (badge)
      springHover(card, {
        from: { r: 0, s: 1 },
        to: { r: 45, s: 1.08 },
        tension: 280,
        friction: 18,
        apply: (v) =>
          (badge.style.transform = `rotate(${v.r.toFixed(2)}deg) scale(${v.s.toFixed(4)})`),
      });
  });

  // Services rows — background fill + padding {240,26}; arrow translateX {300,18}
  document.querySelectorAll<HTMLElement>("[data-srow]").forEach((row) => {
    springHover(row, {
      from: { a: 0, pl: 1.5, pr: 1.5 },
      to: { a: 1, pl: 2, pr: 1.25 },
      tension: 240,
      friction: 26,
      apply: (v) => {
        row.style.backgroundColor = `rgba(241,240,238,${v.a.toFixed(3)})`;
        row.style.paddingLeft = v.pl.toFixed(3) + "rem";
        row.style.paddingRight = v.pr.toFixed(3) + "rem";
      },
    });
    const badge = row.querySelector<HTMLElement>("[data-srow-badge]");
    if (badge)
      springHover(row, {
        from: { x: 0 },
        to: { x: 5 },
        tension: 300,
        friction: 18,
        apply: (v) => (badge.style.transform = `translateX(${v.x.toFixed(3)}px)`),
      });
  });

  /* ==================================================================
     3. TEXT REVEAL (replaces spring-text-engine)
     ================================================================== */
  // Word splitter for the About statement — 35ms stagger.
  function splitWords(rootEl: Element) {
    // Guard against a second pass (strict-mode remount) re-splitting spans.
    if (rootEl.querySelector(".word")) return;
    let i = 0;
    (function walk(node: Node) {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          (child.textContent ?? "").split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(" "));
              return;
            }
            const s = document.createElement("span");
            s.className = "word";
            s.style.setProperty("--wd", i++ * 35 + "ms");
            s.textContent = part;
            frag.appendChild(s);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) walk(child);
      });
    })(rootEl);
  }
  document.querySelectorAll("[data-words]").forEach(splitWords);

  // Per-line delays: baseDelay + index * lineStagger
  document.querySelectorAll<HTMLElement>(".lines").forEach((block) => {
    const base = Number(block.dataset.lineDelay || 0);
    const stagger = Number(block.dataset.lineStagger || 0);
    block
      .querySelectorAll<HTMLElement>(".line > span")
      .forEach((span, i) => {
        span.style.setProperty("--ld", base + i * stagger + "ms");
      });
  });

  // Reveal on enter (mode: "once"). Hero items are gated on the loader finishing.
  let introReady = false;
  const pending: Element[] = [];
  const show = (el: Element) => el.classList.add("is-in");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        if (e.target.hasAttribute("data-gated") && !introReady)
          pending.push(e.target);
        else show(e.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  document
    .querySelectorAll(".reveal, .lines, [data-words]")
    .forEach((el) => io.observe(el));
  disposers.push(() => io.disconnect());

  function flushGated() {
    introReady = true;
    pending.splice(0).forEach(show);
  }

  /* ==================================================================
     4. PAGE LOADER — 0 -> 100 over 1300ms, easeInOutCubic
     ================================================================== */
  (function loader() {
    const FILL_MS = 700;
    const el = document.getElementById("loader");
    const fill = document.getElementById("loaderFill");
    const count = document.getElementById("loaderCount");
    // Inner pages render no loader. Without this, gated elements (the header)
    // would sit in the pending queue forever and never become visible.
    if (!el || !fill || !count) {
      flushGated();
      return;
    }
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    stopScroll();
    const start = performance.now();

    function tick(now: number) {
      if (stopped) return;
      const t = Math.min((now - start) / FILL_MS, 1);
      const progress = Math.round(easeInOutCubic(t) * 100);
      fill!.style.width = progress + "%";
      count!.textContent = String(progress).padStart(3, "0");
      if (t < 1) return requestAnimationFrame(tick);
      exit();
    }

    let done = false;
    function exit() {
      el!.classList.add("loader--out");
      const finish = () => {
        if (done) return;
        done = true;
        flushGated();
        startScroll();
        // Hidden rather than removed: the node belongs to the React tree.
        el!.style.display = "none";
      };
      el!.addEventListener(
        "transitionend",
        (e) => (e as TransitionEvent).propertyName === "transform" && finish(),
        { once: true },
      );
      // Fallback if the transition never fires (e.g. reduced motion).
      later(finish, 900);
    }

    requestAnimationFrame(tick);
  })();

  /* ==================================================================
     5. LIVE CLOCK — H:MMam/pm  •  D Month, YYYY
     ================================================================== */
  (function clock() {
    const MONTHS = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const timeEls = document.querySelectorAll("[data-clock-time]");
    const dateEls = document.querySelectorAll("[data-clock-date]");
    const menuEls = document.querySelectorAll("[data-menu-clock]");

    function update() {
      const d = new Date();
      const h = d.getHours() % 12 || 12;
      const m = String(d.getMinutes()).padStart(2, "0");
      const time = `${h}:${m}${d.getHours() < 12 ? "am" : "pm"}`;
      const date = `${d.getDate()} ${MONTHS[d.getMonth()]}, ${d.getFullYear()}`;
      timeEls.forEach((n) => (n.textContent = time));
      dateEls.forEach((n) => (n.textContent = date));
      menuEls.forEach((n) => (n.textContent = "— " + time));
    }
    update();
    const id = window.setInterval(update, 1000);
    disposers.push(() => window.clearInterval(id));
  })();

  /* ==================================================================
     6. HERO CARD CAROUSEL — 3 items, wraps
     ================================================================== */
  (function carousel() {
    const slot = document.getElementById("hcardSlot");
    const dotWrap = document.getElementById("hcardDots");
    const card = document.getElementById("hcardAdvance");
    const prev = document.getElementById("hcardPrev");
    const next = document.getElementById("hcardNext");
    if (!slot || !dotWrap || !card || !prev || !next) return;
    const items = [...slot.querySelectorAll<HTMLElement>(".hcard__item")];
    const dots = [...dotWrap.children];
    // One tile image per slide; cross-faded in step with the copy.
    const tileImages = [
      ...document.querySelectorAll<HTMLElement>("[data-tile-img]"),
    ];
    let index = 0;

    function render(nextIndex: number, dir: number) {
      items.forEach((item, i) => {
        if (i === nextIndex) item.dataset.state = "active";
        else item.dataset.state = dir > 0 ? "above" : "below";
      });
      dots.forEach((d, i) => d.classList.toggle("is-active", i === nextIndex));
      tileImages.forEach((img, i) =>
        img.classList.toggle("is-active", i === nextIndex),
      );
      index = nextIndex;
    }
    function move(step: number) {
      render((index + step + items.length) % items.length, step);
    }

    listen(card, "click", () => move(1));
    listen(card, "keydown", (e) => {
      const key = (e as KeyboardEvent).key;
      if (key === "Enter" || key === " ") {
        e.preventDefault();
        move(1);
      }
      if (key === "ArrowRight") move(1);
      if (key === "ArrowLeft") move(-1);
    });

    // Prev/next sit inside the card, so stop the click bubbling to it.
    listen(prev, "click", (e) => {
      e.stopPropagation();
      move(-1);
    });
    listen(next, "click", (e) => {
      e.stopPropagation();
      move(1);
    });
  })();

  /* ==================================================================
     7. LIQUID REVEAL — cursor paints the reveal image over the base image

     The brush does not sit on the pointer: it eases toward it every frame, so
     a fast flick leaves a trailing ribbon that catches up rather than a hard
     jump. All rates below are per-second and scaled by the frame delta, so the
     motion looks identical on 60Hz and 120Hz displays.
     ================================================================== */
  (function liquidReveal() {
    if (reducedMotion) return; // static base image only

    const BRUSH_RADIUS = 143;
    /** Fraction of the remaining pointer gap closed per 60Hz frame. */
    const FOLLOW = 0.16;
    /** Trail fade while the brush is moving (exponential, per second). */
    const DECAY_PER_SEC = 0.9;
    /** Extra fade that ramps in once the brush has settled. */
    const IDLE_ACCEL_PER_SEC = 7;
    /** Seconds of stillness after which the canvas is cleared outright. */
    const FADE_TIMEOUT = 2.2;
    const REVEAL_SRC = "/images/revealing_image.png";
    /** Brand wash laid over the reveal image — keep in sync with --accent. */
    const TINT = "#0b62dc";
    /** 0 = untouched photo, 1 = fully colourised into the brand hue. */
    const TINT_STRENGTH = 0.85;

    const host = document.getElementById("liquid");
    const canvas = document.getElementById(
      "liquidCanvas",
    ) as HTMLCanvasElement | null;
    if (!host || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const radius = BRUSH_RADIUS * dpr;
    const diameter = Math.ceil(radius * 2);

    // Offscreen: after-image drawn with object-fit:cover math
    const cover = document.createElement("canvas");
    const coverCtx = cover.getContext("2d")!;
    // Offscreen: soft radial brush stamp
    const brush = document.createElement("canvas");
    brush.width = brush.height = diameter;
    const brushCtx = brush.getContext("2d")!;

    // Same-origin asset, so the canvas never taints and no crossOrigin is needed.
    const img = new Image();
    let imgReady = false;
    img.onload = () => {
      imgReady = true;
      resize();
    };
    img.src = REVEAL_SRC;

    function drawCover() {
      if (!imgReady || !cover.width || !cover.height) return;
      coverCtx.globalCompositeOperation = "source-over";
      coverCtx.globalAlpha = 1;
      coverCtx.clearRect(0, 0, cover.width, cover.height);
      const scale = Math.max(
        cover.width / img.width,
        cover.height / img.height,
      );
      const w = img.width * scale;
      const h = img.height * scale;
      coverCtx.drawImage(img, (cover.width - w) / 2, (cover.height - h) / 2, w, h);

      // Tint once here rather than per stamp — this canvas is only rebuilt on
      // resize, so the brush loop stays cheap. Cover math fills the canvas
      // edge to edge, so there is no transparent region for the fill to leak
      // into.
      //
      // `multiply`, not `color`: this photo is high-key, and `color` forces
      // the fill's hue to the backdrop's luminance, which clips near-white
      // pixels back toward white and erases the wash exactly where most of
      // the frame sits. `multiply` scales every channel by the accent instead,
      // so the pale background turns solidly blue while the dark subject stays
      // dark and keeps its detail.
      coverCtx.globalCompositeOperation = "multiply";
      coverCtx.globalAlpha = TINT_STRENGTH;
      coverCtx.fillStyle = TINT;
      coverCtx.fillRect(0, 0, cover.width, cover.height);
      coverCtx.globalCompositeOperation = "source-over";
      coverCtx.globalAlpha = 1;
    }

    function resize() {
      const rect = host!.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      canvas!.width = Math.round(rect.width * dpr);
      canvas!.height = Math.round(rect.height * dpr);
      canvas!.style.width = rect.width + "px";
      canvas!.style.height = rect.height + "px";
      cover.width = canvas!.width;
      cover.height = canvas!.height;
      drawCover();
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    disposers.push(() => ro.disconnect());
    resize();

    /** Latest pointer position, in canvas pixels. */
    let target: { x: number; y: number } | null = null;
    /** Eased brush position that chases `target`. */
    let head: { x: number; y: number } | null = null;
    let idleTime = 0;

    listen(
      window,
      "pointermove",
      (event) => {
        const e = event as PointerEvent;
        if (!canvas.width) return;
        const r = canvas.getBoundingClientRect();
        const x = (e.clientX - r.left) * dpr;
        const y = (e.clientY - r.top) * dpr;

        // Ignore points well outside the canvas; the brush keeps easing to
        // wherever it was last headed instead of snapping away.
        if (
          x < -radius ||
          y < -radius ||
          x > canvas.width + radius ||
          y > canvas.height + radius
        ) {
          return;
        }

        target = { x, y };
        // First sighting: drop the brush straight onto the pointer so it does
        // not sweep in from a stale corner.
        head ??= { x, y };
      },
      { passive: true },
    );

    function stamp(x: number, y: number) {
      const c = radius;
      brushCtx.clearRect(0, 0, diameter, diameter);
      brushCtx.globalCompositeOperation = "source-over";
      const g = brushCtx.createRadialGradient(c, c, 0, c, c, radius);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.55, "rgba(255,255,255,0.82)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      brushCtx.fillStyle = g;
      brushCtx.fillRect(0, 0, diameter, diameter);

      brushCtx.globalCompositeOperation = "source-in";
      brushCtx.drawImage(
        cover,
        x - c,
        y - c,
        diameter,
        diameter,
        0,
        0,
        diameter,
        diameter,
      );

      ctx!.globalCompositeOperation = "source-over";
      ctx!.drawImage(brush, x - c, y - c);
    }

    let lastFrame = 0;
    let cleared = true;

    function tick(now: number) {
      if (stopped) return;
      requestAnimationFrame(tick);
      if (!canvas!.width || !imgReady) return;

      // Clamp the delta so a background tab does not resume with one huge step.
      const dt = lastFrame ? Math.min((now - lastFrame) / 1000, 1 / 30) : 1 / 60;
      lastFrame = now;

      // Ease the brush toward the pointer and paint the segment it covered.
      let drawing = false;
      if (target && head) {
        const dx = target.x - head.x;
        const dy = target.y - head.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0.5) {
          // Frame-rate independent form of `head += gap * FOLLOW` per frame.
          const t = 1 - Math.pow(1 - FOLLOW, dt * 60);
          const nx = head.x + dx * t;
          const ny = head.y + dy * t;

          // Stamp along the segment so fast movement stays a continuous
          // ribbon rather than a dotted line of separate blobs.
          const travelled = Math.hypot(nx - head.x, ny - head.y);
          const steps = Math.min(
            Math.max(Math.ceil(travelled / Math.max(radius * 0.25, 1)), 1),
            60,
          );
          for (let i = 1; i <= steps; i++) {
            stamp(
              head.x + (nx - head.x) * (i / steps),
              head.y + (ny - head.y) * (i / steps),
            );
          }
          head = { x: nx, y: ny };
          drawing = true;
        }
      }

      if (drawing) {
        idleTime = 0;
        cleared = false;
      } else {
        idleTime += dt;
        if (cleared) return; // fully faded and already wiped — nothing to do
      }

      // Exponential decay: constant proportion removed per second, with an
      // accelerating term once the brush has come to rest.
      const rate = drawing
        ? DECAY_PER_SEC
        : DECAY_PER_SEC + idleTime * IDLE_ACCEL_PER_SEC;
      ctx!.globalCompositeOperation = "destination-out";
      ctx!.fillStyle = `rgba(0,0,0,${1 - Math.exp(-rate * dt)})`;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      if (!drawing && idleTime > FADE_TIMEOUT) {
        ctx!.globalCompositeOperation = "source-over";
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
        cleared = true;
      }
    }
    requestAnimationFrame(tick);
  })();

  /* ==================================================================
     8. STATS COUNT-UP — start "top bottom" -> end "center center"
     ================================================================== */
  (function stats() {
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-count]")];
    if (!nodes.length) return;
    const panel = document.querySelector(".stats__panel");
    if (!panel) return;
    let lastRun = 0;

    function update() {
      const now = performance.now();
      if (now - lastRun < 30) return;
      lastRun = now;

      const r = panel!.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress 0 when the panel's top meets the viewport bottom (top === vh),
      // 1 when its center meets the viewport center (top === vh/2 - height/2).
      const span = vh / 2 + r.height / 2;
      const progress =
        span > 0 ? Math.max(0, Math.min(1, (vh - r.top) / span)) : 0;

      nodes.forEach((n) => {
        n.textContent = String(Math.round(progress * Number(n.dataset.count)));
      });
    }

    update();
    listen(window, "scroll", update, { passive: true });
    listen(window, "resize", update);
    lenis.on("scroll", update);
    disposers.push(() => lenis.off("scroll", update));
  })();

  /* ==================================================================
     9. NAV MENU OVERLAY
     ================================================================== */
  const navMenu = document.getElementById("navMenu");
  let menuOpen = false;

  function openMenu() {
    if (!navMenu || menuOpen) return;
    menuOpen = true;
    navMenu.hidden = false;
    stopScroll();
    requestAnimationFrame(() => navMenu.classList.add("is-open"));
    document.addEventListener("keydown", onMenuKey);
  }
  function closeMenu() {
    if (!navMenu || !menuOpen) return;
    menuOpen = false;
    navMenu.classList.remove("is-open");
    document.removeEventListener("keydown", onMenuKey);
    later(() => {
      navMenu.hidden = true;
    }, 400);
    startScroll();
  }
  function onMenuKey(e: KeyboardEvent) {
    if (e.key === "Escape") closeMenu();
  }
  disposers.push(() => document.removeEventListener("keydown", onMenuKey));

  const menuOpenBtn = document.getElementById("menuOpen");
  const menuCloseBtn = document.getElementById("menuClose");
  if (menuOpenBtn) listen(menuOpenBtn, "click", openMenu);
  if (menuCloseBtn) listen(menuCloseBtn, "click", closeMenu);

  // Overlay links navigate; the overlay itself has to come down with them.
  document
    .querySelectorAll<HTMLElement>("[data-menu-link]")
    .forEach((link) => listen(link, "click", closeMenu));

  /* ==================================================================
     9b. FAQ ACCORDION — open one panel at a time
     ================================================================== */
  const faqItems = [...document.querySelectorAll<HTMLElement>("[data-faq]")];
  faqItems.forEach((item) => {
    const toggle = item.querySelector<HTMLElement>("[data-faq-toggle]");
    if (!toggle) return;
    listen(toggle, "click", () => {
      const open = item.dataset.open === "true";
      faqItems.forEach((other) => {
        other.dataset.open = "false";
        other
          .querySelector("[data-faq-toggle]")
          ?.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.dataset.open = "true";
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ==================================================================
     10. REQUEST MODAL (stubbed submit)
     ================================================================== */
  const modal = document.getElementById("modal");
  const modalFormWrap = document.getElementById("modalForm");
  const modalSuccess = document.getElementById("modalSuccess");
  const requestForm = document.getElementById(
    "requestForm",
  ) as HTMLFormElement | null;
  const submitLabel = document.getElementById("submitLabel");
  const modalPanel = document.getElementById("modalPanel");
  const modalCloseBtn = document.getElementById("modalClose");
  const successCloseBtn = document.getElementById("successClose");
  let modalIsOpen = false;

  function openModal() {
    if (!modal || modalIsOpen) return;
    modalIsOpen = true;
    modal.hidden = false;
    modal.classList.remove("is-closing");
    stopScroll();
    requestAnimationFrame(() => modal.classList.add("is-open"));
    document.addEventListener("keydown", onModalKey);
  }
  function closeModal() {
    if (!modal || !modalIsOpen) return;
    modalIsOpen = false;
    modal.classList.remove("is-open");
    modal.classList.add("is-closing");
    document.removeEventListener("keydown", onModalKey);
    startScroll();
    later(() => {
      modal.hidden = true;
      modal.classList.remove("is-closing");
      // Reset back to the form state ~300ms after close.
      requestForm?.reset();
      if (modalFormWrap) modalFormWrap.hidden = false;
      if (modalSuccess) modalSuccess.hidden = true;
      if (submitLabel) submitLabel.textContent = "Send Enquiry";
    }, 300);
  }
  function onModalKey(e: KeyboardEvent) {
    if (e.key === "Escape") closeModal();
  }
  disposers.push(() => document.removeEventListener("keydown", onModalKey));

  if (modal) listen(modal, "click", closeModal);
  if (modalPanel) listen(modalPanel, "click", (e) => e.stopPropagation());
  if (modalCloseBtn) listen(modalCloseBtn, "click", closeModal);
  if (successCloseBtn) listen(successCloseBtn, "click", closeModal);

  if (requestForm)
    listen(requestForm, "submit", (e) => {
      e.preventDefault();
      if (submitLabel) submitLabel.textContent = "Sending…";
      // Stubbed: no network call.
      later(() => {
        if (modalFormWrap) modalFormWrap.hidden = true;
        if (modalSuccess) modalSuccess.hidden = false;
      }, 600);
    });

  /* ==================================================================
     10b. PAGE ENQUIRY FORM — same stubbed submit as the modal
     ================================================================== */
  const pageForm = document.getElementById(
    "pageEnquiryForm",
  ) as HTMLFormElement | null;
  const pageFormWrap = document.getElementById("pageEnquiryWrap");
  const pageSuccess = document.getElementById("pageEnquirySuccess");
  const pageSubmitLabel = document.getElementById("pageSubmitLabel");

  if (pageForm)
    listen(pageForm, "submit", (e) => {
      e.preventDefault();
      if (pageSubmitLabel) pageSubmitLabel.textContent = "Sending…";
      // Stubbed: no network call, matching the modal form.
      later(() => {
        if (pageFormWrap) pageFormWrap.hidden = true;
        if (pageSuccess) pageSuccess.hidden = false;
      }, 600);
    });

  /* ==================================================================
     10c. STUBBED FORMS — [data-stub-form] swaps itself for the element named
     in [data-stub-success]. No account system or endpoint is wired yet.
     ================================================================== */
  document
    .querySelectorAll<HTMLFormElement>("[data-stub-form]")
    .forEach((form) => {
      const successId = form.dataset.stubSuccess;
      const success = successId ? document.getElementById(successId) : null;
      const label = form.querySelector<HTMLElement>("[data-submit-label]");
      listen(form, "submit", (e) => {
        e.preventDefault();
        if (label) label.textContent = "Sending…";
        later(() => {
          form.hidden = true;
          if (success) success.hidden = false;
        }, 600);
      });
    });

  /* ==================================================================
     11. GLOBAL CLICK ROUTING
     ================================================================== */
  document.querySelectorAll<HTMLElement>("[data-modal]").forEach((btn) =>
    listen(btn, "click", () => {
      if (menuOpen) closeMenu();
      openModal();
    }),
  );

  document.querySelectorAll<HTMLElement>("[data-scroll]").forEach((btn) =>
    listen(btn, "click", () => {
      const id = btn.dataset.scroll;
      if (!id) return;
      if (menuOpen) {
        closeMenu();
        later(() => scrollToId(id), 260);
      } else {
        scrollToId(id);
      }
    }),
  );

  /* ==================================================================
     12. MEDIA SLIDERS — auto-advancing, keyed off [data-slider] so a page
         can carry several without them sharing state
     ================================================================== */
  document.querySelectorAll<HTMLElement>("[data-slider]").forEach((root) => {
    const track = root.querySelector<HTMLElement>("[data-slider-track]");
    if (!track) return;
    const count = track.children.length;
    if (count < 2) return;
    const dots = [...(root.querySelector("[data-slider-dots]")?.children ?? [])];
    let index = 0;

    function render(next: number) {
      index = (next + count) % count;
      track!.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
    }

    render(0);
    // Reduced motion keeps the first slide and never cycles.
    if (reducedMotion) return;

    const id = window.setInterval(() => render(index + 1), 4500);
    disposers.push(() => window.clearInterval(id));
  });

  return () => {
    stopped = true;
    disposers.splice(0).forEach((fn) => fn());
  };
}
