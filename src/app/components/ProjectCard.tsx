"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function ProjectCard({
  img,
  title,
  tags,
  aspectClass,
}: {
  img: string;
  title: string;
  tags: string[];
  aspectClass: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  const onEnter = useCallback(() => {
    gsap.killTweensOf([imgRef.current, titleRef.current, arrowRef.current]);
    gsap.to(imgRef.current, {
      scale: 1.05,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(titleRef.current, {
      x: 8,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(arrowRef.current, {
      x: 6,
      y: -6,
      rotation: 0,
      duration: 0.4,
      ease: "power2.out",
    });
    if (tagsRef.current) {
      gsap.to(tagsRef.current.children, {
        y: -4,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      });
    }
  }, []);

  const onLeave = useCallback(() => {
    gsap.killTweensOf([imgRef.current, titleRef.current, arrowRef.current]);
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(titleRef.current, {
      x: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
    gsap.to(arrowRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
    if (tagsRef.current) {
      gsap.to(tagsRef.current.children, {
        y: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-col gap-2.5 cursor-pointer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Image with tags */}
      <div className={`relative w-full ${aspectClass} overflow-hidden`}>
        <Image
          ref={imgRef}
          src={img}
          alt={title}
          fill
          className="object-cover will-change-transform"
        />
        <div ref={tagsRef} className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-white/30 rounded-3xl px-2 py-1 text-sm font-medium text-[#111] tracking-[-0.56px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Title + arrow */}
      <div className="flex items-center justify-between">
        <h3
          ref={titleRef}
          className="text-2xl md:text-4xl font-black uppercase text-black tracking-[-0.04em] leading-[1.1] will-change-transform"
        >
          {title}
        </h3>
        <div ref={arrowRef} className="w-8 h-8 -rotate-90 will-change-transform">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7235 16.0531L11.1704 8.5L8.5 11.1704L16.053 18.7235H10.2263V22.5H22.5V10.2262H18.7235V16.0531Z" fill="black"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
