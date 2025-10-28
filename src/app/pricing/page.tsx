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
      <div className="bg-white w-full px-4 lg:px-14 pt-12 pb-4 rounded-lg mt-16">
        <PricingPageHeader
          isAnnualBilling={isAnnualBilling}
          onBillingChange={setIsAnnualBilling}
        />
        <PricingSection
          isAnnualBilling={isAnnualBilling}
          onBillingChange={setIsAnnualBilling}
        />
        <p className="text-center text-lg text-dark/80 mt-8">Millions of sellers at over 500,000 companies beat their number with Apollo</p>
        <LogoGrid backgroundColor='#ffffff' />
      </div>
      <ComparePlan isAnnualBilling={isAnnualBilling} />
      <div className="bg-white w-full px-4 lg:px-14  pb-4 rounded-lg mt-8">
        <SalesPerform />
      </div>
      <WhatAreCredits />
      <Busineses />
      <FAQAccordion
        title="Frequently asked questions"
        faqData={pricingFAQData}
      />
    </div>
  );
};

export default PricingPage;