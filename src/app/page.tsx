import Header from "@/components/landingComponents/Header";
import HeroSection from "@/components/landingComponents/HeroSection";
import Footer from "@/components/landingComponents/Footer";
export default function Homepage() {
  return (
    <div className="grid min-h-screen content-between bg-black text-white">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
