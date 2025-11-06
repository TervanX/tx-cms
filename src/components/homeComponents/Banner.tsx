import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface BannerProps {
  backgroundImage?: string;
  backgroundImageLQIP?: string;
  altText?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  title?: string;
}

const BannerCTA: React.FC<BannerProps> = ({
  backgroundImage = "/assets/pilot.jpg",
  backgroundImageLQIP,
  altText = "background",
  primaryButton = {
    text: "Contact Sales",
    href: "/contact/contact-sales",
  },
  secondaryButton = {
    text: "Login",
    href: "/auth/login",
  },
  title = "Start delivering omnichannel support today",
}) => {
  console.log(backgroundImage);
  return (
    <div className="bg-black">
      <article className="relative w-full max-h-screen mx-auto grid overflow-hidden">
        {/* Hero Media Container */}
        <div className="row-start-1 col-start-1 z-0 w-full max-w-full mx-auto overflow-hidden aspect-square md:aspect-[5/3]">
          <div className="relative w-full h-full overflow-hidden transform translate-z-0 backface-hidden">
            <Image
              alt={altText}
              src="/assets/pilot.jpg"
              fill
              sizes="(min-width: 1920px) 1920px, 100vw"
              className="object-cover object-center opacity-100 transition-opacity duration-[800ms]"
              loading="lazy"
              placeholder={backgroundImageLQIP ? "blur" : "empty"}
              blurDataURL={backgroundImageLQIP}
            />
            {/* 20% overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="row-start-1 col-start-1 z-10 w-full max-w-[1920px] mx-auto px-3 md:px-4 py-8 md:py-16 grid place-items-center">
          <div className="flex flex-col items-center gap-6 text-white text-center">
            <h2 className="text-[clamp(40px,5vw,47px)] leading-none tracking-[-0.05em] font-bold lg:max-w-[600px] md:text-[clamp(39px,5vw,47px)]">
              {title}
            </h2>

            <div className="flex flex-col w-full gap-2 sm:flex-row sm:w-auto">
              {secondaryButton && (
                <Link
                  href="/auth/login"
                  className="text-base leading-none font-semibold tracking-tight cursor-pointer rounded-md border border-white px-2 py-2 transition-all duration-300 text-white hover:text-white/80"
                >
                  <span>Login</span>
                </Link>
              )}

              {primaryButton && (
                <Link
                  href="/contact/contact-sales"
                  className="relative inline-block cursor-pointer rounded-md font-semibold tracking-tight whitespace-nowrap text-black text-base px-4 py-2.5 leading-none overflow-hidden"
                >
                  <span className="absolute inset-0 block w-full rounded-md transition-all duration-400 bg-white group-hover:bg-white/80"></span>
                  <span className="relative z-10"> Contact Sales</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BannerCTA;
