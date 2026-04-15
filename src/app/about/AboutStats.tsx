"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 8, suffix: "+", label: "Years in industry" },
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 45, suffix: "", label: "Clients worldwide" },
  { value: 12, suffix: "", label: "Awards & features" },
];

export default function AboutStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = numberRefs.current[i];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stat.suffix;
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
    >
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex flex-col gap-3">
          <span
            ref={(el) => { numberRefs.current[i] = el; }}
            className="text-[64px] md:text-[96px] font-light text-white tracking-[-0.06em] leading-[0.9]"
          >
            0{stat.suffix}
          </span>
          <div className="w-full h-px bg-white/20" />
          <p className="font-[family-name:var(--font-geist-mono)] text-sm text-white/60 uppercase leading-[1.1]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
