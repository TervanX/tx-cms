import React from "react";
import Header from "@/components/landingComponents/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
        </div>

    );
};

export default layout;
