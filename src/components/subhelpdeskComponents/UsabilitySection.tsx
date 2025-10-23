// src/app/components/ContentLayout/sections/UsabilitySection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function UsabilitySection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const usabilityFeatures = [
        {
            title: 'Instant insight with pre-built reporting',
            description: 'Monitor and optimize performance with AI-curated reports and dashboards.',
            list: {
                items: [
                    'Real-time transaction tracking',
                    'Pre-built analytics templates',
                    'Fee and settlement optimization'
                ]
            }
        }
    ]

    const additionalFeatures = [
        {
            image: "/assets/usability-2-desktop.webp",
            title: 'Unified payment flows',
            description: 'Centralize collections and settlements across multiple chains with one dashboard.',
            list: {
                items: [
                    'Multi-wallet management',
                    'Shared audit trails',
                    'Role-based access for teams'
                ]
            }
        },
        {
            image: "/assets/usability-3-desktop.webp",
            title: 'Integrate with your existing tools',
            description: 'Easily connect to ERP, accounting, or compliance systems with SDKs and APIs.',
            list: {
                items: [
                    'REST, GraphQL, and Webhook support',
                    'Real-time sync with reporting systems',
                ]
            }
        }
    ]

    return (
        <section
            ref={ref}
            className="@container scroll-mt-[74px] md:my-0 md:scroll-mt-[15px] md:pt-20 xl:scroll-mt-[-25px] xl:pt-24"
            data-bgcolor="var(--color-cream)"
            id="usability"
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
                                Fast and friction-free <span className="lg:mx-auto xl:block 2xl:whitespace-nowrap"></span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mr-auto max-w-[480px] text-lg leading-[135%] text-black/80"
                            >
                                Crypto Payments is simple to set up, powerful to scale, and intuitive to use. Unified dashboards, multi-chain visibility, and an API-first experience make it effortless for teams and developers alike.
                            </motion.p>
                        </div>

                        {/* Mobile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="overflow-hidden bg-cover relative block mt-6 rounded-md md:hidden object-top"
                        >
                            <img
                                alt="Illustration of people walking down a flowery path"
                                src="/assets/usability-hero-mobile.webp"
                                className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
                            />
                        </motion.div>
                    </div>

                    {/* Desktop Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="overflow-hidden bg-cover relative mt-6 hidden md:block md:rounded-md lg:mt-8 object-top"
                    >
                        <img
                            alt="Illustration of people walking down a flowery path"
                            src="/assets/usability-hero-desktop.webp"
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
                            alt="Helpdesk usability instant insight product visual"
                            src="/assets/usability-1-desktop.webp"
                            className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
                        />
                    </motion.div>

                    <div className="flex flex-col divide-y divide-black/10 @2xl:mt-6 @2xl:flex-row @2xl:justify-between @2xl:gap-6 @2xl:divide-y-0">
                        {usabilityFeatures.map((feature, index) => (
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
                                <ul className="mt-3 list-disc pl-5 text-black/60">
                                    {feature.list.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Additional Features */}
                <div className="px-3 md:p-0 flex flex-col gap-12 @2xl:flex-row @2xl:justify-between @2xl:gap-8">
                    {additionalFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                            className="flex flex-col @2xl:gap-4"
                        >
                            <div className="overflow-hidden bg-cover relative block w-full rounded-[10px] bg-[#E7E6DF]">
                                <img
                                    alt={feature.title}
                                    src={feature.image}
                                    className="w-full transition-opacity duration-300 ease-out-quad opacity-100"
                                />
                            </div>
                            <div className="flex w-full max-w-[316px] flex-1 flex-col items-start py-4 text-black last:pb-0 lg:max-w-[390px] @2xl:py-0">
                                <h3 className="mb-2 text-base leading-[120%] font-semibold tracking-[-0.18px] lg:mb-3 lg:text-lg">
                                    {feature.title}
                                </h3>
                                <p className="leading-[135%] text-black/60">
                                    {feature.description}
                                </p>
                                <ul className="mt-3 list-disc pl-5 text-black/60">
                                    {feature.list.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}