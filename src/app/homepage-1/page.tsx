import CardShowcase from "@/components/HomePage-1Components/EveryThingYouNeed";
import MotionHorizontalPeekCarousel from "@/components/HomePage-1Components/MotionHorizontalPeekCarousel";
import StackedAnimation from "@/components/HomePage-1Components/StackedAnimation";

const HomePage = () => {
  return (
    <div className="">
      <div className="lg:mx-8 bg-white rounded-xl relative">
        <div className="px-8 ">
          <StackedAnimation />
          <CardShowcase />
        </div>
        <img
          src={
            "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flines-desktop.58476511.png&w=3840&q=75"
          }
          className="w-full h-100vh absolute z-50 top-[-140%] left-0"
        />
        <MotionHorizontalPeekCarousel />
      </div>
    </div>
  );
};

export default HomePage;
