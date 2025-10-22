// src/app/components/ContentLayout/sections/FeaturesSection.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function FeaturesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [activeFeature, setActiveFeature] = useState('omnichannel')
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

    const features = [
        {
            id: 'inbox',
            name: 'Inbox',
            href: '/suite/helpdesk/inbox',
            description: 'Support for customers, before they need it',
            image: '/assets/inbox.webp'
        },
        {
            id: 'copilot',
            name: 'Copilot',
            href: '/suite/helpdesk/copilot',
            description: 'AI-powered assistance for your team',
            image: '/assets/copilot.webp'
        },
        {
            id: 'tickets',
            name: 'Tickets',
            href: '/suite/helpdesk/tickets',
            description: 'Efficient ticket management system',
            image: '/assets/tickets.webp'
        },
        {
            id: 'omnichannel',
            name: 'Omnichannel',
            href: '/suite/helpdesk/omnichannel',
            description: 'Unified customer experience across channels',
            image: '/assets/omnichanel.webp'
        },
        {
            id: 'help-center',
            name: 'Help Center',
            href: '/suite/helpdesk/help-center',
            description: 'Self-service support for your customers',
            image: '/assets/helpcenter.webp'
        },
        {
            id: 'apps-integrations',
            name: 'Apps & Integrations',
            href: '/app-store',
            description: 'Extend functionality with integrations',
            image: '/assets/apps.webp'
        },
        {
            id: 'reporting',
            name: 'Reporting',
            href: '/suite/helpdesk/reporting',
            description: 'Data-driven insights and analytics',
            image: '/assets/reporting.webp'
        },
        {
            id: 'knowledge-hub',
            name: 'Knowledge Hub',
            href: '/suite/helpdesk/knowledge-hub',
            description: 'Centralized knowledge management',
            image: '/assets/knowledge.webp'
        },
        {
            id: 'outbound',
            name: 'Outbound',
            href: '/suite/helpdesk/outbound',
            description: 'Proactive customer outreach',
            image: '/assets/outbound.webp'
        }
    ]

    // Get the currently active feature data
    const activeFeatureData = features.find(feature => feature.id === activeFeature) || features[0]

    // Preload images
    useEffect(() => {
        features.forEach(feature => {
            const img = new Image()
            img.src = feature.image
            img.onload = () => {
                setLoadedImages(prev => new Set(prev).add(feature.image))
            }
            img.onerror = () => {
                console.warn(`Failed to load image: ${feature.image}`)
            }
        })
    }, [])

    const ImageDisplay = ({ className = "" }) => (
        <div className={`relative aspect-square bg-gray-100 rounded-lg ${className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFeature} // Use activeFeature as key to trigger animation

                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 overflow-hidden rounded-lg"
                >
                    <img
                        alt={activeFeatureData.name}
                        src={activeFeatureData.image} // Use the active feature's image directly
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            console.error(`Failed to load image: ${activeFeatureData.image}`)
                            e.currentTarget.style.display = 'none'
                        }}
                    />
                    {!loadedImages.has(activeFeatureData.image) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                            <div className="text-gray-500">Loading {activeFeatureData.name}...</div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )

    return (
        <section
            ref={ref}
            className="@container scroll-mt-[74px] md:my-0 md:scroll-mt-[-40px] md:pt-8 xl:scroll-mt-[-100px]"
            data-bgcolor="var(--color-cream)"
            id="features"
            data-slugify="id"
        >
            <section className="relative isolate mt-16 mb-2 md:mt-12 md:mb-0 xl:mt-25">
                <h2 className="mx-4 mb-4 border-b border-black/20 pb-2 text-xs leading-[135%] tracking-[1.2px] uppercase md:hidden">
                    Features
                </h2>

                <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-[2fr_3fr] lg:px-12 2xl:gap-20">

                    {/* Sticky Image Column */}
                    <div className="sticky top-25 hidden lg:block">
                        <div className="space-y-4">
                            <ImageDisplay className="w-full" />

                            <p className="text-lg leading-[135%] text-black/60">
                                {activeFeatureData.description}
                            </p>

                            <a
                                className="font-sans relative cursor-pointer bg-gradient-to-r from-current to-current bg-no-repeat bg-[size:100%_0.05em] bg-[position:0%_100%] [transition:background-size_0.2s_ease-out] hover:bg-[size:0%_0.05em] hover:bg-[position:100%_100%] inline-block pb-1 leading-[95%] font-semibold tracking-[-0.16px] text-black"
                                href={activeFeatureData.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Find out more
                            </a>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="relative [@media(max-height:1300px)_and_(min-width:768px)]:pb-[150px]">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.id}
                                className="w-full border-b border-[#00000033] py-3 xl:py-3.5 group"
                                onMouseEnter={() => setActiveFeature(feature.id)}
                                onFocus={() => setActiveFeature(feature.id)}
                            >
                                <div
                                    className="flex w-full items-start justify-between cursor-pointer"
                                    onClick={() => window.open(feature.href, '_blank')}
                                >
                                    <h3 className={`font-medium-ll mr-4 text-[42px] leading-[95%] font-[600] tracking-[-2.56px] lg:text-[48px] xl:text-[52px] [@media(min-width:1450px)]:text-[64px] transition-colors duration-300 group-hover:text-black ${activeFeature === feature.id ? 'text-black' : 'text-[#00000033]'
                                        }`}>
                                        {feature.name}
                                    </h3>
                                    <ArrowUpRight className={`mt-3 h-7 w-7 xl:mt-3 xl:h-9 xl:w-9 [@media(min-width:1450px)]:mt-4 transition-all duration-300 ${activeFeature === feature.id ? 'fill-black opacity-100' : 'fill-transparent opacity-0'
                                        }`} />
                                </div>
                            </motion.div>
                        ))}

                        {/* Mobile Image */}
                        <div className="sticky bottom-3 z-10 mt-9 lg:hidden">
                            <ImageDisplay className="w-full max-w-[240px]" />

                            {/* Mobile Description and Link */}
                            <div className="mt-4 space-y-2">
                                <p className="text-base leading-[135%] text-black/60">
                                    {activeFeatureData.description}
                                </p>
                                <a
                                    className="font-sans relative cursor-pointer bg-gradient-to-r from-current to-current bg-no-repeat bg-[size:100%_0.05em] bg-[position:0%_100%] [transition:background-size_0.2s_ease-out] hover:bg-[size:0%_0.05em] hover:bg-[position:100%_100%] inline-block pb-1 leading-[95%] font-semibold tracking-[-0.16px] text-black text-sm"
                                    href={activeFeatureData.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Find out more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}