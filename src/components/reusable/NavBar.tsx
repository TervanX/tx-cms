"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward, IoIosArrowDown, IoMdClose } from "react-icons/io";
import Button from "@/components/reusable/Button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItemInterface {
  title: string;
  href?: string;
  solutions?: {
    logo: React.ReactNode;
    title: string;
    description: string;
    linkTitle?: string;
    links?: { href: string; text: string }[];
  }[];
  platforms?: {
    logo: string;
    tag: string;
    descriptions: string;
    links?: { href: string; text: string }[];
  }[];
}

const navItems: NavItemInterface[] = [
  {
    title: "Platform",
    solutions: [
      {
        logo: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
              <path
                d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
                fill="black"
              ></path>
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
            </g>
          </svg>
        ),
        title: "Pipeline Builder",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          { href: "#", text: "B2B Prospecting Data" },
          { href: "#", text: "Multichannel Outreach" },
          { href: "#", text: "AI Assistants" },
        ],
      },
      {
        logo: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M17.7078 13.7792L10.9128 2.01439C10.0635 0.547288 7.94355 0.547288 7.09418 2.01439L0.299197 13.7792C-0.550176 15.2463 0.509785 17.0855 2.20853 17.0855H15.7915C17.4902 17.0855 18.5502 15.2463 17.7008 13.7792H17.7078ZM15.8827 15.6114L9.00351 13.5687L2.12429 15.6114C1.53465 15.7869 1.10645 15.0568 1.54167 14.6286L6.86955 9.33584L8.4279 2.80058C8.56829 2.1969 9.4317 2.1969 9.5721 2.80058L11.1305 9.33584L16.4583 14.6286C16.8935 15.0638 16.4583 15.7869 15.8757 15.6114H15.8827Z"
              fill="black"
            ></path>
          </svg>
        ),
        title: "Call Assistant",
        description: "Turn conversations into deals with AI assistance",
        linkTitle: "Sales Leaders",
        links: [
          { href: "#", text: "Meeting Scheduler" },
          { href: "#", text: "Pre-Meeting Insights" },
          { href: "#", text: "Call Recorder & Insights" },
          { href: "#", text: "Automated Meeting Follow-up" },
        ],
      },
      {
        logo: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
              <path
                d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
                fill="black"
              ></path>
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
            </g>
          </svg>
        ),
        title: "Pipeline Builder",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          { href: "#", text: "B2B Prospecting Data" },
          { href: "#", text: "Multichannel Outreach" },
          { href: "#", text: "AI Assistants" },
        ],
      },
      {
        logo: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
              <path
                d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
                fill="black"
              ></path>
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
            </g>
          </svg>
        ),
        title: "Pipeline Builder",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          { href: "#", text: "B2B Prospecting Data" },
          { href: "#", text: "Multichannel Outreach" },
          { href: "#", text: "AI Assistants" },
        ],
      },
    ],
    platforms: [
      {
        logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
        tag: "Apollo Platform",
        descriptions: "",
        links: [
          { text: "Living Data Network", href: "" },
          { text: "Apollo AI", href: "" },
          { text: "Integrations", href: "" },
          { text: "Chrome Extension", href: "" },
          { text: "Workflow Automation", href: "" },
        ],
      },
    ],
  },
  {
    title: "Roles",
    solutions: [
      {
        logo: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
              <path
                d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
                fill="black"
              ></path>
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
            </g>
          </svg>
        ),
        title: "Pipeline Builder",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          { href: "#", text: "B2B Prospecting Data" },
          { href: "#", text: "Multichannel Outreach" },
          { href: "#", text: "AI Assistants" },
        ],
      },
    ],
    platforms: [
      {
        logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
        tag: "Apollo Platform",
        descriptions: "",
        links: [
          { text: "Living Data Network", href: "" },
          { text: "Apollo AI", href: "" },
          { text: "Integrations", href: "" },
          { text: "Chrome Extension", href: "" },
          { text: "Workflow Automation", href: "" },
        ],
      },
    ],
  },
  {
    title: "Resources",
    solutions: [
      {
        logo: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
              <path
                d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
                fill="black"
              ></path>
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
            </g>
          </svg>
        ),
        title: "Pipeline Builder",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          { href: "#", text: "B2B Prospecting Data" },
          { href: "#", text: "Multichannel Outreach" },
          { href: "#", text: "AI Assistants" },
        ],
      },
      {
        logo: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
              <path
                d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
                fill="black"
              ></path>
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
            </g>
          </svg>
        ),
        title: "Pipeline Builder",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          { href: "#", text: "B2B Prospecting Data" },
          { href: "#", text: "Multichannel Outreach" },
          { href: "#", text: "AI Assistants" },
        ],
      },
      {
        logo: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
              <path
                d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
                fill="black"
              ></path>
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
            </g>
          </svg>
        ),
        title: "Pipeline Builder",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          { href: "#", text: "B2B Prospecting Data" },
          { href: "#", text: "Multichannel Outreach" },
          { href: "#", text: "AI Assistants" },
        ],
      },
      {
        logo: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
              <path
                d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
                fill="black"
              ></path>
              <path
                d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
                fill="black"
              ></path>
              <path
                d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
                fill="black"
              ></path>
            </g>
          </svg>
        ),
        title: "Pipeline Builder",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          { href: "#", text: "B2B Prospecting Data" },
          { href: "#", text: "Multichannel Outreach" },
          { href: "#", text: "AI Assistants" },
        ],
      },
    ],
    platforms: [
      {
        logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
        tag: "Apollo Platform",
        descriptions: "",
        links: [
          { text: "Living Data Network", href: "" },
          { text: "Apollo AI", href: "" },
          { text: "Integrations", href: "" },
          { text: "Chrome Extension", href: "" },
          { text: "Workflow Automation", href: "" },
        ],
      },
      {
        logo: "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
        tag: "Apollo Platform",
        descriptions: "",
        links: [
          { text: "Living Data Network", href: "" },
          { text: "Apollo AI", href: "" },
          { text: "Integrations", href: "" },
          { text: "Chrome Extension", href: "" },
          { text: "Workflow Automation", href: "" },
        ],
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [showSideBar, setShowSideBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/homepage-1";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 transition-colors duration-300 
        ${isScrolled && !isHomePage ? "bg-white" : "bg-background"}
      `}
    >
      <DeskTopNavbar />
      <MobileNav
        isOpen={showSideBar}
        toggle={() => setShowSideBar((s) => !s)}
      />
      <AnimatePresence>
        {showSideBar && (
          <SideBar isOpen={showSideBar} onClose={() => setShowSideBar(false)} />
        )}
      </AnimatePresence>
    </header>
  );
};

const DeskTopNavbar = () => {
  return (
    <div className=" py-4 hidden lg:flex items-center justify-between">
      <div className="flex gap-16 items-center justify-start">
        <div className="flex items-center gap-2 font-bold text-lg">
          <img src="/assets/logo.svg" className="h-6 w-6" />
          <span className="font-medium font-grotesque "></span>
        </div>
        <nav className="hidden lg:flex gap-10 relative">
          {navItems.map((item, index) => (
            <NavItem nav={item} key={index} />
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
    <header className="lg:px-8 py-3 flex items-center justify-between lg:hidden fixed top-0 left-0 w-screen z-50 px-6 bg-background">
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

interface navItemProps {
  nav: NavItemInterface;
}

const NavItem: React.FC<navItemProps> = ({ nav }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      key={nav.title}
      onMouseEnter={() => setHovered(nav.title)}
      onMouseLeave={() => setHovered(null)}
      className="relative"
    >
      <a
        className="text-black font-grotesque text-sm font-medium transition cursor-pointer"
        href={nav.href}
      >
        {nav.title}
      </a>

      {!nav.href && (
        <AnimatePresence>
          {hovered === nav.title && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 2 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed left-6 top-16 rounded-xl bg-white drop-shadow-md z-50 max-w-[78%]"
            >
              <div className="flex flex-col lg:flex-row gap-6 p-8">
                {nav.solutions &&
                  nav.solutions.map((solution, index) => (
                    <div className="flex flex-col basis-[18%] flex-grow min-w-[135px] max-w-[400px]">
                      <div className="flex flex-col  items-start gap-3">
                        <div className="flex flex-col items-start gap-3">
                          {solution.logo}
                          <p className="font-grotesque font-medium text-lg lg:leading-[110%] leading-[110%]">
                            {solution.title}
                          </p>
                          <p className="text-xs text-sand font-grotesque ">
                            {solution.description}{" "}
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
                          {solution.linkTitle}
                        </p>
                        {solution?.links &&
                          solution.links.map((link, index) => (
                            <a className="text-xs text-black  font-grotesque ">
                              {link.text}
                            </a>
                          ))}
                      </div>
                    </div>
                  ))}

                {nav?.platforms &&
                  nav?.platforms.map((platform, platformIndex) => (
                    <div className="flex flex-col basis-[18%] flex-grow min-w-[135px] max-w-[400px]">
                      <img
                        className="w-[194px] h-auto rounded-lg"
                        src={platform.logo}
                      />
                      <div className="mt-4 flex flex-col gap-2">
                        <p className="text-xs text-sand font-grotesque ">
                          {platform.tag}
                        </p>
                        {platform?.links &&
                          platform.links.map((platformLinks) => (
                            <a className="text-xs text-black  font-grotesque ">
                              {platformLinks.text}
                            </a>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
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
        {navItems.map((item, index) => (
          <AccordionItem
            key={index}
            nav={item}
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}
          />
        ))}
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
  nav: NavItemInterface;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  nav,
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
        <h6 className="text-2xl  font-medium text-dark pr-8"> {nav.title}</h6>
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
            {nav.solutions &&
              nav.solutions.map((solution, index) => (
                <div className="flex flex-col basis-[18%] flex-grow min-w-[135px] max-w-[400px]">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex flex-col w-[60%] items-start justify-between">
                      <div className="flex items-center gap-3">
                        {solution.logo}

                        <p className="font-grotesque font-medium text-lg lg:leading-[110%] leading-[110%]">
                          {solution.title}
                        </p>
                      </div>
                      <p className="text-xs text-sand font-grotesque mt-2">
                        {solution.description}{" "}
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
                    <p className="text-xs text-sand font-grotesque ">
                      {solution.linkTitle}
                    </p>
                    {solution?.links &&
                      solution.links.map((link, index) => (
                        <a className="text-xs text-black  font-grotesque ">
                          {link.text}
                        </a>
                      ))}
                  </div>
                </div>
              ))}

            {nav?.platforms &&
              nav?.platforms.map((platform, platformIndex) => (
                <div className="flex flex-col basis-[18%] flex-grow min-w-[135px] max-w-[400px]">
                  <img
                    className="w-[194px] h-auto rounded-lg"
                    src={platform.logo}
                  />
                  <div className="mt-4 flex flex-col gap-2">
                    <p className="text-xs text-sand font-grotesque ">
                      {platform.tag}
                    </p>

                    {platform?.links &&
                      platform.links.map((platformLinks) => (
                        <a className="text-xs text-black  font-grotesque ">
                          {platformLinks.text}
                        </a>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
