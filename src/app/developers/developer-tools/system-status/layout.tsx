import React from "react";
import Footer from "@/components/reusable/Footer";
import Header from "@/components/reusable/NavBar";
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:pt-18 pt-10 font-sans">
            <Header />
            {children}
        </div>
    );
};

export default layout;

