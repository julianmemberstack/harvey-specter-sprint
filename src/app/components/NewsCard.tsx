"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function NewsCard({
  img,
  title,
  excerpt,
  className = "",
}: {
  img: string;
  title?: string;
  excerpt?: string;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  const onEnter = useCallback(() => {
    gsap.killTweensOf([imgRef.current, cardRef.current, linkRef.current, arrowRef.current]);
    gsap.to(imgRef.current, {
      scale: 1.05,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(cardRef.current, {
      y: -6,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(linkRef.current, {
      x: 4,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(arrowRef.current, {
      x: 4,
      y: -4,
      duration: 0.35,
      ease: "power2.out",
    });
  }, []);

  const onLeave = useCallback(() => {
    gsap.killTweensOf([imgRef.current, cardRef.current, linkRef.current, arrowRef.current]);
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
    gsap.to(linkRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
    gsap.to(arrowRef.current, {
      x: 0,
      y: 0,
      duration: 0.35,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`shrink-0 w-[300px] md:w-[353px] flex flex-col gap-4 cursor-pointer will-change-transform ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="relative w-full aspect-[353/469] overflow-hidden">
        <Image
          ref={imgRef}
          src={img}
          alt="News"
          fill
          className="object-cover will-change-transform"
        />
      </div>
      {title && (
        <h3 className="text-lg font-bold text-black tracking-[-0.04em] leading-[1.2]">
          {title}
        </h3>
      )}
      <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]">
        {excerpt || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>
      <a
        ref={linkRef}
        href="#"
        className="inline-flex items-center gap-2.5 border-b border-black pb-1 self-start text-sm font-medium text-black tracking-[-0.56px] will-change-transform"
      >
        Read more
        <svg
          ref={arrowRef}
          className="w-[18px] h-[18px] -rotate-90 will-change-transform"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M18.7235 16.0531L11.1704 8.5L8.5 11.1704L16.053 18.7235H10.2263V22.5H22.5V10.2262H18.7235V16.0531Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  );
}
