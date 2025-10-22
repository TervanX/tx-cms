"use client";
import MobileHeader from "@/shared/ui/components/dashLayoutComponent/MobileHeader";
import React from "react";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

export default function WhatIsNewLayout({ children }: DashBoardLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row grow pt-(--header-height) lg:pt-0">
      <div className="flex flex-col grow items-stretch rounded-xl bg-background border border-input  mt-0 lg:mt-[15px] m-[15px]">
        <div
          className="flex flex-col grow kt-scrollable-y-auto  pt-5"
          id="scrollable_content"
        >
          <Header />
          <div className="kt-container-fixed pt-(--header-height)">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header
      className="flex  items-center fixed z-10 top-0 start-0 end-0 shrink-0 bg-muted h-[60px]"
      id="header"
    >
      <div className="kt-container-fixed flex items-center justify-between flex-wrap gap-3">
        <a href="/dashboard">
          <img
            className="dark:hidden min-h-[30px]"
            style={{ height: "30px" }}
            src="/assets/app-icon/logo.png"
            alt="Logo"
          />
          <img
            className="hidden dark:block min-h-[30px]"
            src="/assets/app-icon/logo.png"
            style={{ height: "30px" }}
            alt="Logo Dark"
          />
        </a>
        <button
          className="kt-btn kt-btn-icon kt-btn-ghost -me-2"
          data-kt-drawer-toggle="#sidebar"
        >
          <i className="ki-filled ki-menu" />
        </button>
      </div>
    </header>
  );
};
