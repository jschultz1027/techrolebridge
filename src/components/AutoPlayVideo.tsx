"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  label: string;
  className?: string;
};

export function AutoPlayVideo({ src, label, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    void video.play().catch(() => undefined);
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      muted
      loop
      playsInline
      autoPlay
      aria-label={label}
    />
  );
}
