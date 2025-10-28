"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Feature {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  companyLogo?: string;
  image: {
    src: string;
    alt: string;
  };
}

interface ProductivitySectionProps {
  heading: {
    main: string;
    highlighted: string;
  };
  description: string;
  images: {
    mobile: {
      src: string;
      alt: string;
    };
    desktop: {
      src: string;
      alt: string;
    };
    product: {
      src: string;
      alt: string;
    };
  };
  features: Feature[];
  testimonial: Testimonial;
  animationConfig?: {
    margin?: any;
  };
}

export default function ProductivitySection({
  heading,
  description,
  images,
  features,
  testimonial,
  animationConfig = { margin: "-100px" },
}: ProductivitySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: animationConfig.margin,
  });

  return (
    <section
      ref={ref}
      className="@container scroll-mt-[72px] md:my-0 md:scroll-mt-[88px] md:rounded-md lg:scroll-mt-[84px]"
      data-bgcolor="white"
      id="productivity"
      data-slugify="id"
    >
      <div className="flex flex-col gap-12">
        {/* Header Section */}
        <div>
          <div className="relative z-[1] w-full px-3 md:px-0 xl:flex xl:items-end xl:justify-between">
            <div className="flex w-full flex-col gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
                className="max-w-[300px] pt-12 text-[2.5rem] leading-[95%] font-semibold tracking-[-0.1rem] text-balance md:max-w-[480px] md:pt-0 lg:flex lg:max-w-none lg:flex-col lg:text-6xl xl:text-[5rem] xl:tracking-[-0.25rem] xl:text-nowrap"
              >
                {heading.main}{" "}
                <span className="lg:mx-auto xl:block 2xl:whitespace-nowrap">
                  {heading.highlighted}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mr-auto max-w-[480px] text-lg leading-[135%] text-black/80"
              >
                {description}
              </motion.p>
            </div>

            {/* Mobile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="overflow-hidden bg-cover relative block mt-6 rounded-md md:hidden"
            >
              <img
                alt={images.mobile.alt}
                src={images.mobile.src}
                className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
              />
            </motion.div>
          </div>

          {/* Desktop Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="overflow-hidden bg-cover relative mt-6 hidden md:block md:rounded-md lg:mt-8"
          >
            <img
              alt={images.desktop.alt}
              src={images.desktop.src}
              className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
            />
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="px-3 md:p-0">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="overflow-hidden bg-cover relative block w-full rounded-[10px] bg-[#E7E6DF]"
          >
            <img
              alt={images.product.alt}
              src={images.product.src}
              className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
            />
          </motion.div> */}

          <div className="flex flex-col divide-y divide-black/10 @2xl:mt-6 @2xl:flex-row @2xl:justify-between @2xl:gap-6 @2xl:divide-y-0">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex w-full max-w-[316px] flex-1 flex-col items-start py-4 text-black last:pb-0 lg:max-w-[390px] @2xl:py-0"
              >
                <h3 className="mb-2 text-base leading-[120%] font-semibold tracking-[-0.18px] lg:mb-3 lg:text-lg">
                  {feature.title}
                </h3>
                <p className="leading-[135%] text-black/60">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="px-3 md:p-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full rounded-md border border-black/20 px-4 py-6 md:p-6 xl:p-12 bg-transparent"
          >
            <div className=" w-full flex flex-col gap-6  lg:gap-y-12 items-center justify-center">
              {/* Quote */}
              <div className="flex flex-col gap-4 text-current [grid-area:quote]">
                <span className=" font-serif text-[26px] leading-[120%] tracking-[-1.2px] md:tracking-[-1.8px]  @2xl:text-[36px] w-full text-center">
                  "{testimonial.quote}"
                </span>
              </div>

              {/* Author */}
              <div className="mt-auto flex flex-col [grid-area:author] items-center">
                <span className="font-sans text-base font-bold text-current leading-[123%] tracking-[-0.16px]">
                  {testimonial.author}
                </span>
                <span className="font-sans text-base text-current/60 leading-[135%]">
                  {testimonial.role}
                </span>
              </div>

              {/* Image */}
              {/* <div className="relative aspect-[315/420] h-full w-full overflow-hidden [grid-area:image]">
                                <div className="overflow-hidden bg-cover absolute inset-0 size-full">
                                    <img
                                        alt="Angelo Livanos"
                                        src="/assets/lightspeed-headshot-min.png"
                                        className="transition-opacity duration-300 ease-out-quad size-full object-cover object-center opacity-100"
                                    />
                                </div>
                            </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
