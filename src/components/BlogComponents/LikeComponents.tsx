'use client'

import { useState } from 'react'
import { writeclient } from '@/utils/sanity'

interface LikeButtonProps {
    postId: string
    initialLikes: number
    showCount?: boolean
}

export function LikeButton({ postId, initialLikes, showCount = false }: LikeButtonProps) {
    const [likes, setLikes] = useState(initialLikes)
    const [isLiked, setIsLiked] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const handleLike = async () => {
        if (isLoading || isLiked) return

        setIsLoading(true)
        try {
            // Optimistically update the UI
            setLikes(prev => prev + 1)
            setIsLiked(true)

            // Update in Sanity - FIX: use inc instead of setInc
            await writeclient
                .patch(postId)
                .setIfMissing({ likes: 0 })
                .inc({ likes: 1 }) // Changed from setInc to inc
                .commit()

        } catch (error) {
            console.error('Error liking post:', error)
            // Revert on error
            setLikes(prev => prev - 1)
            setIsLiked(false)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <button
            onClick={handleLike}
            disabled={isLoading || isLiked}
            className={`flex items-center gap-2 p-2 rounded-full transition-colors ${isLiked
                ? 'bg-red-50 text-red-600'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label={isLiked ? 'Unlike post' : 'Like post'}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill={isLiked ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path d="M14.5 1.5C12.8333 1.5 11.5 2.5 10.5 3.5C9.5 2.5 8.16667 1.5 6.5 1.5C3.5 1.5 1.5 4 1.5 6.5C1.5 11 6.5 15 10.5 18.5C14.5 15 19.5 11 19.5 6.5C19.5 4 17.5 1.5 14.5 1.5Z" />
            </svg>
            {showCount && <span className="text-sm font-medium">{likes}</span>}
        </button>
    )
}