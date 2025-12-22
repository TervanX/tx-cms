"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ChapterNavigation from "./ChapterNavigation";

export type SectionComponent = React.ComponentType<any>;

export interface SectionConfig {
  id: string;
  label: string;
  component: SectionComponent;
  props?: any;
}

export interface ContentLayoutProps {
  sections: SectionConfig[];
  className?: string;
  defaultActiveSection?: string;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({
  sections,
  className = "",
  defaultActiveSection,
}) => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(
    defaultActiveSection || sections[0]?.id || ""
  );

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create progress transforms for each section
  const sectionProgress = sections.reduce((acc, section, index) => {
    const start = index / sections.length;
    const end = (index + 1) / sections.length;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    acc[section.id] = useTransform(scrollYProgress, [start, end], [0, 1]);
    return acc;
  }, {} as { [key: string]: any });

  // Improved section tracking using Intersection Observer
  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let currentActive = activeSection;

        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;
          if (ratio > maxRatio && ratio >= 0.3) {
            maxRatio = ratio;
            currentActive = entry.target.id;
          }
        });

        if (maxRatio > 0 && currentActive !== activeSection) {
          setActiveSection(currentActive);
        }
      },
      {
        root: null,
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: "-25% 0px -25% 0px",
      }
    );

    sections.forEach((section) => {
      const ref = sectionRefs.current[section.id];
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeSection, sections]);
  useEffect(() => {
    if (sections.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const ref = sectionRefs.current[section.id];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            if (activeSection !== section.id) {
              setActiveSection(section.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, sections]);

  // Handle hash link clicks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sections.some((section) => section.id === hash)) {
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [sections]);

  // Update URL hash when active section changes
  useEffect(() => {
    if (activeSection) {
      window.history.replaceState(null, "", `#${activeSection}`);
    }
  }, [activeSection]);

  if (sections.length === 0) {
    return <div>No sections configured</div>;
  }

  return (
    <div
      className={`relative pb-12 md:pt-24 2xl:pt-30 ${className}`}
      ref={containerRef}
    >
      <div
        className="mx-auto w-full max-w-[1600px] px-0 md:px-4"
        data-main-content="true"
      >
        <div
          className="relative gap-4 md:grid md:[&:has(>div:nth-child(1):last-child)]:[grid-template-columns:minmax(0,1fr)] md:[&:has(>div:nth-child(2):last-child)]:[grid-template-columns:minmax(0,2fr)_minmax(0,10fr)] md:[&:has(>div:nth-child(3):last-child)]:[grid-template-columns:minmax(0,2fr)_minmax(0,8fr)_minmax(0,2fr)] [&>div:has([data-chapter-layout='nav'])]:sticky [&>div:has([data-chapter-layout='nav'])]:top-[56px] [&>div:has([data-chapter-layout='nav'])]:z-10 md:[&>div:has([data-chapter-layout='nav'])]:static"
          data-chapter-layout="main"
        >
          {/* Navigation Sidebar */}
          <div className="z-40">
            <ChapterNavigation
              activeSection={activeSection}
              sectionProgress={sectionProgress}
              navigationItems={sections.map((section) => ({
                id: section.id,
                label: section.label,
                href: `#${section.id}`,
              }))}
            />
          </div>

          {/* Main Content */}
          <div className="">
            {sections.map((section) => (
              <div
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                id={section.id}
              >
                <section.component {...section.props} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
