'use client';

import React from "react";
import Header from "@/components/reusable/NavBar";
import WaitlistHeader from "@/components/landingComponents/Header";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isWaitlistPage = pathname === '/contact/waitlist';

    return (
        <div>
            {isWaitlistPage ? <WaitlistHeader /> : <Header />}
            {children}
        </div>
    );
};

export default Layout;