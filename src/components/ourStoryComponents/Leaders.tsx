"use client";
import { motion } from "framer-motion";
import Button from "../reusable/Button";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const LeadersSection = () => {
  return (
    <div>
      <div className="w-full md:w-2/3 mx-auto">
        <p className="text-[10px] text-black font-normal text-center mt-12 mb-6">
          OUR LEADERS
        </p>
        <h4 className="text-2xl md:text-4xl lg:text-5xl text-center font-medium text-dark">
          ... and the leaders guiding our way
        </h4>
        <p className="text-sm text-black font-normal text-center my-6">
          Our leadership team brings deep GTM experience, bold vision, and a
          hands-on mindset to everything we do — driving a culture of continuous
          growth.
        </p>
      </div>
      <CardShowcase />
    </div>
  );
};

export default LeadersSection;

interface CardProps {
  id: string;
  logo: string;
  year: string;
  description: string;
}

const cards: CardProps[] = [
  {
    id: "1",
    logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmatt-curl.b9b2901f.png&w=640&q=75",
    year: "2015",
    description: "Company is founded",
  },
  {
    id: "2",
    logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmatt-curl.b9b2901f.png&w=640&q=75",
    year: "2016",
    description: "Team expands globally",
  },
  {
    id: "3",
    logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmatt-curl.b9b2901f.png&w=640&q=75",
    year: "2018",
    description: "Launch of core product",
  },
  {
    id: "4",
    logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmatt-curl.b9b2901f.png&w=640&q=75",
    year: "2020",
    description: "Reached 1M users",
  },
  {
    id: "5",
    logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmatt-curl.b9b2901f.png&w=640&q=75",
    year: "2023",
    description: "Expanded into new markets",
  },
];

const CardShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [cardW, setCardW] = useState<number>(360);
  const gapPx = 24;
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const measure = () => {
      const containerWidth = scroller.clientWidth;
      let cardWidth: number;

      if (containerWidth < 640) {
        cardWidth = (containerWidth - gapPx * 1.25) / 1.25;
      } else if (containerWidth < 1024) {
        cardWidth = (containerWidth - gapPx * 2.5) / 2.5;
      } else {
        cardWidth = (containerWidth - gapPx * 3.5) / 3;
      }

      setCardW(cardWidth);
      updateArrows();
    };

    const ro = new ResizeObserver(measure);
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
    <div className="relative py-8 lg:py-12">
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="relative">
          <div className="flex items-center justify-end w-full gap-4 my-8">
            <Button
              size="md"
              variant="outline"
              type="button"
              onClick={() => scrollByOne(-1)}
              disabled={!canLeft}
              className={`w-10 ${
                !canLeft ? "opacity-50 cursor-not-allowed" : ""
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
                !canRight ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <IoArrowForwardSharp />
            </Button>
          </div>

          <div
            ref={scrollRef}
            onWheel={handleWheel}
            onScroll={onScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 scrollbar-hide"
            style={{ scrollPaddingLeft: 4, scrollPaddingRight: 4 }}
          >
            {cards.map((card, i) => (
              <div
                key={card.id + i}
                ref={i === 0 ? firstCardRef : null}
                className="snap-start shrink-0"
                style={{ width: `${cardW}px` }}
              >
                <Card item={card} index={i} />
              </div>
            ))}
            <div className="shrink-0 w-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<{ item: CardProps; index: number }> = ({ item }) => {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative flex flex-col overflow-hidden rounded-xl bg-[#edebe8] p-6 font-grotesque transition-all duration-500"
    >
      {/* Hover background image */}
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.apollo.io/_next/static/media/hover-2.9fd5a57b.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full bg-transparent">
        <div className="flex items-center justify-center py-24">
          <img
            src={item.logo}
            alt={item.description}
            height={136}
            width={136}
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <div>
            <h3 className="text-base font-medium mb-1">{item.year}</h3>
            <p className="text-xs font-light text-black ">{item.description}</p>
          </div>
          <a className="rotate-315">
            <svg
              width="20"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0421 3.52704L16.0644 7.54927C17.5693 9.05275 16.5033 11.6252 14.3757 11.6252L2.5 11.6208V12.3673L14.3787 12.3718C16.5048 12.3718 17.5708 14.9443 16.0659 16.4477L12.0406 20.473L12.5692 21L21.5692 12L12.5692 3L12.0406 3.52704H12.0421Z"
                fill="black"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
};
