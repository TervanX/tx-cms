import React from "react";
import Footer from "@/components/reusable/Footer";
import Header from "@/components/reusable/NavBar";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:py-8 lg:pt-18 pt-10">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
