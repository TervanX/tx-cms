"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  title: string;
  description: string;
  span?: string;
  subtitle?: string;
  backgroundImage?: string;
  productImage?: string;
  featureLinks?: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
  }>;
  efficiencyCards?: Array<{
    category: string;
    title: string;
  }>;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  efficiencyTitle?: string;
}

export default function Hero({
  title,
  description,
  span,
  subtitle,
  backgroundImage = "/assets/hero.webp",
  productImage = "/assets/product1.png",
  featureLinks = [
    {
      name: "Inbox",
      href: "/suite/helpdesk/inbox",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M3 1.016a2 2 0 0 0-2 2v9.5a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5v-9.5a2 2 0 0 0-2-2zm10 1.7H3a.3.3 0 0 0-.3.3v6.7a.3.3 0 0 0 .3.3h2.5c.276 0 .494.227.562.495a2 2 0 0 0 3.876 0c.068-.268.286-.495.562-.495H13a.3.3 0 0 0 .3-.3v-6.7a.3.3 0 0 0-.3-.3"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Copilot",
      href: "/suite/helpdesk/copilot",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="copilot_svg__inline-block"
        >
          <path d="m6.35 7.13-.6 1.93H7l-.6-1.93z" />
          <path d="M14 3H2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-6.32 8.21-.36-1.15H5.44l-.36 1.15H3.66L5.5 5.76h1.75l1.84 5.45H7.67zm3.32 0H9.68V5.76H11z" />
        </svg>
      ),
    },
    {
      name: "Tickets",
      href: "/suite/helpdesk/tickets",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M2.5 3.016a1.5 1.5 0 0 0-1.5 1.5v1.25c0 .276.228.493.493.57a1.75 1.75 0 0 1 0 3.36c-.265.077-.493.294-.493.57v1.25a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-1.25c0-.276-.228-.493-.493-.57a1.75 1.75 0 0 1 0-3.36c.265-.077.493-.294.493-.57v-1.25a1.5 1.5 0 0 0-1.5-1.5zm2.5 2a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm-.75 4.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Omnichannel",
      href: "/suite/helpdesk/omnichannel",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M14 1.016a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3.522A6.503 6.503 0 0 0 3 7.118V3.016a2 2 0 0 1 2-2zm-.375 2.102a.75.75 0 0 1 .75 1.3l-3.5 2.02a2.75 2.75 0 0 1-2.75 0l-3.5-2.02a.75.75 0 1 1 .75-1.3l3.5 2.021a1.25 1.25 0 0 0 1.25 0z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="m5.21 15.117 2.5-2.5a.85.85 0 0 0 0-1.202l-2.5-2.5a.85.85 0 0 0-1.202 1.202l1.049 1.049H.979a.85.85 0 1 0 0 1.7h4.078l-1.049 1.049a.85.85 0 0 0 1.202 1.202"
          />
        </svg>
      ),
    },
    {
      name: "Help Center",
      href: "/suite/helpdesk/help-center",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
        >
          <g clipPath="url(#help-center_svg__a)">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M16 8.016a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8.056-3.06c-.467 0-.867.295-1.02.71a.75.75 0 0 1-1.407-.518 2.587 2.587 0 1 1 4.4 2.564l-.016.02-.018.019-.819.84-.005.007-.005.005c-.242.24-.36.38-.36.643v.277a.75.75 0 0 1-1.5 0v-.277c0-.915.532-1.44.793-1.697l.008-.008.792-.815a1.086 1.086 0 0 0-.844-1.77zm0 7.454a.673.673 0 1 0 0-1.346.673.673 0 0 0 0 1.346"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="help-center_svg__a">
              <path fill="#fff" d="M0 .016h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Apps & Integrations",
      href: "/app-store",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
        >
          <path
            fill="#fff"
            d="M14.25 4.516a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M4.5 14.266a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5M10 9.016a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM3 2.016a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"
          />
        </svg>
      ),
    },
    {
      name: "Reporting",
      href: "/suite/helpdesk/reporting",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          fill="none"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M3 1.016a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2zm9.5 5a1.5 1.5 0 1 0-1.312-.772L9.525 8.016H9.5q-.202.001-.389.05L7.95 6.905A1.502 1.502 0 0 0 6.5 5.016a1.5 1.5 0 0 0-1.312 2.228l-1.663 2.772H3.5a1.5 1.5 0 1 0 1.312.772l1.663-2.772H6.5q.202-.001.388-.05l1.163 1.161A1.502 1.502 0 0 0 9.5 11.016a1.5 1.5 0 0 0 1.312-2.228l1.663-2.772z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Knowledge Hub",
      href: "/suite/helpdesk/knowledge-hub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="none"
        >
          <path
            fill="#fff"
            d="M6.997 3.335c.261.237.378.587.378.939v7.242a.75.75 0 0 0 1.5 0V4.274c0-.352.117-.702.378-.939 1.319-1.199 3.157-1.118 4.871-1.06.553.018 1.001.47 1.001 1.023v8.72a.973.973 0 0 1-1 .98c-1.894-.056-3.914-.126-5.235 1.433-.317.373-1.213.373-1.53 0-1.317-1.554-3.343-1.487-5.236-1.432a.973.973 0 0 1-.999-.98V3.298c0-.553.448-1.005 1.001-1.023 1.713-.057 3.557-.134 4.871 1.06"
          />
        </svg>
      ),
    },
    {
      name: "Outbound",
      href: "/suite/helpdesk/outbound",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="none"
        >
          <path
            fill="#fff"
            d="m14.449 4.733-2.705 10.095a1.451 1.451 0 0 1-2.428.65l-2.052-2.052a1 1 0 0 1-.16-1.207l1.719-2.976c.247-.429-.232-.908-.66-.66L5.185 10.3a1 1 0 0 1-1.207-.159L1.926 8.09a1.451 1.451 0 0 1 .65-2.428l10.096-2.705a1.451 1.451 0 0 1 1.777 1.777"
          />
        </svg>
      ),
    },
  ],
  efficiencyCards = [
    {
      category: "Productivity",
      title: "AI tools that maximize productivity and Optimise gas fee",
    },
    {
      category: "Usability",
      title:
        "Unified dashboards, real-time blockchain monitoring, and API-first design make operations seamless for teams of any size",
    },
    {
      category: "Data & Insights",
      title: "Actionable intelligence that drives better decisions",
    },
  ],
  primaryButton = {
    text: "Login",
    href: "https://www.intercom.com/view-demos",
  },
  secondaryButton = {
    text: "Contact Sales",
    href: "/contact/contact-sales",
  },
  efficiencyTitle = "How Crypto Payments Drives Financial Efficiency",
}: HeroProps) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 200, 400], [1, 0.8, 0]);
  const imageScale = useTransform(scrollY, [0, 200, 400], [1, 1.05, 1.1]);

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full max-w-[1920px] px-3 md:px-4 relative overflow-clip bg-black pt-[112px] pb-12 text-white md:pb-16 xl:pt-[151px] xl:pb-40 3xl:rounded-b-md"
    >
      <div className="overflow-hidden bg-cover absolute inset-0 size-full">
        <img
          alt="Helpdesk illustration"
          src={backgroundImage}
          className="transition-opacity duration-300 ease-out-quad size-full object-cover object-center opacity-100"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </div>
      <div className="absolute inset-[0_0_50%] z-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:34px_34px] [mask:radial-gradient(black,transparent)]" />
      <div className="relative z-40 mx-auto w-full max-w-[1230px] [body:has(.top-banner)_&]:pt-10">
        <motion.div
          className="transition-opacity duration-500 ease-out-quart relative"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            opacity: headerOpacity,
          }}
        >
          <h1
            className="text-[2.5rem] leading-[95%] font-semibold tracking-[-0.1rem] text-balance flex flex-col lg:text-6xl xl:text-[4.5rem] xl:tracking-[-0.25rem] w-full"
            style={
              {
                ["--title-length" as any]: Math.min(title.length, 30),
              } as React.CSSProperties
            }
          >
            {title}
            <span className="lg:mt-[0.15em] lg:ml-[calc(var(--title-length)*1%)]">
              {span}
            </span>
          </h1>
          <p className="mt-8 mb-1 w-full max-w-[500px] text-lg leading-[120%] 2xl:max-w-[600px] 2xl:text-xl">
            {description}
          </p>
          <p className="mb-8 w-full max-w-[600px] text-lg leading-[120%] 2xl:max-w-[700px] 2xl:text-xl">
            {subtitle}
          </p>
          <motion.div
            className="flex gap-2 transition-transform duration-300 ease-out-quart will-change-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              className="btn group relative isolate inline-block cursor-pointer rounded-md transition-[background,color] duration-400 ease-out-quart text-center font-semibold tracking-tight whitespace-nowrap first-line:z-1 lg:text-base/none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-outline disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white hover:bg-white hover:text-black px-3 py-2.5 text-base/none lg:px-4"
              href={primaryButton.href}
            >
              <span className="group-focus absolute inset-0 -z-1 block w-full rounded-md transition-[background,color] duration-400 ease-out-quart border border-white" />
              {primaryButton.text}
            </a>

            <a
              href={secondaryButton.href}
              className="btn group relative isolate inline-block cursor-pointer rounded-md transition-[background,color] duration-400 ease-out-quart text-center font-semibold tracking-tight whitespace-nowrap first-line:z-1 lg:text-base/none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-outline disabled:pointer-events-none disabled:opacity-50 text-black px-3 py-2.5 text-base/none lg:px-4"
            >
              <span className="group-focus absolute inset-0 -z-1 block w-full rounded-md transition-[background,color] duration-400 ease-out-quart bg-white group-hover:bg-white/80" />
              {secondaryButton.text}
            </a>
          </motion.div>
        </motion.div>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mt-12 aspect-[1230/834] max-h-[88vh] w-full origin-bottom transition-transform duration-300 ease-out-quart will-change-transform"
          style={{
            scale: imageScale,
          }}
        >
          {/* Canvas layer */}
          <div className="absolute inset-0 z-10 size-full overflow-hidden">
            <div className="h-full w-full">
              <div className="w-full h-full bg-transparent" />
            </div>
          </div>

          {/* Product image */}
          <div className="overflow-hidden bg-cover absolute inset-0 size-full w-full">
            <img
              alt="Helpdesk product visual"
              loading="eager"
              decoding="async"
              className="transition-opacity duration-300 ease-out-quad size-full object-center opacity-100 object-contain"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
              }}
              sizes="100vw"
              src={productImage}
            />
          </div>
        </motion.div>

        {/* Feature links */}
        {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="w-full overflow-x-auto [mask:linear-gradient(to_left,transparent,#000_15%)] no-scrollbar xl:overflow-x-visible xl:[mask:none]"
                >
                    <ul className="flex justify-between gap-7 py-12 xl:py-16">
                        {featureLinks.map((feature, index) => (
                            <motion.li
                                key={feature.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                            >
                                <a
                                    href={feature.href}
                                    className="group relative flex items-center gap-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {feature.icon}
                                    <span className="text-xs leading-[130%] tracking-[1.2px] whitespace-nowrap uppercase">
                                        {feature.name}
                                    </span>
                                    <ArrowUpRight className="absolute top-1/2 left-full ml-1 h-2 w-2 -translate-x-2 -translate-y-1/2 fill-current opacity-0 transition-[translate,opacity] duration-250 ease-out-quart lg:group-hover:translate-x-0 lg:group-hover:opacity-100" />
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="mt-12 mb-6 text-center text-[2rem] leading-[115%] font-semibold tracking-[-0.96px] xl:mb-12 xl:text-[3rem] xl:tracking-[-1.44px]">
            {efficiencyTitle}
          </h2>

          <div className="flex flex-col gap-6 rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-[10px] md:flex-row xl:gap-8 xl:p-8">
            {efficiencyCards.map((card, index) => (
              <div key={card.category} className="md:flex-1 relative">
                {index > 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20 hidden md:block" />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="px-4"
                >
                  <h3 className="mb-4 inline-block rounded-full bg-white px-4 py-[5px] text-xs leading-[130%] tracking-[1.2px] text-black uppercase">
                    {card.category}
                  </h3>
                  <p className="text-[1.375rem] leading-[115%] font-semibold tracking-[-0.66px] xl:text-[1.75rem]">
                    {card.title}
                  </p>
                </motion.div>
                {index < efficiencyCards.length - 1 && (
                  <span className="block h-px w-full bg-white/20 mt-6 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
