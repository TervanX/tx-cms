import React from "react";
import Button from "../reusable/Button";
import { HeroProps } from "@/app/types/product.types";
import AutoScrollLogos from "./AutoScroll";
import DottedLine from "./DottedBg";
import Tag from "./Tag";
export function HeroSection({
  backgroundImage = "/assets/image30.webp",
  backgroundAlt = "Abstract wave pattern background",
  tag,
  heading,
  subheading,
  primaryButton,
  secondaryButton,
  rating,
  showRating = true,
  className = "",
}: HeroProps) {
  return (
    <div
      className={`relative min-h-screen overflow-hidden font-grotesque bg-white-transparent ${className} pt-10 lg:pt-0`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={backgroundAlt}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>
      {/* Content Container */}
      <div className="relative  z-10 flex items-center justify-center  px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:max-w-3xl w-full">
          <div className="text-center space-y-6 sm:space-y-6">
            {/* Tag */}
            {tag && (
              // <div className="inline-block bg-[#e8e4dc]">
              //   <h6 className="sm:text-xl text-lg font-medium text-white tracking-wider">
              //     {tag}
              //   </h6>
              // </div>
              <Tag tag={tag} />
            )}

            {/* Main Heading */}
            {heading && (
              <h1 className="text-white font-founders-grotesk text-4xl md:text-7xl font-normal  md:leading-[77px] lg:px-4">
                {heading}
              </h1>
            )}
            <DottedLine />
            {/* Subheading */}
            {subheading && (
              <h6 className="text-white text-sm md:text-base max-w-3xl mx-auto lg:px-4 leading-relaxed">
                {subheading}
              </h6>
            )}

            {/* CTA Buttons */}
            {(primaryButton || secondaryButton) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-3 w-full">
                {primaryButton && (
                  <a
                    className="w-full lg:w-auto relative block lg:inline-block cursor-pointer text-sm rounded-md font-semibold tracking-tight whitespace-nowrap text-white  px-4 py-2.5 leading-none overflow-hidden border-solid border-1 border-white hover:bg-white hover:text-black"
                    href={primaryButton.href}
                  >
                    <span className="absolute inset-0 block w-full rounded-md transition-all duration-400 "></span>
                    <span className="relative z-10 ">{primaryButton.text}</span>
                  </a>
                )}
                {secondaryButton && (
                  <a
                    href={secondaryButton.href}
                    className="w-full lg:w-auto relative block lg:inline-block cursor-pointer text-sm rounded-md font-semibold tracking-tight whitespace-nowrap text-black  px-4 py-2.5 leading-none overflow-hidden border-solid border-1 border-white bg-white hover:bg-gray-50"
                  >
                    <span className="absolute  inset-0 block w-full rounded-md transition-all duration-400 "></span>
                    <span className="relative z-10 ">
                      {secondaryButton.text}{" "}
                    </span>
                  </a>
                )}
              </div>
            )}

            {/* Rating Section */}
            {showRating && rating && (
              <div className="flex justify-center w-full items-center gap-3 pt-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 21"
                      height="15"
                      fill="none"
                    >
                      <path
                        d="M9.73744 1.40386C10.1977 0.439156 11.5709 0.439157 12.0311 1.40386L14.0864 5.71192C14.2681 6.09279 14.627 6.35861 15.0443 6.42134L19.7094 7.12259C20.7383 7.27724 21.1554 8.53515 20.4228 9.27387L16.9932 12.7322C16.7058 13.0219 16.5751 13.4321 16.6419 13.8347L17.444 18.6727C17.6171 19.7166 16.513 20.5023 15.5834 19.9968L11.4914 17.7713C11.1128 17.5654 10.6557 17.5654 10.2772 17.7713L6.18519 19.9968C5.25559 20.5023 4.15148 19.7166 4.32456 18.6727L5.12667 13.8347C5.19342 13.4321 5.06272 13.0219 4.77535 12.7322L1.34576 9.27387C0.613175 8.53515 1.03029 7.27724 2.05911 7.12259L6.72421 6.42134C7.14151 6.35861 7.50045 6.09279 7.68216 5.71192L9.73744 1.40386Z"
                        fill="black"
                      ></path>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-dark">
                  <span className="font-medium">{rating.score}</span>/5 based on{" "}
                  {rating.reviewCount} reviews{" "}
                  {rating.badge && (
                    <>
                      <span className="hidden sm:inline">|</span>
                      <span className="hidden sm:inline sm:ml-1 mt-1 sm:mt-0">
                        {rating.badge}
                      </span>
                    </>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative ">
        <img src="/assets/product2.png" className="w-[80%] mx-auto" />
        {/* <div className="flex items-center w-[80%] mx-auto py-16">
          <div className="flex items-center w-full  border-[rgba(255,255,255,.1)] border-solid border-t-[.3px] border-b-[.3px] ">
            <p className="font-grotesque text-xs lg:text-base  text-left text-white max-w-[12rem]">
              Trusted by more than 25,000 leading brands:
            </p>
            <AutoScrollLogos
              speedSec={40}
              direction="left"
              className="bg-transparent"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
