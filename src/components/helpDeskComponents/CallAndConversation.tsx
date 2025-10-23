import DottedLine from "./DottedBg";
import SubSection from "./Subsection";
interface CallProps {
  image?: string;
  backgroundImage?: string;
}
const CallAndConversation: React.FC<CallProps> = ({ backgroundImage = "/assets/image30.webp", image = "/assets/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560" }) => {
  return (
    <div>
      <DottedLine />

      <div className="relative  w-[80%] mx-auto mt-8 lg:mt-14">
        <div className="flex flex-col lg:flex-row lg:gap-14">
          <div className="flex-1">
            <SubSection
              primaryButton={{
                text: "Learn more",
                href: "/sign-up",
              }}
              alignLeft
              title="Calls and conversations in one place"
              tag="Phone"
              description="Use phone calls, video calls, and screen sharing to troubleshootcustomer issues faster with modern, native phone support. Route, assign and automate calls with fully customizable, no-code IVR trees that shorten wait times and increase team productivity."
            />
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
                src={image}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAndConversation;
