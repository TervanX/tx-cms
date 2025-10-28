// src/app/components/ContentLayout/sections/FeaturesSection.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Feature {
  id: string;
  name: string;
  href: string;
  description: string;
  image: string;
}

interface FeaturesSectionProps {
  title?: string;
  features: Feature[];
  defaultActiveFeature?: string;
  sectionStyle?: {
    backgroundColor?: string;
  };
  linkStyle?: {
    text?: string;
  };
  animationConfig?: {
    margin?: any;
  };
}

export default function FeaturesSection({
  title = "Features",
  features,
  defaultActiveFeature,
  sectionStyle = { backgroundColor: "var(--color-cream)" },
  linkStyle = { text: "Find out more" },
  animationConfig = { margin: "-100px" },
}: FeaturesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: animationConfig.margin,
  });
  const [activeFeature, setActiveFeature] = useState(
    defaultActiveFeature || features[0]?.id
  );
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const activeFeatureData =
    features.find((feature) => feature.id === activeFeature) || features[0];

  const handleImageError = (imageSrc: string) => {
    console.error(`Failed to load image: ${imageSrc}`);
    setImageErrors((prev) => new Set(prev).add(imageSrc));
  };

  const ImageDisplay = ({ className = "" }) => {
    const isImageError = imageErrors.has(activeFeatureData.image);

    return (
      <div
        className={`relative aspect-square bg-gray-100 rounded-lg ${className}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            className="absolute inset-0 overflow-hidden rounded-lg"
          >
            {!isImageError ? (
              <img
                alt={activeFeatureData.name}
                src={activeFeatureData.image}
                className="w-full h-full object-cover"
                onError={() => handleImageError(activeFeatureData.image)}
                onLoad={() =>
                  console.log(
                    `✅ Loaded: ${activeFeatureData.name} - ${activeFeatureData.image}`
                  )
                }
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 text-gray-500 p-4">
                <div className="text-sm font-medium">Image not available</div>
                <div className="text-xs mt-2 text-center">
                  {activeFeatureData.name}
                </div>
                <div className="text-xs mt-1 opacity-70">
                  {activeFeatureData.image}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className="@container scroll-mt-[74px] md:my-0 md:scroll-mt-[-40px] md:pt-8 xl:scroll-mt-[-100px]"
      data-bgcolor={sectionStyle.backgroundColor}
      id="features"
      data-slugify="id"
    >
      <section className="relative isolate mt-16 mb-2 md:mt-12 md:mb-0 xl:mt-25">
        <h2 className="mx-4 mb-4 border-b border-black/20 pb-2 text-xs leading-[135%] tracking-[1.2px] uppercase md:hidden">
          {title}
        </h2>

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-4 md:gap-16 md:px-8 lg:px-12 2xl:gap-20">
          {/* <div className="sticky top-25 hidden lg:block">
            <div className="space-y-4">
              <ImageDisplay className="w-full" />

              <p className="text-lg leading-[135%] text-black/60">
                {activeFeatureData.description}
              </p>

              <a
                className="font-sans relative cursor-pointer bg-gradient-to-r from-current to-current bg-no-repeat bg-[size:100%_0.05em] bg-[position:0%_100%] [transition:background-size_0.2s_ease-out] hover:bg-[size:0%_0.05em] hover:bg-[position:100%_100%] inline-block pb-1 leading-[95%] font-semibold tracking-[-0.16px] text-black"
                href="#"
              >
                {linkStyle.text}
              </a>
            </div>
          </div> */}

          {/* Features List */}
          <div className="w-full text-center ">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="w-full border-b border-[#00000033] py-3 xl:py-3.5 group"
                onMouseEnter={() => setActiveFeature(feature.id)}
                onFocus={() => setActiveFeature(feature.id)}
              >
                <div
                  className="flex w-full items-start justify-between cursor-pointer"
                >
                  <h3
                    className={`font-medium-ll mr-4 text-[42px] leading-[95%] font-[600] tracking-[-2.56px] lg:text-[48px] xl:text-[52px] [@media(min-width:1450px)]:text-[64px] transition-colors duration-300 group-hover:text-black ${activeFeature === feature.id
                      ? "text-black"
                      : "text-[#00000033]"
                      }`}
                  >
                    {feature.name}
                  </h3>
                  <ArrowUpRight
                    className={`mt-3 h-7 w-7 xl:mt-3 xl:h-9 xl:w-9 [@media(min-width:1450px)]:mt-4 transition-all duration-300 ${activeFeature === feature.id
                      ? "fill-black opacity-100"
                      : "fill-transparent opacity-0"
                      }`}
                  />
                </div>
              </motion.div>
            ))}

            {/* Mobile Image */}
            {/* <div className="sticky bottom-3 z-10 mt-9 lg:hidden">
              <ImageDisplay className="w-full max-w-[240px]" />
            </div> */}
          </div>
        </div>
      </section>
    </section>
  );
}
