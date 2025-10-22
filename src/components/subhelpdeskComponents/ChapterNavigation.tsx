// src/app/components/ContentLayout/ChapterNavigation.tsx
'use client'

import { motion } from 'framer-motion'

interface ChapterNavigationProps {
    activeSection: string
    sectionProgress?: {
        productivity: any
        usability: any
        outbound: any
        features: any
    }
}

export default function ChapterNavigation({ activeSection, sectionProgress }: ChapterNavigationProps) {
    const navigationItems = [
        { id: 'productivity', label: 'productivity' },
        { id: 'usability', label: 'usability' },
        { id: 'outbound', label: 'outbound' },
        { id: 'features', label: 'features' },
    ]

    const getProgressForSection = (sectionId: string) => {
        if (!sectionProgress) return activeSection === sectionId ? 1 : 0

        switch (sectionId) {
            case 'productivity':
                return sectionProgress.productivity
            case 'usability':
                return sectionProgress.usability
            case 'outbound':
                return sectionProgress.outbound
            case 'features':
                return sectionProgress.features
            default:
                return 0
        }
    }

    return (
        <div
            data-chapter-layout="nav"
            className="sticky top-22 z-10 h-fit [body:has(.top-banner)_&]:top-32 bg-white transition-colors duration-500 "
            id="chapter-navigation"
        >
            <nav aria-label="Chapter navigation">
                <ul className="z-10 mx-auto flex lg:flex-col h-fit w-full overflow-x-auto  [&::-webkit-scrollbar]:hidden">
                    {navigationItems.map((item) => {
                        const isActive = activeSection === item.id
                        const progress = getProgressForSection(item.id)

                        return (
                            <li key={item.id} className="flex-1">
                                <a
                                    className={`flex w-full justify-center px-3 py-[0.875rem] font-sans text-xs/none tracking-[1.2px] whitespace-nowrap uppercase hover:text-black md:justify-start md:px-0 md:whitespace-normal dark:hover:text-white ${isActive ? 'text-black' : 'text-dark/40'
                                        }`}
                                    href={`#${item.id}`}
                                    aria-current={isActive ? 'location' : undefined}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        const element = document.getElementById(item.id)
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' })
                                            window.history.pushState(null, '', `#${item.id}`)
                                        }
                                    }}
                                >
                                    <span
                                        className={`mr-2 hidden size-[10px] rounded-full bg-black md:inline-block ${isActive ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                    {item.label}
                                </a>
                                <span className="relative block h-[1px] w-full bg-dark/20">
                                    <motion.span
                                        className={`absolute top-0 left-0 lg:h-[1px] h-[3px] w-full origin-left ${isActive ? 'opacity-100' : 'opacity-0'
                                            } bg-black`}
                                        style={{
                                            scaleX: progress,
                                            transformOrigin: 'left'
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}