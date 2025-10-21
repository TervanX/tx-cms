"use client";
import { useEffect, useRef, useState } from "react";

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
    id: "1",
    logo: "https://www.apollo.io/_next/static/media/pipeline_builder_icon.e6b3fd21.svg",
    title: "Pipeline Builder",
    description:
      "Build pipeline faster with better data, smarter AI, and easier automation.",
  },
  {
    id: "1",
    logo: "https://www.apollo.io/_next/static/media/pipeline_builder_icon.e6b3fd21.svg",
    title: "Pipeline Builder",
    description:
      "Build pipeline faster with better data, smarter AI, and easier automation.",
  },
  {
    id: "1",
    logo: "https://www.apollo.io/_next/static/media/pipeline_builder_icon.e6b3fd21.svg",
    title: "Pipeline Builder",
    description:
      "Build pipeline faster with better data, smarter AI, and easier automation.",
  },
];

const CardShowcase: React.FC = () => {
  return (
    <div className="relative py-2 lg:py-12 z-40">
      <div className="bg-white my-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-dark md:leading-[110px]  px-4 mb-0 text-center font-grotesque">
          Everything you need
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-dark md:leading-[110px]  px-4 mt-[-2.5rem] text-center font-grotesque">
          to sell, scale, and succeed
        </h1>
      </div>
      <div className="mx-auto max-w-6xl lg:px-2 bg-white">
        <div className="relative">
          <div className="grid  items-center justify-center lg:grid-cols-4 gap-4 w-full  ">
            {cards.map((card, i) => (
              <div key={card.id + i} className="w-full">
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
    <div className="group relative flex flex-col overflow-hidden rounded-lg py-10 px-8 font-grotesque bg-[#f7f5f2]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center">
          <img src={item.logo} />
        </div>
        <h3 className="text-xl font-medium text-center font-grotesque">
          {item.title}
        </h3>
        <p className="text-xs font-light text-black text-center font-grotesque">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default CardShowcase;
