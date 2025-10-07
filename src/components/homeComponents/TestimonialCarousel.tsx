"use client";
import { useState, useEffect } from "react";
import DottedLine from "./DottedLine";
interface Testimonial {
  company: string;
  quote: string;
  author: string;
  title: string;
  bgColor: string;
  fontStyle: string;
}

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      company: "Mebit.com",
      quote:
        "The biggest benefit of Intercom is that it has everything you need to create a great experience for your customers and your support team. Literally, anything you need, you can find in the platform. My advice to anyone considering Intercom is to just do it. You won't regret it.",
      author: "Milan Jovancevic",
      title: "Director of Operations",
      bgColor: "bg-pink-100",
      fontStyle: "font-serif text-4xl",
    },
    {
      company: "Rebag",
      quote:
        "Intercom has enhanced our communications tech stack and opened up more channels that we can use to communicate with our customers, like chat, SMS, and email. The benefit of using Intercom side by side with other point solutions is that it gives you both live insight, when customers are on our website, and offline insight, when they leave and we need to re-engage them at a later stage.",
      author: "Geronimo Chala",
      title: "Chief Consumer Officer",
      bgColor: "bg-orange-200",
      fontStyle: "font-mono text-2xl",
    },
    {
      company: "Godtlevert",
      quote:
        "To continue to win awards for our customer service, we need to have a system that helps us offer our customers the fastest possible response times. With Intercom, we have almost all of our support channels integrated into one system, making it easy for us to manage our support, as well as conduct analysis so we can take a data-driven approach to continuously improving our service.",
      author: "Oda Wilhelmsen",
      title: "Nordic Customer Service Manager",
      bgColor: "bg-teal-200",
      fontStyle: "font-serif text-3xl",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  const getDisplayOrder = () => {
    const order = [];
    for (let i = 0; i < testimonials.length; i++) {
      const displayIndex = (activeIndex + i) % testimonials.length;
      order.push({
        testimonial: testimonials[displayIndex],
        originalIndex: displayIndex,
        stackPosition: i,
      });
    }
    return order;
  };

  const displayOrder = getDisplayOrder();

  return (
    <div>
      <DottedLine />

      <div className="mx-auto px-3 max-w-[1000px] lg:w-[80%] lg:max-w-[1492px]  w-full flex flex-col justify-center items-center gap-4 md:gap-6 my-20 font-grotesque">
        <h2
          className="scroll-mt-6 text-4xl md:text-5xl font-medium text-center"
          id="effortless-omnichannel-support"
        >
          Effortless omnichannel support
        </h2>

        <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6 pb-6">
          {/* Navigation Buttons */}
          <div className="max-w-full w-auto mb-2">
            <div className="flex items-center gap-4 lg:gap-5 my-3 w-full overflow-x-auto scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  className={`relative px-4 py-2 text-sm md:text-base font-medium transition-all whitespace-nowrap ${
                    activeIndex === index
                      ? "text-black"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <span>{testimonial.company}</span>
                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black overflow-hidden">
                      <div
                        className="h-full bg-black animate-[slideRight_10s_linear]"
                        style={{ width: "100%" }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial Cards Stack */}
          <div className="relative w-full" style={{ minHeight: "450px" }}>
            {displayOrder.map(
              ({ testimonial, originalIndex, stackPosition }) => {
                const isActive = stackPosition === 0;

                return (
                  <div
                    key={originalIndex}
                    className={`absolute left-0 right-0 transition-all duration-500 ease-out ${
                      stackPosition < 3
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                    style={{
                      bottom: `${stackPosition * 20}px`,
                      zIndex: 20 - stackPosition,
                      transform: `scale(${1 - stackPosition * 0.02})`,
                      transformOrigin: "top center",
                    }}
                  >
                    <blockquote
                      className={`${testimonial.bgColor} p-6 md:p-8 lg:p-10 flex flex-col justify-between text-center shadow-lg min-h-[400px]`}
                    >
                      <div className="flex text-center flex-col gap-4">
                        <span className={`${testimonial.fontStyle} font-bold`}>
                          {testimonial.company}
                        </span>

                        <p className="text-base md:text-lg leading-relaxed text-gray-800">
                          {testimonial.quote}
                        </p>

                        <div className="border-t border-dotted border-gray-400 pt-4" />
                      </div>

                      <div className="flex flex-col mt-4">
                        <h6 className="font-semibold text-lg">
                          {testimonial.author}
                        </h6>
                        <span className="text-sm text-gray-600">
                          {testimonial.title}
                        </span>
                      </div>
                    </blockquote>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes slideRight {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
}
