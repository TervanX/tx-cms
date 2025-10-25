import {
  EngageCustomersProps,
  EngagementSestionCardProps,
} from "@/app/types/solution.type";
import Tag from "../helpDeskComponents/Tag";
import DottedLine from "./DottedLine";

const EngageCustomersSection = ({
  badgeText = "SMS and social media",
  title = "Engage customers on the apps they use everyday",
  columns = [
    {
      title: "Instagram",
      description:
        "Respond to Instagram DMs, story replies and mentions directly from Intercom, and interact with customers using rich multi-media, from emojis to images.",
      imageSrc:
        "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_01.webp?&q=90",
      imageAlt: "Instagram",
    },
    {
      title: "Facebook",
      description:
        "Route direct messages to the Inbox, so customers can reach out directly from Facebook for a seamless experience.",
      imageSrc:
        "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_02.webp?&q=90",
      imageAlt: "Facebook",
    },
    {
      title: "SMS",
      description:
        "Send and receive text messages from the Inbox in 45 languages, to enable real-time, conversational support with your customers.",
      imageSrc:
        "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Columned_media_-_03.webp?&q=90",
      imageAlt: "SMS",
    },
  ],
}: EngageCustomersProps) => {
  return (
    <div className="">
      <div
        className="flex flex-col gap-4 items-center justify-center px-3 md:px-4 my-28 w-full lg:max-w-[80%] mx-auto"
        id="engage-customers-on-the-apps-they-use-everyday"
      >
        <div className="w-full max-w-6xl">
          {/* Header Section */}
          <div className="scroll-mt-6 text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="  px-3 py-1 rounded-full text-sm font-medium">{
                badgeText &&
                <Tag tag={badgeText} />}
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900 max-w-2xl w-full mx-auto">
              {title}
            </h2>
          </div>

          {/* Columns Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {columns.map((column, index) => (
              <EngagementSestionCard column={column} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngageCustomersSection;

const EngagementSestionCard: React.FC<EngagementSestionCardProps> = ({
  column,
}) => {
  return (
    <div className="flex flex-col">
      {/* Image Container */}
      <div className="mb-4 overflow-hidden">
        <div className="relative w-full h-[400px]">
          <img
            alt={column.imageAlt}
            loading="lazy"
            className="object-cover w-full h-full"
            src={column.imageSrc}
            srcSet={`
                      ${column.imageSrc}&w=480 480w,
                      ${column.imageSrc}&w=640 640w,
                      ${column.imageSrc}&w=960 960w,
                      ${column.imageSrc}&w=1280 1280w,
                      ${column.imageSrc}&w=1512 1512w,
                      ${column.imageSrc}&w=1920 1920w,
                      ${column.imageSrc}&w=2560 2560w
                    `}
            sizes="(min-width: 1920px) 1920px, 100vw"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-2">
        <span className="text-lg font-sans font-bold text-gray-900">
          {column.title}
        </span>
        <span className="text-sm text-gray-600 font-sans leading-relaxed">
          {column.description}
        </span>
      </div>
    </div>
  );
};
