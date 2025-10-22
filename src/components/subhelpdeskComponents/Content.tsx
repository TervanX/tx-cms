// src/app/components/ContentLayout/ContentLayout.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import ChapterNavigation from './ChapterNavigation'
import ProductivitySection from './ProductivitySection'
import UsabilitySection from './UsabilitySection'
import OutboundSection from './OutboundSection'
import FeaturesSection from './FeaturesSection'

export default function ContentLayout() {
    const containerRef = useRef(null)
    const [activeSection, setActiveSection] = useState('productivity')

    // Create refs for each section
    const productivityRef = useRef<HTMLDivElement>(null)
    const usabilityRef = useRef<HTMLDivElement>(null)
    const outboundRef = useRef<HTMLDivElement>(null)
    const featuresRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

    // Track individual section progress for the underline animation
    const productivityProgress = useTransform(scrollYProgress, [0, 0.25], [0, 1])
    const usabilityProgress = useTransform(scrollYProgress, [0.25, 0.5], [0, 1])
    const outboundProgress = useTransform(scrollYProgress, [0.5, 0.75], [0, 1])
    const featuresProgress = useTransform(scrollYProgress, [0.75, 1], [0, 1])

    // Improved section tracking using Intersection Observer
    useEffect(() => {
        const sections = [
            { id: 'productivity', ref: productivityRef },
            { id: 'usability', ref: usabilityRef },
            { id: 'outbound', ref: outboundRef },
            { id: 'features', ref: featuresRef }
        ]

        const observer = new IntersectionObserver(
            (entries) => {
                let maxRatio = 0
                let currentActive = activeSection

                entries.forEach((entry) => {
                    const ratio = entry.intersectionRatio
                    if (ratio > maxRatio && ratio >= 0.3) {
                        maxRatio = ratio
                        currentActive = entry.target.id
                    }
                })

                if (maxRatio > 0 && currentActive !== activeSection) {
                    setActiveSection(currentActive)
                }
            },
            {
                root: null,
                threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
                rootMargin: '-25% 0px -25% 0px'
            }
        )

        sections.forEach(({ ref }) => {
            if (ref.current) {
                observer.observe(ref.current)
            }
        })

        return () => {
            observer.disconnect()
        }
    }, [activeSection])

    // Alternative: Use scroll event listener as fallback
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'productivity', ref: productivityRef },
                { id: 'usability', ref: usabilityRef },
                { id: 'outbound', ref: outboundRef },
                { id: 'features', ref: featuresRef }
            ]

            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (const { id, ref } of sections) {
                if (ref.current) {
                    const element = ref.current
                    const rect = element.getBoundingClientRect()
                    const elementTop = rect.top + window.scrollY
                    const elementBottom = elementTop + rect.height

                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        if (activeSection !== id) {
                            setActiveSection(id)
                        }
                        break
                    }
                }
            }
        }

        // Add scroll listener as fallback
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [activeSection])

    // Handle hash link clicks
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '')
            if (hash && ['productivity', 'usability', 'outbound', 'features'].includes(hash)) {
                setActiveSection(hash)
            }
        }

        // Handle initial hash
        handleHashChange()

        // Handle hash changes
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    // Update URL hash when active section changes
    useEffect(() => {
        if (activeSection) {
            window.history.replaceState(null, '', `#${activeSection}`)
        }
    }, [activeSection])

    return (
        <div className="relative pb-12 md:pt-24 2xl:pt-30" ref={containerRef}>
            <div className="mx-auto w-full max-w-[1600px] px-0 md:px-4" data-main-content="true">
                <div className="relative gap-4 md:grid md:[&:has(>div:nth-child(1):last-child)]:[grid-template-columns:minmax(0,1fr)] md:[&:has(>div:nth-child(2):last-child)]:[grid-template-columns:minmax(0,2fr)_minmax(0,10fr)] md:[&:has(>div:nth-child(3):last-child)]:[grid-template-columns:minmax(0,2fr)_minmax(0,8fr)_minmax(0,2fr)] [&>div:has([data-chapter-layout='nav'])]:sticky [&>div:has([data-chapter-layout='nav'])]:top-[56px] [&>div:has([data-chapter-layout='nav'])]:z-10 md:[&>div:has([data-chapter-layout='nav'])]:static" data-chapter-layout="main">

                    {/* Navigation Sidebar */}
                    <div className="z-40">
                        <ChapterNavigation
                            activeSection={activeSection}
                            sectionProgress={{
                                productivity: productivityProgress,
                                usability: usabilityProgress,
                                outbound: outboundProgress,
                                features: featuresProgress
                            }}
                        />
                    </div>

                    {/* Main Content */}
                    <div className="">
                        <div ref={productivityRef} id="productivity">
                            <ProductivitySection />
                        </div>
                        <div ref={usabilityRef} id="usability">
                            <UsabilitySection />
                        </div>
                        <div ref={outboundRef} id="outbound">
                            <OutboundSection />
                        </div>
                        <div ref={featuresRef} id="features">
                            <FeaturesSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}