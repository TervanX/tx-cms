'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function FeaturesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [activeFeature, setActiveFeature] = useState('omnichannel')
    const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

    const features = [
        {
            id: 'inbox',
            name: 'Inbox',
            href: '/suite/helpdesk/inbox',
            description: 'Support for customers, before they need it',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop'
        },
        {
            id: 'copilot',
            name: 'Copilot',
            href: '/suite/helpdesk/copilot',
            description: 'AI-powered assistance for your team',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop'
        },
        {
            id: 'tickets',
            name: 'Tickets',
            href: '/suite/helpdesk/tickets',
            description: 'Efficient ticket management system',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop'
        },
        {
            id: 'omnichannel',
            name: 'Omnichannel',
            href: '/suite/helpdesk/omnichannel',
            description: 'Unified customer experience across channels',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop'
        },
        {
            id: 'help-center',
            name: 'Help Center',
            href: '/suite/helpdesk/help-center',
            description: 'Self-service support for your customers',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
        },
        {
            id: 'apps-integrations',
            name: 'Apps & Integrations',
            href: '/app-store',
            description: 'Extend functionality with integrations',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop'
        },
        {
            id: 'reporting',
            name: 'Reporting',
            href: '/suite/helpdesk/reporting',
            description: 'Data-driven insights and analytics',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop'
        },
        {
            id: 'knowledge-hub',
            name: 'Knowledge Hub',
            href: '/suite/helpdesk/knowledge-hub',
            description: 'Centralized knowledge management',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop'
        },
        {
            id: 'outbound',
            name: 'Outbound',
            href: '/suite/helpdesk/outbound',
            description: 'Proactive customer outreach',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
        }
    ]

    const activeFeatureData = features.find(feature => feature.id === activeFeature) || features[0]

    const handleImageError = (imageSrc: string) => {
        console.error(`Failed to load image: ${imageSrc}`)
        setImageErrors(prev => new Set(prev).add(imageSrc))
    }

    const ImageDisplay = ({ className = "" }) => {
        const isImageError = imageErrors.has(activeFeatureData.image)

        return (
            <div className={`relative aspect-square bg-gray-100 rounded-lg ${className}`}>
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
                                onLoad={() => console.log(`✅ Loaded: ${activeFeatureData.name} - ${activeFeatureData.image}`)}
                            />
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 text-gray-500 p-4">
                                <div className="text-sm font-medium">Image not available</div>
                                <div className="text-xs mt-2 text-center">{activeFeatureData.name}</div>
                                <div className="text-xs mt-1 opacity-70">{activeFeatureData.image}</div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        )
    }

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
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}