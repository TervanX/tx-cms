"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOP_URL = "/assets/top.svg";
const BOTTOM_URL = "/assets/bottom.svg";

const items = [
  {
    title: "INFRASTRUCTURE",
    subTitle:
      "Access scalable APIs for wallets, settlements, on/off-ramps, KYC, and liquidity — everything needed to power modern financial ecosystems.",
    description: "Power every transaction — from payments to digital assets",
    scrollUrl: "/assets/1.svg",
    stackUrl: "/assets/1.svg",
  },
  {
    title: "INTEGRATIONS",
    subTitle:
      "TervanX integrates with major blockchain networks, payment processors, and banking partners, letting you launch multi-asset products without switching platforms.",
    description: "Connect seamlessly with banks, chains, and protocols",
    scrollUrl: "/assets/2.svg",
    stackUrl: "/assets/3.svg",
  },
  {
    title: "ACTIONS",
    subTitle:
      "Built with bank-grade encryption, AML/KYC automation, and regional compliance to help your products scale confidently across jurisdictions.",
    description: "Enterprise-grade security and regulatory coverage",
    scrollUrl: "/assets/4.svg",
    stackUrl: "/assets/5.svg",
  },
  {
    title: "AI & AUTOMATION",
    subTitle:
      "TervanX’s AI engine automates reconciliation, fraud detection, and liquidity optimization — reducing manual workloads while improving trust and speed.",
    description: "The intelligent core for financial operations",
    scrollUrl: "/assets/6.svg",
    stackUrl: "/assets/7.svg",
  },
];

