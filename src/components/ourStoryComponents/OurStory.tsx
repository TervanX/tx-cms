"use client";
import { motion } from "framer-motion";
import Button from "../reusable/Button";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const OurStory = () => {
  return (
    <div>
      <h4 className="text-2xl md:text-4xl lg:text-5xl text-center font-medium text-dark mt-20">
        Milestones that got us here
      </h4>
      <CardShowcase />
    </div>
  );
};

export default OurStory;

interface CardProps {
  id: string;
  logo: string;
  year: string;
  description: string;
}

const cards: CardProps[] = [
  {
    id: "1",
    logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.43ce31da.png&w=640&q=75",
    year: "2015",
    description: "Company is founded",
  },
  {
    id: "2",
    logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.43ce31da.png&w=640&q=75",
    year: "2016",
    description: "Team expands globally",
  },
  {
    id: "3",
    logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.43ce31da.png&w=640&q=75",
    year: "2018",
    description: "Launch of core product",
  },
  {
    id: "4",
    logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.43ce31da.png&w=640&q=75",
    year: "2020",
    description: "Reached 1M users",
  },
  {
    id: "5",
    logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.43ce31da.png&w=640&q=75",
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
          {/* Arrow Buttons */}
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

          {/* Scroll Container */}
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
      className="group relative flex flex-col rounded-xl bg-[#edebe8] p-6 hover:border-transparent font-grotesque"
    >
      <div className="flex items-center justify-center py-24">
        <img src={item.logo} alt={item.description} height={136} width={136} />
      </div>
      <h3 className="text-sm font-light mb-1">{item.year}</h3>
      <p className="text-base text-black font-normal">{item.description}</p>
    </motion.article>
  );
};
