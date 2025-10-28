import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface Testimonial {
  id: number;
  category: string;
  name: string;
  title: string;
  company: string;
  logo: string;
  image: string;
  quote: string;
  stat?: string;
  statLabel?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    category: "",
    name: "Nicole Coetzer",
    title: "Head of Sales Development",
    company: "Kinsta",
    logo: "KINSTA",
    image: "/assets/image29.webp",
    quote:
      "As Kinsta's first Head of Sales Development, Nicole Coetzer was tasked with building outbound sales from scratch. Using Apollo to find the right leads in less time, her growing team hit a consistent 36% connection rate, helping them exceed quota every single month.",
    stat: "36%",
    statLabel: "connection rate",
  },
  {
    id: 2,
    category: "Account Execs",
    name: "Diego Cobian",
    title: "Account Executive",
    company: "Arbolus",
    logo: "arbolus",
    image: "/assets/image29.webp",
    quote:
      "I use Apollo for everything — prospecting, messaging, even the dialer. It's where I spend most of my day, and it has made my workflow so much more efficient.",
  },
  {
    id: 3,
    category: "SDRS",
    name: "Andrew Froning",
    title: "BDR Leader",
    company: "Cyera",
    logo: "CYERA",
    image: "/assets/image29.webp",
    quote:
      "Having Apollo be our all-in-one system was a game changer for the BDRs. The average number of meetings booked increased by 75% once we made the move over to Apollo.",
    stat: "75%",
    statLabel: "more meetings booked",
  },
  {
    id: 4,
    category: "Rev Ops",
    name: "Mark Turner",
    title: "VP of Revenue Operations",
    company: "Built In",
    logo: "built in",
    image: "/assets/image29.webp",
    quote:
      "Apollo enriches everything we have: contacts, leads, accounts. We don't really have to touch it, it just works",
  },
  {
    id: 5,
    category: "Marketers",
    name: "Sylvain Giuliani",
    title: "Head of Growth & Operations",
    company: "Census",
    logo: "Census",
    image: "/assets/image29.webp",
    quote:
      "When Census's data quality issues started to sabotage their sales team, Head of Growth Sylvain Giuliani made a bold move: replacing their entire tech stack with Apollo. This switch set their go-to-market team up for unprecedented growth, with 4x more contact data while cutting platform costs by 64%.",
    stat: "50%",
    statLabel: "better data quality",
  },
  {
    id: 6,
    category: "Founders",
    name: "Collin Stewart",
    title: "CEO",
    company: "Predictable Revenue",
    logo: "PR",
    image: "/assets/image29.webp",
    quote:
      "Predictable Revenue's CEO Collin Stewart was struggling with an expensive, complex tech stack. By switching to Apollo as their all-in-one platform, they cut costs by 50% while doubling email open rates and cutting time to meeting in half.",
    stat: "50%",
    statLabel: "cost savings",
  },
];

