
'use client';

import { motion } from 'framer-motion';
import { MarqueeProps } from '@/app/types/startups.types';

export const Marquee: React.FC<MarqueeProps> = ({
    items: marqueedata = [],
    speed = 30,
    pauseOnHover = true,
    direction = 'left',
    className = '',
}) => {

    const marqueeItems = marqueedata
    const duplicatedItems = [...marqueeItems, ...marqueeItems];

    return (
        <div className="flex justify-center px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 my-28">
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