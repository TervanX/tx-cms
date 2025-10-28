export default function FeatureSection() {
    const features = [
        {
            href: "#outbound-tab",
            icon: "/_next/static/media/pipeline_builder_icon.e6b3fd21.svg",
            title: "Outbound",
            description: "Book more meetings faster with better data, smarter AI, and easier automation."
        },
        {
            href: "#inbound-tab",
            icon: "/_next/static/media/meeting_assistant_icon.481da580.svg",
            title: "Inbound",
            description: "Capture, qualify, and route every lead instantly so hot leads never go cold."
        },
        {
            href: "#data-enrichment-tab",
            icon: "/_next/static/media/data_enrichment_icon.876092d5.svg",
            title: "Data Enrichment",
            description: "Cleanse and complete your records with always-fresh data that powers smarter targeting."
        },
        {
            href: "#deal-execution-tab",
            icon: "/_next/static/media/crm_icon.18c892b5.svg",
            title: "Deal Execution",
            description: "Keep deals moving with AI-powered prep, meeting insights, and follow-up."
        }
    ];

    return (
        <div className="desktop-xl:px-[72px] desktop:px-[54px] desktop-s:px-9 tablet:max-desktop-s:px-7 max-tablet:w-full max-tablet:px-5 bg-white desktop-s:relative desktop-s:z-10 font-mono">
            <div className="flex w-full flex-col gap-10 bg-white pt-16 desktop-s:pt-20">
                {/* Header Section */}
                <div className="mx-auto pb-3 tablet:w-[433px] desktop:w-[629px] desktop-xl:w-[852px]">
                    <h5 className="antialiased desktop-xl:text-[56px] desktop-xl:tracking-[-1.12px] desktop-xl:leading-none desktop:text-[48px] desktop:tracking-[-0.96px] desktop:leading-none desktop-s:text-[40px] desktop-s:tracking-[-0.8px] desktop-s:leading-none tablet:text-[36px] tablet:tracking-[-0.72px] tablet:leading-none text-[32px] tracking-[-0.32px] leading-none font-mono text-text-header whitespace-pre-line text-center __variable_b7b820">
                        Everything you need, from finding leads to winning deals
                    </h5>
                    <p className="antialiased desktop-xl:text-[22px] desktop-xl:tracking-[-0.22px] desktop-xl:leading-[130%] desktop:text-[20px] desktop:tracking-[-0.2px] desktop:leading-[130%] desktop-s:text-[20px] desktop-s:tracking-[-0.2px] desktop-s:leading-[130%] tablet:text-[18px] tablet:tracking-[-0.18px] tablet:leading-[130%] text-[16px] tracking-[-0.16px] leading-[130%] font-abc-diatype text-text-body mt-4 text-center __variable_7121de">
                        Powered by Apollo Data — one of the largest, most accurate business data networks on the planet.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2 desktop-s:grid-cols-4 desktop-s:gap-4">
                    {features.map((feature, index) => (
                        <a
                            key={index}
                            href={feature.href}
                            className="flex flex-col items-center justify-center rounded-lg bg-sand-10 hover:bg-sand-20 desktop-xl:h-[298px] desktop-xl:px-[56px] desktop-xl:gap-6 desktop:h-[230px] desktop:gap-5 tablet:py-[32px] tablet:px-[24px] tablet:gap-4 py-[24px] px-[16px] gap-3 desktop-s:gap-4 desktop:gap-5 desktop-xl:gap-6 transition-colors duration-200"
                        >
                            <img
                                alt="icon"
                                loading="lazy"
                                width={33}
                                height={32}
                                decoding="async"
                                className="aspect-square w-8 tablet:w-10 desktop:w-12"
                                style={{ color: 'transparent' }}
                                src={feature.icon}
                            />
                            <p className="antialiased desktop-xl:text-[28px] desktop-xl:leading-[110%] desktop-s:text-[24px] desktop-s:leading-[110%] text-[20px] leading-[110%] font-founders-grotesk text-center text-sand-80 __variable_b7b820">
                                {feature.title}
                            </p>
                            <p className="antialiased desktop-xl:text-[14px] desktop-xl:leading-[130%] text-[12px] leading-[130%] font-abc-diatype text-center text-sand-60 __variable_7121de">
                                {feature.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}