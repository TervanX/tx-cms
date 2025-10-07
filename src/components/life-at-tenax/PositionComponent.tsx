import Button from "../reusable/Button";
const PositionSection = () => {
  return (
    <div className="bg-yellow1 lg:h-screen rounded-lg flex flex-col lg:flex-row justify-between gap-8 py-8 px-6 lg:p-14 my-8">
      <div className="flex flex-col items-start justify-between w-full lg:w-1/3">
        <h1 className="text-3xl md:text-4xl lg:text-4xl text-start font-medium text-dark font-grotesque">
          Think you'd thrive here? We'd love to hear from you.
        </h1>
        <div>
          <p className="mt-4">
            We're growing fast and looking for people who want to do the best
            work of their careers. Apply today and help us shape the future of
            go-to-market.
          </p>
          <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-900  font-medium px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px] text-base sm:text-lg mt-8 ">
            See all open positions
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-2/6 flex items-center">
        <img
          src="https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclosing-cta.126587d2.jpg&w=3840&q=75"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default PositionSection;
