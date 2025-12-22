import React from "react";
import Footer from "@/components/reusable/Footer";
import Header from "@/components/reusable/NavBar";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-clip bg-background">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
