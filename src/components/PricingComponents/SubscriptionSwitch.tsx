const SubcriptionSwitch = () => {
  const active = true;
  return (
    <div className="inline-block mt-6">
      <div className="rounded-full bg-white border-gray-200 border-solid border flex items-center justify-center p-1 gap-2">
        <button
          className={`relative font-grotesk font-semibold cursor-pointer text-sm  rounded-full px-5 py-3 ${
            active ? "bg-black text-white" : "bg-transparent text-gray-700"
          }`}
        >
          Annual billing
          <span className="absolute left-[50%] translate-x-[-50%] top-10 bg-primary text-white text-xs font-grotesk font-semibold w-[70px] py-1  rounded-lg">
            SAVE 20%
          </span>
        </button>
        <button
          className={`relative font-grotesk font-semibold cursor-pointer text-sm  rounded-full px-5 py-3 hover:bg-black hover:text-white focus:to-black ${
            false ? "bg-black text-white" : "bg-transparent text-gray-500"
          }`}
        >
          Monthly billing
        </button>
      </div>
    </div>
  );
};

export default SubcriptionSwitch;
