'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NotFound() {
    const router = useRouter();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div
                className="absolute inset-0 transition-transform duration-100 ease-out"
                style={{
                    background: `
                        radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 80%),
                        radial-gradient(400px at ${mousePosition.x * 0.8}px ${mousePosition.y * 0.8}px, rgba(120, 119, 198, 0.1), transparent 60%),
                        radial-gradient(300px at ${mousePosition.x * 1.2}px ${mousePosition.y * 1.2}px, rgba(255, 255, 255, 0.8), transparent 50%)
                    `
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full text-center relative z-10"
            >
                {/* 404 Number with animation */}
                <motion.div
                    className="mb-8 relative"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                >
                    <div className="text-9xl font-grotesk font-bold text-dark/10 tracking-tighter">
                        404
                    </div>
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="text-9xl font-grotesk font-bold bg-gradient-to-r from-dark to-gray-700 bg-clip-text text-transparent tracking-tighter">
                            404
                        </div>
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-6">
                    <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h1 className="text-3xl font-grotesk font-semibold text-dark tracking-tight">
                            Oops! Page not found
                        </h1>
                        <p className="text-lg text-gray-600 font-grotesk leading-relaxed">
                            The page you're looking for seems to have wandered off.
                            It might have been moved, deleted, or you might have
                            entered an incorrect URL.
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.button
                            onClick={() => router.back()}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 sm:flex-none px-6 py-3 border-2 border-dark text-dark rounded-xl hover:bg-dark hover:text-white transition-all duration-200 font-grotesk font-medium text-center shadow-sm hover:shadow-md"
                        >
                            ← Go Back
                        </motion.button>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/"
                                className="flex-1 sm:flex-none inline-block px-6 py-3 bg-dark text-white rounded-xl hover:bg-gray-800 transition-all duration-200 font-grotesk font-medium text-center shadow-sm hover:shadow-md"
                            >
                                🏠 Return Home
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Additional Help */}
                    <motion.div
                        className="pt-6 border-t border-gray-200/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <p className="text-sm text-gray-500 font-grotesk">
                            Still lost?{' '}
                            <Link
                                href="/contact/contact"
                                className="text-dark hover:text-gray-700 underline transition-colors font-medium"
                            >
                                Contact our support team
                            </Link>
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-60"
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-purple-300 rounded-full opacity-40"
                animate={{
                    y: [0, 15, 0],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />
        </div>
    );
}
