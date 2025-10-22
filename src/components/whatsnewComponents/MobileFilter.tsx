import { useState } from "react";
import FilterBy from "./FilterBy";

const MobileFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex items-center justify-start gap-4 py-4 lg:hidden">
      <button
        className="bg-transparent text-blue-700 hover:text-blue-800 transition-colors duration-200"
        onClick={() => setIsFilterOpen(true)}
      >
        Filter
      </button>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-4">
          <div className="bg-white rounded-xl border border-gray-300 shadow-lg w-full max-w-md mx-4 max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <h3 className="text-lg font-semibold">Filter By</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto p-4">
              <FilterBy />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilter;