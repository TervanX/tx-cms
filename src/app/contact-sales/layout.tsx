import React from "react";
import Header from "@/components/reusable/NavBar";
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default layout;
