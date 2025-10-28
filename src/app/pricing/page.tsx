"use client";
import React, { useState } from "react";
import PricingPageHeader from "@/components/PricingComponents/PricingHeader";
import PricingSection from "@/components/PricingComponents/PricingCards";
import SalesPerform from "@/components/PricingComponents/SalesPerform";
import ComparePlan from "@/components/PricingComponents/ComparePlans";
import LogoGrid from "@/components/productComponents/LogoGrid";
import WhatAreCredits from "@/components/PricingComponents/WhatAreCredit";
import Busineses from "@/components/PricingComponents/Busineses";
import FAQAccordion from "@/components/StartupComponents/Faq";
import { pricingFAQData } from "@/components/PricingComponents/ComparePlans";

const PricingPage: React.FC = () => {
  const [isAnnualBilling, setIsAnnualBilling] = useState(true);

  return (
    <div className="p-0 lg:p-8">
      <div className="bg-white w-full px-4 lg:px-14 pt-12 pb-4 rounded-lg mt-12">
        <PricingPageHeader
          isAnnualBilling={isAnnualBilling}
          onBillingChange={setIsAnnualBilling}
        />
        <PricingSection
          isAnnualBilling={isAnnualBilling}
          onBillingChange={setIsAnnualBilling}
        />
        <p className="text-center text-lg text-dark/80 mt-8">The same world-class infrastructure that powers</p>
        <div
          className={`space-y-12 px-12 md:px-12 lg:px-112 xl:px-20 2xl:px-24 my-12`}
        >
          <div className={`flex flex-wrap items-center gap-8 justify-center`}>
            <img
              src="/assets/Stripe.png"
              alt="Stripe"
              height="20"
              className="h-10 filter invert-0 brightness-0" // Black
            />
            <img
              src="/assets/flutterwave.svg"
              alt="flutterwave"
              height="20"
              className="h-10 filter invert-0 brightness-0"
            />
            <img
              src="/assets/Checkbox.webp"
              alt="Checkbox"
              height="20"
              className="h-10 filter invert-0 brightness-0"
            />
            <img
              src="/assets/1200px-Paystack_Logo.png"
              alt="Paystack"
              height="20"
              className="h-10 filter invert-0 brightness-0"
            />
            <img
              src="/assets/fireblocks-logo.svg"
              alt="fireblocks"
              height="20"
              className="h-10 filter invert-0 brightness-0"
            />
          </div>
        </div>
        <p className="text-center text-lg text-dark/80 mt-8">
          now powers the TervanX Network — delivering secure,
          scalable, and intelligent financial systems built for
          Africa and beyond.
        </p>
      </div>
      <ComparePlan isAnnualBilling={isAnnualBilling} />
      {/* <div className="bg-white w-full px-4 lg:px-14  pb-4 rounded-lg mt-8">
        <SalesPerform />
      </div>
      <WhatAreCredits /> */}
      <Busineses />
      <FAQAccordion
        title="Frequently asked questions"
        faqData={pricingFAQData}
      />
    </div>
  );
};

export default PricingPage;