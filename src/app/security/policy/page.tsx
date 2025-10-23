// components/PrivacyPolicy.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState('information-collected');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['information-collected', 'how-we-use', 'data-sharing', 'data-security', 'your-rights', 'cookies', 'changes', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const navigationItems = [
        { id: 'information-collected', label: 'Information Collected' },
        { id: 'how-we-use', label: 'How We Use Data' },
        { id: 'data-sharing', label: 'Data Sharing' },
        { id: 'data-security', label: 'Data Security' },
        { id: 'your-rights', label: 'Your Rights' },
        { id: 'cookies', label: 'Cookies' },
        { id: 'changes', label: 'Policy Changes' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sectionId = event.target.value;
        scrollToSection(sectionId);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Main Content */}
            <div className="container mx-auto my-24 px-4 pt-16 py-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms & Policies</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Navigation Sidebar */}
                    <div className="lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow-sm lg:sticky lg:top-24 p-6">
                            <div className='mb-4'>
                                <Link href="/security/terms" className="text-lg font-semibold text-gray-800  ">Terms of Service</Link>
                            </div>
                            <div className="lg:hidden mb-4">
                                <select
                                    value={activeSection}
                                    onChange={handleSelectChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-black bg-white text-gray-700"
                                >
                                    {navigationItems.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <nav className="hidden lg:flex lg:flex-col overflow-x-hidden pb-2 lg:pb-0">
                                <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-1 min-w-max lg:min-w-0">
                                    {navigationItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`text-left px-3 py-2 transition-all duration-200 w-full text-black text-sm ${activeSection === item.id
                                                ? 'font-medium border-b-2 lg:border-b-0 text-black lg:border-l-2 border-primary'
                                                : 'text-gray-600 '
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="flex-1 bg-white rounded-lg shadow-sm p-6 md:p-8">
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
                            <p className="text-gray-600">
                                Last updated: January 15, 2024
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <section id="information-collected" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                1. Information We Collect
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-600">
                                    We collect several different types of information for various purposes to provide and
                                    improve our Service to you.
                                </p>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Personal Data</h3>
                                    <p className="text-gray-600 mb-3">
                                        While using our Service, we may ask you to provide us with certain personally
                                        identifiable information that can be used to contact or identify you:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                        <li>Email address</li>
                                        <li>First name and last name</li>
                                        <li>Phone number</li>
                                        <li>Address, State, Province, ZIP/Postal code, City</li>
                                        <li>Cookies and Usage Data</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Usage Data</h3>
                                    <p className="text-gray-600">
                                        We may also collect information on how the Service is accessed and used. This
                                        Usage Data may include information such as your computer&apos;s Internet Protocol
                                        address, browser type, browser version, the pages of our Service that you visit,
                                        the time and date of your visit, and other diagnostic data.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Your Information */}
                        <section id="how-we-use" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                2. How We Use Your Information
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-600 mb-3">
                                    Tervan X uses the collected data for various purposes:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                    <li>To provide and maintain our Service</li>
                                    <li>To notify you about changes to our Service</li>
                                    <li>To allow you to participate in interactive features of our Service</li>
                                    <li>To provide customer support</li>
                                    <li>To gather analysis or valuable information so we can improve our Service</li>
                                    <li>To monitor the usage of our Service</li>
                                    <li>To detect, prevent and address technical issues</li>
                                    <li>To provide you with news, special offers and general information</li>
                                </ul>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                    <p className="text-blue-800 font-medium">
                                        We never sell your personal data to third parties. Your privacy is our priority.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Data Sharing */}
                        <section id="data-sharing" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                3. Data Sharing and Disclosure
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-600">
                                    We may share your personal information in the following situations:
                                </p>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">With Service Providers</h3>
                                    <p className="text-gray-600">
                                        We may share your personal information with Service Providers to monitor and
                                        analyze the use of our Service, to contact you.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">For Business Transfers</h3>
                                    <p className="text-gray-600">
                                        We may share or transfer your personal information in connection with, or during
                                        negotiations of, any merger, sale of company assets, financing, or acquisition
                                        of all or a portion of our business to another company.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">With Your Consent</h3>
                                    <p className="text-gray-600">
                                        We may disclose your personal information for any other purpose with your consent.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Data Security */}
                        <section id="data-security" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                4. Data Security
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    The security of your data is important to us. We implement appropriate technical and
                                    organizational security measures designed to protect your personal data.
                                </p>
                                <p className="text-gray-600">
                                    However, remember that no method of transmission over the Internet, or method of
                                    electronic storage is 100% secure. While we strive to use commercially acceptable
                                    means to protect your Personal Data, we cannot guarantee its absolute security.
                                </p>
                            </div>
                        </section>

                        {/* Your Rights */}
                        <section id="your-rights" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                5. Your Data Protection Rights
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-600">
                                    Depending on your location, you may have the following rights regarding your personal data:
                                </p>

                                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                    <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                                    <li><strong>The right to rectification</strong> – You have the right to request correction of any information you believe is inaccurate.</li>
                                    <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                                    <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data.</li>
                                    <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data to another organization.</li>
                                    <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Cookies */}
                        <section id="cookies" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                6. Cookies and Tracking Technologies
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-600">
                                    We use cookies and similar tracking technologies to track the activity on our Service
                                    and hold certain information.
                                </p>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Types of Cookies We Use</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                        <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                                        <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                                        <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                                        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Managing Cookies</h3>
                                    <p className="text-gray-600">
                                        You can instruct your browser to refuse all cookies or to indicate when a cookie
                                        is being sent. However, if you do not accept cookies, you may not be able to use
                                        some portions of our Service.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Policy Changes */}
                        <section id="changes" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                7. Changes to This Privacy Policy
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    We may update our Privacy Policy from time to time. We will notify you of any changes
                                    by posting the new Privacy Policy on this page.
                                </p>
                                <p className="text-gray-600">
                                    We will let you know via email and/or a prominent notice on our Service, prior to the
                                    change becoming effective and update the &quot;last updated&quot; date at the top of this Privacy Policy.
                                </p>
                                <p className="text-gray-600">
                                    You are advised to review this Privacy Policy periodically for any changes. Changes
                                    to this Privacy Policy are effective when they are posted on this page.
                                </p>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section id="contact" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                8. Contact Us
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-600 mb-4">
                                        If you have any questions about this Privacy Policy, please contact us:
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-gray-700">privacy@tervanx.com</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-gray-700">123 Innovation Drive, Tech City, TC 10101</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}