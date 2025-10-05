import Button from "../reusable/Button";
import { TestimonialProps } from "@/app/types/startups.types";

const TestimonialCard: React.FC<TestimonialProps> = ({
    company,
    logo,
    title,
    quote,
    author,
    authorRole,
    authorImage,
    link
}) => {

    return (

        <div className="flex flex-col gap-4">
            <div className="flex h-16 items-center gap-4">
                <img src={logo} className="relative flex h-14 items-center rounded w-14" />
            </div>
            <div className="flex h-full flex-col gap-4">
                <p className="font-founders-grotesk text-[24px] leading-none text-dark md:text-[24px] lg:text-[24px] xl:text-[32px]">
                    {title}
                </p>
                <p className="font-abc-diatype text-[16px] leading-[130%] text-gray-700">
                    "{quote}"
                </p>
            </div>
            <div className="mt-5 flex flex-col justify-start gap-5 md:flex-row md:items-center md:justify-between lg:flex-col lg:items-start lg:justify-start">
                <div className="flex-grow-0">
                    <div className="flex items-center gap-4">
                        <img src={authorImage} className="h-14 w-14 rounded-lg bg-gray-200" />
                        <div className="flex flex-col gap-0.5">
                            <p className="font-abc-diatype text-[14px] font-bold leading-[130%] text-gray-700">
                                {author}
                            </p>
                            <p className="font-abc-diatype text-[14px] leading-[130%] text-gray-700">
                                {authorRole}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex  flex-col lg:items-center gap-5 items-start">
                    <Button variant="outline" size="md"  >
                        Read customer story →
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Testimonial: React.FC = () => {
    const testimonials: TestimonialProps[] = [
        {
            id: 1,
            company: "Paraform",
            logo: "/assets/paraform.svg",
            title: "How to win your startup its first 100 customers",
            quote: "Apollo makes it easy to target our ICP. You can find, for example, a high-intent head of talent that started their job within the last 6 months.",
            author: "John Kim",
            authorRole: "Founder at Paraform",
            authorImage: "/assets/image11.webp",
            link: ""
        },
         {
            id: 2,
            company: "Huntr",
            logo: "/assets/huntr.svg",
            title: "How Huntr.co doubled revenue and cracked B2C partnerships",
            quote: "Apollo makes it so smooth and easy to do everything all in one place — building lists, importing and exporting data, sorting into specific cohorts, and A/B testing our messaging.",
            author: "Sam Wright",
            authorRole: "Head of Operations at Huntr.co",
            authorImage: "/assets/image12.webp",
            link: ""
        },
         {
            id: 3,
            company: "lfdm",
            logo: "/assets/lfdm.svg",
            title: "How to find, engage, and deliver to clients at scale",
            quote: "I never recommend a tool I don’t trust,” Howard says, “For me, Apollo, is my insurance…For my clients, [I recommend] Apollo as their primary method for generating revenue streams.",
            author: "Howard Lee",
            authorRole: "Founder at LFDM Marketing",
            authorImage: "/assets/image13.webp",
            link: ""
        }
    ]
    return (<section className="px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 my-20">
          <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center md:gap-6">
            <h4 className="max-w-6xl text-balance font-founders-grotesk text-[36px] leading-none tracking-[-0.72px] text-dark md:text-[48px] md:tracking-[-0.96px]">
                See why startups love Apollo
            </h4>
            <div className="max-w-2xl text-balance font-abc-diatype text-[16px] leading-[130%] text-gray-700">
                Check out how other teams save time & money with the easiest all-in-one sales platform.
            </div>
        </div>
        <div className="h-10" />
        <div className="grid gap-x-6 gap-y-10 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
        </div>
    </section>
    )
}

export default Testimonial;