// app/page.tsx
import React from 'react';
import FeaturedArticles from '@/components/BlogComponents/FeatureSlider';
import MainNews from '@/components/BlogComponents/MainSextion';
import TagsSection from '@/components/BlogComponents/TagsSection';
import Newsletter from '@/components/BlogComponents/NewsLetter';
import FeaturedCard from '@/components/BlogComponents/FeatureCard';
import WeekNews from '@/components/BlogComponents/WeekNews';
import ArticlesGrid from '@/components/BlogComponents/ArticlesGrid';
import SpecialsSection from '@/components/BlogComponents/SpecialsSection';
import CollectionSection from '@/components/BlogComponents/CollectionSection';
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
    estimatedReadingTime?: number;
    isFeatured?: boolean;
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
          url
        },
        alt
      },
      categories[]->{
        title,
        slug
      },
      estimatedReadingTime,
      isFeatured
    }`;

        const posts = await client.fetch(query);
        return posts || [];
    } catch (error) {
        console.error('Error fetching all posts:', error);
        return [];
    }
}

export default async function Home() {
    const allPosts = await getAllPosts();

    return (
        <>
            <FeaturedArticles posts={allPosts.slice(0, 3)} />
            <MainNews posts={allPosts.slice(0, 3)} />
            <TagsSection />
            <Newsletter />
            <FeaturedCard posts={allPosts.slice(0, 1)} />
            <WeekNews posts={allPosts.slice(0, 5)} />
            <ArticlesGrid posts={allPosts.slice(0, 4)} />
            <SpecialsSection posts={allPosts.slice(0, 5)} />
            <CollectionSection posts={allPosts.slice(0, 4)} />
        </>
    );
}