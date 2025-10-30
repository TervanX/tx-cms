"use client";
import { useEffect } from "react";
import { AlertCircle, X } from "lucide-react";

interface ErrorToastProps {
    message: string;
    onClose: () => void;
    autoClose?: boolean;
    duration?: number;
}

export default function ErrorToast({
    message,
    onClose,
    autoClose = true,
    duration = 5000,
}: ErrorToastProps) {
    useEffect(() => {
        if (autoClose) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [autoClose, duration, onClose]);

    return (
        <div className="fixed top-4 right-4 left-4 md:left-auto md:w-96 z-50 animate-slide-in">
            <div className="bg-white rounded-lg shadow-lg border-l-4 border-red-500 p-4 flex items-start gap-3">
                <div className="flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Submission Error
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
