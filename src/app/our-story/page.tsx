import React from "react";
import PricingSection from "@/components/pricingComponents/PricingCards";
import SalesPerform from "@/components/pricingComponents/SalesPerform";
import ComparePlan from "@/components/pricingComponents/ComparePlans";
import Footer from "@/components/reusable/Footer";
import OurStoryHero from "@/components/ourStoryComponents/Hero";
import OurStory from "@/components/ourStoryComponents/OurStory";
import Employees from "@/components/ourStoryComponents/EmployeeSection";
import LeadersSection from "@/components/ourStoryComponents/Leaders";
import OurValue from "@/components/ourStoryComponents/OurValue";
import PositionSection from "@/components/ourStoryComponents/PositionComponent";
const OurStoryPage: React.FC = () => {
  return (
    <div className="p-0 lg:p-8">
      <div className="bg-white w-full px-4 lg:px-16 pt-12 pb-4 rounded-lg mt-16">
        <OurStoryHero />
        <OurStory />
        <Employees />
        <LeadersSection />
        <OurValue />
      </div>
      <PositionSection />
      <Footer />
    </div>
  );
};

export default OurStoryPage;
