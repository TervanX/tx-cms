// FadingLogoScroller.tsx
import React from "react";
import {
  motion,
  useAnimation,
  useReducedMotion,
  useAnimationFrame,
} from "framer-motion";

type Direction = "left" | "right";

type FadingLogoScrollerProps = {
  /** Text or <img/> nodes */
  items?: React.ReactNode[];
  /** Seconds for one full loop (smaller = faster) */
  speedSec?: number;
  /** Scroll direction */
  direction?: Direction;
  /** Pause the scroll when hovered (default: true) */
  pauseOnHover?: boolean;
  /** Apply gradient masks at the edges (default: true) */
  edgeFades?: boolean;
  /** How strong the center fade is; 1 = full width, 0.5 = half (default: 0.8) */
  centerFadeWidthRatio?: number;
  /** Minimum opacity at far edges (default: 0.2) */
  minOpacity?: number;
  /** Additional wrapper classes */
  className?: string;
};

// Default sample items (replace with your logos)
const DEFAULT_TEXT_ITEMS = [
  "Lovable",
  "Vanta",
  "WHOOP",
  "Personio",
  "Miro",
  "Amazon",
  "Frame.io",
  "Coda",
  "Envoy",
].map((t) => (
  <span className="text-white/95 text-lg md:text-2xl font-semibold tracking-wide">
    {t}
  </span>
));

export default function FadingLogoScroller({
  items = DEFAULT_TEXT_ITEMS,
  speedSec = 24,
  direction = "left",
  pauseOnHover = true,
  edgeFades = true,
  centerFadeWidthRatio = 0.8,
  minOpacity = 0.2,
  className = "",
}: FadingLogoScrollerProps) {
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const start = React.useCallback(() => {
    const from = "0%";
    const to = direction === "left" ? "-100%" : "100%";
    controls.start({
      x: [from, to],
      transition: { duration: speedSec, ease: "linear", repeat: Infinity },
    });
  }, [controls, direction, speedSec]);

  React.useEffect(() => {
    if (!prefersReducedMotion) start();
  }, [prefersReducedMotion, start]);

  // Static fallback for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className={`relative w-full overflow-hidden py-6 ${className}`}>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {items.map((node, i) => (
            <div key={i} className="shrink-0">
              {node}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // One copy of the row
  const Row = () => (
    <div className="flex items-center gap-10 pr-10">
      {items.map((node, i) => (
        <FadingCell
          key={i}
          minOpacity={minOpacity}
          centerFadeWidthRatio={centerFadeWidthRatio}
        >
          {node}
        </FadingCell>
      ))}
    </div>
  );

  return (
    <div
      className={`relative w-full overflow-hidden py-6 ${className}`}
      onMouseEnter={pauseOnHover ? () => controls.stop() : undefined}
      onMouseLeave={pauseOnHover ? () => start() : undefined}
    >
      {edgeFades && (
        <>
          <div className="pointer-events-none bg-absolute inset-y-0 left-0 w-24 gradient-to-r from-black/70 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/70 to-transparent z-10" />
        </>
      )}

      {/* Duplicate content back-to-back for seamless loop */}
      <motion.div
        className="flex w-max will-change-transform"
        animate={controls}
      >
        <Row />
        <Row />
      </motion.div>
    </div>
  );
}

function FadingCell({
  children,
  centerFadeWidthRatio = 0.8,
  minOpacity = 0.2,
}: {
  children: React.ReactNode;
  centerFadeWidthRatio?: number;
  minOpacity?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = React.useState(1);

  useAnimationFrame(() => {
    if (!ref.current) return;
    if (typeof window === "undefined") return;

    const rect = ref.current.getBoundingClientRect();
    const viewportW = window.innerWidth || 1;
    const centerX = viewportW / 2;
    const itemCenter = rect.left + rect.width / 2;

    const fadeWidthPx = Math.max(120, viewportW * centerFadeWidthRatio * 0.5);
    const dist = Math.min(1, Math.abs(itemCenter - centerX) / fadeWidthPx);

    const o = minOpacity + (1 - minOpacity) * (1 - dist);
    setOpacity(o);
  });

  return (
    <div
      ref={ref}
      className="shrink-0 transition-opacity duration-150"
      style={{ opacity }}
    >
      {children}
    </div>
  );
}
