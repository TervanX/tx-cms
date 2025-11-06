"use client";
import Header from "@/components/reusable/NavBar";
import React from "react";
import Footer from "@/components/reusable/Footer";
import { div } from "framer-motion/client";

interface DashBoardLayoutProps {
    children: React.ReactNode;
}

export default function WhatIsNewLayout({ children }: DashBoardLayoutProps) {
    return (
        <div>
            <div className="flex flex-col lg:flex-row grow pt-[60px] lg:pt-12">
                <div className="flex flex-col grow items-stretch rounded-xl mt-0 lg:mt-[15px] m-[15px]">
                    <div
                        className="flex flex-col grow overflow-y-auto pt-5"
                    >
                        <Header bg="bg-transparent" />
                        <div className="container mx-auto pt-[60px]">
                            {children}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
