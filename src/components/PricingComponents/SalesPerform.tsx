import { FaStar } from "react-icons/fa6";
import { Marquee } from "../StartupComponents/Marquee";
import { supportData } from "@/app/developers/data";
const SalesPerform = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 w-full justify-between overflow-hidden items-center lg:mb-12">
      <div className="lg:w-[70%] gap-2 flex flex-col px-4 lg:px-0">
        <p className="text-2xl md:text-3xl font-medium text-dark font-grotesk text-center lg:text-start">
          Compliance & Security at LayerX <br />
          We take compliance seriously — because trust is our foundation
        </p>
        <p className="md:text-lg font-medium text-dark font-grotesk text-center lg:text-start leading-relaxed lg:text-justify ">At LayerX, we build financial infrastructure with security and compliance at the core. Every transaction, integration, and API is protected by industry-grade standards and global regulatory frameworks.
          We don’t just meet expectations — we exceed them to keep your business, customers, and data safe.</p>
        <Ratings />
        <p className="text-xs italic text-dark font-grotesk mt-2  text-center lg:text-start">
          Our systems undergo independent security audits quarterly
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
