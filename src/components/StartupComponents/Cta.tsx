import Image from 'next/image';
import Button from '../reusable/Button';
import { CtaBannerProps } from '@/app/types/startups.types';
import Link from 'next/link';
export default function CtaBanner({
  buttonHref,
  tagline = "Apollo for startups",
  title = "Are you part of a startup community or backed by a VC?",
  description = "Check if your community is an Apollo partner and unlock your exclusive discount (or join the waitlist!) by applying today.",
  buttonText = "Apply now",
  backgroundImage = "https://res.cloudinary.com/dx1etzf66/image/upload/v1761891715/image14_szlyvm.webp",
  onButtonClick,
}: CtaBannerProps) {
  console.log(backgroundImage);
  return (
    <div className={`px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 my-28`}>
      <div className="container mx-auto px-4">
        <div className="relative flex justify-center px-6 py-20 md:px-20 xl:px-28 overflow-hidden rounded-xl">
          <Image
            alt="Banner background"
            fill
            className="z-0 object-cover"
            src={backgroundImage}
            sizes="100vw"
          />

          <div className="relative z-10 flex flex-col gap-10 items-center text-center">
            <div className="flex flex-col items-center gap-4">
              {tagline && (
                <p className="xl:text-[16px] xl:leading-[120%] lg:text-[16px] lg:leading-[120%] md:text-[16px] md:leading-[120%] text-[14px] leading-[120%] uppercase font-founders-grotesk-mono text-text-body __variable_306ed5">
                  {tagline}
                </p>
              )}
              <h2 className="md:text-[64px] md:tracking-[-1.28px] md:leading-[90%] text-[48px] tracking-[-0.96px] leading-none font-founders-grotesk text-text-header text-center">
                {title}
              </h2>
              <div className="xl:text-[20px] xl:tracking-[-0.2px] xl:leading-[130%] lg:text-[20px] lg:tracking-[-0.2px] lg:leading-[130%] md:text-[20px] md:tracking-[-0.2px] md:leading-[130%] text-[18px] tracking-[-0.18px] leading-[130%] font-abc-diatype text-text-body max-w-4xl whitespace-pre-line pt-6 __variable_7121de">
                {description}
              </div>
              <Link href="/contact/startup">
                <Button
                  variant="primary"
                  size="lg"
                  href={buttonHref}
                  onClick={onButtonClick}
                >
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
