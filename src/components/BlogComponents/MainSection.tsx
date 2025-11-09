import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SanityNewsItem {
    _id: string;
    title: string;
    excerpt?: string;
    slug: {
        current: string;
    };
    publishedAt: string;
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
    estimatedReadingTime?: number;
}

interface MainNewsProps {
    posts: SanityNewsItem[];
    categoryFilter?: string;
    limit?: number;
    title?: string;
}

const MainNews: React.FC<MainNewsProps> = ({
    posts,
    categoryFilter,
    limit = 3,
    title = "And the Selic, huh... never downloads..."
}) => {
    const newsItems = posts.slice(0, limit);

    if (!newsItems || newsItems.length === 0) {
        return (
            <section className="py-16 lg:px-12">
                <div className="mx-auto px-4">
                    <div className="text-center">
                        <p className="text-gray-600">No articles found.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16">
            <div className="mx-auto container px-4">
                <div className="mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {newsItems.map((item, index) => (
                        <article key={item._id} className={`${index === 0 ? 'lg:col-span-2' : ''}`}>
                            <div className="bg-white border-r-2 border-gray-200 p-4 overflow-hidden transition-shadow duration-300 h-full">
                                <div className="relative">
                                    <Link href={`/blog/${item.slug.current}`}>
                                        {item.mainImage ? (
                                            <Image
                                                src={item.mainImage.asset.url}
                                                alt={item.mainImage.alt || item.title}
                                                width={810}
                                                height={540}
                                                className="w-full h-48 lg:h-64 object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-48 lg:h-64 bg-gray-300 flex items-center justify-center">
                                                <span className="text-gray-600">No Image</span>
                                            </div>
                                        )}
                                    </Link>
                                </div>

                                <div className="p-6">
                                    <Link href={`/blog/${item.slug.current}`} className="group">
                                        <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-[#0d07ed] transition-colors ${index === 0 ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'
                                            }`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {item.excerpt || 'Read more about this article...'}
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="text-sm text-gray-500">
                                                    {new Date(item.publishedAt).toLocaleDateString('en-US', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[#0d07ed] font-medium group-hover:gap-3 transition-all">
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
                                        </div>
                                    </Link>

                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <p className="text-sm text-gray-500 mb-2">
                                            Related Topics
                                        </p>
                                        <div>
                                            {item.categories && item.categories.length > 0 ? (
                                                <div
                                                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                                                >
                                                    {item.categories[0].title}
                                                </div>
                                            ) : (
                                                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                                    Uncategorized
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center px-6 py-3 border border-[#0d07ed/60 text-[#0d07ed]/60 font-medium rounded-lg hover:bg-[#0d07ed] hover:text-white transition-colors duration-200 group"
                    >
                        <span>View All Articles</span>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 15 15"
                            fill="none"
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                        >
                            <path
                                d="M7.38501 3.5249L6.68001 4.2299L9.47001 7.0249H3.38501V8.0249H9.47001L6.68001 10.8199L7.38501 11.5249L11.035 7.8749C11.1281 7.78122 11.1804 7.6545 11.1804 7.5224C11.1804 7.39031 11.1281 7.26358 11.035 7.1699L7.38501 3.5249Z"
                                fill="currentColor"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MainNews;