const StackedAnimation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = useState<number>(0);

  const layerEls = useRef<HTMLElement[]>([]);
  const labelEls = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>(".stack-layer");
      layerEls.current = layers as HTMLElement[];

      const PERSPECTIVE = 1000;
      const FRONT = 500;
      const STEP = 120;

      gsap.set(containerRef.current, {
        perspective: PERSPECTIVE,
        transformStyle: "preserve-3d",
      });

      gsap.set(layers, {
        yPercent: -250,
        opacity: 0,
        rotateX: -20,
        transformOrigin: "center center",
        willChange: "transform, opacity",
        position: "absolute",
        force3D: true,
        z: (i: number) => -(i + 1) * STEP,
        scale: (i: number) => (PERSPECTIVE - -(i + 1) * STEP) / PERSPECTIVE,
      });

      gsap.set(topRef.current, { yPercent: -250, opacity: 0, rotateX: 0 });
      gsap.set(bottomRef.current, { yPercent: 250, opacity: 0, rotateX: 0 });

      layers.forEach((layer) => {
        const img = layer.querySelector("img") as HTMLImageElement | null;
        if (!img) return;
        const stackSrc = img.getAttribute("data-stack-src");
        if (stackSrc) img.src = stackSrc;
      });

      const placeMiddles = (activeIdx: number) => {
        layers.forEach((el, idx) => {
          const zVal =
            idx === activeIdx ? FRONT : -(Math.abs(idx - activeIdx) + 1) * STEP;
          gsap.to(el, {
            z: zVal,
            scale: (PERSPECTIVE - zVal) / PERSPECTIVE,
            duration: 0.2,
            overwrite: "auto",
          });
        });
      };

      const stackPhaseLength = layers.length * 200;
      const closePhaseLength = 600;
      const totalLength = stackPhaseLength + closePhaseLength;

      const TRI_BASE = 0.15;
      const FADE_DUR = 1;
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalLength}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const raw = self.scroll();
            const start = self.start;
            const endStack = start + stackPhaseLength;
            const endAll = self.end;

            const p =
              raw <= start
                ? 0
                : raw >= endStack
                ? 1
                : (raw - start) / (endStack - start);

            const total = layers.length;
            const fadeFactor = 0.6;
            const fadeWindow = (1 / total) * fadeFactor;
            const afterAllProgress = gsap.utils.clamp(
              0,
              1
            )((raw - endStack) / closePhaseLength);
            const allStacked = raw >= endStack;

            const activeIndex = Math.min(total - 1, Math.floor(p * total));
            placeMiddles(activeIndex);
            setActiveItem(activeIndex);

            layerEls.current.forEach((el, i) => {
              const label = labelEls.current[i];
              if (!label) return;

              const rect = el.getBoundingClientRect();
              const offset = 8;
              gsap.set(label, {
                x: Math.round(rect.left + rect.width + offset),
                y: Math.round(rect.top + rect.height / 2),
                yPercent: -50,
              });

              const arrow = label.querySelector("img");
              const title = label.querySelector("h6");
              const desc = label.querySelector("p");

              const localStart = i / total;
              const localEnd = (i + 1) / total;

              const localFadeWindow =
                i === total - 1 ? fadeWindow * 1.8 : fadeWindow;

              const localP = gsap.utils.clamp(
                0,
                1
              )((p - localStart) / (localEnd - localStart));

              if (!allStacked) {
                if (localP > 0 && localP < 1) {
                  gsap.set([arrow, desc, title], { opacity: 1 });
                } else if (localP >= 1) {
                  const afterStop = gsap.utils.clamp(
                    0,
                    1,
                    (p - localEnd) / localFadeWindow
                  );
                  const arrowDescOpacity = 1 - afterStop;

                  gsap.set([arrow, desc], { opacity: arrowDescOpacity });
                  gsap.set(title, { opacity: 1 });
                } else {
                  gsap.set([arrow, desc, title], { opacity: 0 });
                }
              } else {
                gsap.set([arrow, desc], { opacity: 0 });
                gsap.set(title, { opacity: 1 - afterAllProgress });
              }

              gsap.set(label, { autoAlpha: 1 });
            });
          },
        },
      });

      const swapTo = (
        img: HTMLImageElement | null,
        key: "scroll" | "stack"
      ) => {
        if (!img) return;
        const attr = key === "scroll" ? "data-scroll-src" : "data-stack-src";
        const url = img.getAttribute(attr);
        if (url && img.src !== url) img.src = url;
      };

      layers.forEach((layer, i) => {
        const img = layer.querySelector("img") as HTMLImageElement | null;
        const startAt = (TRI_BASE * i * (i + 1)) / 2;

        tl.to(
          layer,
          { yPercent: i < 3 ? -20 * i : -38, rotateX: 0, duration: 1 },
          startAt
        );
        tl.fromTo(
          layer,
          { opacity: 0 },
          { opacity: 1, duration: FADE_DUR, ease: "none" },
          startAt
        );
        tl.call(() => swapTo(img, "scroll"), [], startAt);
        tl.call(() => swapTo(img, "stack"), [], startAt + FADE_DUR);
      });

      tl.addLabel("stackDone");

      const lastStart = (TRI_BASE * (layers.length - 1) * layers.length) / 2;

      tl.fromTo(
        topRef.current,
        { yPercent: -250, opacity: 0 },
        { yPercent: -14, opacity: 1, duration: 1, ease: "none" },
        lastStart
      ).fromTo(
        bottomRef.current,
        { yPercent: 250, opacity: 0 },
        { yPercent: 8.5, opacity: 1, duration: 1, ease: "none" },
        lastStart
      );

      tl.to({}, { duration: 0.2 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const imgClass =
    "block w-[260px] md:w-[360px] lg:w-[320px] transform-gpu rounded-xl select-none pointer-events-none";

  return (
    <div>
      <div className="pt-12 md:pt-16 p-4 mx-auto">
        {/* Fixed overlay labels */}
        <div className="fixed inset-0 z-30 pointer-events-none hidden lg:block ">
          {items.map((item, n) => (
            <div
              key={`label-${n}`}
              ref={(el) => {
                if (el) labelEls.current[n] = el;
              }}
              className="absolute whitespace-nowrap pointer-events-none"
              style={{
                transform: "translateZ(0)",
                opacity: 1,
                visibility: "hidden",
              }}
            >
              <div className="relative h-20">
                <div className="flex items-center h-full mt-4">
                  <div className="">
                    <img src="/assets/right-arrow.svg" alt="" />
                  </div>

                  <div className="h-full w-32 overflow-hidden">
                    <h6 className="text-xs text-dark px-2 mb-0 font-grotesque leading-tight break-all whitespace-normal">
                      {item.title}
                    </h6>
                    <p className="mt-1 text-xs text-dark px-2 mb-0 font-grotesque leading-tight break-all whitespace-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section
          ref={sectionRef}
          className="flex flex-col lg:flex-row min-h-screen items-center justify-center relative z-30"
        >
          {/* LEFT TEXT CONTENT (no background) */}
          <div className="relative w-full z-40 lg:w-[35%] pr-0  flex items-center justify-center h-full">
            <div className="w-full max-w-md  px-0 lg:p-5 md:p-6">
              <h1 className="text-3xl md:text-5xl font-medium text-dark md:leading-[60px] lg:px-4 mb-0 text-start font-grotesque">
                Infrastructure{" "}
              </h1>
              <h1 className="text-3xl md:text-5xl font-medium text-dark md:leading-[60px] lg:px-4 mb-0 text-start font-grotesque">
                that powers{" "}
              </h1>
              <h1 className="text-3xl md:text-5xl font-medium text-dark md:leading-[60px] lg:px-4 mb-0 text-start font-grotesque">
                financial possibilities
              </h1>
              <h6 className="text-sm md:text-base text-dark max-w-3xl mx-auto lg:px-4 leading-relaxed mb-0 py-2 font-grotesque">
                {items[activeItem]?.subTitle}
              </h6>
              <div className="w-full flex flex-col gap-2 lg:px-4 mt-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-1 border-solid border-b py-2 transition-colors duration-300 ${
                      activeItem === index ? "px-2" : ""
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <p
                        className={`text-xs transition-colors duration-300 ${
                          activeItem === index
                            ? "text-black font-semibold"
                            : "text-sand hover:text-black"
                        }`}
                      >
                        {item.title}
                      </p>
                      <a>
                        <svg
                          width="20"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0421 3.52704L16.0644 7.54927C17.5693 9.05275 16.5033 11.6252 14.3757 11.6252L2.5 11.6208V12.3673L14.3787 12.3718C16.5048 12.3718 17.5708 14.9443 16.0659 16.4477L12.0406 20.473L12.5692 21L21.5692 12L12.5692 3L12.0406 3.52704H12.0421Z"
                            fill={
                              activeItem === index ? "black" : "currentColor"
                            }
                          />
                        </svg>
                      </a>
                    </div>
                    {activeItem === index && (
                      <p className="mt-1 text-xs text-dark mb-0 font-grotesque leading-tight break-all whitespace-normal lg:hidden block">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT 3D STACK */}
          <div
            ref={containerRef}
            className="relative z-10 lg:flex-1 lg:left-30 top-12 lg:w-[65%] w-full h-full  flex items-center justify-center overflow-hidden scrollbar-hide "
            style={{ isolation: "isolate" }}
          >
            {/* Top overlay */}
            <div
              ref={topRef}
              className="absolute inset-0 z-30 flex items-center justify-center "
              style={{ transformStyle: "flat" }}
            >
              <img
                src={TOP_URL}
                alt="Top"
                className={imgClass}
                draggable={false}
              />
            </div>

            {/* Middle stack (3D) */}
            <div
              className="absolute top-20 inset-0 z-20 flex items-center justify-center scrollbar-hide"
              style={{ transformStyle: "preserve-3d" }}
            >
              {items.map((item, n) => (
                <div
                  key={n}
                  className="stack-layer absolute flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                  ref={(el) => {
                    if (el) layerEls.current[n] = el;
                  }}
                >
                  <img
                    src={item.stackUrl}
                    data-scroll-src={item.scrollUrl}
                    data-stack-src={item.stackUrl}
                    alt={`Layer ${n + 1}`}
                    className="block w-[260px] md:w-[360px] lg:w-[320px] transform-gpu rounded-xl select-none pointer-events-none"
                    draggable={false}
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            {/* Bottom overlay */}
            <div
              ref={bottomRef}
              className="absolute inset-0 z-10 flex items-center justify-center"
              style={{ transformStyle: "flat" }}
            >
              <img
                src={BOTTOM_URL}
                alt="Bottom"
                className={imgClass}
                draggable={false}
              />
            </div>
          </div>

          <div className="lg:w-[35%] pr-6 md:pr-10 lg:pr-16 flex items-center justify-center lg:h-full" />
        </section>
      </div>
    </div>
  );
};

export default StackedAnimation;
