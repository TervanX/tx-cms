// components/ui/BackgroundImages.tsx
import React from 'react';

const BackgroundImages: React.FC = () => {
  return (
    <div className="relative" id="top">
      <img
        alt="Abstract geometric pattern background"
        loading="lazy"
        decoding="async"
        className="z-0 hidden max-h-[1480px] object-cover xl:block 2xl:max-h-[1760px] absolute inset-0 color-transparent"
        src="/assets/bg.a39ccb71.svg"
      />
      <img
        alt="Abstract geometric pattern background for desktop"
        loading="lazy"
        decoding="async"
        className="max-h-[1024px] 2xl:max-h-[1670px] z-0 hidden max-h-[1050px] object-cover lg:block xl:hidden absolute inset-0 color-transparent"
        src="/assets/bg-desktop-s.a870565d.svg"
      />
      <img
        alt="Abstract geometric pattern background for tablet"
        loading="lazy"
        decoding="async"
        className="z-0 hidden max-h-[768px] object-cover md:block lg:hidden absolute inset-0 color-transparent"
        src="/assets/bg-tablet.72efa3a7.svg"
      />
      <img
        alt="Abstract geometric pattern background for mobile"
        loading="lazy"
        decoding="async"
        className="z-0 max-h-[375px] object-cover md:hidden absolute inset-0 color-transparent"
        src="/assets/bg-mobile.7bf553ed.svg"
      />
      <div className="pointer-events-none fixed left-0 top-0 h-full w-full opacity-0"></div>
    </div>
  );
};

export default BackgroundImages;