"use client"
import { useState } from "react";
import Image from "next/image";
import Button from "../reusable/Button";
export default function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    console.log('Sign up with email:', email);
  };

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
  };

  const handleMicrosoftSignUp = () => {
    console.log('Sign up with Microsoft');
  };

     return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-white md:rounded-xl lg:h-[calc(100dvh-94px)] lg:min-h-[600px]">
      {/* Background Image */}
      <div className="h-full overflow-hidden">
        <picture>
          {/* <source media="(min-width: 1920px)" srcSet={lgXlImg.src} />
          <source media="(min-width: 1440px)" srcSet={lgImg.src} />
          <source media="(min-width: 1024px)" srcSet={lgSImg.src} />
          <source media="(min-width: 768px)" srcSet={mdImg.src} /> */}
          <Image
            alt="background image"
            src="/assets/image28.webp"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="h-full w-full py-16 lg:py-20">
          <div className="flex h-full flex-col gap-8 md:w-full md:px-5 md:px-7 md:gap-10 lg:flex-row lg:items-center lg:gap-16 lg:px-9 lg:gap-20 lg:px-[73px] xl:px-[72px]">
            {/* Left Column - Text Content */}
            <div className="basis-[50%]">
              <div>
                <div className="flex w-full flex-col items-center gap-6 lg:items-start l:gap-8">
                  <h1 className="text-center text-[44px] leading-none tracking-[-0.88px]  antialiased font-founders-grotesk lg:text-left md:text-[56px] md:tracking-[-1.12px] lg:text-[64px] lg:leading-[90%] lg:tracking-[-1.28px] lg:text-[72px] lg:tracking-[-1.44px] xl:text-[80px] xl:tracking-[-1.6px]">
                    Meet your AI <br className="hidden lg-s:block" />
                    outbound engine
                  </h1>
                  <div className="max-w-[100%] text-center text-[16px] leading-[130%] text-body antialiased font-abc-diatype md:max-w-[272px] lg:max-w-[368px] lg:text-left lg:max-w-[520px] xl:max-w-[706px] xl:text-[18px]">
                    Find and research leads, personalize messaging, and launch
                    campaigns in minutes — not hours. All in Apollo.
                  </div>

                  {/* Sign Up Form */}
                  <div className="flex w-full justify-center lg:justify-start">
                    <div>
                      <div className="flex w-full max-w-xl flex-col gap-6">
                        <div className="flex items-center gap-4 lg:flex-row flex-col">
                          <div className="relative flex w-full max-w-none flex-col">
                            <div className="flex h-[48px] items-center rounded-lg border border-sand-50 bg-white px-3 hover:border-sand-70 focus-within:border-black hover:focus-within:border-black">
                              <input
                                placeholder="Enter email"
                                className="w-full bg-transparent text-[16px] leading-none leading-[130%] text-text-body placeholder-sand-60 focus:outline-none font-abc-diatype"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <Button
                            type="button"
                            onClick={handleSignUp}
                            variant='secondary'
                            className="group h-12 w-full rounded-lg bg-sunbeam-60 px-5 text-nowrap text-black transition-all hover:bg-sunbeam-20 hover:text-black active:bg-sunbeam-70 active:text-black active:ring-0 active:ring-offset-0 focus:bg-sunbeam-60 focus:text-black focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2 disabled:bg-sand-40 disabled:text-black lg:w-auto"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <p className="text-[16px] leading-[130%] text-inherit font-abc-diatype">
                                Sign up for free
                              </p>
                            </div>
                          </Button>
                        </div>

                        {/* Divider */}
                        <div className="flex w-full items-center gap-4">
                          <div className="w-full border-b border-sand-30"></div>
                          <p className="text-center text-[16px] leading-[130%] text-sand-60 antialiased font-abc-diatype xl:text-[18px]">
                            or
                          </p>
                          <div className="w-full border-b border-sand-30"></div>
                        </div>

                        {/* OAuth Buttons */}
                        <div className="flex flex-col gap-4 lg:flex-row">
                          <button
                            id="google-oauth-button"
                            type="button"
                            onClick={handleGoogleSignUp}
                            className="group h-12 grow whitespace-nowrap rounded-lg border border-black bg-transparent px-5 text-black transition-all hover:border-black hover:bg-sand-30 hover:text-black active:border-black active:bg-sand-40 active:text-black focus:border-black focus:text-black disabled:border-sand-60 disabled:bg-transparent disabled:text-sand-60"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <span>
                                {/* <Image
                                  alt="Google logo"
                                  src={}
                                  width={20}
                                  height={20}
                                  className="shrink-0"
                                /> */}
                              </span>
                              <p className="text-[16px] leading-[130%] text-inherit font-abc-diatype">
                                Sign up with Google
                              </p>
                            </div>
                          </button>
                          <button
                            id="microsoft-oauth-button"
                            type="button"
                            onClick={handleMicrosoftSignUp}
                            className="group h-12 grow whitespace-nowrap rounded-lg border border-black bg-transparent px-5 text-black transition-all hover:border-black hover:bg-sand-30 hover:text-black active:border-black active:bg-sand-40 active:text-black focus:border-black focus:text-black disabled:border-sand-60 disabled:bg-transparent disabled:text-sand-60"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <span>
                                {/* <Image
                                  alt="Microsoft logo"
                                  src={}
                                  width={20}
                                  height={20}
                                  className="min-w-5 shrink-0"
                                /> */}
                              </span>
                              <p className="text-[16px] leading-[130%] text-inherit font-abc-diatype">
                                Sign up with Microsoft
                              </p>
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Terms Text */}
                      <p className="mt-4 text-[14px] leading-[130%] tracking-normal text-sand-60 antialiased font-abc-diatype xl:text-[16px]">
                        By signing up, I agree to Apollo's{' '}
                        <a className="underline" target="_blank" href="/terms">
                          <span>Terms of Service</span>
                        </a>{' '}
                        and{' '}
                        <a
                          className="underline"
                          target="_blank"
                          href="/privacy-policy"
                        >
                          <span>Privacy Policy</span>
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Workflow Image */}
            <div className="relative h-full basis-[50%]">
              <div className="relative flex h-full w-full items-center justify-center max-lg:aspect-[1/1]">
                <Image
                  alt="An example of an outbound workflow in Apollo"
                  src="/assets/image27.webp"
                  width={2160}
                  height={2160}
                  priority
                  className="aspect-[1/1] h-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}