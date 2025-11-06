'use client';
import { useState, useEffect, useRef } from 'react';

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
    const hasSeenRef = useRef(false);

    useEffect(() => {
        const hasSeenModal = sessionStorage.getItem('hasSeenContactModal');
        if (hasSeenModal === 'true') {
            hasSeenRef.current = true;
            return;
        }

        let activityTimeout: NodeJS.Timeout;

        const resetTimer = () => {
            if (activityTimeout) clearTimeout(activityTimeout);
            activityTimeout = setTimeout(() => {
                if (!hasSeenRef.current && !isOpen) {
                    setIsOpen(true);
                    hasSeenRef.current = true;
                    sessionStorage.setItem('hasSeenContactModal', 'true');
                }
            }, 30000);
        };

        const activityEvents = [
            'mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart',
            'click', 'input', 'focus'
        ];
        resetTimer();

        activityEvents.forEach(event => {
            document.addEventListener(event, resetTimer, { passive: true });
        });

        return () => {
            if (activityTimeout) clearTimeout(activityTimeout);
            activityEvents.forEach(event => {
                document.removeEventListener(event, resetTimer);
            });
            if (idleTimerRef.current) {
                clearTimeout(idleTimerRef.current);
            }
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage('Please enter your company email');
            return;
        }

        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            const submissionData = {
                workEmail: email,
                fullName: "Anonymous User",
                companyName: "Not Provided",
                companyWebsite: "https://example.com",
                phoneNumber: "+1234567890",
                businessType: "Not Provided",
                monthlyTransactionVolume: "Not Provided",
                helpTopic: "Modal Contact - Personalized Walkthrough",
                message: "User interested in booking a personalized walkthrough from modal popup",
                preferredContactMethod: "email"
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                const responseData = await response.json();
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsOpen(false);
                    setIsSubmitted(false);
                }, 3000);
            } else {
                const errorData = await response.json();
                console.error("Server error:", errorData);

                const apiErrorMessage = errorData?.message || errorData?.title || "Failed to submit form";
                setErrorMessage(`${apiErrorMessage}. Please try again.`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMessage(
                "Unable to submit the form at this time. Please check your internet connection and try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsSubmitted(false);
        setErrorMessage(null);
        sessionStorage.setItem('hasSeenContactModal', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div
                className="modal-box w-full bg-white rounded-2xl shadow-2xl max-w-[560px] overflow-visible relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute lg:-right-7 -right-4 lg:-top-3 -top-5 z-10"
                    disabled={isSubmitting}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 10.8215L18.0774 4.74408L19.2559 5.92259L13.1785 12L19.2559 18.0774L18.0774 19.2559L12 13.1785L5.92259 19.2559L4.74408 18.0774L10.8215 12L4.74408 5.92259L5.92259 4.74408L12 10.8215Z"
                            fill="#f1f1f1"
                        />
                    </svg>
                </button>

                <div className="max-h-[calc(100vh-5em)] overflow-hidden rounded-lg p-6">
                    {isSubmitted ? (
                        // Success Message
                        <div className="flex flex-col items-center justify-center text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-grotesk text-2xl font-medium text-dark mb-2">
                                Thank you for your interest!
                            </h3>
                            <p className="font-grotesk text-gray-600">
                                Our team will contact you within 24 hours to schedule your personalized walkthrough.
                            </p>
                        </div>
                    ) : (
                        // Original Form Content
                        <div className="flex w-full flex-col gap-2 rounded-xl max-w-full p-4">
                            {/* Header */}
                            <div className="space-y-2 text-center lg:text-left">
                                <h2 className="font-grotesk text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] font-medium leading-none tracking-[-0.28px] lg:tracking-[-0.32px] xl:tracking-[-0.8px] 2xl:tracking-[-0.96px] text-dark mb-4 lg:mb-6">
                                    Not sure where to start? Let&apos;s talk.
                                </h2>
                                <p className="font-grotesk text-[16px] lg:text-[18px] leading-[130%] text-gray-600">
                                    Book a personalized walkthrough to see how LayerX can help you build powerful financial infrastructure.
                                </p>
                            </div>

                            {/* Error Message */}
                            {errorMessage && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <p className="text-red-700 text-sm font-grotesk">{errorMessage}</p>
                                </div>
                            )}

                            {/* Form */}
                            <div className="space-y-6 py-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="relative flex w-full flex-col">
                                        <div className="flex items-center rounded-lg bg-white h-[48px] px-4 border border-gray-200 focus-within:border-dark hover:border-gray-300 hover:focus-within:border-dark transition-colors">
                                            <input
                                                placeholder="Company email"
                                                className="w-full bg-transparent focus:outline-none text-[16px] leading-[130%] font-grotesk text-dark placeholder-gray-400 leading-none"
                                                required
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    setErrorMessage(null);
                                                }}
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group rounded-lg transition-all h-12 px-5 bg-dark text-white disabled:bg-gray-300 hover:bg-gray-800 active:bg-dark focus:bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark w-full"
                                    >
                                        <div className="flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    <p className="text-[16px] leading-[130%] font-grotesk text-inherit">
                                                        Submitting...
                                                    </p>
                                                </div>
                                            ) : (
                                                <>
                                                    <p className="text-[16px] leading-[130%] font-grotesk text-inherit">
                                                        Book a free demo
                                                    </p>
                                                    <span className="right-icon transition-transform group-hover:translate-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path
                                                                d="M14.4911 9.62505L9.55806 14.5581L10.4419 15.442L16.8839 9.00005L10.4419 2.55811L9.55806 3.44199L14.4911 8.37505L1 8.37505L1 9.62505L14.4911 9.62505Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </form>
                            </div>

                            {/* Privacy Notice */}
                            <div>
                                <p className="font-grotesk text-[14px] lg:text-[16px] leading-[130%] tracking-normal text-center text-gray-500 lg:text-left">
                                    By submitting this form, you will receive information, tips, and promotions from LayerX. To learn more, see our{' '}
                                    <a className="underline text-dark hover:text-gray-700 transition-colors" target="_blank" href="/security/policy">
                                        Privacy Statement
                                    </a>.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}