import React from 'react';
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
        slug?: {
            current: string;
        };
    }>;
    publishedAt: string;
    estimatedReadingTime?: number;
}

interface FeaturedCardProps {
    posts: SanityArticle[];
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ posts }) => {
    const article = posts[0];
    if (!article) {
        return null;
    }
    const primaryCategory = article.categories && article.categories.length > 0 ? article.categories[0] : null;

    // Format date function
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="relative min-h-screen bg-gray-50 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                {article.mainImage ? (
                    <Image
                        src={article.mainImage.asset.url}
                        alt={article.mainImage.alt || article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-600">No Image</span>
                    </div>
                )}
            </div>

            {/* Content Overlay */}
            <div className="relative h-screen flex items-end">
                <div className="container mx-auto px-4 pb-8 lg:pb-16">
                    {/* Gradient Card */}
                    <div className="bg-[#0d07ed] text-white rounded-lg mx-auto lg:w-3/5 shadow-xl">
                        {/* Content */}
                        <div className="p-8 lg:p-12">
                            <div>
                                {primaryCategory && (
                                    <div
                                        className="inline-flex items-center px-4 py-2 bg-white text-[#0d07ed]-600 rounded-full text-sm font-medium mb-4 hover:bg-gray-50 transition-colors"
                                    >
                                        {primaryCategory.title}
                                    </div>
                                )}

                                <Link className="block group" href={`/resources/learn/blog/${article.slug.current}`}>
                                    <div className="mb-4">
                                        <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#0d07ed]-200 transition-colors">
                                            {article.title}
                                        </h2>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-[#0d07ed]-100 text-lg leading-relaxed">
                                            {article.excerpt || 'Read more about this article...'}
                                        </p>
                                    </div>
                                </Link>

                                <Link href={`/resources/learn/blog/${article.slug.current}`} className="inline-block group">
                                    <div className="flex items-center gap-2 text-white hover:text-[#0d07ed]-200 transition-colors">
                                        <span className="font-medium group-hover:underline">Read more</span>
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
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Date and read time - Outside the gradient */}
                    <div className="flex items-center gap-4 mt-6 text-sm text-white mx-auto lg:w-3/5">
                        <span>{formatDate(article.publishedAt)}</span>
                        <span className="flex items-center gap-1">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 12.9999C10.3137 12.9999 13 10.3136 13 6.99994C13 3.68623 10.3137 0.999939 7 0.999939C3.68629 0.999939 1 3.68623 1 6.99994C1 10.3136 3.68629 12.9999 7 12.9999Z"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M7 3.39996V6.99996L9.4 8.19996"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {article.estimatedReadingTime ? `${article.estimatedReadingTime} min read` : '4 min read'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default FeaturedCard;