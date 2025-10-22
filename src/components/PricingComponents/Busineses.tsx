import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import Button from "../reusable/Button";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { Person } from "@/app/types/pricing.types";


const Busineses: React.FC = () => {
  return (
    <div className="px-4">
      <Header />
      <PeopleShowcase />
    </div>
  );
};

export default Busineses;

const Header: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-32">
      <div className="flex-1 ">
        <div className="w-full lg:w-[70%] flex flex-col justify-start lg:gap-4">
          <h1 className="font-grotesque text-2xl lg:text-4xl font-medium text-left  leading-9 pr-6">
            The fastest growing businesses use Apollo
          </h1>
          <p className="font-grotesque text-sm text-dark mt-2 text-left  w-[90%]">
            Over 500,000 companies use Apollo to stay ahead of the competition.
          </p>
        </div>
      </div>
      <div className="flex-1 flex  items-center justify-end">
        <p className="font-grotesque text-[96px] lg:text-[146px] font-medium text-[#3f3653]  text-center lg:text-start leading-[174px]">
          500K+
        </p>
      </div>
    </div>
  );
};

const people: Person[] = [
  {
    tag: "SALES  LEADERS",
    name: "Nicole Coetzer",
    role: "Head of Sales Development",
    company: "Kinsta",
    avatar:
      "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
    logoText: "kinsta",
    longCopy:
      "As Kinsta's first Head of Sales Development, Nicole Coetzer was tasked with building outbound sales from scratch. Using Apollo to find the right leads in less time, her growing team hit a consistent 36% connection rate, helping them exceed quota every single month.",
  },
  {
    tag: "SALES  LEADERS",
    name: "Nicole Coetzer",
    role: "Head of Sales Development",
    company: "Kinsta",
    avatar:
      "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
    logoText: "kinsta",
    longCopy:
      "As Kinsta's first Head of Sales Development, Nicole Coetzer was tasked with building outbound sales from scratch. Using Apollo to find the right leads in less time, her growing team hit a consistent 36% connection rate, helping them exceed quota every single month.",
  },
  {
    tag: "SALES  LEADERS",
    name: "Nicole Coetzer",
    role: "Head of Sales Development",
    company: "Kinsta",
    avatar:
      "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
    logoText: "kinsta",
    longCopy:
      "As Kinsta's first Head of Sales Development, Nicole Coetzer was tasked with building outbound sales from scratch. Using Apollo to find the right leads in less time, her growing team hit a consistent 36% connection rate, helping them exceed quota every single month.",
  },
  {
    tag: "ACCOUNT  EXECS",
    name: "Diego Cobian",
    role: "Account Executive",
    company: "Arbolus",
    avatar:
      "https://www.apollo.io/_next/image?url=%2F_next%2Fstat doic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
    logoText: "arbolus",
    longCopy:
      "As Kinsta's first Head of Sales Development, Nicole Coetzer was tasked with building outbound sales from scratch. Using Apollo to find the right leads in less time, her growing team hit a consistent 36% connection rate, helping them exceed quota every single month.",
  },
  {
    tag: "SDRS",
    name: "Andrew Froning",
    role: "BDR Leader",
    company: "Cyera",
    avatar:
      "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
    logoText: "CYERA",
    longCopy:
      "As Kinsta's first Head of Sales Development, Nicole Coetzer was tasked with building outbound sales from scratch. Using Apollo to find the right leads in less time, her growing team hit a consistent 36% connection rate, helping them exceed quota every single month.",
  },
];

const overlayVariants: Variants = {
  rest: { height: "0%", transition: { type: "tween", duration: 0.35 } },
  hover: { height: "100%", transition: { type: "tween", duration: 0.45 } },
};

const scrollerVariants: Variants = {
  rest: { y: "20%", opacity: 0 },
  hover: { y: "0%", opacity: 1, transition: { duration: 0.45 } },
};

const fillFromBottomVariants: Variants = {
  rest: { y: "100%" },
  hover: {
    y: "0%",
    transition: { duration: 0.45, ease: [0.1, 0.4, 0.1, 0.5] },
  },
};

const Card: React.FC<{ p: Person; index: number }> = ({ p, index }) => {
  const isFirst = index === 0;

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative flex flex-col rounded-br-xl border-r border-b border-gray-300 px-0 lg:px-6 pt-10 pb-8 hover:border-transparent"
    >
      <div className="text-xs text-gray-500 mb-6 font-normal font-grotesk">
        {p.tag}
      </div>

      <div className="h-44 w-44 rounded-xl overflow-hidden mb-6">
        <img src={p.avatar} alt={p.name} className="w-[194px] h-auto rounded" />
      </div>
      <div className="absolute bottom-[-40px] left-0 w-[100px] h-[50px] bg-white "></div>
      <h3 className="text-2xl font-medium mb-1 font-grotesk">{p.name}</h3>
      <p className="text-xs text-gray-500 font-normal font-grotesk">{p.role}</p>
      <p className="text-xs text-gray-500 font-normal font-grotesk">
        @ {p.company}
      </p>

      <motion.div
        variants={overlayVariants}
        className="absolute inset-x-0 bottom-0 overflow-hidden bg-gray-100 bg-opacity-95 rounded-xl"
      >
        <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-gray-100 to-transparent" />

        <motion.div
          variants={isFirst ? fillFromBottomVariants : scrollerVariants}
          className="max-h-full p-6 pt-8 overflow-y-auto scrollbar-hide"
        >
          <h4 className="text-xs text-gray-500 mb-6 font-normal font-grotesk">
            ABOUT
          </h4>
          <p className="text-base text-dark mb-6 font-medium font-grotesque">
            {p.longCopy}
          </p>

          <div className=" mt-8">
            <h1 className="font-medium text-[36px] lg:text-[38px] font-grotesk">
              36%
            </h1>
            <div className="text-xs text-gray-500 mb-6 font-normal font-grotesk">
              More meeting booked
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

const PeopleShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [cardW, setCardW] = useState<number>(360);
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
    <div className="relative py-8 lg:py-12">
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="relative">
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            onScroll={onScroll}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 scrollbar-hide"
            style={{ scrollPaddingLeft: 4, scrollPaddingRight: 4 }}
          >
            {people.map((p, i) => (
              <div
                key={p.name + i}
                ref={i === 0 ? firstCardRef : null}
                className="snap-start shrink-0 w-[86%] sm:w-[320px] md:w-[340px] lg:w-[360px]"
              >
                <Card p={p} index={i} />
              </div>
            ))}
            <div className="shrink-0 w-2" />
          </div>

          <div className="flex items-center justify-end w-full gap-4 mt-6">
            <Button
              size="md"
              variant="outline"
              type="button"
              onClick={() => scrollByOne(-1)}
              disabled={!canLeft}
              className={`w-10 ${!canLeft ? "opacity-50 cursor-not-allowed" : ""
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
              className={`w-10 ${!canRight ? "opacity-50 cursor-not-allowed" : ""
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
