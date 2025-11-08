import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: false,
    apiVersion: '2024-03-14',
})

export const writeclient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: false,
    apiVersion: '2024-03-14',
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})


export interface Post {
    _id: string
    title: string
    slug: {
        current: string
    }
    publishedAt: string
    excerpt: string
    body: any[]
    likes?: number
    mainImage?: {
        asset: {
            _ref: string
            url: string
        }
        alt?: string
    }
    author: {
        name: string
        image?: string
    }
    comments?: Comment[]
}

export interface Comment {
    _id: string
    name: string
    email: string
    comment: string
    createdAt: string
    approved: boolean
    post: {
        _ref: string
    }
}