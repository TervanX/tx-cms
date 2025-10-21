const OurStoryHero = () => {
  return (
    <div className="py-4 flex flex-col gap-8">
      <div className="w-full md:w-2/3 lg:w-2/4 mx-auto flex flex-col gap-8">
        <h1 className="font-grotesque text-3xl lg:text-5xl font-medium text-center">
          Our story (so far)
        </h1>
        <p className="font-grotesque text-xs lg:text-base  text-center">
          From humble beginnings to $150M in ARR, Apollo’s journey has been
          defined by big bets, fast growth, and a team that’s all in. Learn more
          about our journey, values, and the people behind Apollo.
        </p>
      </div>
      <div className="">
        <img
          src="https://www.apollo.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-story-hero.69e4c637.jpg&w=1080&q=75"
          className="w-full h-auto rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurStoryHero;
