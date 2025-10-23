'use client'

import React from "react";
import DottedLine from "./DottedBg";

interface InsightCard {
  step: string;
  title: string;
  description: string;
}

interface InsightCardsProps {
  data?: InsightCard[];
}

const InsightCards: React.FC<InsightCardsProps> = ({
  data = [
    {
      step: "01",
      title: "Get complete oversight",
      description: "Manage all your channels in a single workspace for total visibility into every conversation and touchpoint.",
    },
    {
      step: "02",
      title: "Real-time analytics",
      description: "Monitor all transactions and blockchain activity with live data feeds and comprehensive dashboards.",
    },
    {
      step: "03",
      title: "AI-powered insights",
      description: "Leverage machine learning to predict trends and optimize your crypto operations automatically.",
    },
  ]
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6">
      {data.map((card, index) => (
        <InsightCard {...card} key={index} />
      ))}
    </div>
  );
};

const InsightCard: React.FC<InsightCard> = ({ step, title, description }) => {
  return (
    <div className="flex flex-col justify-between border-solid border-gray border p-4 h-60 lg:h-70">
      <div className="flex flex-col gap-4">
        <h5 className="text-2xl md:text-5xl font-mono mb-4"> {step}</h5>
        <DottedLine fill="gray" />
      </div>

      <div className="flex flex-col gap-2 mt-1">
        <p className="font-grotesque text-sm font-semibold lg:text-lg text-left">
          {title}
        </p>
        <p className="font-grotesque text-sm lg:text-sm text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InsightCards;