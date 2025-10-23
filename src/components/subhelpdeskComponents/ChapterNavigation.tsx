// src/app/components/ContentLayout/ChapterNavigation.tsx
"use client";

import { motion } from "framer-motion";

export interface NavigationItem {
    id: string;
    label: string;
    href?: string;
}

export interface SectionProgress {
    [key: string]: any;
}

export interface ChapterNavigationProps {
    activeSection: string;
    sectionProgress?: SectionProgress;
    navigationItems?: NavigationItem[];
    className?: string;
    onSectionClick?: (sectionId: string) => void;
}

export default function ChapterNavigation({
    activeSection,
    sectionProgress,
    navigationItems = [
        { id: "productivity", label: "productivity" },
        { id: "usability", label: "usability" },
        { id: "outbound", label: "Data & Insights" },
        { id: "features", label: "features" },
    ],
    className = "",
    onSectionClick,
}: ChapterNavigationProps) {
    const getProgressForSection = (sectionId: string) => {
        if (!sectionProgress) return activeSection === sectionId ? 1 : 0;
        return sectionProgress[sectionId] ?? (activeSection === sectionId ? 1 : 0);
    };

    const handleSectionClick = (e: React.MouseEvent, item: NavigationItem) => {
        e.preventDefault();

        if (onSectionClick) {
            onSectionClick(item.id);
        } else {
            // Default behavior
            const element = document.getElementById(item.id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", `#${item.id}`);
            }
        }
    };

    return (
        <div
            data-chapter-layout="nav"
            className={`sticky top-22 z-10 h-fit [body:has(.top-banner)_&]:top-32 bg-white transition-colors duration-500 ${className}`}
            id="chapter-navigation"
        >
            <nav aria-label="Chapter navigation">
                <ul className="z-10 mx-auto flex lg:flex-col h-fit w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
                    {navigationItems.map((item) => {
                        const isActive = activeSection === item.id;
                        const progress = getProgressForSection(item.id);

                        return (
                            <li key={item.id} className="flex-1">
                                <a
                                    className={`flex w-full justify-center px-3 py-[0.875rem] font-sans text-xs/none tracking-[1.2px] whitespace-nowrap uppercase hover:text-black md:justify-start md:px-0 md:whitespace-normal dark:hover:text-white ${isActive ? "text-black" : "text-dark/40"
                                        }`}
                                    href={item.href || `#${item.id}`}
                                    aria-current={isActive ? "location" : undefined}
                                    onClick={(e) => handleSectionClick(e, item)}
                                >
                                    <span
                                        className={`mr-2 hidden size-[10px] rounded-full bg-black md:inline-block ${isActive ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                    {item.label}
                                </a>
                                <span className="relative block h-[1px] w-full bg-dark/20">
                                    <motion.span
                                        className={`absolute top-0 left-0 lg:h-[1px] h-[3px] w-full origin-left ${isActive ? "opacity-100" : "opacity-0"
                                            } bg-black`}
                                        style={{
                                            scaleX: progress,
                                            transformOrigin: "left",
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
