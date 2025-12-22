import Header from "@/components/landingComponents/Header";
import HeroSection from "@/components/landingComponents/HeroSection";
import Footer from "@/components/landingComponents/Footer";
export default function Homepage({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black text-white">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
