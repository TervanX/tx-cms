"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    }>;
    publishedAt: string;
    estimatedReadingTime?: number;
}

interface CollectionSectionProps {
    posts: SanityArticle[];
}

const CollectionSection: React.FC<CollectionSectionProps> = ({ posts }) => {
    const articles = posts;
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!articles || articles.length === 0) {
        return null;
    }
    const sliderArticles = articles.slice(0, 2);
    const rightColumnArticles = articles.slice(2);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderArticles.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderArticles.length) % sliderArticles.length);
    };

    return (
        <section className="py-16 ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
                        Layer X helps you achieve your goals in 2025
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Slider Section - Background Image Layout */}
                    <div className="lg:col-span-2">
                        <div className="relative overflow-hidden ">
                            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {sliderArticles.map((article, index) => (
                                    <div key={article._id} className="w-full flex-shrink-0">
                                        {/* Background Image Container */}
                                        <div className="relative min-h-[500px] lg:min-h-[600px]  overflow-hidden">
                                            {/* Background Image */}
                                            {article.mainImage ? (
                                                <Image
                                                    src={article.mainImage.asset.url}
                                                    alt={article.mainImage.alt || article.title}
                                                    fill
                                                    className="object-cover"
                                                    priority={index === 0}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                                    <span className="text-gray-600">No Image</span>
                                                </div>
                                            )}

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                                            {/* Content Overlay */}
                                            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-12">
                                                <div className="max-w-2xl">
                                                    <div className="mb-6">
                                                        <Link href={`/blog/${article.slug.current}`}>
                                                            <h3 className="text-2xl lg:text-4xl font-bold text-white leading-tight hover:text-[#0d07ed]-200 transition-colors">
                                                                {article.title}
                                                            </h3>
                                                        </Link>
                                                    </div>

                                                    {article.excerpt && (
                                                        <div className="mb-8">
                                                            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                                                                {article.excerpt}
                                                            </p>
                                                        </div>
                                                    )}

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex gap-2">
                                                            {sliderArticles.map((_, dotIndex) => (
                                                                <button
                                                                    key={dotIndex}
                                                                    onClick={() => setCurrentSlide(dotIndex)}
                                                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${dotIndex === currentSlide
                                                                        ? 'bg-white w-8'
                                                                        : 'bg-white/50 hover:bg-white/70'
                                                                        }`}
                                                                    aria-label={`Go to slide ${dotIndex + 1}`}
                                                                />
                                                            ))}
                                                        </div>

                                                        <Link
                                                            href={`/blog/${article.slug.current}`}
                                                            className="flex items-center gap-2 text-white font-medium hover:gap-3 transition-all group"
                                                        >
                                                            <span className="group-hover:underline">Learn more</span>
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
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                                aria-label="Previous slide"
                            >
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.1899 7.00001L0.399902 11.79L1.8099 13.21L7.3099 7.71001C7.40363 7.61705 7.47802 7.50644 7.52879 7.38459C7.57956 7.26273 7.6057 7.13202 7.6057 7.00001C7.6057 6.868 7.57956 6.73729 7.52879 6.61543C7.47802 6.49357 7.40363 6.38297 7.3099 6.29001L1.8099 0.790009L0.399902 2.21001L5.1899 7.00001Z" fill="#0d07ed" />
                                </svg>
                            </button>

                            <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
                                onClick={nextSlide}
                                disabled={currentSlide === sliderArticles.length - 1}
                                aria-label="Next Slide"
                            >
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.8101 7.00001L7.6001 2.21001L6.1901 0.790009L0.690098 6.29001C0.596368 6.38297 0.521979 6.49357 0.471209 6.61543C0.420439 6.73729 0.394299 6.868 0.394299 7.00001C0.394299 7.13202 0.420439 7.26273 0.471209 7.38459C0.521979 7.50644 0.596368 7.61705 0.690098 7.71001L6.1901 13.21L7.6001 11.79L2.8101 7.00001Z" fill="#0d07ed" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column Articles */}
                    <div className="space-y-6">
                        {rightColumnArticles.map((article) => (
                            <article
                                key={article._id}
                                className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                            >
                                <Link href={`/blog/${article.slug.current}`} className="group block">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0d07ed]-600 transition-colors">
                                        {article.title}
                                    </h3>

                                    <div className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                        {article.excerpt || 'Read more about this article...'}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[#0d07ed]-600 font-medium group-hover:gap-3 transition-all">
                                            <span>Read more</span>
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
                                        </div>

                                        <div className="text-sm text-gray-500 flex items-center gap-1">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 12.9999C10.3137 12.9999 13 10.3136 13 6.99994C13 3.68623 10.3137 0.999939 7 0.999939C3.68629 0.999939 1 3.68623 1 6.99994C1 10.3136 3.68629 12.9999 7 12.9999Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7 3.39996V6.99996L9.4 8.19996" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {article.estimatedReadingTime ? `${article.estimatedReadingTime} min read` : '5 min read'}
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};



export default CollectionSection;