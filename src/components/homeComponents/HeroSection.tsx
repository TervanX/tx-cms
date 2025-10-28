"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";

const HeroSection = () => {
  const companies = [
    "Anthropic",
    "Clay",
    "Lightspeed",
    "Marshmallow",
    "Amplitude",
    "Moneybox",
    "Shutterstock",
    "Synthesia",
    "Lovable",
    "Monday.com",
    "Consensys",
    "LaunchDarkly",
    "Culture Amp",
    "Coda",
    "Aspire",
    "Perplexity",
    "Carvana",
    "Pfizer",
    "Spendesk",
    "Microsoft",
    "Chess.com",
    "Xero",
    "Envoy",
    "Topstep",
    "Mangopay",
    "Tripadvisor",
    "Nuuly",
    "Webex Events",
    "Outschool",
    "Zilch",
    "Vanta",
    "WHOOP",
    "Personio",
    "Miro",
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(headerRef, { once: false, margin: "-50% 0px" });

  const { scrollY } = useScroll();

  // State to track window width (client-side only)
  const [windowWidth, setWindowWidth] = useState(1440); // Default fallback

  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

  const descriptionOpacity = useTransform(scrollY, [50, 150], [1, 0]);
  const descriptionBlur = useTransform(scrollY, [50, 150], [0, 20]);

  const buttonsTranslateY = useTransform(scrollY, [50, 150], [0, -120]);

  const duplicatedCompanies = [...companies, ...companies];

  // Get window width on client side only
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logosArray = [
    { url: "/assets/Stripe.png", imageAlt: "Stripe" },
    { url: "/assets/flutterwave.svg", imageAlt: "flutterwave" },
    { url: "/assets/Checkbox.webp", imageAlt: "Checkbox" },
    { url: "/assets/1200px-Paystack_Logo.png", imageAlt: "Paystack_Logo" },
    { url: "/assets/fireblocks-logo.svg", imageAlt: "fireblocks" },
  ];

  return (
    <div className="mx-auto rounded-t-md overflow-clip rounded-b-md">
      <div className="-z-[1000]"></div>

      <div className="relative h-full w-full [body:has(.top-banner)_&]:pt-10">
        <div className="absolute inset-0 origin-top overflow-hidden bg-radial from-[#2d5d8b] to-[#0b1d2f] brightness-80 transition-transform duration-500 ease-out-quart lg:brightness-90 after:absolute after:inset-[60%_0_0] after:bg-gradient-to-t after:from-black/20 after:to-transparent">
          <div className="absolute inset-0 transition-[transform,filter] duration-700 ease-out-quart will-change-[transform,filter]">
            <div className="overflow-hidden bg-cover absolute inset-0 size-full">
              <Image
                alt="Suite"
                src="/assets/digital.jpg"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, #ffffff08 0 1px, #0000 1px 25px),
              repeating-linear-gradient(#ffffff08 0 1px, #0000 1px 25px),
              repeating-linear-gradient(90deg, #ffffff0f 0 1px, #0000 1px 100px),
              repeating-linear-gradient(#ffffff0f 0 1px, #0000 1px 100px)
            `,
            backgroundPosition: `
              calc(50% + 12.5px) calc(50% + 12.5px),
              calc(50% + 12.5px) calc(50% + 12.5px),
              calc(50% + 50px) calc(50% + 50px),
              calc(50% + 50px) calc(50% + 50px)
            `,
            backgroundSize: `
              25px 25px,
              25px 25px,
              100px 100px,
              100px 100px
            `,
          }}
        ></div>

        {/* Content */}
        <div className="relative top-0 z-30 px-4 pt-20 text-white md:sticky">
          <div className="relative z-20 mx-auto w-full max-w-[1230px]">
            {/* Headline */}
            <div ref={headerRef}>
              <h1 className="relative z-20 text-[2.5rem] leading-[95%] font-semibold tracking-[-0.1rem] lg:text-6xl xl:text-[5rem] xl:tracking-[-0.25rem] [&_span]:block">
                <motion.div
                  className="transition-opacity duration-500 ease-out-quart"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    opacity: headerOpacity,
                    filter: useTransform(
                      headerBlur,
                      (blur) => `blur(${blur}px)`
                    ),
                  }}
                >
                  <span>The infrastructure layer</span>
                  <span></span>
                </motion.div>
                <span>for money, assets, and trust.</span>
              </h1>
            </div>

            {/* Description & CTA */}
            <div className="mt-6 flex flex-col gap-4 border-t border-white/60 pt-4 md:mt-8 md:flex-row lg:mt-10 xl:mt-11">
              <p className="w-full text-sm leading-[100%] tracking-[0.7px] uppercase lg:w-7/12">
                TX switch + TX core
              </p>

              <div className="w-full lg:w-5/12">
                <motion.p
                  ref={descriptionRef}
                  className="mb-8 text-lg leading-[120%] transition-all duration-300 ease-out-quart 2xl:text-xl"
                  style={{
                    opacity: descriptionOpacity,
                    filter: useTransform(
                      descriptionBlur,
                      (blur) => `blur(${blur}px)`
                    ),
                  }}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                >
                  TervanX provides secure, compliant, and scalable financial
                  infrastructure through a unified platform for payments,
                  crypto, and digital assets — giving developers and enterprises
                  the tools to innovate, integrate, and scale financial
                  solutions across borders and ecosystems.
                </motion.p>

                <motion.div
                  className="flex gap-2 transition-transform duration-300 ease-out-quart will-change-transform"
                  style={{
                    y: buttonsTranslateY,
                  }}
                  initial={{ y: -118 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  <motion.a
                    className="btn group relative isolate inline-block cursor-pointer rounded-md transition-[background,color] duration-400 ease-out-quart text-center font-semibold tracking-tight whitespace-nowrap first-line:z-1 lg:text-base/none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-outline disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white hover:bg-white hover:text-black px-3 py-2.5 text-base/none lg:px-4"
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="group-focus absolute inset-0 -z-1 block w-full rounded-md transition-[background,color] duration-400 ease-out-quart border-1 border-white"></span>
                    Login
                  </motion.a>

                  <motion.a
                    href="/contact/contact-sales"
                    className="btn group relative isolate inline-block cursor-pointer rounded-md transition-[background,color] duration-400 ease-out-quart text-center font-semibold tracking-tight whitespace-nowrap first-line:z-1 lg:text-base/none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-outline disabled:pointer-events-none disabled:opacity-50 text-black px-3 py-2.5 text-base/none lg:px-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="group-focus absolute inset-0 -z-1 block w-full rounded-md transition-[background,color] duration-400 ease-out-quart bg-white group-hover:bg-white/80"></span>
                    Contact Sales
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Trusted Companies */}
          <div className="mx-auto pb-8 lg:pb-12">
            <div className="mx-auto w-full max-w-[1000px] px-3 md:px-4 mb-4 flex flex-col overflow-hidden lg:mb-10 lg:max-w-[1262px]">
              <div className="font-sans text-current pt-4 text-base leading-[135%] font-semibold tracking-[-0.16px] md:text-xl md:leading-[110%] md:tracking-[-0.6px]">
                <div className="flex flex-col gap-2">
                  <p> The same world-class infrastructure that powers</p>

                  <p className="lg:max-w-[50%]">
                    now powers the TervanX Network — delivering secure,
                    scalable, and intelligent financial systems built for
                    Africa and beyond.
                  </p>
                  <span className="border-solid  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 rounded-md px-3 py-2 bg-[rgba(255,255,255,.5)] lg:max-w-[600px]">
                    <div className="relative mx-auto my-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]">
                      <motion.div
                        className="flex w-max gap-10"
                        animate={{
                          x: [0, -windowWidth],
                        }}
                        transition={{
                          x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                          },
                        }}
                      >
                        {logosArray.map((logoItem, index) => (
                          <motion.span
                            key={`${logoItem.imageAlt}-${index}`}
                            className="flex gap-10 font-semibold whitespace-nowrap text-lg lg:text-[32px]"
                            whileHover={{ scale: 1.1, color: "#60a5fa" }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <img
                              src={logoItem.url}
                              alt="Stripe"
                              height="20"
                              className="h-6"
                            />
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mx-auto my-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]">
              <motion.div
                className="flex w-max gap-10"
                animate={{
                  x: [0, -windowWidth],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedCompanies.map((company, index) => (
                  <motion.span
                    key={`${company}-${index}`}
                    className="flex gap-10 font-semibold whitespace-nowrap text-lg lg:text-[32px]"
                    whileHover={{ scale: 1.1, color: "#60a5fa" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {company}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
