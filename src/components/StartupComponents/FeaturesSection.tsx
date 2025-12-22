'use client'
import { LucideIcon } from 'lucide-react';

import { FeatureCardProps } from "@/app/types/product.types";

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      // Handle string icons (SVG/HTML)
      return (
        <>
          <div
            className="hidden lg:block"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
          <div
            className="block lg:hidden"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        </>
      );
    } else {
      // Handle Lucide React icons
      const IconComponent = icon as LucideIcon;
      return (
        <>
          <div className="hidden lg:block">
            <IconComponent size={48} className="text-dark" />
          </div>
          <div className="block lg:hidden">
            <IconComponent size={40} className="text-dark" />
          </div>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center text-dark">
      {renderIcon()}
      <div className="flex flex-col items-center gap-2 text-center md:gap-4 lg:px-10">
        <p className="font-founders-grotesk text-2xl lg:text-3xl leading-none text-dark">
          {title}
        </p>
        <p className="font-abc-diatype text-[16px] leading-[130%] text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

interface FeaturesSectionProps {
  features?: FeatureCardProps[];
  title?: string;
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  features = [],
  title = "Why join Apollo for Startups?",
  className = "",
}) => {
  return (
    <div className={`flex justify-center px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 my-28 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center md:gap-6">
          <h4 className="max-w-6xl text-balance font-founders-grotesk text-[36px] leading-none tracking-[-0.72px] text-dark md:text-[48px] md:tracking-[-0.96px] lg:text-[48px] lg:tracking-[-0.96px] xl:text-[56px] xl:tracking-[-1.12px] lg:mb-12 mb-6">
            {title}
          </h4>
        </div>
        <div className="h-10" />
        <div className="grid gap-x-6 gap-y-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="h-10" />
      </div>
    </div>
  );
};

export default FeaturesSection