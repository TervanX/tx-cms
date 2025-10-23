'use client'

import Image from 'next/image';

interface BannerProps {
    title?: string;
    primaryButton?: {
        text: string;
        href: string;
    };
    secondaryButton?: {
        text: string;
        href: string;
    };
    backgroundImage?: string;
    backgroundImageLQIP?: string;
    altText?: string;
}

export default function Banner({
    title = "Empower your business with instant, intelligent crypto transactions",
    primaryButton = {
        text: "Get Started",
        href: "https://www.intercom.com/view-demos"
    },
    secondaryButton = {
        text: "Contact Sales",
        href: "/contact/contact-sales"
    },
    backgroundImage = "/assets/helpdesk-ctabanner.webp",
    backgroundImageLQIP = "/assets/helpdesk-ctabanner-lqip.webp",
    altText = "CTA Banner"
}: BannerProps) {
    return (
        <div className="relative mx-auto max-w-[1568px] overflow-hidden 2xl:rounded-t-md bg-cover bg-no-repeat mt-4 bg-right-top md:bg-right-bottom">
            <div className="-z-[1000]"></div>

            <div className="flex flex-col items-center justify-center gap-6 text-center text-white md:h-screen md:max-h-[800px] py-27">
                <h2 className="font-sans text-current max-w-[18ch] mx-9 text-[2.5rem] leading-[95%] font-semibold tracking-[-1.6px] md:mx-0 md:text-[5rem] md:leading-[100%] md:tracking-[-4px]">
                    {title}
                </h2>

                <div className="mx-auto flex w-[calc(100vw-3rem)] max-w-[28rem] flex-col items-center md:max-w-[48rem]">
                    <div className="mt-8 flex justify-center gap-3 first:mt-0 md:mt-6">
                        <a
                            className="btn group relative isolate inline-block cursor-pointer rounded-md transition-[background,color] duration-400 ease-out-quart text-center font-semibold tracking-tight whitespace-nowrap first-line:z-1 lg:text-base/none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-outline disabled:pointer-events-none disabled:opacity-50 text-white hover:text-white/80 backdrop-blur-[12px] px-3 py-2.5 text-base/none lg:px-4"
                            href={primaryButton.href}
                        >
                            <span className="group-focus absolute inset-0 -z-1 block w-full rounded-md transition-[background,color] duration-400 ease-out-quart bg-white/20 hover:bg-white/30 border-1 border-white"></span>
                            {primaryButton.text}
                        </a>

                        <a
                            href={secondaryButton.href}
                            className="btn group relative isolate inline-block cursor-pointer rounded-md transition-[background,color] duration-400 ease-out-quart text-center font-semibold tracking-tight whitespace-nowrap first-line:z-1 lg:text-base/none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-outline disabled:pointer-events-none disabled:opacity-50 text-black px-3 py-2.5 text-base/none lg:px-4"
                        >
                            <span className="group-focus absolute inset-0 -z-1 block w-full rounded-md transition-[background,color] duration-400 ease-out-quart bg-white group-hover:bg-white/80"></span>
                            {secondaryButton.text}
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full overflow-hidden absolute inset-0 -z-10" style={{ height: '100%' }}>
                <div style={{ height: 'calc(100% + 100px)', transform: 'translateY(-38.4417px)' }}>
                    <div className="overflow-hidden bg-cover absolute inset-0 size-full">
                        <span
                            className="absolute inset-0 -z-10 bg-cover transition-opacity duration-300 ease-out-quad opacity-0"
                            style={{ backgroundImage: `url(${backgroundImageLQIP})` }}
                        ></span>

                        <Image
                            alt={altText}
                            fill
                            className="transition-opacity duration-300 ease-out-quad size-full object-cover object-center opacity-100"
                            src={backgroundImage}
                            sizes="100vw"
                            placeholder="empty"
                            priority={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}