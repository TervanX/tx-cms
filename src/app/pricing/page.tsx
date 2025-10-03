import React from "react";
import HeroSection from "@/components/productComponents/HeroSection";
import PricingPageHeader from "@/components/PricingComponents/PricingHeader";
import PricingSection from "@/components/PricingComponents/PricingCards";
import SalesPerform from "@/components/PricingComponents/SalesPerform";
import ComparePlan from "@/components/PricingComponents/ComparePlans";
import Footer from "@/components/reusable/Footer";
import FAQAccordion from "@/components/reusable/Faq";
import PricingFAQAccordion from "@/components/PricingComponents/PricingFAQAccordion";
const PricingPage: React.FC = () => {
  return (
    <div className="p-0 lg:p-8">
      <div className="bg-white w-full px-4 lg:px-14 pt-12 pb-4 rounded-lg mt-16">
        <PricingPageHeader />
        <PricingSection />
      </div>

      <div className="bg-white w-full px-4 lg:px-14 pt-12 pb-4 rounded-lg mt-8">
        <SalesPerform />
      </div>

      <ComparePlan />
      <Footer />
    </div>
  );
};

export default PricingPage;
