import React from "react";
import PricingSection from "@/components/PricingComponents/PricingCards";
import SalesPerform from "@/components/PricingComponents/SalesPerform";
import ComparePlan from "@/components/PricingComponents/ComparePlans";
import Footer from "@/components/reusable/Footer";
import HeroSection from "@/components/MeetingComponents/HeroSection";
import FeatureSections, {
  featuresData,
} from "@/components/MeetingComponents/FeatureSection";
import StreamlineSection from "@/components/MeetingComponents/StreamlineSection";
import PricingFAQAccordion from "@/components/PricingComponents/PricingFAQAccordion";

const PricingPage: React.FC = () => {
  return (
    <div>
      <div className="bg-white w-full  pt-12">
        <HeroSection />
        <FeatureSections features={featuresData} />
        <StreamlineSection />
        <div className="mx-6">
          <PricingFAQAccordion />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PricingPage;
