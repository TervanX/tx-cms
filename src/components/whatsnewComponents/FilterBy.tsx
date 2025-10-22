"use client";
import { LiaTimesSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";

const FilterBy = () => {
  // Filter options array
  const filterOptions = [
    {
      id: 1,
      label: "Test and release",
      icon: <GoRocket />,
    },
    {
      id: 2,
      label: "Monitor and improve",
      icon: <GoRocket />,
    },
    {
      id: 3,
      label: "Grow users",
      icon: <GoRocket />,
    },
    {
      id: 4,
      label: "Monetize with Play",
      icon: <GoRocket />,
    },
  ];

  return (
    <div className="lg:border-gray-300 border rounded-xl py-1">
      <p className="font-medium p-4 border-gray-300 border-b hidden lg:block">
        Filter by
      </p>
      <p className="font-semibold p-4 border-gray-300 border-b block lg:hidden">
        Filter
      </p>
      <div className="flex-flex-col gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            className="px-4 py-2 flex items-center justify-between w-full hover:bg-gray-100 cursor-pointer"
          >
            <span className="flex items-center justify-start gap-4">
              {option.icon}
              {option.label}
            </span>
            <LiaTimesSolid />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBy;
