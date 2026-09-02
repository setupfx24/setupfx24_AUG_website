import Image from "next/image";

/**
 * The SetupFX lockup. The source file is black artwork, so `light` flips it
 * to solid white for the dark surfaces (loader, overlay menu, footer).
 */
export function BrandLogo({
  light = false,
  priority = false,
}: {
  light?: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt="SetupFX"
      width={762}
      height={279}
      priority={priority}
      className={light ? "brandmark brandmark--light" : "brandmark"}
    />
  );
}
