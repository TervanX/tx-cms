// src/app/components/ContentLayout/sections/ProductivitySection.tsx
// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

// export default function ProductivitySection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const features = [
//     {
//       title: "An AI assistant for every agent",
//       description:
//         "Copilot provides expert training, troubleshooting, and guidance so agents can find answers faster and get more done for customers.",
//     },
//     {
//       title: "Automate repetitive tasks",
//       description:
//         "No-code workflows handle repetitive tasks, so agents can focus on helping customers, not managing processes.",
//     },
//     {
//       title: "Support every customer, in every language",
//       description:
//         "Helpdesk unifies messages from every channel and uses AI to translate 45+ languages in real time—so agents can respond faster, without switching tools.",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="@container scroll-mt-[72px] md:my-0 md:scroll-mt-[88px] md:rounded-md lg:scroll-mt-[84px]"
//       data-bgcolor="white"
//       id="productivity"
//       data-slugify="id"
//     >
//       <div className="flex flex-col gap-12">
//         {/* Header Section */}
//         <div>
//           <div className="relative z-[1] w-full px-3 md:px-0 xl:flex xl:items-end xl:justify-between">
//             <div className="flex w-full flex-col gap-6">
//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={
//                   isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
//                 }
//                 transition={{ duration: 0.8 }}
//                 className="max-w-[300px] pt-12 text-[2.5rem] leading-[95%] font-semibold tracking-[-0.1rem] text-balance md:max-w-[480px] md:pt-0 lg:flex lg:max-w-none lg:flex-col lg:text-6xl xl:text-[5rem] xl:tracking-[-0.25rem] xl:text-nowrap"
//               >
//                 AI tools that{" "}
//                 <span className="lg:mx-auto xl:block 2xl:whitespace-nowrap">
//                   maximize productivity
//                 </span>
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={
//                   isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//                 }
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="mr-auto max-w-[480px] text-lg leading-[135%] text-black/80"
//               >
//                 Agents can resolve complex queries more efficiently in any
//                 language with instant assistance from Copilot, no-code
//                 workflows, and AI Inbox Translation.
//               </motion.p>
//             </div>

//             {/* Mobile Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={
//                 isInView
//                   ? { opacity: 1, scale: 1 }
//                   : { opacity: 0, scale: 0.95 }
//               }
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="overflow-hidden bg-cover relative block mt-6 rounded-md md:hidden"
//             >
//               <img
//                 alt="Illustration of productive bees in a grassy meadow"
//                 src="//assetsproductivity-hero-mobile.webp"
//                 className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
//               />
//             </motion.div>
//           </div>

//           {/* Desktop Image */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="overflow-hidden bg-cover relative mt-6 hidden md:block md:rounded-md lg:mt-8"
//           >
//             <img
//               alt="Illustration of productive bees in a grassy meadow"
//               src="/assets/productivity-hero-desktop.webp"
//               className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
//             />
//           </motion.div>
//         </div>

//         {/* Main Content */}
//         <div className="px-3 md:p-0">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="overflow-hidden bg-cover relative block w-full rounded-[10px] bg-[#E7E6DF]"
//           >
//             <img
//               alt="Helpdesk product UI"
//               src="/assets/productivity-1-desktop.webp"
//               className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
//             />
//           </motion.div>

//           <div className="flex flex-col divide-y divide-black/10 @2xl:mt-6 @2xl:flex-row @2xl:justify-between @2xl:gap-6 @2xl:divide-y-0">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={
//                   isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//                 }
//                 transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                 className="flex w-full max-w-[316px] flex-1 flex-col items-start py-4 text-black last:pb-0 lg:max-w-[390px] @2xl:py-0"
//               >
//                 <h3 className="mb-2 text-base leading-[120%] font-semibold tracking-[-0.18px] lg:mb-3 lg:text-lg">
//                   {feature.title}
//                 </h3>
//                 <p className="leading-[135%] text-black/60">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Testimonial Section */}
//         <div className="px-3 md:p-0">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="w-full rounded-md border border-black/20 px-4 py-6 md:p-6 xl:p-12 bg-transparent"
//           >
//             <div className="@container grid w-full grid-cols-[80px_auto] gap-x-3 gap-y-6 [grid-template-areas:'quote_quote'_'image_author'] @2xl:grid-cols-[clamp(0px,33.333%,300px)_1fr] @2xl:gap-8 @2xl:[grid-template-areas:'image_quote'_'image_author'] @3xl:grid-cols-[1fr_2fr]">
//               {/* Quote */}
//               <div className="flex flex-col gap-4 text-current [grid-area:quote]">
//                 <span className="text-[var(--text-color)] before:bg-[var(--dot-color)] inline-flex h-fit max-w-max flex-none items-center gap-1.5 font-sans text-base leading-none font-bold whitespace-nowrap before:h-3 before:w-3 before:rounded-full xl:text-lg xl:before:h-3.5 xl:before:w-3.5 2xl:before:h-4 2xl:before:w-4 bg-transparent before:hidden">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="102"
//     height="25"
//     fill="none"
//   >
//     {/* Lightspeed logo SVG */}
//     <g clipPath="url(#lightspeed_svg__a)">
//       <mask
//         id="lightspeed_svg__b"
//         width="102"
//         height="25"
//         x="0"
//         y="0"
//         maskUnits="userSpaceOnUse"
//         style={{ maskType: "luminance" }}
//       >
//         <path fill="#fff" d="M102 .9H0v23.926h102z" />
//       </mask>
//       <g fill="#191513" mask="url(#lightspeed_svg__b)">
//         {/* Logo paths would go here */}
//       </g>
//     </g>
//   </svg>
//                 </span>
//                 <span className="indent-[-0.45em] font-serif text-[26px] leading-[120%] tracking-[-1.2px] md:tracking-[-1.8px]  @2xl:text-[36px]">
//                   "Our agents are dramatically more efficient when using
//                   Copilot. In testing, agents using Copilot were able to close
//                   31% more customer conversations daily, compared to agents not
//                   using Copilot."
//                 </span>
//               </div>

//               {/* Author */}
//               <div className="mt-auto flex flex-col [grid-area:author]">
//                 <span className="font-sans text-base font-bold text-current leading-[123%] tracking-[-0.16px]">
//                   Angelo Livanos
//                 </span>
//                 <span className="font-sans text-base text-current/60 leading-[135%]">
//                   Vice President, Global Support
//                 </span>
//               </div>

//               {/* Image */}
//               <div className="relative aspect-[315/420] h-full w-full overflow-hidden [grid-area:image]">
//                 <div className="overflow-hidden bg-cover absolute inset-0 size-full">
//                   <img
//                     alt="Angelo Livanos"
//                     src="/assets/lightspeed-headshot-min.png"
//                     className="transition-opacity duration-300 ease-out-quad size-full object-cover object-center opacity-100"
//                   />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// src/app/components/ContentLayout/sections/ProductivitySection.tsx
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
          <motion.div
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
          </motion.div>

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
            <div className="@container grid w-full grid-cols-[80px_auto] gap-x-3 gap-y-6 [grid-template-areas:'quote_quote'_'image_author'] @2xl:grid-cols-[clamp(0px,33.333%,300px)_1fr] @2xl:gap-8 @2xl:[grid-template-areas:'image_quote'_'image_author'] @3xl:grid-cols-[1fr_2fr]">
              {/* Quote */}
              <div className="flex flex-col gap-4 text-current [grid-area:quote]">
                {testimonial.companyLogo ? (
                  <span
                    className="text-[var(--text-color)] before:bg-[var(--dot-color)] inline-flex h-fit max-w-max flex-none items-center gap-1.5 font-sans text-base leading-none font-bold whitespace-nowrap before:h-3 before:w-3 before:rounded-full xl:text-lg xl:before:h-3.5 xl:before:w-3.5 2xl:before:h-4 2xl:before:w-4 bg-transparent before:hidden"
                    dangerouslySetInnerHTML={{
                      __html: testimonial.companyLogo,
                    }}
                  />
                ) : null}

                <span className="indent-[-0.45em] font-serif text-[26px] leading-[120%] tracking-[-1.2px] md:tracking-[-1.8px]  @2xl:text-[36px]">
                  "{testimonial.quote}"
                </span>
              </div>

              {/* Author */}
              <div className="mt-auto flex flex-col [grid-area:author]">
                <span className="font-sans text-base font-bold text-current leading-[123%] tracking-[-0.16px]">
                  {testimonial.author}
                </span>
                <span className="font-sans text-base text-current/60 leading-[135%]">
                  {testimonial.role}
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[315/420] h-full w-full overflow-hidden [grid-area:image]">
                <div className="overflow-hidden bg-cover absolute inset-0 size-full">
                  <img
                    alt={testimonial.image.alt}
                    src={testimonial.image.src}
                    className="transition-opacity duration-300 ease-out-quad size-full object-cover object-center opacity-100"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
