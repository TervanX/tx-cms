"use client";

import Button from "@/components/reusable/Button";
import FilterBy from "@/components/whatsnewComponents/FilterBy";
import MobileFilter from "@/components/whatsnewComponents/MobileFilter";

// import { Button } from "@tervanx/tx-ui-core-v2";

const WhatsNewPage = () => {
  return (
    <div>
      <h3 className="font-bold text-4xl lg:mb-8">What's new in Play Tervanx</h3>

      <div className="flex flex-col lg:flex-row lg:gap-10 pt-10">
        <div className="hidden lg:block lg:w-[400px] ">
          <div
            className="sticky"
            style={{
              top: "5rem",
            }}
          >
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
        <span className="primary rounded-lg py-1 px-3 bg-blue-600 text-white text-sm">
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

export default WhatsNewPage;

const Suggesstion = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-16">
      <button
        className="kt-btn kt-btn-primary rounded-full bg-blue-600 hover:bg-blue-700"
        data-kt-drawer-toggle="#drawer_4"
      >
        Suggesstion
      </button>

      <div
        className="hidden kt-drawer kt-drawer-end card flex-col max-w-[90%] w-[450px] top-5 bottom-5 end-5 rounded-xl border border-border "
        data-kt-drawer="true"
        id="drawer_4"
        data-kt-drawer-container="body"
      >
        <div
          className="flex items-center justify-between gap-2.5 text-lg text-mono font-semibold px-5 py-2.5 border-b border-b-border"
          id="notifications_header"
        >
          Suggessted Update
          <button
            className="kt-btn  kt-btn-sm kt-btn-icon kt-btn-dim shrink-0"
            data-kt-drawer-dismiss="true"
          >
            <i className="ki-filled ki-cross"></i>
          </button>
        </div>
        <div className="kt-drawer-content kt-scrollable">
          <textarea
            className="kt-textarea"
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
