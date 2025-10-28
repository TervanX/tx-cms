import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";

interface LogoGridProps {
  className?: string;
  gap?: string;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  py?: string;
  maxLogosPerRow?: number;
  backgroundColor?: string;
  svgColor?: string;
  w?: string;
}

const LogoGrid: React.FC<LogoGridProps> = ({
  className = "h-10 filter invert-0 brightness-0",
}) => {
  const logosArray = [
    { url: "/assets/Stripe.png", imageAlt: "Stripe" },
    { url: "/assets/flutterwave.svg", imageAlt: "flutterwave" },
    { url: "/assets/Checkbox.webp", imageAlt: "Checkbox" },
    { url: "/assets/1200px-Paystack_Logo.png", imageAlt: "Paystack_Logo" },
    { url: "/assets/fireblocks-logo.svg", imageAlt: "fireblocks" },
  ];

  const [windowWidth, setWindowWidth] = useState(1440);
  const { scrollY } = useScroll();
  // Get window width on client side only
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.div
      className="flex w-max gap-10"
      animate={{
        x: [0, -windowWidth / 2],
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      }}
    >
      {/* Original logos */}
      {logosArray.map((logoItem, index) => (
        <motion.span
          key={`original-${logoItem.imageAlt}-${index}`}
          className="flex gap-10 font-semibold whitespace-nowrap text-lg lg:text-[32px]"
          whileHover={{ scale: 1.1, color: "#60a5fa" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={logoItem.url}
            alt={logoItem.imageAlt}
            height="20"
            className={`h-10 ${className}`}
          />
        </motion.span>
      ))}

      {logosArray.map((logoItem, index) => (
        <motion.span
          key={`duplicate-${logoItem.imageAlt}-${index}`}
          className="flex gap-10 font-semibold whitespace-nowrap text-lg lg:text-[32px]"
          whileHover={{ scale: 1.1, color: "#60a5fa" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={logoItem.url}
            alt={logoItem.imageAlt}
            height="20"
            className="h-10 filter brightness-0 invert"
          />
        </motion.span>
      ))}
      {logosArray.map((logoItem, index) => (
        <motion.span
          key={`duplicate-${logoItem.imageAlt}-${index}`}
          className="flex gap-10 font-semibold whitespace-nowrap text-lg lg:text-[32px]"
          whileHover={{ scale: 1.1, color: "#60a5fa" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={logoItem.url}
            alt={logoItem.imageAlt}
            height="20"
            className="h-10 filter brightness-0 invert"
          />
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LogoGrid;
