"use client";
import React from "react";
import { Menu } from "lucide-react";
import Footer from "@/components/landingComponents/Footer";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

export default function WhatIsNewLayout({ children }: DashBoardLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row grow pt-[60px] lg:pt-12">
      <div className="flex flex-col grow items-stretch rounded-xl  mt-0 lg:mt-[15px] m-[15px]">
        <div className="flex flex-col grow overflow-y-auto pt-5">
          <Header />
          <div className="container mx-auto pt-[60px]">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header
      className="flex items-center fixed z-10 top-0 start-0 end-0 shrink-0 bg-white h-[60px]"
      id="header"
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap gap-3 px-4">
        <a href="/dashboard">
          <img
            className="min-h-[30px]"
            style={{ height: "30px" }}
            src="/assets/logo.svg"
            alt="Logo"
          />
        </a>
        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200 -me-2">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
};
