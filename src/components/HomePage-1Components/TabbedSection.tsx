"use client";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Zap,
    Shield,
    ListChecks,
    Workflow,
    Eye,
    UserCheck,
    Calendar,
    RefreshCw,
    Database,
    Phone,
    Target,
    Trash2,
    CalendarDays,
    FileText,
    AlertCircle,
    BarChart3
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type TabItem = {
    id: string;
    label: string;
    title: string;
    description: string;
    bullets: { text: string; icon: React.ReactNode }[];
    image: string;
    bgColor: string;
};

const tabs: TabItem[] = [
    {
        id: "outbound",
        label: "OUTBOUND",
        title: "Turn hours of prospecting into minutes",
        description: "",
        bullets: [
            {
                text: "AI-powered, multichannel campaigns in a click",
                icon: <Zap className="w-4 h-4" />
            },
            {
                text: "Built-in email deliverability guardrails",
                icon: <Shield className="w-4 h-4" />
            },
            {
                text: "Prioritized task lists to maximize selling",
                icon: <ListChecks className="w-4 h-4" />
            },
            {
                text: "Workflow automations to identify and scale what works",
                icon: <Workflow className="w-4 h-4" />
            },
        ],
        image: "/assets/outbound2.webp",
        bgColor: "bg-yellow-50",
    },
    {
        id: "inbound",
        label: "INBOUND",
        title: "Qualify and act on inbound leads in seconds",
        description: "",
        bullets: [
            {
                text: "Anonymous visitor identification",
                icon: <Eye className="w-4 h-4" />
            },
            {
                text: "Real-time form enrichment",
                icon: <UserCheck className="w-4 h-4" />
            },
            {
                text: "Instant routing with built-in calendar and scheduler",
                icon: <Calendar className="w-4 h-4" />
            },
            {
                text: "Automated nurture & follow-up sequences",
                icon: <RefreshCw className="w-4 h-4" />
            },
        ],
        image: "/assets/inbound2.webp",
        bgColor: "bg-purple-50",
    },
    {
        id: "enrichment",
        label: "DATA ENRICHMENT",
        title: "Fuel smarter selling with always-fresh data",
        description: "",
        bullets: [
            {
                text: "210M+ contacts and 30M+ companies",
                icon: <Database className="w-4 h-4" />
            },
            {
                text: "Verified emails & phone numbers for faster reach",
                icon: <Phone className="w-4 h-4" />
            },
            {
                text: "Better targeting and personalization",
                icon: <Target className="w-4 h-4" />
            },
            {
                text: "Clean data across your entire stack and CRM",
                icon: <Trash2 className="w-4 h-4" />
            },
        ],
        image: "/assets/data2.webp",
        bgColor: "bg-pink-50",
    },
    {
        id: "deal",
        label: "DEAL EXECUTION",
        title: "Capture every conversation, accelerate every deal",
        description: "",
        bullets: [
            {
                text: "Pre-meeting insights to prep in seconds",
                icon: <CalendarDays className="w-4 h-4" />
            },
            {
                text: "AI-powered call summaries, follow-ups, and task creation",
                icon: <FileText className="w-4 h-4" />
            },
            {
                text: "Pipeline boards & real-time deal alerts",
                icon: <AlertCircle className="w-4 h-4" />
            },
            {
                text: "Conversation insights & performance dashboards for coaching",
                icon: <BarChart3 className="w-4 h-4" />
            },
        ],
        image: "/assets/deal2.webp",
        bgColor: "bg-blue-50",
    },
];

const ApolloScrollTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
    const isMobileRef = useRef(false);

    const [showMobileNav, setShowMobileNav] = useState(false);
    const mobileContainerRef = useRef<HTMLDivElement>(null);

    // Mobile scroll detection
    useEffect(() => {
        const handleScroll = () => {
            // Only run on mobile
            if (window.innerWidth >= 1024) return;

            // Check if mobile container is visible
            if (mobileContainerRef.current) {
                const rect = mobileContainerRef.current.getBoundingClientRect();
                setShowMobileNav(rect.top <= 48 && rect.bottom > 100);
            }

            const sections = tabs.map((_, index) =>
                document.getElementById(`tab-${index}`)
            );

            // Find which section is currently most visible
            let currentIndex = 0;
            let maxVisibility = 0;

            sections.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const visibleHeight = Math.min(rect.bottom, window.innerHeight) -
                        Math.max(rect.top, 0);
                    const visibility = visibleHeight / window.innerHeight;

                    if (visibility > maxVisibility) {
                        maxVisibility = visibility;
                        currentIndex = index;
                    }
                }
            });

            setActiveTab(currentIndex);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useLayoutEffect(() => {
        if (!sectionRef.current) return;

        // Check if mobile
        const checkMobile = () => window.innerWidth < 1024;
        isMobileRef.current = checkMobile();

        const ctx = gsap.context(() => {
            const totalTabs = tabs.length;
            const scrollLength = isMobileRef.current ? 0 : totalTabs * 85;

            scrollTriggerRef.current = ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: isMobileRef.current ? "bottom bottom" : `+=${scrollLength}%`,
                pin: !isMobileRef.current,
                scrub: isMobileRef.current ? false : 1,
                anticipatePin: isMobileRef.current ? 0 : 1,
                onUpdate: (self) => {
                    if (isMobileRef.current) return;

                    const progress = self.progress;
                    const newIndex = Math.min(
                        totalTabs - 1,
                        Math.floor(progress * totalTabs)
                    );

                    if (newIndex !== activeTab) {
                        setActiveTab(newIndex);
                    }
                },
            });
        }, sectionRef);

        // Handle resize
        const handleResize = () => {
            const wasMobile = isMobileRef.current;
            isMobileRef.current = checkMobile();

            if (wasMobile !== isMobileRef.current) {
                ctx.revert();
                window.location.reload();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            ctx.revert();
            window.removeEventListener('resize', handleResize);
        };
    }, [activeTab]);

    const handleTabClick = (index: number) => {
        setActiveTab(index);

        if (isMobileRef.current) {
            // On mobile, scroll to the specific tab content
            const element = document.getElementById(`tab-${index}`);
            if (element) {
                const offset = 80; // Account for sticky header
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            return;
        }

        if (!sectionRef.current || !scrollTriggerRef.current) return;

        const totalTabs = tabs.length;
        const targetProgress = index / totalTabs;
        const scrollStart = scrollTriggerRef.current.start;
        const scrollEnd = scrollTriggerRef.current.end;
        const targetScroll = scrollStart + (scrollEnd - scrollStart) * targetProgress;

        gsap.to(window, {
            scrollTo: targetScroll,
            duration: 0.8,
            ease: "power2.inOut"
        });
    };

    const currentTab = tabs[activeTab];

    return (
        <div className="w-full bg-white">
            <div ref={sectionRef} className="relative">
                {/* Desktop Version - Pinned */}
                <div className="hidden lg:block lg:min-h-screen">
                    <div className="lg:min-h-screen flex items-center bg-white">
                        <div className="max-w-7xl mx-auto px-8 w-full">
                            {/* Tab Navigation */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="bg-white mb-8"
                            >
                                <div className="w-full mx-auto px-4 py-3">
                                    <nav className="flex justify-between w-full gap-6 overflow-x-auto no-scrollbar">
                                        {tabs.map((tab, index) => (
                                            <button
                                                key={tab.id}
                                                onClick={() => handleTabClick(index)}
                                                className={`whitespace-nowrap px-6 py-3 text-xs font-mono uppercase tracking-wide transition-all w-full ${activeTab === index
                                                    ? index === 0
                                                        ? "bg-yellow-300 text-black"
                                                        : index === 1
                                                            ? "bg-purple-300 text-black"
                                                            : index === 2
                                                                ? "bg-pink-300 text-black"
                                                                : "bg-blue-300 text-black"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                    }`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </motion.div>

                            {/* Content Area */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center" id={currentTab.id}>
                                {/* Left Content */}
                                <div className="space-y-6">
                                    {/* Title */}
                                    <div className="relative min-h-[140px]">
                                        <AnimatePresence mode="wait">
                                            <motion.h2
                                                key={`title-${activeTab}`}
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -30, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                className="text-4xl font-medium text-gray-900 leading-tight absolute inset-0"
                                            >
                                                {currentTab.title}
                                            </motion.h2>
                                        </AnimatePresence>
                                    </div>

                                    {/* Bullets */}
                                    <div className="relative min-h-[200px]">
                                        <AnimatePresence mode="wait">
                                            <motion.ul
                                                key={`bullets-${activeTab}`}
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -30, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                                                className="space-y-4 absolute inset-0"
                                            >
                                                {currentTab.bullets.map((bullet, bulletIndex) => (
                                                    <li
                                                        key={bulletIndex}
                                                        className="flex items-start gap-3 text-gray-700"
                                                    >
                                                        <span className="mt-0.5 flex-shrink-0 text-gray-600">
                                                            {bullet.icon}
                                                        </span>
                                                        <span className="text-base leading-relaxed">
                                                            {bullet.text}
                                                        </span>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        </AnimatePresence>
                                    </div>

                                    {/* Buttons */}
                                    <div className="relative min-h-[60px]">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={`buttons-${activeTab}`}
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -30, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                                                className="flex flex-col sm:flex-row gap-4 pt-4 absolute inset-0"
                                            >
                                                <button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg transition-all">
                                                    Get started for free
                                                </button>
                                                <button className="bg-transparent hover:bg-black/5 text-black font-medium px-6 py-3 rounded-lg border-2 border-black transition-all">
                                                    Learn more
                                                </button>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-lg aspect-square">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={`image-${activeTab}`}
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -30, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                                                className="w-full h-full rounded-xl overflow-hidden absolute inset-0"
                                            >
                                                <img
                                                    src={currentTab.image}
                                                    alt={currentTab.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Version - Scrollable Sections */}
                <div ref={mobileContainerRef} className="block lg:hidden">
                    <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
                        <div className="px-4 py-3">
                            <nav className="flex justify-between w-full gap-2 overflow-x-auto no-scrollbar">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabClick(index)}
                                        className={`whitespace-nowrap px-3 py-2 text-[10px] font-mono uppercase tracking-wide transition-all w-full  ${activeTab === index
                                            ? index === 0
                                                ? "bg-yellow-300 text-black"
                                                : index === 1
                                                    ? "bg-purple-300 text-black"
                                                    : index === 2
                                                        ? "bg-pink-300 text-black"
                                                        : "bg-blue-300 text-black"
                                            : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                    {showMobileNav && (
                        <div className="fixed top-12 z-10 bg-white shadow-sm w-full">
                            <div className="px-4 py-3">
                                <nav className="flex justify-between w-full gap-2 overflow-x-auto no-scrollbar">
                                    {tabs.map((tab, index) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => handleTabClick(index)}
                                            className={`whitespace-nowrap px-3 py-2 text-[10px] font-mono uppercase tracking-wide transition-all w-full  ${activeTab === index
                                                ? index === 0
                                                    ? "bg-yellow-300 text-black"
                                                    : index === 1
                                                        ? "bg-purple-300 text-black"
                                                        : index === 2
                                                            ? "bg-pink-300 text-black"
                                                            : "bg-blue-300 text-black"
                                                : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    )}

                    {/* Scrollable Tab Content */}
                    {tabs.map((tab, index) => (
                        <div
                            key={tab.id}
                            id={`tab-${index}`}
                            className="min-h-screen flex items-center py-16 px-4"
                        >
                            <div className="max-w-7xl mx-auto w-full">
                                <div className="space-y-8">
                                    {/* Title */}
                                    <h2 className="text-4xl text-center font-medium text-gray-900 leading-tight">
                                        {tab.title}
                                    </h2>

                                    {/* Bullets */}
                                    <ul className="space-y-3">
                                        {tab.bullets.map((bullet, bulletIndex) => (
                                            <li
                                                key={bulletIndex}
                                                className="flex items-start gap-2 text-gray-700"
                                            >
                                                <span className="mt-0.5 flex-shrink-0 text-gray-600">
                                                    {bullet.icon}
                                                </span>
                                                <span className="text-sm leading-relaxed">
                                                    {bullet.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Buttons */}
                                    <div className="flex flex-col gap-3 pt-4">
                                        <button className="bg-black hover:bg-gray-800 text-white font-medium px-5 py-2.5 rounded-lg transition-all text-sm">
                                            Get started for free
                                        </button>
                                        <button className="bg-transparent hover:bg-black/5 text-black font-medium px-5 py-2.5 rounded-lg border-2 border-black transition-all text-sm">
                                            Learn more
                                        </button>
                                    </div>

                                    {/* Image */}
                                    <div className="flex justify-center mt-8">
                                        <div className="w-full max-w-md aspect-square bg-gray-200 rounded-xl overflow-hidden">
                                            <img
                                                src={tab.image}
                                                alt={tab.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApolloScrollTabs;