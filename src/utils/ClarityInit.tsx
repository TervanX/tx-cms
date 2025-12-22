'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export default function ClarityInit() {
    useEffect(() => {
        const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
        const consent = localStorage.getItem('cookie-consent');

        if (consent) {
            const preferences = JSON.parse(consent);
            if (!preferences.analytics) {
            }
        }
        if (projectId) {
            Clarity.init(projectId);
            if (consent) {
                const preferences = JSON.parse(consent);
                if (preferences.analytics) {
                    setTimeout(() => {
                        if (typeof window.clarity === 'function') {
                            window.clarity('set', 'cookie_consent', 'analytics_accepted');
                            window.clarity('identify', 'user-consent-given');
                        }
                    }, 1000);
                }
            }
        } else {
        }
    }, []);

    return null;
}