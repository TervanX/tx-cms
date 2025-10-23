"use client";
import Image from "next/image";

interface FormSidebarProps {
    title: string;
    description: string;
    testimonial?: {
        quote: string;
        author: string;
        position: string;
    };
    showCompanies?: boolean;
    backgroundImage?: string;
    customCompanies?: string[];
    trust?: string;
}

const defaultCompanies = [
    "Amazon", "Frame.io", "Coda", "Envoy", "Atlassian", "Anthropic",
    "Microsoft", "Clay", "Perplexity", "Consensys", "Polymarket",
    "Lovable", "Vanta", "WHOOP", "Personio", "Toast", "Miro"
];

const defaultTestimonial = {
    quote: "Scaling to meet customer demand has never been easier — TervanX ensures seamless performance, uptime, and compliance at every transaction.",
    author: "Jeff Cardoso",
    position: "Vice President Operations, Azazie"
};

export default function FormSidebar({
    title,
    description,
    testimonial = defaultTestimonial,
    trust = "Trusted by leading companies worldwide",
    showCompanies = true,
    backgroundImage = "/assets/b117dbac815c7c71ea073f7a30999c33.jpeg?&q=90",
    customCompanies
}: FormSidebarProps) {

    const companiesToShow = customCompanies || defaultCompanies;

    return (
        <div className="md:py-24 md:px-10 lg:px-20 xl:pb-40 xl:pt-32 relative flex items-center order-last md:order-first self-start h-full">
            {/* Background Image */}
            <div className="hidden md:block absolute inset-0 overflow-hidden">
                <Image
                    alt="background"
                    src={backgroundImage}
                    fill
                    className="object-cover scale-105"
                    priority
                />
            </div>

            <div className="flex flex-col gap-0 md:gap-10 lg:gap-12 relative w-full h-auto mx-auto md:max-w-[720px] text-center bg-[#F0F0F2] pb-8 md:py-10 lg:py-12 md:px-8 lg:px-10">

                {/* Desktop Heading */}
                <div className="hidden md:block">
                    <div className="mb-12 md:mb-0">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-6 text-left max-w-[724px]">
                                <h1 className="font-serif text-4xl font-medium text-left leading-tight">
                                    {title}
                                </h1>
                            </div>
                            <p className="text-base text-gray-600 text-left max-w-[520px] font-normal leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Testimonial Card */}
                    <div className="mb-4 lg:mb-6 xl:mb-8">
                        <blockquote className="bg-[#D1ECFF] p-4 text-left">
                            <div className="mb-4">
                                <p className="font-serif text-lg md:text-xl leading-relaxed text-gray-800">
                                    {testimonial.quote}
                                </p>
                            </div>
                            <footer className="text-left border-t p-4 ">
                                <span className="font-semibold text-gray-900 block">{testimonial.author}</span>
                                <span className="text-sm text-gray-600">{testimonial.position}</span>
                            </footer>
                        </blockquote>
                    </div>

                    {/* Trusted Companies */}
                    {showCompanies && (
                        <div className="flex flex-col gap-4 md:gap-6 w-full md:max-w-[80%] mx-auto">
                            <span className="text-black text-center">
                                {trust}
                            </span>

                            {/* Marquee Section */}
                            <section className="overflow-hidden">
                                <div className="relative">
                                    <div className="flex animate-marquee whitespace-nowrap">
                                        {[...companiesToShow, ...companiesToShow].map((company, index) => (
                                            <div key={index} className="flex items-baseline mx-2">
                                                <span className="text-xl lg:text-2xl xl:text-3xl font-medium text-gray-800">
                                                    {company}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
}