"use client"
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    console.log('Email submitted:', email);
    // Add your email submission logic here
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
    // Add Google OAuth logic here
  };

  const handleMicrosoftSignUp = () => {
    console.log('Microsoft sign up clicked');
    // Add Microsoft OAuth logic here
  };

  return (
    <div className="relative grid gap-3 mx-0 md:mx-6 lg:grid-cols-[2fr_1fr]">
      {/* Left Column - Sign Up Form */}
      <div className="z-10 flex min-h-[688px] items-center justify-center rounded-lg px-5 py-10 bg-white">
        <div className="relative h-auto overflow-hidden p-0 md:flex md:h-auto md:items-center">
          <div className="mx-auto max-w-[436px] md:mx-0">
            {/* Heading */}
            <h1 className="text-3xl lg:text-4xl tracking-tight text-center md:text-left antialiased">
              Sign up for Apollo — <br />free forever
            </h1>

            {/* Subheading */}
            <p className="text-[16px] lg:text-[18px] leading-[130%] text-gray-700 mb-6 mt-6 text-center md:text-left antialiased">
              Find, contact, and close your ideal buyers with over 210 million contacts in one, easy-to-use AI sales platform.
            </p>

            {/* Form Container */}
            <div className="lg:min-w-[436px]">
              <div className="flex w-full max-w-xl flex-col gap-6">
                {/* Terms Notice */}
                <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-2">
                  <p className="text-[12px] leading-[130%] text-gray-700 antialiased">
                    By signing up, I agree to Apollo's{' '}
                    <a className="underline" target="_blank" href="/terms" rel="noopener noreferrer">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a className="underline" target="_blank" href="/privacy-policy" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Email Input and Submit */}
                <div className="flex items-center gap-4 flex-col lg:flex-row">
                  <div className="relative flex flex-col w-full max-w-none">
                    <div className="flex items-center rounded-lg bg-white h-[48px] px-3 border border-gray-300 focus-within:border-black hover:border-gray-400 hover:focus-within:border-black transition-colors">
                      <input
                        placeholder="Enter email"
                        className="w-full bg-transparent focus:outline-none text-[16px] leading-[130%] text-gray-700 placeholder-gray-400"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="group rounded-lg transition-all h-12 px-5 bg-black text-white disabled:bg-gray-200 hover:bg-gray-700 active:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black w-full whitespace-nowrap lg:w-auto"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-[16px] leading-[130%]">Sign up for free</p>
                    </div>
                  </button>
                </div>

                {/* Divider */}
                <div className="flex w-full items-center gap-4">
                  <div className="w-full border-b border-gray-200"></div>
                  <p className="text-[16px] lg:text-[18px] leading-[130%] text-center text-gray-400 antialiased">
                    or
                  </p>
                  <div className="w-full border-b border-gray-200"></div>
                </div>

                {/* Verify Business Email Notice */}
                <div className="text-sm text-center opacity-50 text-gray-400">
                  Verify your business email with Google or Microsoft
                </div>

                {/* OAuth Buttons */}
                <div className="flex flex-col gap-4">
                  <button
                    type="button"
                    onClick={handleGoogleSignUp}
                    className="group rounded-lg transition-all h-12 px-5 bg-transparent border border-black text-black disabled:bg-transparent disabled:border-gray-400 disabled:text-gray-400 hover:bg-gray-200 hover:border-black hover:text-black active:bg-gray-300 active:border-black active:text-black focus:border-black focus:text-black grow whitespace-nowrap"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
                          <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
                          <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
                          <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
                        </svg>
                      </span>
                      <p className="text-[16px] leading-[130%]">Sign up with Google</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={handleMicrosoftSignUp}
                    className="group rounded-lg transition-all h-12 px-5 bg-transparent border border-black text-black disabled:bg-transparent disabled:border-gray-400 disabled:text-gray-400 hover:bg-gray-200 hover:border-black hover:text-black active:bg-gray-300 active:border-black active:text-black focus:border-black focus:text-black grow whitespace-nowrap"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.5 0H0v9.5h9.5V0z" fill="#F25022"/>
                          <path d="M20 0h-9.5v9.5H20V0z" fill="#7FBA00"/>
                          <path d="M9.5 10.5H0V20h9.5v-9.5z" fill="#00A4EF"/>
                          <path d="M20 10.5h-9.5V20H20v-9.5z" fill="#FFB900"/>
                        </svg>
                      </span>
                      <p className="text-[16px] leading-[130%]">Sign up with Microsoft</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="flex gap-2 mt-[34px] flex-col items-center sm:flex-row">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M14.642 3.28712C15.4532 2.31792 17.12 2.47945 17.6459 3.77173L20.6283 11.1003L28.5457 11.5684C30.17 11.6645 30.8225 13.7115 29.5532 14.7298L23.4602 19.6181L25.4607 27.0904C25.7628 28.2186 24.9509 29.1935 23.9595 29.3201C23.713 29.3516 23.4553 29.3306 23.2009 29.2464C23.0687 29.2027 22.9375 29.1419 22.8091 29.0626L15.9993 24.8558L9.18943 29.0626C7.82031 29.9084 6.12161 28.645 6.5378 27.0904L8.53834 19.6181L2.44533 14.7298C1.17609 13.7115 1.8285 11.6645 3.45289 11.5684L11.3702 11.1003L14.3526 3.77172C14.4278 3.58711 14.5262 3.42558 14.642 3.28712Z"
                      fill="black"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] leading-[130%] text-gray-700 pt-1">
                4.7/5 based on 9,015 reviews | GDPR Compliant
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Video */}
      <div className="relative min-h-[688px] overflow-hidden rounded-lg aspect-[2/3] bg-gray-200">
        <div className="relative h-full w-full">
          <video
            src="/assets/video.webm"
            className="absolute inset-0 h-full w-full rounded-xl object-cover"
            loop
            muted
            playsInline
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}