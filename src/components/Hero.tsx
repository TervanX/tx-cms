import React from 'react';

interface HeroProps {
    hasTopBanner?: boolean;
}

const Hero: React.FC<HeroProps> = ({ hasTopBanner = false }) => {
    return (
        <section
            className={`relative w-full flex items-center overflow-hidden pt-4 md:pt-4 lg:pt-6 ${hasTopBanner ? 'pt-24 md:pt-40 lg:pt-22' : ''
                }`}
            data-sentry-component="SectionHero"
            data-sentry-source-file="index.tsx"
        >
            {/* Analytics element */}
            <div className="pointer-events-none absolute inset-0 z-20 block bg-gradient-to-b from-black/75 via-black/25 to-transparent opacity-100 transition-opacity duration-[350ms] ease-out group-hover/card:opacity-100 lg:block lg:h-[275px] lg:from-black lg:via-black/50 lg:opacity-75" />

            {/* Main container */}
            <div
                className="relative z-10 mx-auto w-full px-3 md:px-4 lg:px-6"
                data-sentry-element="Container"
                data-sentry-source-file="index.tsx"
            >
                <div
                    className="opacity-100 blur-0"
                    data-sentry-element="m.div"
                    data-sentry-source-file="index.tsx"
                >
                    {/* Hero content container */}
                    <div className="flex h-[calc(100vh-25rem)] flex-col justify-center w-full lg:max-h-[720px]">

                        {/* Main heading */}
                        <h1
                            data-i2-child="text"
                            className="enable-ligatures font-serif font-light text-balance text-white text-[2.75rem] leading-[1] tracking-[-0.125rem] mx-auto mb-4 text-center md:text-[3.5rem] md:leading-[1] md:tracking-[-0.219rem] lg:mb-6 xl:leading-[1] xl:tracking-[-0.188rem] [&_span]:drop-shadow-[0_0_8px_#ffffff]"
                            data-sentry-element="Text"
                            data-sentry-source-file="index.tsx"
                        >
                            Layer X is a digital assets payment and infrastructure company
                        </h1>

                        {/* Feature list */}
                        <ul
                            data-i2-child="text"
                            className="font-mono text-xs md:text-xs xl:text-sm uppercase tracking-[0.063rem] text-white/80 text-center flex flex-col items-center justify-center gap-2 mb-7 md:flex-row md:gap-5 md:tracking-[0.094rem] lg:mb-9 lg:gap-8 xl:tracking-[0.094rem]"
                            data-sentry-element="Text"
                            data-sentry-source-file="index.tsx"
                        >
                            <li>2400 enterprises</li>
                            <li> $10T transactions</li>
                            <li>500M wallets secured</li>

                        </ul>

                        {/* CTA buttons */}
                        {/* <div
                            data-testid="hero-cta-wrapper"
                            className="flex justify-center gap-2 theme-navy"
                            data-sentry-component="HeroCTA"
                            data-sentry-source-file="index.tsx"
                        >
                            <div
                                className="flex flex-wrap gap-3"
                                data-sentry-component="ButtonsRow"
                                data-sentry-source-file="index.tsx"
                            >
                                <CTAButton
                                    href="https://app.intercom.com/admins/sign_up?cta_domain=fin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    text="Start free trial"
                                    variant="primary"
                                />

                                <CTAButton
                                    href="/view-demos"
                                    text="View demo"
                                    variant="secondary"
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <BackgroundElements />
        </section>
    );
};

interface CTAButtonProps {
    href: string;
    text: string;
    variant: 'primary' | 'secondary';
    target?: '_blank' | '_self';
    rel?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
    href,
    text,
    variant,
    target = '_self',
    rel
}) => {
    const baseClasses = "a11y-focus relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md px-4 py-3 text-center text-base/none font-normal tracking-tight transition-colors duration-400 ease-out-quart focus-visible:outline-offset-2 lg:text-base/none";

    const variants = {
        primary: "bg-interactive-primary text-interactive-control hover:bg-button-hover",
        secondary: "border border-interactive-primary text-interactive-primary hover:bg-interactive-primary hover:text-interactive-control lg:px-4"
    };

    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className={`${baseClasses} ${variants[variant]}`}
            data-sentry-element="Link"
            data-sentry-source-file="index.tsx"
        >
            {text}
        </a>
    );
};

const BackgroundElements: React.FC = () => {
    return (
        <div className="pointer-events-none absolute inset-0 isolate z-0">
            <div className="absolute inset-0 z-0 mx-auto h-full w-full  overflow-hidden">

                {/* Side gradients */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[230px] bg-gradient-to-r from-dark-blue to-transparent xl:block" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[230px] bg-gradient-to-l from-dark-blue to-transparent xl:block" />

                {/* Top/bottom gradients */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-60 bg-gradient-to-t from-dark-blue via-dark-blue/85 via-25% to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-45 bg-gradient-to-b from-dark-blue via-dark-blue/60 to-transparent" />

                {/* Background scene */}
                <div className="absolute inset-0 z-0 h-[97%] opacity-60 hover:opacity-80">
                    <div className="absolute left-0 top-0 size-full bg-dark-blue">
                        {/* Canvas element */}
                        <canvas
                            width="1207"
                            height="687"
                            className="size-full"
                            style={{ width: '966px', height: '550px' }}
                        />

                        {/* Video background */}
                        <video
                            autoPlay
                            loop
                            playsInline
                            muted
                            className="absolute left-0 top-0 size-full object-cover "
                            src="/assets/hero_loop_nonoise_1920.webm"
                        />

                        {/* Image fallback */}
                        {/* <ImageFallback /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ImageFallback: React.FC = () => {
    const srcSet = [
        { width: 640, quality: 90 },
        { width: 750, quality: 90 },
        { width: 828, quality: 90 },
        { width: 1080, quality: 90 },
        { width: 1200, quality: 90 },
        { width: 1920, quality: 90 },
        { width: 2048, quality: 90 },
        { width: 3840, quality: 90 }
    ];

    const srcSetString = srcSet
        .map(({ width, quality }) =>
            `/_next/image?url=%2Fimg%2Fhome%2Fhero.webp&w=${width}&q=${quality} ${width}w`
        )
        .join(', ');

    return (
        <div className="absolute inset-0 size-full overflow-hidden bg-cover">
            {/* Using next/image would be better here, but keeping original img for compatibility */}
            <img
                alt="Hero background"
                fetchPriority="auto"
                loading="lazy"
                decoding="async"
                className="size-full object-cover object-center opacity-100 transition-opacity duration-300 ease-out-quad"
                sizes="100vw"
                srcSet={srcSetString}
                src="/_next/image?url=%2Fimg%2Fhome%2Fhero.webp&w=3840&q=90"
                style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }}
                data-nimg="fill"
            />
        </div>
    );
};

export default Hero;