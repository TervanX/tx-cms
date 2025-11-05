// src/app/components/ContentLayout/sections/DataSection.tsx
"use client";

import { DataSectionProps } from "@/app/types/productNav.type";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function DataSection({
    heading,
    description,
    images,
    outboundFeatures,
    g2Comparison,
    animationConfig = { margin: "-100px" },
    sectionStyle = { backgroundColor: "white" },
}: DataSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: animationConfig.margin,
    });

    return (
        <section
            ref={ref}
            className="@container scroll-mt-[74px] md:my-0 md:scroll-mt-[15px] md:pt-20 xl:scroll-mt-[-25px] xl:pt-24"
            data-bgcolor={sectionStyle.backgroundColor}
            id="data"
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
                            alt={images.mainFeature.alt}
                            src={images.mainFeature.src}
                            className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
                        />
                    </motion.div> */}

                    <div className="flex flex-col divide-y divide-black/10 @2xl:mt-6 @2xl:flex-row @2xl:justify-between @2xl:gap-6 @2xl:divide-y-0">
                        {outboundFeatures.map((feature, index) => (
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

                {/* G2 Comparison Section */}
                <div className="px-3 md:p-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="w-full rounded-md border border-black/20 px-4 py-6 md:p-6 xl:p-12 bg-transparent"
                    >
                        <div className="flex flex-col items-center gap-4 bg-transparent xl:gap-12 @3xl:grid @3xl:grid-cols-[minmax(0,300px)_1fr] @3xl:justify-between">
                            <h3 className="text-base leading-[120%] font-semibold tracking-[-0.18px] lg:text-lg @3xl:col-start-1 @3xl:row-start-1">
                                {g2Comparison.title}
                            </h3>

                            <ul className="isolate my-3 flex gap-4 flex-wrap items-center justify-center lg:gap-5 2xl:gap-12 @3xl:col-start-2 @3xl:mx-auto @3xl:my-0 @3xl:self-center">
                                {g2Comparison.items.map((item, index) => (
                                    <G2ComparisonItem
                                        key={item.name}
                                        item={item}
                                        index={index}
                                        isInView={isInView}
                                    />
                                ))}
                            </ul>

                            {g2Comparison.description && (
                                <div className="@3xl:col-start-1 @3xl:row-start-1 @3xl:mt-auto">
                                    <p className="mt-auto mb-4 max-w-[316px] leading-[135%] text-[var(--fg)]/80">
                                        {g2Comparison.description}
                                    </p>
                                    <a
                                        className="inline-flex items-center font-sans leading-none text-current relative cursor-pointer bg-gradient-to-r from-current to-current bg-no-repeat bg-[size:100%_0.05em] bg-[position:0%_100%] [transition:background-size_0.2s_ease-out] hover:bg-[size:0%_0.05em] hover:bg-[position:100%_100%] pb-1 font-semibold"
                                        href="#"
                                        target="_self"
                                    >
                                        <span className="external-link-inner inline-flex items-center">
                                            Read the report
                                            <ArrowUpRight className="inline-block h-2 w-2 translate-y-[1px] fill-current" />
                                        </span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

interface G2ComparisonItemProps {
    item: {
        name: string;
        value: string;
        color: string;
    };
    index: number;
    isInView: boolean;
}

function G2ComparisonItem({ item, index, isInView }: G2ComparisonItemProps) {
    return (
        <li>
            <div className="flex flex-col items-center gap-4 text-center xl:gap-5">
                <span
                    className={`relative z-10 flex [height:clamp(80px,calc(80px_+_20_*_((100vw_-_330px)_/_50)),100px)] [width:clamp(80px,calc(80px_+_20_*_((100vw_-_330px)_/_50)),100px)] items-center justify-center rounded-full font-serif text-3xl font-light tracking-[-2.88px] lg:size-[180px] lg:text-[3.5rem] ${item.color}`}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                        }
                        transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    >
                        {item.value}
                    </motion.span>
                    <motion.svg
                        className="absolute inset-0 -z-10 rounded-full"
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r="48"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="301.59"
                            strokeDashoffset="301.59"
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="48"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="301.59"
                            strokeDashoffset="301.59"
                            initial={{ strokeDashoffset: 301.59 }}
                            animate={
                                isInView
                                    ? { strokeDashoffset: 0 }
                                    : { strokeDashoffset: 301.59 }
                            }
                            transition={{
                                duration: 1.5,
                                delay: 1 + index * 0.1,
                                ease: "easeOut",
                            }}
                        />
                    </motion.svg>
                    <div className="absolute inset-[2px] rounded-full bg-[var(--bento-bg)]" />
                </span>
                <motion.span
                    className={`leading-[125%] tracking-[-0.16px] ${item.value === "300+" ? "font-semibold" : ""
                        }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                    {item.name}
                </motion.span>
            </div>
        </li>
    );
}
