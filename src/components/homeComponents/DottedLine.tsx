import React from "react";

const DottedLine = () => {
  const svgBlackDot =
    "data:image/svg+xml;base64," +
    btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        <rect fill="transparent" width="12" height="12"/>
        <circle cx="6" cy="6" r="1.5" fill="#0000de3"/>
      </svg>
    `);

  return (
    <div
      className="h-[12px] w-full bg-center bg-repeat-x"
      style={{
        backgroundImage: `url(${svgBlackDot})`,
      }}
    ></div>
  );
};

export default DottedLine;