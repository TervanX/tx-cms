'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

interface SanityArticle {
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
}

interface FeaturedArticlesProps {
    limit?: number;
}

interface FeaturedArticlesProps {
    posts: SanityArticle[];
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ posts }) => {
    const articles = posts;
    const swiperRef = useRef<SwiperType>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    if (!articles || articles.length === 0) {
        return null;
    }

    return (
        <section className="relative min-h-screen container mx-auto overflow-hidden" id="maincontent">
            <div className="px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Content Section */}
                    <div className="relative z-10 lg:left-30">
                        <div className="">
                            <div className="bg-gray-200 border-t-4 border-gray-300 backdrop-blur-[100px] p-6 lg:p-8">
                                {/* Article Content */}
                                <div className="mb-6">
                                    <Link className="block group" href={`/blog/${articles[activeIndex].slug.current}`}>
                                        <div className="mb-4">
                                            <h2 className="text-2xl lg:text-3xl font-bold text-dark group-hover:text-[#0d07ed] transition-colors">
                                                {articles[activeIndex].title}
                                            </h2>
                                        </div>
                                    </Link>
                                    <div className="mb-6">
                                        <p className="text-dark text-lg leading-relaxed line-clamp-2">
                                            {articles[activeIndex].excerpt || 'Read more about this article...'}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div className="flex items-center gap-3">
                                        {articles[activeIndex].categories && articles[activeIndex].categories.length > 0 && (
                                            <div
                                                className="inline-flex items-center px-4 py-2 bg-[#0d07ed] text-white rounded-full text-sm font-medium hover:bg-[#0d07ed]/60 transition-colors"
                                            >
                                                {articles[activeIndex].categories[0].title}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center">
                                        <Link href={`/blog/${articles[activeIndex].slug.current}`} className="group">
                                            <div className="flex items-center gap-2 text-[#0d07ed] hover:text-[#0d07ed]/70 transition-colors">
                                                <span className="font-medium group-hover:underline">Learn more</span>
                                                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                                                    <path d="M0.799805 4.80078H16.7998" stroke="currentColor" strokeWidth="0.96" strokeMiterlimit="10" />
                                                    <path d="M12.8798 0.400391L17.5998 4.72039L12.7998 9.12039" stroke="currentColor" strokeWidth="0.96" strokeMiterlimit="10" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="flex gap-2 mt-6">
                                    {articles.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-8 h-1 rounded-full transition-colors ${index === activeIndex ? 'bg-[#0d07ed]/60' : 'bg-gray-300'
                                                }`}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider Section */}
                    <div className="relative lg:col-span-2">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.activeIndex);
                            }}
                            className="w-full h-64 lg:h-200 overflow-hidden"
                        >
                            {articles.map((article, index) => (
                                <SwiperSlide key={article._id}>
                                    <div className="relative w-full h-full">
                                        {article.mainImage ? (
                                            <Image
                                                src={article.mainImage.asset.url}
                                                alt={article.mainImage.alt || article.title}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                                sizes="(max-width: 1024px) 100vw, 66vw"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                                <span className="text-gray-600">No Image</span>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50 transition-colors z-10"
                            onClick={() => swiperRef.current?.slidePrev()}
                            disabled={activeIndex === 0}
                            aria-label="Previous slide"
                        >
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.1899 7.00001L0.399902 11.79L1.8099 13.21L7.3099 7.71001C7.40363 7.61705 7.47802 7.50644 7.52879 7.38459C7.57956 7.26273 7.6057 7.13202 7.6057 7.00001C7.6057 6.868 7.57956 6.73729 7.52879 6.61543C7.47802 6.49357 7.40363 6.38297 7.3099 6.29001L1.8099 0.790009L0.399902 2.21001L5.1899 7.00001Z" fill="#0d07ed" />
                            </svg>
                        </button>

                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50 transition-colors z-10"
                            onClick={() => swiperRef.current?.slideNext()}
                            disabled={activeIndex === articles.length - 1}
                            aria-label="Next Slide"
                        >
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.1899 7.00001L0.399902 11.79L1.8099 13.21L7.3099 7.71001C7.40363 7.61705 7.47802 7.50644 7.52879 7.38459C7.57956 7.26273 7.6057 7.13202 7.6057 7.00001C7.6057 6.868 7.57956 6.73729 7.52879 6.61543C7.47802 6.49357 7.40363 6.38297 7.3099 6.29001L1.8099 0.790009L0.399902 2.21001L5.1899 7.00001Z" fill="#0d07ed" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default FeaturedArticles;