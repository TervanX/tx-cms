"use client";
import Button from "../reusable/Button";
import { useEffect, useRef, useState } from "react";

const LifeAtTenaxHero = () => {
  return (
    <div>
      {" "}
      <div className="py-4 flex flex-col gap-8">
        <div className="w-full md:w-2/3 lg:w-2/4 mx-auto flex flex-col gap-3">
          <h1 className="font-grotesque text-4xl lg:text-5xl font-medium text-center">
            Life at Apollo{" "}
          </h1>
          <p className="font-grotesque text-base   text-center">
            What&apos;s it like to work at a fast-paced, AI-first company? Here&apos;s a
            peek at how we work, grow, and support our people every step of the
            way.
          </p>
          <div className="flex items-center justify-center mb-8 mt-2">
            <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-900  font-medium px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px] text-base sm:text-lg">
              See all open positions
            </Button>
          </div>
        </div>
        <div className="">
          <img
            src="https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.39c4fd2b.jpg&w=750&q=75"
            className="w-full h-auto rounded-2xl"
            alt=""
          />
        </div>
      </div>
      <CardShowcase />
    </div>
  );
};

export default LifeAtTenaxHero;

interface CardProps {
  id: string;
  logo: React.ReactNode;
  title: string;
  description: string;
}

const cards: CardProps[] = [
  {
    id: "1",
    logo: (
      <>
        <svg
          width="32"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9422 16.1161L13.9362 13.1101C13.6635 13.4259 13.368 13.7213 13.0522 13.994L16.0583 17L16.9422 16.1161Z"
            fill="#1A1A1A"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.23024 7.06141C9.40177 6.76638 9.5 6.42347 9.5 6.05762C9.5 4.95305 8.60457 4.05762 7.5 4.05762C6.39543 4.05762 5.5 4.95305 5.5 6.05762C5.5 6.42347 5.59823 6.76638 5.76976 7.06141C4.95588 7.35922 4.375 8.14058 4.375 9.05762V10.0576H5.625V9.05762C5.625 8.57437 6.01675 8.18262 6.5 8.18262H8.5C8.98325 8.18262 9.375 8.57437 9.375 9.05762V10.0576H10.625V9.05762C10.625 8.14058 10.0441 7.35922 9.23024 7.06141ZM7.5 6.80762C7.91421 6.80762 8.25 6.47183 8.25 6.05762C8.25 5.6434 7.91421 5.30762 7.5 5.30762C7.08579 5.30762 6.75 5.6434 6.75 6.05762C6.75 6.47183 7.08579 6.80762 7.5 6.80762Z"
            fill="#1A1A1A"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 7.55762C14 11.1475 11.0899 14.0576 7.5 14.0576C3.91015 14.0576 1 11.1475 1 7.55762C1 3.96777 3.91015 1.05762 7.5 1.05762C11.0899 1.05762 14 3.96777 14 7.55762ZM12.75 7.55762C12.75 10.4571 10.3995 12.8076 7.5 12.8076C4.60051 12.8076 2.25 10.4571 2.25 7.55762C2.25 4.65812 4.60051 2.30762 7.5 2.30762C10.3995 2.30762 12.75 4.65812 12.75 7.55762Z"
            fill="#1A1A1A"
          ></path>
        </svg>
      </>
    ),
    title: "Be customer obsessed",
    description:
      "We earn trust by understanding our customers deeply and putting their success at the center of everything we do.",
  },
  {
    id: "1",
    logo: (
      <>
        <svg
          width="32"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9422 16.1161L13.9362 13.1101C13.6635 13.4259 13.368 13.7213 13.0522 13.994L16.0583 17L16.9422 16.1161Z"
            fill="#1A1A1A"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.23024 7.06141C9.40177 6.76638 9.5 6.42347 9.5 6.05762C9.5 4.95305 8.60457 4.05762 7.5 4.05762C6.39543 4.05762 5.5 4.95305 5.5 6.05762C5.5 6.42347 5.59823 6.76638 5.76976 7.06141C4.95588 7.35922 4.375 8.14058 4.375 9.05762V10.0576H5.625V9.05762C5.625 8.57437 6.01675 8.18262 6.5 8.18262H8.5C8.98325 8.18262 9.375 8.57437 9.375 9.05762V10.0576H10.625V9.05762C10.625 8.14058 10.0441 7.35922 9.23024 7.06141ZM7.5 6.80762C7.91421 6.80762 8.25 6.47183 8.25 6.05762C8.25 5.6434 7.91421 5.30762 7.5 5.30762C7.08579 5.30762 6.75 5.6434 6.75 6.05762C6.75 6.47183 7.08579 6.80762 7.5 6.80762Z"
            fill="#1A1A1A"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 7.55762C14 11.1475 11.0899 14.0576 7.5 14.0576C3.91015 14.0576 1 11.1475 1 7.55762C1 3.96777 3.91015 1.05762 7.5 1.05762C11.0899 1.05762 14 3.96777 14 7.55762ZM12.75 7.55762C12.75 10.4571 10.3995 12.8076 7.5 12.8076C4.60051 12.8076 2.25 10.4571 2.25 7.55762C2.25 4.65812 4.60051 2.30762 7.5 2.30762C10.3995 2.30762 12.75 4.65812 12.75 7.55762Z"
            fill="#1A1A1A"
          ></path>
        </svg>
      </>
    ),
    title: "Be customer obsessed",
    description:
      "We earn trust by understanding our customers deeply and putting their success at the center of everything we do.",
  },
  {
    id: "1",
    logo: (
      <>
        <svg
          width="32"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9422 16.1161L13.9362 13.1101C13.6635 13.4259 13.368 13.7213 13.0522 13.994L16.0583 17L16.9422 16.1161Z"
            fill="#1A1A1A"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.23024 7.06141C9.40177 6.76638 9.5 6.42347 9.5 6.05762C9.5 4.95305 8.60457 4.05762 7.5 4.05762C6.39543 4.05762 5.5 4.95305 5.5 6.05762C5.5 6.42347 5.59823 6.76638 5.76976 7.06141C4.95588 7.35922 4.375 8.14058 4.375 9.05762V10.0576H5.625V9.05762C5.625 8.57437 6.01675 8.18262 6.5 8.18262H8.5C8.98325 8.18262 9.375 8.57437 9.375 9.05762V10.0576H10.625V9.05762C10.625 8.14058 10.0441 7.35922 9.23024 7.06141ZM7.5 6.80762C7.91421 6.80762 8.25 6.47183 8.25 6.05762C8.25 5.6434 7.91421 5.30762 7.5 5.30762C7.08579 5.30762 6.75 5.6434 6.75 6.05762C6.75 6.47183 7.08579 6.80762 7.5 6.80762Z"
            fill="#1A1A1A"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 7.55762C14 11.1475 11.0899 14.0576 7.5 14.0576C3.91015 14.0576 1 11.1475 1 7.55762C1 3.96777 3.91015 1.05762 7.5 1.05762C11.0899 1.05762 14 3.96777 14 7.55762ZM12.75 7.55762C12.75 10.4571 10.3995 12.8076 7.5 12.8076C4.60051 12.8076 2.25 10.4571 2.25 7.55762C2.25 4.65812 4.60051 2.30762 7.5 2.30762C10.3995 2.30762 12.75 4.65812 12.75 7.55762Z"
            fill="#1A1A1A"
          ></path>
        </svg>
      </>
    ),
    title: "Be customer obsessed",
    description:
      "We earn trust by understanding our customers deeply and putting their success at the center of everything we do.",
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
    <div className="relative py-12 lg:py-14">
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="relative">
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            onScroll={onScroll}
            className="grid grid-1 md:grid-2 items-center justify-center lg:grid-cols-3 gap-8 w-full md:w-[90%] mx-auto "
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
    <div className="group relative flex flex-col overflow-hidden rounded-xl  py-2 lg:px-14 font-grotesque">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center">{item.logo}</div>
        <h3 className="text-2xl font-medium text-center">{item.title}</h3>
        <p className="text-base font-light text-dark text-center">
          {item.description}
        </p>
      </div>
    </div>
  );
};
