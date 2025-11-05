"use client"
import React from "react";
import HeroSection from "@/components/StartupComponents/HeroSection";
import FeaturesSection from "@/components/StartupComponents/FeaturesSection";
import ProductSection from "@/components/StartupComponents/ProductSection";
import CtaBanner from "@/components/StartupComponents/Cta";

import { layerxData } from "./data";

export default function FintechBuilders() {
  return (
    <div className="w-full">
      <HeroSection {...layerxData.herodata} />
      <FeaturesSection {...layerxData.featuredata} />
      <ProductSection {...layerxData.productdata} />
      <CtaBanner {...layerxData.ctaBanner} />
    </div>
  );
}