import { FaStar } from "react-icons/fa6";
const SalesPerform = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div>
        <p className="text-[24px] font-medium text-dark font-grotesk text-center lg:text-start">
          The most loved sales platform on the planet
        </p>
        <Ratings />
        <p className="text-xs text-dark font-grotesk mt-2  text-center lg:text-start">
          4.7/5 based on 9,015 reviews | GDPR Compliant
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 px-3 lg:px-0 w-[80%] mx-auto lg:w-full">
          <div className="flex items-center justify-center">
            <img
              src="/assets/2025-spring-top50-small-business-products.39d1f8e7.svg"
              className="max-h-[144px] max-w-[127px] object-contain"
              alt="Award 1"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/2025-spring-top50-small-business-products.39d1f8e7.svg"
              className="max-h-[144px] max-w-[127px] object-contain"
              alt="Award 1"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/2025-spring-top50-small-business-products.39d1f8e7.svg"
              className="max-h-[144px] max-w-[127px] object-contain"
              alt="Award 1"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/2025-spring-top50-small-business-products.39d1f8e7.svg"
              className="max-h-[144px] max-w-[127px] object-contain"
              alt="Award 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPerform;

const Ratings = () => {
  return (
    <div className="mt-2">
      <div className="flex space-x-1 justify-center lg:justify-start">
        <FaStar color="#9d73ff" size={20} />
        <FaStar color="#9d73ff" size={20} />
        <FaStar color="#9d73ff" size={20} />
        <FaStar color="#9d73ff" size={20} />
        <FaStar color="#9d73ff" size={20} />
      </div>
    </div>
  );
};
