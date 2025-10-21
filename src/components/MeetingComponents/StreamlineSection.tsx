import React from "react";
import Button from "../reusable/Button";
const StreamlineSection = () => {
  return (
    <div>
      <div className="relative  overflow-hidden font-grotesque">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/bg.8.svg"
            alt="Abstract wave pattern background with navy-blue gradient"
            className="absolute inset-0 h-full w-full object-cover text-transparent -z-10"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center  sm:px-6 lg:px-8 py-8 lg:py-18">
          <div className="max-w-6xl w-full">
            <div className="text-center space-y-6 sm:space-y-8">
              <h1 className="text-5xl lg:text-7xl font-grotesque font-semibold text-dark md:leading-[80px] px-4 mb-0 text-center lg:w-[80%] lg:mx-auto">
                Streamline your meetings and watch your pipeline grow
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 pt-4 mb-0">
                <a href="/sign-up" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px] text-base sm:text-lg">
                    Sign up for free
                  </Button>
                </a>
                <a href="/demo" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-dark font-medium px-8 py-3.5 rounded-lg border-2 border-dark transition-all duration-200 min-w-[200px] text-base sm:text-lg">
                    Get Meeting
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamlineSection;
