"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const wrap1Ref = useRef<HTMLDivElement>(null);
  const wrap2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({
        delay: 0.2,
        onComplete: () => {
          wrap1Ref.current?.classList.remove("overflow-hidden");
          wrap2Ref.current?.classList.remove("overflow-hidden");
        },
      });

      tl.fromTo(
        imgRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
        0
      );

      tl.fromTo(
        labelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        0.3
      );

      tl.fromTo(
        line1Ref.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.4
      );

      tl.fromTo(
        line2Ref.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.55
      );

      // Scroll parallax — image zooms, text splits
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      scrollTl.to(imgRef.current, { scale: 1.2, ease: "none" }, 0);
      scrollTl.to(line1Ref.current, { xPercent: -50, ease: "none" }, 0);
      scrollTl.to(line2Ref.current, { xPercent: 50, ease: "none" }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div ref={imgRef} className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Harvey Specter"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end px-4 pb-16 md:px-8 md:pb-24 pt-[72px]">
        <div className="flex flex-col gap-3">
          <p
            ref={labelRef}
            className="font-[family-name:var(--font-geist-mono)] text-sm uppercase text-white mix-blend-overlay leading-[1.1]"
          >
            [ about harvey ]
          </p>
          <div ref={wrap1Ref} className="overflow-hidden">
            <div
              ref={line1Ref}
              className="about-hero-heading font-medium uppercase text-white mix-blend-overlay tracking-[-0.07em] leading-[0.9]"
            >
              The man
            </div>
          </div>
          <div ref={wrap2Ref} className="overflow-hidden">
            <div
              ref={line2Ref}
              className="about-hero-heading font-medium uppercase text-white mix-blend-overlay tracking-[-0.07em] leading-[0.9] md:text-right"
            >
              behind the lens
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
