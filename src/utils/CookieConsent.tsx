'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CookiePreferences = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
};

declare global {
    interface Window {
        clarity: (...args: any[]) => void;
    }
}

export default function AdvancedCookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const savedConsent = localStorage.getItem('cookie-consent');
        if (!savedConsent) {
            setIsVisible(true);
        } else {
            const prefs = JSON.parse(savedConsent);
            setPreferences(prefs);
            initializeCookies(prefs);
        }
    }, []);

    const initializeCookies = (prefs: CookiePreferences) => {
        if (!prefs.analytics) {
            clearClarityCookies();
        }

        if (prefs.analytics) {
            initializeAnalytics();
        }

        if (prefs.marketing) {
            initializeMarketing();
        }

    };

    const initializeAnalytics = () => {
        if (typeof window.clarity === 'function') {
            window.clarity('identify', 'analytics-enabled');
            window.clarity('set', 'cookie_consent', 'analytics_accepted');
            console.log('Microsoft Clarity analytics enabled');
        } else {
            console.log('Clarity not loaded yet, but will track once loaded');
        }
    };

    const initializeMarketing = () => {
        if (typeof window.clarity === 'function') {
            window.clarity('set', 'marketing_consent', 'accepted');
        }
    };



    const clearClarityCookies = () => {
        const clarityStorageKeys = Object.keys(localStorage).filter(key =>
            key.includes('clarity') || key.includes('_cl')
        );

        clarityStorageKeys.forEach(key => {
            localStorage.removeItem(key);
        });
    };

    const savePreferences = () => {
        localStorage.setItem('cookie-consent', JSON.stringify(preferences));
        setIsVisible(false);
        setShowSettings(false);
        initializeCookies(preferences);
    };

    const acceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
            preferences: true,
        };
        setPreferences(allAccepted);
        localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
        setIsVisible(false);
        initializeCookies(allAccepted);
    };

    const rejectAll = () => {
        const allRejected = {
            necessary: true,
            analytics: false,
            marketing: false,
            preferences: false,
        };
        setPreferences(allRejected);
        localStorage.setItem('cookie-consent', JSON.stringify(allRejected));
        setIsVisible(false);
        initializeCookies(allRejected);
        console.log('Non-essential cookies rejected');
    };

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === 'necessary') return;
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/20"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                    >
                        {!showSettings ? (
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark font-grotesk mb-3">
                                    Cookie Consent
                                </h3>
                                <p className="text-gray-600 mb-4 font-grotesk">
                                    We use cookies to enhance your experience and analyze site traffic using Microsoft Clarity.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={rejectAll}
                                        className="flex-1 px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-grotesk"
                                    >
                                        Reject Analytics
                                    </button>
                                    <button
                                        onClick={() => setShowSettings(true)}
                                        className="flex-1 px-6 py-3 text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors font-grotesk"
                                    >
                                        Customize
                                    </button>
                                    <button
                                        onClick={acceptAll}
                                        className="flex-1 px-6 py-3 text-sm font-medium text-white bg-dark hover:bg-gray-800 rounded-lg transition-colors font-grotesk"
                                    >
                                        Accept All
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-6 overflow-y-auto">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-dark font-grotesk">
                                        Cookie Settings
                                    </h3>
                                    <button
                                        onClick={() => setShowSettings(false)}
                                        className="text-gray-500 hover:text-gray-700 p-1"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="space-y-4 mb-6">
                                    {/* Necessary Cookies */}
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-dark font-grotesk">Necessary Cookies</h4>
                                            <p className="text-sm text-gray-600 mt-1">Required for the website to function properly</p>
                                        </div>
                                        <div className="flex items-center ml-4">
                                            <input
                                                type="checkbox"
                                                checked={preferences.necessary}
                                                disabled
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border rounded-lg">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-dark font-grotesk">Analytics Cookies</h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Helps us understand how you interact with our site
                                            </p>
                                        </div>
                                        <div className="flex items-center ml-4">
                                            <input
                                                type="checkbox"
                                                checked={preferences.analytics}
                                                onChange={() => togglePreference('analytics')}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 accent-[#0d07ed]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 border rounded-lg">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-dark font-grotesk">Marketing Cookies</h4>
                                            <p className="text-sm text-gray-600 mt-1">Used to track visitors across websites

                                            </p>
                                        </div>
                                        <div className="flex items-center ml-4">
                                            <input
                                                type="checkbox"
                                                checked={preferences.marketing}
                                                onChange={() => togglePreference('marketing')}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 accent-[#0d07ed]"
                                            />
                                        </div>
                                    </div>


                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setShowSettings(false)}
                                        className="flex-1 px-6 py-3 text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors font-grotesk"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={savePreferences}
                                        className="flex-1 px-6 py-3 text-sm font-medium text-white bg-dark hover:bg-gray-800 rounded-lg transition-colors font-grotesk"
                                    >
                                        Save Preferences
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}