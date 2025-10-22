import { useState } from "react";
import BorderTopCard from "./BorderTopCard";
import DottedLine from "./DottedBg";
import SubSection from "./Subsection";

const LiveChat = () => {
  const [active, setActive] = useState(0);
  const cards = [
    {
      title: "Fully customizable",
      description:
        "Customize the Messenger to match your brand, wherever your customers are within your product, app, or website.",
      img: "/assets/highlight.webp",
    },
    {
      title: "Self-serve enabled",
      description:
        "Tailor the Messenger with self-serve apps that empower your customers to find help articles, read product updates, and more—without having to start a conversation.",
      img: "/assets/highlight.webp",
    },

    {
      title: "Multi-brand & multilingual",
      description:
        "Support multiple brands, resolve queries in 45 languages and deliver exceptional experiences within the Messenger—anytime, anywhere.",
      img: "/assets/highlight.webp",
    },
  ];
  return (
    <div className="">
      <DottedLine />
      <div className="relative  w-[80%] mx-auto ">
        <div className="">
          <SubSection
            title="Live chat with a best-in-class Messenger"
            tag="Messenger"
            description="Deliver live chat support that’s personalized, contextual, and on-brand across your product, app, and website."
          />
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:gap-14">
          <div className="flex-1 flex flex-col gap-4">
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
          <div className="flex flex-col lg:flex-row gap-6   flex-1 ">
            <div className="w-full mx-auto relative bg-white-transparent">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
