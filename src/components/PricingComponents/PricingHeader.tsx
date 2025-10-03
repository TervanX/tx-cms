import SubcriptionSwitch from "./SubscriptionSwitch";

const PricingPageHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
      <h1 className="font-grotesk text-[32px] lg:text-[48px] font-semibold  text-center lg:text-start">
        Everything you need to grow your business
      </h1>
      <div>
        <h4 className="font-grotesk text-[18px] font-medium  text-center lg:text-start">
          Build pipeline, close more deals, and enrich data with
          industry-leading B2B data and AI-powered tools.
        </h4>
        <div className="flex justify-center lg:justify-start">
          <SubcriptionSwitch />
        </div>
      </div>
    </div>
  );
};

export default PricingPageHeader;
