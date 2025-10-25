"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TabItem = {
    id: string;
    label: string;
    title: string;
    description: string;
    bullets: string[];
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
            "AI-powered, multichannel campaigns in a click",
            "Built-in email deliverability guardrails",
            "Prioritized task lists to maximize selling",
            "Workflow automations to identify and scale what works",
        ],
        image: "/api/placeholder/600/600",
        bgColor: "bg-yellow-50",
    },
    {
        id: "inbound",
        label: "INBOUND",
        title: "Qualify and act on inbound leads in seconds",
        description: "",
        bullets: [
            "Anonymous visitor identification",
            "Real-time form enrichment",
            "Instant routing with built-in calendar and scheduler",
            "Automated nurture & follow-up sequences",
        ],
        image: "/api/placeholder/600/600",
        bgColor: "bg-purple-50",
    },
    {
        id: "enrichment",
        label: "DATA ENRICHMENT",
        title: "Fuel smarter selling with always-fresh data",
        description: "",
        bullets: [
            "210M+ contacts and 30M+ companies",
            "Verified emails & phone numbers for faster reach",
            "Better targeting and personalization",
            "Clean data across your entire stack and CRM",
        ],
        image: "/api/placeholder/600/600",
        bgColor: "bg-pink-50",
    },
    {
        id: "deal",
        label: "DEAL EXECUTION",
        title: "Capture every conversation, accelerate every deal",
        description: "",
        bullets: [
            "Pre-meeting insights to prep in seconds",
            "AI-powered call summaries, follow-ups, and task creation",
            "Pipeline boards & real-time deal alerts",
            "Conversation insights & performance dashboards for coaching",
        ],
        image: "/api/placeholder/600/600",
        bgColor: "bg-blue-50",
    },
];

const ApolloScrollTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const totalTabs = tabs.length;
            const scrollLength = totalTabs * 100; // 100vh per tab

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${scrollLength}%`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const newIndex = Math.min(
                        totalTabs - 1,
                        Math.floor(progress * totalTabs)
                    );

                    if (newIndex !== activeTab) {
                        setActiveTab(newIndex);
                    }

                    // Animate content opacity based on progress
                    contentRefs.current.forEach((ref, idx) => {
                        if (!ref) return;

                        const tabProgress = progress * totalTabs;
                        const isActive = Math.floor(tabProgress) === idx;

                        if (isActive) {
                            gsap.to(ref, {
                                opacity: 1,
                                y: 0,
                                duration: 0.5,
                            });
                        } else {
                            gsap.to(ref, {
                                opacity: 0,
                                y: idx < tabProgress ? -50 : 50,
                                duration: 0.5,
                            });
                        }
                    });
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [activeTab]);

    const handleTabClick = (index: number) => {
        setActiveTab(index);

        // Scroll to the corresponding position
        if (sectionRef.current) {
            const scrollTrigger = ScrollTrigger.getById(
                ScrollTrigger.getAll()[0]?.vars.id || ""
            );
            if (scrollTrigger) {
                const progress = index / tabs.length;
                const scrollPos = scrollTrigger.start +
                    (scrollTrigger.end - scrollTrigger.start) * progress;
                window.scrollTo({
                    top: scrollPos,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <div className="w-full bg-white">
            <div ref={sectionRef} className="relative min-h-screen">
                {/* Sticky Tab Navigation */}
                <div className="bg-white">
                    <div className="lg:w-[90%] mx-auto px-4 py-3">
                        <nav className="flex justify-between w-full gap-6 overflow-x-auto no-scrollbar">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabClick(index)}
                                    className={`whitespace-nowrap  px-6 py-3 text-xs font-mono uppercase tracking-wide transition-all w-full ${activeTab === index
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
                </div>

                {/* Content Area */}
                <div className="relative">
                    {tabs.map((tab, index) => (
                        <div
                            key={tab.id}
                            ref={(el) => { contentRefs.current[index] = el; }}
                            className={`absolute inset-0 w-full ${activeTab === index ? "opacity-100" : "opacity-0 pointer-events-none"
                                }`}
                        >
                            <div className={`min-h-screen flex items-center`}>
                                <div className="max-w-7xl mx-auto px-8 py-20 w-full">
                                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                                        {/* Left Content */}
                                        <div className="space-y-6">
                                            <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                                                {tab.title}
                                            </h2>

                                            <ul className="space-y-4">
                                                {tab.bullets.map((bullet, bulletIndex) => (
                                                    <li
                                                        key={bulletIndex}
                                                        className="flex items-start gap-3 text-gray-700"
                                                    >
                                                        <span className="mt-2 flex-shrink-0">
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <circle
                                                                    cx="10"
                                                                    cy="10"
                                                                    r="3"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="text-base leading-relaxed">
                                                            {bullet}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                                <button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg transition-all">
                                                    Get started for free
                                                </button>
                                                <button className="bg-transparent hover:bg-black/5 text-black font-medium px-6 py-3 rounded-lg border-2 border-black transition-all">
                                                    Learn more
                                                </button>
                                            </div>
                                        </div>

                                        {/* Right Image */}
                                        <div className="flex justify-center lg:justify-end">
                                            <div className="w-full max-w-lg aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
                                                <div className="text-center">
                                                    <p className="text-gray-500 font-medium">
                                                        {tab.label}
                                                    </p>
                                                    <p className="text-gray-400 text-sm mt-2">
                                                        Image Placeholder
                                                    </p>
                                                </div>
                                            </div>
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