import NavBar from "./NavBar";
import BannerCTA from "@/components/homeComponents/Banner";
import TestimonialCarousel from "@/components/homeComponents/TestimonialCarousel";
export default function Home() {
  return (
    <div className="">
      <NavBar />
      <TestimonialCarousel/>
      <BannerCTA/>
    </div>
  );
}
