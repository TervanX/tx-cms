import React from "react";
// import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden font-grotesk">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg.5.svg"
          alt="Abstract wave pattern background with blue gradient"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl w-full">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Tag */}
            <div className="inline-block">
              <h6 className="sm:text-xl text-lg font-bold text-blue racking-wider">
                CONTACT & ACCOUNT SEARCH
              </h6>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-dark leading-tight px-4">
              Better B2B lead generation & prospecting
            </h1>

            {/* Subheading */}
            <h6 className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4 leading-relaxed">
              With the world's largest living data network and AI
              recommendations, your best leads are just a search away.
            </h6>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 pt-4">
              <a href="/sign-up" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px]">
                  Sign up for free
                </button>
              </a>
              <a href="/demo" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-lg border-2 border-white transition-all duration-200 min-w-[200px]">
                  Get a demo
                </button>
              </a>
            </div>

            {/* Rating Section */}
            <div className="flex flex-col items-center gap-3 pt-6">
              {/* <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-black stroke-black"
                  />
                ))}
              </div> */}
              <p className="text-sm text-white/90">
                <span className="font-bold">4.7</span>/5 based on 9,015 reviews{" "}
                <span className="hidden sm:inline">|</span>
                <span className="block sm:inline sm:ml-1 mt-1 sm:mt-0">
                  GDPR Compliant
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
