"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackedAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>(".stack-layer");

      const TOP_OFFSET = -20;
      const GAP_PERCENT = 20;
      gsap.set(layers, { yPercent: 120, opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${layers.length * 450}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      layers.forEach((layer, i) => {
        const finalY = TOP_OFFSET + i * (100 + GAP_PERCENT);
        tl.to(
          layer,
          {
            yPercent: finalY,
            opacity: 1,
            duration: 1,
          },
          i
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative h-screen w-full bg-white overflow-hidden"
      >
        <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Scroll to stack
          </h2>
          <p className="text-gray-500 mt-1">
            Each image settles below the last
          </p>
        </div>

        <div className="absolute inset-0">
          <div className="stack-layer absolute bottom-0 left-1/2 -translate-x-1/2">
            <img
              src="https://www.apollo.io/_next/static/media/ai-inactive.220ca6d6.svg"
              alt="Layer 1"
              className="w-40 md:w-56"
            />
          </div>
          <div className="stack-layer absolute bottom-0 left-1/2 -translate-x-1/2">
            <img
              src="https://www.apollo.io/_next/static/media/ai-inactive.220ca6d6.svg"
              alt="Layer 2"
              className="w-40 md:w-56"
            />
          </div>
          <div className="stack-layer absolute bottom-0 left-1/2 -translate-x-1/2">
            <img
              src="https://www.apollo.io/_next/static/media/ai-inactive.220ca6d6.svg"
              alt="Layer 3"
              className="w-40 md:w-56"
            />
          </div>
        </div>
      </section>

      <section className="min-h-[120vh] bg-gray-50 flex items-center justify-center">
        <div className="max-w-xl text-center">
          <h3 className="text-3xl font-semibold mb-3">Next Section</h3>
          <p className="text-gray-600">
            After the last image settles, the pin releases and you continue
            scrolling.
          </p>
        </div>
      </section>
    </>
  );
};

export default StackedAnimation;
