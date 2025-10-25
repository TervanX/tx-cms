"use client";
import Link from "next/link";
import Image from "next/image";
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
    title: "Products",
    solutions: [
      // {
      //   logo: (
      //     <svg
      //       width="20"
      //       height="20"
      //       viewBox="0 0 18 16"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <g id="Vector">
      //         <path
      //           d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
      //           fill="black"
      //         ></path>
      //       </g>
      //     </svg>
      //   ),
      //   title: "Products",
      //   description:
      //     "All TervanX’s core infrastructure and modules — fiat, crypto, and plugin systems.",
      //   links: [
      //     {
      //       href: "/product/payments-infrastructure/crypto-payments",
      //       text: "Crypto Payments",
      //     },
      //     {
      //       href: "/product/payments-infrastructure/fiat-payments",
      //       text: "Fiat Payments",
      //     },
      //     {
      //       href: "/product/payments-infrastructure/checkout",
      //       text: "Checkout ",
      //     },
      //     {
      //       href: "/product/payments-infrastructure/payment-links",
      //       text: "Payment Links ",
      //     },
      //     // {
      //     //   href: "/product/payments-infrastructure/pos-terminal",
      //     //   text: "POS / Terminal  ",
      //     // },
      //     {
      //       href: "/product/payments-infrastructure/payout-api",
      //       text: "Payouts API  ",
      //     },
      //     {
      //       href: "/product/payments-infrastructure/payment-method",
      //       text: "Payment Methods ",
      //     },
      //   ],
      // },
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
        title: "Asset Infrastructure ",
        description: "",
        linkTitle: "",
        links: [
          {
            href: "/product/asset-infrastructure/wallet-api",
            text: "Wallets as a Service",
          },
          { href: "/product/asset-infrastructure/vault", text: "Vault" },
          {
            href: "/product/asset-infrastructure/exchange-engine",
            text: "Exchange Engine",
          },
          {
            href: "/product/asset-infrastructure/liquidity-hub",
            text: "Liquidity Hub",
          },
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
        title: "Automation & Intelligence",
        description: "",
        linkTitle: "",
        links: [
          {
            href: "/product/automation-intelligence/tx-smartflow",
            text: "Tx SmartFlow",
          },
          {
            href: "/product/automation-intelligence/tx-automate",
            text: "Tx Automate",
          },
          {
            href: "/product/automation-intelligence/revenue-recognition",
            text: "Revenue Recognition",
          },
          {
            href: "/product/automation-intelligence/risk-compliance-ai",
            text: "Risk & Compliance AI ",
          },
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
        title: "Finance & Treasury ",
        description: "",
        linkTitle: "",
        links: [
          {
            href: "/product/finance-treasury/tx-accounts",
            text: "Tx Accounts ",
          },
          { href: "/product/finance-treasury/tx-capital", text: "Tx Capital" },
          { href: "/product/finance-treasury/tx-issuing", text: "Tx Issuing" },
          // {
          //   href: "/product/finance-treasury/global-payouts",
          //   text: "Global Payouts",
          // },
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
        title: "Plugins & Extensions ",
        description: "",
        linkTitle: "",
        links: [
          {
            href: "/product/plugins-extension/auto-trade-plugin",
            text: "Auto Trade Plugin",
          },
          {
            href: "/product/plugins-extension/treasury-plugin",
            text: "Treasury Plugin",
          },
          { href: "/product/plugins-extension/hr-plugin", text: "HR Plugin" },
          {
            href: "/product/plugins-extension/health-plugin",
            text: "Health Plugin",
          },
          {
            href: "/product/plugins-extension/logistics-plugin",
            text: "Logistics Plugin",
          },
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
        title: "Security & Optimization",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          {
            href: "/product/security-optimization/tx-shield",
            text: "Tx Shield",
          },
          {
            href: "/product/security-optimization/authorization-optimizer",
            text: "Authorization Optimizer ",
          },
          { href: "/product/security-optimization/tx-id", text: "Tx ID " },
          { href: "/product/security-optimization/tx-link", text: "Tx Link  " },
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
        title: "Data & Reporting",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          { href: "/product/data-reporting/tx-sigma", text: "Tx Sigma" },
          { href: "/product/data-reporting/tx-pipeline", text: "Tx Pipeline" },
          {
            href: "/product/data-reporting/tx-analytics",
            text: "Tx Analytics",
          },
        ],
      },
    ],
    platforms: [
      {
        logo: "/assets/just.webp",
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
    title: "Solutions",
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
        title: "By Business Stage",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam ",
        linkTitle: "lorem",
        links: [
          { href: "/solutions/by-business-stage/startups", text: "Startups" },
          {
            href: "/solutions/by-business-stage/enterprises",
            text: "Enterprises",
          },
          {
            href: "/solutions/by-business-stage/developers",
            text: "Developers",
          },
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
        title: "By Use Case ",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam ",
        linkTitle: "lorem",
        links: [
          {
            href: "/solutions/by-use-case/fintech-platforms",
            text: "Fintech Platforms",
          },
          {
            href: "/solutions/by-use-case/crypto-exchanges",
            text: "Crypto Exchanges",
          },
          {
            href: "/solutions/by-use-case/embedded-finance",
            text: "Embedded Finance",
          },
          { href: "/solutions/by-use-case/defi-apps", text: "DeFi Apps " },
          { href: "/solutions/by-use-case/remittance", text: "Remittance" },
          {
            href: "/solutions/by-use-case/gaming-and-metaverse",
            text: "Gaming & Metaverse",
          },
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
        title: "By Industry ",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam ",
        linkTitle: "lorem",
        links: [
          {
            href: "/solutions/by-industry/finance-and-banking",
            text: "Finance & Banking",
          },
          { href: "/solutions/by-industry/e-ecommerce", text: "E-Commerce " },
          { href: "/solutions/by-industry/healthcare", text: "Healthcare" },
          {
            href: "/solutions/by-industry/transportation-and-logistics",
            text: "Transportation & Logistics ",
          },
          {
            href: "/solutions/by-industry/energy-and-utilities",
            text: "Energy & Utilities",
          },
          { href: "/solutions/by-industry/education", text: "Education " },
          {
            href: "/solutions/by-industry/hospitality-real-state",
            text: "Hospitality & Real Estate ",
          },
          {
            href: "/solutions/by-industry/creator-economy-and-media",
            text: "Creator Economy & Media",
          },
        ],
      },
    ],
    platforms: [
      {
        logo: "/assets/just.webp",
        tag: "By Industry ",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam voluptate dolores exercitationem.",
        links: [
          { text: "Finance & Banking ", href: "" },
          { text: "E-Commerce", href: "" },
          { text: "Healthcare", href: "" },
          { text: "Transportation & Logistics ", href: "" },
          { text: "Energy & Utilities ", href: "" },
          { text: "Education", href: "" },
          { text: "Hospitality & Real Estate", href: "" },
          { text: "Creator Economy & Media ", href: "" },
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
        title: "Support",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          // {
          //   href: "/resources/support/support-center",
          //   text: "Support Center ",
          // },
          // {
          //   href: "/resources/support/managed-support-plans",
          //   text: "Managed Support Plans",
          // },
          {
            href: "/contact/contact",
            text: "Contact Support",
          },
          { href: "/contact/contact", text: "Contact sales" },
        ],
      },
      // {
      //   logo: (
      //     <svg
      //       width="20"
      //       height="20"
      //       viewBox="0 0 18 16"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <g id="Vector">
      //         <path
      //           d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
      //           fill="black"
      //         ></path>
      //       </g>
      //     </svg>
      //   ),
      //   title: "Learn",
      //   description: "Find the right people and book quality meetings",
      //   linkTitle: "Sales Leaders",
      //   links: [
      //     { href: "/resources/learn/blog", text: "Blog " },
      //     { href: "/resources/learn/case-studies", text: "Case Studies " },
      //     { href: "/resources/learn/documentation", text: "Documentation " },
      //     { href: "/resources/learn/guides", text: "Guides " },
      //     {
      //       href: "/resources/learn/tervanx-sessions",
      //       text: "Tervanx Sessions (Annual Dev Summit) ",
      //     },
      //   ],
      // },
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
        title: "Company & Partners ",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          {
            href: "/contact/contact",
            text: "Become a Partner",
          },
          {
            href: "/contact/contact",
            text: "Professional Services (Integration Assistance)",
          },
          // {
          //   href: "/resources/company_partners/partner-program",
          //   text: "Partner Program ",
          // },
          // { href: "/resources/company_partners/jobs", text: "Jobs " },
          // { href: "/resources/company_partners/newsroom", text: "Newsroom" },
        ],
      },
    ],
    platforms: [
      {
        logo: "/assets/just.webp",
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
        logo: "/assets/just.webp",
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
    title: "Developers",
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
        title: "Documentation",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          {
            href: "/contact/request-access",
            text: "Get Started",
          },
          { href: "/developers/documentation", text: "Prebuilt Components" },
          {
            href: "/contact/request-access",
            text: "Libraries & SDKs",
          },
          { href: "/contact/request-access", text: "API Reference" },
          {
            href: "/contact/request-access",
            text: "Webhook Reference",
          },
          {
            href: "/contact/request-access",
            text: "Guides",
          },
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
        title: "App & Plugin Integrations",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          {
            href: "/contact/request-access",
            text: "CMS Plugins ",
          },
          {
            href: "/contact/request-access",
            text: "ERP Integrations",
          },
          {
            href: "/contact/request-access",
            text: "API Sandbox",
          },
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
        title: "Developer Tools ",
        description: "Find the right people and book quality meetings",
        linkTitle: "Sales Leaders",
        links: [
          {
            href: "/contact/request-access",
            text: "Tx Console",
          },
          {
            href: "/api-changelog",
            text: "API Changelog",
          },
          {
            href: "/contact/request-access",
            text: "TX Apps SDK",
          },
          {
            href: "/developers/developer-tools/system-status",
            text: "System Status",
          },
        ],
      },
      // {
      //   logo: (
      //     <svg
      //       width="20"
      //       height="20"
      //       viewBox="0 0 18 16"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <g id="Vector">
      //         <path
      //           d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
      //           fill="black"
      //         ></path>
      //         <path
      //           d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
      //           fill="black"
      //         ></path>
      //       </g>
      //     </svg>
      //   ),
      //   title: "Ecosystem",
      //   description: "Full technical resources and integration docs. ",
      //   linkTitle: "lorewm raser",
      //   links: [
      //     {
      //       href: "/developers/ecosystem/tx-marketplace",
      //       text: "Tx Marketplace ",
      //     },
      //     {
      //       href: "/developers/ecosystem/partner-network",
      //       text: "Partner Network ",
      //     },
      //     { href: "/developers/ecosystem/tx-studio", text: "Tx Studio  " },
      //     { href: "/developers/ecosystem/tx-ventures", text: "Tx Ventures" },
      //     {
      //       href: "/developers/ecosystem/partner-network",
      //       text: "Partner Network ",
      //     },
      //   ],
      // },
    ],
    platforms: [
      {
        logo: "/assets/just.webp",
        tag: "Guides",
        descriptions: "",
        links: [
          { text: "Accept Online Payments", href: "" },
          { text: "Manage Digital Wallets", href: "" },
          { text: "Automate Treasury Workflows", href: "" },
          { text: "Send Cross-Border Payments ", href: "" },
          { text: "Launch an Exchange ", href: "" },
        ],
      },
    ],
  },

  {
    title: "Pricing",
    href: "#",
    // solutions: [
    //   {
    //     logo: (
    //       <svg
    //         width="20"
    //         height="20"
    //         viewBox="0 0 18 16"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <g id="Vector">
    //           <path
    //             d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
    //             fill="black"
    //           ></path>
    //           <path
    //             d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
    //             fill="black"
    //           ></path>
    //           <path
    //             d="M11.8502 3.02548C13.0375 3.02548 13.996 3.98391 13.996 5.17121V16H17.0143V6.44434C17.0143 2.88958 14.1319 0 10.57 0H0.985687V3.01833H11.8431L11.8502 3.02548Z"
    //             fill="black"
    //           ></path>
    //           <path
    //             d="M5.84219 4.73487H0.992841V7.7532H7.11533C8.30263 7.7532 9.26106 8.71163 9.26106 9.89893V15.9928H12.2794V11.1721C12.2794 7.6173 9.39695 4.72772 5.83504 4.72772L5.84219 4.73487Z"
    //             fill="black"
    //           ></path>
    //           <path
    //             d="M1.05006 9.52691H0.992841V12.5452H2.32319C3.5105 12.5452 4.46892 13.5037 4.46892 14.691V15.9927H7.48725V15.9641C7.48725 12.4093 4.60482 9.51976 1.04291 9.51976L1.05006 9.52691Z"
    //             fill="black"
    //           ></path>
    //         </g>
    //       </svg>
    //     ),
    //     title: "Pricing",
    //     description: "Transparent, modular pricing for APIs and plugins. ",
    //     linkTitle: "Sales Leaders",
    //     links: [
    //       { href: "#", text: "Core API Pricing" },
    //       { href: "#", text: "Enterprise Plans" },
    //       { href: "#", text: "Plugin Pricing " },
    //       { href: "#", text: "Capital & Treasury Fees" },
    //     ],
    //   },
    // ],
  },
];

