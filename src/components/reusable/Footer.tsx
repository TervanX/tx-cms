import React from 'react';
import Link from 'next/link';
import { FooterLink, FooterSection } from '@/app/types/reusable.type';


const footerData: FooterSection[] = [
    {
        title: 'Get started',
        links: [
            { label: 'Sign up for free', href: '/sign-up' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Request a demo', href: '/demo' },
        ],
    },
    {
        title: 'Product',
        links: [
            { label: 'Pipeline Builder', href: '/sales-pipeline' },
            { label: 'Call Assistant', href: '/ai-call-assistant' },
            { label: 'Data Enrichment', href: '/data-enrichment' },
            { label: 'Go-To-Market Platform', href: '/go-to-market' },
        ],
    },
    {
        title: 'Platform',
        links: [
            { label: 'Living Data Network', href: '/product/living-data-network' },
            { label: 'Apollo AI', href: '/ai' },
            { label: 'Integrations', href: '/product/integrations' },
            { label: 'Chrome Extension', href: '/product/chrome-extension' },
            { label: 'Workflow Automation', href: '/product/workflow-engine' },
            { label: 'Security', href: '/product/security' },
        ],
    },
    {
        title: 'Roles',
        links: [
            { label: 'Sales Leaders', href: '/personas/sales-leaders' },
            { label: 'Account Executives', href: '/personas/account-executives' },
            { label: 'Sales Development', href: '/personas/sales-development' },
            { label: 'Founders', href: '/personas/founders' },
            { label: 'Marketing', href: '/personas/marketers' },
            { label: 'Revenue Operations', href: '/personas/revops' },
        ],
    },
    {
        title: 'Use Cases',
        links: [
            { label: 'B2B Database', href: '/product/search' },
            { label: 'Lead Scoring', href: '/product/scores' },
            { label: 'Inbound Lead Router', href: '/product/inbound-optimization' },
            { label: 'Sales Engagement', href: '/product/sales-engagement' },
            { label: 'Meetings Scheduler', href: '/product/meetings' },
            { label: 'Deal Management', href: '/product/deal-management' },
            { label: 'Conversation Intelligence', href: '/product/conversations' },
            { label: 'Sales Analytics', href: '/product/analytics' },
            { label: 'Sales Coaching', href: '/product/coaching' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Apollo Academy', href: '/academy' },
            { label: 'Magazine', href: '/magazine' },
            { label: 'Insights', href: '/insights' },
            { label: 'Partners', href: '/partners' },
            { label: 'Knowledge Base ↗', href: 'https://knowledge.apollo.io', external: true },
            { label: 'Webinars', href: '/academy/webinars' },
            { label: 'Success Stories', href: '/magazine/articles/customer-stories' },
            { label: 'Privacy Center', href: '/company/privacy-center' },
            { label: 'API Docs ↗', href: 'https://docs.apollo.io', external: true },
            { label: 'Join Our Community', href: '/community' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'Careers', href: '/company/careers' },
            { label: 'Customer Reviews', href: '/wall-of-love' },
            { label: 'Contact Us & Sales', href: '/contact-us' },
            { label: 'Hey AI, learn about us', href: '/llm-info' },
        ],
        socialTitle: 'Find us on social',
        socialLinks: [
            { label: 'YouTube', href: 'https://www.youtube.com/c/apolloio', external: true },
            { label: 'Instagram', href: 'https://www.instagram.com/useapollo.io/', external: true },
            { label: 'TikTok', href: 'https://www.tiktok.com/@useapollo.io', external: true },
            { label: 'X', href: 'https://x.com/useapolloio', external: true },
            { label: 'Facebook', href: 'https://www.facebook.com/MeetApollo', external: true },
        ],
    },
];

const legalLinks: FooterLink[] = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
    { label: "Don't Sell My Info", href: '/privacy-policy/remove' },
    { label: 'About Apollo', href: '/we-are-apollo' },
];

const FooterButton: React.FC<{
    href: string;
    external?: boolean;
    children: React.ReactNode;
    variant?: 'default' | 'muted';
}> = ({ href, external, children, variant = 'default' }) => {
    const baseClasses = "group rounded-lg transition-all bg-transparent border-none text-left";
    const variantClasses = variant === 'muted'
        ? "text-neutral-500 hover:text-dark disabled:text-neutral-300 active:text-neutral-600"
        : "text-dark hover:text-neutral-600 disabled:text-neutral-300 active:text-neutral-600";

    const content = (
        <button type="button" className={`${baseClasses} ${variantClasses}`}>
            <div className="flex items-center justify-center gap-2">
                <p className="text-sm leading-[130%] font-sans text-inherit">{children}</p>
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
        <footer className="bg-bg-footer">
            <div className="flex justify-center px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="w-full">
                    <div className="h-10" />

                    <div className="flex flex-col gap-12 py-12 md:flex-row md:gap-20 md:py-16 lg:py-24 lg:gap-20 ">
                        {/* Left Column - Logo and Legal Links */}
                        <div className="flex flex-col gap-12 order-2 md:order-1 md:flex-row md:gap-20 lg:flex-col lg:gap-14 lg:min-w-[303px] ">
                            {/* Logo */}
                            <div className="relative w-[162px] h-[162px] md:w-[188px] md:h-[188px] lg:w-[254px] lg:h-[254px] xl:w-[303px] xl:h-[303px] 2xl:w-[303px] 2xl:h-[303px]">
                                <img src="/assets/footerlogo.svg" alt="" />
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-col gap-4">
                                <p className="text-sm lg:text-base leading-[130%] font-sans font-bold text-neutral-900">
                                    Apollo © 2025
                                </p>
                                {legalLinks.map((link) => (
                                    <FooterButton key={link.href} href={link.href} variant="muted">
                                        {link.label}
                                    </FooterButton>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Footer Navigation Grid */}
                        <div className="grid grid-cols-1 gap-12 order-1 md:order-2 md:grid-cols-3 md:gap-12 md:gap-y-[86px] lg:grid-cols-3 lg:gap-16 xl:grid-cols-4 xl:gap-8 2xl:gap-16">
                            {footerData.map((section, idx) => (
                                <div
                                    key={section.title}
                                    className={`flex flex-col gap-4 ${idx >= 6 ? 'md:col-span-2 lg:col-span-1' : ''
                                        } ${idx === 6 ? 'lg:col-span-2 xl:col-span-1' : ''
                                        }`}
                                >
                                    <p className="text-sm lg:text-base leading-[130%] font-sans font-bold text-neutral-900">
                                        {section.title}
                                    </p>
                                    {section.links.map((link) => (
                                        <FooterButton
                                            key={link.href}
                                            href={link.href}
                                            external={link.external}
                                        >
                                            {link.label}
                                        </FooterButton>
                                    ))}
                                    {section.socialLinks && section.socialTitle && (
                                        <>
                                            <p className="mt-4 text-sm lg:text-base leading-[130%] font-sans font-bold text-neutral-900">
                                                {section.socialTitle}
                                            </p>
                                            {section.socialLinks.map((link) => (
                                                <FooterButton
                                                    key={link.href}
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
                                <p className="text-sm lg:text-base leading-[130%] font-sans font-bold text-neutral-900">
                                    Prospect anywhere
                                </p>
                                <p className="text-sm lg:text-base leading-[130%] font-sans text-neutral-900">
                                    Get verified emails and phone numbers and instantly reach out while working in your favorite tools.
                                </p>
                                <div className="w-full">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://chrome.google.com/webstore/detail/apolloio-email-finder-and/alhgpfoeiimagjlnfekdhkjlkiomcapa"
                                    >
                                        <button
                                            type="button"
                                            className="group rounded-lg transition-all h-10 px-4 bg-transparent border border-dark text-dark hover:bg-neutral-200 hover:border-dark hover:text-dark active:bg-neutral-300 active:border-dark active:text-dark focus:border-dark focus:text-dark disabled:bg-transparent disabled:border-neutral-400 disabled:text-neutral-400 whitespace-nowrap"
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                <p className="text-sm leading-[130%] font-sans text-inherit">
                                                    Apollo Chrome Extension
                                                </p>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-10" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;