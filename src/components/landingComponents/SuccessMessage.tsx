"use client";
import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SuccessMessageProps {
    title?: string;
    message?: string;
    icon?: React.ReactNode;
}

export default function SuccessMessage({
  title = "Thank you for your interest in LayerX",
  message = "Our partnerships team will review your request and contact you within 24 to 48 hours to guide you through the onboarding process.",
  icon = <CheckCircle className="w-20 h-20 text-green-500" />,
}: SuccessMessageProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md mx-auto p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Icon */}
        <motion.div
          className="mb-6 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
          >
            {icon}
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-2xl font-bold text-gray-900 mb-4 font-serif"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        {/* Message */}
        <motion.p
          className="text-gray-600 leading-relaxed"
          variants={itemVariants}
        >
          {message}
        </motion.p>
      </motion.div>
    </main>
  );
}