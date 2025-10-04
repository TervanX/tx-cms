import React from "react";

const SolutionSection = () => {
  return (
    <div className="font-grotesque  bg-black text-white py-8">
      <div className=" px-6 md:px-0 lg:py-12 w-full  md:w-3/4 lg:w-2/3 mx-auto">
        <h2 className="font-grotesque font-medium text-2xl md:4xl lg:5xl lg:px-4">
          “We wanted to consolidate our tools,We have gotten rid of Chili Piper
          because we have now, in Apollo, this better Meetings feature. Why
          would we not use the better feature? Now instead of paying three
          licenses, we pay for one.”
        </h2>
        <div className="relative z-10 flex items-center justify-center   lg:px-4 py-6">
          <div className="flex  items-center justify-start w-full gap-4">
            <img
              src="https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjens.bd3f190a.png&w=256&q=75"
              className="w-[80px] lg:w-[105px] h-auto rounded-full"
            />
            <div>
              <h5 className="text-xl font-bold">Jens Stockel</h5>
              <h5 className="text-xl font-medium">
                Regional Sales Manager, Bitrise
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
