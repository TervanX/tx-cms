
'use client';

import { motion } from 'framer-motion';
import { MarqueeProps } from '@/app/types/startups.types';

export const Marquee: React.FC<MarqueeProps> = ({
    items,
    speed = 30,
    pauseOnHover = true,
    direction = 'left',
    className = '',
}) => {
    const marqueeItems = items || [
        {
            id: '1',
            alt: '2025 spring best relationship',
            src: '/assets/2025-spring-best-relatnionship.e852da01.svg',
            width: 105,
            height: 120,
        },
        {
            id: '2',
            alt: '2025 spring best results',
            src: '/assets/2025-spring-best-results.bd944908.svg',
            width: 105,
            height: 120,
        },
        {
            id: '3',
            alt: '2025 spring best roi',
            src: '/assets/2025-spring-best-roi.4e11006b.svg',
            width: 105,
            height: 120,
        },
        {
            id: '4',
            alt: '2025 spring high performer',
            src: '/assets/2025-spring-high-performer.ac61c4b0.svg',
            width: 105,
            height: 120,
        },
        {
            id: '5',
            alt: '2025 spring momentum leader',
            src: '/assets/2025-spring-momentum-leader.1dedd1e8.svg',
            width: 105,
            height: 120,
        },
        {
            id: '6',
            alt: '2025 spring most implementable',
            src: '/assets/2025-spring-most-implementable.357d0c18.svg',
            width: 105,
            height: 120,
        },
        {
            id: '7',
            alt: '2025 spring top50 sales products',
            src: '/assets/2025-spring-top50-sales-products.a56b5440.svg',
            width: 105,
            height: 120,
        },
        {
            id: '8',
            alt: '2025 spring top50 small business products',
            src: '/assets/2025-spring-top50-small-business-products.39d1f8e7.svg',
            width: 105,
            height: 120,
        },
        {
            id: '9',
            alt: '2025 spring top100 best software products',
            src: '/assets/2025-spring-top100-best-software-products.2ab8a2d3.svg',
            width: 105,
            height: 120,
        },
        {
            id: '10',
            alt: '2025 spring top100 global sellers',
            src: '/assets/2025-spring-top100-global-sellers.8a1741b6.svg',
            width: 105,
            height: 120,
        },
        {
            id: '11',
            alt: '2025 spring top100 highest satisfation product',
            src: '/assets/2025-spring-top100-highest-satisfation-product.2851ec87.svg',
            width: 105,
            height: 120,
        },
    ];

    
    const duplicatedItems = [...marqueeItems, ...marqueeItems];

    return (
        <div className="flex justify-center px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 my-20">
            <div className="container mx-auto px-4">
                <div
                    className={`
                        relative overflow-hidden 
                        bg-gradient-to-r from-transparent via-white to-transparent
                        ${className}
                    `}
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    <motion.div
                        className="flex"
                        animate={{
                            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: speed,
                                ease: 'linear',
                            },
                        }}
                        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
                    >
                        {duplicatedItems.map((item, index) => (
                            <div 
                                key={`${item.id}-${index}`} 
                                className="flex-shrink-0 px-4"
                            >
                                <img
                                    alt={item.alt}
                                    loading="lazy"
                                    width={item.width}
                                    height={item.height}
                                    decoding="async"
                                    className="lg:h-[144px] lg:w-[127px] h-[120px] w-[105px]"
                                    src={item.src}
                                    style={{ color: 'transparent' }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};