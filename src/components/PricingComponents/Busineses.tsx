import React from "react";
import { motion, Variants } from "framer-motion";

const Busineses = () => {
  return (
    <div className="px-4">
      <Header />
      <PeopleShowcase />
    </div>
  );
};

export default Busineses;

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-32">
      <div className="flex-1 ">
        <div className="w-[70%] flex flex-col justify-start gap-4">
          <h1 className="font-grotesk text-[28px] lg:text-[40px] font-medium  text-center lg:text-start leading-13">
            The fastest growing businesses use Apollo
          </h1>
          <p className="font-grotesk text-sm text-black mt-2  text-center lg:text-start w-[90%]">
            Over 500,000 companies use Apollo to stay ahead of the competition.
          </p>
        </div>
      </div>
      <div className="flex-1 flex  items-center justify-end">
        <p className="font-grotesk text-[96px] lg:text-[146px] font-medium text-[#3f3653]  text-center lg:text-start leading-[174px]">
          500K+
        </p>
      </div>
    </div>
  );
};

const people = [
  {
    tag: "SALES  LEADERS",
    name: "Nicole Coetzer",
    role: "Head of Sales Development",
    company: "Kinsta",
    avatar:
      "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
    logoText: "kinsta",
    longCopy:
      "Nicole leads a global SDR organisation, specialising in outbound playbooks, enablement, and pipeline acceleration. She’s scaled teams across EMEA and North America, and mentors rising sales leaders on coaching frameworks and operational excellence.",
  },
  {
    tag: "ACCOUNT  EXECS",
    name: "Diego Cobian",
    role: "Account Executive",
    company: "Arbolus",
    avatar:
      "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
    logoText: "arbolus",
    longCopy:
      "Diego closes complex multi-threaded deals in knowledge marketplaces, combining consultative discovery with crisp ROI storytelling. He’s passionate about comp structure design and running clean MEDDIC.",
  },
  {
    tag: "SDRS",
    name: "Andrew Froning",
    role: "BDR Leader",
    company: "Cyera",
    avatar:
      "https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapollo-next.36e555e7.png&w=640&q=75",
    logoText: "CYERA",
    longCopy:
      "Andrew runs high-velocity BDR motions for cybersecurity and data protection. He focuses on persona targeting, channel experimentation, and modern meeting quality metrics beyond simple set rate.",
  },
];

const overlayVariants: Variants = {
  rest: { height: "0%", transition: { type: "tween", duration: 0.35 } },
  hover: { height: "100%", transition: { type: "tween", duration: 0.45 } },
};

const scrollerVariants: Variants = {
  rest: { y: "20%", opacity: 0 },
  hover: { y: "0%", opacity: 1, transition: { duration: 0.45 } },
};

const fillFromBottomVariants: Variants = {
  rest: { y: "100%" },
  hover: { y: "0%", transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] } },
};

const Card = ({ p, index }: { p: (typeof people)[number]; index: number }) => {
  const isFirst = index === 0;

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative flex flex-col rounded-lg border p-6 "
    >
      <div className="text-xs text-gray-500 mb-6 font-normal font-grotesk">
        {p.tag}
      </div>

      <div className="h-44 w-44 rounded-xl overflow-hidden mb-6">
        <img
          src={p.avatar}
          alt={p.name}
          className="w-[194px] h-auto rounded-md"
        />
      </div>

      <h3 className="text-2xl font-medium mb-1 font-grotesk">{p.name}</h3>
      <p className="text-xs text-gray-500 font-normal font-grotesk">{p.role}</p>
      <p className="text-xs text-gray-500 font-normal font-grotesk">
        @ {p.company}
      </p>

      {/* logo */}
      <motion.div
        variants={overlayVariants}
        className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden rounded-3xl border-t border-zinc-200 bg-white/95 backdrop-blur-sm"
      >
        <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-white/95 to-transparent" />

        <motion.div
          variants={isFirst ? fillFromBottomVariants : scrollerVariants}
          className="max-h-full p-6 pt-8 overflow-y-auto"
        >
          <h4 className="text-sm font-semibold tracking-wider text-zinc-500 mb-2">
            ABOUT
          </h4>
          <p className="text-zinc-700 leading-relaxed">{p.longCopy}</p>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

const PeopleShowcase = () => {
  return (
    <div className="min-h-screen w-full  py-12">
      <div className="mx-auto max-w-6xl px-2">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {people.map((p, i) => (
            <Card key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
