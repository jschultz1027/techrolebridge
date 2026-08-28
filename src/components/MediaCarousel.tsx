"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

type Slide =
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
    }
  | {
      type: "video";
      src: string;
      alt: string;
      caption: string;
    };

const slides: Slide[] = [
  {
    type: "image",
    src: "/carousel/man-dev.jpg",
    alt: "Young man developer working at a laptop",
    caption: "From junior to senior — talent across US & LATAM markets.",
  },
  {
    type: "video",
    src: "/carousel/intro.mp4",
    alt: "TechRoleBridge introduction video",
    caption: "Meet the bridge between talent and opportunity.",
  },
  {
    type: "image",
    src: "/carousel/team-3w2m.jpg",
    alt: "Three women and two men collaborating around laptops in a modern office",
    caption: "A sharp young team — three women, two men, building together.",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/8873360/8873360-hd_1280_720_25fps.mp4",
    alt: "Young woman working at her laptop",
    caption: "Builders who ship — focused, skilled, ready for the next role.",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3141207/3141207-hd_1280_720_25fps.mp4",
    alt: "Engineer collaborating in a modern workspace",
    caption: "Remote-ready talent for modern product teams.",
  },
  {
    type: "image",
    src: "/carousel/dev-3.jpg",
    alt: "Engineers collaborating over a laptop",
    caption: "Strong communicators who thrive in collaborative teams.",
  },
];

export function MediaCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const active = slides[index];

  useEffect(() => {
    if (paused) return;
    if (active.type === "video") return;

    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [active.type, index, paused]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || active.type !== "video") return;

    video.currentTime = 0;
    void video.play().catch(() => undefined);

    const onEnded = () => {
      setIndex((current) => (current + 1) % slides.length);
    };

    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, [active, index]);

  function go(delta: number) {
    setIndex((current) => (current + delta + slides.length) % slides.length);
  }

  return (
    <section
      className="relative overflow-hidden border-b border-line bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured engineers media carousel"
    >
      <div className="relative min-h-[min(78svh,720px)] w-full">
        {active.type === "image" ? (
          <Image
            src={active.src}
            alt={active.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : (
          <video
            key={active.src}
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={active.src}
            muted
            playsInline
            autoPlay
            aria-label={active.alt}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        <div className="container-page relative flex min-h-[min(78svh,720px)] flex-col justify-end pb-10 pt-16 md:justify-center md:pb-16 md:pt-20">
          <div className="max-w-2xl text-white">
            <p className="reveal text-sm font-medium text-white/70">
              {site.name}
            </p>
            <h1 className="reveal reveal-delay-1 display mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hire engineering talent
              <br className="hidden sm:block" /> without the search
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              TechRoleBridge connects developers with current roles and helps
              companies hire across US and LATAM.
            </p>
            <div className="reveal reveal-delay-3 mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[0.6rem] bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
              >
                Hire talent
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[0.6rem] border border-white/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Find roles
              </Link>
            </div>
            <p className="mt-8 max-w-md text-sm text-white/75 md:text-base">
              {active.caption}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {slides.map((slide, slideIndex) => (
                <button
                  key={`${slide.type}-${slide.src}`}
                  type="button"
                  aria-label={`Go to slide ${slideIndex + 1}`}
                  onClick={() => setIndex(slideIndex)}
                  className={`h-1.5 rounded-full transition ${
                    slideIndex === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-black/25 text-white backdrop-blur transition hover:bg-black/45"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-black/25 text-white backdrop-blur transition hover:bg-black/45"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
