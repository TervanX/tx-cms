import Button from "../reusable/Button";
import Link from "next/link";
import { HeroSectionProps } from "@/app/types/startups.types";
const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageUrl = "/assets/image5.webp",
}) => {
  return (
    <section className="px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="container mx-auto px-4">
        <div className="h-20" />
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-left">
            <h1 className="mb-6 text-balance font-founders-grotesk text-[56px] leading-[90%] tracking-[-1.12px] text-dark md:text-[72px] md:tracking-[-1.44px] lg:text-[80px] lg:tracking-[-1.6px] xl:text-[88px] xl:tracking-[-1.76px]">
              {title}
            </h1>
            <div className="mb-4 w-full max-w-5xl text-balance font-abc-diatype text-[20px] leading-[140%] tracking-[-0.4px] text-gray-700 md:text-[24px] md:tracking-[-0.48px]">
              {description}
            </div>
            <div className="flex justify-start ">
              <Link href="/contact/startup">
                <Button variant="primary" size="lg">Apply now</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={imageUrl}
              className="relative aspect-square w-full rounded-xl"
              alt={title}
            />
          </div>
        </div>
        <div className="h-10" />
      </div>
    </section>
  );
};

export default HeroSection;
