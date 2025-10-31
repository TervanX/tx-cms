"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

type Section = {
  id: string;
  tab: string;
  heading: string;
  bullets: string[];
  cta: { primary: string; secondary: string };
  cardBg: string;
};

const useViewport = () => {
  const [vw, setVw] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [vh, setVh] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { vw, vh };
};

const usePeekAndGap = () => {
  const [peek, setPeek] = useState(72);
  const [gap, setGap] = useState(24);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setPeek(w < 480 ? 28 : w < 640 ? 40 : w < 1024 ? 56 : 72);
      setGap(w < 480 ? 12 : w < 640 ? 16 : w < 1024 ? 20 : 24);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { peek, gap };
};

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

const TabsNav: React.FC<{
  sections: Section[];
  index: number;
  onSelect: (id: string) => void;
  isMobile: boolean;
  navBtnRefs: React.MutableRefObject<HTMLButtonElement[]>;
}> = ({ sections, index, onSelect, isMobile, navBtnRefs }) => {
  useEffect(() => {
    if (!isMobile) return;
    const el = navBtnRefs.current[index];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [index, isMobile, navBtnRefs]);

  return (
    <div className="sticky top-0 z-20 w-full">
      <nav
        className="px-3 py-3 flex gap-2 overflow-x-auto"
        role="tablist"
        aria-label="Feature sections"
      >
        {sections.map((s, i) => (
          <button
            ref={(el) => {
              if (el) navBtnRefs.current[i] = el;
            }}
            key={s.id}
            onClick={() => onSelect(s.id)}
            className={`w-full whitespace-nowrap rounded p-4 text-xs transition-all ${
              index === i
                ? "bg-yellow1"
                : "bg-[#f7f5f2] text-neutral-900 hover:bg-neutral-100"
            }`}
            aria-selected={index === i}
            role="tab"
          >
            {s.tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

const FeatureBullets: React.FC<{ bullets: string[]; active: boolean }> = ({
  bullets,
  active,
}) => (
  <ul className="space-y-3 text-base sm:text-lg text-neutral-700">
    {bullets.map((b, bi) => (
      <motion.li
        key={bi}
        className="flex items-start gap-3"
        initial={false}
        animate={{
          opacity: active ? 1 : 0.6,
          x: active ? 0 : -6,
        }}
        transition={{
          duration: 0.25,
          delay: active ? bi * 0.04 : 0,
        }}
      >
        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
        <span>{b}</span>
      </motion.li>
    ))}
  </ul>
);

const SectionCard: React.FC<{
  section: Section;
  active: boolean;
}> = ({ section, active }) => (
  <motion.div
    className={`w-full relative ${section.cardBg} py-6 rounded-lg flex lg:flex-col font-grotesque overflow-hidden `}
    initial={false}
    animate={{ opacity: active ? 1 : 0.9, scale: active ? 1 : 0.98 }}
    transition={{ duration: 0.3 }}
  >
    <div className="w-full grid lg:grid-cols-1 gap-10 px-8 pt-10 lg:px-10 lg:pt-12 content-center">
      <div className="flex">
        <div className="w-full">
          <div className="flex flex-col gap-[-1rem]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-mediumtext-black">
              Find the right people
            </h2>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-mediumtext-black">
              and book quality
            </h2>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-mediumtext-black">
              meetings
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 mb-0">
            <a href="#" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white font-medium px-4 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px] text-base">
                Get started for free{" "}
              </button>
            </a>
            <a href="#" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-dark font-medium px-4 py-3.5 rounded-lg border-2 border-dark transition-all duration-200 min-w-[200px] text-base">
                Learn more
              </button>
            </a>
          </div>
        </div>
        <div className="w-full"></div>
        <div className="w-full ">
          <div className="flex flex-col gap-4">
            {/* Repeatable icon + text rows */}
            {[1, 2, 3, 4].map((k) => (
              <div key={k} className="flex gap-4 items-center justify-start">
                <svg
                  width="24"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.52726 0.019043C4.57503 0.019043 2.18177 2.4123 2.18177 5.36453V5.371C2.18177 7.01705 2.92577 8.48933 4.09584 9.4699H0.152344V19.5328H1.39897V15.7031C1.39897 12.9491 3.63151 10.7165 6.3855 10.7165H8.669C11.423 10.7165 13.6555 12.9491 13.6555 15.7031V19.5328H14.9022V9.4699H10.9587C12.1287 8.48933 12.8727 7.01705 12.8727 5.371V5.36453C12.8727 2.4123 10.4795 0.019043 7.52726 0.019043ZM3.4284 5.36453C3.4284 3.10079 5.26352 1.26567 7.52726 1.26567C9.79099 1.26567 11.6261 3.10079 11.6261 5.36453V5.371C11.6261 7.63474 9.79099 9.46986 7.52726 9.46986C5.26352 9.46986 3.4284 7.63474 3.4284 5.371V5.36453Z"
                      fill="black"
                    ></path>
                    <path
                      d="M20.3527 5.36453C20.3527 3.10079 18.5176 1.26567 16.2538 1.26567V0.019043C19.2061 0.019043 21.5993 2.4123 21.5993 5.36453V5.371C21.5993 7.01705 20.8553 8.48933 19.6853 9.4699H23.6286V19.5328H22.3819V15.7031C22.3819 12.9491 20.1494 10.7165 17.3954 10.7165H16.3585V10.7155C16.3237 10.7162 16.2888 10.7165 16.2538 10.7165V9.46986C18.5176 9.46986 20.3527 7.63474 20.3527 5.371V5.36453Z"
                      fill="black"
                    ></path>
                  </g>
                </svg>
                <p className="text-sm text-dark">The world's best B2B data</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center">
        <div className="w-full rounded">
          <video
            src="https://res.cloudinary.com/dx1etzf66/video/upload/v1761889069/stack-video_jixzc7.mp4"
            className="absolute top-[90%] w-full rounded-xl object-cover"
          ></video>
        </div>
      </div>
    </div>
  </motion.div>
);

const MotionHorizontalPeekCarousel: React.FC = () => {
  const sections = useMemo<Section[]>(
    () => [
      {
        id: "pipeline",
        tab: "PIPELINE BUILDER",
        heading: "",
        bullets: [
          "The world's best B2B data",
          "Multiple data providers in one place",
          "AI assistant for smarter outbound",
          "Personalization across every channel",
        ],
        cta: { primary: "Get started for free", secondary: "Learn more" },
        cardBg: "bg-yellow-50",
      },
      {
        id: "call",
        tab: "CALL ASSISTANT",
        heading: "Call smarter with AI on every conversation",
        bullets: [
          "Real-time call guidance",
          "Auto-logging to your CRM",
          "Summaries and next steps",
          "Coach dashboards",
        ],
        cta: { primary: "Try call assistant", secondary: "See how it works" },
        cardBg: "bg-emerald-50",
      },
      {
        id: "enrichment",
        tab: "DATA ENRICHMENT",
        heading: "Keep your records complete and always fresh",
        bullets: [
          "Multi-source enrichment",
          "Webhooks & batch jobs",
          "De-duplication built-in",
          "Compliance friendly",
        ],
        cta: { primary: "Start enriching", secondary: "View docs" },
        cardBg: "bg-sky-50",
      },
      {
        id: "gtm",
        tab: "GO-TO-MARKET PLATFORM",
        heading: "One GTM workspace for your whole team",
        bullets: [
          "Unified contacts",
          "Shared playbooks",
          "Channel analytics",
          "Role-based permissions",
        ],
        cta: { primary: "See the platform", secondary: "Book a demo" },
        cardBg: "bg-rose-50",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const { vw, vh } = useViewport();
  const { peek, gap } = usePeekAndGap();

  const isMobile = vw <= 640;

  // Geometry
  const cardWidth = Math.max(280, vw - 2 * peek);
  const itemWidth = cardWidth + gap;
  const totalWidth = sections.length * itemWidth - gap;

  const cardHeight = Math.max(320, vh - 2 * peek);
  const itemHeight = cardHeight + gap;
  const totalHeight = sections.length * itemHeight - gap;

  // Bounds
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const animatingRef = useRef(false);

  const xCentered = (i: number) => -(i * itemWidth - (vw - cardWidth) / 2);
  const yCentered = (i: number) => -(i * itemHeight - (vh - cardHeight) / 2);

  const rightBound = 0;
  const leftBound = -(totalWidth - vw);
  const topBound = 0;
  const bottomBound = -(totalHeight - vh);

  const snapTo = (next: number) => {
    const clampedIndex = clamp(next, 0, sections.length - 1);

    if (isMobile) {
      const targetY = clamp(yCentered(clampedIndex), bottomBound, topBound);
      animatingRef.current = true;
      animate(y, targetY, {
        type: "spring",
        stiffness: 250,
        damping: 28,
        onComplete: () => (animatingRef.current = false),
      });
    } else {
      const targetX = clamp(xCentered(clampedIndex), leftBound, rightBound);
      animatingRef.current = true;
      animate(x, targetX, {
        type: "spring",
        stiffness: 250,
        damping: 28,
        onComplete: () => (animatingRef.current = false),
      });
    }

    setIndex(clampedIndex);
  };

  useEffect(() => {
    if (isMobile) {
      y.set(clamp(yCentered(index), bottomBound, topBound));
    } else {
      x.set(clamp(xCentered(index), leftBound, rightBound));
    }
  }, [
    vw,
    vh,
    peek,
    gap,
    index,
    leftBound,
    rightBound,
    topBound,
    bottomBound,
    isMobile,
    y,
    x,
    yCentered,
    xCentered,
    clamp,
  ]);

  // Drag end → snap to nearest index
  const onDragEnd = () => {
    if (animatingRef.current) return;
    if (isMobile) {
      const currentY = y.get();
      const i = Math.round(((vh - cardHeight) / 2 - currentY) / itemHeight);
      snapTo(clamp(i, 0, sections.length - 1));
    } else {
      const currentX = x.get();
      const i = Math.round(((vw - cardWidth) / 2 - currentX) / itemWidth);
      snapTo(clamp(i, 0, sections.length - 1));
    }
  };

  const goToId = (id: string) => {
    const next = sections.findIndex((s) => s.id === id);
    if (next !== -1) snapTo(next);
  };

  const navBtnRefs = useRef<HTMLButtonElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll-trap: handle wheel only inside the carousel; release at edges
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (animatingRef.current) {
        e.preventDefault();
        return;
      }

      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      const horizontalIntent = absX > absY;
      const verticalIntent = absY > absX;

      const atFirst = index === 0;
      const atLast = index === sections.length - 1;

      let goNext = false;
      let goPrev = false;

      if (isMobile) {
        if (verticalIntent && absY > 6) {
          goNext = e.deltaY > 0;
          goPrev = e.deltaY < 0;
        } else if (horizontalIntent && absX > 40) {
          goNext = e.deltaX > 0;
          goPrev = e.deltaX < 0;
        } else {
          return;
        }
      } else {
        if (horizontalIntent && absX > 6) {
          goNext = e.deltaX > 0;
          goPrev = e.deltaX < 0;
        } else if (verticalIntent && absY > 40) {
          goNext = e.deltaY > 0;
          goPrev = e.deltaY < 0;
        } else {
          return;
        }
      }

      // Edge-release: let page scroll only when trying to move beyond edges
      if ((atFirst && goPrev) || (atLast && goNext)) {
        return; // allow bubbling to the page
      }

      // Trap scroll and step carousel
      e.preventDefault();
      if (goNext) snapTo(index + 1);
      else if (goPrev) snapTo(index - 1);
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel as EventListener);
    };
  }, [
    index,
    isMobile,
    sections.length,
    leftBound,
    rightBound,
    topBound,
    bottomBound,
  ]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-hidden bg-white relative  overscroll-contain"
      style={{ overscrollBehavior: "contain" }}
    >
      <TabsNav
        sections={sections}
        index={index}
        onSelect={goToId}
        isMobile={isMobile}
        navBtnRefs={navBtnRefs}
      />

      <div
        className="relative w-full h-[calc(100vh-7.25rem)] overflow-hidden"
        // Optional: stop touch scroll chaining mid-carousel
        style={{
          touchAction:
            index === 0 || index === sections.length - 1 ? "auto" : "none",
        }}
      >
        <motion.div
          drag={isMobile ? "y" : "x"}
          style={
            isMobile
              ? ({ y, height: totalHeight } as React.CSSProperties)
              : ({ x, width: totalWidth } as React.CSSProperties)
          }
          dragConstraints={
            isMobile
              ? { top: bottomBound, bottom: topBound }
              : { left: leftBound, right: rightBound }
          }
          dragElastic={0.06}
          onDragEnd={onDragEnd}
          className={`h-full flex ${
            isMobile ? "flex-col" : "flex-col lg:flex-row"
          } items-stretch`}
        >
          {sections.map((s, i) => (
            <div key={s.id} className="shrink-0 flex items-center w-screen">
              <SectionCard section={s} active={index === i} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MotionHorizontalPeekCarousel;
