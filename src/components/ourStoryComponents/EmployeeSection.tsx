"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../reusable/Button";
const people = [
  {
    name: "Vince Heaton",
    company: "Apollo Labs",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=66",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
  {
    name: "Sarah Ahmed",
    company: "Zen Studio",
    quote: `I love working at Apollo because of the people; everyone’s not only talented but also kind and great to work with. I’ve had the chance to build things from the ground up, which has been exciting, challenging, and fulfilling. I also really appreciate the flexibility of working remotely while still getting to connect with colleagues in person at offsites.`,
    img: "https://i.pravatar.cc/140?img=47",
  },
];

const Employees = () => {
  return (
    <div>
      <p className="text-[10px] text-dark font-normal text-center  mt-20 mb-8">
        OUR EMPLOYEES
      </p>
      <h4 className=" text-2xl  md:text-4xl lg:text-5xl text-center font-medium text-dark">
        Meet the people building the future of GTM{" "}
      </h4>
      <Staffs />
    </div>
  );
};

export default Employees;

const Staffs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-grotesque">
      <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
        {people.map((p, idx) => (
          <Button
            key={idx}
            onMouseEnter={() => setActive(idx)}
            onFocus={() => setActive(idx)}
            onClick={() => setActive(idx)}
            className={`relative rounded-full outline-none ring-0 transition focus-visible:ring-2 `}
            aria-label={`${p.name} — show quote`}
          >
            <motion.img
              src={p.img}
              alt={p.name}
              className={`h-14 w-14  md:h-26 md:w-26 rounded-full object-cover  ${
                active === idx ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              whileFocus={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            />
          </Button>
        ))}
      </div>

      <div className="relative min-h-[150px] sm:min-h-[120px] text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-base md:text-lg text-center leading-relaxed text-neutral-700">
              {people[active].quote}
            </p>
            <div className="mt-4 text-base lg:text-lg text-[#736f6c] font-medium border-b border-solid border-b-gray-400 pb-6">
              <span className=" ">{people[active].name}</span>
              {", "}
              <span className="">{people[active].company}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
