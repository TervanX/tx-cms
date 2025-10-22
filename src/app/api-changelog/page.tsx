"use client";

import Button from "@/components/reusable/Button";
import FilterBy from "@/components/whatsnewComponents/FilterBy";
import MobileFilter from "@/components/whatsnewComponents/MobileFilter";
import { X, MessageSquare } from "lucide-react";

const WhatsNewPage = () => {
  return (
    <div className="container mx-auto pt-[var(--header-height)]">
      <h3 className="font-bold text-4xl lg:mb-8">What's new in Play Tervanx</h3>

      <div className="flex flex-col lg:flex-row lg:gap-10 pt-10">
        <div className="hidden lg:block lg:w-[400px] ">
          <div className="fixed top-[calc(var(--header-height)+2rem)] w-[300px]">
            <FilterBy />
          </div>
        </div>
        <MobileFilter />
        <div className="w-full">
          <div>
            <p className="font-medium pb-4 border-gray-300 border-b">
              June 2024
            </p>
            <div className="flex flex-col gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div>
            <p className="font-medium pb-4 border-gray-300 border-b">
              June 2024
            </p>
            <div className="flex flex-col gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div>
            <p className="font-medium pb-4 border-gray-300 border-b">
              June 2024
            </p>
            <div className="flex flex-col gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-transparent flex items-center justify-end fixed right-0 bottom-4 pr-4 w-full">
        <Suggesstion />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="mt-6 flex flex-col gap-6 mb-6">
      <div>
        <span className="rounded-lg py-1 px-3 bg-blue-600 text-white text-sm">
          Update
        </span>
      </div>
      <h2 className="text-2xl font-medium">
        Generate descriptions of charts with Gemini
      </h2>
      <p className="text-lg">
        Use Gemini on the Statistics page to generate chart descriptions to help
        understand trends and events that might be affecting your metrics. If
        you use a screen reader, this means you have access to reporting in a
        way you haven't had before.
      </p>
      <div>
        <a className="border-gray-300 border-solid border rounded-full px-4 py-2 font-medium cursor-pointer">
          Go to Statistics
        </a>
      </div>
    </div>
  );
};

export default WhatsNewPage;

const Suggesstion = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-16">
      <button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors duration-200 flex items-center gap-2">
        <MessageSquare size={20} />
        Suggesstion
      </button>

      <div className="hidden fixed right-5 top-5 bottom-5 w-[450px] max-w-[90%] bg-white rounded-xl border border-gray-300 shadow-lg flex-col">
        <div className="flex items-center justify-between gap-2.5 text-lg font-semibold px-5 py-2.5 border-b border-gray-300">
          Suggessted Update
          <button className="p-1 rounded hover:bg-gray-100 transition-colors duration-200 shrink-0">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <textarea
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Text input"
            rows={4}
          ></textarea>
          <div className="flex items-center justify-end py-2">
            <Button type="submit" variant="primary" size="md">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


// const FilterBy = () => {
//   return (
//     <div className="border-gray-300 border rounded-xl py-1">
//       <p className="font-medium p-4 border-gray-300 border-b">Filter by</p>
//       <div className="flex-flex-col gap-2">
//         <button className="px-4 py-2 flex items-center justify-between w-full hover:bg-gray-300 cursor-pointer hover:bg-gray-100">
//           <span className="flex items-center justify-start gap-4">
//             <GoRocket />
//             Test and release
//           </span>
//           <LiaTimesSolid />
//         </button>
//         <button className="px-4 py-2 flex items-center justify-between w-full hover:bg-gray-100">
//           <span className="flex items-center justify-start gap-4">
//             <GoRocket />
//             Monitor and improve
//           </span>
//           <LiaTimesSolid />
//         </button>
//         <button className="px-4 py-2 flex items-center justify-between w-full hover:bg-gray-100">
//           <span className="flex items-center justify-start gap-4">
//             <GoRocket />
//             Grow users{" "}
//           </span>
//           <LiaTimesSolid />
//         </button>
//         <button className="px-4 py-2 flex items-center justify-between w-full hover:bg-gray-100">
//           <span className="flex items-center justify-start gap-4">
//             <GoRocket />
//             Monetize with Play{" "}
//           </span>
//           <LiaTimesSolid />
//         </button>
//       </div>
//     </div>
//   );
// };