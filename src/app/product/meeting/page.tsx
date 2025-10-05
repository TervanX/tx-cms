import React from "react";
import PricingSection from "@/components/pricingComponents/PricingCards";
import SalesPerform from "@/components/pricingComponents/SalesPerform";
import ComparePlan from "@/components/pricingComponents/ComparePlans";
import Footer from "@/components/reusable/Footer";
import HeroSection from "@/components/meetingComponents/HeroSection";
import FeatureSections, {
  featuresData,
} from "@/components/meetingComponents/FeatureSection";
import StreamlineSection from "@/components/meetingComponents/StreamlineSection";
import SolutionSection from "@/components/meetingComponents/SolutionSection";
import CompetitorsSection from "@/components/meetingComponents/CompetitorsSection";
import PricingFAQAccordion from "@/components/pricingComponents/PricingFAQAccordion";

const PricingPage: React.FC = () => {
  return (
    <div>
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

      <Footer />
    </div>
  );
};

export default PricingPage;
