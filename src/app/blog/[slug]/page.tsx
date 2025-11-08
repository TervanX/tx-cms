import { client } from '@/utils/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CommentsSection } from '@/components/BlogComponents/CommentComponent'
import { LikeButton } from '@/components/BlogComponents/LikeComponents'
import { Linkedin, Facebook, Twitter, MessageCircle } from 'lucide-react';

// Define your custom Portable Text components
const portableTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="my-6">
                    <Image
                        src={value.asset?.url}
                        alt={value.alt || 'Blog post image'}
                        width={800}
                        height={400}
                        className="rounded-lg w-full h-auto"
                    />
                    {value.alt && (
                        <p className="text-center text-sm text-gray-600 mt-2">{value.alt}</p>
                    )}
                </div>
            );
        },
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl font-bold mt-5 mb-3">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>,
        normal: ({ children }: any) => <p className="my-4 leading-relaxed">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-[#0d07ed] pl-4 my-6 italic text-gray-700">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
        number: ({ children }: any) => <li className="ml-4">{children}</li>,
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
        em: ({ children }: any) => <em className="italic">{children}</em>,
        link: ({ value, children }: any) => {
            const href = value?.href || '';
            const isInternal = href.startsWith('/');

            if (isInternal) {
                return (
                    <a href={href} className="text-[#0d07ed] hover:underline">
                        {children}
                    </a>
                );
            }

            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0d07ed] hover:underline"
                >
                    {children}
                </a>
            );
        },
    },
};

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    body,
    excerpt,
    readingTime,
    likes,
    categories[]->{
      title,
      slug
    },
    tags[]->{
      title,
      slug
    },
    mainImage{
      asset->{
        _id,
        url,
        metadata{
          dimensions{
            width,
            height,
            aspectRatio
          }
        }
      },
      alt
    },
    "author": author->{
      name,
      slug,
      image
    },
    "comments": *[_type == "comment" && post._ref == ^._id ] | order(createdAt desc) {
      _id,
      name,
      email,
      comment,
      createdAt,
    }
  }`

    return await client.fetch(query, { slug })
}

async function getRelatedPosts(currentSlug: string, categories: any[] = [], tags: any[] = [], limit: number = 3) {
    const categorySlugs = categories?.map(cat => cat.slug.current) || []
    const tagSlugs = tags?.map(tag => tag.slug.current) || []

    const conditions = [`_type == "post"`, `slug.current != $currentSlug`]

    if (categorySlugs.length > 0 && tagSlugs.length > 0) {
        conditions.push(`(count(categories[]->slug.current[@ in $categorySlugs]) > 0 || count(tags[]->slug.current[@ in $tagSlugs]) > 0)`)
    } else if (categorySlugs.length > 0) {
        conditions.push(`count(categories[]->slug.current[@ in $categorySlugs]) > 0`)
    } else if (tagSlugs.length > 0) {
        conditions.push(`count(tags[]->slug.current[@ in $tagSlugs]) > 0`)
    } else {
        conditions.push(`publishedAt < now()`)
    }

    const query = `*[${conditions.join(' && ')}] | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        readingTime,
        likes,
        mainImage{
            asset->{
                url,
                metadata{
                    dimensions{
                        width,
                        height
                    }
                }
            },
            alt
        },
        "author": author->{
            name
        }
    }`

    const params: any = {
        currentSlug,
        limit
    }

    if (categorySlugs.length > 0) {
        params.categorySlugs = categorySlugs
    }
    if (tagSlugs.length > 0) {
        params.tagSlugs = tagSlugs
    }

    return await client.fetch(query, params)
}

async function getSidebarPosts(limit: number = 3) {
    const query = `*[_type == "post"] | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        readingTime,
        likes,
        mainImage{
            asset->{
                url,
                metadata{
                    dimensions{
                        width,
                        height
                    }
                }
            },
            alt
        }
    }`

    return await client.fetch(query, { limit })
}

// Generate static params for SSG
export async function generateStaticParams() {
    const query = `*[_type == "post"] { slug }`
    const posts = await client.fetch(query)

    return posts.map((post: any) => ({
        slug: post.slug.current,
    }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        notFound()
    }

    let relatedPosts = []
    let sidebarPosts = []

    try {
        relatedPosts = await getRelatedPosts(slug, post.categories, post.tags, 4)
    } catch (error) {
        console.error('Error fetching related posts:', error)
        relatedPosts = await getSidebarPosts(4)
    }

    try {
        sidebarPosts = await getSidebarPosts(3)
    } catch (error) {
        console.error('Error fetching sidebar posts:', error)
        sidebarPosts = []
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })
    }

    return (
        <section id="maincontent" className='py-16'>
            <div className="single__header">
                <header className="single-header bg-white">
                    <div className="container lg:w-[80%] w-full mx-auto px-4">
                        <div className="single-header__top flex justify-between items-start mb-6">
                            <div className="single-header__title-holder flex-1">
                                {/* Breadcrumb */}
                                <nav className="breadcrumb mb-4">
                                    <ol className="flex items-center space-x-2 text-sm text-gray-600">
                                        <li className="flex items-center">
                                            <a href="/blog" className="hover:text-[#0d07ed] transition-colors">
                                                Blog
                                            </a>
                                            <svg className="w-4 h-4 mx-2" viewBox="0 -6 2 13" fill="none">
                                                <path d="M0.119141 0.119019C0.278213 -0.0400092 0.536202 -0.0399475 0.695312 0.119019L3.28906 2.71179C3.44776 2.87084 3.4478 3.12894 3.28906 3.28796L0.695312 5.88074C0.536225 6.03968 0.278219 6.0397 0.119141 5.88074C-0.0396632 5.72165 -0.039751 5.4636 0.119141 5.30457L2.4248 2.99988L0.119141 0.69519C-0.039751 0.536155 -0.0396632 0.278109 0.119141 0.119019Z" fill="currentColor" />
                                            </svg>
                                        </li>
                                        <li className="text-[#0d07ed] font-medium">
                                            {post.title}
                                        </li>
                                    </ol>
                                </nav>

                                <h1 className="text-4xl lg:text-5xl font-bold text-[#0d07ed] mb-4">
                                    {post.title}
                                </h1>
                            </div>

                            {/* Like and Save buttons */}
                            <div className="flex items-center gap-2">
                                <LikeButton postId={post._id} initialLikes={post.likes || 0} />
                                <button className="single-header__save-icon p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Save post">
                                    <svg width="20" height="23" viewBox="0 0 20 23" fill="none">
                                        <path d="M17.8229 22.5553C17.6072 22.5553 17.3914 22.5553 17.1757 22.4474L9.94817 18.4715L2.72063 22.3396C2.28914 22.5553 1.74977 22.5553 1.31828 22.2317C0.886781 21.9081 0.671034 21.4766 0.671034 20.9372V4.43253C0.56316 2.16718 2.39701 0.333328 4.55448 0.333328H15.3418C17.6072 0.333328 19.3332 2.16718 19.3332 4.43253V21.0451C19.3332 21.5844 19.1174 22.0159 18.6859 22.3396C18.3623 22.4474 18.1466 22.5553 17.8229 22.5553Z" fill="#716D73" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Excerpt */}
                        {post.excerpt && (
                            <div className="single-excerpt mb-6">
                                <div className="text-lg text-gray-700 leading-relaxed">
                                    {post.excerpt}
                                </div>
                            </div>
                        )}

                        {/* Mobile author - FIXED with optional chaining */}
                        <div className="mobile-author md:hidden mb-4">
                            <span className="text-sm text-gray-600">
                                By: {post.author ? (
                                    <a href={`/authors/${post.author.slug.current}`} className="text-[#0d07ed] hover:underline">
                                        {post.author.name}
                                    </a>
                                ) : (
                                    'Unknown Author'
                                )}
                            </span>
                        </div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="tags-holder mb-6">
                                {post.tags.map((tag: any, index: number) => (
                                    <a
                                        key={tag.slug.current}
                                        href={`/tag/${tag.slug.current}`}
                                        className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-50 hover:text-[#0d07ed] transition-colors"
                                    >
                                        {tag.title}
                                    </a>
                                ))}
                            </div>
                        )}

                        {/* Header bottom with metadata */}
                        <div className="single-header__bottom border-t border-gray-200 pt-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="single-header__meta flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                    {/* Reading time */}
                                    {post.readingTime && (
                                        <span className="flex items-center gap-1">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M7 12.9999C10.3137 12.9999 13 10.3136 13 6.99994C13 3.68623 10.3137 0.999939 7 0.999939C3.68629 0.999939 1 3.68623 1 6.99994C1 10.3136 3.68629 12.9999 7 12.9999Z" stroke="#0d07ed" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7 3.39996V6.99996L9.4 8.19996" stroke="#0d07ed" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {post.readingTime} min read
                                        </span>
                                    )}

                                    {/* Likes count */}
                                    <span className="flex items-center gap-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.2" />
                                            <path d="M8 5.5V10.5" stroke="currentColor" strokeWidth="1.2" />
                                            <path d="M5.5 8H10.5" stroke="currentColor" strokeWidth="1.2" />
                                        </svg>
                                        {post.likes || 0} likes
                                    </span>

                                    {/* Comments count */}
                                    <span className="flex items-center gap-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M3 2H13C13.5523 2 14 2.44772 14 3V9C14 9.55228 13.5523 10 13 10H7L4 13V10H3C2.44772 10 2 9.55228 2 9V3C2 2.44772 2.44772 2 3 2Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                                        </svg>
                                        {post.comments?.length || 0} comments
                                    </span>

                                    {/* Author - FIXED with optional chaining */}
                                    <span className="flex items-center gap-1">
                                        By:
                                        {post.author ? (
                                            <a href={`/authors/${post.author.slug.current}`} className="text-[#0d07ed] hover:underline">
                                                {post.author.name}
                                            </a>
                                        ) : (
                                            'Unknown Author'
                                        )}
                                    </span>

                                    {/* Dates */}
                                    <span>
                                        Published {formatDate(post.publishedAt)}
                                    </span>
                                </div>

                                <ul className="share-menu flex items-center gap-2">
                                    {[
                                        { platform: 'linkedin', icon: Linkedin },
                                        { platform: 'facebook', icon: Facebook },
                                        { platform: 'twitter', icon: Twitter },
                                        { platform: 'whatsapp', icon: MessageCircle }
                                    ].map(({ platform, icon: Icon }) => (
                                        <li key={platform}>
                                            <button
                                                aria-label={`Share on ${platform}`}
                                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                            >
                                                <Icon size={20} color="#0d07ed" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            {/* Featured Image */}
            {post.mainImage && (
                <div className="container lg:w-[80%] w-full mx-auto px-4 mt-8">
                    <figure className="single-feat-img">
                        <Image
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt || post.title}
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </figure>
                </div>
            )}

            {/* Content */}
            <div className="container lg:w-[80%] w-full mx-auto px-4 py-8">
                <section className="single-content-wrapper grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main content */}
                    <article className="single-content-wrapper__content lg:col-span-3">
                        <div className="single-content">
                            {/* Content area - FIXED with PortableText components */}
                            <div className="content-area prose prose-lg max-w-none">
                                <PortableText
                                    value={post.body}
                                    components={portableTextComponents}
                                />
                            </div>

                            {/* Post actions */}
                            <div className="post-actions flex items-center justify-between py-6 mt-8 border-t border-b border-gray-200">
                                <LikeButton postId={post._id} initialLikes={post.likes || 0} showCount={true} />

                                {/* Share buttons */}
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-gray-600">Share:</span>
                                    <div className="flex gap-2">
                                        {[
                                            { platform: 'twitter', icon: Twitter },
                                            { platform: 'linkedin', icon: Linkedin },
                                            { platform: 'facebook', icon: Facebook }
                                        ].map(({ platform, icon: Icon }) => (
                                            <button
                                                key={platform}
                                                className="p-2 bg-[#0d07ed] text-white rounded-full hover:bg-blue-700 transition-colors"
                                                aria-label={`Share on ${platform}`}
                                            >
                                                <Icon size={16} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <CommentsSection
                                postId={post._id}
                                comments={post.comments || []}
                            />

                            {/* Scroll to top */}
                            <a href="#" className="scroll-top fixed bottom-8 right-8 bg-[#0d07ed] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors" aria-label="Button to return to the top of the page">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5.6001 11.832L6.7281 12.96L11.2001 8.49601V18.232H12.8001V8.49601L17.2721 12.96L18.4001 11.832L12.5681 6.00001C12.4937 5.92502 12.4052 5.86551 12.3078 5.82489C12.2103 5.78428 12.1057 5.76337 12.0001 5.76337C11.8945 5.76337 11.7899 5.78428 11.6924 5.82489C11.5949 5.86551 11.5065 5.92502 11.4321 6.00001L5.6001 11.832Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="single-content-wrapper__sidebar lg:col-span-1">
                        <div className="single-sidebar space-y-8">
                            {/* Newsletter card */}
                            <div className="card-newsletter bg-[#0d07ed] text-white p-6 rounded-lg">
                                <div className="card-newsletter__title mb-4">
                                    <h3 className="text-xl font-bold">
                                        Take control of your finances: subscribe to our newsletter for exclusive content
                                    </h3>
                                </div>
                                <div className="card-newsletter__form">
                                    <form className="space-y-4">
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                            required
                                        />
                                        <p className="text-sm opacity-90">
                                            I declare that I know the Privacy Policy and authorize the use of my information.
                                        </p>
                                        <button
                                            type="submit"
                                            className="w-full bg-white text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                                        >
                                            Send
                                            <svg width="19" height="10" viewBox="0 0 19 10" fill="none">
                                                <path d="M0.799805 4.80078H16.7998" stroke="currentColor" strokeWidth="0.96" />
                                                <path d="M12.8798 0.400391L17.5998 4.72039L12.7998 9.12039" stroke="currentColor" strokeWidth="0.96" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Read more section */}
                            <div className="single-sidebar__read-more">
                                <div className="section-header mb-4">
                                    <h4 className="text-lg font-bold text-gray-900">Read also</h4>
                                </div>
                                <div className="space-y-4">
                                    {sidebarPosts.map((sidebarPost: any) => (
                                        <article key={sidebarPost._id} className="card-article-horizontal bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                            <a href={`/blog/${sidebarPost.slug.current}`} className="flex">
                                                <div className="card-article-horizontal__holder flex flex-col sm:flex-row">
                                                    {sidebarPost.mainImage && (
                                                        <div className="card-article-horizontal__thumb sm:w-1/3">
                                                            <Image
                                                                src={sidebarPost.mainImage.asset.url}
                                                                alt={sidebarPost.mainImage.alt || sidebarPost.title}
                                                                width={200}
                                                                height={120}
                                                                className="w-full h-32 sm:h-24 object-cover"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className="card-article-horizontal__infos p-4 sm:w-2/3">
                                                        <div className="card-article-horizontal__head mb-2">
                                                            <h5 className="text-sm font-semibold text-gray-900 line-clamp-2">
                                                                {sidebarPost.title}
                                                            </h5>
                                                        </div>
                                                        <div className="card-article-horizontal__meta flex items-center justify-between text-xs text-gray-600">
                                                            <span>{formatDate(sidebarPost.publishedAt)}</span>
                                                            <span className="text-[#0d07ed] flex items-center gap-1">
                                                                Read more
                                                                <svg width="16" height="10" viewBox="0 0 19 10" fill="none">
                                                                    <path d="M0.799805 4.80078H16.7998" stroke="currentColor" strokeWidth="0.96" />
                                                                    <path d="M12.8798 0.400391L17.5998 4.72039L12.7998 9.12039" stroke="currentColor" strokeWidth="0.96" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </article>
                                    ))}
                                </div>
                            </div>

                            {/* Tags section */}
                            {post.tags && post.tags.length > 0 && (
                                <div>
                                    <div className="section-header mb-4">
                                        <h4 className="text-lg font-bold text-gray-900">Tags</h4>
                                    </div>
                                    <div className="tags-holder flex flex-wrap gap-2">
                                        {post.tags.map((tag: any) => (
                                            <a
                                                key={tag.slug.current}
                                                href={`/tag/${tag.slug.current}`}
                                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-50 hover:text-[#0d07ed] transition-colors"
                                            >
                                                {tag.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </section>
            </div>

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
                <div className="bg-gray-50 py-12">
                    <div className="container max-w-6xl mx-auto px-4">
                        <div className="single-related">
                            <div className="section-header mb-8">
                                <h2 className="text-2xl font-bold text-gray-900">Related</h2>
                            </div>
                            <div className="single-related__grid">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {relatedPosts.map((relatedPost: any) => (
                                        <article key={relatedPost._id} className="card-article-vertical bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            <div className="card-article-vertical__holder">
                                                {relatedPost.mainImage && (
                                                    <div className="card-article-vertical__thumb">
                                                        <a href={`/blog/${relatedPost.slug.current}`}>
                                                            <Image
                                                                src={relatedPost.mainImage.asset.url}
                                                                alt={relatedPost.mainImage.alt || relatedPost.title}
                                                                width={300}
                                                                height={200}
                                                                className="w-full h-48 object-cover"
                                                            />
                                                        </a>
                                                    </div>
                                                )}
                                                <div className="p-6">
                                                    <a href={`/blog/${relatedPost.slug.current}`}>
                                                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#0d07ed] transition-colors">
                                                            {relatedPost.title}
                                                        </h3>
                                                        {relatedPost.excerpt && (
                                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                                {relatedPost.excerpt}
                                                            </p>
                                                        )}
                                                        <div className="card-article-vertical__bottom">
                                                            <div className="card-article-vertical__meta flex items-center justify-between text-sm text-gray-500">
                                                                <span>{formatDate(relatedPost.publishedAt)}</span>
                                                                <span className="text-[#0d07ed] flex items-center gap-1">
                                                                    Read more
                                                                    <svg width="16" height="10" viewBox="0 0 19 10" fill="none">
                                                                        <path d="M0.799805 4.80078H16.7998" stroke="currentColor" strokeWidth="0.96" />
                                                                        <path d="M12.8798 0.400391L17.5998 4.72039L12.7998 9.12039" stroke="currentColor" strokeWidth="0.96" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {post.tags && post.tags.length > 0 && (
                                                        <div className="tags-holder-container mt-4 pt-4 border-t border-gray-100">
                                                            <div className="tags-holder flex flex-wrap gap-1">
                                                                {post.tags.slice(0, 2).map((tag: any) => (
                                                                    <a
                                                                        key={tag.slug.current}
                                                                        href={`/tag/${tag.slug.current}`}
                                                                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-blue-50 hover:text-[#0d07ed] transition-colors"
                                                                    >
                                                                        {tag.title}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}