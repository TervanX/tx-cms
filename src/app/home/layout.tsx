import React from "react";
import Footer from "@/components/reusable/Footer";
import Header from "@/components/reusable/NavBar";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white lg:p-8 lg:pt-20 pt-12">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
