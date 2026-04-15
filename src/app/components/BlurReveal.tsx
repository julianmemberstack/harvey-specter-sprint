"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlurReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const blur = blurRef.current;
    if (!wrap || !blur) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        blur,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "75% center",
            scrub: 0.5,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {children}
      <div
        ref={blurRef}
        className="absolute inset-0 z-10 pointer-events-none backdrop-blur-xl"
      />
    </div>
  );
}
