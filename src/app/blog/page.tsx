// app/page.tsx
import React from 'react';
import FeaturedArticles from '@/components/BlogComponents/FeatureSlider';
import MainNews from '@/components/BlogComponents/MainSection';
import TagsSection from '@/components/BlogComponents/TagsSection';
import Newsletter from '@/components/BlogComponents/NewsLetter';
import FeaturedCard from '@/components/BlogComponents/FeatureCard';
import WeekNews from '@/components/BlogComponents/WeekNews';
import ArticlesGrid from '@/components/BlogComponents/ArticlesGrid';
import SpecialsSection from '@/components/BlogComponents/SpecialsSection';
import CollectionSection from '@/components/BlogComponents/CollectionSection';
import { client } from '@/utils/sanity';

export const revalidate = 3600;

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
            _id?: string;
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
    isFeatured?: boolean;
    readingTime?: number;
    author?: {
        name: string;
        slug?: {
            current: string;
        };
    };
}

async function getAllPosts(): Promise<SanityArticle[]> {
    try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      slug,
      publishedAt,
      mainImage{
        asset->{
          url,
          _id
        },
        alt
      },
      categories[]->{
        title,
        slug
      },
      estimatedReadingTime,
      readingTime,
      isFeatured,
      "author": author->{
        name,
        slug
      }
    }`;

        const posts = await client.fetch(query, {}, {
            cache: 'force-cache',
            next: { revalidate: 3600 }
        });

        console.log(`Fetched ${posts?.length || 0} posts from Sanity`);

        if (!posts || posts.length === 0) {
            console.warn('No posts found in Sanity');
            return [];
        }

        return posts;
    } catch (error) {
        console.error('Error fetching all posts:', error);
        return [];
    }
}

function BlogLoadingSkeleton() {
    return (
        <div className="min-h-screen ">
            <div className="container mx-auto px-4 py-8">
                {/* Featured Articles Skeleton */}
                <div className="animate-pulse mb-12">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white rounded-lg shadow-sm p-4">
                                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main News Skeleton */}
                <div className="animate-pulse mb-12">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="h-64 bg-gray-200 rounded"></div>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-16 bg-gray-200 rounded"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

async function HomeContent() {
    const allPosts = await getAllPosts();

    if (allPosts.length === 0) {
        return (
            <div className="min-h-screen  flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">No Posts Available</h2>
                    <p className="text-gray-600">
                        {process.env.NODE_ENV === 'development'
                            ? 'Check your Sanity configuration and ensure you have posts published.'
                            : 'Please check back later for new content.'}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <FeaturedArticles posts={allPosts.slice(0, 3)} />
            <MainNews posts={allPosts.slice(0, 3)} />
            <TagsSection />
            <Newsletter />
            <FeaturedCard posts={allPosts.slice(0, 1)} />
            <WeekNews posts={allPosts.slice(0, 5)} />
            <ArticlesGrid posts={allPosts.slice(0, 4)} />
            <SpecialsSection posts={allPosts.slice(0, 5)} />
            <CollectionSection posts={allPosts.slice(0, 4)} />
        </div>
    );
}

export default async function Home() {
    return (
        <React.Suspense fallback={<BlogLoadingSkeleton />}>
            <HomeContent />
        </React.Suspense>
    );
}