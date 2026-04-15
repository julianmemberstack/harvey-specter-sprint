"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function NewsArticleCard({
  img,
  title,
  excerpt,
  date,
  reversed,
}: {
  img: string;
  title: string;
  excerpt: string;
  date: string;
  reversed?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const onEnter = useCallback(() => {
    gsap.killTweensOf([imgRef.current, titleRef.current]);
    gsap.to(imgRef.current, { scale: 1.05, duration: 0.6, ease: "power2.out" });
    gsap.to(titleRef.current, { x: 8, duration: 0.4, ease: "power2.out" });
  }, []);

  const onLeave = useCallback(() => {
    gsap.killTweensOf([imgRef.current, titleRef.current]);
    gsap.to(imgRef.current, { scale: 1, duration: 0.5, ease: "power2.inOut" });
    gsap.to(titleRef.current, { x: 0, duration: 0.4, ease: "power2.inOut" });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col gap-8 cursor-pointer ${reversed ? "md:flex-row-reverse" : "md:flex-row"} md:gap-16 items-start`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="w-full md:w-1/2 relative aspect-[353/469] overflow-hidden">
        <Image
          ref={imgRef}
          src={img}
          alt={title}
          fill
          className="object-cover will-change-transform"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:py-8">
        <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase leading-[1.1]">
          {date}
        </p>
        <div className="w-full h-px bg-[#1f1f1f]/15" />
        <h2
          ref={titleRef}
          className="text-2xl md:text-4xl font-bold italic uppercase text-black tracking-[-0.04em] leading-[1.1] will-change-transform"
        >
          {title}
        </h2>
        <p className="text-base text-[#1f1f1f] leading-[1.5] tracking-[-0.56px]">
          {excerpt}
        </p>
        <span className="inline-flex items-center gap-2.5 border-b border-black pb-1 self-start text-sm font-medium text-black tracking-[-0.56px]">
          Read more
          <svg className="w-[18px] h-[18px] -rotate-90" viewBox="0 0 32 32" fill="none">
            <path d="M18.7235 16.0531L11.1704 8.5L8.5 11.1704L16.053 18.7235H10.2263V22.5H22.5V10.2262H18.7235V16.0531Z" fill="black" />
          </svg>
        </span>
      </div>
    </div>
  );
}
