import NavBar from "./NavBar";
import BannerCTA from "@/components/homeComponents/Banner";
import TestimonialCarousel from "@/components/homeComponents/TestimonialCarousel";
import EngageCustomersSection from "@/components/homeComponents/EngageCustomer";
export default function Home() {
  return (
    <div className="">
      <NavBar />
      <EngageCustomersSection/>
      
      <TestimonialCarousel/>
      <BannerCTA/>
    </div>
  );
}
