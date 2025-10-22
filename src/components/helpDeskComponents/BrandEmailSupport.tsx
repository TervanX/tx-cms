import { useState } from "react";
import BorderTopCard from "./BorderTopCard";

const BrandEmailSupport = () => {
  const [active, setActive] = useState(0);
  const cards = [
    {
      title: "Ensure every email is on-brand",
      description:
        "Support multiple email domains, assign logos and create custom signatures to ensure every customer email reflects your unique brand identity.",
      img: "/assets/highlight.webp",
    },
    {
      title: "Continue the conversation",
      description:
        "Move the conversation from live chat to email, and let customers pick up when it’s most convenient to them.",
      img: "/assets/highlight.webp",
    },

    {
      title: "Track email performance",
      description:
        "Monitor performance metrics and customer satisfaction to maintain high CSAT for your email support.",
      img: "/assets/highlight.webp",
    },
  ];
  return (
    <div className="flex flex-col-reverse lg:flex-col">
      <div className="w-full  border-solid border-primary mx-auto relative bg-white-transparent">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/image30.webp"
            alt={"Brand support"}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
        <img src={cards[active]?.img} className="relative z-10" />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 py-6">
        {cards.map((item, index) => (
          <BorderTopCard
            active={index === active ? true : false}
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
