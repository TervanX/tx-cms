import React from 'react';
import Button from '../reusable/Button';

interface CardItem {
    id: string;
    title: string;
    image: {
        src: string;
        sizes: string;
        alt: string;
    };
    button: {
        text: string;
        href: string;
        target?: '_blank' | '_self';
    };
}

interface CardGridProps {
    cards: CardItem[];
    className?: string;
}

const Resources: React.FC = () => {
    const cards: CardItem[] = [
        {
            id: 'academy',
            title: 'Visit Apollo Academy to learn new skills and become an Apollo power user.',
            image: {
                src: '/assets/image15.webp',
                sizes: '(max-width: 1024px) 100vw, 50vw',
                alt: 'Apollo Academy'
            },
            button: {
                text: 'Visit Apollo Academy',
                href: '/academy',
                target: '_blank'
            }
        },
        {
            id: 'slack-community',
            title: 'Join our startup community to connect & learn from fellow entrepreneurs and experts.',
            image: {
                src: '/assets/image16.webp',
                sizes: '(max-width: 1024px) 100vw, 50vw',
                alt: 'Slack Community'
            },
            button: {
                text: 'Join Slack Community',
                href: '/community',
                target: '_blank'
            }
        },
         {
            id: 'explore-marketplace',
            title: 'Explore Apollos deal marketplace for exclusive discounts on SaaS tools.',
            image: {
                src: '/assets/image17.webp',
                sizes: '(max-width: 1024px) 100vw, 50vw',
                alt: 'Explore Marketplace'
            },
            button: {
                text: 'Explore Marketplace',
                href: '/marketplace',
                target: '_blank'
            }
        },
         {
            id: 'outbound-sales',
            title: 'Read Outbound Sales to learn a multi-channel approach to growing your startup.',
            image: {
                src: '/assets/image18.webp',
                sizes: '(max-width: 1024px) 100vw, 50vw',
                alt: 'Read Outbound Sales'
            },
            button: {
                text: 'Read Outbound Sales',
                href: '/outbound',
                target: '_blank'
            }
        }
    ];

    return <CardGrid cards={cards} />;
};

export default Resources;

const ArrowIcon: React.FC = () => (
    <span className="right-icon transition-transform group-hover:translate-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 18" fill="none">
            <path
                d="M14.4911 9.62505L9.55806 14.5581L10.4419 15.442L16.8839 9.00005L10.4419 2.55811L9.55806 3.44199L14.4911 8.37505L1 8.37505L1 9.62505L14.4911 9.62505Z"
                fill="currentColor"
            />
        </svg>
    </span>
);

const Card: React.FC<{ card: CardItem }> = ({ card }) => {
    return (
        <div className="flex h-full flex-col gap-6 rounded-xl p-6 text-black md:p-8 lg:p-10 bg-[#F7F5F2]">
            {/* Image */}
            <div className="relative h-auto w-full aspect-[2]">
                <img
                    alt={card.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl object-cover"
                    style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: 'transparent'
                    }}
                    sizes={card.image.sizes}
                    src={card.image.src}
                />
            </div>

            {/* Content */}
            <div className="flex grow flex-col gap-4">
                <p className="
          antialiased 
          desktop-xl:text-[40px] desktop-xl:leading-[110%] 
          desktop:text-[32px] desktop:leading-[110%] 
          desktop-s:text-[26px] desktop-s:leading-[110%] 
          text-[24px] leading-[110%] 
          font-founders-grotesk text-text-header
        ">
                    {card.title}
                </p>

                {/* Button */}
                <div className="mt-auto w-full md:w-auto">
                    <Button href={card.button.href} target={card.button.target} variant='outline' className=' bg-transparent'>
                        <p className="text-[16px] leading-[130%] font-abc-diatype text-inherit flex gap-2 items-center">
                            {card.button.text}
                            <ArrowIcon />
                        </p>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
    return (
        <div className="px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 my-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-4 text-center md:gap-6">
                    <h4 className="max-w-6xl text-balance font-founders-grotesk text-[36px] leading-none tracking-[-0.72px] text-dark md:text-[48px] md:tracking-[-0.96px] lg:text-[48px] lg:tracking-[-0.96px] xl:text-[56px] xl:tracking-[-1.12px] lg:mb-12 mb-6">
                        Resources for Startups
                    </h4>
                </div>
                <div className="h-10" />
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                    {cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};