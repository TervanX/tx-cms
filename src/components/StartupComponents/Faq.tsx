"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 18" fill="none"><path d="M8.375 9.62517V16H9.625V9.62517H16V8.37517H9.625V2H8.375V8.37517H2V9.62517H8.375Z" fill="#47423D"></path></svg>
);

const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.375H2V9.625H16V8.375Z" fill="#47423D"></path></svg>
);

const faqData: FAQItem[] = [

    {
        question: 'Who is eligible for the exclusive discount?',
        answer: (
            <>
                You must be a new Apollo user affiliated with one of our startup ecosystem partners, have less than 20 employees, and a valid corporate domain.
            </>
        ),
    },
    {
        question: 'What if my startup is not affiliated with a startup ecosystem partner?',
        answer: (
            <>
                Encourage your accelerator, VC firm, or community to <Link href="/product/sales-engagement" className=" underline">
                    join here
                </Link>. You can also
                <Link href="/product/sales-engagement" className=" hover:underline">
                    apply here
                </Link>
                to join our waitlist for the Apollo for Startups community.
            </>
        ),
    },
    {
        question: 'I want this discount to be available to my startup community. How can I become a partner?',
        answer: (
            <>
                We want to hear from you!  <Link href="/product/sales-engagement" className=" underline">
                    Apply to be a partner
                </Link> and we’ll get back to you with more information.
            </>
        ),
    },
    {
        question: 'I still have questions. Who can I reach out to?',
        answer: (
            <>
                For any additional support, questions, or feedback — feel free to contact us at  <Link href="/product/sales-engagement" className=" underline">
                    startups@apollo.io.
                </Link> We can’t wait to grow with you 🎉
            </>
        ),
    },

];

interface AccordionItemProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onToggle}
                className="w-full flex items-start justify-between py-5 text-left"
                aria-expanded={isOpen}
            >
                <h6 className="text-xl text-dark pr-8">
                    {item.question}
                </h6>
                <div className={`flex-shrink-0 transition-transform duration-200 `}>
                    {isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className=" pb-5 text-dark text-sm lg:text-base leading-relaxed">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};

const FAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 font-founders-grotesk my-20 ">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
                <div >
                    <h4 className="text-3xl lg:text-5xl max-w-xl text-dark mb-4">
                        Frequently asked questions
                    </h4>
                </div>

                <div className="overflow-hidden">
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
        </div>
    );
};

export default FAQAccordion;