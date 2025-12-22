import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "../reusable/Button";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { Rocket, Shield, TrendingUp } from "lucide-react";

const Busineses: React.FC = () => {
  return (
    <div className="px-4">
      <ContentShowcase />
    </div>
  );
};

export default Busineses;

const contentCards = [
  {
    id: 1,
    title: "Builder's Block?",
    description:
      "Spending months building wallet security, compliance, and payment rails from scratch? We've done the heavy lifting for you.",
    solution:
      "With LayerX, go from concept to live product in weeks, not years.",
    icon: Rocket,
    statLabel: "faster development",
  },
  {
    id: 2,
    title: "Fear of Regulatory Fires?",
    description:
      "Navigating AML/KYC and transaction monitoring alone is risky and complex. Our built-in compliance tools keep you safe.",
    solution:
      "Launch with confidence, knowing your foundation is secure and audit-ready.",
    icon: Shield,
    statLabel: "compliance coverage",
  },
  {
    id: 3,
    title: "Scaling Anxiety?",
    description:
      "Worried your infrastructure will crack under the pressure of your first 1,000 users? Our platform scales seamlessly with you.",
    solution: "Focus on your growth, not your server load.",
    icon: TrendingUp,
    statLabel: "effortless scaling",
  },
];

const ContentCard: React.FC<{ content: (typeof contentCards)[0] }> = ({
  content,
}) => {
  const IconComponent = content.icon;

  return (
    <div className="relative flex h-full min-h-[368px] overflow-hidden rounded-xl bg-gray-100">
      <div className="h-full w-full p-5 md:p-6 lg:p-8 xl:p-10">
        <div className="flex h-full flex-col gap-6 md:gap-10 lg:flex-row lg:gap-12 xl:gap-24">
          <div className="flex h-full w-full flex-wrap justify-between gap-20 pt-5 text-gray-600 md:gap-0 md:pt-0">
            {/* Content */}
            <div className="order-2 mb-6 flex w-full flex-col gap-6 text-left md:order-1 md:pr-40">
              <div className="flex items-center gap-3">
                <IconComponent className="w-6 h-6 text-gray-900" />
                <h3 className="text-2xl font-bold leading-[110%] font-sans text-gray-900 lg:text-3xl xl:text-4xl">
                  {content.title}
                </h3>
              </div>
              <p className="text-lg leading-[130%] font-sans text-gray-700 lg:text-xl">
                {content.description}
              </p>
              <p className="text-lg leading-[130%] font-sans text-gray-900 font-medium lg:text-xl">
                {content.solution}
              </p>
            </div>

            {/* Statistic */}
            <div className="order-1 flex flex-col gap-2 self-end text-right lg:order-3  lg:text-left">
              <p className="text-xs uppercase leading-[120%] font-mono text-gray-500 md:text-sm xl:text-base">
                {content.statLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const [cardW, setCardW] = useState<number>(0);
  const gapPx = 24;
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll configuration
  const AUTO_SCROLL_INTERVAL = 4000; // 4 seconds
  const SCROLL_DURATION = 800; // Animation duration in ms

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

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current || contentCards.length === 0)
      return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        scrollToNext();
      }, AUTO_SCROLL_INTERVAL);
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, cardW, contentCards.length]);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollPosition = index * (cardW + gapPx);

    el.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentIndex(index);
    updateArrows();
  };

  const scrollToNext = () => {
    const nextIndex = (currentIndex + 1) % contentCards.length;
    scrollToIndex(nextIndex);
  };

  const scrollToPrev = () => {
    const prevIndex =
      currentIndex === 0 ? contentCards.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  const scrollByOne = (dir: 1 | -1) => {
    // Pause auto-scroll when user manually interacts
    setIsAutoScrolling(false);

    if (dir === 1) {
      scrollToNext();
    } else {
      scrollToPrev();
    }

    // Resume auto-scroll after a delay
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, AUTO_SCROLL_INTERVAL + 1000);
  };

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;

    // Pause auto-scroll on user interaction
    setIsAutoScrolling(false);

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
    }

    // Resume auto-scroll after inactivity
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 3000);
  };

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const left = el.scrollLeft;
    setCanLeft(left > 4);
    setCanRight(left < maxScroll - 4);

    // Update current index based on scroll position
    const newIndex = Math.round(left / (cardW + gapPx));
    setCurrentIndex(Math.min(newIndex, contentCards.length - 1));
  };

  const onScroll: React.UIEventHandler<HTMLDivElement> = () => updateArrows();

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <div className="flex w-full flex-col gap-10 py-8 lg:flex-row lg:gap-20 xl:gap-24 lg:py-12">
      {/* Left Header Section */}
      <div className="flex shrink-0 flex-col justify-between lg:w-[303px] xl:w-[413px]">
        <div className="flex w-full flex-col justify-between gap-6 md:flex-row md:items-end md:text-left lg:flex-col lg:gap-8 xl:gap-10">
          <div className="flex grow flex-col gap-6 md:max-w-[360px] lg:max-w-[500px]">
            <h5 className="text-3xl tracking-[-0.32px] leading-none font-sans text-gray-900 md:text-4xl md:tracking-[-0.72px] md:max-w-[500px] lg:text-5xl lg:tracking-[-0.8px] lg:max-w-[600px] xl:text-6xl xl:tracking-[-0.96px] 2xl:text-7xl 2xl:tracking-[-1.12px]">
              Pricing Built for Growth, Trusted by Leaders
            </h5>
            <p className="block w-full text-base leading-[130%] font-sans text-gray-700 md:max-w-[500px] lg:max-w-[600px] xl:text-lg">
              The most innovative fintechs build on LayerX <br />
              Join thousands of startups and enterprises using LayerX to launch
              secure crypto and payment products faster.
            </p>
          </div>
          <div className="flex h-full w-auto items-end max-md:justify-start md:w-auto lg:w-full">
            <Link href="/contact/contact-sales">
              <Button variant="outline" size="md">
                <span className="text-base leading-[130%] font-sans">
                  Get started for free
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Cards Carousel */}
      <div className="w-full md:w-[calc(100%-150px)] lg:w-[calc(100%-500px)] lg:[clip-path:inset(-100vw_-100vw_-100vw_0)] xl:w-[calc(100%-650px)]">
        <div className="relative">
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            onScroll={onScroll}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ scrollPaddingLeft: 4, scrollPaddingRight: 4 }}
          >
            {contentCards.map((content, i) => (
              <div
                key={content.id}
                ref={i === 0 ? firstCardRef : null}
                className="w-[95%] shrink-0 snap-start cursor-grab active:cursor-grabbing md:w-[95%]"
              >
                <ContentCard content={content} />
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
              className={`w-10 ${
                !canLeft ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <IoArrowBackSharp />
            </Button>
            <Button
              size="md"
              variant="outline"
              type="button"
              onClick={() => scrollByOne(1)}
              disabled={!canRight}
              className={`w-10 ${
                !canRight ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <IoArrowForwardSharp />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
