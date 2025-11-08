'use client';

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribing email:', email);
    };

    return (
        <section className="py-16 ">
            <div className="container mx-auto px-4">
                <div className="bg-gray-50 p-8 max-w-4xl mx-auto border-t-4 border-[#0d07ed] grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className=" mb-8 ">
                        <h2 className="text-2xl lg:text-4xl font-bold text-[#0d07ed]">
                            Gain control over your finances: subscribe to our newsletter to receive exclusive content
                        </h2>
                    </div>

                    <div >
                        <form onSubmit={handleSubmit} className="f">
                            <div className="flex-1 w flex-col w-full gap-8 space-y-4 justify-between h-full">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    name="email"
                                    aria-label="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border-b border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#0d07ed] focus:border-transparent"
                                />
                                <p className="text-sm text-gray-600 mt-2">
                                    I declare that I am aware{' '}
                                    <a
                                        target="_blank"
                                        href="https://nubank.com.br/contrato/politica-privacidade/"
                                        rel="noreferrer"
                                        className="text-[#0d07ed] hover:underline"
                                    >
                                        of the Privacy Policy
                                    </a>{' '}
                                    and authorize the use of my information by Nubank.
                                </p>
                                <button
                                    type="submit"
                                    aria-label="send"
                                    className="bg-[#0d07ed] text-white px-8 py-3 rounded-lg hover:bg-[#0d07ed] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    disabled={!email}
                                >
                                    <span>Send</span>
                                    <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.799805 4.80078H16.7998" stroke="currentColor" strokeWidth="0.96" strokeMiterlimit="10" />
                                        <path d="M12.8798 0.400391L17.5998 4.72039L12.7998 9.12039" stroke="currentColor" strokeWidth="0.96" strokeMiterlimit="10" />
                                    </svg>
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;