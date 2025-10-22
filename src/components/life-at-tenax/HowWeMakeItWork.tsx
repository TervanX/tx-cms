"use client";
import { motion } from "framer-motion";
import Button from "../reusable/Button";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const HowWeMakeItWork = () => {
  return (
    <div className=" py-6 lg:py-10">
      <div className="w-full md:w-1/2 mx-auto mt-0 md:mt-15">
        <h4 className="text-3xl md:text-4xl lg:text-5xl text-center font-medium text-dark font-grotesque">
          How we make work, work{" "}
        </h4>
        <div className="flex flex-col items-center gap-2 mt-4">
          {" "}
          <p className="text-base text-dark font-normal text-center my-2 font-grotesque">
            We're remote-first where it makes sense and in-person where it
            matters.
          </p>
          <p className="text-base text-dark font-normal text-center my-2 font-grotesque">
            With clear expectations around communication and collaboration, and
            tools built for global teams, we make it easy to stay connected from
            anywhere.
          </p>
          <p className="text-base text-dark font-normal text-center my-2 font-grotesque">
            Here's a look at how (and where) we work today.
          </p>
        </div>
      </div>
      <CardShowcase />
    </div>
  );
};

export default HowWeMakeItWork;

interface CardProps {
  id: string;
  img: string;
  title: string;
  description: string;
}

const cards: CardProps[] = [
  {
    id: "1",
    img: "/assets/work.webp",
    title: "Remote (global)",
    description:
      "Our team spans 22 countries, so you can work where your feet are.",
  },
  {
    id: "1",
    img: "/assets/work.webp",
    title: "Remote (global)",
    description:
      "Our team spans 22 countries, so you can work where your feet are.",
  },
  {
    id: "1",
    img: "/assets/work.webp",
    title: "Remote (global)",
    description:
      "Our team spans 22 countries, so you can work where your feet are.",
  },
  {
    id: "1",
    img: "/assets/work.webp",
    title: "Remote (global)",
    description:
      "Our team spans 22 countries, so you can work where your feet are.",
  },
];

const CardShowcase: React.FC = () => {
  return (
    <div className="relative py-2 lg:py-12">
      <div className="mx-auto max-w-6xl lg:px-2">
        <div className="relative">
          <div
            className="grid grid-1 md:grid-2 items-center justify-center lg:grid-cols-4 gap-8 w-full  mx-auto "
            style={{ scrollPaddingLeft: 4, scrollPaddingRight: 4 }}
          >
            {cards.map((card, i) => (
              <div key={card.id + i} className="snap-start shrink-0">
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
    <div className="group relative flex flex-col overflow-hidden   font-grotesque bg-[#f7f5f2] rounded-lg p-6">
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-4">
          <img src={item.img} alt={item.title} className="rounded-lg" />
        </div>
        <h3 className="text-2xl font-medium text-start">{item.title}</h3>
        <p className="text-base font-light text-dark text-start">
          {item.description}
        </p>
      </div>
    </div>
  );
};
