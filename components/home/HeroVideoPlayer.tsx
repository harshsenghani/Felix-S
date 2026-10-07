"use client";

import React, { useRef, useEffect } from "react";

export default function HeroVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Retry playing on user interaction fallback if browser blocked
          const handleUserGesture = () => {
            video.play();
            document.removeEventListener("click", handleUserGesture);
            document.removeEventListener("touchstart", handleUserGesture);
          };
          document.addEventListener("click", handleUserGesture);
          document.addEventListener("touchstart", handleUserGesture);
        });
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950">
      {/* H.264 & WEBM HIGH-PERFORMANCE OPERATING MACHINERY VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => {
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play().catch(() => {});
          }
        }}
        className="w-full h-full object-cover object-center brightness-110 contrast-105 pointer-events-none"
      >
        <source src="/videos/hero-production-line.mp4" type="video/mp4" />
        <source src="/videos/hero-production-line.webm" type="video/webm" />
      </video>
    </div>
  );
}
