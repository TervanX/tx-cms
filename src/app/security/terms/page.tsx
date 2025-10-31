'use client';
import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function TermsOfService() {
    const [activeSection, setActiveSection] = useState('agreement');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['agreement', 'accounts', 'modifications', 'intellectual-property', 'liability', 'termination', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                    break;
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

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sectionId = event.target.value;
        scrollToSection(sectionId);
    };

    const navigationItems = [
        { id: 'agreement', label: 'Agreement to Terms' },
        { id: 'accounts', label: 'User Accounts' },
        { id: 'modifications', label: 'Service Modifications' },
        { id: 'intellectual-property', label: 'Intellectual Property' },
        { id: 'liability', label: 'Liability' },
        { id: 'termination', label: 'Termination' },
        { id: 'contact', label: 'Contact' },
    ];

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
                                <Link href="/security/policy" className="text-lg font-semibold text-gray-800  ">Privacy Policy</Link>
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
                                            className={`text-left px-3 py-2 transition-all duration-200 text-black w-full text-sm ${activeSection === item.id
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
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms of Service</h1>
                            <p className="text-gray-600">
                                Last updated: January 15, 2024
                            </p>
                        </div>

                        {/* Agreement to Terms */}
                        <section id="agreement" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                1. Agreement to Terms
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    By accessing and using Layer X, you accept and agree to be bound by the terms and
                                    conditions of this agreement. If you do not agree with these terms, you must not
                                    access or use our services.
                                </p>
                                <p className="text-gray-600">
                                    These Terms of Service apply to all visitors, users, and others who wish to access
                                    or use our Service.
                                </p>
                            </div>
                        </section>

                        {/* User Accounts */}
                        <section id="accounts" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                2. User Accounts
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-600">
                                    When you create an account with us, you must provide accurate and complete information.
                                    You are responsible for maintaining the security of your account and password.
                                </p>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Your Responsibilities</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                        <li>Maintaining the confidentiality of your account credentials</li>
                                        <li>All activities that occur under your account</li>
                                        <li>Notifying us immediately of any unauthorized access</li>
                                        <li>Ensuring you have the legal capacity to enter into this agreement</li>
                                        <li>Keeping your contact information up to date</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                                    <p className="text-yellow-800 font-medium">
                                        You are solely responsible for safeguarding your password and for any activities
                                        or actions under your password.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Service Modifications */}
                        <section id="modifications" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                3. Service Modifications
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    Layer X reserves the right to modify, suspend, or discontinue any part of our
                                    services at any time. We will provide reasonable notice for any significant changes
                                    that may affect your use of our platform.
                                </p>
                                <p className="text-gray-600">
                                    We may add or remove functionalities or features, and we may suspend or stop a Service altogether.
                                </p>
                            </div>
                        </section>

                        {/* Intellectual Property */}
                        <section id="intellectual-property" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                4. Intellectual Property
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-600">
                                    The Service and its original content, features, and functionality are and will remain
                                    the exclusive property of Layer X and its licensors.
                                </p>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Rights</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                        <li>All content, features, and functionality of Layer X</li>
                                        <li>Our trademarks, service marks, and logos</li>
                                        <li>The underlying source code and software</li>
                                        <li>Documentation and related materials</li>
                                    </ul>
                                </div>
                                <p className="text-gray-600">
                                    These are protected by international copyright, trademark, patent, trade secret,
                                    and other intellectual property laws.
                                </p>
                            </div>
                        </section>

                        {/* Liability */}
                        <section id="liability" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                5. Limitation of Liability
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-600">
                                    To the maximum extent permitted by law, Layer X shall not be liable for any indirect,
                                    incidental, special, consequential, or punitive damages, including but not limited to
                                    loss of profits, data, or other intangible losses, resulting from:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                    <li>Your access to or use of our services</li>
                                    <li>Any conduct or content of any third party on our services</li>
                                    <li>Unauthorized access, use, or alteration of your transmissions</li>
                                    <li>Any other matter relating to our services</li>
                                </ul>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-3">Indemnification</h3>
                                    <p className="text-gray-600">
                                        You agree to defend, indemnify, and hold harmless Layer X from any claims,
                                        liabilities, damages, losses, and expenses arising from your use of our services
                                        or violation of these terms.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Termination */}
                        <section id="termination" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                6. Termination
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    We may terminate or suspend your account immediately, without prior notice or liability,
                                    for any reason whatsoever, including without limitation if you breach the Terms.
                                </p>
                                <p className="text-gray-600">
                                    Upon termination, your right to use the Service will cease immediately. If you wish to
                                    terminate your account, you may simply discontinue using the Service.
                                </p>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section id="contact" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                                7. Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-600 mb-4">
                                        If you have any questions about these Terms, please contact us:
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-gray-700">legal@tervanx.com</span>
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
                                <div>
                                    <p className="text-gray-600">
                                        These terms were last updated on January 15, 2024. We may update these terms from
                                        time to time, and we will notify you of any significant changes.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}