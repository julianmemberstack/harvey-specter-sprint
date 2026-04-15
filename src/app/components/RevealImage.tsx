"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RevealImage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const overlay = overlayRef.current;
    if (!wrap || !overlay) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlay,
        { scaleX: 1 },
        {
          scaleX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top 85%",
            end: "top 25%",
            scrub: 0.5,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-[-2px]">
        {children}
      </div>
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 pointer-events-none origin-right bg-black"
      />
    </div>
  );
}
