"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function ServiceItem({
  num,
  title,
  desc,
  img,
}: {
  num: number;
  title: string;
  desc: string;
  img: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const onEnter = useCallback(() => {
    gsap.killTweensOf([imgRef.current, titleRef.current, lineRef.current]);
    gsap.to(imgRef.current, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(titleRef.current, {
      x: 12,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(lineRef.current, {
      scaleX: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const onLeave = useCallback(() => {
    gsap.killTweensOf([imgRef.current, titleRef.current, lineRef.current]);
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.inOut",
    });
    gsap.to(titleRef.current, {
      x: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
    gsap.to(lineRef.current, {
      scaleX: 0.3,
      opacity: 0.3,
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div
      ref={rowRef}
      className="flex flex-col gap-3 cursor-pointer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Number + line */}
      <p className="font-[family-name:var(--font-geist-mono)] text-sm text-white uppercase leading-[1.1]">
        [ {num} ]
      </p>
      <div
        ref={lineRef}
        className="w-full h-px bg-white origin-left"
        style={{ transform: "scaleX(0.3)", opacity: 0.3 }}
      />

      {/* Content row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        {/* Service title */}
        <h3
          ref={titleRef}
          className="text-4xl font-bold italic uppercase text-white tracking-[-0.04em] leading-[1.1] will-change-transform"
        >
          {title}
        </h3>

        {/* Description + thumbnail */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-start">
          <p className="text-sm text-white leading-[1.3] tracking-[-0.56px] md:w-[393px]">
            {desc}
          </p>
          <div className="relative w-[151px] h-[151px] shrink-0 overflow-hidden">
            <div ref={imgRef} className="w-full h-full will-change-transform">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
