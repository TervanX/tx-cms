import React from "react";
import VideoHero from "./VideoSection";
import LogoGrid from "../productComponents/LogoGrid";
import Button from "../reusable/Button";

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
                  <Button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px] text-base sm:text-lg">
                    Sign up for free
                  </Button>
                </a>
                <a href="/contact-sales" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-dark font-medium px-8 py-3.5 rounded-lg border-2 border-dark transition-all duration-200 min-w-[200px] text-base sm:text-lg">
                    Get Meeting
                  </Button>
                </a>
              </div>

              {/* Rating Section */}
              <div className="flex flex-col items-center gap-3 pt-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((i) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" height="15" fill="none" key={i}><path d="M9.73744 1.40386C10.1977 0.439156 11.5709 0.439157 12.0311 1.40386L14.0864 5.71192C14.2681 6.09279 14.627 6.35861 15.0443 6.42134L19.7094 7.12259C20.7383 7.27724 21.1554 8.53515 20.4228 9.27387L16.9932 12.7322C16.7058 13.0219 16.5751 13.4321 16.6419 13.8347L17.444 18.6727C17.6171 19.7166 16.513 20.5023 15.5834 19.9968L11.4914 17.7713C11.1128 17.5654 10.6557 17.5654 10.2772 17.7713L6.18519 19.9968C5.25559 20.5023 4.15148 19.7166 4.32456 18.6727L5.12667 13.8347C5.19342 13.4321 5.06272 13.0219 4.77535 12.7322L1.34576 9.27387C0.613175 8.53515 1.03029 7.27724 2.05911 7.12259L6.72421 6.42134C7.14151 6.35861 7.50045 6.09279 7.68216 5.71192L9.73744 1.40386Z" fill="black"></path></svg>
                  ))}
                </div>
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
        <LogoGrid className="relative z-30 bg-transparent lg:w-[90%] mx-auto mt-8" backgroundColor="transparent" />
      </div>
    </div>
  );
};

export default HeroSection;
