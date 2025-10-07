import BorderTopCard from "./BorderTopCard";
import SubSection from "./Subsection";

const GlobalWhatsapp = () => {
  return (
    <div className="relative  w-[80%] mx-auto">
      <div className="">
        <SubSection
          title="Global support is just a WhatsApp away"
          tag="WhatsApp"
          description="Modernise your support and expand your reach on the world’s most popular messaging app."
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-14">
        <div className="flex-1 flex flex-col gap-2">
          <BorderTopCard />
          <BorderTopCard />
          <BorderTopCard />
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
            <img
              src="https://images.ctfassets.net/xny2w179f4ki/2v9i8vjuSOjVktQV0oIeLp/e9b3bbdf6b61476bb06f12e67b4bde90/I2Y2_-_Product_page_asset_-_Omnichannel_-_Media-image_-_01.webp?&q=90&w=2560"
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalWhatsapp;
