"use client";
import { FaCheck } from "react-icons/fa6";
import React, { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../reusable/Button";

const ComparePlan = () => {
  return (
    <div className="bg-white mt-8 rounded mb-8 px-8">
      <h2 className="font-grotesk text-[20px] lg:text-[36px] font-normal  text-center lg:text-start px-8 pt-24 pb-4">
        Compare plans
      </h2>
      <CollapsibleTable />
      <CollapsibleTable />
      <CollapsibleTable showButtonRow />
    </div>
  );
};

export default ComparePlan;

interface CollapsibleTableProps {
  showButtonRow?: boolean;
}
const CollapsibleTable: React.FC<CollapsibleTableProps> = ({
  showButtonRow,
}) => {
  const [openRows, setOpenRows] = useState<number[]>([]);

  const toggleRow = (rowIndex: number) => {
    setOpenRows((prev) =>
      prev.includes(rowIndex)
        ? prev.filter((i) => i !== rowIndex)
        : [...prev, rowIndex]
    );
  };

  const rows = [
    {
      id: 1,
      name: "AI Power Ups (Research Intelligence)",
      free: "1 credit per run",
      basic: "1 credit per run",
      professioner: "1 credit per run",
      organization: "1 credit per run",
      details: [],
    },
    {
      id: 2,
      name: "Chrome Extension",
      free: "1 credit per run",
      basic: "1 credit per run",
      professioner: "1 credit per run",
      organization: "1 credit per run",
      details: [
        {
          name: "Email",
          free: "1",
          basic: "1",
          professioner: "1",
          organization: "1",
        },
      ],
    },
    {
      id: 3,
      name: "Meetings",
      free: (
        <div className="flex items-center justify-center">
          <FaCheck size={20} />
        </div>
      ),
      basic: (
        <div className="flex items-center justify-center">
          <FaCheck size={20} />
        </div>
      ),
      professioner: (
        <div className="flex items-center justify-center">
          <FaCheck size={20} />
        </div>
      ),
      organization: (
        <div className="flex items-center justify-center">
          <FaCheck size={20} />
        </div>
      ),
      details: [
        {
          name: "Email",
          free: "1",
          basic: "1",
          professioner: "1",
          organization: "1",
        },
      ],
    },
  ];

  return (
    <div className="overflow-x-auto p-6 font-grotesk ">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border-t border-b py-4 text-left">
              <div className="flex items-center gap-2 px-4">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#c5ddff]">
                  <FaArrowTrendUp />
                </span>
                <h4 className="text-[22px] font-normal">Execution</h4>
              </div>
            </th>
            <th className="border-t border-b text-center py-4 font-normal font-grotesk">
              FREE
            </th>
            <th className="border-t border-b text-center py-4 font-normal font-grotesk">
              BASIC
            </th>
            <th className="border-t border-b text-center py-4 font-normal font-grotesk">
              PROFESSIONER
            </th>
            <th className="border-t border-b text-center py-4 font-normal font-grotesk">
              ORGANIZATION
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <React.Fragment key={row.id}>
              {/* Parent Row */}
              <tr
                className={`cursor-pointer ${
                  idx % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f7f5f2]"
                }`}
                onClick={() => toggleRow(idx)}
              >
                <td
                  className={`py-4 px-4 text-lg font-normal text-[#1a1a1a] ${
                    row.details.length > 0 &&
                    "border-l-2 border-black border-solid"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {row.name}
                    {row.details.length > 0 && (
                      <>
                        {openRows.includes(idx) ? (
                          <IoIosArrowUp className="ml-2" size={12} />
                        ) : (
                          <IoIosArrowDown className="ml-2" size={12} />
                        )}
                      </>
                    )}
                  </div>
                </td>
                <td className="py-4 text-center">{row.free}</td>
                <td className="py-4 text-center">{row.basic}</td>
                <td className="py-4 text-center">{row.professioner}</td>
                <td className="py-4 text-center">{row.organization}</td>
              </tr>

              {/* Child Rows */}
              {openRows.includes(idx) &&
                row.details.map((detail, detailIdx) => (
                  <tr
                    key={detailIdx}
                    className={`${
                      detailIdx % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f7f5f2]"
                    }`}
                  >
                    <td className="py-4 px-2 text-base font-normal text-[#1a1a1a] border-l-2 border-[#9c73ff]">
                      {detail.name}
                    </td>
                    <td className="py-4 text-center">{detail.free}</td>
                    <td className="py-4 text-center">{detail.basic}</td>
                    <td className="py-4 text-center">{detail.professioner}</td>
                    <td className="py-4 text-center">{detail.organization}</td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
          {showButtonRow && (
            <tr className={`cursor-pointer bg-[#ffffff]`}>
              <td className={`py-4 px-4 text-lg font-normal text-[#1a1a1a] `}>
                <div className="flex items-center gap-1"></div>
              </td>
              <td className="py-4 text-center">
                {" "}
                <Button
                  size="lg"
                  variant="primary"
                  type="button"
                  onClick={() => {}}
                  children={"Get started"}
                />
              </td>
              <td className="py-4 text-center">
                {" "}
                <Button
                  size="lg"
                  variant="primary"
                  type="button"
                  onClick={() => {}}
                  children={"Buy now"}
                />
              </td>
              <td className="py-4 text-center">
                <Button
                  size="lg"
                  variant="primary"
                  type="button"
                  onClick={() => {}}
                  children={"Buy now"}
                />
              </td>
              <td className="py-4 text-center">
                <Button
                  size="lg"
                  variant="primary"
                  type="button"
                  onClick={() => {}}
                  children={"Buy now"}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
