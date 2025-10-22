import { SectionProps } from "@/app/types/helpdesk.types";
import React from "react";
import Button from "../reusable/Button";
import Tag from "./Tag";

const SubSection: React.FC<SectionProps> = ({
  title,
  description,
  children,
  tag,
  ctaButton,
  alignLeft,
  primaryButton,
}) => {
  return (
    <div className="my-10 font-grotesque">
      <div className="">
        <div
          className={`w-full ${
            alignLeft
              ? "justify-start "
              : "justify-center w-full md:w-[50%] mx-auto"
          } flex flex-col gap-5`}
        >
          {tag && (
            <div className={`${alignLeft ? "text-left" : "text-center"}`}>
              <Tag tag={tag} />
            </div>
          )}

          <h1
            className={`font-grotesque text-2xl lg:text-4xl ${
              alignLeft ? "text-left" : "text-center"
            }`}
          >
            {title}
          </h1>
          <p
            className={`font-grotesque text-xs lg:text-base   ${
              alignLeft ? "text-left" : "text-center"
            } `}
          >
            {description}
          </p>
          {ctaButton}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center pt-4">
            {primaryButton && (
              <a
                href={primaryButton.href}
                className="relative inline-block cursor-pointer text-sm rounded-md font-semibold tracking-tight whitespace-nowrap bg-black text-white  px-4 py-2.5 leading-none overflow-hidden hover:text-black"
              >
                <span className="absolute inset-0 block w-full rounded-md transition-all duration-400 "></span>
                <span className="relative z-10 "> {primaryButton.text}</span>
              </a>
            )}
          </div>
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};
export default SubSection;
