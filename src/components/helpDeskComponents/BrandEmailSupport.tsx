import BorderTopCard from "./BorderTopCard";

const BrandEmailSupport = () => {
  return (
    <div>
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
          src="https://images.ctfassets.net/xny2w179f4ki/1Q8PUvFnuhUmnatXRiiGrh/6f391b62fa3d568945a0a9fd689f39ae/I2Y2_-_Product_page_asset_-_Omnichannel_-_Feature_highlight_-_01.webp?&q=90&w=2560"
          className="relative z-10"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 py-6">
        <BorderTopCard />
        <BorderTopCard />
        <BorderTopCard />
      </div>
    </div>
  );
};

export default BrandEmailSupport;
