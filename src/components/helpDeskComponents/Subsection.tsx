import { SectionProps } from "@/app/types/helpdesk.types";
import React from "react";
import Button from "../reusable/Button";

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
    <div className="my-10 font-grotesque ">
      <div className="">
        <div
          className={`w-full ${
            alignLeft
              ? "justify-start "
              : "justify-center w-full md:w-[50%] mx-auto"
          } flex flex-col gap-5`}
        >
          {tag && (
            <div
              className={`flex ${
                alignLeft ? "justify-start" : "justify-center"
              }  mb-4`}
            >
              <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {tag}
              </div>
            </div>
          )}

          <h1
            className={`font-grotesque text-xl lg:text-3xl font-medium ${
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
              <a href={primaryButton.href} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px] text-base sm:text-lg">
                  {primaryButton.text}
                </Button>
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
