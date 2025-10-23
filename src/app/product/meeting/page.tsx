import React from "react";

import PricingFAQAccordion from "@/components/PricingComponents/PricingFAQAccordion";
import HeroSection from "@/components/meetingComponents/HeroSection";
import FeatureSections, {
  featuresData,
} from "@/components/meetingComponents/FeatureSection";
import SolutionSection from "@/components/meetingComponents/SolutionSection";
import StreamlineSection from "@/components/meetingComponents/StreamlineSection";
import CompetitorsSection from "@/components/meetingComponents/CompetitorsSection";

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white w-full  pt-12">
      <HeroSection />
      <FeatureSections features={featuresData} />
      <SolutionSection />
      <StreamlineSection />
      <CompetitorsSection />
      <div className="mx-6">
        <PricingFAQAccordion />
      </div>
    </div>
  );
};

export default PricingPage;
