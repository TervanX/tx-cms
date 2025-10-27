// components/PricingComponents/SubscriptionSwitch.tsx
import Button from "../reusable/Button";

interface SubscriptionSwitchProps {
  isAnnualBilling: boolean;
  onBillingChange: (isAnnual: boolean) => void;
}

const SubscriptionSwitch: React.FC<SubscriptionSwitchProps> = ({
  isAnnualBilling,
  onBillingChange
}) => {
  return (
    <div className="inline-block mt-6">
      <ul className="m-0 flex w-max gap-1 rounded-full border border-gray-200 p-1 bg-white">
        {/* Annual Billing */}
        <li className="list-none">
          <button
            type="button"
            onClick={() => onBillingChange(true)}
            className={`group transition-all h-10 px-4 relative rounded-full outline-none focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black ${isAnnualBilling
              ? "bg-black text-white"
              : "bg-transparent text-gray-500 hover:bg-gray-100"
              }`}
          >
            <span className="antialiased text-sm leading-[130%] font-bold tracking-normal group-hover:text-white">
              Annual billing
            </span>
            {isAnnualBilling && (
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 bg-yellow1 text-black text-xs uppercase font-mono font-bold px-2 py-1 rounded-md whitespace-nowrap">
                Save 20%
              </span>
            )}
          </button>
        </li>

        {/* Monthly Billing */}
        <li className="list-none">
          <button
            type="button"
            onClick={() => onBillingChange(false)}
            className={`group transition-all h-10 px-4 rounded-full outline-none focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black ${!isAnnualBilling
              ? "bg-black text-white"
              : "bg-transparent text-gray-500 hover:bg-gray-100"
              }`}
          >
            <span className="antialiased text-sm leading-[130%] font-bold tracking-normal group-hover:text-white">
              Monthly billing
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SubscriptionSwitch;