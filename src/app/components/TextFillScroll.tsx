"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextFillScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find all elements with data-fill-word attribute
    const words = container.querySelectorAll<HTMLElement>("[data-fill-word]");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      // Set initial state — all words start dim
      gsap.set(words, { color: "rgba(0, 0, 0, 0.15)" });

      // Animate each word to full black, scrubbed to scroll
      gsap.to(words, {
        color: "rgba(0, 0, 0, 1)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 0.5,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