export default function ApolloTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const visibleCards = 4;
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < testimonials.length - visibleCards;

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && canScrollLeft) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "right" && canScrollRight) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="overflow-hidden bg-white px-5 py-16 md:px-[calc(100%*1/26)] mb-10">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between mb-16">
        <div className="md:w-[329px] lg:w-[411px] xl:w-[632px]">
          <h5 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[56px] tracking-[-0.32px] sm:tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px] xl:tracking-[-1.12px] leading-none font-medium text-gray-900">
            Powered by the Most Advanced Blockchain Network
          </h5>
          <p className="text-[14px] xl:text-[16px] leading-[130%] text-gray-600 mt-4 sm:mt-8 lg:w-[302px] xl:w-[341px]">
            TervanX runs on a high-performance, multi-chain infrastructure built
            for real-world scale — delivering secure, instant, and low-cost
            transactions across the globe.{" "}
          </p>
        </div>
        <div>
          <h1 className="text-[96px] md:text-[136px] lg:text-[170px] tracking-[-0.96px] sm:tracking-[-1.28px] md:tracking-[-1.44px] lg:tracking-[-1.76px] xl:tracking-[-1.92px] leading-[90%] lg:leading-[174px] xl:leading-[192px] font-medium text-[#3F3653]">
            99.99%{" "}
          </h1>
          <div className="flex items-center justify-end transform -translate-y-5">
            {" "}
            <p className="text-2xl   font-medium text-[#3F3653]">Reliability</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6 sm:gap-7 md:gap-[38px] lg:gap-14 xl:gap-18"
          animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[calc(83.33%)] sm:w-[calc(100%*9/26)] md:w-[calc(100%*8/26)] lg:w-[calc(100%*6/26)] xl:w-[calc(100%*6/26)] max-w-[420px]"
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-[361px] md:h-[390px] lg:h-[444px] xl:h-[462px] w-full overflow-hidden rounded-b-2xl rounded-br-2xl border-b border-r border-gray-300">
                {/* Default Card */}
                <motion.div
                  className="flex h-full flex-col py-6 pl-[1px] relative"
                  animate={{ y: hoveredId === testimonial.id ? "-100%" : "0%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute bottom-0 right-0 -z-10 h-full w-[114px] desktop-s:w-[66%] rounded-br-2xl " />

                  <p className="text-[10px] md:text-[12px] xl:text-[14px] leading-[120%] uppercase text-gray-500 font-mono">
                    {testimonial.category}
                  </p>

                  {/* <Image
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="mt-8 w-[140px] h-[140px] rounded-lg object-cover"
                    width={140}
                    height={140}
                  /> */}

                  <p className="text-[20px] md:text-[24px] xl:text-[28px] leading-[110%] font-medium text-gray-900 mt-4">
                    {testimonial.name}
                  </p>

                  <p className="text-[14px] xl:text-[16px] leading-[130%] mt-1 whitespace-pre-wrap text-gray-500">
                    {testimonial.title}
                    {"\n"}@ {testimonial.company}
                  </p>

                  <div className="absolute bottom-8 left-[1px]">
                    <div className="h-6 text-gray-900 font-medium text-lg">
                      <svg
                        width="83"
                        viewBox="0 0 83 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 21.0754H3.63727V14.4685H10.1214C10.9297 14.4685 11.3339 14.8624 11.3339 15.6502V21.0754H14.9711V16.3792C14.9711 15.1667 14.7588 14.2127 14.3342 13.5144C13.9096 12.8186 13.2241 12.3071 12.2726 11.9848C13.1423 11.5806 13.8073 10.9002 14.2728 9.93849C14.7384 8.97929 14.9686 7.81291 14.9686 6.43934V6.04543H11.3313V6.74117C11.3313 8.25542 10.9988 9.37832 10.3312 10.1048C9.66358 10.8312 8.62253 11.197 7.2106 11.197H3.63471V3.28806H0V21.0754ZM19.5753 4.8637C20.2429 4.8637 20.7877 4.66163 21.2123 4.25749C21.6369 3.85335 21.8492 3.32899 21.8492 2.68185C21.8492 2.03471 21.642 1.51035 21.2276 1.10621C20.8133 0.702071 20.2633 0.5 19.5753 0.5C18.8872 0.5 18.3629 0.702071 17.9382 1.10621C17.5136 1.51035 17.3013 2.03471 17.3013 2.68185C17.3013 3.32899 17.5136 3.85335 17.9382 4.25749C18.3629 4.66163 18.9077 4.8637 19.5753 4.8637ZM78.0914 17.9855H72.3336C71.5253 17.9855 71.1212 17.5916 71.1212 16.8038V10.3196C71.1212 9.53179 71.5253 9.13788 72.3336 9.13788H78.0914C78.8996 9.13788 79.3038 9.53179 79.3038 10.3196V16.8038C79.3038 17.5916 78.8996 17.9855 78.0914 17.9855ZM74.4234 21.5C75.5335 21.5 76.4927 21.3235 77.3035 20.9705C78.1118 20.6175 78.8485 20.0574 79.5161 19.2875V21.0754H82.9411V6.04543H79.5161V7.83337C78.8485 7.06602 78.1118 6.50585 77.3035 6.1503C76.4953 5.79732 75.5361 5.62083 74.4234 5.62083C72.1392 5.62083 70.3615 6.34214 69.0903 7.78733C67.8164 9.23252 67.1821 11.156 67.1821 13.5604C67.1821 15.9648 67.819 17.8883 69.0903 19.3335C70.3641 20.7787 72.1418 21.5 74.4234 21.5ZM63.5141 21.0754H66.6347V17.8627H63.3607C62.5524 17.8627 62.1482 17.4688 62.1482 16.681V9.25554H66.6322V6.04287H62.1482V2.79951H58.8154V4.76906C58.8154 5.61827 58.4112 6.04287 57.6029 6.04287H55.572V9.25554H58.511V16.1643C58.511 17.699 58.9509 18.9012 59.8283 19.7709C60.7082 20.6406 61.9334 21.0728 63.509 21.0728M41.8414 21.0728H48.9932C53.0934 21.0728 55.1448 19.6072 55.1448 16.6784C55.1448 15.3458 54.7458 14.3303 53.9478 13.632C53.1497 12.9363 51.8324 12.4554 49.9933 12.192L46.9622 11.7367C46.0926 11.596 45.5273 11.4476 45.2664 11.2967C45.0029 11.1458 44.8725 10.8772 44.8725 10.4935V10.2199C44.8725 9.8771 44.9646 9.62899 45.1462 9.47808C45.3278 9.32716 45.6398 9.25043 46.0849 9.25043H54.1447V6.03776H47.4789C45.4173 6.03776 43.8621 6.41632 42.8108 7.17345C41.7596 7.93057 41.2352 9.05859 41.2352 10.5524C41.2352 11.8467 41.6445 12.8365 42.463 13.522C43.2815 14.2101 44.6193 14.6935 46.4788 14.9775L49.4178 15.4021C50.0445 15.4839 50.4972 15.5632 50.7811 15.6451C51.0625 15.7269 51.2569 15.8369 51.3566 15.9776C51.4564 16.1183 51.5076 16.3203 51.5076 16.5838V16.8856C51.5076 17.2284 51.4104 17.4765 51.2185 17.6274C51.0267 17.7783 50.7197 17.8551 50.2951 17.8551H41.8414V21.0728ZM24.4173 21.0728H28.0546V10.3145C28.0546 9.52668 28.4587 9.13277 29.267 9.13277H34.5694C35.3777 9.13277 35.7819 9.52668 35.7819 10.3145V21.0728H39.4191V10.8312C39.4191 9.25554 38.8999 7.99196 37.8588 7.043C36.8178 6.09403 35.3291 5.61827 33.3903 5.61827C32.2188 5.61827 31.1521 5.81011 30.1929 6.19379C29.2337 6.57747 28.451 7.12229 27.8448 7.83082V6.04287H24.4199V21.0728H24.4173ZM17.7515 21.0728H21.3888V6.04543H17.7515V21.0754V21.0728Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Hover Card */}
                <motion.div
                  className="absolute left-0 top-0 z-10 flex h-full w-full flex-col rounded-2xl bg-gray-100 p-6"
                  initial={{ y: "100%" }}
                  animate={{ y: hoveredId === testimonial.id ? "0%" : "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <p className="text-[10px] md:text-[12px] xl:text-[14px] leading-[120%] uppercase text-gray-500 font-mono">
                    {testimonial.category}
                  </p>

                  <p className="text-[18px] lg:text-[20px] xl:text-[22px] leading-[110%] font-medium text-gray-900 mt-8">
                    {testimonial.quote}
                  </p>

                  {testimonial.stat && (
                    <div className="mb-2 mt-auto">
                      <h1 className="text-[48px] md:text-[64px] lg:text-[64px] xl:text-[72px] tracking-[-0.96px] md:tracking-[-1.28px] lg:tracking-[-1.44px]  xl:tracking-[-1.92px] leading-[90%] font-medium text-gray-900">
                        {testimonial.stat}
                      </h1>
                      <p className="text-[14px] desktop-xl:text-[16px] leading-[130%] mt-1 text-gray-500">
                        {testimonial.statLabel}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="mt-8 desktop:mt-16 flex w-full justify-end">
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="group rounded-lg transition-all bg-transparent border border-black text-black disabled:bg-transparent disabled:border-gray-400 disabled:text-gray-400 hover:bg-gray-200 hover:border-black hover:text-black active:bg-gray-300 active:border-black active:text-black focus:border-black focus:text-black inline-flex h-[35px] w-[35px] items-center justify-center p-0 disabled:cursor-not-allowed"
            >
              <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
                <path
                  d="M12.027 3.52704L8.00479 7.54927C6.49981 9.05275 7.56583 11.6252 9.69341 11.6252L21.5692 11.6208V12.3673L9.69042 12.3718C7.56434 12.3718 6.49831 14.9443 8.00329 16.4477L12.0285 20.473L11.5 21L2.49997 12L11.5 3L12.0285 3.52704H12.027Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="group rounded-lg transition-all bg-transparent border border-black text-black disabled:bg-transparent disabled:border-gray-400 disabled:text-gray-400 hover:bg-gray-200 hover:border-black hover:text-black active:bg-gray-300 active:border-black active:text-black focus:border-black focus:text-black inline-flex h-[35px] w-[35px] items-center justify-center p-0 disabled:cursor-not-allowed"
            >
              <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
                <path
                  d="M12.0421 3.52704L16.0644 7.54927C17.5693 9.05275 16.5033 11.6252 14.3757 11.6252L2.5 11.6208V12.3673L14.3787 12.3718C16.5048 12.3718 17.5708 14.9443 16.0659 16.4477L12.0406 20.473L12.5692 21L21.5692 12L12.5692 3L12.0406 3.52704H12.0421Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
