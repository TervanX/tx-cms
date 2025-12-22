import React from "react";

interface DottedLineProps {
  fill?: string;
}
const DottedLine: React.FC<DottedLineProps> = ({ fill }) => {
  const svgBlackDot =
    "data:image/svg+xml;base64," +
    btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        <rect fill="transparent" width="12" height="12"/>
        <circle cx="6" cy="6" r="1.5" fill="${
          fill ? fill : "rgba(249, 250, 251, .5)"
        }"/>
      </svg>
    `);

  return (
    <div
      className="h-[12px] w-full bg-center bg-repeat-x text-gray-50"
      style={{
        backgroundImage: `url(${svgBlackDot})`,
      }}
    ></div>
  );
};

export default DottedLine;
