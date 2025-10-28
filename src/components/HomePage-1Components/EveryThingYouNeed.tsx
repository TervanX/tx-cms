"use client";
import ApolloScrollTabs from "./TabbedSection";

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
    href: "#outbound",
    logo: "/assets/pipeline_builder_icon.e6b3fd21.svg",
    title: "Outbound",
    description: "Book more meetings faster with better data, smarter AI, and easier automation."
  },
  {
    id: "2",
    href: "#inbound",
    logo: "/assets/pipeline_builder_icon.e6b3fd21.svg",
    title: "Inbound",
    description: "Capture, qualify, and route every lead instantly so hot leads never go cold."
  },
  {
    id: "3",
    href: "#enrichment",
    logo: "/assets/pipeline_builder_icon.e6b3fd21.svg",
    title: "Data Enrichment",
    description: "Cleanse and complete your records with always-fresh data that powers smarter targeting."
  },
  {
    id: "4",
    href: "#deal",
    logo: "/assets/pipeline_builder_icon.e6b3fd21.svg",
    title: "Deal Execution",
    description: "Keep deals moving with AI-powered prep, meeting insights, and follow-up."
  }
];

const CardShowcase: React.FC = () => {
  return (
    <div className="relative py-2 lg:py-12 z-40 bg-white overflow-x-hidden">
      <div className="bg-white my-16 lg:my-28 px-4 lg:px-0 lg:w-1/2 mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-dark text-center mb-4 sm:mb-2">
          Everything you need,
          from finding leads to winning deals
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl px-2 sm:px-0">
          Powered by Apollo Data — one of the largest, most accurate business data networks on the planet.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2 bg-white relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
          {cards.map((card) => (
            <a
              href={card.href}
              key={card.id}
              className="w-full relative block"
            >
              <div className="group flex flex-col overflow-hidden rounded-lg py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#f7f5f2] transition-all hover:bg-[#f0ede8] min-h-[200px] sm:min-h-[220px] lg:h-[250px]">
                <div className="flex flex-col items-center gap-3 sm:gap-4 h-full justify-center">
                  <div className="flex items-center justify-center">
                    <img
                      src={card.logo}
                      alt={card.title}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-center">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-black text-center leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <ApolloScrollTabs />
    </div>
  );
};

export default CardShowcase;