"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../reusable/Button";
import { FAQItem, AccordionItemProps } from "@/app/types/pricing.types";

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
    >
        <path
            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
            fill="black"
        />
    </svg>
);

const faqData: FAQItem[] = [
    {
        question: "What is included in my trial plans?",
        answer: (
            <>
                Trial plans include 100 credits, and almost all of the features of the
                plan you selected.
                <p className="mt-2">
                    The ability to link a non-Gmail/Microsoft account to send email
                    campaigns is not included. You must be on a paid plan or a direct
                    trial setup by one our sales representatives in order to link a
                    non-Gmail/Microsoft email account.
                </p>
            </>
        ),
    },
    {
        question: "Which database is most popular for B2B prospecting?",
        answer: (
            <>
                <Link href="/product/search" className=" hover:underline">
                    Apollo.io's B2B search platform
                </Link>{" "}
                is the go-to for modern GTM teams. Rather than being just a database,
                Apollo combines lead search, AI-powered sequencing, email automation,
                and buyer intent signals-all in one UI. This unified workflow makes it
                the most widely adopted{" "}
                <Link href="/product/sales-engagement" className=" hover:underline">
                    sales engagement platform
                </Link>{" "}
                in the market.
            </>
        ),
    },
    {
        question: "Is Apollo.io better than ZoomInfo or Lusha?",
        answer: (
            <>
                Yes-especially in terms of value, accuracy, and workflow integration.
                Unlike ZoomInfo, which often requires multiple tools to execute
                outbound, Apollo offers a full-stack GTM solution from data to
                automation. Compared to Lusha, Apollo has deeper contact coverage and
                built-in enrichment, intent signals, and CRM syncing. Plus,{" "}
                <Link href="/pricing" className=" hover:underline">
                    Apollo's free plan
                </Link>{" "}
                offers 100+ contacts monthly-unmatched by most competitors.
            </>
        ),
    },
    {
        question: "What is Apollo.io used for?",
        answer: (
            <>
                Apollo.io is used for{" "}
                <Link href="/product/search" className=" hover:underline">
                    B2B lead generation
                </Link>
                , contact discovery, cold outreach, and CRM enrichment. It enables SDRs,
                AEs, recruiters, and marketers to find prospects, send
                hyper-personalized outreach, and track engagement. Whether you're
                targeting new logos or upselling, Apollo helps accelerate every stage of
                the sales pipeline.
            </>
        ),
    },
    {
        question: "How accurate is Apollo.io's data?",
        answer: (
            <>
                Apollo.io maintains industry-leading accuracy by continuously validating
                emails, phone numbers, and company details in real time. The{" "}
                <Link href="/product/enrich" className=" hover:underline">
                    Apollo enrichment engine
                </Link>{" "}
                syncs your CRM with updated job titles, employer changes, tech installs,
                and funding events-so your team always works with fresh, reliable data.
            </>
        ),
    },
    {
        question: "Is Apollo.io a CRM?",
        answer: (
            <p>
                Apollo.io is not a CRM-it's a sales intelligence and engagement platform
                that integrates seamlessly with tools like Salesforce, HubSpot, and
                Pipedrive. Think of Apollo as the engine that powers your CRM with
                up-to-date data, intent signals, and personalized outreach at scale.
            </p>
        ),
    },
    {
        question: "How much does Apollo.io cost?",
        answer: (
            <>
                Apollo.io offers a{" "}
                <Link href="/pricing" className=" hover:underline">
                    free plan
                </Link>{" "}
                with 100 monthly contact credits. Paid tiers start at $49/month and
                unlock unlimited enrichment,{" "}
                <Link href="/product/workflow-engine" className=" hover:underline">
                    AI-powered messaging tools
                </Link>
                , advanced automation, and full API access. With its extensive B2B data
                and GTM automation, Apollo consistently delivers a strong ROI for
                growing teams.
            </>
        ),
    },
];



const AccordionItem: React.FC<AccordionItemProps> = ({
    item,
    isOpen,
    onToggle,
}) => {
    return (
        <div className="border-b border-gray-200 font-grotesque">
            <Button
                onClick={onToggle}
                className="w-full flex items-start justify-between py-5 lg:px-6 text-left"
                aria-expanded={isOpen}
            >
                <h6 className="text-xl  lg:2xl font-medium text-dark pr-8">
                    {item.question}
                </h6>
                <div
                    className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                >
                    <ChevronDownIcon />
                </div>
            </Button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pb-5 text-dark text-sm lg:text-base leading-relaxed">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};

const PricingFAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-5xl mx-auto py-12  sm:px-6 lg:px-8 font-grotesk">
            <div className="mb-8">
                <h4 className=" text-2xl lg:text-3xl sm:text-4xl text-start font-semibold text-dark ">
                    Frequently asked questions
                </h4>
            </div>

            <div className="bg-white rounded-lg overflow-hidden">
                {faqData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PricingFAQAccordion;
