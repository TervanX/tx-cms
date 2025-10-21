"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import Button from "../reusable/Button";
import { VideoHeroProps } from "@/app/types/product.types";

export default function VideoHero({
  thumbnailSrc = "/assets/videoimage.webp",
  videoSrc = "https://www.youtube.com/watch?v=zIfkgC7ZPiQ",
  title = "Play video",
  className = "",
  poster,
}: VideoHeroProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const openBtnRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const getYouTubeEmbed = (url: string): string | null => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=1`
      : null;
  };

  const youtubeEmbed = getYouTubeEmbed(videoSrc);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (youtubeEmbed) {
      setIframeSrc(youtubeEmbed);
    }

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => {
    setOpen(false);
    openBtnRef.current?.focus();

    try {
      videoRef.current?.pause();
    } catch {}

    setIframeSrc(null);
  };

  const handleBackdropMouseDown = (
    e: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <Button
        // ref={openBtnRef}
        type="button"
        onClick={handleOpen}
        aria-label={title}
        className="group relative w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
      >
        <img
          src={thumbnailSrc}
          alt="Video thumbnail"
          className="h-full object-cover  max-w-[90%] lg:max-w-[80%] mx-auto"
        />
      </Button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onMouseDown={handleBackdropMouseDown}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div
            className="relative z-10 w-full max-w-5xl"
            onMouseDown={(e) => e.stopPropagation()} // prevent accidental close inside
          >
            <div className="relative overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
              <Button
                type="button"
                onClick={handleClose}
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dark  hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
                aria-label="Close video"
              >
                <FiX className="h-6 w-6" />
              </Button>

              <div className="relative w-full">
                <div className="aspect-video w-full bg-black">
                  {youtubeEmbed ? (
                    iframeSrc && (
                      <iframe
                        src={iframeSrc}
                        className="h-full w-full"
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )
                  ) : (
                    <video
                      ref={videoRef}
                      className="h-full w-full"
                      controls
                      autoPlay
                      playsInline
                      poster={poster}
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
