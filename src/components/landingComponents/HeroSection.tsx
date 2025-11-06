"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
function HeroCard({
  href,
  id,
  title,
  subtitle,
  description,
  buttonText,
  imageSrc,
  bgImageSrc,
  videoSrc,
}: {
  href: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  bgImageSrc: string;
  videoSrc?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const animationFrameRef = useRef<number>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video || !videoSrc) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const animate = () => {
      if (video.readyState >= 2 && isHovering) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const scale = Math.max(
          canvas.width / video.videoWidth,
          canvas.height / video.videoHeight
        );

        const x = (canvas.width - video.videoWidth * scale) / 2;
        const y = (canvas.height - video.videoHeight * scale) / 2;

        ctx.drawImage(
          video,
          x,
          y,
          video.videoWidth * scale,
          video.videoHeight * scale
        );
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovering, videoSrc]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current && videoLoaded) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .catch((err) => console.log("Video play failed:", err));
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link
      href={href}
      id={id}
      aria-label={buttonText}
      className="group/card flex !aspect-auto h-full cursor-pointer flex-col overflow-hidden text-left relative aspect-[10/12] w-full opacity-100 md:aspect-[12/10.5] lg:aspect-[10/10.5] lg:w-1/2 lg:transition-opacity lg:duration-[1500ms] lg:ease-out lg:group-has-[:hover]:opacity-50 lg:hover:!opacity-100 xl:aspect-[11.5/10.5]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {videoSrc && (
        <video
          ref={videoRef}
          className="hidden"
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="pointer-events-none absolute inset-0 z-20 block bg-gradient-to-b from-black/75 via-black/25 to-transparent opacity-100 transition-opacity duration-[350ms] ease-out group-hover/card:opacity-100 lg:block lg:h-[275px] lg:from-black lg:via-black/50 lg:opacity-75" />

      <div className="pointer-events-none bottom-auto z-30 p-4 lg:absolute lg:inset-4 lg:p-0 lg:flex flex-col items-start gap-4">
        <div className="mb-1.5">
          <h2 className="font-sans leading-none text-current mb-1.5 text-[28px] leading-[1.025] tracking-[-0.64px] font-semibold md:text-[30px] md:leading-[1.025] lg:text-[34px] lg:leading-[1.025]">
            {title}
          </h2>
          <div className="mb-3 flex items-center gap-1.5 text-white/80">
            <span className="font-sans leading-none text-current font-semibold">
              {subtitle}
            </span>
          </div>
        </div>

        <div className="w-full pb-6 lg:pb-0">
          <p className="font-sans leading-none text-current relative z-[3] max-w-[400px] leading-tight text-white/80">
            {description}
          </p>
        </div>

        <span className="btn group relative isolate cursor-pointer rounded-md transition-[background,color] ease-out whitespace-nowrap z-[1] lg:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:pointer-events-none disabled:opacity-50 bg-transparent px-3 py-2.5 text-base lg:px-4 top-0 right-0 inline-block border border-white text-white duration-[1500ms] ease-out lg:absolute lg:group-hover/card:bg-white lg:group-hover/card:text-black lg:hover:bg-transparent lg:hover:text-white">
          <span className="absolute inset-0 -z-[1] block w-full rounded-md transition-[background,color] duration-[400ms] ease-out" />
          {buttonText}
        </span>
      </div>

      <div
        className="inset-0 z-10 hidden h-full !w-full !opacity-100 lg:block relative aspect-[10/12] w-full opacity-100 md:aspect-[12/10.5] lg:aspect-[10/10.5] lg:w-1/2 lg:transition-opacity lg:duration-[1500ms] lg:ease-out lg:group-has-[:hover]:opacity-50 lg:hover:!opacity-100 xl:aspect-[11.5/10.5] mt-12"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, transparent 10%, black 35%)",
        }}
      >
        <div className="absolute inset-0 z-10 flex size-full items-end overflow-hidden">
          <div
            className={`pointer-events-none absolute inset-0 z-10 items-end transition-opacity duration-500 ${isHovering && videoSrc
              ? "opacity-0 lg:flex"
              : "opacity-100 lg:flex"
              }`}
          >
            <div className="mx-auto !aspect-auto w-full pr-10 pl-10 lg:pr-0 lg:pl-0">
              <div className="overflow-hidden bg-cover relative block">
                <Image
                  alt={title}
                  src={imageSrc}
                  width={942}
                  height={650}
                  className=" transition-opacity duration-300 ease-out opacity-100"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mx-auto size-full relative z-20">
            <canvas
              ref={canvasRef}
              className={`w-full h-full transition-opacity duration-500 ${isHovering && videoSrc ? "opacity-100" : "opacity-0"
                }`}
              style={{ verticalAlign: "top" }}
            />
          </div>
        </div>
      </div>

      <div className="z-10 mx-auto !aspect-auto lg:hidden w-full max-w-[600px]">
        <div className="overflow-hidden bg-cover relative block">
          <Image
            alt={title}
            src={imageSrc}
            width={942}
            height={650}
            className="w-full transition-opacity duration-300 ease-out opacity-100"
            priority
          />
        </div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="overflow-hidden bg-cover absolute inset-0 size-full">
          <Image
            alt="Background decoration"
            src={bgImageSrc}
            fill
            className="transition-opacity duration-300 ease-out size-full opacity-100 object-cover object-bottom origin-center"
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
          />
        </div>
      </div>

      <div className="absolute inset-0 z-[1] bg-black/35" />
    </Link>
  );
}

export default function HeroSection() {
  return (
    <section className="my-auto overflow-hidden md:flex-col pt-[70px] mx-auto w-full max-w-[1920px] px-3 md:px-4">
      <header className="relative flex items-center justify-center text-center py-12 xl:py-16 xl:min-[1360px]:py-24">
        <h1 className="font-sans text-current text-[42px] leading-[1.025] tracking-[-0.8px] font-semibold text-balance md:text-[35px] lg:text-[45px] xl:text-5xl">
          Layer X is a digital assets payment and infrastructure company
        </h1>
      </header>

      <main className="group relative flex flex-wrap gap-4 lg:flex-1 lg:flex-nowrap">
        <HeroCard
          href="/home"
          id="hero-card-suite"
          title="For Businesses & Institutions"
          subtitle="Digital Assets Infrastructure Company"
          description="TX offers institutional-grade digital asset custody and wallet infrastructure.
It enables businesses, developers, and financial institutions to build crypto apps, manage millions of wallets, and automate operations securely."
          buttonText="Explore TX Business"
          imageSrc="/assets/main2.png"
          bgImageSrc="/assets/suite-card-bg.webp"
          videoSrc="/videos/suite-prototype.mp4"
        />
        <HeroCard
          href="/contact/waitlist"
          id="hero-card-fin"
          title="TX Switch"
          subtitle="Digital Assets Payment Company"
          description="TX helps people use, send, and receive digital assets effortlessly.
It’s like having a Stripe + Wallet + Exchange in one, giving users access to crypto payments, wallets, and real-time asset management."
          buttonText="Explore TX Switch"
          imageSrc="/assets/mobile-Individual.png"
          bgImageSrc="/assets/fin-card-bg.webp"
          videoSrc="/videos/fin-prototype.mp4"
        />
      </main>
    </section>
  );
}
