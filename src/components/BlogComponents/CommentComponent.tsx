// components/BlogComponents/CommentComponent.tsx
'use client';

import { useState } from 'react';

interface Comment {
    _id: string;
    name: string;
    email: string;
    comment: string;
    createdAt: string;
    approved: boolean;
    post: {
        _id: string;
        title: string;
    };
}

interface CommentsSectionProps {
    postId: string;
    comments: Comment[];
}

export function CommentsSection({ postId, comments: initialComments }: CommentsSectionProps) {
    const [comments, setComments] = useState<Comment[]>(initialComments);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);

        try {
            // Create optimistic comment with all required fields
            const optimisticComment: Comment = {
                _id: `temp-${Date.now()}`,
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                comment: formData.get('comment') as string,
                createdAt: new Date().toISOString(),
                approved: false, // Comments typically need approval
                post: {
                    _id: postId,
                    title: '' // You can leave this empty or fetch it
                }
            };

            // Optimistically add to UI
            setComments(prev => [optimisticComment, ...prev]);

            // Send to API
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    postId,
                    name: formData.get('name'),
                    email: formData.get('email'),
                    comment: formData.get('comment'),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }

            const newComment = await response.json();

            // Replace optimistic comment with real one
            setComments(prev =>
                prev.map(comment =>
                    comment._id === optimisticComment._id
                        ? { ...newComment, approved: true }
                        : comment
                )
            );

        } catch (error) {
            console.error('Error submitting comment:', error);
            // Remove optimistic comment on error
            setComments(prev =>
                prev.filter(comment => !comment._id.startsWith('temp-'))
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="comments-section mt-12">
            <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

            {/* Comment form */}
            <form action={handleSubmit} className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d07ed]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d07ed]"
                    />
                </div>
                <textarea
                    name="comment"
                    placeholder="Your Comment"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d07ed] mb-4"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0d07ed] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                </button>
            </form>

            {/* Comments list */}
            <div className="space-y-6">
                {comments.map((comment) => (
                    <div key={comment._id} className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                            <span className="text-sm text-gray-500">
                                {new Date(comment.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="text-gray-700">{comment.comment}</p>
                        {!comment.approved && (
                            <p className="text-sm text-yellow-600 mt-2">
                                (Waiting for approval)
                            </p>
                        )}
                    </div>
                ))}

                {comments.length === 0 && (
                    <p className="text-gray-500 text-center py-8">
                        No comments yet. Be the first to comment!
                    </p>
                )}
            </div>
        </div>
    );
}