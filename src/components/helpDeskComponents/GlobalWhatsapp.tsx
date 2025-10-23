import { useState } from "react";
import BorderTopCard from "./BorderTopCard";
import DottedLine from "./DottedBg";
import SubSection from "./Subsection";

interface CardItem {
  title: string;
  description: string;
  img: string;
}

interface GlobalWhatsappProps {
  cards?: CardItem[];
  backgroundImage?: string;
}

const GlobalWhatsapp: React.FC<GlobalWhatsappProps> = ({ cards = [
  {
    title: "Integrate all your accounts",
    description:
      "Connect and manage all of your WhatsApp business accounts in a single workspace, to ensure you never miss a message.",
    img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
  },
  {
    title: "Deliver context-rich support",
    description:
      "Send and receive images, attachments and more directly from the Inbox, so your support agents have all the context they need to resolve issues faster.",
    img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
  },

  {
    title: "Capture CSAT on WhatsApp",
    description:
      "Monitor how satisfied customers are with the support provided, and how it compares to your other channels.",
    img: "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
  },
], backgroundImage = "/assets/image30.webp" }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-8 lg:mt-14">
      <DottedLine />
      <div className="relative  w-[80%] mx-auto ">
        <div className="">
          <SubSection
            title="Global support is just a WhatsApp away"
            tag="WhatsApp"
            description="Modernise your support and expand your reach on the world’s most popular messaging app."
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-14">
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
                  src={backgroundImage}
                  alt={"Brand support"}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              </div>
              <img
                src="/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalWhatsapp;
