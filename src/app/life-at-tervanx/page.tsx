import React from "react";
import Footer from "@/components/reusable/Footer";

import LifeAtTenaxHero from "@/components/life-at-tenax/Hero";
import OurHiringProcess from "@/components/life-at-tenax/OurHiringProcess";
import TipsForSuccess from "@/components/life-at-tenax/TipsForSuccess";
import HowWeMakeItWork from "@/components/life-at-tenax/HowWeMakeItWork";
import PerksAndBenefits from "@/components/life-at-tenax/PerksAndBenefit";
import PositionSection from "@/components/life-at-tenax/PositionComponent";
const OurStoryPage: React.FC = () => {
  return (
    <div className="p-0 lg:p-8">
      <div className="bg-white w-full px-4 lg:px-10 pt-12 pb-4 rounded-tr-lg rounded-tl-lg mt-16">
        <LifeAtTenaxHero />
        <OurHiringProcess />
        <TipsForSuccess />
        <HowWeMakeItWork />
        <PerksAndBenefits />
      </div>
      <PositionSection />
    </div>
  );
};

export default OurStoryPage;
