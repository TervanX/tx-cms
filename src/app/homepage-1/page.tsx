"use client";
import { useEffect, useRef, useState } from "react";
import CompaniesSection from "@/components/homeComponents/CompanySection";
import FooterCTA from "@/components/homeComponents/FooterCta";
import HeroSection from "@/components/homeComponents/HeroSection";
import ApolloTestimonials from "@/components/homeComponents/Testimonial";
import CardShowcase from "@/components/HomePage-1Components/EveryThingYouNeed";
import MotionHorizontalPeekCarousel from "@/components/HomePage-1Components/MotionHorizontalPeekCarousel";
import StackedAnimation from "@/components/HomePage-1Components/StackedAnimation";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.28,
      when: "beforeChildren",
    },
  },
};

const cardVariants: Variants = {
  offscreen: {
    y: 120,
    opacity: 1,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.7,
    },
  },
};

const HomePage = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [imageTop, setImageTop] = useState<number>(0);

  // ✅ Measure the bottom position of the CardShowcase
  useEffect(() => {
    const updatePosition = () => {
      if (showcaseRef.current) {
        const rect = showcaseRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const bottom = rect.bottom + scrollTop;
        setImageTop(bottom); // set image top position equal to card bottom
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div>
      <div className="lg:mx-8 rounded-xl">
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.3, once: false }}
        >
          <div className="sticky top-0 z-0">
            <motion.div
              variants={cardVariants}
              style={{ willChange: "transform" }}
            >
              <HeroSection />
            </motion.div>
          </div>

          <div className="sticky top-0 z-10">
            <motion.div
              variants={cardVariants}
              style={{ willChange: "transform" }}
            >
              <CompaniesSection />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ✅ Rest of page */}
      <div className="mx-8 bg-white rounded-xl relative top-20 bordder-solid border-primary" >
        {/* ✅ Image positioned dynamically using card bottom */}
        <img
        className="z-50"
          src={
            "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flines-desktop.58476511.png&w=3840&q=75"
          }
          style={{
            position: "absolute",
            top: `${imageTop}px`, // <-- dynamic position
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            zIndex: 20,
          }}
        />

        <div className="px-8">
          <StackedAnimation />
          <div ref={showcaseRef}>
            <CardShowcase />
          </div>
          <MotionHorizontalPeekCarousel />
          <ApolloTestimonials />
          <FooterCTA />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
