'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SanitySpecial {
    _id: string;
    title: string;
    excerpt?: string;
    slug: {
        current: string;
    };
    mainImage?: {
        asset: {
            url: string;
        };
        alt?: string;
    };
    categories?: Array<{
        title: string;
        slug?: {
            current: string;
        };
    }>;
    publishedAt: string;
    isFeatured?: boolean;
}

interface SpecialsSectionProps {
    posts: SanitySpecial[];
}

const SpecialsSection: React.FC<SpecialsSectionProps> = ({ posts }) => {
    const specials = posts;
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!specials || specials.length === 0) {
        return null;
    }

    const slidesToShow = 3;
    const maxSlide = Math.max(0, specials.length - slidesToShow);

    const nextSlide = () => {
        setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    };



    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        LayerX Articles
                    </h2>
                    <Link
                        className="flex items-center gap-2 text-[#0d07ed]/60 font-medium hover:text-[#0d07ed]-700 transition-colors"
                        href="/especiais/"
                    >
                        See more
                        <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.38501 3.5249L6.68001 4.2299L9.47001 7.0249H3.38501V8.0249H9.47001L6.68001 10.8199L7.38501 11.5249L11.035 7.8749C11.1281 7.78122 11.1804 7.6545 11.1804 7.5224C11.1804 7.39031 11.1281 7.26358 11.035 7.1699L7.38501 3.5249Z" fill="currentColor" />
                        </svg>
                    </Link>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-6"
                        style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
                    >
                        {specials.map((special, index) => {
                            const primaryCategory = special.categories && special.categories.length > 0
                                ? special.categories[0]
                                : null

                            return (
                                <div
                                    key={special._id}
                                    className="flex-shrink-0"
                                    style={{ width: `calc(${100 / slidesToShow}% - 1rem)` }}
                                >
                                    <div className="relative bg-white  overflow-hidden transition-all duration-300 group">
                                        {/* Background Image with Blur */}
                                        <div className="absolute inset-0">
                                            {special.mainImage ? (
                                                <Image
                                                    src={special.mainImage.asset.url}
                                                    alt={special.mainImage.alt || special.title}
                                                    fill
                                                    className="object-cover"
                                                    priority={index < 3}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                                    <span className="text-gray-600">No Image</span>
                                                </div>
                                            )}
                                            {/* Blur Overlay */}
                                            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 p-6 min-h-[400px] flex flex-col justify-between">
                                            <div>
                                                <div className="mb-4">
                                                    {primaryCategory && (
                                                        <div
                                                            className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium hover:bg-white transition-all duration-300 rounded-full"
                                                        >
                                                            {primaryCategory.title}
                                                        </div>
                                                    )}
                                                </div>

                                                <Link className="block group" href={`/resources/learn/blog/${special.slug.current}`}>
                                                    <div className="mb-6">
                                                        <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-white/90 transition-colors leading-tight line-clamp-3">
                                                            {special.title}
                                                        </h3>
                                                    </div>
                                                </Link>
                                            </div>

                                            <Link
                                                href={`/resources/learn/blog/${special.slug.current}`}
                                                className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors group mt-auto"
                                            >
                                                <span className="font-medium group-hover:underline">Learn more</span>
                                                <svg
                                                    width="19"
                                                    height="10"
                                                    viewBox="0 0 19 10"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="group-hover:translate-x-1 transition-transform"
                                                >
                                                    <path d="M0.799805 4.80078H16.7998" stroke="currentColor" strokeWidth="0.96" strokeMiterlimit="10" />
                                                    <path d="M12.8798 0.400391L17.5998 4.72039L12.7998 9.12039" stroke="currentColor" strokeWidth="0.96" strokeMiterlimit="10" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        aria-label="Previous slide"
                    >
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.1899 7.00001L0.399902 11.79L1.8099 13.21L7.3099 7.71001C7.40363 7.61705 7.47802 7.50644 7.52879 7.38459C7.57956 7.26273 7.6057 7.13202 7.6057 7.00001C7.6057 6.868 7.57956 6.73729 7.52879 6.61543C7.47802 6.49357 7.40363 6.38297 7.3099 6.29001L1.8099 0.790009L0.399902 2.21001L5.1899 7.00001Z" fill="#0d07ed" />
                        </svg>
                    </button>

                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
                        onClick={nextSlide}
                        disabled={currentSlide >= maxSlide}
                        aria-label="Next Slide"
                    >
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.8101 7.00001L7.6001 2.21001L6.1901 0.790009L0.690098 6.29001C0.596368 6.38297 0.521979 6.49357 0.471209 6.61543C0.420439 6.73729 0.394299 6.868 0.394299 7.00001C0.394299 7.13202 0.420439 7.26273 0.471209 7.38459C0.521979 7.50644 0.596368 7.61705 0.690098 7.71001L6.1901 13.21L7.6001 11.79L2.8101 7.00001Z" fill="#0d07ed" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center items-center gap-2 mt-8">
                    {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#0d07ed]/60 w-6' : 'bg-gray-300'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialsSection;