import LogoGrid from "../productComponents/LogoGrid";
import Image from "next/image";
import { motion } from "framer-motion";
export default function CompaniesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative  overflow-hidden rounded-xl mt-10"
    >
      <div className="bg-background">
        <div className="px-5 md:px-7 lg:px-9 xl:px-16">
          <div className="flex flex-col gap-16 pt-12 md:gap-20 md:pt-16 lg:gap-24 lg:pt-20">
            {/* Companies Section */}
            <div className="flex flex-col gap-12 md:gap-16 ">
              <div className="flex flex-col items-center gap-4  lg:flex-row lg:justify-between">
                {/* <p className="text-xs font-mono uppercase tracking-wider text-gray-600">
                  Join over 50,000 developers and financial teams building on
                  LayerX
                </p> */}

                {/* Company Logos Grid */}
                {/* <LogoGrid
                  backgroundColor="#fffff"
                  className=" h-10 filter invert-0 brightness-0"
                /> */}
              </div>

              {/* Testimonial Quote Section */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
                <div className="flex-[2_2_0%]">
                  <h3 className="text-4xl font-medium leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    &quot;LayerX enables us to ship new payment and crypto
                    capabilities in weeks, not months — securely and globally.
                    &quot;
                  </h3>
                </div>
                {/* <div className="flex-1">
                  <div className="max-w-64 pl-3">
                    <div className="flex flex-col items-start">
                      <p className="text-xs font-mono uppercase tracking-wider text-gray-600">
                        Grace Feeney
                      </p>
                      <p className="max-w-48 pb-2 pt-4 text-xs font-mono uppercase tracking-wider text-gray-600">
                        Senior Manager of Sales Development & Operations
                      </p>
                      <Image
                        src="/assets/smartling.svg"
                        width={50}
                        height={50}
                        alt="smart logo"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Stats Cards Section */}
            <div className="flex flex-col justify-between gap-6 md:flex-row pb-16">
              {/* Card 1 */}
              <div className="flex min-h-36 flex-1 flex-col justify-between rounded-lg bg-white p-4 shadow-md md:h-40 lg:h-56 lg:p-6">
                <div className="flex flex-col-reverse justify-between gap-2 lg:flex-row">
                  <p className="text-base text-gray-600 lg:max-w-32">
                    Trusted by modern finance builders
                  </p>
                  {/* <Image
                    src="/assets/smartling.svg"
                    width={50}
                    height={50}
                    alt="smart logo"
                  /> */}
                </div>
                <h1 className="text-5xl font-medium leading-none tracking-tight text-[#3F3653]0 md:text-6xl lg:text-7xl">
                  5x
                </h1>
              </div>

              {/* Card 2 */}
              <div className="flex min-h-36 flex-1 flex-col justify-between rounded-lg bg-white p-4 shadow-md md:h-40 lg:h-56 lg:p-6">
                <div className="flex flex-col-reverse justify-between gap-2 lg:flex-row">
                  <p className="text-base text-gray-600 lg:max-w-32">
                    3x faster time-to-market with unified APIs
                  </p>
                  {/* <Image
                    src="/assets/smartling.svg"
                    width={50}
                    height={50}
                    alt="smart logo"
                  /> */}
                </div>
                <h1 className="text-5xl font-medium leading-none tracking-tight text-[#3F3653]0 md:text-6xl lg:text-7xl">
                  3x
                </h1>
              </div>

              {/* Card 3 */}
              <div className="flex min-h-36 flex-1 flex-col justify-between rounded-lg bg-white p-4 shadow-md md:h-40 lg:h-56 lg:p-6">
                <div className="flex flex-col-reverse justify-between gap-2 lg:flex-row">
                  <p className="text-base text-gray-600 lg:max-w-32">
                    99.99% uptime across fiat and crypto infrastructure
                  </p>
                  {/* <Image
                    src="/assets/smartling.svg"
                    width={50}
                    height={50}
                    alt="smart logo"
                  /> */}
                </div>
                <h1 className="text-5xl font-medium leading-none tracking-tight text-[#3F3653]0 md:text-6xl lg:text-7xl">
                  99.99%{" "}
                </h1>
              </div>
              {/* Card 4 */}
              <div className="flex min-h-36 flex-1 flex-col justify-between rounded-lg bg-white p-4 shadow-md md:h-40 lg:h-56 lg:p-6">
                <div className="flex flex-col-reverse justify-between gap-2 lg:flex-row">
                  <p className="text-base text-gray-600 lg:max-w-32">
                    60% reduction in compliance and operations cost{" "}
                  </p>
                  {/* <Image
                    src="/assets/smartling.svg"
                    width={50}
                    height={50}
                    alt="smart logo"
                  /> */}
                </div>
                <h1 className="text-5xl font-medium leading-none tracking-tight text-[#3F3653]0 md:text-6xl lg:text-7xl">
                  60%{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <picture>
          {/* <source media="(min-width: 1920px)" srcSet="/_next/static/media/spacer-desktop-xl.86ce3881.svg" />
            <source media="(min-width: 1440px)" srcSet="/_next/static/media/spacer-desktop.46124fc4.svg" />
            <source media="(min-width: 1024px)" srcSet="/_next/static/media/spacer-desktop-s.b410a2d8.svg" />
            <source media="(min-width: 768px)" srcSet="/_next/static/media/spacer-tablet.19f89b54.svg" /> */}
          {/* <img
            alt=""
            loading="lazy"
            width="375"
            height="112"
            decoding="async"
            className="w-full"
            src="/assets/spacer-desktop.svg"
          /> */}
        </picture>
      </div>
    </motion.div>
  );
}
