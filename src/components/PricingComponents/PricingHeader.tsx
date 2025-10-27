import SubcriptionSwitch from "./SubscriptionSwitch";

interface PricingPageHeaderProps {
  isAnnualBilling: boolean;
  onBillingChange: (isAnnual: boolean) => void;
}

const PricingPageHeader: React.FC<PricingPageHeaderProps> = ({
  isAnnualBilling,
  onBillingChange
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-22">
      <h1 className="text-3xl lg:text-6xl font-medium text-center lg:text-start">
        The all-in-one platform to grow your business
      </h1>
      <div>
        <h4 className="text-lg text-xl font-medium text-center lg:text-start">
          Build pipeline smarter, close deals faster, and unify your tech stack with an AI-powered platform.
        </h4>
        <div className="flex justify-center lg:justify-start">
          <SubcriptionSwitch
            isAnnualBilling={isAnnualBilling}
            onBillingChange={onBillingChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPageHeader;