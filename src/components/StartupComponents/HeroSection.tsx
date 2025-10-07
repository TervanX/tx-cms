import Button from "../reusable/Button";
const HeroSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="container mx-auto px-4">
      <div className="h-20" />
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center text-left">
          <h1 className="mb-6 text-balance font-founders-grotesk text-[56px] leading-[90%] tracking-[-1.12px] text-dark md:text-[72px] md:tracking-[-1.44px] lg:text-[80px] lg:tracking-[-1.6px] xl:text-[88px] xl:tracking-[-1.76px]">
            Power up your startup with Apollo
          </h1>
          <div className="mb-4 w-full max-w-5xl text-balance font-abc-diatype text-[20px] leading-[140%] tracking-[-0.4px] text-gray-700 md:text-[24px] md:tracking-[-0.48px]">
            Unlock world-class go-to-market resources and exclusive perks when you join the Apollo for Startups community.
          </div>
          <div className="flex justify-start ">
            <Button variant="primary" size="lg">Apply now</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/assets/image5.webp" className="relative aspect-square w-full rounded-xl"alt="join apollo" />
        </div>
      </div>
      <div className="h-10" />
      </div>
    </section>
  );
};

export default HeroSection