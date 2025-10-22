"use client";
import { useEffect, useRef } from "react";

interface CardProps {
  id: string;
  logo: string;
  title: string;
  description: string;
}

const cards: CardProps[] = [
  {
    id: "1",
    logo: "https://www.apollo.io/_next/static/media/pipeline_builder_icon.e6b3fd21.svg",
    title: "Pipeline Builder",
    description:
      "Build pipeline faster with better data, smarter AI, and easier automation.",
  },
  {
    id: "2",
    logo: "https://www.apollo.io/_next/static/media/pipeline_builder_icon.e6b3fd21.svg",
    title: "Sales Engagement",
    description:
      "Engage prospects across multiple channels efficiently and intelligently.",
  },
  {
    id: "3",
    logo: "https://www.apollo.io/_next/static/media/pipeline_builder_icon.e6b3fd21.svg",
    title: "Analytics Suite",
    description:
      "Track every deal and optimize your strategy with in-depth analytics.",
  },
  {
    id: "4",
    logo: "https://www.apollo.io/_next/static/media/pipeline_builder_icon.e6b3fd21.svg",
    title: "Automation Engine",
    description:
      "Automate your workflows from lead to close with minimal effort.",
  },
];

const CardShowcase: React.FC = () => {
  return (
    <div className="relative py-2 lg:py-12 z-40 bg-white">
      <div className="bg-white my-28">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-dark text-center font-grotesque">
          Everything you need
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-dark -mt-4 text-center font-grotesque">
          to sell, scale, and succeed
        </h1>
      </div>

      <div className="mx-auto max-w-6xl lg:px-2 bg-white relative">
        <div className="grid lg:grid-cols-4 gap-4 items-center justify-center">
          {cards.map((card, i) => (
            <div key={card.id} className="w-full relative">
              <Card item={card} index={i} />
              {/* ✅ indicator element that will be positioned below each card */}
              <div
                id={`below-${card.id}`}
                className="absolute w-12 h-2 bg-blue-500 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  id: string;
  logo: string;
  title: string;
  description: string;
  index?: number;
}

const Card: React.FC<{ item: CardProps; index: number }> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const positionIndicator = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      const top = rect.top + scrollTop;
      const bottom = rect.bottom + scrollTop;
      const left = rect.left + scrollLeft;

      const indicator = document.querySelector<HTMLDivElement>(
        `#below-${item.id}`
      );
      if (indicator) {
        indicator.style.position = "absolute";
        indicator.style.top = `${bottom}px`;
        indicator.style.left = `${left + rect.width / 2 - 24}px`; // center it
      }
    };

    positionIndicator();

    window.addEventListener("scroll", positionIndicator);
    window.addEventListener("resize", positionIndicator);

    return () => {
      window.removeEventListener("scroll", positionIndicator);
      window.removeEventListener("resize", positionIndicator);
    };
  }, [item.id, item.title]);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col overflow-hidden rounded-lg py-10 px-8 font-grotesque bg-[#f7f5f2]  transition-all"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center">
          <img src={item.logo} alt={item.title} className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-medium text-center font-grotesque">
          {item.title}
        </h3>
        <p className="text-sm font-light text-black text-center font-grotesque">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default CardShowcase;
