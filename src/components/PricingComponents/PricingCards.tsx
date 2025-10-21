"use client";
import { Check, ChevronDown, Info } from "lucide-react";
import Button from "../reusable/Button";

const PricingSection = () => {
  return (
    <div>
      <PricingCards />
      <p className="text-base font-bold text-sand font-grotesque  text-center mt-8">
        Prices exclude any applicable taxes.
      </p>
    </div>
  );
};
export default PricingSection;

const PricingCards = () => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12">
      <PricingCard />
      <PricingCard mostPopular={true} />
      <PricingCard />
      <PricingCard />
    </div>
  );
};

interface PricingCardProps {
  mostPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ mostPopular }) => {
  return (
    <div
      className={` border-solid overflow-hidden ${
        mostPopular ? "border-black border-[2px]" : "border-gray-200 border"
      } rounded-xl font-medium `}
    >
      {mostPopular && (
        <p className="bg-black p-2 text-center font-grotesque text-white overflow-hidden text-sm">
          MOST POPULAR
        </p>
      )}

      <div className="flex flex-col  justify-between  min-h-[938px]">
        <div className="pt-8 lg:pt-[58px] pb-4 px-[18]">
          <div>
            <h3 className="text-xl  text-center font-grotesque">Free</h3>
            <p className="text-xs text-sand  text-center font-grotesque">
              Explore the Apollo platform to find leads, manage pipeline & close
              deals.
            </p>
          </div>
          <div className="mt-2">
            <h5 className="text-center text-3xl lg:text-[62px] font-grotesque my-8">
              $0
            </h5>
            <p className="text-xs text-dark  text-center font-grotesque">
              Explore the Apollo platform to find leads, manage pipeline & close
              deals.
            </p>
          </div>
          <div className="border-b border-t border-solid border-gray-300 mt-8 py-1 font-grotesque flex items-center justify-center">
            <p className="flex items-center  text-sm">
              <span className="font-semibold pr-[2px]">1,200</span>
              {"  credits per user / year "} <Info className="pl-2" />
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full mt-4">
            <Button
              size="lg"
              variant="primary"
              type="button"
              onClick={() => {}}
              children={"Get started"}
              className="py-4 text-3xl"
            />
          </div>
          <div className="w-full flex flex-col mt-8">
            <div className="flex items-center justify-start w-full gap-1 font-grotesque">
              <Check size={16} />
              <p className="text-xs text-dark   text-center">2 Sequences</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            size="md"
            variant="ghost"
            type="button"
            onClick={() => {}}
            icon={<ChevronDown size={14} />}
            children={"Show plan comparison"}
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
};
