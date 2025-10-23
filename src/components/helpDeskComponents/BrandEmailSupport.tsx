"use client";

import { useState } from "react";
import BorderTopCard from "./BorderTopCard";
import { BrandEmailSupportProps } from "@/app/types/solution.type";

const BrandEmailSupport: React.FC<BrandEmailSupportProps> = ({
  cards = [
    {
      title: "Ensure every email is on-brand",
      description:
        "Support multiple email domains, assign logos and create custom signatures to ensure every customer email reflects your unique brand identity.",
      img: "/assets/highlight.webp",
    },
    {
      title: "Continue the conversation",
      description:
        "Move the conversation from live chat to email, and let customers pick up when it's most convenient to them.",
      img: "/assets/highlight.webp",
    },
    {
      title: "Track email performance",
      description:
        "Monitor performance metrics and customer satisfaction to maintain high CSAT for your email support.",
      img: "/assets/highlight.webp",
    },
  ],
  backgroundImage = "/assets/image30.webp",
  backgroundAlt = "Brand support",
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-col">
      <div className="w-full border-solid border-primary mx-auto relative bg-white-transparent">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={backgroundAlt}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
        <img src={cards[active]?.img} className="relative z-10" />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 py-6">
        {cards.map((item, index) => (
          <BorderTopCard
            key={index}
            active={index === active}
            {...item}
            onClick={() => {
              setActive(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandEmailSupport;
