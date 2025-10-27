import React from 'react';
import Button from '../reusable/Button';

const WhatAreCredits: React.FC = () => {
    const creditFeatures = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="none">
                    <path fill="currentColor" d="M17.889 12.502c0 .92-.746 1.666-1.666 1.666H1.778c-.92 0-1.666-.746-1.667-1.666V6.609l1.389.946v4.947c0 .153.125.277.278.277h14.445a.278.278 0 0 0 .277-.277V7.506l1.389-.946v5.942ZM16.223.835c.92 0 1.666.747 1.666 1.667v2.04l-6.16 4.197-1.418.947a2.362 2.362 0 0 1-2.62 0l-4.859-3.24-2.72-1.854v-2.09c0-.92.746-1.667 1.666-1.667h14.445ZM1.778 2.224a.279.279 0 0 0-.278.278v1.387l6.96 4.64a.973.973 0 0 0 1.08 0l6.96-4.64V2.502a.278.278 0 0 0-.277-.278H1.778Z"></path>
                </svg>
            ),
            title: "Email",
            credits: "1 credit",
            description: "Access verified emails to connect with the right prospects."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none">
                    <path fill="currentColor" d="M5.56 1.619a2.245 2.245 0 0 1 2.2 1.32l.78 1.713c.362.792.232 1.732-.391 2.356L6.667 8.49a9.306 9.306 0 0 0 5.345 5.345l1.482-1.481c.623-.624 1.564-.753 2.356-.392l1.713.782c.846.386 1.392 1.267 1.32 2.199l-.152 1.975a2.574 2.574 0 0 1-2.241 2.375c-2.285.304-4.338-.115-6.223-.955-.27-.12-.535-.248-.798-.384a16.314 16.314 0 0 1-6.901-6.886l-.019-.035C1.87 9.72 1.38 8.327 1.194 6.829a10.882 10.882 0 0 1 .016-2.816 2.57 2.57 0 0 1 2.374-2.241l1.976-.153ZM3.692 3.157a1.184 1.184 0 0 0-1.105 1.04c-.302 2.271.207 4.292 1.196 6.196a14.924 14.924 0 0 0 6.327 6.327c1.785.927 3.673 1.433 5.773 1.243.14-.012.281-.029.423-.047.574-.077.995-.521 1.04-1.105l.152-1.975a.859.859 0 0 0-.511-.829l-1.713-.78c-.308-.141-.616-.072-.798.11l-2.107 2.107-.67-.242a10.695 10.695 0 0 1-6.398-6.399l-.243-.669 2.109-2.107c.181-.182.25-.49.11-.798l-.781-1.713a.866.866 0 0 0-.83-.513l-1.974.154Z"></path>
                </svg>
            ),
            title: "Phone number",
            credits: "8 credits",
            description: "Access verified phone numbers and directly connect with your prospects."
        },
        {
            icon: (
                <svg width="20" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5558 16.0003H28.3336C28.3336 9.37288 22.961 4.0003 16.3336 4.0003C12.888 4.0003 9.78166 5.45243 7.59308 7.77808H11.8891V10.0003H3.66688V1.77808H5.88911V6.34695C8.48724 3.53727 12.205 1.77808 16.3336 1.77808C24.1883 1.77808 30.5558 8.14558 30.5558 16.0003Z" fill="currentColor"></path>
                    <path d="M2.11133 16.0003H4.33355C4.33355 22.6277 9.70613 28.0003 16.3336 28.0003C19.7791 28.0003 22.8854 26.5482 25.074 24.2225H20.778V22.0003H29.0002V30.2225H26.778V25.6536C24.1799 28.4633 20.4621 30.2225 16.3336 30.2225C8.47883 30.2225 2.11133 23.855 2.11133 16.0003Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.6669 16.0003C21.6669 18.9458 19.2791 21.3336 16.3336 21.3336C13.388 21.3336 11.0002 18.9458 11.0002 16.0003C11.0002 13.0548 13.388 10.667 16.3336 10.667C19.2791 10.667 21.6669 13.0548 21.6669 16.0003ZM19.4447 16.0003C19.4447 17.7185 18.0518 19.1114 16.3336 19.1114C14.6153 19.1114 13.2224 17.7185 13.2224 16.0003C13.2224 14.2821 14.6153 12.8892 16.3336 12.8892C18.0518 12.8892 19.4447 14.2821 19.4447 16.0003Z" fill="currentColor"></path>
                </svg>
            ),
            title: "Enrich data",
            credits: "1-8 credits",
            description: "Enhance your contact profiles with enriched data for better targeting."
        },
        {
            icon: (
                <svg width="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.02592 1.47342C7.95636 1.19519 7.70637 1 7.41958 1C7.13279 1 6.8828 1.19519 6.81324 1.47342L6.66621 2.06155C6.09936 4.32896 4.32896 6.09936 2.06155 6.66621L1.47341 6.81324C1.19519 6.8828 1 7.13279 1 7.41958C1 7.70637 1.19519 7.95636 1.47341 8.02592L2.06155 8.17296C4.32896 8.73981 6.09936 10.5102 6.66621 12.7776L6.81324 13.3657C6.8828 13.644 7.13279 13.8392 7.41958 13.8392C7.70637 13.8392 7.95636 13.644 8.02592 13.3657L8.17296 12.7776C8.73981 10.5102 10.5102 8.73981 12.7776 8.17296L13.3657 8.02592C13.644 7.95636 13.8392 7.70637 13.8392 7.41958C13.8392 7.13279 13.644 6.8828 13.3657 6.81324L12.7776 6.66621C10.5102 6.09936 8.73981 4.32896 8.17296 2.06155L8.02592 1.47342ZM3.67696 7.41958C5.33273 6.66302 6.66302 5.33273 7.41958 3.67696C8.17615 5.33273 9.50644 6.66302 11.1622 7.41958C9.50644 8.17615 8.17615 9.50644 7.41958 11.1622C6.66302 9.50644 5.33273 8.17615 3.67696 7.41958Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.3467 10.9558C14.2771 10.6776 14.0271 10.4824 13.7403 10.4824C13.4536 10.4824 13.2036 10.6776 13.134 10.9558L13.0672 11.2232C12.84 12.1317 12.1307 12.841 11.2222 13.0682L10.9549 13.135C10.6766 13.2045 10.4814 13.4545 10.4814 13.7413C10.4814 14.0281 10.6766 14.2781 10.9549 14.3477L11.2222 14.4145C12.1307 14.6416 12.84 15.351 13.0672 16.2595L13.134 16.5268C13.2036 16.805 13.4536 17.0002 13.7403 17.0002C14.0271 17.0002 14.2771 16.805 14.3467 16.5268L14.4135 16.2595C14.6406 15.351 15.35 14.6416 16.2585 14.4145L16.5258 14.3477C16.8041 14.2781 16.9992 14.0281 16.9992 13.7413C16.9992 13.4545 16.8041 13.2045 16.5258 13.135L16.2585 13.0681C15.35 12.841 14.6406 12.1317 14.4135 11.2232L14.3467 10.9558ZM13.7403 14.7495C13.4712 14.3528 13.1289 14.0105 12.7321 13.7413C13.1289 13.4722 13.4712 13.1298 13.7403 12.7331C14.0095 13.1298 14.3518 13.4722 14.7486 13.7413C14.3518 14.0105 14.0095 14.3528 13.7403 14.7495Z" fill="currentColor"></path>
                </svg>
            ),
            title: "AI research",
            credits: "1 credit per run",
            description: "Get insights with AI: identify prospects' pain points, engage contacts, and refine filters."
        }
    ];

    const CreditBadge: React.FC<{ credits: string }> = ({ credits }) => (
        <div className="flex w-max items-center gap-1 rounded-full bg-sand-30 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                <path fill="#493B2C" fillRule="evenodd" d="M7.698 6.472a.23.23 0 0 1 .118-.162.255.255 0 0 1 .242 0 .23.23 0 0 1 .119.162l.04.222c.012.072.065.156.177.23a.96.96 0 0 0 .452.144l.333.027c.074.006.222.064.222.23 0 .168-.148.226-.222.231l-.333.027a.96.96 0 0 0-.452.144c-.112.075-.165.159-.178.23l-.04.222a.23.23 0 0 1-.118.162.255.255 0 0 1-.242 0 .23.23 0 0 1-.118-.162l-.04-.222c-.012-.071-.065-.155-.177-.23a.96.96 0 0 0-.453-.144l-.332-.027c-.074-.005-.223-.063-.223-.23s.149-.225.223-.231l.332-.026a.96.96 0 0 0 .453-.144c.112-.075.165-.16.177-.23l.04-.223Zm.166.259c-.048.272-.357.49-.756.54.085-.011.167-.03.243-.055.223-.074.396-.205.474-.365a.46.46 0 0 0 .04-.12Zm-.811.545-.008.001h.008Zm-.008.098c.43.034.768.26.82.547l.039.221-.002-.012-.038-.21a.434.434 0 0 0-.04-.12c-.077-.16-.25-.291-.473-.365a1.3 1.3 0 0 0-.298-.06h-.008Z" clipRule="evenodd"></path>
                <path fill="#493B2C" fillRule="evenodd" d="M4.63 5.47C3.79 5.848 3 6.484 3 7.391v2.222c0 .907.79 1.543 1.63 1.921.89.401 2.083.635 3.37.635s2.48-.234 3.37-.635c.84-.378 1.63-1.014 1.63-1.92V7.39c0-.907-.79-1.543-1.63-1.92-.89-.402-2.083-.636-3.37-.636s-2.48.234-3.37.635Zm.455 1.013c-.77.347-.974.71-.974.908 0 .197.205.561.974.908.718.322 1.748.536 2.915.536s2.197-.214 2.915-.536c.77-.347.974-.71.974-.908 0-.197-.205-.561-.974-.908-.718-.322-1.748-.536-2.915-.536s-2.197.214-2.915.536Zm6.804 3.13v-.575a4.447 4.447 0 0 1-.518.274c-.892.4-2.084.635-3.371.635s-2.48-.234-3.37-.635a4.444 4.444 0 0 1-.519-.274v.575c0 .198.205.562.974.908.718.323 1.748.537 2.915.537s2.197-.214 2.915-.537c.77-.347.974-.71.974-.908Z" clipRule="evenodd"></path>
            </svg>
            <p className="antialiased desktop-xl:text-[14px] desktop-xl:leading-[130%] text-[12px] leading-[130%] font-abc-diatype font-medium text-sand-70">
                {credits}
            </p>
        </div>
    );

    return (
        <div id="what-are-credits" className="flex w-full flex-col items-start gap-12 overflow-hidden bg-white px-5 lg:px-[calc(100%*(1/26))] min-[1250px]:flex-row min-[1250px]:items-center my-12">
            {/* Left Content */}
            <div className="flex w-full flex-col items-center gap-8 min-[1250px]:max-w-md min-[1250px]:flex-1 min-[1250px]:items-start">
                <div className="flex w-full flex-col items-center gap-4 min-[1250px]:items-start">
                    <h3 className="antialiased desktop-xl:text-[72px] desktop-xl:tracking-[-1.44px] desktop-xl:leading-none desktop:text-[64px] desktop:tracking-[-1.28px] desktop:leading-none desktop-s:text-[56px] desktop-s:tracking-[-1.12px] desktop-s:leading-none md:text-[48px] md:tracking-[-0.96px] md:leading-none text-[40px] tracking-[-0.8px] leading-none font-founders-grotesk text-text-header text-center min-[1250px]:text-left">
                        What are Apollo credits?
                    </h3>
                    <p className="antialiased desktop-xl:text-[18px] desktop-xl:leading-[130%] text-[16px] leading-[130%] font-abc-diatype text-text-body text-center min-[1250px]:text-left">
                        Credits give you access to emails, phone numbers, and enriched data, helping you connect with prospects and enhance your CRM.
                    </p>
                </div>
                <Button
                    variant="outline"
                    type="button"
                    className="group rounded-lg transition-all h-10 px-4 bg-transparent border border-black text-black hover:bg-sand-30 hover:border-black hover:text-black active:bg-sand-40 active:border-black active:text-black focus:border-black focus:text-black w-max"
                >
                    Need more credits?
                </Button>
            </div>

            {/* Right Content */}
            <div className="flex w-full items-center justify-between min-[1250px]:flex-1">
                {/* Graphics - Hidden on mobile */}
                <div className="relative hidden flex-shrink-0 md:flex">
                    <div className="flex items-center justify-center">
                        <img
                            alt="Coin"
                            loading="lazy"
                            width="109"
                            height="155"
                            decoding="async"
                            src="/assets/coin.svg"
                            style={{ color: 'transparent' }}
                        />
                    </div>
                    <div>
                        <img
                            alt="Connections"
                            loading="lazy"
                            width="67"
                            height="235"
                            decoding="async"
                            src="/assets/connections.c01ce8ba.svg"
                            style={{ color: 'transparent' }}
                        />
                    </div>
                </div>

                {/* Credit Features */}
                <div className="flex-1">
                    <div className="flex flex-col justify-between gap-2">
                        {creditFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 rounded-md bg-gray-100 p-3">
                                <div className="mt-0.5 flex flex-shrink-0 items-center justify-center p-1.5">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-1 flex-col gap-1">
                                    <div className="mb-1 flex items-center gap-2">
                                        <h3 className="text-black">{feature.title}</h3>
                                        <CreditBadge credits={feature.credits} />
                                    </div>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatAreCredits;