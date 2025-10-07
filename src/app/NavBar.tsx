"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward, IoIosArrowDown, IoMdClose } from "react-icons/io";
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

  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-70 px-6 ${
        isScrolled ? "bg-white" : ""
      }`}
    >
      <DeskTopNavbar />
      <MobileNav
        isOpen={showSideBar}
        toggle={() => {
          setShowSideBar(!showSideBar);
        }}
      />
      <AnimatePresence>
        {showSideBar && (
          <SideBar isOpen={showSideBar} onClose={() => setShowSideBar(false)} />
        )}
      </AnimatePresence>{" "}
    </header>
  );
};

const DeskTopNavbar = () => {
  return (
    <div className=" py-4 hidden lg:flex items-center justify-between">
      <div className="flex gap-10 items-center justify-start">
        <div className="flex items-center gap-2 font-bold text-lg">
          <img src="/assets/logo.svg" className="h-6 w-6" />
          <span className="font-medium font-grotesque "></span>
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

interface MobileNavProps {
  toggle: () => void;
  isOpen: boolean;
}
const MobileNav: React.FC<MobileNavProps> = ({ toggle, isOpen }) => {
  return (
    <header className="lg:px-8 py-3 flex items-center justify-between lg:hidden fixed top-0 left-0 w-screen z-50 px-6 ">
      <div className="flex gap-10 items-center justify-start">
        <div className="flex items-center gap-2 font-bold text-lg">
          <img src="/assets/logo.svg" className="h-6 w-6" />
          <span className="font-medium font-grotesque "></span>
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

        <button onClick={toggle}>
          {isOpen ? <IoMdClose size={18} /> : <Menu size={18} />}
        </button>
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
      <button className="text-dark font-grotesque text-sm font-medium transition">
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
                    <p className="font-grotesque font-medium text-lg lg:leading-[110%] leading-[110%]">
                      Pipeline Builder
                    </p>
                    <p className="text-xs text-sand font-grotesque ">
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
                  <p className="text-xs text-sand font-grotesque ">
                    Apollo Platform{" "}
                  </p>
                  <a className="text-xs text-dark  font-grotesque ">
                    B2B Prospecting Data
                  </a>
                  <a className="text-xs text-dark  font-grotesque ">
                    B2B Prospecting Data
                  </a>
                  <a className="text-xs text-dark  font-grotesque ">
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
                  <p className="text-xs text-sand font-grotesque ">
                    Apollo Platform{" "}
                  </p>
                  <a className="text-xs text-dark  font-grotesque ">
                    B2B Prospecting Data
                  </a>
                  <a className="text-xs text-dark  font-grotesque ">
                    B2B Prospecting Data
                  </a>
                  <a className="text-xs text-dark  font-grotesque ">
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

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="fixed w-screen h-screen top-16 pb-10 pt-4 right-0 overflow-y-auto bg-white flex flex-col justify-between items-start lg:hidden z-30 "
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      <div className="w-full ">
        <AccordionItem
          item={""}
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        />
      </div>

      <div className="flex w-full gap-4 px-6 py-10">
        <Button
          size="md"
          variant="outline"
          type="button"
          onClick={() => {}}
          className="flex-1"
        >
          Log in
        </Button>
        <Button
          size="md"
          variant="outline"
          type="button"
          onClick={() => {}}
          className="flex-1"
        >
          Get a demo
        </Button>
      </div>
    </motion.div>
  );
};

interface AccordionItemProps {
  item: any;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="font-grotesque">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-5 px-6 text-left"
        aria-expanded={isOpen}
      >
        <h6 className="text-2xl  font-medium text-dark pr-8">Platform</h6>
        <div className={`flex-shrink-0 transition-transform duration-200`}>
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
      </button>

      <div
        className={`overflow-y-scroll  transition-all duration-300 ease-in-out px-6 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-5 text-dark text-sm lg:text-base leading-relaxed  border-gray-200 border-t-[1.5px] pt-4">
          <div className="flex flex-col lg:flex-row gap-6 ">
            <div className="flex flex-col basis-[18%] flex-grow min-w-[135px] max-w-[400px]">
              <div className="flex justify-between items-start gap-3">
                <div className="flex flex-col w-[60%] items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        "https://downloads.intercomcdn.com/i/o/dyws6i9m/660849/970a84bb581c3b460c00fb367a68/4f4de1669475646edd26e2729182f8f9.png"
                      }
                      className="h-6 w-6"
                    />
                    <p className="font-grotesque font-medium text-lg lg:leading-[110%] leading-[110%]">
                      Pipeline Builder
                    </p>
                  </div>
                  <p className="text-xs text-sand font-grotesque mt-2">
                    Find the right people and book quality meetings{" "}
                  </p>
                </div>
                <div className="w-[40%] flex items-center justify-end">
                  <div>
                    <Button
                      size="sm"
                      variant="outline"
                      type="button"
                      onClick={() => {}}
                      children={"Learn more"}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <a className="text-xs text-dark  font-grotesque ">
                  B2B Prospecting Data
                </a>
                <a className="text-xs text-dark  font-grotesque ">
                  B2B Prospecting Data
                </a>
                <a className="text-xs text-dark  font-grotesque ">
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
                <p className="text-xs text-sand font-grotesque ">
                  Apollo Platform{" "}
                </p>
                <a className="text-xs text-dark  font-grotesque ">
                  B2B Prospecting Data
                </a>
                <a className="text-xs text-dark  font-grotesque ">
                  B2B Prospecting Data
                </a>
                <a className="text-xs text-dark  font-grotesque ">
                  B2B Prospecting Data
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
