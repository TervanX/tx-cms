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
}

interface ArticlesGridProps {
    posts: SanityArticle[];
    limit?: number;
}

const ArticlesGrid: React.FC<ArticlesGridProps> = ({
    posts,
    limit = 4
}) => {
    const articles = posts.slice(0, limit);

    if (!articles || articles.length === 0) {
        return null;
    }
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Latest Articles
                    </h2>
                    <Link className="flex items-center gap-2 text-[#0d07ed]/60 font-medium hover:text-[#0d07ed]-700 transition-colors" href="/ultimas-noticias/">
                        See more
                        <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.38501 3.5249L6.68001 4.2299L9.47001 7.0249H3.38501V8.0249H9.47001L6.68001 10.8199L7.38501 11.5249L11.035 7.8749C11.1281 7.78122 11.1804 7.6545 11.1804 7.5224C11.1804 7.39031 11.1281 7.26358 11.035 7.1699L7.38501 3.5249Z" fill="currentColor" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {articles.map((article) => {
                        const primaryCategory = article.categories && article.categories.length > 0
                            ? article.categories[0]
                            : null;

                        return (
                            <div key={article._id}>
                                <article className="bg-white border-r-2 p-4 h-full border-gray-200 overflow-hidden transition-shadow duration-300">
                                    <div className="relative">
                                        <Link href={`/resources/learn/blog/${article.slug.current}`}>
                                            <Image
                                                src={article.mainImage?.asset.url || '/placeholder-image.jpg'}
                                                alt={article.mainImage?.alt || article.title}
                                                width={810}
                                                height={540}
                                                className="w-full h-48 object-cover"
                                            />
                                        </Link>
                                    </div>

                                    <div>
                                        <Link href={`/resources/learn/blog/${article.slug.current}`} className="group">
                                            <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0d07ed]/60 transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray/60 mb-4 line-clamp-3">
                                                {article.excerpt || 'Read more about this article...'}
                                            </p>

                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <span className="text-sm text-gray-500">
                                                        {formatDate(article.publishedAt)}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-[#0d07ed]/60 font-medium group-hover:gap-3 transition-all">
                                                    <span>Read more</span>
                                                </div>
                                            </div>
                                        </Link>

                                        {primaryCategory && (
                                            <div className="mt-4 pt-4 border-t border-gray-100">
                                                <p className="text-sm text-gray-500 mb-2">
                                                    Related Topics
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
                </div>
            </div>
        </section>
    );
};

export default ArticlesGrid;