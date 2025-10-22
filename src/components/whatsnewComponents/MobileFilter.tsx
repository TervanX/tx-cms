import FilterBy from "./FilterBy";

const MobileFilter = () => {
  return (
    <div className="flex items-center justify-start gap-4 py-4 lg:hiddem">
      <button
        className="bg-transparent text-blue-700"
        data-kt-drawer-toggle="#drawer_5"
      >
        Filter
      </button>
      <div
        className="hidden kt-drawer kt-drawer-top card flex-col w-full top-5 end-10 rounded-xl border border-border "
        data-kt-drawer="true"
        id="drawer_5"
        data-kt-drawer-container="body"
      >
        <div className="kt-drawer-content kt-scrollable">
          <FilterBy />
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
