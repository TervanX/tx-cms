// components/TagsSection.tsx
import React from 'react';
import { client } from '@/utils/sanity';
import Link from 'next/link';

interface SanityCategory {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
}

const TagsSection: React.FC = async () => {
    const categories = await getLimitedCategories();

    if (!categories?.length) return null;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        Layer X helps you achieve your goals in 2025
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <div
                            key={category._id}
                            // href={`/category/${category.slug?.current}`}
                            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[#0d07ed] hover:text-white transition-colors duration-200"
                        >
                            {category.title}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

async function getLimitedCategories(): Promise<SanityCategory[]> {
    try {
        const query = `*[_type == "category"] | order(title asc)[0...15] {
            _id,
            title,
            slug {
                current
            }
        }`;

        const categories = await client.fetch(query);
        return categories || [];
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

export default TagsSection;