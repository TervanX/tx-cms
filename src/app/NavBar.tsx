"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/reusable/Button";
import { Menu } from "lucide-react";

const navItems = [
  {
    label: "Platform",
    dropdown: [
      { label: "Overview", href: "#" },
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    label: "Platform",
    dropdown: [
      { label: "Overview", href: "#" },
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    label: "Platform",
    dropdown: [
      { label: "Overview", href: "#" },
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    label: "Platform",
    dropdown: [
      { label: "Overview", href: "#" },
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
];

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-20 px-6 ${
            isScrolled ? 'bg-white' : ''
          }`}>
      <DeskTopNavbar />
      <MobileNav />
    </header>
  );
};

const DeskTopNavbar = () => {
  return (
    <div className=" py-4 hidden lg:flex items-center justify-between">
      <div className="flex gap-10 items-center justify-start">
        <div className="flex items-center gap-2 font-bold text-lg">
          <img
            src={
              "https://downloads.intercomcdn.com/i/o/dyws6i9m/660849/970a84bb581c3b460c00fb367a68/4f4de1669475646edd26e2729182f8f9.png"
            }
            className="h-6 w-6"
          />
          <span className="font-medium font-grotesk ">Apollo</span>
        </div>
        <nav className="hidden lg:flex gap-6 relative">
          {navItems.map((item, index) => (
            <NavItem navName="Platform" children={""} key={index} />
          ))}
        </nav>
      </div>
      <div className="flex  items-center gap-3">
        <Button
          size="md"
          variant="ghost"
          type="button"
          onClick={() => {}}
          children={"Log in"}
        />
        <Button
          size="md"
          variant="outline"
          type="button"
          onClick={() => {}}
          children={"Get a demo"}
        />
        <Button
          size="md"
          variant="primary"
          type="button"
          onClick={() => {}}
          children={"Sign up for free"}
        />
      </div>
    </div>
  );
};

export default Header;

const MobileNav = () => {
  return (
    <header className="px-8 py-4 flex items-center justify-between lg:hidden">
      <div className="flex gap-10 items-center justify-start">
        <div className="flex items-center gap-2 font-bold text-lg">
          <img
            src={
              "https://downloads.intercomcdn.com/i/o/dyws6i9m/660849/970a84bb581c3b460c00fb367a68/4f4de1669475646edd26e2729182f8f9.png"
            }
            className="h-6 w-6"
          />
          <span className="font-medium font-grotesk ">Apollo</span>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-end">
        <Button
          size="md"
          variant="primary"
          type="button"
          onClick={() => {}}
          children={"Sign up for free"}
        />
        <Button
          size="md"
          variant="ghost"
          type="button"
          onClick={() => {}}
          children={<Menu size={18} />}
        />
      </div>
    </header>
  );
};

interface NavItemProps {
  navName: string;
  children: any;
}

const NavItem: React.FC<NavItemProps> = ({ navName }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      key={navName}
      onMouseEnter={() => setHovered(navName)}
      onMouseLeave={() => setHovered(null)}
      className="relative"
    >
      <button className="text-black font-grotesk text-sm font-medium transition">
        {navName}
      </button>

      <AnimatePresence>
        {hovered === navName && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 2 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-12 w-auto rounded-xl bg-white drop-shadow-md z-50"
          >
            <div className="flex flex-col lg:flex-row gap-6 p-8">
              <div className="flex flex-col basis-[18%] flex-grow min-w-[135px] max-w-[400px]">
                <div className="flex flex-col  items-start gap-3">
                  <div className="flex flex-col items-start gap-3">
                    <img
                      src={
                        "https://downloads.intercomcdn.com/i/o/dyws6i9m/660849/970a84bb581c3b460c00fb367a68/4f4de1669475646edd26e2729182f8f9.png"
                      }
                      className="h-6 w-6"
                    />
                    <p className="font-grotesk font-medium text-lg lg:leading-[110%] leading-[110%]">
                      Pipeline Builder
                    </p>
                    <p className="text-xs text-sand font-grotesk ">
                      Find the right people and book quality meetings{" "}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    type="button"
                    onClick={() => {}}
                    children={"Learn more"}
                  />
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-xs text-sand font-grotesk ">
                    Apollo Platform{" "}
                  </p>
                  <a className="text-xs text-black  font-grotesk ">
                    B2B Prospecting Data
                  </a>
                  <a className="text-xs text-black  font-grotesk ">
                    B2B Prospecting Data
                  </a>
                  <a className="text-xs text-black  font-grotesk ">
                    B2B Prospecting Data
                  </a>
                </div>
              </div>
              <div className="flex flex-col basis-[18%] flex-grow min-w-[135px] max-w-[400px]">
                <img
                  className="w-[194px] h-auto rounded-lg"
                  src={
                    "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75"
                  }
                />
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-xs text-sand font-grotesk ">
                    Apollo Platform{" "}
                  </p>
                  <a className="text-xs text-black  font-grotesk ">
                    B2B Prospecting Data
                  </a>
                  <a className="text-xs text-black  font-grotesk ">
                    B2B Prospecting Data
                  </a>
                  <a className="text-xs text-black  font-grotesk ">
                    B2B Prospecting Data
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
