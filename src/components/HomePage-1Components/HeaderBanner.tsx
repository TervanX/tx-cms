"use client"
import { X, Info } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
export default function StartupBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;
    return (
        <div className="relative w-full bg-primary px-4 py-3">
            <div className="flex items-center justify-center w-full text-center gap-3">
                <div className="flex items-center justify-center w-full text-center gap-2 text-white">
                    <Info className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm font-medium"> <Link href="/startups">
                        Download the
                        Startup Launch Bundle </Link>: Everything you need to build from zero and scale.
                    </p>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="ml-auto flex-shrink-0 text-white hover:text-gray-200 transition-colors"
                    aria-label="Close banner"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}