// src/app/components/ContentLayout/sections/OutboundSection.tsx
'use client'

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function OutboundSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const outboundFeatures = [
        {
            title: 'Onboard customers faster',
            description: 'Onboard users with interactive guides, personalized tasks, and in-app highlights that help them get started successfully.'
        },
        {
            title: 'Stay ahead of known issues',
            description: 'Send timely messages about bugs, outages, or changes, so your customers stay informed and your team stays in control.'
        },
        {
            title: 'Answer common questions in advance',
            description: 'Highlight tips, surface support content, and announce new features in-product so customers get answers before they reach out.'
        }
    ]

    const g2Comparison = [
        { name: 'Intercom', value: 97, color: 'text-black' },
        { name: 'Salesforce', value: 0, color: 'text-black/40' },
        { name: 'Zendesk', value: 0, color: 'text-black/40' }
    ]

    return (
        <section
            ref={ref}
            className="@container scroll-mt-[74px] md:my-0 md:scroll-mt-[15px] md:pt-20 xl:scroll-mt-[-25px] xl:pt-24"
            data-bgcolor="white"
            id="outbound"
            data-slugify="id"
        >
            <div className="flex flex-col gap-12">

                {/* Header Section */}
                <div>
                    <div className="relative z-[1] w-full px-3 md:px-0 xl:flex xl:items-end xl:justify-between">
                        <div className="flex w-full flex-col gap-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-[300px] pt-12 text-[2.5rem] leading-[95%] font-semibold tracking-[-0.1rem] text-balance md:max-w-[480px] md:pt-0 lg:flex lg:max-w-none lg:flex-col lg:text-6xl xl:text-[5rem] xl:tracking-[-0.25rem] xl:text-nowrap"
                            >
                                Outbound messaging <span className="lg:mx-auto xl:block 2xl:whitespace-nowrap">that reduces support volume</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mr-auto max-w-[480px] text-lg leading-[135%] text-black/80"
                            >
                                Onboard, educate, and notify your customers with in-context, automated messages that reduce support volume and improve your customer experience.
                            </motion.p>
                        </div>

                        {/* Mobile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="overflow-hidden bg-cover relative block mt-6 rounded-md md:hidden"
                        >
                            <img
                                alt="Illustration of a futuristic satellite receiver in a rural setting"
                                src="/assets/outbound-hero-mobile.webp"
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
                            alt="Illustration of a futuristic satellite receiver in a rural setting"
                            src="/assets/outbound-hero-desktop.webp"
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
                            alt="Helpdesk outbound product visual"
                            src="/assets/outbound-1-desktop.webp"
                            className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
                        />
                    </motion.div>

                    <div className="flex flex-col divide-y divide-black/10 @2xl:mt-6 @2xl:flex-row @2xl:justify-between @2xl:gap-6 @2xl:divide-y-0">
                        {outboundFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                        <div className="flex flex-col items-start gap-4 bg-transparent xl:gap-12 @3xl:grid @3xl:grid-cols-[minmax(0,300px)_1fr] @3xl:justify-between">

                            <h3 className="text-base leading-[120%] font-semibold tracking-[-0.18px] lg:text-lg @3xl:col-start-1 @3xl:row-start-1">
                                Ranked #1 on G2 in 97 categories
                            </h3>

                            <ul className="isolate my-3 flex gap-3 lg:gap-5 2xl:gap-12 @3xl:col-start-2 @3xl:mx-auto @3xl:my-0 @3xl:self-center">
                                {g2Comparison.map((item, index) => (
                                    <G2ComparisonItem
                                        key={item.name}
                                        item={item}
                                        index={index}
                                        isInView={isInView}
                                    />
                                ))}
                            </ul>

                            <div className="@3xl:col-start-1 @3xl:row-start-1 @3xl:mt-auto">
                                <p className="mt-auto mb-4 max-w-[316px] leading-[135%] text-[var(--fg)]/80">
                                    Intercom is rated highest on G2's most recent User Satisfaction Ratings for CS.
                                </p>
                                <a
                                    className="inline-flex items-center font-sans leading-none text-current relative cursor-pointer bg-gradient-to-r from-current to-current bg-no-repeat bg-[size:100%_0.05em] bg-[position:0%_100%] [transition:background-size_0.2s_ease-out] hover:bg-[size:0%_0.05em] hover:bg-[position:100%_100%] pb-1 font-semibold"
                                    href="https://www.g2.com/compare_reports/intercom-zendesk-support-suite-and-salesforce-service-cloud"
                                    target="_self"
                                >
                                    <span className="external-link-inner inline-flex items-center">
                                        Read the report
                                        <ArrowUpRight className="inline-block h-2 w-2 translate-y-[1px] fill-current" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

interface G2ComparisonItemProps {
    item: {
        name: string;
        value: number;
        color: string;
    };
    index: number;
    isInView: boolean;
}

function G2ComparisonItem({ item, index, isInView }: G2ComparisonItemProps) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))
    const borderProgress = useTransform(count, [0, 100], [0, 360])

    useEffect(() => {
        if (isInView && item.value > 0) {
            const controls = animate(count, item.value, {
                duration: 2,
                delay: 0.8 + (index * 0.3),
                ease: "easeOut"
            })

            return controls.stop
        }
    }, [isInView, item.value, count, index])

    return (
        <li>
            <div className="flex flex-col items-center gap-4 text-center xl:gap-5">
                <span className={`relative z-10 flex [height:clamp(80px,calc(80px_+_20_*_((100vw_-_330px)_/_50)),100px)] [width:clamp(80px,calc(80px_+_20_*_((100vw_-_330px)_/_50)),100px)] items-center justify-center rounded-full font-serif text-5xl font-light tracking-[-2.88px] lg:size-[150px] lg:text-[4.5rem] xl:size-[190px] xl:text-[5.25rem] ${item.color}`}>
                    <motion.span>{rounded}</motion.span>
                    <motion.span
                        className="absolute inset-0 -z-10 rounded-full after:absolute after:inset-[2px] after:rounded-full after:bg-[var(--bento-bg)] after:transition-colors after:duration-500 border-2 "
                        style={{
                            background: `conic-gradient(black ${borderProgress}deg, transparent ${borderProgress}deg 360deg)`,
                            mask: 'linear-gradient(white, white) padding-box, linear-gradient(white, white)',
                            maskComposite: 'exclude'
                        }}
                    />
                </span>
                <span className={`leading-[125%] tracking-[-0.16px] ${item.value > 0 ? 'font-semibold' : ''}`}>
                    {item.name}
                </span>
            </div>
        </li>
    )
}