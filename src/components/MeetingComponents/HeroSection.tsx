import React from "react";
import VideoHero from "./VideoSection";
import LogoGrid from "../productComponents/LogoGrid";
// import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div>
      {" "}
      <div className="relative min-h-screen overflow-hidden font-grotesque">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/bg.8.svg"
            alt="Abstract wave pattern background with navy-blue gradient"
            className="absolute inset-0 h-full w-full object-cover text-transparent -z-10"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen  sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl w-full">
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="inline-block">
                <h6 className="sm:text-xl text-lg font-semibold text-[#3B238E] racking-wider mt-10 lg:mt-20 mb-0">
                  MEETINGS{" "}
                </h6>
              </div>

              <h1 className="text-5xl md:text-8xl font-semibold text-dark md:leading-[110px]  px-4 mb-0 text-center">
                Automated meeting scheduling, made for sellers{" "}
              </h1>

              <h6 className="text-lg md:text-xl text-dark max-w-3xl mx-auto px-4 leading-relaxed mb-0 py-2">
                Turn meetings into opportunities faster with pre-meeting
                insights, automated scheduling, and inbound routing flows
              </h6>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 pt-4 mb-0">
                <a href="/sign-up" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px] text-base sm:text-lg">
                    Sign up for free
                  </button>
                </a>
                <a href="/demo" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-dark font-medium px-8 py-3.5 rounded-lg border-2 border-dark transition-all duration-200 min-w-[200px] text-base sm:text-lg">
                    Get Meeting
                  </button>
                </a>
              </div>

              {/* Rating Section */}
              <div className="flex flex-col items-center gap-3 pt-4">
                {/* <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-black stroke-black"
                  />
                ))}
              </div> */}
                <p className="text-base text-dark">
                  <span className="font-medium">4.7</span>/5 based on 9,015
                  reviews <span className="hidden sm:inline">|</span>
                  <span className="hidden sm:inline sm:ml-1 mt-1 sm:mt-0">
                    GDPR Compliant
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <VideoHero
          thumbnailSrc="/assets/videoimage.webp"
          videoSrc="https://www.youtube.com/watch?v=zIfkgC7ZPiQ"
        />
        <LogoGrid className="relative z-30 bg-transparent lg:w-[90%] mx-auto mt-8" />{" "}
      </div>
    </div>
  );
};

export default HeroSection;
