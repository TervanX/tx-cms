import { CallProps } from "@/app/types/solution.type";
import DottedLine from "./DottedBg";
import SubSection from "./Subsection";
import BorderTopCard from "./BorderTopCard";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  darcula,
  tomorrowNight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
const CallAndConversation: React.FC<CallProps> = ({
  backgroundImage = "/assets/image30.webp",
  image = "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560",
  primaryButton = {
    text: "Learn more",
    href: "/sign-up",
  },
  alignLeft = true,
  title = "Calls and conversations in one place",
  tag = "Phone",
  description = "Use phone calls, video calls, and screen sharing to troubleshootcustomer issues faster with modern, native phone support. Route, assign and automate calls with fully customizable, no-code IVR trees that shorten wait times and increase team productivity.",
  cards = [],
}) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <DottedLine />
      <div className="relative  w-[80%] mx-auto mt-8 lg:mt-14">
        <SubSection title={title} tag={tag} description={description} />
        <div className="flex flex-col lg:flex-row lg:gap-14">
          <div className="flex-1 flex flex-col gap-4">
            {cards?.map((item, index) => (
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
            <div className="flex items-center justify-center bg-[#1b1b1c] w-full rounded-lg pl-4 lg:pl-6">
              {cards && cards[active]?.code && (
                <SyntaxHighlighter
                  language={cards[active]?.language || "javascript"}
                  style={tomorrowNight}
                  className="rounded-lg text-sm w-full"
                  customStyle={{ background: "transparent" }}
                >
                  {cards[active]?.code}
                </SyntaxHighlighter>
              )}
            </div>
            {!cards[active]?.code && (
              <div className="w-full mx-auto relative bg-white-transparent">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={cards[active]?.backgroundImage}
                    alt={"Brand support"}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                </div>
                <img src={cards[active]?.img} className="relative z-10" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAndConversation;
