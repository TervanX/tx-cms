import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "../reusable/Button";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

const Busineses: React.FC = () => {
  return (
    <div className="px-4">
      <TestimonialShowcase />
    </div>
  );
};

export default Busineses;

const testimonials = [
  {
    id: 1,
    quote: "We reduced the complexity of three tools into one. We're getting higher reply rates, open rates are doubled, meetings are up, and speed to booking a meeting is cut in half. This is the sales platform for people who want to do more with their outreach.",
    name: "Collin Steward",
    role: "CEO at Predictable Revenue",
    avatar: "/assets/collin.webp",
    stat: "50",
    statSuffix: "%",
    statLabel: "cost savings"
  },
  {
    id: 2,
    quote: "We've saved 100+ hours of manual research across three full-time BDRs. I'm seeing a 39% open rate using AI Research to write personalized messages for my sequence... which is incredible considering I didn't write them one by one.",
    name: "Alexander Theodorou",
    role: "Founder & CEO at Neurofit",
    avatar: "/assets/collin.webp",
    stat: "39",
    statSuffix: "%",
    statLabel: "open rate using Apollo AI Power-ups"
  },
  {
    id: 3,
    quote: "Apollo gives me all the functionality I need to qualify my prospects and assign them to the right campaigns and reps. We're now driving as many ICP meetings booked with one SDR as we were with three.",
    name: "Jay Filiatraut",
    role: "Founder at GTM Ops",
    avatar: "/assets/collin.webp",
    stat: "4",
    statSuffix: "x",
    statLabel: "meetings booked"
  }
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => {
  return (
    <div className="relative flex h-full min-h-[368px] overflow-hidden rounded-xl bg-gray-100">
      <div className="h-full w-full p-5 md:p-6 lg:p-8 xl:p-10">
        <div className="flex h-full flex-col gap-6 md:gap-10 lg:flex-row lg:gap-12 xl:gap-24">
          <div className="flex h-full w-full flex-wrap justify-between gap-20 pt-5 text-gray-600 md:gap-0 md:pt-0">
            {/* Quote */}
            <p className="order-2 mb-6 flex w-full flex-col gap-2 text-left text-xl leading-[110%] font-sans text-gray-900 md:order-1 md:pr-40 lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <svg width="10" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.96 4.32012V8.12012H0V4.40012C0 1.60012 0.72 0.00012207 3.96 0.00012207V1.92012C2.44 2.04012 2.08 2.56012 2.08 4.32012H3.96ZM9.88 4.32012V8.12012H5.92V4.40012C5.92 1.60012 6.68 0.00012207 9.88 0.00012207V1.92012C8.4 2.04012 8 2.56012 8 4.32012H9.88Z" fill="black"></path>
              </svg>
              <span>{testimonial.quote}”</span>
            </p>

            {/* Author Info */}
            <div className="order-3 self-end md:order-2 md:max-w-[60%] lg:max-w-auto">
              <div className="flex items-end gap-4">
                <img
                  alt={`${testimonial.name} headshot`}
                  loading="lazy"
                  width="160"
                  height="160"
                  decoding="async"
                  className="w-24 rounded-lg bg-gray-200"
                  src={testimonial.avatar}
                  style={{ color: 'transparent' }}
                />
                <div className="flex flex-col gap-1">
                  <p className="text-base leading-[130%] font-sans text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-base leading-[130%] font-sans text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Statistic */}
            <div className="order-1 flex flex-col gap-2 self-end text-right lg:order-3 lg:max-w-[180px] lg:text-left">
              <h2 className="flex items-end text-4xl tracking-[-0.96px] leading-[90%] font-sans text-gray-900 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl lg:pt-4">
                {testimonial.stat}
                <span className="text-3xl tracking-[-0.8px] leading-none font-sans text-inherit md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                  {testimonial.statSuffix}
                </span>
              </h2>
              <p className="text-xs uppercase leading-[120%] font-mono text-gray-500 md:text-sm xl:text-base">
                {testimonial.statLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [cardW, setCardW] = useState<number>(0);
  const gapPx = 24;
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    const cardEl = firstCardRef.current;
    const scroller = scrollRef.current;
    if (!cardEl || !scroller) return;

    const measure = () => {
      setCardW(cardEl.offsetWidth);
      updateArrows();
    };

    const ro = new ResizeObserver(measure);
    ro.observe(cardEl);
    ro.observe(scroller);
    measure();
    return () => ro.disconnect();
  }, []);

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  const scrollByOne = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir * (cardW + gapPx);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const left = el.scrollLeft;
    setCanLeft(left > 4);
    setCanRight(left < maxScroll - 4);
  };

  const onScroll: React.UIEventHandler<HTMLDivElement> = () => updateArrows();

  return (
    <div className="flex w-full flex-col gap-10 py-8 lg:flex-row lg:gap-20 xl:gap-24 lg:py-12">
      {/* Left Header Section */}
      <div className="flex shrink-0 flex-col justify-between lg:w-[303px] xl:w-[413px]">
        <div className="flex h-full w-full flex-col justify-between gap-6 md:flex-row md:items-end md:text-left lg:flex-col lg:gap-8 xl:gap-10">
          <div className="flex grow flex-col gap-6 md:max-w-[360px] lg:max-w-[500px]">
            <h5 className="text-3xl tracking-[-0.32px] leading-none font-sans text-gray-900 md:text-4xl md:tracking-[-0.72px] md:max-w-[500px] lg:text-5xl lg:tracking-[-0.8px] lg:max-w-[600px] xl:text-6xl xl:tracking-[-0.96px] 2xl:text-7xl 2xl:tracking-[-1.12px]">
              The fastest growing businesses<br />use Apollo
            </h5>
            <p className="block w-full text-base leading-[130%] font-sans text-gray-700 md:max-w-[500px] lg:max-w-[600px] xl:text-lg">
              500,000+ companies use Apollo to stay ahead of the competition.
            </p>
          </div>
          <div className="flex h-full w-full items-end max-md:justify-start md:w-auto lg:w-full">
            {/* Mobile Button */}
            <Button
              variant="outline"
              className="h-10 px-4 border border-black bg-transparent text-black hover:border-black hover:bg-gray-200 hover:text-black active:border-black active:bg-gray-300 active:text-black focus:border-black focus:text-black lg:hidden"
            >
              <span className="text-sm leading-[130%] font-sans">Get started for free</span>
            </Button>
            {/* Desktop Button */}
            <Button
              variant="outline"
              className="hidden h-12 px-5 border border-black bg-transparent text-black hover:border-black hover:bg-gray-200 hover:text-black active:border-black active:bg-gray-300 active:text-black focus:border-black focus:text-black lg:block"
            >
              <span className="text-base leading-[130%] font-sans">Get started for free</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="w-full md:w-[calc(100%-150px)] lg:w-[calc(100%-500px)] lg:[clip-path:inset(-100vw_-100vw_-100vw_0)] xl:w-[calc(100%-650px)]">
        <div className="relative">
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            onScroll={onScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ scrollPaddingLeft: 4, scrollPaddingRight: 4 }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.id}
                ref={i === 0 ? firstCardRef : null}
                className="w-[95%] shrink-0 snap-start cursor-grab active:cursor-grabbing md:w-[95%]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
            <div className="w-2 shrink-0" />
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex w-full items-center justify-end gap-4">
            <Button
              size="md"
              variant="outline"
              type="button"
              onClick={() => scrollByOne(-1)}
              disabled={!canLeft}
              className={`w-10 ${!canLeft ? "cursor-not-allowed opacity-50" : ""}`}
            >
              <IoArrowBackSharp />
            </Button>
            <Button
              size="md"
              variant="outline"
              type="button"
              onClick={() => scrollByOne(1)}
              disabled={!canRight}
              className={`w-10 ${!canRight ? "cursor-not-allowed opacity-50" : ""}`}
            >
              <IoArrowForwardSharp />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};