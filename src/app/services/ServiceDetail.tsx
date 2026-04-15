"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function ServiceDetail({
  num,
  title,
  shortDescription,
  longDescription,
  image,
  deliverables,
  reversed,
}: {
  num: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  deliverables: string[];
  reversed?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const onEnter = useCallback(() => {
    gsap.killTweensOf([imgRef.current, titleRef.current]);
    gsap.to(imgRef.current, { scale: 1.05, duration: 0.6, ease: "power2.out" });
    gsap.to(titleRef.current, { x: 10, duration: 0.4, ease: "power2.out" });
  }, []);

  const onLeave = useCallback(() => {
    gsap.killTweensOf([imgRef.current, titleRef.current]);
    gsap.to(imgRef.current, { scale: 1, duration: 0.5, ease: "power2.inOut" });
    gsap.to(titleRef.current, { x: 0, duration: 0.4, ease: "power2.inOut" });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col gap-8 ${reversed ? "md:flex-row-reverse" : "md:flex-row"} md:gap-16 items-start`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 relative aspect-[670/500] overflow-hidden">
        <Image
          ref={imgRef}
          src={image}
          alt={title}
          fill
          className="object-cover will-change-transform"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1]">
          [ {String(num).padStart(2, "0")} ]
        </p>
        <div className="w-full h-px bg-[#1f1f1f]/20" />
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold italic uppercase text-black tracking-[-0.04em] leading-[1.1] will-change-transform"
        >
          {title}
        </h2>
        <p className="text-lg text-[#1f1f1f] leading-[1.5] tracking-[-0.72px]">
          {longDescription || shortDescription}
        </p>

        {/* Deliverables list */}
        {deliverables && deliverables.length > 0 && (
          <div className="flex flex-col gap-3 mt-2">
            <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase leading-[1.1]">
              Deliverables
            </p>
            <div className="flex flex-wrap gap-2">
              {deliverables.map((d) => (
                <span
                  key={d}
                  className="border border-[#1f1f1f]/15 rounded-3xl px-3 py-1.5 text-sm text-[#1f1f1f] tracking-[-0.56px]"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
