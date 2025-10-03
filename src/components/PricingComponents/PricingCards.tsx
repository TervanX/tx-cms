"use client";
import { Check, ChevronDown, Info } from "lucide-react";
import Button from "../reusable/Button";

const PricingSection = () => {
  return (
    <div>
      <PricingCards />
      <p className="text-base font-semibold text-sand font-grotesk  text-center mt-8">
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
      <PricingCard />
      <PricingCard />
      <PricingCard />
    </div>
  );
};

const PricingCard = () => {
  return (
    <div className="pt-[58px] pb-4 px-[18] border-solid border-gray-200 border rounded-xl font-medium flex flex-col  justify-between font-grotesk min-h-[938px]">
      <div>
        {" "}
        <div>
          <h3 className="text-xl  text-center">Free</h3>
          <p className="text-xs text-sand font-grotesk  text-center">
            Explore the Apollo platform to find leads, manage pipeline & close
            deals.
          </p>
        </div>
        <div className="mt-2">
          <h5 className=" text-center text-[62px] font-grotesk">$0</h5>
          <p className="text-xs text-black font-grotesk  text-center">
            Explore the Apollo platform to find leads, manage pipeline & close
            deals.
          </p>
        </div>
        <div className=" border-b border-t border-solid border-gray-300 mt-8 py-1">
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
          <div className="flex items-center justify-start w-full gap-1">
            <Check size={16} />
            <p className="text-xs text-black font-grotesk  text-center">
              2 Sequences
            </p>
          </div>
        </div>
      </div>

      <div>
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
  );
};
