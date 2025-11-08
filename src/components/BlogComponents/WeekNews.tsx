// components/WeekNews.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/utils/sanity';

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
    isFeatured?: boolean;
    estimatedReadingTime?: number;
}

interface WeekNewsProps {
    posts: SanityArticle[];
    limit?: number;
}

const WeekNews: React.FC<WeekNewsProps> = ({
    posts,
    limit = 5
}) => {
    const articles = posts.slice(0, limit);

    if (!articles || articles.length === 0) {
        return null;
    }

    const featuredArticles = articles.slice(0, 2);
    const noThumbArticles = articles.slice(2);

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
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Uncomplicating Your Finance
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Regular News Items */}
                    {featuredArticles.map((article, index) => {
                        const primaryCategory = article.categories && article.categories.length > 0
                            ? article.categories[0]
                            : null;
                        const isFeatured = index === 0; // Make first article featured

                        return (
                            <div key={article._id} className={`${isFeatured ? 'lg:col-span-2' : ''}`}>
                                <article className="overflow-hidden transition-shadow duration-300 border-r-2 border-gray-200 p-4 h-full">
                                    {!isFeatured && article.mainImage && (
                                        <div className="relative">
                                            <Link href={`/blog/${article.slug.current}`}>
                                                <Image
                                                    src={article.mainImage.asset.url}
                                                    alt={article.mainImage.alt || article.title}
                                                    width={810}
                                                    height={540}
                                                    className="w-full h-48 object-cover"
                                                />
                                            </Link>
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <Link href={`/blog/${article.slug.current}`} className="group">
                                            <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-[#0d07ed]/60 transition-colors ${isFeatured ? 'text-xl lg:text-2xl' : 'text-lg'
                                                }`}>
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {article.excerpt || 'Read more about this article...'}
                                            </p>

                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <span className="text-sm text-gray-500">
                                                        {formatDate(article.publishedAt)}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-[#0d07ed]/60 font-medium group-hover:gap-3 transition-all">
                                                    <span>{isFeatured && 'Read more'}</span>
                                                </div>
                                            </div>
                                        </Link>

                                        {primaryCategory && (
                                            <div className="mt-4 pt-4 border-t border-gray-100">
                                                <p className="text-sm text-gray-500 mb-2">
                                                    {isFeatured ? 'Related Topics' : 'Assuntos relacionados'}
                                                </p>
                                                <div>
                                                    <div
                                                        className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                                                    >
                                                        {primaryCategory.title}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </article>
                            </div>
                        );
                    })}

                    {/* No Thumb Articles */}
                    <div className="space-y-6">
                        {noThumbArticles.map((article) => {
                            const primaryCategory = article.categories && article.categories.length > 0
                                ? article.categories[0]
                                : null;

                            return (
                                <article key={article._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                    <Link href={`/blog/${article.slug.current}`} className="group">
                                        <h3 className="font-bold text-gray-900 mb-3 group-hover:text-[#0d07ed]/60 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {article.excerpt || 'Read more about this article...'}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-[#0d07ed]/60 font-medium group-hover:gap-3 transition-all">
                                                <span>Read more</span>
                                            </div>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 12.9999C10.3137 12.9999 13 10.3136 13 6.99994C13 3.68623 10.3137 0.999939 7 0.999939C3.68629 0.999939 1 3.68623 1 6.99994C1 10.3136 3.68629 12.9999 7 12.9999Z" stroke="#716D73" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7 3.39996V6.99996L9.4 8.19996" stroke="#716D73" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {article.estimatedReadingTime ? `${article.estimatedReadingTime} min read` : '5 min read'}
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default WeekNews;