interface HeaderProps {
  bg?: string;
}

interface HeaderProps {
  bg?: string;
}

const Header = ({ bg }: HeaderProps) => {
  const pathname = usePathname();
  const [showSideBar, setShowSideBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/homepage-1";

  const getBackgroundClass = () => {
    if (isScrolled && !isHomePage) return "bg-white";
    if (bg) return bg;
    return "bg-background";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 transition-colors duration-300 
        ${getBackgroundClass()}
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
        <Link
          href="/home"
          className="flex items-center gap-2 font-bold text-lg"
        >
          <Image
            src="/assets/logo.svg"
            className="h-6 w-6"
            width={24}
            height={24}
            alt="logo"
          />
          <span className="font-medium font-grotesque">TervanX</span>
        </Link>
        <nav className="hidden lg:flex gap-10 relative">
          {navItems.map((item, index) => (
            <NavItem nav={item} key={index} />
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <Button size="md" variant="ghost" type="button">
          Log in
        </Button>
        <Button size="md" variant="blue" type="button">
          Get Started
        </Button>
        <Button size="md" variant="primary" type="button">
          <Link href="/contact/contact-sales">Contact Sales</Link>
        </Button>
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
    <header className="lg:px-8 py-3 flex items-center justify-between lg:hidden fixed top-0 left-0 w-screen z-50 px-6 bg-white">
      <div className="flex gap-10 items-center justify-start">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image
            src="/assets/logo.svg"
            className="h-6 w-6"
            width={24}
            height={24}
            alt="logo"
          />
          <span className="font-medium font-grotesque">TervanX</span>
        </Link>
      </div>
      <div className="flex items-center gap-4 justify-end">
        <Button
          size="md"
          variant="primary"
          type="button"
          href="/contact/request-access"
        >
          Request Access
        </Button>

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
              className="fixed left-6 top-16 rounded-xl bg-white drop-shadow-md z-50 max-w-[90%]"
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
                      </div>

                      <div className="mt-6 flex flex-col gap-2">
                        <p className="text-xs text-sand font-grotesque ">
                          {solution.linkTitle}
                        </p>
                        {solution?.links &&
                          solution.links.map((link, index) => (
                            <a
                              href={link.href}
                              className="text-xs text-black  font-grotesque cursor-pointer font-semibold"
                            >
                              {link.text}
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
      className="fixed w-screen h-screen top-16 pb-10 pt-4 right-0 overflow-y-auto bg-white flex flex-col justify-between items-start lg:hidden z-30"
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
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      <div className="flex w-full gap-4 px-6 py-10">
        <Button
          size="md"
          variant="outline"
          type="button"
          onClick={onClose}
          className="flex-1"
        >
          Log in
        </Button>
        <Button
          size="md"
          onClick={onClose}
          className="flex-1"
          variant="primary"
          type="button"
        >
          <Link href="/contact/contact-sales">Contact Sales</Link>
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
        {nav.solutions && (
          <div className={`flex-shrink-0 transition-transform duration-200`}>
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
        )}
      </button>
      <div
        className={`overflow-y-scroll transition-all duration-300 ease-in-out px-6 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <p className="text-xs text-sand font-grotesque ">
                      {solution.linkTitle}
                    </p>
                    {solution?.links &&
                      solution.links.map((link, index) => (
                        <a
                          className="text-xs text-black  font-grotesque font-semibold"
                          href={link?.href}
                        >
                          {link.text}
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
