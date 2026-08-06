"use client";

import { useEffect, useRef, useState } from "react";

type Pixel = { id: number; x: number; y: number; opacity: number; age: number };

const PIXEL_SIZE = 12;
const TRAIL_LENGTH = 40;
const FADE_SPEED = 0.04;

/**
 * Pixel trail that follows the cursor across the footer.
 *
 * The layer itself is pointer-events:none and sits between the footer
 * watermark (z-index 0) and the footer content (z-index 10), so every link
 * underneath stays clickable. Movement is read from the parent <footer>.
 */
export function PixelCursorTrail() {
  const layerRef = useRef<HTMLDivElement>(null);
  const [pixels, setPixels] = useState<Pixel[]>([]);
  const idRef = useRef(0);
  const lastRef = useRef({ x: 0, y: 0 });

  // Spawn a pixel once the cursor has travelled far enough.
  useEffect(() => {
    const layer = layerRef.current;
    const host = layer?.parentElement;
    if (!layer || !host) return;

    // Pointer trail is meaningless on touch, and unwelcome with reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    const onMove = (event: MouseEvent) => {
      const rect = layer.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const dx = x - lastRef.current.x;
      const dy = y - lastRef.current.y;
      if (Math.hypot(dx, dy) <= PIXEL_SIZE) return;

      lastRef.current = { x, y };
      setPixels((prev) => [
        ...prev.slice(-TRAIL_LENGTH),
        { id: idRef.current++, x, y, opacity: 1, age: 0 },
      ]);
    };

    host.addEventListener("mousemove", onMove);
    return () => host.removeEventListener("mousemove", onMove);
  }, []);

  // Fade loop. Returning the same array when idle means React skips the render.
  useEffect(() => {
    let raf = 0;
    const step = () => {
      raf = requestAnimationFrame(step);
      setPixels((prev) =>
        prev.length === 0
          ? prev
          : prev
              .map((pixel) => ({
                ...pixel,
                opacity: pixel.opacity - FADE_SPEED,
                age: pixel.age + 1,
              }))
              .filter((pixel) => pixel.opacity > 0),
      );
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="pixeltrail" ref={layerRef} aria-hidden="true">
      {pixels.map((pixel) => {
        // Older pixels shrink as they fade out.
        const size = PIXEL_SIZE * Math.max(0.3, 1 - pixel.age / 100);
        return (
          <span
            key={pixel.id}
            className="pixeltrail__px"
            style={{
              left: pixel.x - size / 2,
              top: pixel.y - size / 2,
              width: size,
              height: size,
              opacity: pixel.opacity,
            }}
          />
        );
      })}
    </div>
  );
}
