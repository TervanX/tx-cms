import { FaStar } from "react-icons/fa6";
import { Marquee } from "../StartupComponents/Marquee";
import { supportData } from "@/app/developers/data";
const SalesPerform = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full justify-between overflow-hidden items-center">
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
        <Marquee items={supportData.marqueedata.marqueeItems} />

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
