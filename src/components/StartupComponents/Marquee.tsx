
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
                                className="flex-shrink-0 px-4 relative group"
                            >
                                <img
                                    alt={item.alt}
                                    loading="lazy"
                                    width={item.width}
                                    height={item.height}
                                    decoding="async"
                                    src={item.src}
                                    style={{ color: 'transparent' }}
                                    className="transition-all duration-300 group-hover:brightness-90"
                                />
                                {item.tag && (
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 
                 bg-black/80 text-white 
                  px-3 py-1 rounded-lg text-xs font-semibold 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-300 ease-out
                  group-hover:translate-y-0 -translate-y-2
                  shadow-lg whitespace-nowrap">
                                        {item.tag}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};