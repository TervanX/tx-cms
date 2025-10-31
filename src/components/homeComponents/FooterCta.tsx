import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <div className="flex justify-center mx-0">
      <div className="w-full max-w-[1872px]">
        <div className="h-0"></div>
        <div className="mt-3 overflow-hidden rounded-t-xl ">
          <div className="relative" style={{ backgroundColor: "#D1ECFF" }}>
            <div className="px-5 md:px-7 lg:px-9 xl:px-[54px] 2xl:px-[72px]">
              <div className="flex w-full md:gap-6 justify-between">
                {/* Left Content Section */}
                <div className="w-full md:max-xl:w-1/2">
                  <div className="h-20"></div>

                  <div
                    className="relative z-10 flex flex-col justify-between gap-6 md:gap-20 md:max-xl:min-h-0"
                    style={{ minHeight: "calc(90vh - 80px - 80px)" }}
                  >
                    {/* Heading */}
                    <h3 className="text-[40px] tracking-[-0.8px] leading-none md:text-[48px] md:tracking-[-0.96px] lg:text-[56px] lg:tracking-[-1.12px] xl:text-[64px] xl:tracking-[-1.28px] 2xl:text-[72px] 2xl:tracking-[-1.44px] font-medium text-gray-900 xl:max-w-[521px] 2xl:max-w-[559px]">
                      The best financial infrastructure platform — at an
                      (almost) unbelievable value
                    </h3>

                    {/* Mobile Image */}
                    <div className="relative aspect-square w-full md:hidden">
                      <Image
                        alt="Apollo CTA illustration"
                        src="https://res.cloudinary.com/dx1etzf66/image/upload/v1761889002/footer-cta_ankskg.svg"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Description and CTA Buttons */}
                    <div className="flex flex-col gap-8 md:max-w-[273px] lg:max-w-[368px] xl:max-w-[413px]">
                      <p className="text-[16px] leading-[130%] 2xl:text-[18px] text-gray-700">
                        You don’t need to spend a fortune to build a world-class
                        financial ecosystem. LayerX replaces multiple providers
                        — Stripe, Fireblocks, Alchemy, Chainalysis, and more —
                        into one powerful, compliant layer.
                      </p>

                      <div className="flex flex-col gap-4 md:flex-row">
                        <Link
                          href="/pricing"
                          className="w-full whitespace-nowrap md:w-fit"
                        >
                          <button
                            type="button"
                            className="w-full md:w-fit group rounded-lg transition-all h-12 px-5 bg-black text-white disabled:bg-gray-300 hover:bg-gray-800 active:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <p className="text-[16px] leading-[130%]">
                                See pricing
                              </p>
                            </div>
                          </button>
                        </Link>

                        <Link
                          href="/contact/request-access"
                          className="w-full whitespace-nowrap md:w-fit"
                        >
                          <button
                            type="button"
                            className="w-full md:w-fit group rounded-lg transition-all h-12 px-5 bg-transparent border border-black text-black disabled:bg-transparent disabled:border-gray-400 disabled:text-gray-400 hover:bg-gray-200 hover:border-black hover:text-black active:bg-gray-300 active:border-black active:text-black focus:border-black focus:text-black"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <p className="text-[16px] leading-[130%]">
                                Get started for free
                              </p>
                            </div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="h-20"></div>
                </div>

                {/* Tablet Image (Right Side) */}
                <div className="relative hidden aspect-square w-1/2 items-center justify-center md:max-xl:flex">
                  <div className="relative aspect-square w-full">
                    <Image
                      alt="Apollo CTA illustration"
                      src="https://res.cloudinary.com/dx1etzf66/image/upload/v1761889002/footer-cta_ankskg.svg"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Large Image (Absolutely Positioned) */}
              <div className="absolute top-1/2 hidden aspect-square overflow-hidden rounded-lg max-2xl:-translate-y-1/2 xl:right-[130px] xl:block xl:h-3/4 xl:right-[170px] 2xl:top-10 2xl:h-[calc(100%-80px)]">
                <Image
                  alt="Apollo CTA illustration"
                  src="https://res.cloudinary.com/dx1etzf66/image/upload/v1761889002/footer-cta_ankskg.svg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0"></div>
      </div>
    </div>
  );
}
