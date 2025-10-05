"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../reusable/Button";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const OurHiringProcess = () => {
  return (
    <div className="border-solid border-primary">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h4 className="text-4xl md:text-4xl w-full lg:w-3/7 text-start font-medium text-dark font-grotesque mb-4 lg:mb-0">
          Our hiring process
        </h4>
        <p className="w-full lg:w-3/9 font-grotesque">
          No surprises here. We believe in a hiring process that's fair, human,
          and transparent. While it can vary by role, this overview gives you a
          sense of what most candidates can expect.
        </p>
      </div>
      <CardShowcase />
    </div>
  );
};

export default OurHiringProcess;

interface CardProps {
  tag: string;
  bg: string;
  stage: string;
  description: string;
}

const cards: CardProps[] = [
  {
    tag: "Stage 1",
    bg: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstage-1.083401ec.jpg&w=750&q=75",
    stage: "Skill assessment",
    description:
      "You'll meet with 2-4 team members in a series of 1:1 conversations. These help us get a well-rounded sense of your skills, working style, and culture fit.",
  },
  {
    tag: "Stage 2",
    bg: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstage-1.083401ec.jpg&w=750&q=75",
    stage: "Culture fit",
    description:
      "We’ll assess alignment with our mission, values, and approach to collaboration.",
  },
  {
    tag: "Stage 3",
    bg: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstage-1.083401ec.jpg&w=750&q=75",
    stage: "Technical challenge",
    description:
      "You’ll complete a brief task relevant to your role to show us how you approach real-world problems.",
  },
  {
    tag: "Stage 4",
    bg: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstage-1.083401ec.jpg&w=750&q=75",
    stage: "Final interview",
    description:
      "You’ll meet with leadership to discuss your growth, impact, and fit within the team.",
  },
];

const CardShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;
    if (!section || !horizontal) return;

    const totalScrollWidth = horizontal.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalScrollWidth - viewportWidth;

    gsap.to(horizontal, {
      x: () => `-${scrollDistance}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        pin: true,
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden py-20"
    >
      <div ref={horizontalRef} className="flex gap-6 h-full items-center px-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[70vw] sm:w-[40vw] md:w-[30vw]"
          >
            <Card item={card} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

const Card: React.FC<{ item: CardProps; index: number }> = ({ item }) => {
  return (
    <div
      className="
        group relative flex flex-col rounded-xl font-grotesque text-white aspect-auto sm:aspect-[3/4] min-h-[320px] sm:min-h-0 overflow-hidden
      "
    >
      <img
        src={item.bg}
        alt={item.stage}
        className="absolute top-0 left-0 w-full h-full object-cover -z-0"
      />
      <div className="flex flex-col justify-start gap-2 absolute top-0 left-0 w-full h-full p-8 bg-[rgba(0,0,0,0.3)] overflow-y-auto">
        <div>
          <h3 className="text-sm font-light mb-1">{item.tag}</h3>
          <h3 className="text-lg font-medium mb-1">{item.stage}</h3>
        </div>
        <p className="text-base font-normal">{item.description}</p>
      </div>
    </div>
  );
};
