import React from "react";
import Footer from "@/components/reusable/Footer";
import Header from "@/components/reusable/NavBar";
import StartupBanner from "@/components/HomePage-1Components/HeaderBanner";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white lg:pts-8 lg:pt-18 pt-12">
      <Header />
      <div> {children}</div>
      <Footer />
    </div>
  );
};

export default layout;
