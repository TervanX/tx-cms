import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FooterLink, FooterSection } from "@/app/types/reusable.type";

const footerData: FooterSection[] = [
  {
    title: "Products",
    links: [
      {
        label: "Wallet As a Service",
        href: "/product/asset-infrastructure/wallet-api",
      },
      {
        label: "Exchange Engine",
        href: "/product/asset-infrastructure/exchange-engine",
      },
      {
        label: "Auto Trade Plugin",
        href: "product/plugins-extension/auto-trade-plugin",
      },
      {
        label: "Treasury Plugin",
        href: "product/plugins-extension/treasury-plugin",
      },
      { label: "Tx Shield", href: "/product/security-optimization/tx-shield" },
      { label: "Tx Analytics", href: "/product/data-reporting/tx-analytics" },
    ],
  },
  {
    title: "Solutions",

    links: [
      { href: "/solutions/by-business-stage/startups", label: "Startups" },
      {
        href: "/solutions/by-business-stage/enterprises",
        label: "Enterprises",
      },
      {
        href: "/solutions/by-use-case/fintech-platforms",
        label: "Fintech Platforms",
      },
      {
        href: "/solutions/by-use-case/crypto-exchanges",
        label: "Crypto Exchanges",
      },
      {
        href: "/solutions/by-industry/finance-and-banking",
        label: "Finance & Banking",
      },
      { href: "/solutions/by-industry/education", label: "Education " },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Reference", href: "/contact/request-access" },
      { label: "System Status", href: "/developers/developer-tools/system-status" },
      { label: "API Sandbox", href: "/contact/request-access" },
      { label: "Tx Apps SDKs", href: "/contact/request-access" },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Blog",
        href: "/resources/learn/blog"
      },
      { label: "Become a Partner", href: "/contact/contact" },
      { label: "Professional Services", href: "/contact/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Support", href: "/contact/contact" },
      { label: "Contact Sales", href: "/contact/contact" },
    ],
  },
  // {
  //   title: "Miscellaneous",
  //   links: [
  //     { label: "Sitemap", href: "#" },
  //     { label: "Sign In", href: "#" },
  //     { label: "Dashboard", href: "#" },
  //     { label: "Get Started", href: "#" },
  //   ],
  // },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/security/policy" },
  { label: "Terms of Service", href: "/security/terms" },
  { label: "Security", href: "/security" },
];

const FooterButton: React.FC<{
  href: string;
  external?: boolean;
  children: React.ReactNode;
  variant?: "default" | "muted";
}> = ({ href, external, children, variant = "default" }) => {
  const baseClasses =
    "group rounded-lg transition-all bg-transparent border-none text-left";
  const variantClasses =
    variant === "muted"
      ? "text-neutral-500 hover:text-dark disabled:text-neutral-300 active:text-neutral-600"
      : "text-dark hover:text-neutral-600 disabled:text-neutral-300 active:text-neutral-600";

  const content = (
    <button type="button" className={`${baseClasses} ${variantClasses}`}>
      <div className="flex items-center justify-center gap-2">
        <p className="text-sm leading-[130%] font-sans text-inherit text-white cursor-pointer">
          {children}
        </p>
      </div>
    </button>
  );

  return external ? (
    <a className="flex" href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link href={href} className="flex">
      {content}
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <div className="flex justify-center px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="w-full">
          <div className="h-10" />
          <div className="flex flex-col gap-12 py-12 md:flex-row md:gap-20 md:py-16 lg:py-24 lg:gap-20 ">
            {/* Left Column - Logo and Legal Links */}
            <div className="flex flex-col gap-12 order-2 md:order-1 md:flex-row md:gap-20 lg:flex-col lg:gap-14 lg:min-w-[303px] ">
              {/* Logo */}
              <div className="relative w-[162px] h-[162px] md:w-[188px] md:h-[188px] lg:w-[254px] lg:h-[254px] xl:w-[303px] xl:h-[303px] 2xl:w-[303px] 2xl:h-[303px]">
                <Image
                  src="https://res.cloudinary.com/dx1etzf66/image/upload/v1761842277/LayerX_Logo_ffy6pb.png"
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              {/* Legal Links */}
              <div className="flex flex-col gap-4">
                <p className="text-sm lg:text-base leading-[130%] font-sans font-bold text-white">
                  LayerX © 2025
                </p>
                {legalLinks.map((link, index) => (
                  <FooterButton
                    key={`legal-${index}-${link.label}`}
                    href={link.href}
                    variant="muted"
                  >
                    {link.label}
                  </FooterButton>
                ))}
              </div>
            </div>

            {/* Right Column - Footer Navigation Grid */}
            <div className="grid grid-cols-1 gap-12 order-1 md:order-2 md:grid-cols-3 md:gap-12 md:gap-y-[86px] lg:grid-cols-3 lg:gap-16 xl:grid-cols-4 xl:gap-8 2xl:gap-16">
              {footerData.map((section, sectionIndex) => (
                <div
                  key={`section-${sectionIndex}-${section.title}`}
                  className={`flex flex-col gap-4 ${sectionIndex >= 6 ? "md:col-span-2 lg:col-span-1" : ""
                    } ${sectionIndex === 6 ? "lg:col-span-2 xl:col-span-1" : ""}`}
                >
                  <p className="text-sm lg:text-base leading-[130%] font-sans font-bold text-white">
                    {section.title}
                  </p>
                  {section.links.map((link, linkIndex) => (
                    <FooterButton
                      key={`link-${sectionIndex}-${linkIndex}-${link.label}`}
                      href={link.href}
                      external={link.external}
                    >
                      {link.label}
                    </FooterButton>
                  ))}
                  {section.socialLinks && section.socialTitle && (
                    <>
                      <p className="mt-4 text-sm lg:text-base leading-[130%] font-sans font-bold text-white">
                        {section.socialTitle}
                      </p>
                      {section.socialLinks.map((link, socialIndex) => (
                        <FooterButton
                          key={`social-${sectionIndex}-${socialIndex}-${link.label}`}
                          href={link.href}
                          external={link.external}
                        >
                          {link.label}
                        </FooterButton>
                      ))}
                    </>
                  )}
                </div>
              ))}

              {/* Chrome Extension CTA */}
              <div className="flex w-fit flex-col gap-4 lg:col-span-2 xl:col-span-1">
                <p className="text-sm lg:text-base leading-[130%] font-sans font-bold text-white">
                  Contact Sales
                </p>
                <p className="text-sm lg:text-base leading-[130%] font-sans text-white">
                  Get answers about features, pricing, and implementation from
                  our team.
                </p>
                <Link href="/contact/contact-sales">
                  <button
                    type="button"
                    className="group rounded-lg transition-all h-10 px-4 bg-white border border-dark text-dark hover:bg-neutral-200 hover:border-dark hover:text-dark active:bg-neutral-300 active:border-dark active:text-dark focus:border-dark focus:text-dark disabled:bg-transparent disabled:border-neutral-400 disabled:text-neutral-400 whitespace-nowrap w-full cursor-pointer"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-sm leading-[130%] font-sans text-inherit">
                        Contact Sales
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10" />
      </div>
    </footer>
  );
};

export default Footer;
