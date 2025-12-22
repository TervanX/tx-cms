import React from "react";
import PricingFAQAccordion from "@/components/PricingComponents/PricingFAQAccordion";
import HeroSection from "@/components/MeetingComponents/HeroSection";
import FeatureSections, {
  featuresData
} from "@/components/MeetingComponents/FeatureSection";
import SolutionSection from "@/components/MeetingComponents/SolutionSection";
import StreamlineSection from "@/components/MeetingComponents/StreamlineSection";
import CompetitorsSection from "@/components/MeetingComponents/CompetitorsSection";

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
