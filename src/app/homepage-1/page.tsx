"use client";
import CompaniesSection from "@/components/homeComponents/CompanySection";
import FooterCTA from "@/components/homeComponents/FooterCta";
import HeroSection from "@/components/homeComponents/HeroSection";
import ApolloTestimonials from "@/components/homeComponents/Testimonial";
import CardShowcase from "@/components/HomePage-1Components/EveryThingYouNeed";
import MotionHorizontalPeekCarousel from "@/components/HomePage-1Components/MotionHorizontalPeekCarousel";
import StackedAnimation from "@/components/HomePage-1Components/StackedAnimation";
import { motion, AnimatePresence, Variants } from "framer-motion";
const HomePage = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div className="">
      <div className="mx-8 rounded-xl">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
          className="relative"
        >
          <div />
          <motion.div variants={cardVariants}>
            <HeroSection />
          </motion.div>
          <motion.div variants={cardVariants}>
            <CompaniesSection />
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-8 bg-white rounded-xl">
        <div className="px-8 ">
          <StackedAnimation />
          <CardShowcase />
          {/* <img
            src={
              "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flines-desktop.58476511.png&w=3840&q=75"
            }
            className="w-full h-100vh absolute z-20 top-0 left-0"
          /> */}
          <MotionHorizontalPeekCarousel />
          <ApolloTestimonials />
          <FooterCTA />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
