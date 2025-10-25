"use client";

interface CardProps {
  id: string;
  logo: string;
  title: string;
  description: string;
  href: string;
}


const cards: CardProps[] = [
  {
    id: "1",
    href: "#outbound-tab",
    logo: "/assets/pipeline_builder_icon.e6b3fd21.svg",
    title: "Outbound",
    description: "Book more meetings faster with better data, smarter AI, and easier automation."
  },
  {
    id: "2",
    href: "#inbound-tab",
    logo: "/assets/pipeline_builder_icon.e6b3fd21.svg",
    title: "Inbound",
    description: "Capture, qualify, and route every lead instantly so hot leads never go cold."
  },
  {
    id: "3",
    href: "#data-enrichment-tab",
    logo: "/assets/pipeline_builder_icon.e6b3fd21.svg",
    title: "Data Enrichment",
    description: "Cleanse and complete your records with always-fresh data that powers smarter targeting."
  },
  {
    id: "4",
    href: "#deal-execution-tab",
    logo: "/assets/pipeline_builder_icon.e6b3fd21.svg",
    title: "Deal Execution",
    description: "Keep deals moving with AI-powered prep, meeting insights, and follow-up."
  }
];


const CardShowcase: React.FC = () => {
  return (
    <div className="relative py-2 lg:py-12 z-40 bg-white">
      <div className="bg-white my-28 lg:w-1/2 mx-auto">
        <h1 className="text-3xl md:text-5xl  font-medium text-dark text-center mb-2">
          Everything you need,
          from finding leads to winning deals
        </h1>
        <p className="text-center text-lg md:text-xl">Powered by Apollo Data — one of the largest, most accurate business data networks on the planet.</p>
      </div>

      <div className="mx-auto max-w-7xl lg:px-2 bg-white relative">
        <div className="grid lg:grid-cols-4 gap-4 items-center justify-center ">
          {cards.map((card) => (
            <a href={card.href} key={card.id} className="w-full relative ">
              <div className="group flex flex-col overflow-hidden rounded-lg py-10 px-8  bg-[#f7f5f2] transition-all lg:h-[250px]">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center">
                    <img src={card.logo} alt={card.title} className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-medium text-center ">
                    {card.title}
                  </h3>
                  <p className="text-sm font-light text-black text-center ">
                    {card.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardShowcase;