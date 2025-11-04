"use client"
import React from "react";
import HeroSection from "@/components/StartupComponents/HeroSection";
import FeaturesSection from "@/components/StartupComponents/FeaturesSection";
import ProductSection from "@/components/StartupComponents/ProductSection";
import CtaBanner from "@/components/StartupComponents/Cta";

import { tervanxData } from "./data";

export default function FintechBuilders() {
  return (
    <div className="w-full">
      <HeroSection {...tervanxData.herodata} />
      <FeaturesSection {...tervanxData.featuredata} />
      <ProductSection {...tervanxData.productdata} />
      <CtaBanner {...tervanxData.ctaBanner} />
    </div>
  );
}