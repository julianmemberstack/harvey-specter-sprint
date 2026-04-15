"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NewsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const wrap1Ref = useRef<HTMLDivElement>(null);
  const wrap2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.2,
        onComplete: () => {
          wrap1Ref.current?.classList.remove("overflow-hidden");
          wrap2Ref.current?.classList.remove("overflow-hidden");
        },
      });

      tl.fromTo(labelRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.1);
      tl.fromTo(line1Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.25);
      tl.fromTo(line2Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.4);

      const scrollTl = gsap.timeline({
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.6 },
      });
      scrollTl.to(line1Ref.current, { xPercent: -35, ease: "none" }, 0);
      scrollTl.to(line2Ref.current, { xPercent: 35, ease: "none" }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-end px-4 pb-16 md:px-8 md:pb-24 pt-[120px] bg-white overflow-hidden">
      <div className="flex flex-col gap-6">
        <p ref={labelRef} className="font-[family-name:var(--font-geist-mono)] text-sm uppercase text-[#1f1f1f] leading-[1.1] opacity-0">
          [ updates ]
        </p>
        <div ref={wrap1Ref} className="overflow-hidden">
          <div ref={line1Ref} className="news-page-heading font-medium uppercase text-black tracking-[-0.07em] leading-[0.9] opacity-0">
            News
          </div>
        </div>
        <div ref={wrap2Ref} className="overflow-hidden">
          <div ref={line2Ref} className="news-page-heading font-medium uppercase text-black tracking-[-0.07em] leading-[0.9] md:text-right opacity-0">
            <span className="font-[family-name:var(--font-playfair)] italic font-normal">&</span>{" "}
            Journal
          </div>
        </div>
      </div>
    </section>
  );
}
