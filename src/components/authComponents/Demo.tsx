"use client"
import { useState } from 'react';
import Image from 'next/image';
import Button from '../reusable/Button';

export default function Demo() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        if (!email || !email.includes('@')) {
            setError(true);
            return;
        }

        setError(false);
        console.log('Demo requested for:', email);
        alert('Thank you! We\'ll be in touch soon.');
    };

    const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
        if (error) setError(false);
    };

    return (
        <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white rounded-md pt-12">
            {/* Background Pattern */}
 <Image
      src="/assets/bg.8.svg"
      alt="demo"
      fill
      priority
      className="object-cover object-[40%_50%] rounded-md "
      style={{ color: 'transparent' }}
    />

            <div className="relative z-10 w-full max-w-xl px-8">
                {/* Header */}
                <div className="space-y-2 text-center mb-8">
                    <h1 className="text-3xl lg:text-4xl tracking-tight text-dark mb-6">
                        See Apollo in action
                    </h1>
                    <p className="text-base md:text-lg text-gray-600">
                        We'd love to show how Apollo can help you sell better.
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-8 py-6">
                    <div className="relative flex w-full flex-col">
                        <div className={`flex items-center rounded-lg bg-white h-12 px-3 border ${error ? 'border-red-300' : 'border-gray-300'
                            } focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all`}>
                            <input
                                placeholder="Company email"
                                className="w-full bg-transparent focus:outline-none text-base text-dark placeholder-gray-400"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        {error && (
                            <label className="mt-2 flex items-center gap-2 text-sm text-red-600">
                                <svg width="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.375 10V5H9.625V10H8.375Z" fill="#B21D1D"></path>
                                    <path d="M9 13C9.55229 13 10 12.5523 10 12C10 11.4477 9.55229 11 9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13Z" fill="#B21D1D"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17ZM9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" fill="#B21D1D"></path>
                                </svg>
                                Please enter a valid email
                            </label>
                        )}
                    </div>

                    <Button
                        type="button"
                        onClick={handleSubmit}
                        className="group rounded-lg transition-all h-12 px-5 bg-dark text-white hover:bg-gray-800 active:bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-base">Get a demo</span>
                            <span className="transition-transform group-hover:translate-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M14.4911 9.62505L9.55806 14.5581L10.4419 15.442L16.8839 9.00005L10.4419 2.55811L9.55806 3.44199L14.4911 8.37505L1 8.37505L1 9.62505L14.4911 9.62505Z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </div>
                    </Button>
                </div>

                {/* Privacy Notice */}
                <div className="mb-6">
                    <p className="text-sm text-center text-gray-500">
                        By submitting this form, you will receive information, tips, and promotions from Apollo. To learn more, see our{' '}
                        <a className="underline hover:text-gray-700" href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                            Privacy Statement
                        </a>.
                    </p>
                </div>

                {/* Reviews */}
                <div className="mt-6 flex items-center justify-center gap-2 flex-col md:flex-row">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} width="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.642 3.28712C15.4532 2.31792 17.12 2.47945 17.6459 3.77173L20.6283 11.1003L28.5457 11.5684C30.17 11.6645 30.8225 13.7115 29.5532 14.7298L23.4602 19.6181L25.4607 27.0904C25.7628 28.2186 24.9509 29.1935 23.9595 29.3201C23.713 29.3516 23.4553 29.3306 23.2009 29.2464C23.0687 29.2027 22.9375 29.1419 22.8091 29.0626L15.9993 24.8558L9.18943 29.0626C7.82031 29.9084 6.12161 28.645 6.5378 27.0904L8.53834 19.6181L2.44533 14.7298C1.17609 13.7115 1.8285 11.6645 3.45289 11.5684L11.3702 11.1003L14.3526 3.77172C14.4278 3.58711 14.5262 3.42558 14.642 3.28712Z" fill="dark"></path>
                            </svg>
                        ))}
                    </div>
                    <p className="text-sm text-gray-700">
                        4.7/5 based on 9,015 reviews
                    </p>
                </div>
            </div>
        </div>
    );
}