import React from "react";
import DottedLine from "./DottedBg";

const InsightCards = () => {
  const data = [
    {
      step: "01",
      title: "Get complete oversight",
      description:
        "Manage all your channels in a single workspace for total visibility into every conversation and touchpoint.",
    },
    {
      step: "01",
      title: "Get complete oversight",
      description:
        "Manage all your channels in a single workspace for total visibility into every conversation and touchpoint.",
    },
    {
      step: "01",
      title: "Get complete oversight",
      description:
        "Manage all your channels in a single workspace for total visibility into every conversation and touchpoint.",
    },
  ];

  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 items-center justify-between gap-8 ">
      {data.map((card, index) => (
        <InsightCard {...card} key={index} />
      ))}
    </div>
  );
};

interface InsightCard {
  step: string;
  title: string;
  description: string;
}

export default InsightCards;
const InsightCard: React.FC<InsightCard> = ({ step, title, description }) => {
  return (
    <div className="border-solid border-black border p-6">
      <div>
        <h5 className="text-xl md:text-5xl"> {step}</h5>
      </div>
      <DottedLine />
      <div className="flex flex-col gap-2 mt-1">
        <p className="font-grotesque text-sm font-medium lg:text-lg  text-left">
          {title}
        </p>
        <p className="font-grotesque text-xs lg:text-sm  text-left">
          {description}
        </p>
      </div>
    </div>
  );
};
