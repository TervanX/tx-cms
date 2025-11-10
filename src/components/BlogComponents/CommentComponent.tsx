'use client';

import { useState } from 'react';
import { writeclient, Comment } from '@/utils/sanity';

interface CommentsSectionProps {
    postId: string;
    comments: Comment[];
}

export function CommentsSection({ postId, comments: initialComments }: CommentsSectionProps) {
    const [comments, setComments] = useState<Comment[]>(initialComments);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.comment.trim()) {
            alert('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);

        try {
            const optimisticComment: Comment = {
                _id: `temp-${Date.now()}`,
                _type: 'comment',
                name: formData.name,
                email: formData.email,
                comment: formData.comment,
                createdAt: new Date().toISOString(),
                post: {
                    _ref: postId,
                    _type: 'reference'
                }
            };
            setComments(prev => [optimisticComment, ...prev]);
            const sanityComment = {
                _type: 'comment',
                name: formData.name,
                email: formData.email,
                comment: formData.comment,
                post: {
                    _type: 'reference',
                    _ref: postId
                },
                approved: false
            };
            const result = await writeclient.create(sanityComment);
            const newComment: Comment = {
                _id: result._id,
                _type: 'comment',
                name: result.name,
                email: result.email,
                comment: result.comment,
                createdAt: result._createdAt,
                post: {
                    _ref: postId,
                    _type: 'reference'
                },
            };
            setComments(prev =>
                prev.map(comment =>
                    comment._id === optimisticComment._id
                        ? newComment
                        : comment
                )
            )

            setFormData({
                name: '',
                email: '',
                comment: ''
            });

        } catch (error) {
            console.error('Error submitting comment:', error);
            setComments(prev =>
                prev.filter(comment => !comment._id.startsWith('temp-'))
            );

            alert('Failed to submit comment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="comments-section mt-12">
            <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

            <form onSubmit={handleSubmit} className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d07ed]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d07ed]"
                    />
                </div>
                <textarea
                    name="comment"
                    placeholder="Your Comment"
                    value={formData.comment}
                    onChange={handleInputChange}
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
                        {comment._id.startsWith('temp-') && (
                            <p className="text-sm text-gray-500 mt-2">Submitting...</p>
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